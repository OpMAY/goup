import React from 'react'
import styled from 'styled-components'
import { Card } from '../../common/js/style'

const arr = [
  {
    title: 'test',
    url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
  },
  {
    title: 'test',
    url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
  },
  {
    title: 'test',
    url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
  },
  {
    title: 'test',
    url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
  },
  {
    title: 'test',
    url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
  },
  {
    title: 'test',
    url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
  },
  {
    title: 'test',
    url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
  },
  {
    title: 'test',
    url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
  },
  {
    title: 'test',
    url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
  },
  {
    title: 'test',
    url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
  },
]

const FocusInfo = styled.div`
  margin-bottom: 40px;
  &::before{
    display: block;
    content: "";
    border-top: 1px solid #ccc;
    margin: 56px auto 40px;
  }
  .cardBlcok{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 16px;
  }
`

const FocusList = ({title, subTitle, items}) => {
  return (
    <FocusInfo>
			<h2>{title}</h2>
      <h3>{subTitle}</h3>
      <div className='cardBlcok'>
        {items.map((item, i)=>(
          <Card
          item={item}
          key={i}
           />

        ))}
		  </div>
    </FocusInfo>
  )
}

export default FocusList