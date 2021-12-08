import styled from "styled-components"
import { BaseBox } from './BaseBox';




const Container = styled.div`
  .conteinerInformacoes{
  position: relative;
  display: flex;
  background-color:${props => props.theme.colors.background};
  top:-46px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 688px;
  padding: 24px 32px 24px 0;
  box-shadow: 0px 2.76726px 2.21381px rgb(160 160 160 / 2%), 0px 6.6501px 5.32008px rgb(160 160 160 / 3%), 0px 12.5216px 10.0172px rgb(160 160 160 / 4%), 0px 22.3363px 17.869px rgb(160 160 160 / 4%), 0px 41.7776px 33.4221px rgb(160 160 160 / 5%), 0px 100px 80px rgb(160 160 160 / 7%);
    .infos{
        color:#858482;
        font-size:90%;
        font-weight:bold;
        margin-left:24px; 
    }
  }
  
`



const Informativo  = ( ) => {
  
  return (
    <Container>
      <div className='conteinerInformacoes'> 
        <div className='infos'>Receba em Casa</div>
        <div className='infos'>Retire na loja física</div>
        <div className='infos'>Suporte de venda</div>
        <div className='infos'>Pagamento facilitado</div>
        <div className='infos'>Entrega em até 1 dia útil</div>
      </div>
    </Container>
  )
};

export default Informativo
