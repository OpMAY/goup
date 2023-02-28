import {Routes, Route} from 'react-router-dom';
// import Kakao from "./module/Kakao";
// import axios from "axios";
import {Button} from "./common/style"


function App() {
    // const kakaoTest = () => {
    //     axios.post('http://localhost:8080/api/sns/key/kakao', {}).then((res) => {
    //         const data = res.data;
    //         if (data.status === 'OK') {
    //             const clientId = data.data.key;
    //             const redirectURI = 'http://localhost:3000/oauth';
    //             window.location.href = 'https://kauth.kakao.com/oauth/authorize?client_id=' + clientId + '&redirect_uri=' + redirectURI + '&response_type=code'
    //         }
    //     })
    // }

    return (
        <div className="App">
            <Button type="button" height="40px;">버튼</Button>
            <Routes>
                {/*<Route path="" element={}/>*/}
                {/* <Route path="/oauth" element={<Kakao/>}/> */}
            </Routes>
        </div>
    );
}

export default App;
