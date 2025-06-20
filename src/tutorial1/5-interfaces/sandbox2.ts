interface Laptop {
    brand: string
    model: string
    price: number
    config(speed: number, active: boolean): string
    display(active: boolean): void
}

let lap1: Laptop = {
    brand: 'Dell',
    model: 'Lenovo',
    price: 999,
    config: (speed: number, active: boolean): string => {
        if (active) {
            return `Active speed is ${speed}`;
        } else {
            return `Inactive speed is ${speed}`;
        }
    },
    display(active: boolean) {
        return active ? `${this.brand} -- ${this.model} -- ${this.price}` : 'Inactive';
    }
}

const getLaptopInfo = (laptop: Laptop): void => {
    console.log(laptop.config(10, true));
    laptop.display(true);
}

getLaptopInfo(lap1);