function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод - включен в розетку
ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

// метод - выключен из розетки
ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

// #1 прибор
function kolonki (name, brand, power, Type) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.Type = Type;
    this.isPlugged = true;
}

kolonki.prototype = new ElectricalAppliance();

// #2 прибор
function computer (name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

computer.prototype = new ElectricalAppliance();

// аудио-колонки
const audio = new kolonki("Audio kolonki", "Creative", 10, "3.1");

// экземпляр компьютера
const PC = new computer ("BEST PC", "AMD", 120, "home", "for games");

// выключить колонки из розетки
audio.unplug();

// включить computer в розетку
PC.plugIn();

// результат
console.log(PC)
console.log(audio)