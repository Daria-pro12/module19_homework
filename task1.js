const person = {
  name: 'Anna',
  surname: 'Ivanova',
  age: 25,
  city: 'Minsk',
};

function ownProperties (obj) {
  for (let key in obj) {
        console.log(key + ': ' + obj[key]);
    }
  }
  
ownProperties (person);