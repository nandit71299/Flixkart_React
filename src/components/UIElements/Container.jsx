import React from "react";

const Container = React.forwardRef((props, ref) => {
  return (
    <div style={props.styles} ref={ref}>
      {props.children}
    </div>
  );
});

export default Container;
