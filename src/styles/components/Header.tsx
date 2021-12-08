import styled from "styled-components"
import { BaseBox } from './BaseBox';

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

const Container = styled.nav`
    width:100vw;
    background-color:${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    box-shadow:0px -0.583932px 6.56065px rgb(69 69 69 / 3%), 0px -1.47681px 16.5924px rgb(69 69 69 / 5%), 0px -3.01255px 33.8469px rgb(69 69 69 / 6%), 0px -6.20528px 69.7181px rgb(69 69 69 / 8%), 0px -17px 191px rgb(69 69 69 / 11%);

    .conteinerSuperior{
      display:flex;
      height:80px;
      justify-content: space-between;
      align-self: center;
      
      .image{
        height:36px;
        
      }
      .conteinerLogo{
        display:flex;
        align-self: center;
      }
      .conteinerBusca{
        display: flex;
        flex: 1;
        max-width: 592px;
        margin-left: 48px;
        margin-right: 16px;
        align-items: center;
        justify-content:center;
        .pesquisar{
          background: #fff;
          border: 1px solid #d8d9da;
          box-sizing: border-box;
          border-radius: 4px;
          width: 100%;
          display: flex;
          height: 48px;
          .inputPesquisa{
            width:100%;
            text-indent: 0.5rem; 
          }
        }
      }
      .conteinerNav{
        font-size:75%;
        width:386px;
        display:flex;
        align-items:center;
        font-weight: bold;
        justify-content: space-around;
        cursor: pointer;

        .minhaConta{
          margin-left: 32px;
          display:flex;

        }
        .ajuda{
          margin-left: 32px;
        }
        .carrinho{
          margin-left: 32px;
        }
      }
    }

    hr{
      border: 1px solid #ebeced;
    }

    .conteinerInferior{
      display:flex;
      height:80px;
      justify-content: space-between;
      align-self: center;

      .conteinerDepartamentos{
        list-style:none;
        font-size:105%;
        color:#454443;
        font-weight:600;
        display:flex;
        align-items:center;
        height:100%;
        
        .menuList{
          margin-left:10px;
          margin-right: 48px;
          position:relative;
          padding:30px 0px;
        
          :hover > .submenu{
            display:block;
          }
          
        }
        .submenu{
          width:215px;
          display:none;
          list-style:none;
          position:absolute;
          padding: 32px 0 16px;
          border-radius: 4px;
          flex-direction: column;
          overflow-y: auto;
          background-color:${props => props.theme.colors.background};
          box-shadow:  0px -0.583932px 6.56065px rgb(69 69 69 / 3%), 0px -1.47681px 16.5924px rgb(69 69 69 / 5%), 0px -3.01255px 33.8469px rgb(69 69 69 / 6%), 0px -6.20528px 69.7181px rgb(69 69 69 / 8%), 0px -17px 191px rgb(69 69 69 / 11%);

          span{
            color:#9e9d9b;
            font-size:80%;
            padding: 8px 24px;
          }

          .itensSubmenu{
            display:flex;
            font-weight:400;
            display: flex;
            align-items: center;
            padding: 8px 24px;
            cursor: pointer;

            :hover{
              color:#ff9f1a;
            }

            .icone{
              height:24px;
              margin-right: 8px;

            }
          }
        }
        .menu{
          margin-right: 48px;
          cursor: pointer;
          :hover{
            color:#ff9f1a;
          }
        }
      }
      .conteinerLoja{
        display:flex;
        align-items:center;
        


        .lojaSelecionada{
        display:flex;
        align-items:center;
        justify-content:center;
        width:270px;
        background-color:#ebeced;
        height:40px;
        font-weight:600;
        font-size:90%;
        }
        .trocaLoja{
          color:#ff9f1a;
          text-decoration:underline;
          font-size: 12px;
          margin-left: 16px;
          cursor: pointer;
        }
      }
      
    }
`



const Header  = ( props: ListaDepartamentosProps ) => {
  const listagem = props.List

  const listagemDepartamentos = listagem.filter( departamento => {
    return departamento.groupid === 1 ? true : false
  })

  const listagemSegundoMenuCompleta = listagem.filter( departamento => {
    return departamento.groupid === 3 ? true : false
  })

  const todosDepartamentos = listagemSegundoMenuCompleta.shift()

  const itensSegundoMenu = listagemSegundoMenuCompleta.map(item =>  
  <a href={item.url} >
    <li className='menu'>
      {item.name}
    </li> 
  </a>)
 
  const itensSubItens = listagemDepartamentos.map(item => 
    <a href={item.url}>
      <li className='itensSubmenu'> 
        <img className='icone' src={item.icon_image} />
        {item.name} 
      </li>
    </a>
  )
  


  return (
    <Container>
       <BaseBox className='conteinerSuperior'>
        <div className='conteinerLogo'>
          <img className='image' src="https://d8vlg9z1oftyc.cloudfront.net/multicoisashomolog/multicoisashomolog-file-manager/ICONS/logo-multicoisas-2x.png" />
        </div>
        <form className='conteinerBusca'>
          <div className='pesquisar'>
            <input className='inputPesquisa' type="text" placeholder="O que você precisa?"/>
          </div>  
        </form>
        <div className='conteinerNav'>
          <a href='https://www.multicoisas.com.br/customer/profile'>
            <div className='minhaConta'>
              Minha conta
            </div>
          </a>
          <a href='https://www.multicoisas.com.br/ajuda'>
            <div className='ajuda'>
              Ajuda
            </div>
          </a>
          <div className='carrinho'>
            Meu Carrinho
          </div>
        </div>
       </BaseBox>
       <hr />
       <BaseBox className='conteinerInferior'>
        <div>
          <ul className='conteinerDepartamentos'>
            <li className='menuList'>
              Todos os Departamentos
              <div className='submenu'>
                <span>DEPARTAMENTOS</span>
                {itensSubItens}
              </div>
            </li>
            {itensSegundoMenu}
          </ul>
          
        </div>
        <div className='conteinerLoja'>
          <div className='lojaSelecionada'>
            <p>Rua Maracaju - Loja 019</p>
          </div>  
          <a href="https://www.multicoisas.com.br/?blo=s">
            <div className='trocaLoja'>
              Trocar loja
            </div>
          </a>
        </div>
       </BaseBox>
    </Container>
  )
};

export default Header
