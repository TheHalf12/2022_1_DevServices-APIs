class Car{
    constructor(name, model, brand, speed){
        this.name = name;
        this.model = model;
        this.brand = brand;
        this.speed = speed;
    }

    get_descr(){
        return `<p> The ${this.name} was designed in ${this.model} by ${this.brand} and its speed is around: ${this.speed}km/h! </p>`;
    }
}


const cars = [new Car("Strongarm", "2001", "Ionia", "55"), new Car("Tricerator", "2004", "Motorrex", "60"), new Car("Tribocian", "2003", "Linen", "80")];

function showroom(car){
    document.getElementById("carshowroom").innerHTML = car.get_descr();
}

function list(value){
    const button = document.createElement("button");
    button.textContent = value.name;
    button.addEventListener("click", function() {
        showroom(value);
    });
    document.getElementById("carlist").appendChild(button);
    document.getElementById("carlist").appendChild(document.createElement("br"));
}


cars.forEach((car) => list(car));