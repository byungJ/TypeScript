{
    type Video = {
        title: string;
        author: string;
        price: number;
    }

    // [1, 2].map(item => item * item); // [1, 4]

    type Optional<T> = {
        [P in keyof T]?: T[P] // for...in
    }

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    };

    type VideoOptional = Optional<Video>;
    
    type Animal = {
        name: string;
        age: number;
    }

    const animal: Optional<Animal> = {
        age: 1,
        // name: 'dog', name만 있어도 되고 age만 있어도 되고 둘다도 가능.
    }
    animal.name = 'cat';

    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'kbj',
        price: 1234,
    }
    // video.author = 'dfdf'; readonly error

    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    //     descrition?: string;
    // };

    // type VideoReadOnly = {
    //     readonly title: string;
    //     readonly author: string;
    // }
    
    type Nullable<T> = { [P in keyof T]: T[P] | null };
    const obj2: Nullable<Video> = {
        title: 'hi',
        author: null,
        price: 1234,
    };
}