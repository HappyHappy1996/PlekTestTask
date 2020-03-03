const { Schema, model } = require('mongoose');

const { ObjectId } = Schema.Types;

const postSchema = new Schema(
  {
    message: {
      type: String,
    },
    author: {
      ref: 'User',
      type: ObjectId,
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
