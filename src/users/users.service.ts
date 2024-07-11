import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly usersModule: Model<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.usersModule.create(createUserDto);
    const savedUser = user.save();
    if (!savedUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return savedUser;
  }

  findAll() {
    return this.usersModule.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
