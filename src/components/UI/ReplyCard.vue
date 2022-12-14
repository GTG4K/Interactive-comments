<template>
  <div class="card" :class="mobileSizeClass">
    <div v-if="!mobileSize" class="reply-likes">
      <i class="fas fa-plus" @click="addScore"></i>
      <h2>{{ data.score }}</h2>
      <i class="fas fa-minus" @click="reduceScore"></i>
    </div>
    <div class="reply">
      <div class="reply-details">
        <div class="reply-user-date">
          <img :src="data.user.image.png" alt="" />
          <h2>{{ data.user.username }}</h2>
          <p>{{ data.createdAt }}</p>
        </div>
        <div v-if="!mobileSize" class="make-reply" @click="toggleReply">
          <i class="fas fa-reply"></i>
          <h2>Reply</h2>
        </div>
      </div>
      <div class="reply-text">
        <p>{{ replyTo }}</p>
        {{ data.content }}
      </div>
    </div>
    <div v-if="mobileSize" class="mobile-actions">
      <div class="reply-likes-mobile">
        <i class="fas fa-plus" @click="addScore"></i>
        <h2>{{ data.score }}</h2>
        <i class="fas fa-minus" @click="reduceScore"></i>
      </div>
      <div class="make-reply" @click="toggleReply">
        <i class="fas fa-reply"></i>
        <h2>Reply</h2>
      </div>
    </div>
  </div>
  <new-reply
    v-if="replyOn"
    @close-reply="toggleReply"
    :reply="data"
    :id="commentId"
  ></new-reply>
</template>

<script>
import NewReply from './NewReply.vue';
export default {
  props: ['data', 'commentId'],
  components: {
    NewReply,
  },
  data() {
    return {
      replyOn: false,
    };
  },
  methods: {
    toggleReply() {
      this.replyOn = !this.replyOn;
    },
  },
  computed: {
    mobileSize() {
      return this.$store.getters.getMobile;
    },
    mobileSizeClass() {
      const mobileSizeOn = this.$store.getters.getMobile;
      return { mobile: mobileSizeOn };
    },
    replyTo() {
      return this.data.replyingTo ? `@${this.data.replyingTo}` : ``;
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  gap: 2rem;
  background: var(--color-light-100);
  box-shadow: 0 0 10px var(--color-light-400-20);
}
.mobile.card {
  flex-direction: column;
}
.reply {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--color-light-400);
  line-height: 1.4rem;
  gap: 1.2rem;
}
.mobile-actions {
  display: flex;
  justify-content: space-between;
}
.reply-likes {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  background: var(--color-light-300);
}
.reply-likes-mobile {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 125px;
  padding: 0.5rem 0.3rem;
  border-radius: 8px;
  background: var(--color-light-300);
}
.reply-likes i,
.reply-likes-mobile i {
  color: var(--light-grayish-blue);
  cursor: pointer;
}
.reply-likes i:hover,
.reply-likes-mobile i:hover {
  color: var(--Moderate-blue);
}
.reply-likes-mobile h2,
.reply-likes h2 {
  color: var(--Moderate-blue);
}
.reply-user-date {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.reply-user-date img {
  width: 35px;
  height: 35px;
}
.reply-user-date h2 {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-light-500);
}
.reply-user-date p {
  color: var(--color-light-400);
}
.make-reply {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--Moderate-blue);
  font-size: 0.8rem;
  cursor: pointer;
}
.make-reply:hover {
  color: var(--light-grayish-blue);
  cursor: pointer;
}
.reply-details {
  display: flex;
  justify-content: space-between;
}
.reply-text p {
  display: inline;
  font-weight: 700;
  color: var(--Moderate-blue);
}
</style>
