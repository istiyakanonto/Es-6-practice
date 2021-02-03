const person ={name:'Istiyak',age:24, work:'Student',gfName:'Sabah',address:'laxipur',friends:['tony','sumaiya','karishma'],phone:'01714488338'}

const {work, name, gfName}=person;

console.log(work,name,gfName);

const arry=['amina','sokhina','rojina','julekha','mulakha'];
const [name3,name2,...rest]=arry;
console.log(name3,name2,rest);
const complexObject ={
    name4:'aba',
    info: {
address:'Rajshahi',
leader:'boss'
    }
}
const {leader, ...res}=complexObject.info
console.log(leader,res);

