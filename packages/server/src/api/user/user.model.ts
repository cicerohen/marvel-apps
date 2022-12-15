import dynamoose from 'dynamoose';
import {} from 'dynamoose/dist/Table/index';
import { Item } from 'dynamoose/dist/Item';
import { nanoid } from 'nanoid';

export type UserType = Item & {
  id: string;
  name: string;
  email: string;
  _salt: string;
  _hashedPassword: string;
};

export const UserSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
    index: true,
    default: nanoid(),
    required: true
  },
  name: {
    type: String
  },
  email: {
    type: String,
    index: {
      name: 'email-index',
      type: 'global'
    },
    required: true
  },
  _hashedPassword: String,
  _salt: String
});

export const User = dynamoose.model<UserType>('User', UserSchema);
