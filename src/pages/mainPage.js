import React, { useEffect, useState } from'react';
import Item from '../components/Item';
import axios from "axios";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
  z-index: 1;
`
const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  width: 1280px;
  overflow: hidden;
`
const H2 = styled.h2`
  margin-right: 80%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
`

export default function MainPage() {
  //items상태 선언, 로컬에 있는지 유무
  const [items, setItems] = useState(
    localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : []
  );

  //첫 렌더링시 로컬스토리지 Items가 있는지 유무
  useEffect(() => {
    const fetchData = async () => {
      if(localStorage.getItem('items')){
        setItems(JSON.parse(localStorage.getItem('items')));
      }
      else{
        try {
          const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products?count');
          setItems(response.data);
          localStorage.setItem('items', JSON.stringify(response.data));
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, []);

  // 아이템이 바뀔 시 로컬스토리지 변경
  useEffect(() => {  
    if(localStorage.getItem('items')){
    localStorage.setItem('items', JSON.stringify(items));
    }
    
  }, [items]);
    
    return (
      <Container className='mainContainer'>
        <H2>상품 리스트</H2>
        <ItemList className='ItemList'>
          {items.sort(()=> Math.random() - 0.5).slice(0,4) //랜덤 정렬 후 4개의 요소 뽑기.
          .map((item, index) => {
            return <Item key={index} item={item} items={items} setItems={setItems}/>
          })}
        </ItemList>
        
        <H2>북마크 리스트</H2>
        <ItemList className='BookMarkList'>
          {items.map((item, index) => {
            if(item.book_mark === true){
              return <Item key={index} item={item} items={items} setItems={setItems}/>
            }
          })}
        </ItemList>
      </Container>
    )
  }