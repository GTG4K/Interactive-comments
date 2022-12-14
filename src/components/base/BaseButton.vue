<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  background: var(--Moderate-blue);
  border: none;
  height: fit-content;
  padding: 1rem 2rem;
  border-radius: 8px;
  color: var(--color-light-100);
  font-weight: 500;
}
button:hover {
  background: var(--light-grayish-blue);
  border: none;
  height: fit-content;
  padding: 1rem 2rem;
  border-radius: 8px;
}
</style>
