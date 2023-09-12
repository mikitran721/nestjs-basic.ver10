import { Body, Controller, Get, Options, Param, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { ModuleRef } from '@nestjs/core';
import { UserService } from './user.service';
// import path from 'path';
// import { plainToClass } from 'class-transformer';
// import { BaseDto } from 'src/common/base.dto';
// import { UserService } from './user.service';
// import { UserRepository } from './user.repository';

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
  // @UsePipes(new ValidationPipe())

  // userService: UserService;
  constructor(private moduleRef:ModuleRef) {
    // const userRepository = new UserRepository()
    // this.userService = new UserService(userRepository);
  }
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    const userService = this.moduleRef.get(UserService)
    return userService.createUser(user);
  }

  @Get(':id')
  // getUserById(@Param('id',ParseIntPipe) id:number){
  getUserById(@Param('id') id: number) {
    console.log(id);
    return 'test';
  }
}
