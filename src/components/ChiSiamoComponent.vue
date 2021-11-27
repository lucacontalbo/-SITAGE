<template>
  <div class="row q-ma-xl">
    <div class="text-center col">
      <div class="text-h4 text-weight-light">Chi siamo?</div>
      <div class="q-mt-lg text-weight-light">
        Associazione Giovani in Europa - APS, abbreviabile in “AGE”, è una
        associazione di promozione sociale, che opera senza fini di lucro.
        L’associazione persegue finalità civiche, solidaristiche e di utilità
        sociale; essa si ispira ai principi di uguaglianza, legalità, democrazia
        e laicità, nel rispetto dei diritti inviolabili della
        persona.L’associazione promuove una cultura europea “dal basso”,
        pubblicizzando la struttura, i vantaggi e le opportunità che l’Unione
        Europea offre e che sono poco conosciuti anche tra i più giovani.
      </div>
      <q-btn outline color="primary" label="Scopri di più" class="q-mt-lg" />
    </div>
    <div class="col q-ml-lg text-center">
      <img src="carousel/3.jpg" class="image" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChiSiamoComponent",
});
</script>

<style>
.image {
  height: 300px;
}
</style>
