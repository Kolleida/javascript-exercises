const findTheOldest = function(people) {
    return people.reduce(
        (oldest, person) => {
            return getAge(person) > getAge(oldest) ? person : oldest;
        }
    )
};

function getAge(person) {
    let birth = person.yearOfBirth;
    let death = person.yearOfDeath;
    if (!death) {
        let currentYear = new Date().getFullYear();
        return currentYear - birth;
    } else {
        return death - birth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
