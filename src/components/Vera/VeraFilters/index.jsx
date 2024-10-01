import React, { useState, useEffect } from 'react';
import {Users} from'../constants/index'

//import './style.scss'

const UserFilter = () => {

  const[searchTerm, setSearchTerm] = useState ('');
  const[gender, setGender] = useState ('');
  const[isActive, setIsActive] = useState (false);
  const[selectedAgeRange, setSelectedAgeRange] = useState ('');
  const[selectedCountry, setSelectedCountry] = useState ('');

  const resetFilters = () => {
    setSearchTerm('');
    setGender('');
    setIsActive(false);
    setSelectedAgeRange('');
    setSelectedCountry('');
  };

    const handleSearchChange = (event) => setSearchTerm(event.target.value);
    const handleGenderChange = (event) => setGender(event.target.value);
    const handleActiveChange = () => setIsActive((prevState) => !prevState);
    const handleAgeRange = (event) => setIsActive(event.target.value);
    const handleCountryChange = (event) => setSelectedCountry(event.target.value);

      const  filteredUsers = Users.filter(user => {
        const matchesName = user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
        const matchesGender = gender ? user.gender === gender : true;
        const matchesActivity = isActive ? user.isActive === true : true;
        const matchesAge = selectedAgeRange ? (
          selectedAgeRange ==='20-30' && user.age >= 20 && user.age <= 30||
          selectedAgeRange ==='30-40' && user.age >= 30 && user.age <= 40||
          selectedAgeRange ==='40-50' && user.age >= 40 && user.age <= 50
        ) : true
        const matchesCountry = selectedCountry ? user.country === selectedCountry : true;

        return matchesName && matchesGender && matchesActivity && matchesAge && matchesCountry;
      });

      return (
        <div>
          <div>
            <h2>User List</h2>
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className= "genderWrapper">
            <label>
                <input 
                  type="radio" 
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={handleGenderChange}
                />
                Male
            </label>
            <label>
              <input 
                type="radio"
                name="gender"
                value="Female"
                checked={gender === 'Female'}
                onChange={handleGenderChange} 
              />
              Female
            </label>
          </div>
          <label >
            <input
              name="isActive"
              type="checkbox"
              checked={isActive}
              onChange={handleActiveChange}
            />
              Active
          </label>

          <select 
            name="selectCountry" value={selectedCountry} onChange={handleCountryChange} >
              <option value="">All countries</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
          </select>

            <button onClick={resetFilters}>Reset Filters</button>

            <ul>
              {filteredUsers.map(user =>(
                <li key={user.id}>
                  {user.name} ({user.age}, {user.gender}, {user.country}) - {user.isActive ? 'Active' : 'Inactive'}
                </li>
              ))}
            </ul>
        </div>


      )


  }
export default UserFilter;