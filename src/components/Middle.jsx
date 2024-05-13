import React from 'react';
import '../components/CSS/MidSec.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


 
 

import gkptemplefront from '../photos/gkptemplefront.avif'
import rammandir3 from '../photos/rammandir3.jpg';
import agrataj3 from'../photos/agrataj3.jpg';
import vrns3 from '../photos/vrnss3.jpg'


const Midsec=(props)=>{
    console.log(props);
    return(
        <div className='col-xs-12 placeImg'> 
        <img src={props.imgsrc} alt='Photo' className='ayodhya' />
        <div className='card_info'>
            <h3>{props.title}</h3>
            <a href='' target='blank'>Explore More {props.links}</a>
            
        </div>
        </div>

    )
}
const MidSec1=()=>{
    return(
        <div className='midsec1' >
        <Container>
            <Row>
                <Col xs lg="4" >
                <Midsec 
                   imgsrc={rammandir3}
                   title="Ayodhya"
                   link="#"
             />
             <Midsec
                imgsrc={agrataj3}
                title="Agra"
                   link="#"
             />
                </Col>
                <Col md="auto" lg="4"> 
                <h4>
                The J.A.N.A.K.K explore the beauty of Uttar Pradesh, mainly the places such as Agra, Banaras, Ayodhya, and Gorakhpur.
                      </h4>
                </Col>
                <Col xs lg="4"> 
                
                 <Midsec 
                        imgsrc={vrns3}

                        title="Banaras"
                        link="#"
            />
            <Midsec
                imgsrc={gkptemplefront}
                title="Gorakhpur"
                   link="#"
             />
                </Col>
            </Row>
        </Container>
        </div>
    )
}
 export default MidSec1;