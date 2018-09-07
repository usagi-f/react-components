import React from 'react'
import css from 'styled-jsx/css'
import { Icon } from '../../src/index'
import variable from '../../src/css/variable'

const styles = css`
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  & > span {
    display: flex;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  &.fixed > span {
    background-color: rgba(255, 0, 0, .3);
  }
}
`

const Buttons = () => (
  <section>
    <div className="icons">
      <span><Icon icon="angle-down" fixedWidth /></span>
      <span><Icon icon="angle-left" fixedWidth /></span>
      <span><Icon icon="angle-right" fixedWidth /></span>
      <span><Icon icon="angle-up" fixedWidth /></span>
      <span><Icon icon="bars" fixedWidth /></span>
      <span><Icon icon="bell" fixedWidth /></span>
      <span><Icon icon="calendar" fixedWidth /></span>
      <span><Icon icon="camera" fixedWidth /></span>
      <span><Icon icon="caret-down" fixedWidth /></span>
      <span><Icon icon="caret-left" fixedWidth /></span>
      <span><Icon icon="caret-right" fixedWidth /></span>
      <span><Icon icon="caret-up" fixedWidth /></span>
      <span><Icon icon="check" fixedWidth /></span>
      <span><Icon icon="desktop" fixedWidth /></span>
      <span><Icon icon="download" fixedWidth /></span>
      <span><Icon icon="edit" fixedWidth /></span>
      <span><Icon icon="expand" fixedWidth /></span>
      <span><Icon icon="eye" fixedWidth /></span>
      <span><Icon icon="file" fixedWidth /></span>
      <span><Icon icon="filter" fixedWidth /></span>
      <span><Icon icon="globe" fixedWidth /></span>
      <span><Icon icon="heart" fixedWidth /></span>
      <span><Icon icon="home" fixedWidth /></span>
      <span><Icon icon="image" fixedWidth /></span>
      <span><Icon icon="inbox" fixedWidth /></span>
      <span><Icon icon="info" fixedWidth /></span>
      <span><Icon icon="key" fixedWidth /></span>
      <span><Icon icon="laugh" fixedWidth /></span>
      <span><Icon icon="list" fixedWidth /></span>
      <span><Icon icon="money-bill" fixedWidth /></span>
      <span><Icon icon="music" fixedWidth /></span>
      <span><Icon icon="paper-plane" fixedWidth /></span>
      <span><Icon icon="pen" fixedWidth /></span>
      <span><Icon icon="play" fixedWidth /></span>
      <span><Icon icon="plus" fixedWidth /></span>
      <span><Icon icon="poop" fixedWidth /></span>
      <span><Icon icon="quote-left" fixedWidth /></span>
      <span><Icon icon="quote-right" fixedWidth /></span>
      <span><Icon icon="redo-alt" fixedWidth /></span>
      <span><Icon icon="reply" fixedWidth /></span>
      <span><Icon icon="retweet" fixedWidth /></span>
      <span><Icon icon="save" fixedWidth /></span>
      <span><Icon icon="search" fixedWidth /></span>
      <span><Icon icon="share-square" fixedWidth /></span>
      <span><Icon icon="sign-in-alt" fixedWidth /></span>
      <span><Icon icon="sign-out-alt" fixedWidth /></span>
      <span><Icon icon="signature" fixedWidth /></span>
      <span><Icon icon="smile" fixedWidth /></span>
      <span><Icon icon="sort-down" fixedWidth /></span>
      <span><Icon icon="sort-up" fixedWidth /></span>
      <span><Icon icon="square" fixedWidth /></span>
      <span><Icon icon="star" fixedWidth /></span>
      <span><Icon icon="sync-alt" fixedWidth /></span>
      <span><Icon icon="table" fixedWidth /></span>
      <span><Icon icon="tag" fixedWidth /></span>
      <span><Icon icon="terminal" fixedWidth /></span>
      <span><Icon icon="th-large" fixedWidth /></span>
      <span><Icon icon="thumbs-up" fixedWidth /></span>
      <span><Icon icon="times" fixedWidth /></span>
      <span><Icon icon="trash" fixedWidth /></span>
      <span><Icon icon="user" fixedWidth /></span>
      <span><Icon icon="video" fixedWidth /></span>
      <span><Icon icon="wifi" fixedWidth /></span>
    </div>
    <h4>Other Attribute</h4>
    <h5>Size</h5>
    <div className="icons">
      <span><Icon icon="file" size="xs" /></span>
      <span><Icon icon="file" size="sm" /></span>
      <span><Icon icon="file" size="lg" /></span>
      <span><Icon icon="file" size="2x" /></span>
      <span><Icon icon="file" size="3x" /></span>
      <span><Icon icon="file" size="5x" /></span>
      <span><Icon icon="file" size="7x" /></span>
      <span><Icon icon="file" size="10x" /></span>
    </div>
    <h5>Color</h5>
    <div className="icons">
      <span><Icon icon="heart" color={variable.color.pink} /></span>
      <span><Icon icon="music" color={variable.color.red} /></span>
      <span><Icon icon="smile" color={variable.color.orange} /></span>
      <span><Icon icon="bell" color={variable.color.yellow} /></span>
      <span><Icon icon="camera" color={variable.color.lightgreen} /></span>
      <span><Icon icon="user" color={variable.color.green} /></span>
      <span><Icon icon="globe" color={variable.color.lightblue} /></span>
      <span><Icon icon="tag" color={variable.color.blue} /></span>
      <span><Icon icon="image" color={variable.color.purple} /></span>
    </div>
    <h5>Fixed Width</h5>
    <div className="icons fixed">
      <span><Icon icon="home" fixedWidth /></span>
      <span><Icon icon="info" fixedWidth /></span>
      <span><Icon icon="book" fixedWidth /></span>
    </div>
    <h5>Rotation/Flip</h5>
    <div className="icons">
      <span><Icon icon="comments" /></span>
      <span><Icon icon="comments" rotation={90} /></span>
      <span><Icon icon="comments" rotation={180} /></span>
      <span><Icon icon="comments" rotation={270} /></span>
      <span><Icon icon="comments" flip="horizontal" /></span>
      <span><Icon icon="comments" flip="vertical" /></span>
      <span><Icon icon="comments" flip="both" /></span>
    </div>
    <h5>Spin</h5>
    <div className="icons">
      <Icon icon="spinner" spin />
    </div>
    <style jsx>{styles}</style>
  </section>
)

export default Buttons
