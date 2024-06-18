import React from 'react';
import hotel1 from '../assests/hotel1.jpg';
import hotel2 from '../assests/hotel2.jpg';
import hotel3 from '../assests/hotel3.jpg';

const Slider = () => {
    return (
        <div id="demo" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>


            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={hotel1} alt="Los Angeles" className="d-block" style={{width:'100%'}} />
                </div>
                <div class="carousel-item">
                <img src={hotel2} alt="Los Angeles" className="d-block" style={{width:'100%'}} />
                </div>
                <div class="carousel-item">
                <img src={hotel3} alt="Los Angeles" className="d-block" style={{width:'100%'}} />
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>


    )
}

export default Slider;