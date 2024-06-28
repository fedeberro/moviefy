import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    hashedPassword: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    isAdmin: Boolean,
    avatar: String,
    verified: Boolean,
    verificationToken: {
      token: String,
      expiresAt: Date,
    },
    passwordRecoveryToken: {
      token: String,
      expiresAt: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject.hashedPassword;
    delete returnedObject._id;
    delete returnedObject.verificationToken;
    delete returnedObject.passwordRecoveryToken;
  },
});

const User = mongoose.model("User", userSchema);

export default User;
