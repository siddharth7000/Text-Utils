import React from "react";

export default function Alert (props) {
    const capitalizefirst=(word)=>{
        let low= word.toLowerCase()
        return low.charAt(0).toUpperCase() + low.slice(1)
    }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalizefirst(props.alert.type)}:</strong> {props.alert.msg}
</div>
  );
}
