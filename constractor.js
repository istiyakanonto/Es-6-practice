class student{
    constructor(name,id){
        this.name=name;
        this.id=id;
        this.school="Agroni School and college";
    }
    

}
const student1=new student('Istiyak',111);
const student2=new student('Anonto',222);
console.log(student1,student2);
console.log(student1.school,student2.name);