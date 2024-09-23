import React, { useState, useEffect } from 'react';
import generateUsers from './helpers/generateUsers';

import './styles.scss'

function UserFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [gender, setGender] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [selectedAgeRange, setSelectedAgeRange] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [users, setUsers] = useState(generateUsers(10));
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    let filtered = users;

    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (gender) {
      filtered = filtered.filter(user => user.gender === gender);
    }

    if (isActive) {
      filtered = filtered.filter(user => user.isActive === isActive);
    }

    if (selectedAgeRange) {
      const [minAge, maxAge] = selectedAgeRange.split('-').map(Number);
      filtered = filtered.filter(user => user.age >= minAge && user.age <= maxAge);
    }

    
    if (selectedCountry) {
      filtered = filtered.filter(user => user.country === selectedCountry);
    }

    setFilteredUsers(filtered);
  }, [searchTerm, gender, isActive, selectedAgeRange, selectedCountry, users]);

  const resetFilters = () => {
    setSearchTerm('');
    setGender('');
    setIsActive(false);
    setSelectedAgeRange('');
    setSelectedCountry('');
    setFilteredUsers(users); 
  };

  return (
    <div className="user-filter">
      <h1>Фильтр пользователей</h1>

      <input
        type="text"
        placeholder="Поиск по имени"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input-field"
      />

      <div className="gender-filters">
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === 'Male'}
            onChange={(e) => setGender(e.target.value)}
          />
          Мужской
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === 'Female'}
            onChange={(e) => setGender(e.target.value)}
          />
          Женский
        </label>
      </div>

      <label className="checkbox-filter">
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
        Активные пользователи
      </label>

      <select
        value={selectedAgeRange}
        onChange={(e) => setSelectedAgeRange(e.target.value)}
        className="select-filter"
      >
        <option value="">Любой возраст</option>
        <option value="20-30">20-30</option>
        <option value="30-40">30-40</option>
        <option value="40-50">40-50</option>
      </select>

      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="select-filter"
      >
        <option value="">Любая страна</option>
        <option value="USA">США</option>
        <option value="Canada">Канада</option>
        <option value="Germany">Германия</option>
        <option value="Japan">Япония</option>
      </select>

      <button onClick={resetFilters} className="reset-button">
        Сбросить фильтры
      </button>

      <h2>Список пользователей:</h2>
      <ul className="user-list">
        {filteredUsers.map(user => (
          <li key={user.id} className="user-item">
            {user.name}, {user.age} лет, {user.gender}, {user.country}, {user.isActive ? 'Активен' : 'Неактивен'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserFilter;