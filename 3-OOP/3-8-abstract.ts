{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSuger?: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // abstract의 인스턴스는 만들수 없다.(부모용도)
    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        public fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine...🧼');
        }

        grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;

        }

        preheat() {
            console.log('heating up....🔥');
        }

        protected abstract extract(shots: number): CoffeeCup;

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {

        // 자식클래스 에서(상속하면서) 생성자를 별도로 정의한다면 꼭 super를 호출.
        // 대부분의 객체지향 프로그래밍 언어에서 공통
        constructor(beans: number, public readonly seriaNumber: string) {
            super(beans);
        }

        private steamMilk(): void {
            console.log('Steaming some milk...🥛');
        }
        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            }
        }
        
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup {
            return {
                shots,
                hasSuger: true,
            }
        }
    }

    // 다형성(동일한 부모를 사용 하고 있으므로 하나의 타입으로 받을 수 있습니다.)
    const machines: CoffeeMaker[] = [
        new CaffeLatteMachine(16,'1'),
        new SweetCoffeeMaker(16),
        new CaffeLatteMachine(16,'1'),
        new SweetCoffeeMaker(16),
    ];

    // 동일한 부모를 상속, 구현 받으면 어떤 클래스인지 중요하지 않고
    // 동일한(공통) 함수를 사용 할 수 있습니다.
    machines.forEach(machine => {
        console.log('----------------');
        machine.makeCoffee(1);
    })
}