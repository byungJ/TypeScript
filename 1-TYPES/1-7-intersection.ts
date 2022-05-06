{
    // Interscetion Types: & (다양한 타입을 하나로 묶을 수 있다.)
    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        empolyeeId: number;
        work: () => void;
    };

    function interWork(person: Student & Worker) {
        console.log(person.name, person.empolyeeId, person.work());
    }

    interWork({
        name: 'ellie',
        score: 1,
        empolyeeId: 123,
        work: () => {},
    });
}