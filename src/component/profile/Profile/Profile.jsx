import React, {useEffect} from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { profileAtom, tokenAtom, userAtom } from '../../../atoms/atom'
import { Hr } from '../../../common/js/style'
import { axiosGetFunction } from '../../../module/CustomAxios'
import Info from './LoginInfo'
import ProfileInfo from './ProfileInfo'

const Title = styled.div`
  padding: 5px 0 16px;
  border-bottom: 3px solid #333;
  h2{
    font-size: 24px;
    font-weight: bold;
  }
`

const Profile = () => {
  const [token, setToken] = useRecoilState(tokenAtom)
  const [user, setUser] = useRecoilState(userAtom)
  const [profile, setProfile] = useRecoilState(profileAtom);
  useEffect(() => {
    axiosGetFunction(`/api/kream/my/user/${user}`,{}, token, setToken).then((res) => {
      setProfile(res.data.data.user)
    })
   
  }, [])
  return (
    <>
      <Title>
        <h3>프로필 정보</h3>
      </Title>
      <ProfileInfo 
      profile={profile}
      setprofile={setProfile}
      />
      <Hr margin="0px"/>
      <Info
        profile={profile}
        setprofile={setProfile}
      />
      
    </>
  )
}

export default Profile