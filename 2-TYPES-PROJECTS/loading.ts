{
    type LoadingState = {
        state: 'loading';
    };

    type SuccessState = {
        state: 'success';
        response: {
            body: string;
        }
    };

    type FailState = {
        state: 'fail';
        reason: string;
    };

    type ResourceLoadState = LoadingState | SuccessState | FailState;

    printLoginState({ state: 'loading' }); // 👀 loading...
    printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😆 loaded
    printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network

    function printLoginState(state:ResourceLoadState):void {
        if(state.state === 'loading') {
            console.log('👀 loading...');
        }
        else if(state.state === 'fail') {
            console.log(`😱 ${state.reason}` );
        }
        else {
            console.log(`😆 ${state.response.body}` );
        }
    }
}