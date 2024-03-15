import React from 'react'
import "../css/Carousels.css";
import Photo1 from '../images/Home_page_carousal_photo01.jpg';
import Photo2 from '../images/Home_page_carousal_photo02.jpg';
import Photo3 from '../images/Home_page_carousal_photo03.jpg';

function Carousels() {
  
  return (
    <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Photo1} style={{ height: '90vh' }} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Photo2} style={{ height: '90vh' }} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Photo3} style={{ height: '90vh' }} className="d-block w-100" alt="..."/>
    </div>
  </div>
  
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>
  )
}

export default Carousels
