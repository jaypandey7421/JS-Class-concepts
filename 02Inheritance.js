class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  
    static generatePassword(){
      return  Math.floor(Math.random()*10000);
    }
  }

  class Doctor extends HospitalEmployee{
    constructor (name, department){
        super(name);
        this._department = department;
    }
    
    get department(){
        return this._department;
    }

    addDepartment(newDepartment){
        this._department.push(newDepartment);
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);

  const zolokool = new Doctor('Zolokool Xolo', ["Neurology", "Cardiology"]);
  zolokool.addDepartment("Pediatrics");
  console.log(`Name: ${zolokool.name}, Department: ${zolokool.department}, Remaining Vacation Days: ${zolokool.remainingVacationDays}`);
  console.log(`Password: ${HospitalEmployee.generatePassword()}`);