import React from "react";

function Date(){

 let currDate= new Date();
 currDate=currDate.getHours(); let greeting="";
    if( currDate>=1 && currDate<=12){
      greeting='Good morning';
    }else if(currDate>=12 && currDate<19){
      greeting='Good evening';
    }else{
      greeting="Good Night";
    }
    return(
        <>
            <div>
                <h1>Hello Sir,<span>{greeting}</span></h1>
            </div>
        </>
    )
}
export default Date;