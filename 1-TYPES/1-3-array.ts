{
    // Array
    const fruits: string[] = ['🍎', '🍌'];
    const scroes: Array<number> = [1,2,3,4];
    function printArray(fruits: readonly string[]) {}

    // Tuple(서로 다른 타입을 넣을 수 있습니다) => interface, type alias, class
    let student: [string, number];
    student = ['eggpotato', 123];
    student[0]; // name
    student[1]; // 123

    // 변수를 선언 한 다음.
    // 첫번째 값이 name으로 두번째 값이 age로 들어갑니다.
    const [name, age] = student;

    let [k1, k2, k3] = [1, 2, 3];
    console.log(k1); // 1
    console.log(k2); // 2
    console.log(k3); // 3
}