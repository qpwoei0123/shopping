import styled  from 'styled-components'

export const Container = styled.div`
position: relative;
    width: 300px;
    height: 300px;
    padding: 10px;
`

export const Img = styled.img`
	width:100%;
    height:80%;
    object-fit:cover;
    border-radius: 5%;
    
`
export const StarContainer = styled.div`
    position: absolute;
    top: 65%;
    left: 85%;
`

export const P = {
    LT : styled.p`
    position: absolute;
    font-weight: bold;
    bottom:  10%;
    `,
    LB : styled.p`
    position: absolute;
    bottom:  0%;
    `,
    RT : styled.p`
    position: absolute;
    bottom:  10%;
    right: 5%;
    font-weight: bold;
    color: ${(props) => props.primary ? 'purple' : 'black'}; //스타일 컴포넌트 props전달법
    `,
    RB : styled.p`
    position: absolute;
    bottom:  0%; 
    right: 5%;
    `
}