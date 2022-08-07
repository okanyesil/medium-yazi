import { AppService } from './app.service';
import { AuthService } from './auth/service/auth.service';
import { UserService } from './user/services/user.service';
export declare class AppController {
    private readonly appService;
    private userService;
    private authService;
    constructor(appService: AppService, userService: UserService, authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    createUser(body: any): Promise<import("./user/entity/user.model").User>;
    getProfile(req: any): any;
}
