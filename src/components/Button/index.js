import React from "react";

import {Button as MyButton} from "./style"

function Button({children, ...props}) {
  return <MyButton {...props}>{children}</MyButton>;
}

export default Button;
