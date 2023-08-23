function ElectricalAppliance(model, power) {
    this.model = model;
    this.power = power;
    this.state = false;
}

ElectricalAppliance.prototype.stateOn = function () {
    console.log('Прибор ' + this.model + ' мощностью ' + this.power + ' Вт включен.');
    this.state = true;
}

ElectricalAppliance.prototype.getPowerUsed = function () {
    return this.state ? this.power : 0;
}

const tv = new ElectricalAppliance('Telefunken', 26);
const laptop = new ElectricalAppliance('DEXP', 24);

console.log('Оба прибора выключены. Потребляемая мощность ' + (tv.getPowerUsed() + laptop.getPowerUsed()) + ' Вт.');

tv.stateOn();
console.log('Потребляемая мощность ' + (tv.getPowerUsed() + laptop.getPowerUsed()) + ' Вт.');

laptop.stateOn();
console.log('Потребляемая мощность ' + (tv.getPowerUsed() + laptop.getPowerUsed()) + ' Вт.');