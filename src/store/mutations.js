export default {
  addReply(state, payload) {
    const comments = state.comments;

    //find the right comment
    const comment = comments.find((comment) => comment.id === payload.id);
    const newReply = {
      id: payload.newId,
      content: payload.value,
      createdAt: 'recently',
      score: 0,
      replyingTo: payload.reply.user.username,
      user: {
        image: {
          png: state.currentUser.image.png,
          webp: state.currentUser.image.webp,
        },
        username: state.currentUser.username,
      },
    };
    comment.replies.push(newReply);
    console.log(`new Reply: reply id-${newReply.id}, parent id: ${comment.id}`);
  },
  addComment(state, payload) {
    const user = state.currentUser;

    const newComment = {
      id: payload.newId,
      content: payload.value,
      createdAt: 'recently',
      score: 0,
      user: {
        image: {
          png: user.image.png,
          webp: user.image.webp,
        },
        username: user.username,
      },
      replies: [],
    };

    state.comments.push(newComment);
    console.log(`new Comment: id-${newComment.id}`);
  },
  incrementId(state) {
    state.id++;
    console.log(`set ${state.id}`);
  },
};
