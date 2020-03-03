const { Schema, model } = require('mongoose');

const { ObjectId } = Schema.Types;

const userSchema = new Schema(
  {
    username: {
      type: String, required: true,
    },
    group: {
      ref: 'Group',
      type: ObjectId,
    },
    posts: [
      {
        ref: 'Post',
        type: ObjectId,
      },
    ],
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

const UserModel = model('User', userSchema);

module.exports = {
  UserModel,
};
