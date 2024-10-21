import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import LightFolio from './Edgaras/Templates';
function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<MainPage />} />
    //     <Route path="/vera/contacts" element={<Contacts />} />
    //     <Route path="/to-do-list" element={<ToDOList />} />
    //     <Route path="/user-filter" element={<UserFilter />} />
    //     <Route path="/persons" element={<Persons />} />
    //     <Route path="/filter-system" element={<FilterSystem />} />
    //   </Routes>
    // </BrowserRouter>
    <LightFolio />
  );
}


export default App;
