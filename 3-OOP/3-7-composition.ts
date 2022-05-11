{
    // 타입스크립트도 자바처럼 한개만 상속이 가능.....
    // Composition - 필요한 기능 별로 묶어서 필요한 곳에서 편리하게 사용

    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSuger?: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    // 싸구려 우유 거품기.
    class CheapMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Steam some milk...🥛');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class FancyMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Fancy Steam some milk...🥛');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class ColdMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Cold Fancy Steam some milk...🥛');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // 설탕 제조기
    class CandySugerMixer implements SugarProvider {
        private getSuger() {
            console.log('Getting some suger from candy 🍭');
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            return {
                ...cup,
                hasSuger: true,
            }
        }
    }

    class SugerMixer implements SugarProvider {
        private getSuger() {
            console.log('Getting some suger from jar!!!!');
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            return {
                ...cup,
                hasSuger: true,
            }
        }
    }

    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        public constructor(coffeeBeans: number,
            private milk: MilkFrother,
            private suger: SugarProvider) {
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

        extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...☕️`);
            return {
                shots,
                hasMilk: false,
            } 
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();

            const coffee = this.extract(shots);
            const sugarAdded = this.suger.addSugar(coffee);

            return this.milk.makeMilk(sugarAdded);
        }
    }

    // Milk
    const cheapMilkSteamer = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    // Sugar
    const candySugar =new CandySugerMixer();
    const sugar = new SugerMixer();
    const noSugar = new NoSugar();


    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

    
    const latteMachine = new CoffeeMachine(12, cheapMilkSteamer, noSugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);

    const sweetCoffeLatteMachine = new CoffeeMachine(
        12,cheapMilkSteamer,candySugar,
    );
}