import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class User {
  @Prop({ isRequired: true })
  name: string;
  @Prop({ isRequired: true })
  email: string;
}

const userEntity = SchemaFactory.createForClass(User);
export { userEntity };
