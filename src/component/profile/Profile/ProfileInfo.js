
import React from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { profileAtom } from '../../../atoms/atom'

const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 0 38px;
  .user {
    margin-right: 18px;
  }
  .name {
    color: #000;
    font-size: 24px;
  }
  .btn-group {
    display: flex;
    margin-top: 8px;

    button {
      display: inline-flex;
      height: 32px;
      align-items: center;
      border: 1px solid #d3d3d3;
      color: rgba(34, 34, 34, 0.8);
      background-color: #fff;
      padding: 14px;
      border-radius: 10px;
      &:last-child {
        margin-left: 8px;
      }
    }
  }
`;
const UserImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const ProfileInfo = ({profile, setProfile}) => {
    console.log(profile)
  return (
    <ProfileBlock>
      <div className='user'>
        {
          profile ? <UserImage bgImage={profile.profile_img.url}/> : null
        }
        
      </div>
      <div>
        {
          profile ? <h3 className='name'>{profile.id}</h3>  : 'no'
        }
        
        <div className='btn-group'>
          <button type='button'>이미지 삭제</button>
          <button type='button'>삭제</button>
        </div>
      </div>
    </ProfileBlock>
  );
};

export default ProfileInfo;
