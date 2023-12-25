// -----1------------
// const name={
//     firstname:'Ashish',
//     lastname:'Kumar'
// }
// const printdetails=function(){
//     console.log(`${this.firstname} ${this.lastname}`)
// }
 
// //bind function 
// let userdetails=printdetails.bind(name);
// userdetails();

// //polyfill for bind function
// Function.prototype.mybind=function(...args){
//     // this-->point to printdetails 
//     let obj=this
//     return function(){
//         obj.call(args[0]);
//     }
// }
// let userdetails2=printdetails.mybind(name);
// userdetails2();

// -----------------------2------------------------ 
const name={
    firstname:'Ashish',
    lastname:'Kumar'
}
const printdetails=function(hometown,state,Pincode){
    console.log(`${this.firstname} ${this.lastname} ${hometown} ${state} ${Pincode}`)
}
 
//bind function 
let userdetails=printdetails.bind(name,'Patna','Bihar');
userdetails('801503');

//polyfill for bind function
Function.prototype.mybind=function(...args){
    // this-->point to printdetails 
    let obj=this
    let param=args.slice(1) // this will remove the 1st elements from the array and give the later elements so patna will come inside this
   
    return function(...args2){
        // obj.call(args[0],param); but the issue in this if we pass the arg params it is also an array so we can't pass 
        //array as the second arg to call method so we use apply instead of call
        // obj.apply(args[0],param,args2); can do like this as we have already param array so we concatenate the arrays
        obj.apply(args[0],[...param,...args2])
        
    }
}
let userdetails2=printdetails.mybind(name,'Patna','Bihar');
userdetails2('801503');