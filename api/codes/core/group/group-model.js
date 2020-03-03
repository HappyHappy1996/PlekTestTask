const { Schema, model } = require('mongoose');

const { ObjectId } = Schema.Types;

const groupSchema = new Schema(
  {
    name: { type: String, unique: true },
    users: [
      {
        ref: 'User',
        type: ObjectId,
      },
    ],
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
const GroupModel = model('Group', groupSchema);

module.exports = {
  GroupModel,
};
