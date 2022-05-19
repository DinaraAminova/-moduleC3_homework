class ElectricalAppliance{
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.isPlugged = false;
}

plugIn(){
    this.isPlugged = true;
    return this.name + " is plugged!";
  }
  
  unplug(){
    this.isPlugged = false;
    return this.name + " is unplugged!";
  }
    
};

// Прибор 1
class Lamp extends ElectricalAppliance {
  constructor(name, brand, power, bulbType) {
    super(name, power);
    this.brand = brand;
    this.bulbType = bulbType;
    this.isPlugged = true;
  } 
}

// Прибор 2
class Computer extends ElectricalAppliance {
  constructor(name, brand, power, type, functionality) {
    super(name, power);
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }
}

// экземпляр лампы
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");

// экземпляр компьютера
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

// отключить лампу из розетки
console.log(tableLamp.unplug());

// включить homePC в розетку
console.log(homePC.plugIn());

// результат
console.log(homePC)
console.log(tableLamp)