import styled from 'styled-components';

export const Inner = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: ${props => props.padding};
  box-sizing: border-box;
  border-top: ${props => props.bordertop};
`
// Button
export const Button = styled.button`
  height: ${props => props.height}
  border: 1px solid #d3d3d3;
  border-radius: 12px;
  padding: 10px 30px;
`
// Item
const Item = styled.div`
  flex: 0 0 auto;
  .productInfo{
    padding: 9px 0 0;
  }
  em{
    display: inline-block;
    font-size: 14px;
    font-style: normal;
    padding-bottom: 2px;
    font-weight: 700;
  }
  .name{
    font-size: 14px;
    margin: 4px 0 0 0
  }
  .price{
    padding: 7px 0 0;
    strong{
      font-size: 15px;
    }
    p{
      font-size: 11px;
      margin: 0;
      color: rgba(34,34,34,.5); 
    }
  }
  
`
const ItemImages = styled.div`
  width: 294px;
  height: 294px;
  background-image: url(${props => props.url});
  background-size: contain;
  background-color: #000;
  border-radius: 15px;
`
export const MainItem = ({p}) => {
  return (
    <Item>
      <ItemImages url={p.images[0].url}></ItemImages>
      {/* <img alt="Main Test Images" src="/images/img0.png"/> */}
      <div className='productInfo'>
        <em>{p.title}</em>
        <p className='name'>상세</p>
        <div className='price'>
          <strong>금액</strong>
          <p>즉시 구매가</p>
        </div>
      </div>
    </Item>
  )
}