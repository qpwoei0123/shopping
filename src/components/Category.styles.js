import styled from 'styled-components';
import { Link } from'react-router-dom';

export const S = {
    Container: styled.div`
      
    `,
    CategoryContainer: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,
    CategoryBox: styled.div`
        position: relative;
        width: 100px;
        height: 110px;
        padding: 10px;
        
    `,
    Name: styled.div`
        text-decoration: none;
    `,
    StyledLink : styled(Link)`
       text-decoration: none;
       color: black;
    `
    
}