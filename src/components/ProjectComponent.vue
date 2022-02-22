<template>
  <div v-for="proj in projList" :key="proj.index" v-bind="proj">
    <div :id="'proj' + proj.index">
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
  setup() {
    return {
      projList,
    };
  },
  methods: {
    update: function (idx) {
      for (let i = 0; i < projList.length; i++) {
        if (i !== idx) {
          document.getElementById("proj" + i).style.display = "none";
        } else {
          document.getElementById("proj" + i).style.display = "inline-block";
        }
      }
    },
  },
});
</script>

<style lang="scss">
.image-dim {
  height: 300px;
  max-width: 100%;
}
</style>
