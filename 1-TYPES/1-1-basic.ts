{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array....
     */

    // number
    const num1:number = 1;
    const num2:number = 0.1;

    // string
    const str:string = 'hello';

    // boolean
    const boal:boolean = true;

    // undefined(값이 정해지지 않음, 💩)
    let age: number | undefined;
    age = undefined;
    age = 20;

    // null(값이 없음, 💩)
    let person: null | string;

    // unknown(💩)
    let notSure: unknown = 0;
    notSure = 'hi';
    notSure = true;

    // any(💩)
    let anyting: any = 0;
    anyting = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return;
    }

    // never(아무것도 return할 수 없다.)
    function throwError(message: string): never {
        // message -> server(log)

        // 1. 에러를 던진다.
        throw new Error(message);

        // 2. while(무한루프를 돈다.)
    }

    // object(💩)
}