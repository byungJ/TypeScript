{
    interface Employee {
        pay(): void;
    }

    class FullTimeEmployee implements Employee {
        pay(): void {
            console.log('full time!!!');
        }

        workFullTime() {

        }
    }

    class PartTimeEmployee implements Employee {
        pay(): void {
            console.log('part time!!!');
        }

        workPartTime() {

        }
    }

    function pay<T extends Employee>(employee: T): T{
        employee.pay();
        return employee;
    }

    const eggpotato = new FullTimeEmployee();
    const bob = new PartTimeEmployee(); 
    eggpotato.workFullTime();
    bob.workPartTime();

    const eggpotatoAfterPay = pay<FullTimeEmployee>(eggpotato);
    const bobAfterPay = pay<PartTimeEmployee>(bob);

    const obj1 = {
        name: 'kbj',
        age: 23,
    }

    const obj2 = {
        animal: '🐰'
    }

    console.log(getValue(obj1, 'name')); // kbj
    console.log(getValue(obj1, 'age')); // 23
    console.log(getValue(obj2, 'animal')); //🐰

    function getValue<T extends Object, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }
}