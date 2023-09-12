import { plainToClass } from "class-transformer";
import { UserDto } from "./user.dto";
import { UserRepository } from "./user.repository";

// thao tac logic
export class UserService{
    constructor(userRepository:UserRepository){}
    createUser(user:UserDto):UserDto{
        //su dung class-transformer: tenClass can plain & du lieu can plain; can loai bo nhung field khong duoc expose ra o dto

        // fake du lieu
        user.createdAt = new Date();
        user.id = 1;
        user.updatedAt = new Date();
        const userReal = plainToClass(UserDto,user)
        // console.log(userReal)

        

        return userReal;
    }
}