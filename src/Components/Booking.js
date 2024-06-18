import React, { useState } from 'react';
import './Booking.css'; // Import your custom CSS file for styling
import logo from '../assests/hth.jpg';
import { useLocation } from 'react-router-dom';

function Booking() {

    const location = useLocation();
    const { hotel } = location.state;

    const [formData, setFormData] = useState({
        name: '',
        hotelname: hotel.name,
        city:hotel.city,
        contact: '',
        checkInDate: '',
        totaldaystostay: '',
        gender: 'Male',
        paymentMode: 'Pay At Hotel',
        amounttopay: hotel.price,
        paymentScreenshot: null
    });

    const [errors, setErrors] = useState({});

    

    const handleChange = (e) => {
        const { id, value, type, files } = e.target;
    
        if (type === 'file') {
            setFormData({ ...formData, [id]: files[0] });
        } else {
            // Handle special case for totaldaystostay to ensure it's always a positive integer
            if (id === 'totaldaystostay') {
                const days = parseInt(value) || 0; // Convert value to integer, default to 0 if parsing fails
            const price = parseFloat(hotel.price) || 0; // Convert hotel price to float, default to 0 if parsing fails
            const amount = days * price; // Calculate new amount to pay
                setFormData(prevState => ({
                    ...prevState,
                    [id]: days,
                    amounttopay: amount.toFixed(2) // Update amounttopay based on days and price
                }));
            } else {
                setFormData({ ...formData, [id]: value });
            }
        }
    };
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validations
        const validationErrors = {};
        if (!formData.name.trim()) {
            validationErrors.name = 'Name is required';
        }
        if (!formData.contact.trim()) {
            validationErrors.contact = 'Contact Number is required';
        } else if (!/^\d{10}$/.test(formData.contact.trim())) {
            validationErrors.contact = 'Contact Number must be 10 digits';
        }
        if (!formData.checkInDate) {
            validationErrors.checkInDate = 'CheckIn Date is required';
        }
        else {
            const today = new Date();
            const checkInDate = new Date(formData.checkInDate);
            if (checkInDate < today) {
                validationErrors.checkInDate = 'CheckIn Date must be today or later';
            }
        }
        if (!formData.totaldaystostay) {
            validationErrors.totaldaystostay = 'Number of Days to Stay is required';
        }
        else {
            if (formData.totaldaystostay <= 0) {
                validationErrors.totaldaystostay = 'Days must be greater than 0';
            }
        }

        if (formData.paymentMode === 'Pay Online' && !formData.paymentScreenshot) {
            validationErrors.paymentScreenshot = 'Payment Screenshot is required for Pay Online';
        }

        // If there are validation errors, update state and return
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        else{
            alert("Hotel Booked Successfully.")

            
        }

        


    };

    return (
        <div className="booking-container">
            <div className="booking-card">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp" alt="Sample photo" className="booking-card-image" />
                <div className="booking-card-body">
                    <h3 className="booking-card-title">Customer Details</h3>
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact Number</label>
                            <input
                                type="text"
                                className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
                                id="contact"
                                value={formData.contact}
                                onChange={handleChange}
                            />
                            {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="hotelname">Hotel Name</label>
                            <input
                                type="text"
                                className=" form-control"
                                id="hotelname"
                                value={`${formData.hotelname},${formData.city}`}
                                readOnly
                            />
                        </div>


                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="checkindate">CheckIn Date</label>
                                <input
                                    type="date"
                                    className={`form-control datepicker ${errors.checkInDate ? 'is-invalid' : ''}`}
                                    id="checkInDate"
                                    value={formData.checkInDate}
                                    onChange={handleChange}
                                />
                                {errors.checkInDate && <div className="invalid-feedback">{errors.checkInDate}</div>}
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="Total Days to Stay">Total Days to Stay</label>
                                <input
                                    type="number"
                                    className={`form-control ${errors.totaldaystostay ? 'is-invalid' : ''}`}
                                    id="totaldaystostay"
                                    value={formData.totaldaystostay}
                                    onChange={handleChange}
                                />
                                {errors.totaldaystostay && <div className="invalid-feedback">{errors.totaldaystostay}</div>}
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="gender">Gender</label>
                                <select
                                    className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                                    id="gender" // Corrected id
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="mode">Payment Mode</label>
                            <select
                                className={`form-control ${errors.paymentMode ? 'is-invalid' : ''}`}
                                id="paymentMode"
                                value={formData.paymentMode}
                                onChange={handleChange}>
                                <option>Pay At Hotel</option>
                                <option>Pay Online</option>
                            </select>
                            {errors.paymentMode && <div className="invalid-feedback">{errors.paymentMode}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="amounttopay">Amount To Pay</label>
                            <input
                                type="text"
                                className="form-control"
                                id="amounttopay"
                                value={formData.amounttopay}
                                readOnly
                            />
                        </div>

                        {formData.paymentMode === 'Pay Online' && (
                            <div className="form-group">
                                <img src={logo} width="150px" height="150px" alt="Logo" />
                            </div>
                        )}
                        {formData.paymentMode === 'Pay Online' && (
                            <div className="form-group">
                                <label htmlFor="paymentScreenshot">Upload Payment Screenshot</label><br />
                                <input type='file' id="paymentScreenshot" onChange={handleChange} />
                                {errors.paymentScreenshot && <div className="invalid-feedback">{errors.paymentScreenshot}</div>}
                            </div>
                        )}
                        <button type="submit" className="btn btn-success btn-lg">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Booking;
