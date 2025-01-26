import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schema/User.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }
  
  async create(userDto: UserDto) {
    console.log(userDto);
    const id=await this.userModel.find({userId:userDto.userId,resumeId:userDto.resumeId},"_id");
    //console.log("id:",id);
    const existingUser = await this.userModel.findByIdAndUpdate(id, userDto, { new: true,upsert: true  });
    console.log(existingUser);
    return existingUser;
  }

  async findAll() {
    const data = await this.userModel.find();
    if (!data || data.length == 0) {
      console.log('User data not found');
      throw new NotFoundException('Students data not found!');
    }
    console.log(data);
    return data;
  }
  
  async findUserResumes(userId:string){
    const data = await this.userModel.find({userId:userId});
    return data;
  }

  async findResumes(userId:string,resumeId:string){
    const data = await this.userModel.find({userId:userId,resumeId:resumeId});
    return data;
  }
}
