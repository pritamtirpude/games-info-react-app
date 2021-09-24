import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,::before,::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
            border-radius: 1rem;
        }
    }

    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }

    h1{
            font-family: 'Abril Fatface', cursive;
            font-size: 2rem;
            font-weight: lighter;
    }
   
    h2{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem;
    }

    p{
          font-size: 1.2rem;
          line-height:200%;
          color: #696969;
    }

    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }

    input{
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }

    button{
        font-weight: lighter;
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;
