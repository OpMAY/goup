import React from 'react'
import styled from 'styled-components'
import {useRecoilValue} from "recoil";
import {bannerAtom} from "../../atoms/atom";

const BannerBlock = styled.div`
  position: relative;
  height: 480px;
  background-color: ${props => props.color};
  background-image: url("${props => props.image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  a {
    &::before {
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
    const banners = useRecoilValue(bannerAtom);
    return (
        <>
            {
                banners && banners.length > 0 ?
                    <BannerBlock color={banners[0].bg_color} image={banners[0].banner_image.url}>
                        <a href={banners[0].click_to_url}></a>
                    </BannerBlock> :
                    <BannerBlock color="#fff">
                        <a href='#'></a>
                    </BannerBlock>
            }
        </>
    )
}

export default Banner