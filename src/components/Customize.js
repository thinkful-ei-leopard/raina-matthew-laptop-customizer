import React from "react";

import Feature from './Feature'

function Customize(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    return (
      <Feature options={props.features[feature]} featureHash={featureHash} feature={feature} selected={props.selected} handleChange={props.handleChange}  />  
    );
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}

export default Customize;
