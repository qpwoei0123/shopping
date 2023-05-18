import React ,{useState}from 'react'
import starOff from '../images/starOff.png'
import starOn from '../images/starOn.png'
import { Container, Img, StarContainer, P } from './Item.Styles'
import Modal from './Modal'

//아이템 객체 1개를 주면 묻지도 따지지도 않고 알아서 만들어줍니다.
export default function Item({item ,items, setItems}) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleClick = () => {
        setItems(items.map((el) => {
            if(el.id === item.id) {
                return {...item, book_mark:!item.book_mark}
            }
            else return el
        }))
    }

    const handleImageClick = () => {
        setIsModalOpen(true)
    }
    
    if(item.type === 'Product') {
        return(
            <div className="ItemContainer">
                <Container>
                    <Img src={item.image_url} alt={item.title} onClick={handleImageClick}/>
                    <StarContainer onClick={handleClick}>
                    {item.book_mark
                        ? <img src={starOn} />
                        : <img src={starOff} />}
                    </StarContainer>
                    <P.LT>{item.title}</P.LT>
                    <P.RT primary>{item.discountPercentage}%</P.RT>
                    <P.RB>{item.price}원</P.RB>
                </Container>
                {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} item={item} handleClick={handleClick}/>}
                
            </div>
        )
    }
    else if(item.type === 'Brand') {
        return(
            <div className="ItemContainer">
                <Container>
                    <Img src={item.brand_image_url} alt={item.brand_name} onClick={handleImageClick}/>
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
                    <Img src={item.image_url} alt={item.title} onClick={handleImageClick}/>
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
                    <Img src={item.image_url} alt={item.title} onClick={handleImageClick}/>
                    <StarContainer onClick={handleClick}>
                    {item.book_mark
                        ? <img src={starOn} />
                        : <img src={starOff} />}
                </StarContainer>
                <P.LT>{item.title}</P.LT>
                <P.LB>{item.sub_title}</P.LB>
                </Container>
                
            </div>
        )
    }
    else{
        return null
    }
}