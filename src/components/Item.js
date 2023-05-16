import React, { useEffect } from 'react'
import styled  from 'styled-components'
import starOff from '../images/starOff.png'
import starOn from '../images/starOn.png'

const Container = styled.div`
    position: relative;
    width: 300px;
    height: 250px;
    padding: 10px;
    overflow:hidden;
`

const Img = styled.img`
	width:100%;
    height:100%;
    object-fit:cover;
    border-radius: 5%;
`
const StarContainer = styled.div`
    position: absolute;
    top: 82%;
    left: 85%;
`

export default function Item({item ,items, setItems}) {

    const handleClick = () => {
        setItems(items.map((el) => {
            if(el.id === item.id) {
                return {
                  ...item, book_mark:!item.book_mark
                }
            }
            else return el
        }))
    }
    console.log(item)


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
                </Container>
                <p>{item.title}</p>
                <p>{item.discountPercentage}</p>
                <p>{item.price}</p>
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
                </Container>
                <p>{item.brand_name}</p>
                <p>관심 고객수{item.follower}</p>
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
                </Container>
                <p>#{item.title}</p>
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
                <p>{item.title}</p>
                <p>{item.sub_title}</p>
            </div>
        )
    }
    else{
        return null
    }

    // return (
    //     <div className="ItemContainer">
    //         <Container>
    //             <Img src={
    //                 item.image_url 
    //                 ? item.image_url 
    //                 : item.brand_image_url} 
    //                 alt={
    //                 item.title
    //                 ? item.title 
    //                 : item.brand_name
    //                 } >
                    
    //             </Img>
    //             <StarContainer onClick={handleClick}>
    //                 {item.book_mark
    //                     ? <img src={starOn} />
    //                     : <img src={starOff} />}
    //             </StarContainer>
    //         </Container>
    //         <p>
    //             {item.title
    //             ? item.title 
    //             : item.brand_name}
    //         </p>
    //     </div>
        
    // )
}