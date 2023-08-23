class ElectricalAppliance {
    constructor (model, power) {
        this.model = model;
        this.power = power;
        this.state = false; 
    }

    stateOn () {
        console.log('Прибор ' + this.model + ' мощностью ' + this.power + ' Вт включен.');
        this.state = true;
    }
    
    getPowerUsed () {
        return this.state ? this.power : 0;
    }
}

const tv = new ElectricalAppliance('Telefunken', 26);
const laptop = new ElectricalAppliance('DEXP', 24);

console.log('Оба прибора выключены. Потребляемая мощность ' + (tv.getPowerUsed() + laptop.getPowerUsed()) + ' Вт.');

tv.stateOn();
console.log('Потребляемая мощность ' + (tv.getPowerUsed() + laptop.getPowerUsed()) + ' Вт.');

laptop.stateOn();
console.log('Потребляемая мощность ' + (tv.getPowerUsed() + laptop.getPowerUsed()) + ' Вт.');