<template>
  <v-container>
      <v-row align="center">
        <!-- LEFT CONTENT -->
        <v-col cols="12" md="6">
          <h1 class="hero-title text-white">
            Lastest Blogs.
          </h1>

          <p class="hero-desc text-white ">
            What's happening inside development worlds.
          </p>

          <v-btn rounded class="text-none" size="large" color="white" variant="flat">
            View Our Blogs
          </v-btn>

        </v-col>

        <!-- RIGHT CIRCLES -->
      <v-col cols="12" md="6" >
        <v-row>
          <v-col cols="6">
            <div class="carousel-container-up">
              <div class="mb-4 carousel-up" justify="center">
                <div class="inner">
                  <Card class="mt-4" v-for="(value, i) in Array(10)" :key="`up-${i}`" />
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="carousel-container">
              <div class=" carousel" justify="center">
                <div class="inner">
                  <Card class="mt-4" v-for="(value, i) in Array(10)" :key="`down-${i}`" />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
      </v-row>
    </v-container>
</template>
<style lang="scss">

  /*For Container Height*/
  .carousel-container-up {
    height: 83vh;
    overflow: hidden;
    position: relative;
  }

  /*Control Animation Speed*/
  .carousel-up {
    animation: scrollUp 50s linear infinite;
  }

  /*It Creates The Animation*/
  @keyframes scrollUp {
    0% {
      transform: translate3d(0, 0%, 0);
    }
    100% {
      transform: translate3d(0, -50%, 0);
    }
  }

  /*Responsive Adjustments*/
  @media (max-width: 1024px){
    .carousel-container {
      height: 100vh;
      }
  }

  @media (max-width: 767px){
      
    .carousel{
      animation: scrollUp 8s linear infinite;
    }    

    .carousel-container {
        height: 100vh!important;
    }
        
    @keyframes scrollUp {
      0% {
        transform: translate3d(0, 0%, 0);
      }
      100% {
        transform: translate3d(0, -50%, 0);
      }
    }
  }
/*For Container Height*/
.carousel-container{
  height: 83vh;
  overflow: hidden;
  position: relative;
}

/*Control Animation Speed*/
.carousel {
  animation: scrollDown 50s linear infinite;
}

/*It Creates The Animation*/
@keyframes scrollDown {
  0% {
    transform: translate3d(0, -50%, 0); /* Start above */
  }
  100% {
    transform: translate3d(0, 0%, 0); /* Move down */
  }
}

/*Responsive Adjustments*/
@media (max-width: 1024px){
  .carousel-container {
    height: 100vh;
  }
}

@media (max-width: 767px){
  .carousel {
    animation: scrollDown 50s linear infinite;
  }    

  .carousel-container {
    height: 100vh!important;
  }

  @keyframes scrollDown {
    0% {
      transform: translate3d(0, -50%, 0);
    }
    100% {
      transform: translate3d(0, 0%, 0);
    }
  }
}

/* Inner wrapper for duplicated items to layout vertically */
.carousel .inner,
.carousel-up .inner {
  // display: flex;
  flex-direction: column;
}

.carousel .inner > *,
.carousel-up .inner > * {
  flex-shrink: 0;
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

</style>