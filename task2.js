const person = {
    name: 'Anna',
    surname: 'Ivanova',
    age: 25,
    city: 'Minsk',
  };

  
function propertyName (obj, property) {
    if (obj.hasOwnProperty(property)) {
      return true;
    } return false;
}
     
console.log(propertyName (person, 'city'));
console.log(propertyName (person, 'patronymic'));