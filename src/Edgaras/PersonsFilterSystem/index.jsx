import React, { useState, useEffect } from "react";
import { USERS } from "./PeapleList/List";
import "./style.scss";

function FilterSystem() {
  const [Users, SetUser] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [gender, setGender] = useState("All");
  const [country, setCountry] = useState("All");
  const [AgeRange, setAgeRange] = useState("All");
  const [JoinDate, setJoinDate] = useState("All");

  useEffect(() => {
    SetUser(USERS);
  });

  const HendleisActive = () => setIsActive((prevstate) => !prevstate);
  const HendleGender = (event) => setGender(event.target.id);
  const HendleCountryChange = (event) => setCountry(event.target.value);
  const HendleAgeChange = (event) => setAgeRange(event.target.value);
  const HendleJoinChange = (event) => setJoinDate(event.target.value);

  const getage = (age) => {
    const [MinAge, MaxAge] = AgeRange.split("-").map(Number);
    return age >= MinAge && age <= MaxAge;
  };

  const ItemRender = () =>
    Users.map((item) => {
      const [year] = item.joinDate.split("-").map(Number);
      return (
        (isActive !== undefined ? item.isActive === isActive : true) &&
        (gender !== undefined && gender !== "All"
          ? item.gender === gender
          : true) &&
        (country !== undefined && country !== "All"
          ? item.country === country
          : true) &&
        (AgeRange !== undefined && AgeRange !== "All"
          ? getage(item.age)
          : true) &&
        (JoinDate !== undefined && JoinDate !== "All"
          ? Number(JoinDate) === year
          : true) && (
          <div className="Pepples">
            <h1>Name: {item.name}</h1>
            <p>Gender: {item.gender}</p>
            <p>Age: {item.age}</p>
            <p>Country: {item.country}</p>
            <p>Company: {item.company}</p>
            <p>Position: {item.position}</p>
            <p>Email: {item.email}</p>
            <p>JoinDate: {item.joinDate}</p>
          </div>
        )
      );
    });

  return (
    <div className="main">
      <div className="Filter">
        <span>Filters</span>
        <div className="Buttons">
          <h1>ActiveUsers:</h1>
          <label htmlFor="iSActive">Active</label>{" "}
          <input
            type="checkbox"
            name="iSActive"
            id="iSActive"
            onClick={HendleisActive}
            checked={isActive === true}
          />
          <div className="genderinputs">
            <h1>Genders:</h1>
            <label htmlFor="All">All</label>{" "}
            <input
              type="radio"
              name="Gender"
              id="All"
              onChange={HendleGender}
              checked={gender === "All"}
            />
            <br />
            <label htmlFor="Male">Male</label>{" "}
            <input
              type="radio"
              name="Gender"
              id="Male"
              onChange={HendleGender}
              checked={gender === "Male"}
            />
            <br />
            <label htmlFor="Female">Female</label>{" "}
            <input
              type="radio"
              name="Gender"
              id="Female"
              onChange={HendleGender}
              checked={gender === "Female"}
            />
          </div>
          <div className="countryselect">
            <h1>Country:</h1>
            <select name="country" id="country" onChange={HendleCountryChange}>
              <option value="All">All</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          <div className="ageselect">
            <h1>Age:</h1>
            <select name="" id="" onChange={HendleAgeChange}>
              <option value="All">All</option>
              <option value="20-30">20-30</option>
              <option value="30-40">30-40</option>
              <option value="40-50">40-50</option>
            </select>
          </div>
          <div className="yearselect">
            <h1>Join Years:</h1>
            <select name="" id="" onChange={HendleJoinChange}>
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
        </div>
      </div>
      <div className="PepplesContainer">{ItemRender()}</div>
      {/* </div>
      </div> */}
      <div className="PepplesContainer">{ItemRender()}</div>
    </div>
  );
}

export default FilterSystem;
