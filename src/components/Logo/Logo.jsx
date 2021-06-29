import React from "react";
import logoSvg from "../../assets/images/twitter.svg";

export default function Logo(props) {

     return <img src={logoSvg} width={props?.width || '100'} height={props?.height || '100'} alt="app logo" />
}
