import React from 'react'
import styled from 'styled-components'

const BannerBlock = styled.div`
	position: relative;
	height: 480px;
	background-color: #000;
	a{
		&::before{
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
		}
	}
`

const Banner = () => {
  return (
    <BannerBlock>
			<a href='#'></a>
		</BannerBlock>
  )
}

export default Banner