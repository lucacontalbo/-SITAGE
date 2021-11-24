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
  <br>
  <v-divider></v-divider>
  <br>
  <!--ListaProgetti-->
  <div class="q-ma-none">
    <q-list :bordered="true">
      <ListItemComponent 
        v-for="item in projects"
        :key="item.index"
        v-bind="item"
      />
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';
import CarouselComponent from 'components/CarouselComponent.vue';
import ChiSiamoComponent from 'components/ChiSiamoComponent.vue';
import ListItemComponent from 'components/ListItemComponent.vue';

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
};

const projList = [
  {
    index: 0,
    title: "Du iu Spik Inglish",
    text: "Il duiu è un bel progetto che faccio io quindi vienici",
    picture: "3.jpg"
  },
  {
    index: 1,
    title: "CampAGE",
    text: "We have fun here, lorem ipsum and all that",
    picture: "2.jpg"
  },
  {
    index: 2,
    title: "Ovunque",
    text: "Lorem era proprio un Ipsum ieri sera. Io non ci esco più!",
    picture: "1.jpg"
  }
];

export default defineComponent({
  name: 'Index',
  components: {
    CarouselComponent,
    ChiSiamoComponent,
    ListItemComponent
  },

  setup () {
    return {
      chisiamo: chisiamo,
      images: imgList,
      projects: projList,
      slide: ref('first')
    }
  }
})

</script>

<style lang="scss">
@import url("/src/css/home.scss");
</style>