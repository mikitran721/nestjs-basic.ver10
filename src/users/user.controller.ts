import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserDto } from "./user.dto";
import path from "path";

@Controller('users')
export class UserController {
    // @Get()
    // getAllUsers() {
    //     return [{
    //         name: 'miki',
    //         age: 100
    //     },
    //     {
    //         name: 'poo',
    //         age: 88
    //     }]
    // }

    // @Post()
    // createUser(){
    //     return {
    //         name:'phoong',
    //         age:90
    //     }
    // }
    @UsePipes(new ValidationPipe())
    @Post()
    createUser(@Body() user:UserDto):UserDto{
        return {
            username:'test',
            password:'2023'
        };
    }

    @Get(':id')
    getUserById(@Param('id',ParseIntPipe) id:number){
        console.log(id)
        return 'test'

    }
}