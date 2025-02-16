class Observer {
    update(phoneNumber) {
        throw new Error("Method 'update()' must be implemented.");
    }
}

class PrintObserver extends Observer {
    update(phoneNumber) {
        console.log(`Phone Number Dialed: ${phoneNumber}`);
    }
}

class MessageObserver extends Observer {
    update(phoneNumber) {
        console.log(`Now Dialing ${phoneNumber}`);
    }
}

class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

 addPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
    console.log(`Phone Number ${phoneNumber} Added.`);
}

removePhoneNumber(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
        this.phoneNumbers.delete(phoneNumber);
        console.log(`Phone Number ${phoneNumber} Removed.`);
    } else {
        console.log(`Phone Number ${phoneNumber} Not Found.`);
    }
}

dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
        console.log(`Dialing ${phoneNumber}...`);
        this.notifyObservers(phoneNumber);
    } else {
        console.log(`Phone Number ${phoneNumber} is not in the directory.`);
    }
}

 addObserver(observer) {
    this.observers.push(observer);
}

removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
}

notifyObservers(phoneNumber) {
    this.observers.forEach(observer => observer.update(phoneNumber));
}
}

const phone = new Telephone();

const observer1 = new PrintObserver();
const observer2 = new MessageObserver();

phone.addObserver(observer1);
phone.addObserver(observer2);

phone.addPhoneNumber("2347023232");
phone.addPhoneNumber("1234567890");

phone.dialPhoneNumber("2347023232");
phone.dialPhoneNumber("9999999999"); 