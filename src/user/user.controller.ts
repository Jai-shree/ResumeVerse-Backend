import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('/:userId')
  findUserResumes(@Param('userId') userId:string){
    return this.userService.findUserResumes(userId);
  }
  @Get('/:userId/:resumeId')
  findResumes(@Param('userId') userId:string, @Param('resumeId') paramId:string){
    return this.userService.findResumes(userId,paramId);
  }
}
