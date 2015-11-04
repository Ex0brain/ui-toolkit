'use strict';
var React = require('react');
var Anchor = require('../anchor');

module.exports = React.createClass({
  propTypes: {
    currencySymbol: React.PropTypes.string,
    freeText: React.PropTypes.string,
    removeText: React.PropTypes.string,
    price: React.PropTypes.number,
    title: React.PropTypes.node,
    toggleDescription: React.PropTypes.bool,
    handleRemove: React.PropTypes.func,
    children: React.PropTypes.node
  },
  getInitialState: function() {
    return {
      descriptionVisibility: !this.props.toggleDescription
    };
  },
  getDefaultProps: function() {
    return {
      title: null,
      price: null,
      handleRemove: null,
      currencySymbol: '£',
      freeText: 'FREE',
      removeText: 'remove',
      toggleDescription: false
    };
  },
  toggleDescriptionVisibility: function() {
    this.setState({ descriptionVisibility: !this.state.descriptionVisibility });
  },
  titleNode: function() {
    if (this.props.title === null) return null;
    if (this.props.toggleDescription) return (<Anchor handleClick={this.toggleDescriptionVisibility}>{this.props.title}</Anchor>);
    if (React.isValidElement(this.props.title)) return this.props.title;
    return this.props.title;
  },
  priceNode: function() {
    if (this.props.price === null) return null;
    if (this.props.price === 0) {
      return this.props.freeText;
    }
    return (
      <span><span className="component-basket-item-currency">{this.props.currencySymbol}</span><span className="component-basket-item-price">{this.props.price}</span></span>
    );
  },
  removeNode: function() {
    if (this.props.handleRemove === null) return null;
    return (
      <Anchor handleClick={this.props.handleRemove}>{this.props.removeText}</Anchor>
    );
  },
  render: function() {
    var titleNode = this.titleNode();
    var descriptionStyle = {
      'display': (this.state.descriptionVisibility || titleNode === null) ? 'block' : 'none'
    };
    return (
      <div className="component-basket-item">
        <div className="component-basket-row">
          <div className="component-basket-item-title">{titleNode}</div>
          <div className="component-basket-item-total">{this.priceNode()}</div>
        </div>
        <div className="component-basket-row">
          <div className="component-basket-item-description" style={descriptionStyle}>{this.props.children}</div>
          <div className="component-basket-item-remove">{this.removeNode()}</div>
        </div>
      </div>
    );
  }
});