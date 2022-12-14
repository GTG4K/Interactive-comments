<template>
  <div class="card">
    <img :src="getUser.image.png" alt="" />
    <textarea
      v-model="boxValue"
      :placeholder="placeholder"
      @input="updateValue"
      @keyup.enter="addReply"
    ></textarea>
    <base-button @click="addReply">{{ buttonText }}</base-button>
  </div>
</template>

<script>
export default {
  props: ['id', 'reply', 'type'],
  emits: ['close-reply'],
  data() {
    return {
      boxValue: '',
      value: null,
    };
  },
  methods: {
    updateValue(e) {
      this.value = e.target.value;
    },
    addReply() {
      const currentId = this.$store.getters.getId;
      console.log(`cuttent id - ${currentId}`);

      if (this.type === 'comment') {
        this.$store.commit('addComment', {
          newId: currentId,
          value: this.value,
        });
        this.boxValue = '';
        this.$store.commit('incrementId');
      } else {
        this.$emit('close-reply');
        this.$store.commit('addReply', {
          id: this.id,
          newId: currentId,
          value: this.value,
          reply: this.reply,
        });
        this.$store.commit('incrementId');
      }

      this.value = null;
    },
  },
  computed: {
    mobileSize() {
      return this.$store.getters.getMobile;
    },
    getUser() {
      return this.$store.getters.getUser;
    },
    placeholder() {
      return this.type === 'comment' ? 'add a comment..' : 'add a reply..';
    },
    buttonText() {
      return this.type === 'comment' ? 'Comment' : 'Reply';
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
  box-shadow: 0 0 10px var(--color-light-400-20);
  background: var(--color-light-100);
}
img {
  height: 50px;
  width: 50px;
}
textarea {
  resize: none;
  outline: none;
  width: 100%;
  height: 100px;
  border-radius: 12px;
  padding: 0.3rem;
  border: 1px solid var(--Moderate-blue);
  color: var(--color-light-400);
}
textarea:hover,
textarea:focus {
  border-color: var(--light-grayish-blue);
}
</style>
