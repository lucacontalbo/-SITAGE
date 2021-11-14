<template>
  <div class="q-ma-none" style="height: 100%;">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="100%"
    >
      <q-carousel-slide name="first" img-src="~assets/pictures/2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="~assets/pictures/1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Second stop</div>
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="~assets/pictures/3.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>

  <div class="q-pt-lg q-mt-lg q-mb-lg q-pa-sx row items-start twoside justify-center">

    <div class="q-ma-lg oneside row justify-center">
      <div class="q-mb-lg text-h4 text-weight-light">
       Chi siamo?
      </div>
      <div class="q-mb-lg text-weight-light">
      Associazione Giovani in Europa - APS, abbreviabile in “AGE”, è una associazione di promozione sociale, che opera senza fini di lucro.
      L’associazione persegue finalità civiche, solidaristiche e di utilità sociale; essa si ispira ai principi di uguaglianza, legalità, democrazia e laicità, nel rispetto dei diritti inviolabili della persona.
L’associazione promuove una cultura europea “dal basso”, pubblicizzando la struttura, i vantaggi e le opportunità che l’Unione Europea offre e che sono poco conosciuti anche tra i più giovani.
      </div>
        <q-btn outline color="primary" label="Scopri di più" />
    </div>
   
    <!--<q-separator vertical inset />-->

    <div class="q-ma-md oneside row justify-center">
    <q-card class="my-card">
            <q-responsive :ratio="1" class="col" style="max-height:278px">
      <q-img src="~assets/pictures/3.jpg">
      </q-img>
            </q-responsive>
    </q-card>
    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default {
  setup () {
    return {
      slide: ref('first')
    }
  }
}

</script>

<style lang="sass">
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
  
html, body
  height: 100%
  width:100%
  
#q-app, .q-layout, .q-page-container
  height: 100%
  width: 100%

.my-card
  width: 50%
  height: 100%

.my-card
  min-width: 278px
  min-height:278px
  max-height:278px

.twoside
  width:100%
  height: 30%

.oneside
  width: 45%

</style>

