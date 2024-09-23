import randomName from "./randomNames";
import randomAge from "./randomAge";
import randomeGender from "./randomGender";
import randomCoutry from "./randomCountry";
import randomeIsActive from "./randomeIsActive";

const generateUsers = (num) => {
    return Array.from({length: num}).map((_, id) =>{
        const gender = randomeGender();
        return{
            id:id + 1,
            name: randomName(gender),
            age: randomAge,
            gender,
            email: `user${id + 1}@example.com`,
            country: randomCoutry(),
            isActive: randomeIsActive(),
        };
    });
};

export default generateUsers;
