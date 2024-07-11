import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ isRequired: false })
  name: string;
  @Prop({ isRequired: true })
  email: string;
  @Prop({ isRequired: true })
  password: string;
}

const userEntity = SchemaFactory.createForClass(User);
export { userEntity };
