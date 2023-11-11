<template>
  <span class="loader"></span>
</template>

<style lang="scss">
.loader {
  width: 100%;
  height: 100vh;
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: "";
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #981313;
    position: absolute;
    left: 50%;
    top: 50%;
    animation: animloader 2s linear infinite;
  }
  &::after {
    animation-delay: 1s;
  }
}

@keyframes animloader {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
