{
    function checkNotNullBad(arg: number | null): number {
        if (arg == null) {
            throw new Error('not vaild number!!');
        }
        return arg;
    }

    const result = checkNotNullBad(123);
    console.log(result);
    checkNotNullBad(null);

    function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error('not vaild number!!');
        }
        return arg;
    }

    // typescript는 <>안에 타입을 입력 안해줘도 
    // 입력된 값에 맞게 알아서 타입을 정해주는구만..?
    const number = checkNotNull<number>(123);
    const boal: boolean = checkNotNull(true);
}