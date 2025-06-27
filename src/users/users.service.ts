import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto)
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const result = await this.userModel.findByIdAndUpdate(
      id, updateUserDto, { new: true }
    ).exec();

    if (!result) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return result;
  }

  async remove(id: string): Promise<{ message: string }> {

    const result = await this.userModel.findOneAndDelete({ _id: id }).exec();

    if (!result) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return { message: 'Delete successful' }

  }
}
