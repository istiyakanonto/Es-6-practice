class Parants{
    constructor()
    {
        this.ParantsName='Sulemon Khan';
    }
}

class Chid extends Parants{
    constructor(name,age){
        super();
        this.childName=name;
        this.childAge=age;
    }

}
const baby1=new Chid('Bablu', 18);
const baby2=new Chid('dablu',19);
console.log(baby1,baby2);