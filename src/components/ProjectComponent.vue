<template>
  <!--
        Sposta il v for in Progetti.vue, fai funzionare l'index che deve mostrare solo il progetto scelto
        Sposta il q-layout dentro MainLayout e digli di mostrare il q drawer e resto solo quando viene caricata la pagina
      -->
  <div v-for="proj in projList" :key="proj.index" v-bind="proj">
    <div v-if="proj.index === default_index">
      <q-img
        :src="proj.picture"
        spinner-color="white"
        style="height: 300px; max-width: 100%"
      >
        <div class="absolute-bottom text-subtitle1 text-center">
          {{ proj.title }}
        </div>
      </q-img>
      <q-page-container>
        <q-page padding>
          {{ proj.text }}
        </q-page>
      </q-page-container>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { QMarkdown } from "@quasar/quasar-ui-qmarkdown";
import "@quasar/quasar-ui-qmarkdown/dist/index.css";
import projList from "assets/json/Projects.json";

export default defineComponent({
  name: "Progetti",
  components: {},
  props: {
    default_index: Number,
  },
  setup() {
    return {
      projList,
    };
  },
});
</script>

<style lang="scss"></style>
