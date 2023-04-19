import React, { useEffect } from "react";
import styled from "styled-components";
import {Box} from "@mui/material"
import Chip from "@mui/material/Chip";
import { useRecoilValue, useRecoilState } from "recoil";
import { tokenAtom, userAtom, userAddressAtom } from "../../../atoms/atom";
import {
  axiosGetFunction,
  axiosPutFunction,
} from "../../../module/CustomAxios";
import AddAddressModal from "../../modal/AddAddressModal";
import PutAddressModal from "../../modal/PutAddressModal";
import DeleteAddressModal from "../../modal/DeleteAddressModal";

const AddressBlcok = styled.div`
  .title_box {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 24px;
      color: #000;
      font-weight: bold;
      display: inline;
    }
  }
  .address_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    border-bottom: 2px solid #000;
    .empty_address_notice {
      margin: auto;
    }

    &.additional {
      border-bottom: 1px solid #d3d3d3;
    }
    .btn_grop {
      display: flex;
      gap: 10px;
    }
  }
  .address_info {
    .name {
      font-size: 15px;
      font-weight: 600;
      vertical-align: middle;
    }
    .chip {
      height: 20px;
      display: inline-flex;
      background-color: #f4f4f4;
      color: #222;
      font-size: 12px;
      align-items: center;
      padding: 0 6px;
      margin-left: 5px;
      border-radius: 15px;
    }
    .phone {
      font-size: 15px;
      margin: 5px 0 0 0;
    }
    .address_box {
      margin: 5px 0 0 0;
      font-size: 14px;
    }
  }
`;

const Address = () => {
  const [token, setToken] = useRecoilState(tokenAtom);
  const user = useRecoilValue(userAtom);
  const [userAddress, setUserAddress] = useRecoilState(userAddressAtom);

  useEffect(() => {
    axiosGetFunction(`/api/kream/my/address/` + user, {}, token, setToken).then(
      res => {
        console.log(res)
        const address = res.data.data.address;
        const index = address.findIndex(x => x._default_address);
        const defaultAddr = address[index];
        address.splice(index, 1);
        address.unshift(defaultAddr);
        setUserAddress(address);
      }
    );
  }, []);

  return (
    <>
      <AddressBlcok>
        <div className="title_box">
          <h3 className="title">주소록</h3>
          <AddAddressModal />
        </div>
        {userAddress !== undefined ? (
          userAddress.map(item => (
            <div className="address_list" key={item.no}>
              <div className="address_info">
                <div>
                  <span className="name">{item.name}</span>
                    {item._default_address ? (
                      <Box
                        component="span"
                        sx={{
                          display: "inline-block",
                          verticalAlign: "top",
                          lineHeight: "14px",
                          marginTop: "0",
                          marginLeft: "4px",
                          padding: "3px 6px",
                          fontSize: "12px",
                          letterSpacing: "-.06px",
                          borderRadius: "10px",
                          backgroundColor: "#f4f4f4",
                          boxSizing: "border-box",
                        }}>
                        기본 배송지
                      </Box>
                    ) : null}
                </div>
                <p className="phone">{item.phone_number}</p>
                <p className="address_box">
                  <span className="zipcode">({item.zip_code})</span>
                  <span className="adress">{item.address}</span>
                </p>
              </div>
              <div className="btn_grop">
                <PutAddressModal addressInfo={item} />
                <DeleteAddressModal addressInfo={item} />
              </div>
            </div>
          ))
        ) : (
          <div className="address_list">
            <h3 className="empty_address_notice"> 등록된 주소가 없습니다</h3>
          </div>
        )}
      </AddressBlcok>
    </>
  );
};

export default Address;
