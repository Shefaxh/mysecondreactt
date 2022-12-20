import React from 'react';
import {IoDiamondOutline} from 'react-icons/io5';
import {BsLaptop} from 'react-icons/bs';
import {BsGlobe} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'


function Service() {


  return (
    <div className='service'>
         <div>
        <h2>At Your Service</h2>

    </div >
 
<div className='parts'>


    <div className='first'>
<IoDiamondOutline style={{color:'#dc3545',fontSize: '30px'}}></IoDiamondOutline>
 <h3>Sturdy Themes</h3>
 <p>Our themes are updated regularly <br></br> to keep them bug free!</p>
    </div>

    <div className='second'>
        <BsLaptop style={{color:'#dc3545',fontSize: '30px'}}></BsLaptop>
        <h3 >Up to Date</h3>
         <p>All dependencies are kept current <br></br> to keep things fresh.</p>
        
    </div>

    <div className='third'>
        <BsGlobe style={{color:'#dc3545',fontSize: '30px'}}></BsGlobe>
       <h3>Ready to Publish</h3>
        <p>You can use this design as is, or <br></br> you can make changes!</p>
        
    </div>


    <div className='four'>
<AiOutlineHeart style={{color:'#dc3545', fontSize: '30px'}}></AiOutlineHeart>
<h3>Made with Love</h3>
<p>Is it really open source if it's not <br></br> made with love?</p>
    </div>
    </div>



    <div className='photos1'>
        <div className='card'>
            <img src="	https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/thumbnails/1.jpg" alt="" />
            <div className='carditem1'>
                <h5>Category</h5>
                <h3>PROJECT NAME</h3>
            </div>
        </div>
        <div className='card'>
            <img src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/thumbnails/2.jpg" alt="" />
            <div className='carditem1'>
                <h5>Category</h5>
                <h3>PROJECT NAME</h3>
            </div>

        </div>
        <div className='card'>
             <img src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/thumbnails/3.jpg" alt="" />

             <div className='carditem1'>
                <h5>Category</h5>
                <h3>PROJECT NAME</h3>
            </div>
        </div>
        
       
       
    </div>
    <div className='photos2'>
        <div className='card'>
            <img src="	https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/thumbnails/4.jpg" alt="" />
            <div className='carditem1'>
                <h5>Category</h5>
                <h3>PROJECT NAME</h3>
            </div>
        </div>
        <div className='card'>
             <img src="	https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/thumbnails/5.jpg" alt="" />
            <div className='carditem1'>
                <h5>Category</h5>
                <h3>PROJECT NAME</h3>
            </div>
        </div>
        <div className='card'>
           <img src="https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/thumbnails/6.jpg" alt="" />

            <div className='carditem1'>
                <h5>Category</h5>
                <h3>PROJECT NAME</h3>
            </div>
        </div>
        
        
    </div>


   </div>
  )
}

export default Service