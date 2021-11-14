<template>
<!--Carousel-->
  <div class="q-ma-none" style="height: 100%;">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="100%"
    >
      <CarouselComponent 
        v-for="image in images"
        :key="image.picture"
        v-bind="image"
      />
    </q-carousel>
  </div>
<!--Chi Siamo section-->
  <ChiSiamoComponent 
    v-bind="chisiamo"
  />
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';
import CarouselComponent from 'components/CarouselComponent.vue';
import ChiSiamoComponent from 'components/ChiSiamoComponent.vue';

const imgList =[
  {
    name: "first",
    picture: "1.jpg"
  },
  {
    name: "second",
    picture: "2.jpg"
  },
  {
    name: "third",
    picture: "3.jpg"
  }
];

const chisiamo = {
  header: "Chi siamo?",
  body: "Associazione Giovani in Europa - APS, abbreviabile in “AGE”, è una associazione di promozione sociale, che opera senza fini di lucro. L’associazione persegue finalità civiche, solidaristiche e di utilità sociale; essa si ispira ai principi di uguaglianza, legalità, democrazia e laicità, nel rispetto dei diritti inviolabili della persona.L’associazione promuove una cultura europea “dal basso”, pubblicizzando la struttura, i vantaggi e le opportunità che l’Unione Europea offre e che sono poco conosciuti anche tra i più giovani.",
  picture: "3.jpg"
}


export default defineComponent({
  name: 'Index',
  components: {
    CarouselComponent,
    ChiSiamoComponent
  },

  setup () {
    return {
      chisiamo: chisiamo,
      images: imgList,
      slide: ref('first')
    }
  }
})

</script>

<style lang="scss">
@import url("/src/css/home.scss");
</style>