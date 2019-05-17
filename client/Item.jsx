import React from 'react';
var Item = ({item}) => (
  <div className="jjc-item">
    <img src={item.imageUrl} className="jjc-image"/>
    <h2 className="jjc-itemTitle">{item.name}</h2>
    <div className="jjc-itemOwner">{item.owner}</div>
    <h2 className="jjc-itemPrice">${item.price}</h2>
  </div>
)

export default Item;