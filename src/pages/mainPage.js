import React, { useEffect, useState } from'react';
import Item from '../components/Item';
import BookMarkList from '../components/BookMarkList';
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


export default function MainPage() {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4", {
        method: "GET",
      })
      .then((res) => {
        setItems(res.data);
      })
  }, []);
  
    
    return (
      <Container className='mainContainer'>
        <h2>상품 리스트</h2>
        <ItemList className='ItemList'>
          {items.map((item, index) => {
            return <Item key={index} item={item} items={items} setItems={setItems}/>
          })}
        </ItemList>
        <h2>북마크 리스트</h2>
        <ItemList className='BookMarkList'>
        
        </ItemList>
      </Container>
    )
  }