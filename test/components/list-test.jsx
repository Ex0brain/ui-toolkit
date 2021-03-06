'use strict'
const React = require('react/addons')
const TestUtils = React.addons.TestUtils
const assert = require('chai').assert
const List = require('../../src/components/list/list.jsx')
const Wrapper = require('../helpers/wrapper')

describe('ListComponent ', function () {
  it('is an element', function () {
    assert.ok(TestUtils.isElement(<List />))
  })

  it('should render an unordered list with a class of component-unordered-list', function () {
    const ListInstance = TestUtils.renderIntoDocument(
      <Wrapper>
        <List type='unordered' />
      </Wrapper>
    )

    const renderedList = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-unordered-list')
    assert.equal(renderedList.nodeName, 'UL')
  })

  it('should render an ordered list with a class of component-ordered-list', function () {
    const ListInstance = TestUtils.renderIntoDocument(
      <Wrapper>
        <List type='ordered' />
      </Wrapper>
    )

    const renderedList = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-ordered-list')
    assert.equal(renderedList.nodeName, 'OL')
  })

  it('should render an description list with a class of component-description-list', function () {
    const ListInstance = TestUtils.renderIntoDocument(
      <Wrapper>
        <List type='description' />
      </Wrapper>
    )

    const renderedList = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-description-list')
    assert.equal(renderedList.nodeName, 'DL')
  })

  it('should render an icon list with a class of component-icon-list', function () {
    const ListInstance = TestUtils.renderIntoDocument(
      <Wrapper>
        <List type='icon' />
      </Wrapper>
    )

    const renderedList = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-icon-list')
    assert.equal(renderedList.nodeName, 'UL')
  })

  it('should render an unordered list with a class of component-unordered-list if type is undefined', function () {
    const ListInstance = TestUtils.renderIntoDocument(
      <Wrapper>
        <List />
      </Wrapper>
    )

    const renderedList = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-unordered-list')
    assert.equal(renderedList.nodeName, 'UL')
  })

  it('should render an unordered list with a class of component-unordered-list if type is unrecognised', function () {
    const ListInstance = TestUtils.renderIntoDocument(
      <Wrapper>
        <List type='gibberish' />
      </Wrapper>
    )

    const renderedList = TestUtils.findRenderedDOMComponentWithClass(ListInstance, 'component-unordered-list')
    assert.equal(renderedList.nodeName, 'UL')
  })
})
