{
    // Type Assertions 💩
    // 정말정말 타입을 장담할 때 사용
    function jsStrFunc(): any {
        return 'hello';
    }

    const result = jsStrFunc();
    console.log((result as string).length);

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers()!;

    // !는 ?와 반대 무조건 값이 들어 온다고 장담.
    numbers!.push(2); // 😱

    // querySelector는 값이 있으면 값을 주고, 아니면 null를 return한다.
    const button = document.querySelector('class')!;
    button.nodeValue; // error,,,위에서 !를 붙히면 빨간줄이 사라짐.
    if(button) {
        button.nodeValue;
    }
}