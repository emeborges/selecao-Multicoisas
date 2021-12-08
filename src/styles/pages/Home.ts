import styled from "styled-components"

export const Container = styled.div`
    width:100%;
    height:100%;
    
    

    .initial{
        max-width:100vw;
    }
    .background{
        flex-direction:column;
        height:70vh;
        position:relative;
    }
    .imagemFundo{
        height:100%;
        width:100%;
        object-fit:cover;
        flex:none;
        position:absolute;
    }
    .primeira{
        animation: fadeIn 5s alternate infinite ease-in-out;
    }
    .boxInicio{
        margin:0 auto;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:center;
        width:60%;
        min-width: 320px;
        
    }
    .logo{
        width:60%;
        min-width: 320px;
        
    }
    .boxCards{
        margin:1rem 0rem;
        width:100%;
        height:3rem;
        justify-content:space-around;
        
    }

    .card{
        margin:5px 0px 0px 0px;
        width:23%;
        height:100%;
        background-color: ${props => props.theme.colors.alert};
        text-align:center;
        justify-content:center;
        align-items:center;
        color: #fdfdfd;
        cursor: pointer;
        :hover{
            background-color:#242424;
            color: #fdfdfd;
        }
    }





    @media (max-width:500px){
        .logo{
            min-width:100%
        }
        .boxCards{
            flex-wrap:wrap;
        }
        .card{
            min-width:8rem;
        }

    }
   


    @keyframes fadeIn {
    0% {opacity:1;}
    100% {opacity:0;}
    }

    

`