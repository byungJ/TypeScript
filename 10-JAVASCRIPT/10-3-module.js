// exprot default: 한 파일에 한번만 사용 가능하고,
// 다른곳에서 이름을 변경해서 사용 할 수 있습니다. add -> sum
export default function add(a, b) {
    return a + b;
}

// 동일한 이름으로 사용을 해야 됩니다.
export function print() {
    console.log('print');
}

export const number = 10;