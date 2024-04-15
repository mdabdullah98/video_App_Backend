import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: [true, "fullname is required"],
      trim: true,
      index: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    passwrod: {
      type: String,
      required: true,
      trim: true,
      min: [6, "minimum password length should be 6 chracter long"],
      max: [16, "maximum password length should be 16 chracter long"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
