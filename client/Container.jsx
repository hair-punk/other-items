import React from 'react';
import Item from './Item.jsx';

var Container = ({items, handleClick}) => (
  <div className="jjc-container">
    {items.map((item, index) => {
      return <Item key={index} item={item} handleClick={handleClick}/>
    })}
  </div>
)

export default Container;