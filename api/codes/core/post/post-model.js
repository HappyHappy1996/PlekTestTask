const { Schema, model } = require('mongoose');

const { ObjectId } = Schema.Types;

const postSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    group: {
      ref: 'Group',
      type: ObjectId,
      required: true,
    },
    author: {
      ref: 'User',
      type: ObjectId,
      required: true,
    },
    postHistory: [
      {
        ref: 'PostHistory',
        type: ObjectId,
      },
    ],
    edited_at: {
      type: Date,
      required: false,
      default: null,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

const PostModel = model('Post', postSchema);

module.exports = {
  PostModel,
};
