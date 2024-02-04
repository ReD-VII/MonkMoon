import styled from "styled-components";



export const LayoutStyles = styled.div`
    /* width: 100%; */
    /* height: 100%;: */

    header{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 40px;
        /* background: #ccc; */

        .box{
            display: flex;
            align-items: center;

            height: 100%;
        }
        .box:nth-child(1){
            width: 30%;
            /* background: yellowgreen; */
            img{
                width: 80px;
                margin: auto;
                margin-top: 20px;
                margin-left: 20px;
                z-index: 10;
            }
        }
        .box:nth-child(2){
            width: 40%;
            /* background: violet; */
        }
        .box:nth-child(3){
            width: 30%;
            height: 100%;
            /* background: tomato; */
            justify-content: flex-end;

            .icon{
                margin: auto;
                margin-top: 25px;
                margin-right: 20px;
                margin-bottom: 0;

                font-size: 22px;
                cursor: pointer;
            }
        }
    }

    main{
        display: flex;
        width: 100%;
        height: 100%;
        /* background: red; */



    }

    footer{
        
    }

`