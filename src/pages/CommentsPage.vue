<template>
  <div class="comments">
    <comment-card
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    ></comment-card>
  </div>
  <new-reply type="comment"></new-reply>
</template>

<script>
import CommentCard from '@/components/UI/CommentCard.vue';
import NewReply from '@/components/UI/NewReply.vue';
export default {
  components: {
    CommentCard,
    NewReply,
  },
  computed: {
    comments() {
      const comments = this.$store.getters.getComments;
      return comments;
    },
  },
};
</script>

<style scoped>
.comments {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 1rem;
}
</style>
