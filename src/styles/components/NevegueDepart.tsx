import { useRef } from 'react'
import styled from "styled-components"
import { BaseBox } from './BaseBox'


interface ListaDepartamentosProps {
  List: ListaDeparamentos[];
}

interface ListaDeparamentos {
  id: number;
  groupid: number;
  name: string;
  url?: string;
  icon_image?:string;
}

const Container = styled.div`
    width:100vw;
    background-color:${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    .title{
        text-align: center;
        font-weight: 600;
        font-size:120%;
    }
    .conteinerCarroussel{
        max-width:1250px;
        margin:0 auto;
        display:flex;

        .botao{
            margin:auto auto;
            height:20px;
            
            :hover{
                opacity:0.8;
            }
        }
        .carroussel{
        margin:0 auto;
        max-width:1200px;
        padding:1rem;
        display:flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        --webkit-overflow-scrolling:touch;

            ::-webkit-scrollbar{ 
                display:none
            }
       
            .departamento{
                padding-left: 25px;
                scroll-snap-align: start;
                .boxImage{
                    max-width: 106px;
                    max-height: 106px;
                    height:106px;
                    width: 106px;
                    min-width: 64px;
                    min-height: 64px;
                    background-color:#f5f5f7;
                    padding: 16px;
                    border-radius: 4px;
                    
                    :hover{
                        background-color:#dbdbdf;
                    }
                    :hover + .text{
                        text-decoration:underline;
                        
                    }
                }
                .text{
                    text-align:center;

                    :hover + .boxImage{
                        background-color:#dbdbdf;
                    }
                    :hover{
                        text-decoration:underline;
                        
                    }
                }
            }
            

            
        }
    }
    
    
    
`



const NavegueDepart  = ( props: ListaDepartamentosProps ) => {
    const caroussel = useRef(null)

    const handleLeftClick = () =>{
        caroussel.current.scrollLeft -= caroussel.current.offsetWidth

    }
    const handleRigthClick = () =>{
        caroussel.current.scrollLeft += caroussel.current.offsetWidth
    }

    const departamentosLista = props.List.filter(departamento => {
        return departamento.groupid === 1 ? true : false
      })

    const departamentosComponte = departamentosLista.map(departamento => 
        <div className='departamento'>
            <a href={departamento.url}>
            <div className='boxImage'>
                <img src={departamento.icon_image} />
            </div>
            <div className='text'>
                <p>{departamento.name}</p>
            </div>
            </a>
        </div>
        
    )

  return (
    <Container>
        <h1 className='title'>Navegue por departamento</h1>
        <div className='conteinerCarroussel'>
            <button onClick={handleLeftClick} className='botao'>
                <img src='https://i.ibb.co/sjpWBXp/2.png' alt='setaEsquerda'/>
            </button>
            <div className='carroussel' ref={caroussel}>
                {departamentosComponte}
                
            </div>
            <button onClick={handleRigthClick} className='botao'>
                <img src='https://i.ibb.co/WGHD8pH/1.png' alt='setaDireita'/>
            </button>
        </div>
    </Container>
  )
};

export default NavegueDepart
