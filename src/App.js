import logo from './logo.svg';
import './App.css';

import MainPage from './components/Main';
import ToDOList from './components/ToDOList';
import Persons from './components/Persons';
import FilterSystem from './Edgaras/PersonsFilterSystem'

function App() {
  return (
    <div>
      {/* <MainPage /> */}
      {/* <ToDOList /> */}
      {/* <Persons /> */}
      <FilterSystem/>
    </div>
  );
}

export default App;
