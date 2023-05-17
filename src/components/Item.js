import React from 'react'
import styled  from 'styled-components'
import starOff from '../images/starOff.png'
import starOn from '../images/starOn.png'

const Container = styled.div`
position: relative;
    width: 300px;
    height: 300px;
    padding: 10px;
    overflow:hidden;
`

const Img = styled.img`
	width:100%;
    height:80%;
    object-fit:cover;
    border-radius: 5%;
`
const StarContainer = styled.div`
    position: absolute;
    top: 65%;
    left: 85%;
`

const P = {
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
    color: ${(props) => props.primary ? 'purple' : 'black'};
    `,
    RB : styled.p`
    position: absolute;
    bottom:  0%; 
    right: 5%;
    `
}
export default function Item({item ,items, setItems}) {

    const handleClick = () => {
        setItems(items.map((el) => {
            if(el.id === item.id) {
                return {...item, book_mark:!item.book_mark}
            }
            else return el
        }))
    }
    
    if(item.type === 'Product') {
        return(
            <div className="ItemContainer">
                <Container>
                    <Img src={item.image_url} alt={item.title}/>
                    <StarContainer onClick={handleClick}>
                    {item.book_mark
                        ? <img src={starOn} />
                        : <img src={starOff} />}
                    </StarContainer>
                    <P.LT>{item.title}</P.LT>
                    <P.RT primary>{item.discountPercentage}%</P.RT>
                    <P.RB>{item.price}원</P.RB>
                </Container>
            </div>
        )
    }
    else if(item.type === 'Brand') {
        return(
            <div className="ItemContainer">
                <Container>
                    <Img src={item.brand_image_url} alt={item.brand_name}/>
                    <StarContainer onClick={handleClick}>
                    {item.book_mark
                        ? <img src={starOn} />
                        : <img src={starOff} />}
                </StarContainer>
                <P.LT>{item.brand_name}</P.LT>
                <P.RT>관심 고객수</P.RT>
                <P.RB>{item.follower}</P.RB>
                </Container>
            </div>
        )
    }
    else if(item.type === 'Category') {
        return(
            <div className="ItemContainer">
                <Container>
                    <Img src={item.image_url} alt={item.title}/>
                    <StarContainer onClick={handleClick}>
                    {item.book_mark
                        ? <img src={starOn} />
                        : <img src={starOff} />}
                </StarContainer>
                <P.LT>#{item.title}</P.LT>
                </Container>
                
            </div>
        )
    }
    else if(item.type === "Exhibition") {
        return(
            <div className="ItemContainer">
                <Container>
                    <Img src={item.image_url} alt={item.title}/>
                    <StarContainer onClick={handleClick}>
                    {item.book_mark
                        ? <img src={starOn} />
                        : <img src={starOff} />}
                </StarContainer>
                </Container>
                <P.LT>{item.title}</P.LT>
                <P.LB>{item.sub_title}</P.LB>
            </div>
        )
    }
    else{
        return null
    }
}