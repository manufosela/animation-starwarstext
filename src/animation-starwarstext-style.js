import { css } from 'lit-element';

export const wcNameStyles = css`
  :host {
    --default-main-color: #fff;
  }
  :host *, :host ::after, :host ::before {
    box-sizing: border-box;
  }

  .main {
    position:relative;
    margin:0;
    padding:0;
    overflow: hidden;
    width:100%;
  }
  .titles  {  
    position: absolute;  
    bottom: 0;
    width: 100%;  
    font-size: 350%;  
    font-weight: bold;  
    text-align: justify;  
    overflow: hidden;  
    transform-origin: 50% 100%;  
    z-index: 1;
    border:0;
    text-align:center;
  }
  .titlecontent {
    position: absolute;
    top: 100%;
    width: 100%;
  }
    
  @keyframes scrollstw {  
    0%   { top: 100%; }  
    100% { top: -10%; }  
  }
  .titles:after {  
    position: absolute;  
    content: ' ';  
    left: 0;  
    right: 0;  
    top: 0;  
    bottom: 60%;  
    background-image: linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%);  
    pointer-events: none;  
  }
  .content{   
    width:100%;
  }`;
