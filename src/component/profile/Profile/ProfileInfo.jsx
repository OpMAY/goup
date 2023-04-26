import React, {useRef} from 'react'
import {useRecoilState, useRecoilValue} from 'recoil'
import styled from 'styled-components'
import {profileAtom, tokenAtom, userAtom} from '../../../atoms/atom'
import {axiosPostFunction, axiosPutFunction} from "../../../module/CustomAxios";

const BLANK_PROFILE_URL = 'https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/blank_profile.4347742.png';

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

const ProfileInfo = () => {
    const [profile, setProfile] = useRecoilState(profileAtom);
    console.log(profile)
    const user = useRecoilValue(userAtom);
    const inputFile = useRef(null);
    const [token, setToken] = useRecoilState(tokenAtom);
    const openFileInput = () => {
        inputFile.current.click();
    }

    const reader = new FileReader();
    const handleProfileImageChange = e => {
        console.log(e);
        // e.preventDefault();

        const file = e.target.files[0]; // file object는 e.target.files[0]에 있다.

        if (file) {
            reader.readAsDataURL(file); // reader에게 file을 먼저 읽히고
            // 사진 올리고 나서 처리하는 event
            reader.onloadend = () => {
                console.log(file);
                const formData = new FormData();
                formData.append('file', file);
                axiosPostFunction('/api/kream/my/file', formData, true, token, setToken).then(res => {
                    console.log(res.data.data);
                    const obj = {
                        no: user,
                        profile_img: res.data.data.file
                    }
                    axiosPutFunction(`/api/kream/my/profile/image/${user}`, obj, false, token, setToken).then(res => {
                        console.log(res.data.data.result);
                        setProfile(prevState => {
                            return {...prevState, profile_img: res.data.data.result}
                        })
                    })
                    e.target.value = ''; //  같은 파일을 올리면 인지못해서 여기서 초기화
                })

            }; // 2. 비동기적으로 load가 끝나면 state에 저장
        }
    };

    const removeProfileImage = () => {
        if (window.confirm('프로필 이미지를 삭제하시겠어요?')) {
            const obj = {
                no: user,
                profile_img: null
            }
            axiosPutFunction(`/api/kream/my/profile/image/${user}`, obj, false, token, setToken).then(res => {
                console.log(res.data.data.result);
                setProfile(prevState => {
                    return {...prevState, profile_img: res.data.data.result}
                })
            })
        }
    }

    return (
        <ProfileBlock>
            <div className='user'>
                {
                    profile && profile.profile_img ? <UserImage bgImage={profile.profile_img.url}/> : <UserImage bgImage={BLANK_PROFILE_URL}/>
                }
                <input type='file' id='file' ref={inputFile} onChange={handleProfileImageChange} accept="image/*"
                       style={{display: 'none'}}/>
            </div>
            <div>
                {
                    profile ? <h3 className='name'>{profile.id}</h3> : 'no'
                }

                <div className='btn-group'>
                    <button type='button' style={{cursor: "pointer"}} onClick={openFileInput}>이미지 수정</button>
                    <button type='button' style={{cursor: "pointer"}} onClick={removeProfileImage}>삭제</button>
                </div>
            </div>
        </ProfileBlock>
    );
};

export default ProfileInfo;
