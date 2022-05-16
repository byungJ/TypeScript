{
    type ToDo = {
        title: string;
        description: string;
    };

    // Readonly는 이미 정의가 되어 있다.
    // 대부분의 많은 타입이 이미 만들어져 있습니다.(유틸리티 타입)
    function display(todo: Readonly<ToDo>) {
        todo.title = 'jaja';
    }
}