class ElectricalAppliance {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    // метод, который определяет прибор как включенный в розетку
    plugIn() {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }

    // метод, который определяет прибор как выключеный из розетки
    unplug() {
        console.log(this.name + " is unplugged!");
        this.isPlugged = false;
    }
}

// #1 прибор
class kolonki extends ElectricalAppliance {
    constructor (name, brand, power, Type) {
        super(name, power);
        this.brand = brand;
        this.bulbType = Type;
        this.isPlugged = true;
    }
}

// #2 прибор
class computer extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
    }
}
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