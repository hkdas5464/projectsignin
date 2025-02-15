import mongoose, { Document, Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: [true, 'Please provide a name'] },
  email: { type: String, required: [true, 'Please provide an email'], unique: true },
  password: { type: String, required: [true, 'Please provide a password'] }
});

// This is necessary to prevent model overwrite upon hot-reloading in development.
export default (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>('User', UserSchema);
