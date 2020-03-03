const { Schema, model } = require('mongoose');

const { ObjectId } = Schema.Types;

const postHistorySchema = new Schema(
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
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

const PostHistoryModel = model('PostHistory', postHistorySchema);

module.exports = {
  PostHistoryModel,
};
