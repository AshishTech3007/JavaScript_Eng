// -------------1------------------
// const name={
//     firstname:'Ashish',
//     lastname:'kumar',
//     printfullName:function(){
//         console.log(`${this.firstname} ${this.lastname}`)
//     }
// }
// name.printfullName();

// // function borrowing call method 
// const name2={
//     firstname:'rahul',
//     lastname:'kumar',
// }

// name.printfullName.call(name2)


// ------------------2-----------------------

// const printfullName=function(){
//     console.log(`${this.firstname} ${this.lastname}`)
// }
// const name={
//     firstname:'Ashish',
//     lastname:'Kumar'
// }
// printfullName.call(name);

// // function borrowing call method 
// const name2={
//     firstname:'Ram',
//     lastname:'Lakhan',
// }
// printfullName.call(name2)

// ------------------3-----------------------
// adding parameters to function 

const printfullName=function(hometown=''){
    if(hometown!='')
    {
        console.log(`${this.firstname} ${this.lastname} ${hometown}`)
    }
    
}
const name={
    firstname:'Ashish',
    lastname:'Kumar'
}
printfullName.call(name,'Patna');

// function borrowing call method 
const name2={
    firstname:'Ram',
    lastname:'Lakhan',
}
printfullName.call(name2)