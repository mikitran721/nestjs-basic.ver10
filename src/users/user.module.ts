import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers:[UserController],
    // providers:[UserService] -> dung the  nay neu ko nhung library # vo
    // cach dung sau co key de tranh conflict voi library khac
    providers:[
        {
            provide:'USER_SERVICES_MKT',
            useClass: UserService
        }
    ]
})
export class UsersModule{}