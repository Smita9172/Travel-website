import React from "react";
import sdata from "./sdata";
import Card from "./Cards";

const Netflix=()=>{
return(
    <Card
    key={sdata[0].id}
    sname={sdata[0].sname}
      imgsrc={sdata[0].imgsrc}
      title={sdata[0].title}
      link={sdata[0].links}
    />
)}
export default Netflix;