import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => {
  return (
    <>
      {props.children.length > 1 ? (
        <div>
          <Header />
          {props.children.map((childrenItem, id) => (
            <div key={id}>
              {childrenItem}
            </div>
          ))}
          <Footer />
        </div>
      ) : (
        <>
          <Header />
          {props.children}
          {props.children._owner ? props.children._owner.type.name === "NotFound" ? null : <Footer /> :
            <Footer />}
        </>
      )}
    </>
  );
};

export default Layout;
