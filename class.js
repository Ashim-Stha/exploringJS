class det {
  constructor(mygreet) {
    this.name = "Ashim";
    this.roll = 7;
    this.greet = mygreet;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

const newDet = new det("Hello");

console.log(newDet.name);
newDet.name = "Tony";
console.log(newDet.name);

newDet.setName("ASH");
console.log(newDet.getName());

//Child class

class chDet extends det {
  constructor(mygreet) {
    super(mygreet); //for parent class
    this.faculty = "BEI";
  }
}

const newChDet = new chDet("HI from child");
console.log(newChDet.greet, newChDet.faculty);
