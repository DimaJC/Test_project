const randomCoutry = () => {
    const countries = ['USA', 'Canada', 'Germany', 'Japan', 'Australia', 'UK'];
    return countries[Math.floor(Math.random()* countries.length)];

};

export default randomCoutry;