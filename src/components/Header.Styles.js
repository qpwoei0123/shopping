import styled from "styled-components";
import { Link } from "react-router-dom";


export const HeaderStyled = styled.header`
    position: sticky;
    top : 0;
    width: 100vw;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
    border-bottom: none;
`;

export const CosLogoBox = styled.div`
 margin-left: 20px;
    min-width: 300px;
    height: inherit;
    
    align-items: center;
    justify-content: space-between;
`

export const CosLogo = styled.img`
    position: absolute;
    left: 5%;
    bottom: 30%;
    width: 50px;
`

export const HeaderName = styled.span`
position: absolute;
left: 10%;
bottom: 30%;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 88.02%;
/* or 28px */
`

export const Gnb = styled.div`
/* 아이콘 */

`
export const GnbButton = styled.button`
/* 햄버거 버튼 */
position: absolute;
right: 10%;
top: 28px;
background-color: white;
border: none;
`
export const DropDown = styled.div`
/* Auto layout */
display: flex;
flex-direction: column;
position: absolute;
left: 80%;
top: 90%;
background: #FFFFFF;
width: 200px;
height: 150px;
border-radius: 5%;
border: 1px solid gray;
`
export const DropDownElements = styled.div`
/* 인사말 */
width: 200px;
height: 50px;
/* Inside auto layout */
font-size: 20px;
display: flex;
align-items: center;
padding-left: 20px;
`

export const StyledLink = styled(Link)`
text-decoration: none;
color: black;
`