import styled from "styled-components";

export const S ={
    ModalBox: styled.div`
        position: fixed;
        top: 100px;
        left: 300px;
        width: 60%;
        height: 60%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 992;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    Img : styled.img`
        width: 100%;
        height: 100%;
        object-fit:cover;
        border-radius: 12px;
    `,
    StarContainer : styled.div`
        position: absolute;
        bottom: 10%;
        left: 5%;
    `,
    P : styled.p`
        position: absolute;
        font-size: 200%;
        color: white;
        bottom:  1%;
        left: 9%;
    `,   
    CloseBtn : styled.button`
        position: absolute;
        top: 1%;
        right: 1%;
        border: none;
        background: transparent;
        color: white;
    `
}