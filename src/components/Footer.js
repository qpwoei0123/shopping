import React, { useState } from 'react'
import styled from "styled-components";

const FooterStyled =  styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const FooterContents = styled.p`
  display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 88.02%;
  /* or 11px */

  display: flex;
  align-items: center;

  color: #888888;
`


export default function Footer() {
    return(
    <FooterStyled>
      <FooterContents>개인정보 처리방침 | 이용 약관 <br/>All rights reserved @ Codestates</FooterContents>
    </FooterStyled>
    )
  }