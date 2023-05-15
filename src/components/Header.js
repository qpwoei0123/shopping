import React, { useState } from 'react'
import styled from "styled-components";
import logo from '../imges/logo.png'
import { Link } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import RedeemIcon from '@mui/icons-material/Redeem';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const HeaderStyled = styled.header`
position: sticky;
width: 1400px;
height: 80px;

background: #FFFFFF;
box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`;

const CosLogo = styled.img`
position: absolute;
left: 5%;
top: 30%;
width: 50px;
`

const HeaderName = styled.span`
position: absolute;
left: 10%;
top: 30%;


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

const GnbButton = styled.button`
/* 햄버거 버튼 */
position: absolute;
right: 5%;
top: 40%;

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
right: 0%;
top: 100%;

background: #FFFFFF;
`
const DropDownElements = styled.div`
/* 인사말 */
width: 200px;
height: 50px;
/* Inside auto layout */
font-size: 20px;
display: flex;
padding-left: 20px;
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
            
            <GnbButton>
                <DensityMediumIcon onClick={handleDropdown}/>
            </GnbButton>
            {isOnDropDown
                ? <DropDown>
                    <DropDownElements>ooo님, 안녕하세요!</DropDownElements>
                    <Link to='/productlist'>
                        <DropDownElements>
                            <RedeemIcon/> 상품리스트 페이지
                        </DropDownElements>
                    </Link>
                    <Link to='/bookmark'>
                        <DropDownElements>
                           <StarBorderIcon/>북마크 페이지
                        </DropDownElements>
                    </Link>
                </DropDown>
                : null}
       
        </HeaderStyled>
        
        </div>
    )
  }