// condition 1 -------> 
// const name={
//     firstname:'Ashish',
//     lastname:'Kumar'
// }
// const printdetails=function(){
//     console.log(`${this.firstname} ${this.lastname}`)
// }

// const userdetails=printdetails.bind(name)
// userdetails()

// // own bind function 

// Function.prototype.ownbind=function(...args){
//     let obj=this
//     return function(){
//         obj.call(args[0])
//     }
// }
// const uderdetails2=printdetails.ownbind(name)
// uderdetails2()

// // condition 2 -------->
// const name={
//     firstname:'Ashish',
//     lastname:'Kumar'
// }
// const printdetails=function(hometown){
//     console.log(`${this.firstname},${this.lastname},${hometown}`)
// }

// const userdetails=printdetails.bind(name,'Patna')
// userdetails()

// // own bind function 

// Function.prototype.ownbind=function(...args){
//     let obj=this
//     let param=args.slice(1)
//     return function(){
//         obj.apply(args[0],param)
//     }
// }
// const uderdetails2=printdetails.ownbind(name,'Patna')
// uderdetails2()

// condition 3 -------->
const name={
    firstname:'Ashish',
    lastname:'Kumar'
}
const printdetails=function(hometown,state,Pincode,Country){
    console.log(`${this.firstname},${this.lastname},${hometown},${state},${Pincode},${Country}`)
}

const userdetails=printdetails.bind(name,'Patna','India')
userdetails('Bihar','801503')

// own bind function 

Function.prototype.ownbind=function(...args){
    let obj=this
    let param=args.slice(1)
    return function(...args2){
        obj.apply(args[0],[...param,...args2])
    }
}
const userdetails2=printdetails.ownbind(name,'Patna','India')
userdetails2('Bihar','801503')
