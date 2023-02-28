import styled from 'styled-components';

export const Inner = styled.div`
    width: 1280px; 
    margin: 0 auto;
    padding: ${props => props.padding};
    box-sizing: border-box;
    border-top: ${props => props.bordertop};
`
export const Button = styled.button`
    height: ${props => props.height}
    border: 1px solid #d3d3d3;
    border-radius: 12px;
    padding: 10px 30px;
`
