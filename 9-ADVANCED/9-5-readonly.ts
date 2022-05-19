{
    type ToDo = {
        title: string;
        description: string;
    };

    // Readonly는 이미 정의가 되어 있다.
    // 대부분의 많은 타입이 이미 만들어져 있습니다.(유틸리티 타입)
    // ?가 있으면 있어도 되고 없어도 되고
    // -?는 옵션이 아니고 절대 무조건 있어야된다...
    // 옵셔널? 타입을 -? 사용하면 무조건 있어야되는 타입으로 변경
    function display(todo: Readonly<ToDo>) {
        todo.title = 'jaja';
    }
}