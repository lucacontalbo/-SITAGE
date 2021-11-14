<template>
      <q-carousel-slide :name=name :img-src=picture>
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CarouselComponent',
  props: {
    name: {
      type: String,
      required: true
    },
    picture:{
      type: String,
      required: true
    }
  }
})
</script>
