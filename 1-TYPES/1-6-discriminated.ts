{
    // Union 타입을 만들때는 공통적인 프로퍼티를 만듬으로
    // 조금 더 구분하기 쉽게 만들 수 있습니다.
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        }
    }

    type FailState = {
        result: 'fail';
        reason: string;
    }

    type LoginState = SuccessState | FailState
    function login(): LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            },
        };
    }

    // printLoginState(state)
    // success -> 🎉 body
    // fail -> 😂 reason
    function printLoginState(state: LoginState): void {
        state.result //success or fail

        if(state.result === 'success'){
            console.log(`🎉 ${state.response.body}`);
        }else {
            console.log(`😂 ${state.reason}`);
        }
    }
}