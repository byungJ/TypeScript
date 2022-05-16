type PositionType = {
    x: number;
    y: number;
};

interface PositionInterface {
    x: number;
    y: number;
}

// Object(둘다 오브젝트 형태로 만들 수 있습니다.)
const obj1: PositionType = {
    x: 1,
    y: 1,
}

const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
}

// class(둘다 class에서 구현이 가능 합니다.)
class Pos1 implements PositionType {
    x: number;
    y: number;
}

class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
}

// Extends(둘다 확장도 가능합니다.)
interface ZPositionInterface extends PositionInterface {
    z: number;
}

type ZPositionType = PositionType & {z: number};

// only interfaces can be merged.
// 같은 이름의 인터페이스에 바로 추가 가능.
interface PositionInterface {
    z: number;
}

// Type aliases can use computed properties
type Person = {
    name: string,
    age: number,
}
type Name = Person['name']; // Name은 string타입이 됩니다.