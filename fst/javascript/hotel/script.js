// Base class
class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender; // boolean (true = male, false = female, for example)
    this.age = age;
  }

  changeName(newFirstName, newLastName) {
    this.firstName = newFirstName || this.firstName;
    this.lastName = newLastName || this.lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Worker subclass
class Worker extends Person {
  constructor(firstName, lastName, gender, age, nationalInsuranceNum, position, shift) {
    super(firstName, lastName, gender, age);
    this.nationalInsuranceNum = nationalInsuranceNum;
    this.position = position;
    this.shift = shift;
  }

  // Worker method
  work() {
    return `${this.getFullName()} is working as a ${this.position} on the ${this.shift} shift.`;
  }
}

// Customer subclass
class Customer extends Person {
  constructor(firstName, lastName, gender, age, checkInDate, roomNumber, checkOutDate) {
    super(firstName, lastName, gender, age);
    this.checkInDate = checkInDate;
    this.roomNumber = roomNumber;
    this.checkOutDate = checkOutDate;
  }

  // Customer method to check-in
  checkIn(roomNumber, checkInDate) {
    this.roomNumber = roomNumber;
    this.checkInDate = checkInDate;
    return `${this.getFullName()} has checked into room ${this.roomNumber} on ${this.checkInDate.toDateString()}`;
  }

  // Customer method to check-out
  checkOut(checkOutDate) {
    this.checkOutDate = checkOutDate;
    return `${this.getFullName()} has checked out of room ${this.roomNumber} on ${this.checkOutDate.toDateString()}`;
  }

  // Calculate stay duration
  getStayDuration() {
    if (!this.checkInDate || !this.checkOutDate) return "Incomplete stay details.";
    const diffTime = this.checkOutDate - this.checkInDate;
    const days = diffTime / (1000 * 60 * 60 * 24);
    return `${this.getFullName()} stayed for ${days} night(s).`;
  }
}

// Example usage:

// Worker
const worker1 = new Worker("Ali", "Mohamed", true, 30, "NI12345", "Receptionist", "Night");
console.log(worker1.work());

// Customer
const customer1 = new Customer("Sara", "Hussein", false, 25);
console.log(customer1.checkIn(101, new Date("2025-08-20")));
console.log(customer1.checkOut(new Date("2025-08-25")));
console.log(customer1.getStayDuration());
