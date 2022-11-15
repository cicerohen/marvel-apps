import dynamoose from 'dynamoose';
import {} from 'dynamoose/dist/Table/index';
import { Item } from 'dynamoose/dist/Item';
import { nanoid } from 'nanoid';
import crypto from 'crypto';

export type UserType = Item & {
  id: string;
  setPassword: (password: string) => Promise<void>;
  encryptPassword: (plainPassword: string) => Promise<string>;
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

User.methods.item.set('setPassword', async function (password) {
  this._salt = crypto.randomBytes(16).toString('base64');
  this._hashedPassword = await this.encryptPassword(password);
});

User.methods.item.set('encryptPassword', async function (plainPassword) {
  if (!this._salt) {
    return '';
  }
  return crypto
    .pbkdf2Sync(plainPassword, this._salt, 100000, 64, 'sha512')
    .toString('base64');
});

User.methods.item.set('validatePassword', function (plainPassword) {
  return this.encryptPassword(plainPassword) === this._hashedPassword;
});
