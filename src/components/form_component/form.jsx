import React from "react";
import "./form.css";
import Input from "../../components/input_component/input";
function form(props) {
  return (
    <formComponent className="formBody">
      {props.info.map((value, id) => {
        return <Input title={value} type={props.type[id]}/>;
      })}

      <div className="btn">Join Now</div>
    </formComponent>
  );
}

export default form;
