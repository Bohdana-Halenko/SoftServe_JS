//Task5
class Circle {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  
    getLength() {
      return 2 * Math.PI * this.radius;
    }
  
    static getLengthByRadius(radius) {
      return 2 * Math.PI * radius;
    }
  
    getCircle() {
      return new Circle(this.x, this.y, this.radius);
    }
  
    static getCircleByCoords(x, y, radius) {
      return new Circle(x, y, radius);
    }
  
    isDotInside(x, y) {
      const distance = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));
      return distance <= this.radius;
    }
  
    toString() {
      return `Circle with center (${this.x}, ${this.y}) and radius ${this.radius}`;
    }
  }


  //Task2
  function propsCount(currentObject) {
    let count = 0;
    for (let prop in currentObject) {
      count++;
    }
    return count;
  }


//Task3
class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    showFullName() {
      console.log(`${this.name} ${this.surname}`);
    }
  }
  
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
  
    showFullName(middleName) {
      console.log(`${this.surname} ${this.name} ${middleName}`);
    }
  
    showCourse() {
      const currentYear = new Date().getFullYear();
      const course = currentYear - this.year + 1;
      return Math.max(1, Math.min(6, course));
    }
  }
  
  const stud1 = new Student("Petro", "Petrenko", 2019);
  console.log(stud1.showFullName("Petrovych")); 
  console.log("Current course: " + stud1.showCourse());


//Task4
class Marker {
    constructor(color, ink) {
      this.color = color;
      this.ink = ink;
    }
  
    print(text) {
      let inkNeeded = text.replace(/ /g, "").length * 0.5;
      if (inkNeeded > this.ink) {
        console.log("Error: Not enough ink in the marker!");
        return;
      }
      this.ink -= inkNeeded;
      console.log(`%c${text}`, `color: ${this.color}`);
    }
}

class RefillableMarker extends Marker {
    constructor(color, ink, capacity) {
      super(color, ink);
      this.capacity = capacity;
    }
  
    refill() {
      this.ink = this.capacity;
    }
}


//Task5
class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
      this._experience = 1.2;
    }
  
    showSalary() {
      const salary = this.dayRate * this.workingDays;
      console.log(`${this.fullName} salary: ${salary}`);
    }
  
    showSalaryWithExperience() {
      const salary = this.dayRate * this.workingDays * this._experience;
      console.log(`${this.fullName} salary: ${salary}`);
    }
  
    get showExp() {
      return this._experience;
    }
  
    set setExp(value) {
      this._experience = value;
    }
}
  
  const workers = [
    new Worker("John Johnson", 20, 23),
    new Worker("Tom Tomson", 48, 22),
    new Worker("Andy Ander", 29, 23),
  ];
  
  for (const worker of workers) {
    console.log(worker.fullName);
    worker.showSalary();
    console.log(`New experience: ${worker.showExp}`);
    worker.showSalaryWithExperience();
    worker.setExp = 1.5;
    console.log(`New experience: ${worker.showExp}`);
    worker.showSalaryWithExperience();
    console.log("\n");
  }
  
  // Sorting workers by salary with highest experience first
  workers.sort((a, b) => {
    const salaryA = a.dayRate * a.workingDays * a.showExp;
    const salaryB = b.dayRate * b.workingDays * b.showExp;
    return salaryA - salaryB;
  });
  
  console.log("Sorted salary:");
  for (const worker of workers) {
    const salary = worker.dayRate * worker.workingDays * worker.showExp;
    console.log(`${worker.fullName}: ${salary}`);
  }