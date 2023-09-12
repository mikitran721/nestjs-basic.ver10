import { Expose } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import { BaseDto } from "src/common/base.dto";

export class UserDto extends BaseDto{
    @IsNotEmpty()
    @Expose()
    username: string;

    @IsNotEmpty()
    @Length(6,8)
    @Expose()
    password:string;
}