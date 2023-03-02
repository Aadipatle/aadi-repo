import React from 'react'

function FormGroup(props) {
  return (
   <div>
   <div className="form">
   <label>{props.label}</label>
   <input
    type= { props.type}
    onChange={props.onChange}
    id={props.id}
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
  />
   {props.errors && <p style={{ color: "red" }}>{props.errors}</p>}
</div>
   </div>

  );
}

export default FormGroup;