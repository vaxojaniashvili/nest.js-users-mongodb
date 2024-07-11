import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vaxojaniashvili:mongo-users@mongo-users.7mvnx2r.mongodb.net/?retryWrites=true&w=majority&appName=mongo-users',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
