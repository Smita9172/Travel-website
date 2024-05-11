import React from 'react';
import '../components/CSS/ImageSlider.css'
import Carousel from 'react-bootstrap/Carousel';
import gkpTemple from  '../photos/gkpTemple.webp';
import ghatvrns from '../photos/ghatvrns.jpg';
import taj_mahal_03New from '../photos/taj_mahal_03New.jpg';
import ramMAndir2New from '../photos/ramMandirNew.webp';

function CarouselPage(){
    return(
       
            <Carousel>
              <Carousel.Item>
              <div className=" fluid-container lbanner">
              <div className="col-xs-12 slideImg">
              <img  src={ramMAndir2New} />
              </div>
              </div>
                <Carousel.Caption>
                  <h3 style={{color:"#fff", backgroundColor:"#C29470"}} >Ram Janmabhoomi (birthplace of Lord Ram)</h3>
                  <p style={{color:"#fff", backgroundColor:"#C29470"}} >Discover the sacred vibes of Ram Mandir, where every stone echoes the tales of Lord Ram's glory</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <div className="fluid-container ">
              <div className="slideImg" >
              <img src={gkpTemple}  />
              </div>
              </div>
                <Carousel.Caption>
                  <h3 style={{color:"#DD5746",backgroundColor:"#EDECC7"}}>Gorakhnath Temple</h3>
                  <p style={{color:"#DD5746",backgroundColor:"#EDECC7"}}> Discover the spiritual treasures of Gorakhnath Mandir, where devotion and inner exploration intertwine</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <div className="fluid-container ">
              <div className='slideImg'>
              <img src={taj_mahal_03New}/>
              </div>
              </div>
                <Carousel.Caption>
                  <h3 style={{color:"rgb(197, 84, 8)"}} >Taj Mahal (Monument of Eteral Love)</h3>
                  <p style={{color:"rgb(197, 84, 8)"}} >Let the ethereal beauty of the Taj Mahal take your breath away, as you immerse yourself in its unparalleled grace and magnificence."
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <div className="fluid-container">
              <div className='slideImg'>
              <img src={ghatvrns}/>
              </div>
              </div>
                <Carousel.Caption>
                  <h3>Varanasi Heritage Town</h3>
                  <p>Varanasi is not just a place; it's an experience that resonates with the soul, leaving an imprint for eternity.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          );
}
export default CarouselPage;