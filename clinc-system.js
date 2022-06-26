class Appointment { 
    idAppointemtn; 
    date; 
    time; 
     
    constructor(idAppointemtn,date,time){ 
        this.idAppointemtn=idAppointemtn; 
        this.date = date; 
        this.time = time;  
    } 
     
    #isValidId(num){ 
        number = parseInt(num);
        if(!(typeof number == 'number')){ 
        throw new Error('u must be num'); 
        } 
    } 
    setIdAppointemtn(idAppointemtn){ 
        this.#isValidId(idAppointemtn); 
        this.idAppointemtn; 
    } 
    setDate(date){ 
        this.date; 
    } 
    setTime(time){ 
        this.time; 
    } 
     
    getIdAppointemtn(){ 
        return this.idAppointemtn; 
    } 
     
    getDate(){ 
        return this.date; 
    } 
 
    getTime(){ 
        return this.time; 
    } 
    } 
     
class Patinet{ 
        name; 
        idPatinet; 
        gender; 
        age; 
        address; 
        mobileNumber; 
     
        constructor(name ,idPatinet,gender,age,address, mobileNumber) 
        { 
            this.setName(name); 
            this.setIdpatinet(idPatinet); 
            this.setGender(gender); 
            this.setAge(age); 
            this.setAddress(address); 
            this.setMobileNumber(mobileNumber); 
     
        } 
        #isValidName(name){ 
            if(typeof name !== 'string'){ 
           throw new Error('you must enter string'); 
            } 
        } 
 
        #isvalidGender(gender){ 
            if(!(gender == 'mael'  || gender == 'femael')  ){ 
                throw new Error('you must enter mael or femael '); 
               } 
        } 
        
        // #isValidMobileNumber(num){ 
        //     let number=parseInt(num);
        //     if(!(typeof number == 'number' && number.length ==10)){ 
        //      throw new Error('you Must enter number and the length of number = 10'); 
        //     } 
        // } 
        #isValidAge(a){ 
            let age=parseInt(a);
            if(!(typeof age == 'number')){ 
             throw new Error('Age Must Number'); 
            } 
        } 
        setName(name){ 
            this.#isValidName(name); 
            this.name=name; 
        } 
         
        setIdpatinet(idPatinet){ 
            this.idPatinet=idPatinet; 
        } 
     
        setGender(gender){ 
            this.#isvalidGender(gender); 
            this.gender=gender; 
        } 
     
        setAge(age){ 
            this.#isValidAge(age); 
            this.age=age; 
        } 
     
        setAddress(address){ 
            this.address=address; 
        } 
     
        setMobileNumber(mobileNumber){ 
            //this.#isValidMobileNumber(mobileNumber); 
            this.mobileNumber=mobileNumber; 
        } 
     
        getName(){ 
            return this.name; 
        } 
     
        getIdpatinet(){ 
            return ti.idPatinet; 
        } 
     
        getGender(){ 
            return this.gender; 
        } 
     
        gerAge(){ 
            return this.age; 
        } 
     
        getAddress(){ 
            return this.address; 
        } 
     
        getMobileNumber(){ 
            return this.mobileNumber; 
        } 
    } 
 
let patinetList = [];  let appointmentList = []; let tratmentList = []; 

function addPatinett(){ 
    let name = prompt('enter painet name '); 
    let idPatinet =  prompt('enter id '); 
    let gender =  prompt('enter femael or mael '); 
    let age =  prompt('enter age '); 
    let address =  prompt('enter address '); 
    let mobileNumber =  prompt('enter mobile number '); 
    let p = new Patinet(name,idPatinet,gender,age,address,mobileNumber); 
    patinetList.push(p); 
 
} 

function selectPatine(id){ 
for(let i=0;i<patinetList.length;i++){ 
    if(patinetList[i].idPatinet===id) 
    { 
        return patinetList[i]; 
    } 
} 
} 
 

function addappointment(){ 
    let idAppointemtn = prompt(' enter id Appointemtn '); 
    let date = prompt('enter date dddd-mm-dd  '); 
    let time = prompt('enter time 00:00 pm or 00:00am  '); 
    let pt = new Appointment(idAppointemtn,date,time); 
    appointmentList.push(pt); 
 
} 
 
 
function selectApotment(id){ 
for(let i=0;i<appointmentList.length;i++){

if(appointmentList[i].idAppointemtn===id) 
    { 
       return appointmentList[i]; 
    } 
 
} 
} 
 

function Trament(){ 
       console.table(patinetList); 
       let PatinetId=prompt('Choose Pationt id from table'); 
       console.table(appointmentList); 
       let appointemtnId = prompt(' Choose appointment id from table'); 
       let teethNum = prompt('Enter teeth numbers'); 
       let tratmentTooth= prompt('Enter Tratment Tooth');  
       let pInfo = selectPatine(PatinetId); 
       let apInfo = selectApotment(appointemtnId); 
       let teethInfo = checkTeethNum(teethNum); 
       tratmentList.push(pInfo,apInfo,teethInfo,tratmentTooth); 
} 
 
 
function checkTeethNum(num){ 
    let TEETHNYMBER=[18,17,16,15,14,13,12,11, 
        21,22,23,24,25,26,27,28,38, 
        37,36,35,34,33,32,31,41,42, 
        43,44,45,46,47,48]; 
    let a =[]; 
        for(let i =0;i<TEETHNYMBER.length;i++){ 
            for(let j=0;j<num.length;j++) 
            if(TEETHNYMBER[i]==num[j]) 
           { 
             a.push(num[j]); 
           } 
} return a; 
} 
 
function ListP(){ 
    
      console.log(patinetList); 
    
} 
 
function ListA(){ 
     
          console.log(appointmentList); 
        
      } 
function Exit(){
  process.exit();

}
    
const prompt = require("prompt-sync")({sigint:true}); 
function chooses(){ 
    while(true){ 
    switch(prompt('Enter\n  1- add Apopointment\n  2- add paitent\n  3- add treatment\n  4- lists paitent\n  5- lists Apopointment\n  6-Exit \n')){ 
        case '1': addappointment(); 
        break; 
        case '2' : addPatinett(); 
        break; 
        case '3' : Trament(); 
        break; 
        case '4' : ListP();
        break; 
        case '5': ListA(); 
        break; 
        case '6': Exit();
        break;
        default : console.log('You Enter Incorrect Input');
     } 
    } 
} 

chooses();
