{
    class NetWorkClient {
        tryConnect(): void {
            throw new Error('no network!!');
        }
    }
    
    class UserService {
        constructor(private client: NetWorkClient) {}
    
        login() {
            this.client.tryConnect();
            // login.....
        }
    }
    
    class App {
        constructor(private userService: UserService) {}
        run() {
            try
            {
                this.userService.login();
            } catch(error) {
                // 에러는 처리하고 해결 할 수 있는 곳에서 잡는것이 좋습니다.
                // show dialog to user
            }
        }
    }
    
    const client = new NetWorkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}