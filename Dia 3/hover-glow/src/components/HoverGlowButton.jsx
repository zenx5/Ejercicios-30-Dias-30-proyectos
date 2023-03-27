
import styled from "@emotion/styled";

import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";

const Anchor = styled.a`
position: relative;
display: block;
width: fit-content;
height: 4rem;
text-align: center;
line-height: 4rem;
background: #171515;
border-radius: 10px;
font-size: 1.4rem;
color: #e8ee9b;
transition: 0.5s;
&:before {
  content: '';
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  border-radius: 10px;
  background: #0197fc;
  transition: .5s;
  transform: scale(.9);
  z-index: -1;
}
&:hover:before {
    
  transform: scale(1.2);
  box-shadow: 
              0 0 15px #5e50f5;
  filter: blur(3px);
}
&:hover {
  color: black;
  background: lavender;
  box-shadow: 
              0 0 15px #5e50f5;
  text-shadow: 
              0 0 15px #5e50f5;
}
`;

export default function HoverGlowButton({ text , url }) {
 
  return <Anchor href={url} role="button" >{ text  } </Anchor>
}
