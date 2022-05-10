{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // public
    // private
    // protected
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        // object를 만들 때 항상 호출 됩니다.
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        public fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
    
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            }
        }
    }

    // const maker = new CoffeeMaker(32);
    const maker = CoffeeMaker.makeMachine(32);
    console.log(maker);
    console.log(CoffeeMaker.makeMachine(3));

    class User {
        get fullName(): string {
           return `${this.firstName} ${this.lastName}`;
        }

        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }

        set age(num:number) {
            if(num < 0) {
                throw new Error('유후~~ 0보다 작을 수는 없다구...');
            }
            this.internalAge = num;
        }

        // 변수를 위에서 생서하지 않고 바로 생성
        constructor(private firstName: string, private lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    const user = new User('Steve', 'Jobs');
    user.age = 10;

    // get은 함수 같이 생겼지만 접근 할 때는 맴버변수에 접근 하는 것 처럼 접근!!
    console.log(user.fullName);
}