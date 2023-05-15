import React, { useState } from 'react'
import styled from "styled-components";
import logo from '../imges/logo.png'
import { Link } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import RedeemIcon from '@mui/icons-material/Redeem';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const HeaderStyled = styled.header`
position: relative;
width: 1400px;
height: 80px;

background: #FFFFFF;
box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`;

const CosLogo = styled.img`
position: absolute;
left: 5.94%;
right: .77%;
top: 31.25%;
bottom: 31.25%;
width: 50px;
`

const HeaderName = styled.span`
position: absolute;
left: 11.17%;
right: 70.86%;
top: 31.48%;
bottom: 31.48%;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 88.02%;
/* or 28px */

display: flex;
align-items: center;
color: #000000;
`

const Gnb = styled.div`
/* 아이콘 */
position: absolute;
left: 5.88%;
right: 5.88%;
top: 8.33%;
bottom: 8.33%;
`
const GnbButton = styled.button`
/* 햄버거 버튼 */
position: absolute;
height: 24px;
left: 1250px;
top: 28px;

background-color: white;
border: none;
`
const DropDown = styled.div`
/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
left: 90%;
right: 0%;
top: 100%;
bottom: 0%;

background: #FFFFFF;
width: 200px;
height: 150px;

`
const DropDownElements = styled.div`
/* 인사말 */
width: 200px;
height: 50px;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
border:  solid gray;
`


export default function Header() {
    const [isOnDropDown, setIsOnDropDown] = useState(false)
    const handleDropdown = () => {
        setIsOnDropDown(!isOnDropDown)
    }

    return(
        <div>
        <HeaderStyled>
            <Link to='/'>
                <CosLogo src={logo}/>
                <HeaderName>COZ shopping</HeaderName>
            </Link>
            <Gnb>
                <GnbButton>
                    <DensityMediumIcon onClick={handleDropdown}/>
                </GnbButton>
                {isOnDropDown
                    ? <DropDown>
                        <DropDownElements>ooo님, 안녕하세요!</DropDownElements>
                        <Link to='/productlist'><DropDownElements>
                            <RedeemIcon/>상품리스트 페이지</DropDownElements>
                        </Link>
                        <Link to='/bookmark'><DropDownElements>
                            <StarBorderIcon/>북마크 페이지</DropDownElements>
                        </Link>
                    </DropDown>
                    : null}
            </Gnb>
        </HeaderStyled>
        
        </div>
    )
  }