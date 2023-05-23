import React ,{useState}from 'react'
import starOff from '../images/starOff.png'
import starOn from '../images/starOn.png'
import { Container, Img, StarContainer, P } from './Item.Styles'
import Modal from './Modal'
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//아이템 객체 1개를 주면 묻지도 따지지도 않고 알아서 만들어줍니다.
export default function Item({item ,items, setItems}) {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isBookMark, setIsBookmark] = useState(item.book_mark)
    const bookmarkIcon = isBookMark ? <img src={starOn} /> : <img src={starOff} />;

    const handleClick = () => {
        setIsBookmark(!isBookMark)
        console.log(isBookMark)
        setItems(items.map((el) => {
            if(el.id === item.id) {
                showToast()
                return {...item, book_mark:!item.book_mark}
            }
            else return el
        }))
    }

    const handleImageClick = () => {
        setIsModalOpen(true)
    }

    const showToast = () => {
        if(isBookMark) {
            toast.error('상품이 북마크에 제거되었습니다...', { autoClose: 2000 });
        }
        else {
            toast.success('상품이 북마크에 추가되었습니다!', { autoClose: 2000 });
        }
    };
    
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
                <ToastContainer 
                    position="bottom-right" 
                    
                />
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