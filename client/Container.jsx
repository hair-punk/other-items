import React from 'react';
import Item from './Item.jsx';

const jjcContainerStyle = {
  fontSize: '14px',
  color: '#212121',
  textAlign: 'left',
  maxWidth: '1272px',
  minWidth: '972px',
  paddingLeft: '36px',
  paddingRight: '36px',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
  paddingInlineStart: '40px'
}
var Container = ({items, handleClick}) => (
  <div className="jjc-container" style={jjcContainerStyle}>
    {items.map((item, index) => {
      return <Item key={index} item={item} handleClick={handleClick}/>
    })}
  </div>
)

export default Container;