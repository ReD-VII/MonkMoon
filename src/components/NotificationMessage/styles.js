import styled from "styled-components";



export const Conteiner = styled.div`

    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;


    width: auto;
    height: 50px;
    background: #181a1f;
    margin: auto;
    left: 10px;
    /* bottom: 20px; */
    padding: 5px 20px;
    
    border-radius: 4px;
    

    box-shadow: 0 4px 12px rgba(0, 0, 0, .1);

    animation: msgStartEfect ease .5s forwards;
    transform-origin: left center;

    text-align: center;

    opacity: 0;
    overflow: hidden;
    cursor: pointer;

    &&::after{
        content: '';
        position: absolute;
        width: 50%;
        border-radius: 100%;
        animation: ripple 0.6s linear infinite;
    }
    &&::before{
        content: '';
        position: absolute;
        width: 50%;
        right: 0%;
        border-radius: 100%;
        animation: ripple 0.6s linear infinite;
    }











    @keyframes msgStartEfect {
        0%{
          opacity: 0;
        }   
        50%{
            
        }   
        100%{
            opacity: .8;
        }   
    }


    @keyframes ripple {
        0% {
            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.1), 0 0 0 20px rgba(255, 0, 0, 0.1), 0 0 0 40px rgba(255, 0, 0, 0.1), 0 0 0 60px rgba(255, 0, 0, 0.1);
        }

        100% {
            box-shadow: 0 0 0 20px rgba(255, 0, 0, 0.1), 0 0 0 40px rgba(255, 0, 0, 0.1), 0 0 0 60px rgba(255, 0, 0, 0.1), 0 0 0 80px rgba(255, 255, 255, 0);
        }
    }















    @media screen and (max-width: 767px) {

        margin: auto;
        left: 20px;
        right: 20px;
        top: 20%;
        border-radius: 4px;



        @keyframes msgStartEfect {
            0%{
            /* transform: scaleX(0) ; */
            opacity: 0;
            }   
            50%{
                
            }   
            100%{
                /* transform: scaleX(1) ; */
                opacity: 1;
            }   
        }




    }
    

`