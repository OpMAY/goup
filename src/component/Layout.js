import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => {
  return (
    <>
      {props.children.length > 1 ? (
        props.children.map((childrenItem, id) => (
          <div key={id}>
            <Header />
            {childrenItem}
            {childrenItem._owner.type.name === "NotFound" ? null : <Footer />}
          </div>
        ))
      ) : (
        <>
          <Header />
          {props.children}
          {props.children._owner.type.name === "NotFound" ? null : <Footer />}
        </>
      )}
    </>
  );
};

export default Layout;
