import React from "react";
import "./form.css";
import Input from "../../components/input_component/input";
function form(props) {
  return (
    <form className="formBody" onSubmit={props.handleSubmit}>
      {props.info.map((value, id) => {
        return (
          <Input
            label={value}
            handleChange={props.handleChange}
            name={props.id[id]}
            id={props.id[id]}
            type={props.type[id]}
          />
        );
      })}

      <div className="btn">Join Now</div>
    </form>
  );
}

export default form;
