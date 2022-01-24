<template>
  <div class="relative-position">
    <q-carousel
      v-model="currentSlide"
      infinite
      arrows
      animated
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        v-for="{ name, picture } in slides"
        :key="name"
        :name="name"
        :img-src="picture"
      >
      </q-carousel-slide>
    </q-carousel>
    <div class="absolute-bottom bg-black-28 q-pb-lg text-center text-white">
      <div class="text-h2">First stop</div>
      <div class="text-subtitle1">Mountains</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

const slides = [
  {
    name: "first",
    picture: "carousel/1.jpg",
  },
  {
    name: "second",
    picture: "carousel/2.jpg",
  },
  {
    name: "third",
    picture: "carousel/3.jpg",
  },
];

export default defineComponent({
  name: "CarouselSection",
  setup() {
    const currentSlide = ref("first");
    const autoplay = ref(true);

    return { currentSlide, slides, autoplay };
  },
});
</script>

<style lang="scss" scoped>
.q-carousel {
  height: calc(100vh - 50px);
}
</style>
