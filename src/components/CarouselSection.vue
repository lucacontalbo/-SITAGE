<template>
  <div class="relative-position">
    <q-carousel
      infinite
      arrows
      animated
      v-model="currentSlide"
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        v-for="{ name, picture } in slides"
        :name="name"
        :img-src="picture"
        :key="name"
      >
      </q-carousel-slide>
    </q-carousel>
    <div class="absolute-bottom q-pb-lg text-center text-white bg-black-28">
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
  name: "CarouselComponent",
  setup() {
    const currentSlide = ref("first");
    return { currentSlide, slides, autoplay: ref(true) };
  },
});
</script>

<style>
.q-carousel {
  height: calc(100vh - 50px);
}
</style>
