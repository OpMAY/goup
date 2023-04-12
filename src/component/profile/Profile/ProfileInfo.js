import React from 'react'
import styled from 'styled-components'

const ProfileBlcock = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 0 38px;
  .user{
    margin-right: 18px;
  }
  .name{
    color: #000;
    font-size: 24px;
  }
  .btn-grop{
    display: flex;
    margin-top: 8px;

      button{
        display: inline-flex;
        height: 32px;
        align-items: center;
        border: 1px solid #d3d3d3;
        color: rgba(34,34,34,.8);
        background-color: #fff;
        padding: 14px;
        border-radius: 10px;
        &:last-child{
          margin-left: 8px;
        }
      }
    }
  }
`
const UserImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #d3d3d3;
`

const ProfileInfo = () => {
  return (
    <ProfileBlcock>
      <div className='user'>
        <UserImage />
      </div>
      <div>
        <h3 className='name'>ID</h3>
        <div className='btn-grop'>
          <button type='button'>이미지 삭제</button>
          <button type='button'>삭제</button>
        </div>
      </div>
    </ProfileBlcock>
  )
}

export default ProfileInfo