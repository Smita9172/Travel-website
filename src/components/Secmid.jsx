 import React from 'react';
import ReactDOM from 'react-dom'
 import SectionMenu from './sectionMenu'
 

const Midsec=()=>{
    return(
        <div className='col-xs-12'> 
        <img src='' alt='Photo' className='ayodhya' />
        <div className='card_info'>
            <h3></h3>
            <a href='' target='blank'></a>
            <button></button>
        </div>
        </div>

    )
}



const MidSec1=()=>{
    return(
        <div className='container'>
        <div className='row'>
        <div className='col-xs-12 col-lg-4'>
           <Midsec 
           imgsrc={SectionMenu[0].url}
           title={SectionMenu[0].title}
           link={SectionMenu[0].links}
            />
            <Midsec 
           imgsrc={SectionMenu[1].url}
           title={SectionMenu[1].title}
           link={SectionMenu[1].links}
            />
        </div>
        <div className='col-xs-12 col-lg-4'>
        <div className='col-xs-12'>
          <h3>about Janak Visiting 
          </h3>
        </div>
        </div>
        <div className='col-xs-12 col-lg-4'>
        <div className='col-xs-12'>
        <Midsec 
           imgsrc={SectionMenu[2].url}
           title={SectionMenu[2].title}
           link={SectionMenu[2].link}
            />
        </div>
        <div className='col-xs-12'>
        <Midsec 
           imgsrc={SectionMenu[3].url}
           title={SectionMenu[3].title}
           link={SectionMenu[3].link}
            />
        </div>
        </div>
        </div>
    </div>
    )
}
 export default MidSec1;