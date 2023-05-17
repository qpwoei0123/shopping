import React, { useState } from 'react'
import styled from "styled-components";
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import RedeemIcon from '@mui/icons-material/Redeem';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const HeaderStyled = styled.header`
    position: sticky;
    top : 0;
    width: 100vw;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
`;

const CosLogoBox = styled.div`
 margin-left: 20px;
    min-width: 300px;
    height: inherit;
    
    align-items: center;
    justify-content: space-between;
`

const CosLogo = styled.img`
    position: absolute;
    left: 5%;
    bottom: 30%;
    width: 50px;
`

const HeaderName = styled.span`
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

const Gnb = styled.div`
/* 아이콘 */

`
const GnbButton = styled.button`
/* 햄버거 버튼 */
position: absolute;
right: 10%;
top: 28px;

background-color: white;
border: none;
`
const DropDown = styled.div`
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
const DropDownElements = styled.div`
/* 인사말 */
width: 200px;
height: 50px;
/* Inside auto layout */
font-size: 20px;
display: flex;
align-items: center;
padding-left: 20px;
`

export default function Header() {
    const [isOnDropDown, setIsOnDropDown] = useState(false)
    const handleDropdown = () => {
        setIsOnDropDown(!isOnDropDown)
    }

    return(
        <HeaderStyled>
            <Link to='/' >
                    <CosLogo src={logo}/>
            </Link>
            <HeaderName>COZ shopping</HeaderName>
            <Gnb className='Gnb'>
                <GnbButton>
                    <DensityMediumIcon onClick={handleDropdown}/>
                </GnbButton>
                {isOnDropDown
                    ?   <DropDown>
                            <DropDownElements>
                                ooo님, 안녕하세요!
                            </DropDownElements>
                            <Link to='/products'>
                                <DropDownElements>
                                    <RedeemIcon/>상품리스트 페이지
                                </DropDownElements>
                            </Link>
                            <Link to='/bookmark'>
                                <DropDownElements>
                                    <StarBorderIcon/>북마크 페이지
                                </DropDownElements>
                            </Link>
                        </DropDown>
                    : null}
            </Gnb>
        </HeaderStyled>
    )
  }