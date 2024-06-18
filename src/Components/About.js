import React from 'react';
import hotelImage from '../assests/hotel2.jpg'; // Replace with your hotel image path

const About = () => {
    return (
        <div className="container mt-5">
            <div className="row mb-2">
                
                <div className="col-md-6 mb-4 mb-md-0">
                    <img src="https://i.pinimg.com/736x/52/e9/17/52e917b0d0cf5b749f42b5371f39ecd8.jpg" className="img-fluid rounded shadow-lg" alt="Hotel" />
                </div>
                
                 <div className="col-md-6">
                    <div className="about-text">
                        <h2 className="mb-4">About Our Hotel HTH</h2>
                        <p className="lead">
                        Hotel HTH is a digital travel platform that brings high-value and rewarding travel experiences to people all over the India through the 
                        HTH website. Our mission is to empower everyone to be a traveler by offering affordable deals on hotels with a hassle-free booking 
                        experience from start to finish. HTH is a travel-tech company , 24/7 customer service,  supported by a dedicated and diverse team.
                        
                        </p>
                        <p>
                        Discover the unparalleled convenience of instant hotel bookings with us. At HTH Hotel, we redefine efficiency by offering seamless reservations in just 5 minutes or less. Whether you're planning a last-minute getaway or a meticulously planned trip, our user-friendly platform ensures swift and hassle-free bookings tailored to your preferences.
                        </p>
                        <p>
                        Our commitment to excellence extends beyond speed, ensuring every aspect of your stay is met with unparalleled professionalism and care. With a wide array of hotels to choose from, ranging from budget-friendly accommodations to luxurious escapes, we cater to every traveler's needs and desires.
                        </p>
                        <p>
                        Experience the ease of securing your ideal lodging with a few simple clicks or taps. Our intuitive interface and dedicated customer support team are always at your service, ensuring a smooth booking process from start to finish.
                        </p>
                        <p>
                        Join countless satisfied travelers who rely on HTH Hotel Booking for their accommodation needs. Whether for business or leisure, we're here to make your journey memorable and stress-free with our commitment to efficiency and excellence in hospitality booking services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
