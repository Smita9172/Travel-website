import React from 'react';
import "../components/Navbarstyle.css";
import './components/Topline';

import { MennuItems } from './components/MennuItems';
import Topline from './components/Topline';

const Navbar=()=>{
    return(
    <>
        <div className='fluid-container '>
        <Topline/>
             </div>
      <nav class=" navbar navbar-expand-lg navbar-default">
      <div className='container'>
      <div class="collapse navbar-collapse  " id="navbarSupportedContent ">
           <ul class="navbar-nav">
           {MennuItems.map((item, index)=>{
           return (
       <li class="nav-item nlist active key={index}">
        <a class=" nav-link alist" href="#"><i className={item.icon}></i>{item.title}</a>
          </li>
            ) 
         })}
         </ul>
         </div>
         </div>
        </nav>

   </> );
}
export default Navbar;