{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // class 안에서 맴버변수를 작성 할 때는 let, const를 사용하지 않아도 됩니다.
    // function이라는 키워드도 사용하지 않아도 됩니다.
    // class 안에 있는 맴버변수에 접근 할 때는 this붙히기
    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        coffeeBeans: number = 0; // instance (object) level

        // object를 만들 때 항상 호출 됩니다.
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
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

    const maker = new CoffeeMaker(32);
    console.log(maker);
    console.log(CoffeeMaker.makeMachine(3));
}