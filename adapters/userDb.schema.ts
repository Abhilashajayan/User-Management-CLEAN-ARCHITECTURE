import mongoose, { Document, Model, Schema } from 'mongoose';
import { userSchemaI } from '../interface/userSchemaI';

const userSchema = new Schema<userSchemaI>({
    name : { type: String, required: true },
    email : { type: String, required: true }
});

const userModel: Model<userSchemaI> = mongoose.model<userSchemaI>('userSchema', userSchema);
export default userModel;