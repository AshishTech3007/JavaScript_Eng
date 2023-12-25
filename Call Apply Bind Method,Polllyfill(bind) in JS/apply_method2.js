const name={
    firstname:'Ashish',
    lastname:'Kumar'
}

const cities=['Patna','Mumbai','Chennai']

const printDetails=function(...cities)
{
    console.log(`${this.firstname} ${this.lastname}`)
    cities.forEach((city,index)=>{
        console.log(`${index+1}. ${city}`) 
    });
}

printDetails.apply(name,cities);
