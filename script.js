// ask user age
let age = prompt('Your age');
// show age variable in console 
console.log(age);

// check if user old enaugh to pass
if(typeof age !== 'string'){
    if(age < 16 ){
    console.log('Rejected!youare too yang!Grow up!');

    } else{
    console.log('Wellcom');
    } 
}else{
    console.log(`Whong tyle of data. Enreted age is ${ typeof age }`)
}
