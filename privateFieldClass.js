class det {
  name = "Ashim"; //public field
  #roll = 7; //private field
  #address;

  constructor(addr) {
    this.#address = addr;
  }

  show() {
    console.log(this.name, this.#roll, this.#address);
  }

  setRoll(roll) {
    this.#roll = roll;
  }

  getRoll() {
    return this.#roll;
  }
}

const newDet = new det("Pkr");

newDet.show();

console.log(newDet.name);
console.log(newDet.roll); //private

newDet.setRoll(17);
console.log(newDet.getRoll());
