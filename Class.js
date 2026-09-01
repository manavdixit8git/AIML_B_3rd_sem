class student{
    constructor (name, pincode){
        this.name = name;
        this.pincode = pincode;
    }
    display(){
        console.log(this.name);
        console.log(this.pincode)
    }
}
let s1= new student("John", 123456);
let s2= new student("Doe", 654321);
s1.display();
s2.display();