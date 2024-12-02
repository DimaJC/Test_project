import React, { useState, useEffect } from "react";

import "./style/style.scss";

import avatar from "./img/avatar.svg";

import mail_logo from "./img/mail_logo.svg";
import link_in from "./img/link_in.svg";
import phone from "./img/phone.svg";
// import background form "./img/background.svg";

const workExperience = [
    {
        Profession: "Profession",
        Date: "Date",
        Description: "Description"
    },
    {
        Profession: "Profession",
        Date: "Date",
        Description: "Description"
    },
    {
        Profession: "Profeasdasdssion",
        Date: "Date",
        Description: "Description"
    },
    
];

const educationLearning = [
    {
        Profession: "Profession",
        studylocation: "Study Location",
    },
    {
        Profession: "Profession",
        studylocation: "Study Location",
    },
];

const contactaray = [
  {
    mail: "kate.bishop@katedesign.com",
    site: "https://www.linkedin.com/in/kate-bishop",
    phone: "+46 98-765 43 21",
  }  
];

const skillsaray = [
    {
        skill: "Product discovery"
    },
    {
        skill: "Business analysis"
    },
    {
        skill: "UX research & testing"
    },
    {
        skill: "Customer journey mapping"
    },
    {
        skill: "Information architecture"
    },
    {
        skill: "Wireframing"
    },
    {
        skill: "Prototyping"
    },
    {
        skill: "UI design"
    },
    {
        skill: "Illustration"
    },
    {
        skill: "Interaction design"
    },
    {
        skill: "Design system"
    },
    {
        skill: "Design sprints"
    },
    {
        skill: "Workshop facilitation"
    },
    {
        skill: "A/B testing "
    },
    {
        skill: "Figma"
    },
    {
        skill: "Sketch"
    },
    {
        skill: "Adobe Illustrator"
    },
    {
        skill: "Miro"
    },
    {
        skill: "Notion"
    },
    {
        skill: "Jira"
    },
];

const RootBlockOfRezume = () => {
        const [WorkExperience, SetAray] = useState([]);
        const [TextWork, SetTextWork] = useState("");
        const [isEdit, setIsEdit] = useState(false);

        const [EducationLearning, SetAray2] = useState([]);
        const [Contact, SetContact] = useState([]);
        const [Skills, SetSkills] = useState([]);

        useEffect(() => {
            SetAray(workExperience);
            SetAray2(educationLearning);
            SetContact(contactaray);
            SetSkills(skillsaray);
        });
        const renderWorkElements = () =>
            WorkExperience.map((item, index) => (
              <div className="text-block" key={item.Profession + index}>
                <p className="big-tag">{item.Profession}</p>
                <p className="small-text">{item.Date}</p>
                <p className="text-area">{item.Description}</p>
                {/* TODO DELETE */}
                {isEdit && <p className="edit">DELETE</p>}
              </div>
        ));

        const renderEducationElements = () =>
            EducationLearning.map((item, index) => (
                <div className="text-block" key={item.Profession + index}>
                    <p className="big-tag">{item.Profession}</p>
                    <p className="small-text">{item.studylocation}</p>
                </div>
        ));

        const renderContactElements = () => 
            Contact.map((item, index) => (
                <div key={item.mail + index}>
                    <a href={"mailto:"+item.mail} target="new-page"><img src={mail_logo} alt="" />{item.mail}</a>
                    <a href={item.site}><img src={link_in} alt="" />{item.site}</a>
                    <a href={"tel:"+item.phone}><img src={phone} alt="" />{item.phone}</a>
                </div>
        ));

        const renderSkillsElements = () => 
            Skills.map((item, index) => (
                <div className="" key={item.skill + index}>
                    <p>{item.skill}</p>
                </div>
        ));

        const allRezume = () => {
            return (
                <div className="root-element">
                    <div className="rezume-header">
                        <div className="avatar block">
                            <img src={avatar} alt="" />
                        </div>
                        <div className="text block">
                            <p className="first">Product Designer</p>
                            <p className="next">SneRin Corporation</p>
                        </div>
                        <div className="links block">
                            {renderContactElements()}
                        </div>
                        <button onClick={() => setIsEdit((prevState) => !prevState)}>Edit Mode</button>
                    </div>
                    <div className="next-text">
                        <div className="half">
                            <p className="tag">Work experience</p>
                            {renderWorkElements()}
                            {isEdit && (
                                <>
                                    <input 
                                        placeholder="Title"
                                        type="text"
                                        value={TextWork}  
                                    />
                                    <input 
                                        placeholder="Sub title"
                                        type="text"
                                        value={TextWork}  
                                    />
                                </>
                            )}
                        </div>
                        <div className="half">
                            <p className="tag">Education & Learning</p>
                            {renderEducationElements()}
                        </div>
                    </div>
                    <div className="tags">
                        <p className="tag">Skills</p>
                        <div className="colum">
                            {renderSkillsElements()}
                        </div>             
                    </div>
                </div>
            );
        };
        return (
            <div>
                {allRezume()}
            </div>
        )
    };

export default RootBlockOfRezume;