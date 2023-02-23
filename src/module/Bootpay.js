import axios, {get} from "axios";
import {useState} from "react";
import { Bootpay } from '@bootpay/client-js'

const BootPay = () => {
    const [bootPayKey, setBootPayKey] = useState('');
    const BOOTPAY_PAYMENT_DONE_EVENT = 'done';
    const SERVER_URL = 'http://localhost:8080';
    const SERVER_BOOTPAY_URI = '/api/bootpay';
    const API_KEY_GET_URI = SERVER_BOOTPAY_URI + '/key';
    const VERIFY_RECEIPT_URI = SERVER_BOOTPAY_URI + '/verify';
    const CANCEL_RECEIPT_URI = SERVER_BOOTPAY_URI + '/cancel';

    async function pay(payObject) {
        // TODO 상황별로 따로 맞춰서 작성해야함
        await getBootPayAPIKeyFunction().then(async () => {
            payObject.applicationId = bootPayKey;
            await Bootpay.requestPayment(payObject).then((res) => {
                console.log('bootPay Payment Function occurred : ', res);
                if(res.event === BOOTPAY_PAYMENT_DONE_EVENT) {
                    verifyReceipt(payObject, payObject.method)
                }
            })
        });
    }

    async function getBootPayAPIKeyFunction() {
        await axios.get(SERVER_URL + API_KEY_GET_URI, {})
            .then((res) => {
                console.log('getBootPayAPIKeyFunction res : ', res);
                if (res.data.status === 'OK') {
                    const key = res.data.data.key;
                    setBootPayKey(key);
                    // TODO return KEY
                }
            })
    }

    async function verifyReceipt(model, method) {
        const data = {};
        data.method = method;
        method === 'kakaopay' ? data.bootPayV1 = model : data.bootPayV2 = model;
        axios.post(SERVER_URL + VERIFY_RECEIPT_URI, data, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log('verifyReceipt res : ', res);
            if (res.data.status === 'OK') {
                if(res.data.data.status) {
                    // TODO 결제 검증 성공
                } else {
                    // TODO 결제 검증 실패 -> 서버에서 자동 취소함
                }
            }
        })
    }

    async function cancelReceipt(receiptId, method) {
        const data = {receiptId, method};
        axios.post(SERVER_URL + CANCEL_RECEIPT_URI, data, {
            headers : {
                "Content-Type" : "application/json"
            }
        }).then((res) => {
            console.log('cancelReceipt res : ', res);
            if(res.data.status === 'OK') {
                if(res.data.data.status) {
                    // TODO 결제 취소 완료
                } else {
                    // TODO 결제 취소 실패 -> log 보기
                }
            }
        })
    }
}

export default BootPay;