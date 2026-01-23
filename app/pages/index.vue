<template>
  <div class="hero">
    <v-container>
      <v-row align="center">
        <!-- LEFT CONTENT -->
        <v-col cols="12" md="6">
          <h1 class="hero-title">
            Innovation at Every Layer.
          </h1>

          <p class="hero-desc">
            Innovation should be existed in every part of the business
            to make it grow effectively and efficiently.
          </p>

          <v-btn rounded class="text-none" size="large" color="white" variant="flat">
            View Our Projects
          </v-btn>

          <!-- STATS -->
          <v-row class="mt-10 stats">
            <v-col cols="4">
              <h2>10</h2>
              <span>Total Projects</span>
            </v-col>
            <v-col cols="4">
              <h2>8</h2>
              <span>Contributors</span>
            </v-col>
            <v-col cols="4">
              <h2>50%</h2>
              <span>Milestone Reached</span>
            </v-col>
          </v-row>
        </v-col>

        <!-- RIGHT CIRCLES -->
      <v-col cols="12" md="6" class="circle-wrapper">
        <div class="circle ring-1"></div>
        <div class="circle ring-2"></div>
        <div class="circle ring-3"></div>
        <div class="circle ring-4"></div>
      </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  background: radial-gradient(circle at right, #5b3b9a, #0b0b1a);
  color: white;
  display: flex;
  align-items: center;
}

.hero-title {
  font-size: 42px;
  font-weight: 700;
}

.hero-desc {
  max-width: 420px;
  margin: 16px 0 32px;
  opacity: 0.85;
}

.stats h2 {
  font-size: 28px;
}

.stats span {
  font-size: 14px;
  opacity: 0.8;
}

/* CIRCLES */
.circle-wrapper {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.circle {
  position: absolute;
  border-radius: 50%;
  background-color: #6f4cc3; /* purple from image */
  top: 50%;
  right: 50%; /* push off screen */
  transform: translate(50%, -50%) scale(1);
  animation-name: breathe;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

/* Rings – only size + opacity change */
.ring-1 {
  width: 65vh;
  height: 65vh;
  opacity: 0.15;
  animation-duration: 8s;
}

.ring-2 {
  width: 55vh;
  height: 55vh;
  opacity: 0.22;
  animation-duration: 6s;

}

.ring-3 {
  width: 45vh;
  height: 45vh;
  opacity: 0.3;
  animation-duration: 4s;
}

.ring-4 {
  width: 35vh;
  height: 35vh;
  opacity: 0.4;
  animation-duration: 2s;
}
@keyframes breathe {
  0% {
    transform: translate(50%, -50%) scale(1);
  }
  50% {
    transform: translate(50%, -50%) scale(1.05);
  }
  100% {
    transform: translate(50%, -50%) scale(1);
  }
}
@media (max-width: 960px) {
  .circle-wrapper {
    display: none;
  }
}
</style>
