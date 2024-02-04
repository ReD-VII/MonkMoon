import styled from "styled-components";



export const SignInStyleContent = styled.div`

    width: 100%;
    height: auto;
    /* background: white; */


    .logo_conteiner{
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 40px;
        margin-bottom: 10px;
        
        
        background: transparent;
        




        img{
            width: 180px;
            margin: auto;
        }
    }


    h3{

        font-weight: 600;
        text-align: center;
    }






    .form_conteiner{
        display: flex;
        flex-direction: column;

        width: 400px;
        height: auto;
        margin: auto;
        margin-top: 10px;
        border: 1px solid orange;
        background: rgb(37,39,47);
        background: -moz-linear-gradient(306deg, rgba(37,39,47,1) 0%, rgba(28,30,36,1) 100%);
        background: -webkit-linear-gradient(306deg, rgba(37,39,47,1) 0%, rgba(28,30,36,1) 100%);
        background: linear-gradient(306deg, rgba(37,39,47,1) 0%, rgba(28,30,36,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25272f",endColorstr="#1c1e24",GradientType=1);
        border-radius: 10px;

        padding: 20px 5px;

        animation: mudarCorDaBorda 4s ease infinite;








        label{
            display: flex;
            flex-direction: column;

            width: 70%;
            height: calc(auto / 6) ;
            margin: auto;
            margin-bottom: 10px;
            /* background: red; */

            font-size: .9em;

            input{
                width: 100%;
                height: 35px;
                margin: 2px 0px;

                padding: 0 7px;

                background: #0a0b0e !important; 
                border: 2px solid transparent;
                border-radius: 6px;

                color: white;
            }
            input:not(:placeholder-shown) {
                background-color: #14151a !important; /* Sua cor de fundo desejada */
            }
            input:focus {
                border: 2px solid orange !important; /* Cor da borda ao estar em foco */
                -webkit-border: 2px solid orange !important; /* Prefixo para o Chrome */
                outline: none; /* Remove a borda de foco padrão do navegador */
            }
            
            .conteiner_checkbox{
                margin-left: 4px;
            }
            .checkbox{
                width: 15px;
                margin-left: 10px;
            }

        }
        .conteiner_checkbox{
            flex-direction: row;
            align-items: center;

            .checkbox{
                width: 15px;
            }        
        }

        button{
            width: 70%;
            height: 40px;
            margin: auto;
            background: orange;
            border-radius: 6px;
            border: none;

            color: #fff;
            font-family: sans-serif;
            font-weight: 600;
            font-family: 'Open Sans', sans-serif;
            letter-spacing: 2px;
            transition: all 1s;
        }
        .activeLoad{
            background: #d47800;
        }

    
 
    }


        
    .create_acc{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: auto;
        margin-top: 20px;
        /* background: red; */
        text-align: center;
        .link_create_acc{
            margin-left: 20px;
            text-decoration: none;
            color: white;
            font-weight: 800;
        }




    
    }
    

    .form_msg_information{
        display: flex;
        align-items: center;
        justify-content:center ;
        position: absolute;
        width: 300px;
        height: auto;
        margin: auto;
        margin-top: 10px;
        left: 0;
        right: 0;
        padding: 8px  8px;
        background: #000;
 
        border-radius: 6px;


        p{
            text-align: center;
            /* line-height: 60px; */
            color: #fff;
        }
  
    }


    @keyframes mudarCorDaBorda {
        0% { border-color: #fff; }
        50% { border-color: orange; }
        100% { border-color: #fff; }
    }
    @keyframes nanoEfectMsg {
        0% { 
            border-color: #fff; 
        }
        50% { 
            border-color: orange; 
        }
        100% { 
            border-color: #fff; 
        }
    }







    @media screen and (max-width: 767px) {
        
        .logo_conteiner{

            /* background: red; */
            margin-top: 40px;
            margin-bottom: 40px;
            img{

            }
        }
        h3{
            font-weight: 600;
            text-align: center;
            margin-bottom: 10px;
        }

        .form_conteiner{
            width: 100%;
            height: auto;
            border: none;
            padding: 30px 10px;
            background: transparent;

            label{
                margin: 5px auto;
                

                input{
                    width: 100%;
                    height: 45px;
                    
                    background: #000 !important;
                    border: 1px solid #ffffff1f;
                }
            }

            button{
                width: 70%;
                height: 45px;
            }
        }
        .form_msg_information{ 
            margin: auto;
            top: auto;
            bottom: 50px;
            left: 0;
            right: 0;

        }



    }







`