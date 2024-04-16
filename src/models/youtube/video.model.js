import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      //link will come from cloudnary
      type: String,
      required: true,
    },
    thumbnail: {
      //link will come from cloudnary
      type: String,
      required: true,
    },
    duration: {
      //duration will come from clowdnary
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Video = mongoose.model("Video", videoSchema);
