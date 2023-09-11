import { IsNotEmpty, Length } from "class-validator";

export class UserDto{
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @Length(6,8)
    password:string;
}