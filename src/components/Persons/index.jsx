import React, { useEffect } from 'react';
import { useState } from 'react';

import { USERS } from './constants';

import './style.scss';

const Persons = () => {
    const [users, setUsers] = useState([]);
    const [gender, setGender] = useState('Male');
    const [isActive, setIsActive] = useState();
    const [country, setCountry] = useState();
    const [ageRange, setAgeRange] = useState();
    const [joinDate, setJoinDate] = useState();

    useEffect(() => {
        setUsers(USERS);
    }, []);

    const handleJoinDateChange = (event) => setJoinDate(event.target.value);
    const handleAgeRangeChange = (event) => setAgeRange(event.target.value);
    const handleCountryChange = (event) => setCountry(event.target.value);
    const handleGenderChange = (event) => setGender(event.target.value);
    const handleActiveChange = () => setIsActive((prevstate) => !prevstate);

    const getAge = (age) => {
        const [minAge, maxAge] = ageRange.split('-').map(Number);
        return age >= minAge && age <= maxAge;
    }

    const renderSelected = () => (
        <div>
            <select name="selectedAgeRange" onChange={handleAgeRangeChange}>
                <option value="All">All</option>
                <option value="20-30">20-30</option>
                <option value="30-40">30-40</option>
                <option value="40-50">40-50</option>
            </select>

            <select name="selectedCountry" onChange={handleCountryChange}>
                <option value="All">All</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
            </select>

            <select name="selectedJoinDay" onChange={handleJoinDateChange}>
                <option value="All">All</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    );

    const renderItems = () => users.map((item) => {
        const [year] = item.joinDate.split('-').map(Number)
        return item.gender === gender
            && (joinDate !== undefined && ageRange !== 'All' ? Number(joinDate) === year : true)
            && (ageRange !== undefined && ageRange !== 'All' ? getAge(item.age) : true)
            && (isActive !== undefined ? item.isActive === isActive : true)
            && (country !== undefined && country !== 'All' ? item.country === country : true)
            && (
               <div className='cardsWrapper'>
                    <p>name: {item.name}</p>
                    <p>age: {item.age}</p>
                    <p>gender: {item.gender}</p>
                    <p>email: {item.email}</p>
                    <p>country: {item.country}</p>
                    <p>isActive: {item.isActive}</p>
                    <p>company: {item.company}</p>
                    <p>position: {item.position}</p>
                    <p>joinDate: {item.joinDate}</p>
               </div>
            );
    });

    return (
        <div>
            <div>
            <div className="genderWrapper">
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={handleGenderChange}
                />
                Male
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={handleGenderChange}
                />
                Female
            </div>

            <input
                name="isActive"
                type="checkbox"
                // checked={isActive}
                onChange={handleActiveChange}
            />
            Active

            {renderSelected()}
            </div>
            <div className='itemsWrapper'>
                {renderItems()}
            </div>
        </div>
    );
};

export default Persons;
