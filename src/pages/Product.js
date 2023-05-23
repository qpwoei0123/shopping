import React, { useEffect, useState } from'react';
import Category from '../components/Category';
import Item from '../components/Item';
import InfiniteScroll from 'react-infinite-scroll-component';
import {S} from './Product.Styles'
import { Routes, Route } from'react-router-dom';


export default function Products() {
  //초기에 로컬데이터를 불러옴.
  const [items, setItems] = useState(
    localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : []
  );
  //보여줄 아이템의 갯수 
  const [nowNum, setNowNum] = useState(16);
  //true상태 => 맨 밑까지 스크롤 시 handleLoadMore() 실행 
  const [hasMore, setHasMore] = useState(true)
  
  //북마크 클릭 -> setItems 호출 -> state변화로 인한 re렌더링 -> 로컬 데이터 최신화.
  useEffect(() => {
    if(localStorage.getItem('items'))
      localStorage.setItem('items', JSON.stringify(items));
  },[items]);


  //보여줄 이미지 4개 추가, 더 이상 추가가 안된다면 로딩표시 제거
  const handleLoadMore = () => {
    if(items.length > nowNum)
    setNowNum(nowNum + 4);
    else 
      setHasMore(false);  
  };

    return (
      <div className='ProductPageContainer'> 
        <Category />
        <InfiniteScroll
         dataLength={nowNum}
         next={handleLoadMore}
         hasMore={hasMore}
         loader={<h1>Loading...</h1>}
         >
        <Routes>
          <Route path='/all' element={
            <S.ImageContainer>
              {items 
                .map((item, index) => {
                  if(index < nowNum)
                    return <Item key={index} item={item} items={items} setItems={setItems}/>
              })}
            </S.ImageContainer>
          } />

          <Route path='/product' element={
            <S.ImageContainer>
              {items 
                .map((item, index) => {
                  if(item.type === 'Product' && index < nowNum)
                    return <Item key={index} item={item} items={items} setItems={setItems}/>
              })}
            </S.ImageContainer>
          } />

          <Route path='/brand' element={
            <S.ImageContainer>
              {items 
                .map((item, index) => {
                  if(item.type === 'Brand' && index < nowNum)
                    return <Item key={index} item={item} items={items} setItems={setItems}/>
              })}
            </S.ImageContainer>
          } />

          <Route path='/category' element={
            <S.ImageContainer>
              {items 
                .map((item, index) => {
                  if(item.type === 'Category' && index < nowNum)
                    return <Item key={index} item={item} items={items} setItems={setItems}/>
              })}
            </S.ImageContainer>
          } />

          <Route path='/exhibition' element={
            <S.ImageContainer>
              {items 
                .map((item, index) => {
                  if(item.type === 'Exhibition' && index < nowNum)
                    return <Item key={index} item={item} items={items} setItems={setItems}/>
              })}
            </S.ImageContainer>
          } />
        </Routes>
        </InfiniteScroll>
      </div>
    )
  }