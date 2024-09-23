const maleNames = [
    'Josh Doe','Mike Brown','Tom White', 'Chris Black',
];

const femaleNames = [ 
    'Jane Smith', 'Anna Johnson', 'Emily Green','Linda Davis'
];
    const randomName = (gender) => {
        if (gender === 'Male'){
            return maleNames[Math.floor(Math.random()* maleNames.lenght)];
        } else {
            return femaleNames[Math.floor(Math.random()* femaleNames.length)];
        }
    };

export default randomName;