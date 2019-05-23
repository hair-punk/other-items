import React from 'react';

const jjcItemStyle = {
  width: '20%',
  position: 'relative',
  flexGrow: '0',
  flexShrink: '0',
  flexBasis: 'auto',
  display: 'inline-block',
  verticalAlign: 'top',
  padding: '9px',
  boxSizing: 'border-box',
  cursor: 'pointer'
};

const jjcItemImageStyle = {
  height: '132px',
  width: '100%',
  borderRadius: '2px'
};

const jjcItemImageHoveredStyle = {
  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)',
  transition: 'box-shadow 0.2s ease-in-out',
  height: '132px',
  width: '100%',
  borderRadius: '2px'
}

const jjcItemTitleStyle = {
  margin: '0',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: '14px',
  color: '#222',
  fontWeight: '300',
  lineHeight: '1.6',
  letterSpacing: 'normal'
};


const jjcItemOwnerStyle = {
  display: 'inline-block',
  color: '#595959',
  fontSize: '12px',
  fontWeight: '300',
  lineHeight: '1.6',
  letterSpacing: 'normal'
};

const jjcItemPriceStyle = {
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '1.6',
  letterSpacing: 'normal',
  margin: '0'
};

class Item extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hovered: false
    };
  }

  handleHover () {
    this.setState({
      hovered: true
    });
  }

  handleUnhover () {
    this.setState({
      hovered: false
    });
  }

  render () {
    return (
      <div className="jjc-item" onClick={this.props.handleClick} style={jjcItemStyle} onMouseEnter={this.handleHover.bind(this)} onMouseLeave={this.handleUnhover.bind(this)}>
        <img src={this.props.item.imageUrl} className="jjc-image" style={this.state.hovered ? jjcItemImageHoveredStyle : jjcItemImageStyle}/>
        <h2 className="jjc-itemTitle" style={jjcItemTitleStyle}>{this.props.item.name}</h2>
        <div className="jjc-itemOwner" style={jjcItemOwnerStyle}>{this.props.item.owner}</div>
        <h2 className="jjc-itemPrice" style={jjcItemPriceStyle}>${this.props.item.price}</h2>
      </div>
    );
  }
}

export default Item;