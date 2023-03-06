
import {Routes, Route} from 'react-router-dom';
// import Kakao from "./module/Kakao";
// import axios from "axios";
// header
import Header from './component/Header';
// footer
import Footer from './component/Footer';
// product
import Product from './component/Product/Product';
// Detail
import Detail from './page/Detail';
// Shop
import Shop from './page/Shop';

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
			<Header></Header>
			<Routes>
				{/*<Route path="" element={}/>*/}
				<Route path="/" element={<Product/>}/>
				<Route path="/detail" element={<Detail/>}/>
				<Route path="/shop" element={<Shop/>}/>
				{/* <Route path="/oauth" element={<Kakao/>}/> */}
			</Routes>
			<Footer></Footer>
			{/* Route */}
		</div>
	);
}

export default App;
