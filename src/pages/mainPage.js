import React, { useEffect, useState } from'react';
import Item from '../components/Item';
import axios from "axios";
import styled from 'styled-components';

const Container = styled.div`
  /* Main Page */
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
`
const ItemList = styled.div`
  display: flex;
  flex-direction: row;
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

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4", {
        method: "GET",})
      .then((res) => {
        setItems(res.data);})
  }, []);
    
    return (
      <Container className='mainContainer'>
        <H2>상품 리스트</H2>
        <ItemList className='ItemList'>
          {items.map((item, index) => {
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