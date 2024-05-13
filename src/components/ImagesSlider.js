import React from 'react';
import '../components/CSS/ImageSlider.css'
import Carousel from 'react-bootstrap/Carousel';
import gkpTemple from  '../photos/gkpTemple.webp';
import ghatvrns from '../photos/ghatvrns.jpg';
import taj_mahal_03New from '../photos/taj_mahal_03New.jpg';
import newRammandir from '../photos/newRammandir.png';



function NewSlide(props){
  return(
    <div className=" fluid-container lbanner">
              <div className="col-xs-12 slideImg">
              <img  src={props.imgsrc} />
              </div>
              </div>

  )
}

function CarouselPage(){
    return(
       <div style={{marginBottom:"80px",backgroundColor:"#FFF2E1"}} >
            <Carousel className='imgSlide' style={{ }}>
              <Carousel.Item  >
              <NewSlide imgsrc={newRammandir}  />
                <Carousel.Caption>
                  <h3 style={{color:"#fff"}}>Ram Janmabhoomi (Birthplace of Lord Ram)</h3>
                  <p style={{color:"#fff"}}>Discover the sacred vibes of Ram Mandir, where every stone echoes the tales of Lord Ram's glory</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item  >
              <NewSlide imgsrc={gkpTemple} />
                <Carousel.Caption>
                  <h3 style={{color:"#fff"}}>Gorakhnath Temple</h3>
                  <p style={{color:"#fff"}}> Discover the spiritual treasures of Gorakhnath Mandir, where devotion and inner exploration Intertwine</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <NewSlide  imgsrc={taj_mahal_03New} />
                <Carousel.Caption>
                  <h3 style={{color:"#fff"}} >Taj Mahal (Monument of Eternal Love)</h3>
                  <p style={{color:"#fff"}} >Let the ethereal beauty of the Taj Mahal take your breath away, as you immerse yourself in its unparalleled grace and magnificence."
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <NewSlide imgsrc={ghatvrns} />
              
                <Carousel.Caption>
                  <h3>Varanasi Heritage Town</h3>
                  <p>Varanasi is not just a place; it's an experience that resonates with the soul, leaving an imprint for eternity.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
          );
}
export default CarouselPage;