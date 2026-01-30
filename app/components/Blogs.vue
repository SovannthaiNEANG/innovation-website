<template>
  <ContainerWrapper>
    <v-row align="center">
      <!-- LEFT CONTENT -->
      <v-col cols="12" md="6">
        <MainTitle title="Latest Blogs." description="What's happening inside development worlds." btnText="View Our Blogs"></MainTitle>
      </v-col>

      <!-- RIGHT CIRCLES -->
      <v-col cols="12" md="6" >
        <v-row class="mt-4">
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
  </ContainerWrapper>
</template>
<style lang="scss" scoped>

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

  /*Pause Animation on Hover*/
  .carousel-up:hover {
    animation-play-state: paused;
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
      height: 68vh;
    }
    .carousel-container-up {
      height: 68vh;
    }
  }

  @media (max-width: 767px){
      
    .carousel {
      animation: scrollUp 8s linear infinite;
    }    

    .carousel-container {
        height: 70vh !important;
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
.carousel-container {
  height: 83vh;
  overflow: hidden;
  position: relative;
}

/*Control Animation Speed*/
.carousel {
  animation: scrollDown 50s linear infinite;
}

/*Pause Animation on Hover*/
.carousel:hover {
  animation-play-state: paused;
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
    height: 68vh;
  }
}

@media (max-width: 767px){
  .carousel {
    animation: scrollDown 50s linear infinite;
  }    

  .carousel-container {
    height: 70vh !important;
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
  display: flex;
  flex-direction: column;
}

.carousel .inner > *,
.carousel-up .inner > * {
  flex-shrink: 0;
}

</style>