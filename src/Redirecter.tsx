import React, { FC } from "react";

interface RedirecterProps {
  to: string;
}

const Redirecter: FC<RedirecterProps> = ({ to }) => {
  window.location.replace(to);
  document.body.style.backgroundColor = "black";

  return (
    <a href={to} style={{color: "white"}}>
      Click here if you are not automatically redirected to <b>{to}</b>.
    </a>
  )
}

export default Redirecter;
