import React from "react";

function Alerts(props) {
    const cap = (e)=>{
      const lower= e.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
   props.alert && <div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{cap(props.alert.type)}</strong> :{props.alert.message}
        <button
          type="button btn-primary"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

export default Alerts;
