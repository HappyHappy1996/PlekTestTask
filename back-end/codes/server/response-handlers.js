/**
 * You need to set/remove cookies before calling this method
 * @param {Object} reply express object
 * @param {Object} object to send
 * @param {Number} status
 */
function replyJson(reply, object, status = 200) {
  return reply.status(status).json(object);
}

module.exports = {
  replyJson,
};
