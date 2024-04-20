let users = [
    {
        name: "Vlad",
        age: 16,
        isMarried: false,
        country: "Uzbekistan",
    },
    {
        name: "Damir",
        age: 13,
        isMarried: false,
        country: "Uzbekistan",
    },
    {
        name: "Akbar",
        age: 15,
        isMarried: true,
        country: "Thailand",
    },
    {
        name: "Samir",
        age: 15,
        isMarried: true,
        country: "North Korea",
    },
    {
        name: "Shoxrux",
        age: 18,
        isMarried: false,
        country: "India",
    },
    {
        name: "Farzod",
        age: 20,
        isMarried: true,
        country: "UAE",
    },
]
let oldest = 0
let oldestName = ''
let youngest = 0
let youngestName = ''

users.forEach((user) =>{
    if(user.age > oldest){
        oldest = user.age
        oldestName = user.name
    }
    if(user.age < youngest){
        youngest = user.age
        youngestName = user.name
    }
})

console.log('Самый старший', oldestName , oldest);
console.log('Самый младший', youngestName , youngest);``