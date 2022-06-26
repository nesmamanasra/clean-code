// class DOB
class DOB{
    day;
    month;
    year;
    constructor(day, month, year) {
        this.setDay(day);
        this.setMonth(month);
        this.setYear(year);
    }

    #checkIsNumber(val){
        if(typeof val !== 'number' ){
            throw new Error (' must ba a number')
        }
    }

    #checkValidDay(day){
        if(day < 1 || day > 30){   // !(day < 1 || day > 30)
            throw new Error (' the day error')
        }
    }

    #checkValidMonth(month){
        if(month < 1 || month > 12){   // !(month > 1 || month < 12)
            throw new Error (' the month error')
        }
    }

    #checkValidYear(year){
        if(year < 1990 || year > 2010){   // !(year < 1990 || year > 2010)
            throw new Error (' the year error')
        }
    }
    setDay(day){
        this.#checkIsNumber(day);
        this.#checkValidDay(day);
        this.day = day;
    }

    setMonth(month){
        this.#checkIsNumber(month);
        this.#checkValidMonth(month);
        this.month = month;
    }

    setYear(year){
        this.#checkIsNumber(year);
        this.#checkValidYear(year);
        this.year = year;
    }

    getDay() {
        return this.day;
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return  this.year;
    }
    getDob(){
        return `${this.getDay()}/${this.getMonth()}/${this.getYear()}`;
    }
    }

// class address
class Address{
        street;
        buildingNumber;
        city;
        country;
        constructor(street,buildingNumber,city,country){
            this.setStreet(street);
            this.setBuildingNumber(buildingNumber);
            this.setCity(city);
            this.setCountry(country);
        }

        setStreet(street){
            this.street = street;
        }

        setBuildingNumber(buildingNumber){
            this.buildingNumber = buildingNumber;
        }

        setCity(city){
            this.city = city;
        }

        setCountry(country){
            this.country = country;
        }

        getStreet(){
            return this.street ;
        }
        
        getBuildingNumber(){
            return this.buildingNumber ;
        }

        getCity(){
            return this.city ;
        }

        getCountry(){
            return this.country ;
        }
        
        getFullAddress(){
            return `${this.getStreet()}-${this.getBuildingNumber()}-${this.getCity()}-${this.getCountry()}`
        }
    }

// class name 
class Name{
    firstName;
    lastName;
    constructor(firstName,lastName) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
    }

    setFirstName(firstName){
        if((typeof firstName === 'string') && (firstName.length > 2) && (firstName.length < 50 )){
            this.firstName = firstName;
        }
    }
    
    setLastName(lastName){
        if((typeof lastName === 'string') && (lastName.length > 2) && (lastName.length < 50 )){
            this.lastName = lastName;
        }
    }

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }
    getFullname(){
        return `${this.getFirstName()} ${this.getLastName()}`
    }
}

//class person
class Person {
    dob;
    address;
    name;
    idNumber;
    constructor(dob,address,idNumber,name){
        this.setDob(dob);
        this.setAddress(address);
        this.setIdNumber(idNumber);
        this.setName(name);
    }
    // genarec function if instance of className
    // #checkIsInstance(className,instance){
    //     if(!(instance instanceof className)){
    //         throw new Error('instance error');
    //     }
    // }
    setDob(dob){
        if ( dob instanceof DOB ){
            this.dob = dob;
        }
    }
    setAddress(address){
        if (address instanceof Address){
            this.address = address;
        } 
    }
    setName(name){
        if ( name instanceof Name) {
            this.name = name; 
        }
    }
    setIdNumber(idNumber){ 
        if (typeof idNumber === 'string' && idNumber.length > 2 && idNumber.length < 50 ){
            this.idNumber = idNumber;
         } 
    }

    getDob(){
        return this.dob.getDob();
    }
    getAddress(){
        return this.address.getFullAddress()
    }
    getIdNumber(){
        return this.idNumber;
    }
    // overwrite + override
    //Method Overriding is an OOPs concept closely knit with inheritance.
    // When a child class method
    // overrides the parent class method of the same name, 
   // parameters and return type,it is termed as method overriding.
    getName(){
        return this.name.getFullname();
    }
    getAllInformation(){
        return `Person Name is : ${this.getName()} \n${this.getName()} ddress is : ${this.getAddress()}\n${this.getName()} ID is : ${this.getIdNumber()} \n${this.getName()} DoB is : ${this.getDob()}`
    }
}

class Student extends Person{
    courses = [];
    parentId;
        constructor(dob,address,idNumber,name,courses = [],id){
          //The super keyword is used to call the constructor of its parent class to access the parent's properties and methods. Tip: To understand the "inheritance
            super(dob,address,idNumber,name);
            this.setCourses(courses);
            this.setParentId(id);
        }
       
        setCourses(name){
            this.courses.push(name);
        }
        setParentId(id){
            this.parentId = id;
        }
        getCourses(){
            return this.courses;
        }
        getParentId(){
            return this.parentId;
        }
        getAllInformation(){
            return `Student Name is : ${this.getName()}\n${this.getName()} ddress is : ${this.getAddress()}\n${this.getName()} ID is : ${this.getIdNumber()}\n${this.getName()} DoB is : ${this.getDob()}\n${this.getName()} cources are : ${this.getCourses()}\n${this.getName()} parents ID is : ${this.getParentId()}`
        }
    }


class Parent extends Person{
    studentsId = [];
    constructor(dob,address,idNumber,name, id){
        super(dob,address,idNumber,name);
        this.setStudentsId(id);
    }

    addStudentId(id){
        this.studentsId.push(id);
    }

    getStudentId(){
        return this.studentsId;
    }
}

let personDob1 = new DOB(29,7,1999);
let personName1 = new Name('Nesma','Manasra');
let personAddress1 = new Address('abo-hayel','1234','Hebron','palestine');
let person1 = new Person(personDob1,personAddress1,"123",personName1);
let student1 = new Student(personDob1,personAddress1,"123",personName1,['javascript','oop','desing-pattern'],2244);
console.log(student1.getAllInformation());
