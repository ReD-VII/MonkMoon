import styled from "styled-components";



export const Conteiner = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    .logo{
        position: absolute;
        margin: auto;
        top: 30%;
        left: 0;
        right: 0;
        
        width: 280px;
        height: auto;
    }

    .button_conteiner{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 170px;
        height: 40px;
        margin: auto;
        bottom: 10%;
        /* background: red; */
        

        border: 1px solid #fff;
        border-radius: 4px;

        
        .button{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            /* background: red; */
            color: white;
            margin: auto;


            /* text-align: center; */
            text-decoration: none;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
        }   
    }

  
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`