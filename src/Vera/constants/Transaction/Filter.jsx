import React from 'react';

const Filter = ({ typeFilter, setTypeFilter, categoryFilter, setCategoryFilter }) => (
  <div>
    <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
      <option value="all">Все</option>
      <option value="income">Доходы</option>
      <option value="expense">Расходы</option>
    </select>
    <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
      <option value="all">Все категории</option>
      <option value="Зарплата">Зарплата</option>
      <option value="Питание">Питание</option>
      <option value="Транспорт">Транспорт</option>
      <option value="Развлечения">Развлечения</option>
      <option value="Покупки">Покупки</option>
    </select>
  </div>
);

export default Filter;
