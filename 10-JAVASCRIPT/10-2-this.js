console.log(this);

function simpleFunc() {
    console.log(this);
}

// 글로벌에서 함수를 호출하는 것음 윈도우에서 호출 하는 것이랑 같습니다.
// window.simpleFunc();
// 함수는 글로벌 객체에 (Window)등록되서 사용이 되지만
// 변수는 글로벌로 사용은 되지만 등록은 되지 않습니다.
// var은 예외적으로 등록이 됩니다.
simpleFunc();

class Counter {
    count = 0;
    increase = function() {
        console.log(this);
    };
    increaseArrow = () => {
        console.log(this);
    };
}

const counter = new Counter();
counter.increase();
const caller = counter.increase; // undefined
const callerBind = counter.increase.bind(counter); // Counter

// 함수를 선언 할 때 arrow function으로 만들면 자기자신의 this를 가지고 있습니다.
// 다른 프로그래밍에서 this를 사용하면 class안 의 자기자신을 가르키는 것 처럼
// arrow function을 사용하면 선언 됐을 당시의 this를 유지합니다.
const arrow = counter.increaseArrow; // Counter
caller();
callerBind();
arrow();

class Bob {

}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob