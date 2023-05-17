import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import RedeemIcon from '@mui/icons-material/Redeem';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Gnb, GnbButton ,HeaderName, CosLogo, DropDown, DropDownElements, HeaderStyled} from './Header.Styles'

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