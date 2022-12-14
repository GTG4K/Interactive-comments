<template>
  <div class="comment">
    <reply-card :data="comment" :comment-id="comment.id"></reply-card>
    <div v-if="comment.replies.length > 0" class="comment-replies">
      <div class="reply-line"></div>
      <div class="replies-holder">
        <reply-card
          v-for="reply in comment.replies"
          :key="reply.id"
          :data="reply"
          :commentId="comment.id"
        ></reply-card>
      </div>
    </div>
  </div>
</template>

<script>
import ReplyCard from './ReplyCard.vue';
export default {
  components: {
    ReplyCard,
  },
  props: ['comment'],
};
</script>

<style scoped>
.comment {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.comment-replies {
  display: flex;
}
.reply-line {
  width: 6px;
  border-radius: 8px;
  background: var(--color-light-300);
  margin: 1rem 2.5rem;
}
.replies-holder {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
}
@media only screen and (max-width: 900px) {
  .reply-line {
    width: 6px;
    border-radius: 8px;
    background: var(--color-light-300);
    margin: 0.5rem 1rem 0.5rem 0.2rem;
  }
}
</style>
