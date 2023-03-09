import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #18216d;
        line-height: 1.18;

    }

    p {
        color: #18216d;  
        line-height: 1.41;
        font-weight: 200
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .ant-modal-body .ant-btn{
        background-color: #fb7324;
        border:none
    }
    .ant-modal-body .ant-btn:hover{
        opacity: .9;
    }

    .ant-modal-body .ant-btn-default{
        width: 100%;
        color:white
    }
    .ant-modal-body .ant-btn-default:hover{

        background-color: #fb7324;
        color:white !important
    }

    .ant-modal-body .ant-btn-primary{
        width: 100%;
        background-color: #F1F2F3;
        color:black;
    }
    .ant-modal-body .ant-btn-primary:hover{
        background-color: #F1F2F3;
        color:black;
    }


    .ant-modal-confirm-btns{
        display:flex;
        width: 90%;
        margin: 0 auto;
        padding-top: 1rem;
        padding-left: .4rem;
     
    }
    .ant-modal-confirm-content{
        padding-right: .5rem;
        padding-top: .5rem
    }
    .ant-modal-body .ant-btn-default:hover {
        color:#000000
    }
    .ant-spin-dot-item {
        background-color: #fb7324
    }

    .ant-dropdown {
    z-index: 9999;
    }
.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 108px;
}

.wave .shape-fill {
    fill: #F1F2F3;
}

.wave_container{
    position:relative;
}
`;
