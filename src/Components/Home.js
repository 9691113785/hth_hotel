import { useEffect, useState } from 'react';

import './Home.css';
import Slider from './Slider'
import { useNavigate } from 'react-router-dom';

const Home = ({ city }) => {

    const [data, setData] = useState([
        {
            img: "https://uhdwallpapers.org/uploads/converted/18/05/29/bmw-i8-hybrid-car-3840x2160_56884-mm-90.jpg",
            name: "Hotel Sunshine",
            price: "2000",
            city: "Bhopal",
            location: "Ameerpet Hyderabad",
            facility: "Free Wifi, Good Food, Cab Facility"
        },
        {
            img: "https://uhdwallpapers.org/uploads/converted/18/05/29/bmw-i8-hybrid-car-3840x2160_56884-mm-90.jpg",
            name: "Hotel Sunshine",
            price: "2000",
            city: "Hyderabad",
            location: "Ameerpet Hyderabad",
            facility: "Free Wifi, Good Food, Cab Facility"
        },
        {
            img: "https://uhdwallpapers.org/uploads/converted/18/05/29/bmw-i8-hybrid-car-3840x2160_56884-mm-90.jpg",
            name: "Hotel Sunshine",
            price: "2000",
            city: "Rewa",
            location: "Ameerpet Hyderabad",
            facility: "Free Wifi, Good Food, Cab Facility"
        }
        , {
            img: "https://uhdwallpapers.org/uploads/converted/18/05/29/bmw-i8-hybrid-car-3840x2160_56884-mm-90.jpg",
            name: "Hotel Sunshine",
            price: "2000",
            city: "Hyderabad",
            location: "Ameerpet Hyderabad",
            facility: "Free Wifi, Good Food, Cab Facility"
        }
        ,
        {
            img: "https://uhdwallpapers.org/uploads/converted/18/05/29/bmw-i8-hybrid-car-3840x2160_56884-mm-90.jpg",
            name: "Hotel Sunshine",
            price: "2000",
            city: "Satna",
            location: "Ameerpet Hyderabad",
            facility: "Free Wifi, Good Food, Cab Facility"
        },
        {
            img: "https://uhdwallpapers.org/uploads/converted/18/05/29/bmw-i8-hybrid-car-3840x2160_56884-mm-90.jpg",
            name: "Hotel Sunshine",
            price: "2000",
            city: "Satna",
            location: "Ameerpet Hyderabad",
            facility: "Free Wifi, Good Food, Cab Facility"
        },
        {
            img: "https://uhdwallpapers.org/uploads/converted/18/05/29/bmw-i8-hybrid-car-3840x2160_56884-mm-90.jpg",
            name: "Hotel Sunshine",
            price: "2000",
            city: "Hyderabad",
            location: "Ameerpet Hyderabad",
            facility: "Free Wifi, Good Food, Cab Facility"
        }
    ])
    const [data1, setData1] = useState([]);

    const navigate = useNavigate();
    const [selectedHotel, setSelectedHotel] = useState(null);

    const handleBookNow = (hotel) => {
        setSelectedHotel(hotel);
        navigate('/booking', { state: { hotel } });
    };
    useEffect(() => {
        setData1(data.filter((i) => i.city == city))
    }, [city])
    return (
        <>
            <Slider />

            <div className="container-hotel" id="navbartop">
                <h1 style={{ margin: '10px' }}>The most Searched <span className='span-name'>Luxury</span> Hotels in {city}.</h1>
                <hr></hr>
                <div className="flexbox">

                    {
                        city && data1.map((i) =>
                            <div key={i.name}>
                                <div className="img_container"><img src={i.img} /></div>
                                <h3 className='p-2'>{i.name}</h3>
                                <p>{i.location}</p>
                                <p>&#8377;{i.price} per Day</p>

                                <button onClick={() => handleBookNow(i)}>Book Now</button>
                            </div>
                        )
                    }


                </div>
            </div>


            <div className="card text-center">
                <div className="card-header">Book Your Hotel</div>
                <div className="card-body">
                    <h5 className="card-title">within</h5>
                    <a id="#navbartop" className="btn btn-primary">5 minutes</a>
                    <p class="card-text">With 24x7 support.</p>

                </div>

            </div>
        </>
    )
}

export default Home