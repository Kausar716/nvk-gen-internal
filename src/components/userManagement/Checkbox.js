import React from "react";

export const CheckBox = props => {
  return (
   <div>

  
   <ul class="list-unstyled">
   <li>
    <div class="custom-control custom-checkbox">
      <input
        key={props.id}
        onClick={props.handleCheckChieldElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />{" "}
      {props.value}
      <span>{props.address}</span>
      {/* <label class="custom-control-label pl-2" for="customCheck1">Farm E <span>1105 HWY5, Dundas, CN</span></label> */}
    </div>
    </li>
    </ul>
    </div>
  );
};

export default CheckBox;
