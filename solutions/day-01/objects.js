const person = {
    firstName: "Ian",
    lastName: "DeLoach",
    age: 21,
    skills: ["Eating", "Sleeping", "Repeating"],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person);
console.log(person.firstName);
console.log(person['lastName'])