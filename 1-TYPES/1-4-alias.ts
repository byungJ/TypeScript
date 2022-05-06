{
    /**
     * Type Aliases
     * 타입을 직접 정의 할 수 있습니다.
     */

    type Text = string;
    const name: Text = 'ellie';
    const address: Text = 'Australia';

    type Num = number;
    type Student = {
        name: string;
        age: number;
    }

    const student: Student = {
        name: 'ellie',
        age: 12,
    }

    /**
     * String Literal Types
     */
    type Name = 'eggpotato';
    let kbj: Name = 'eggpotato';

    type Age = 20;
    const age: Age = 20;

    type Boal = true;
    const boal: Boal = true;
}