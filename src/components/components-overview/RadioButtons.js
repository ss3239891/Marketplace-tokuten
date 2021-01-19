import React from "react";
import { FormRadio } from "shards-react";

const RadioButtons = () => (
  <div style ={{display:"block"}}>
  <div style={{backgroundColor:"white",width:"232px",height:"343px",borderRadius:"10px",paddingLeft:"16px"}}>
  
    <strong className=" radio-title">Categories</strong>
   
    <fieldset>
      <FormRadio defaultChecked>Travel</FormRadio>
      <FormRadio defaultChecked>Business</FormRadio>
      <FormRadio >Shopping</FormRadio>
      <FormRadio > 
      Luxury
      </FormRadio>
      <FormRadio > 
      Lifestyle
      </FormRadio>
      <FormRadio > 
      Online
      </FormRadio>
     
    </fieldset>
  </div>
  <div style={{backgroundColor:"white",width:"232px",height:"196px",borderRadius:"10px",paddingLeft:"16px",marginTop:"16px"}}>
  
  <strong className=" radio-title">Radio Buttons</strong>
  
  <fieldset>
    <FormRadio defaultChecked>Default</FormRadio>
   
    <FormRadio >Disabled</FormRadio>
    <FormRadio > 
      Disabled Checked
    </FormRadio>
  </fieldset>
</div>
<div style={{backgroundColor:"white",width:"232px",height:"196px",borderRadius:"10px",paddingLeft:"16px",marginTop:"16px",marginBottom:"17px"}}>
  
  <strong className=" radio-title">Radio Buttons</strong>
  
  <fieldset>
    <FormRadio defaultChecked>Default</FormRadio>
   
    <FormRadio >Disabled</FormRadio>
    <FormRadio > 
      Disabled Checked
    </FormRadio>
  </fieldset>
</div>
</div>
);

export default RadioButtons;
