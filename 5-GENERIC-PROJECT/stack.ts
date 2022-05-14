interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
}

type StackNode<T> = {
    readonly value: T;
    
    // next: StackNode | undefined 같은 코드
    readonly next?: StackNode<T>;
}

class StackImpl<T> implements Stack<T> {
    // 내부에서 쓰는 이름과 외부에서 쓰는 이름이 같은 경우
    // _ 를 사용 해주면 됩니다.
    private _size: number = 0;
    private head?: StackNode<T>;

    get size() {
        return this._size;
    }
    push(value: T): void {
        // value: value ---> value(키랑 값이 같으면 하나로 합치기 가능...)
        //const node: StackNode<T> = { value: value, next: this.head } 타입추론으로 변경하기.
        const node = { value: value, next: this.head }

        /**
         * 1. a를 생성하고 next에는 값이 없고
         * 2. this.head에 생성한 a에 노드를 대입
         * 3. b를 생성하고 next: this.head(현재 a의 노드가 들어가 있음)로 인하여
         * 4. next에 전에 저장된 a의 노드를 적용.
         */
        this.head = node;
        this._size++;
    }
    pop(): T {
        // null == undefined
        // null !=== undefined
        if (this.head == null) {
            throw new Error('Stack is empty!!!');
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}

const stack = new StackImpl<string>();
stack.push('A');
stack.push('D');
stack.push('E');

const stack2 = new StackImpl<number>();
stack2.push(1);
stack2.push(2);
stack2.push(3);


while(stack.size !== 0) {
    console.log(stack.pop());
}

while(stack2.size !== 0) {
    console.log(stack2.pop());
}