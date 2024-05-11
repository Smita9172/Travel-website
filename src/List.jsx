import React from "react";
 
function List(){
    return <ol>
    <li>nimmi</li>
    <li>SMita </li>
    <li>Raj Shree</li>
    <li>nimman</li>
  </ol>
}
export default List;
<nav class="container navbar navbar-expand-lg navbar-light">
<a class="navbar-brand " href="#"><img src={janak} className='img' alt='janakimg'/></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon "></span>
</button>

<div class="collapse navbar-collapse  " id="navbarSupportedContent ">
<ul class="navbar-nav navend">

{MennuItems.map((item, index)=>{
return (
<li class="nav-item active key={index}">
<a class="nav-link text-white" href="#"> <i className={item.icon}></i>{item.title}</a>
</li>
)
})}
</ul>
</div>
</nav>