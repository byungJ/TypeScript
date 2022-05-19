// import sum, { print as printMessage } from './10-3-module.js';

// export를 한번에 받아 올 수 있습니다.
// export default는 예외
import * as calculator from './10-3-module.js';

console.log(calculator.add(1, 2));
//console.log(sum(1, 3));
//print();
calculator.print();
calculator.number;
//printMessage();