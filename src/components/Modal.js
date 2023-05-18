import {S} from './Modal.styles'
import starOff from '../images/starOff.png'
import starOn from '../images/starOn.png'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

function Modal({ setIsModalOpen, item ,handleClick }) {
    // 모달 끄기 
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
            <S.ModalBox >
                <S.Img src={item.image_url}/>
                <S.StarContainer>
                    {item.book_mark
                        ? <img src={starOn} onClick={handleClick}/>
                        : <img src={starOff} onClick={handleClick}/>
                    }
                </S.StarContainer>
                <S.P>
                    {item.title
                        ? item.title
                        : item.brand_name
                    }
                </S.P>
                <S.CloseBtn>
                    <BackspaceOutlinedIcon onClick={closeModal}/>
                </S.CloseBtn>
            </S.ModalBox>
    );
}
export default Modal;