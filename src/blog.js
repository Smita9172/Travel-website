
const Blog=(props)=>{
    const blogs=props.blogs;
    console.log(props,blogs);
    return
    (
      <div>
        {blogs.map((blogs)=>(
        <div className='blog-preview' key={blogs.id}>
        <h2>{blogs.title}</h2>
        <p>written by {blogs.author}</p>
      </div>
      ))}
      </div>
    );
}
export default Blog;

import react from 'react';
/*import { ImageItems, MennuItems } from './MennuItems';
import '../components/ImagesSliderStyle.css';

const Slider=()=>{
    return (
        <>
        <div className='slider-frame'>
            <div className='slide-images'>
                <div className=''>
                    {MennuItems.map((item,index)=>{
                        return(
                            <img  src={ImageItems}/>
                        )
                     } )
                    }
                </div>
            </div>
        </div>
        </>
    );
}
export default Slider;*/