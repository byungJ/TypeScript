// either: a or b
interface Either<T, U> {
    left: () => T;
    right: () => U;
    
    test(): number;
}

type functionType = () => number;


class SimpleEither<T, U> implements Either<T, U> {
    constructor(private leftValues: T, private rightValue: U) {

    }

    left(): T {
       return this.leftValues; 
    }

    right(): U {
        return this.rightValue;
    }

    test(): number {
        return 123;
    }

    dfdf(): functionType {
        return () => 123;
    }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left();
either.right();

const best = new SimpleEither({ name: 'eggpotato' }, 'hello');