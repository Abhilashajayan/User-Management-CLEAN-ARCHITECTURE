import { Document } from "mongoose";

export interface userSchemaI extends Document {
    id? : string;
    name : string;
    email : string;
}