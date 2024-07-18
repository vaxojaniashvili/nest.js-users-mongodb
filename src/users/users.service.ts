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

  async findOne(id: string) {
    const user = await this.usersModule.findById(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const deleteOne = await this.usersModule
      .findOneAndDelete({ id: id })
      .exec();
    if (!deleteOne) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return 'Successfully deleted user';
  }
}
