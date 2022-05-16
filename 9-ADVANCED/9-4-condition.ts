{
    // 기존의 주어진 타입이 string이면 boolean, 아니면 number
    type Check<T> = T extends string? boolean : number;

    // Type의 타입은 boolean
    type Type = Check<string>;

    type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : T extends Function
    ? 'function'
    : 'object';

    type T0 = TypeName<string> // 'string', string이라는 문자열 타입
    type T1 = TypeName<'a'> // 'string'
    type T2 = TypeName<() => void> // 'function'
}