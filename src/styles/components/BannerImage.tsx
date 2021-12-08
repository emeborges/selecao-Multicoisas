import styled from "styled-components"
import { BaseBox } from './BaseBox';
import Link from 'next/link'

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
   
    
`



const ImageBox  = ( props: ListaDepartamentosProps ) => {
  
  const imagens = props.List.map(imagem => <img src={imagem.icon_image} /> )
    
  return (
    <Container>
        <BaseBox>
            {imagens}
        </BaseBox>
    </Container>
  )
};

export default ImageBox
