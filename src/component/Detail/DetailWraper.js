import React from "react";
import ConfirmWrap from "./ConfirmWrap";
import PointGuide from "./PointGuide";
import MeditationNotice from "./MeditationNotice";
import ProductGraph from "./ProductGraph";

const DetailWraper = () => {
  return (
    <div>
      <ProductGraph/>
      <ConfirmWrap />
      <PointGuide />
      <MeditationNotice />
    </div>
  );
};

export default DetailWraper;
