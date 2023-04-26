import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from "recoil";
import {setDefaultAxios} from "./module/CustomAxios";

const root = ReactDOM.createRoot(document.getElementById('root'));
setDefaultAxios();
root.render(
    <RecoilRoot>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </RecoilRoot>
)
;

reportWebVitals();
