{
    // Type Inference

    let text = 'hello';
    text = 1;

    function add(x:number, y:number) {
        return x + y;
    }

    const result = add(1,2); //number로 자동 타입

    // 하지만 타입추론은 사용하지 않는게 좋다.
    // 특히 함수에서는
}