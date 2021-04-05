class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    constructor(brand = String, model = String, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
        if (brand.length < 1) throw new Error('Ошибка, < 1');
        if (brand.length > 50) throw new Error('Ошибка, > 50');
        this.#brand = brand;
        if (model.length < 1) throw new Error('Ошибка, < 1');
        if (model.length > 50) throw new Error('Ошибка, > 50');
        this.#model = model;
        if (yearOfManufacturing < 1900) throw new Error('Ошибка, < 1900');
        if (yearOfManufacturing > 2021) throw new Error('Ошибка, > 2021');
        this.#yearOfManufacturing = yearOfManufacturing;
        if (maxSpeed < 100) throw new Error('Ошибка, < 100');
        if (maxSpeed > 300) throw new Error('Ошибка, > 300');
        this.#maxSpeed = maxSpeed;
        if (maxFuelVolume < 5) throw new Error('Ошибка, < 5');
        if (maxFuelVolume > 20) throw new Error('Ошибка, > 20');
        this.#maxFuelVolume = maxFuelVolume;
        this.#fuelConsumption = fuelConsumption;
    }

    set brand(brand) {
        if (typeof brand != 'string') throw new Error('Ошибка, не строка');
        if (brand.length < 1) throw new Error('Ошибка, < 1');
        if (brand.length > 50) throw new Error('Ошибка, > 50');
        this.#brand = brand;
    }

    get brand() {
        return this.#brand;
    }

    set model(model) {
        if (typeof model != 'string') throw new Error('Ошибка, не строка');
        if (model.length < 1) throw new Error('Ошибка, < 1');
        if (model.length > 50) throw new Error('Ошибка, > 50');
        this.#model = model;
    }
    get model() {
        return this.#model;
    }

    set yearOfManufacturing(yearOfManufacturing) {
        if (!Number.isInteger(yearOfManufacturing)) throw new Error('Ошибка, не число');
        if (yearOfManufacturing < 1900) throw new Error('Ошибка, < 1900');
        if (yearOfManufacturing > 2021) throw new Error('Ошибка, > 2021');
        this.#yearOfManufacturing = yearOfManufacturing;
    }
    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set maxSpeed(maxSpeed) {
        if (!Number.isInteger(maxSpeed)) throw new Error('Ошибка, не число');
        if (maxSpeed < 100) throw new Error('Ошибка, < 100');
        if (maxSpeed > 300) throw new Error('Ошибка, > 300');
        this.#maxSpeed = maxSpeed;
    }
    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxFuelVolume(maxFuelVolume) {
        if (!Number.isInteger(maxFuelVolume)) throw new Error('Ошибка, не число');
        if (maxFuelVolume < 5) throw new Error('Ошибка, < 5');
        if (maxFuelVolume > 20) throw new Error('Ошибка, > 20');
        this.#maxFuelVolume = maxFuelVolume;
    }
    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set fuelConsumption(fuelConsumption) {
        if (!Number.isInteger(fuelConsumption)) throw new Error('Ошибка, не число');
        this.#fuelConsumption = fuelConsumption;
    }
    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {

        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    start() {
        if (this.#isStarted) {
            throw new Error('Машина уже заведена');
        } else {
            this.#isStarted = true;
        }
    }

    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error('Машина еще не заведена');
        } else {
            this.#isStarted = false;
        }
    }

    fillUpGasTank(gas) {
        if (!Number.isInteger(gas)) {
            throw new Error('Неверное количество топлива для заправки');
        } else if (gas <= 0) {
            throw new Error('Неверное количество топлива для заправки');
        } else if ((this.#currentFuelVolume + gas) > this.#maxFuelVolume) {
            throw new Error('Топливный бак переполнен');
        } else {
            this.#currentFuelVolume = this.#currentFuelVolume + gas;
        }
    }

    drive(speed, time) {
        if (!Number.isInteger(speed)) {
            throw new Error('Неверная скорость');
        } else if (speed <= 0) {
            throw new Error('Неверная скорость');
        } else if (!Number.isInteger(time)) {
            throw new Error('Неверное количество часов');
        } else if (time <= 0) {
            throw new Error('Неверное количество часов');
        } else if (speed > this.#maxSpeed) {
            throw new Error('Машина не может ехать так быстро');
        } else if (this.#isStarted == false) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        } else if ((((speed * time) / 100 * this.#fuelConsumption)) > this.#currentFuelVolume) {
            throw new Error('Недостаточно топлива');
        } else {
            this.#currentFuelVolume -= (speed * time) / 100 * this.#fuelConsumption;
            this.#mileage += speed * time;
        }
    }

}