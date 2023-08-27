import React, { useState } from 'react';
import Sidebar from '../Sidebar'
import { useEffect } from "react";
import { loadShop } from "../../../redux/actions/shop";
import { useDispatch, useSelector } from 'react-redux';
import './VendorStats.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Stats = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const totalProfitDay = 1500;
    const totalProfitMonth = 30000;
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    const isInRange = (date) => {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        return date >= firstDayOfMonth && date <= currentDate;
    };

    const calculateProfit = () => {
        const costPrice = 1200;
        const sellingPrice = 1600;
        const profit = sellingPrice - costPrice;
        return profit >= 0 ? profit : 0;
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const getLowQuantityVegetables = () => {
        return vegetables.filter((vegetable) => vegetable.quantity < vegetable.minThreshold);
    };

    const getTopSellingProducts = () => {
        const sortedVegetables = [...vegetables].sort((a, b) => b.sales - a.sales);
        return sortedVegetables.slice(0, 3);
    };





    const dispatch = useDispatch();

    const { user } = useSelector(
        state => state.user
    );


    useEffect(() => {

        if (user && user.email) {
            console.log(user.email);
            const email = user.email;
            dispatch(loadShop(email));
        }


    }, [dispatch, user]);

    return (
        <>
            <Sidebar />
            <div className="vendor-stats">
                <div className="stats-row">
                    <div className="stats-card">
                        <h2>Total Profit for the Day</h2>
                        <p className="profit">₹{calculateProfit()}</p>
                    </div>
                    <div className="stats-card">
                        <h2>Total Profit for the Month</h2>
                        <p className="profit">₹{totalProfitMonth}</p>
                        <div className="date-picker-container">
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                placeholderText="Select a date"
                                dateFormat="MMMM d, yyyy"
                                filterDate={isInRange}
                                maxDate={currentDate}
                                showMonthDropdown
                                useShortMonthInDropdown
                                showYearDropdown
                                scrollableYearDropdown
                            />
                        </div>
                    </div>
                </div>
                <div className="stats-row">
                    <div className="stats-card">
                        <h2>Available Stock</h2>
                        <div className="stock-carousel">
                            <Slider {...sliderSettings}>
                                {vegetables.map((vegetable) => (
                                    <div key={vegetable.name}>
                                        <p style={{ fontSize: '20px' }}>{vegetable.name}</p>
                                        <p style={{ fontSize: '15px' }}> {vegetable.quantity} Kg</p>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    {getLowQuantityVegetables().length > 0 && (
                        <div className="stats-card low-quantity-section">
                            <h2>Low Quantity Vegetables</h2>
                            <div className="low-quantity-list">
                                {getLowQuantityVegetables().map((vegetable) => (
                                    <p key={vegetable.name}>{vegetable.name}</p>
                                ))}
                            </div>
                        </div>
                    )}

                </div>


                <div className="stats-card">
                    <h2>Top Selling Products</h2>
                    <div className="top-selling-list">
                        {getTopSellingProducts().map((vegetable) => (
                            <p key={vegetable.name}>
                                {vegetable.name}: {vegetable.sales} Kg sold
                            </p>
                        ))}
                    </div>
                </div>

            </div>

        </>

    )
}

export default Stats;

const vegetables = [
    { name: 'Tomato', quantity: 50, minThreshold: 10, sales: 25 },
    { name: 'Cucumber', quantity: 4, minThreshold: 5, sales: 1 },
    { name: 'Carrot', quantity: 10, minThreshold: 5, sales: 8 },
    { name: 'Potato', quantity: 11, minThreshold: 3, sales: 5 },
    // ... other vegetables ...
];