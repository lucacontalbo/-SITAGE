<template>
  <div v-for="proj in projList" :key="proj.index" v-bind="proj">
    <div v-if="proj.index === defaultIndex">
      <q-img :src="proj.picture" spinner-color="white" image-dim>
        <div class="absolute-bottom text-center text-subtitle1">
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
import "@quasar/quasar-ui-qmarkdown/dist/index.css";
import projList from "assets/json/Projects.json";

export default defineComponent({
  name: "ProjectComponent",
  components: {},
  props: {
    defaultIndex: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    return {
      projList,
    };
  },
});
</script>

<style lang="scss">
.image-dim {
  height: 300px;
  max-width: 100%;
}
</style>
