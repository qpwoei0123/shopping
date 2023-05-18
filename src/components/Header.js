import React, { useState } from 'react'
import logo from '../images/logo.png'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import RedeemIcon from '@mui/icons-material/Redeem';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Gnb, GnbButton ,HeaderName, CosLogo, DropDown, DropDownElements, HeaderStyled, StyledLink} from './Header.Styles'



export default function Header() {
    const [isOnDropDown, setIsOnDropDown] = useState(false)
    const handleDropdown = () => {
        setIsOnDropDown(!isOnDropDown)
    }

    return(
        <HeaderStyled>
            <StyledLink to='/' >
                    <CosLogo src={logo}/>
            </StyledLink>
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
                            <StyledLink to='/products/all'>
                                <DropDownElements>
                                    <RedeemIcon/><p>상품리스트 페이지</p>
                                </DropDownElements>
                            </StyledLink>
                            <StyledLink to='/bookmark/all'>
                                <DropDownElements>
                                    <StarBorderIcon/>북마크 페이지
                                </DropDownElements>
                            </StyledLink>
                        </DropDown>
                    : null}
            </Gnb>
        </HeaderStyled>
    )
  }