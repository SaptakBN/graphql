import { HydratedDocument } from 'mongoose';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { UserInterface } from './user.interface';
import * as bcrypt from 'bcryptjs';

export type UserDocument = HydratedDocument<User> & {
  comparePasswords: (submittedPassword: string) => Promise<boolean>;
};

@Schema({ timestamps: true })
export class User implements Partial<UserInterface> {
  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Exclude()
  @Prop({ required: true })
  password: string;
}
const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;

  next();
});

UserSchema.methods.comparePasswords = async function (
  submittedPassword: string,
): Promise<boolean> {
  return bcrypt.compare(submittedPassword, this.password);
};

const UserRepository = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
]);

export { UserRepository };
