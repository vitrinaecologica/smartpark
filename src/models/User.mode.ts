import mongoose, { Schema, Document} from "mongoose"

export interface IUser extends Document {
    email: String;
    nombre: String;
    Apellido: String;
}

const UserSchema: Schema = new Schema({
    email: {
        type: String,
	required; true,
	unique: true,
    },
    nombre: {
	type: String,
	required: true,
    },
    apellido: {
	type: String,
	required: true,
    }
}

export default mongoose.model < IUser > ("User", UserSchema)

