import React from 'react';
import Item from './Item.jsx';

var Container = ({items}) => (
  <div className="jjc-container">
    {items.map((item, index) => {
      return <Item key={index} item={item} />
    })}
  </div>
)

export default Container;