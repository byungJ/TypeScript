{
    //JavaScript
    const DAYS_ENUM = Object.freeze({ Monday: 0, Tuesday: 1 });

    // Enum
    // 별도의 설정을 안해주면 0부터 시작
    // Enum보다 Union타입으로 만들어서 사용하는 것을 추천.
    enum Days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(Days.Tuesday);
    let day: Days = Days.Friday;
    // 타입을 검사해 주지 못함.
    day = 10;

    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    let dayof: DaysOfWeek = 'Monday';
    dayof = 'kbj'; // error
}