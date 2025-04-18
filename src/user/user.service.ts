import { Injectable, NotFoundException, Inject, LoggerService } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schema/User.schema';
import { Model } from 'mongoose';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService
  ) {}

  async create(userDto: UserDto) {
    //this.logger?.debug(`Creating or updating user with userId: ${userDto.userId} and resumeId: ${userDto.resumeId}`);
    const id = await this.userModel.find({ userId: userDto.userId, resumeId: userDto.resumeId }, '_id');
    const existingUser = await this.userModel.findByIdAndUpdate(id, userDto, { new: true, upsert: true });

    if (existingUser) {
      this.logger.log(`User record upserted for userId: ${userDto.userId}`);
    } else {
      this.logger.warn(`User record creation failed for userId: ${userDto.userId}`);
    }

    return existingUser;
  }

  async findAll() {
    const data = await this.userModel.find();

    if (!data || data.length === 0) {
      this.logger.warn('No user data found');
      throw new NotFoundException('Students data not found!');
    }

    this.logger.log(`Fetched ${data.length} users`);
    return data;
  }

  async findUserResumes(userId: string) {
    const data = await this.userModel.find({ userId });
    if (!data || data.length === 0) {
      this.logger.warn('No user data found');
    }
    this.logger.log(`Fetched ${data.length} resumes for userId: ${userId}`);
    return data;
  }

  async findResumes(userId: string, resumeId: string) {
    const data = await this.userModel.find({ userId, resumeId });
    if (!data || data.length === 0) {
      this.logger.warn(`No resume found for the userID: ${userId}`);
    }
    this.logger.log(`Fetched resume details for userId: ${userId}, resumeId: ${resumeId}`);
    return data;
  }
}