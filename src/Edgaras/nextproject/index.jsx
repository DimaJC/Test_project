import React, { useState } from "react";
import './style.scss'




const PublicList = () => {
    const [Obj, SetObj] = useState({});
    const [Name, SetName] = useState("");
    const [LastName, SetLastName] = useState("");
    const [Tel, SetTel] = useState("");
    const [Email, SetEmail] = useState("");

    const OnChangeName = (event) => {
        SetName(event.target.value);
    };
    const AddItemsInObj = () => {
        const i = [];
        return id = i+1
        && (Name.length)
        && (LastName.length)
        && (Tel.length)
        && (Email.length)
    }


    const RenderItems = () => {
        return (
            <div>
                <div className="main">
                    <div className="inputsdiv">
                        <input type="text" onChange={OnChangeName} />
                        <input type="text" />
                        <input type="tel" />
                        <input type="email" />
                    </div>
                </div>
            </div>
        );
    }














    return (
        <div>
            {RenderItems()}
        </div>
    );
}

export default PublicList;