<template>
  <q-page>
    <carousel-section />
    <chi-siamo-section />
    <!-- IG -->
    <ig-component />
    <!-- ListaProgetti -->
    <div class="q-ma-none">
      <q-list>
        <project-item
          v-for="item in projects"
          :key="item.index"
          v-bind="item"
        />
      </q-list>
    </div>
  </q-page>
</template>

<script>
import IgComponent from "components/IgComponent.vue";
import CarouselSection from "src/components/CarouselSection.vue";
import ChiSiamoSection from "src/components/ChiSiamoSection.vue";
<<<<<<< HEAD
import ListItemComponent from "components/ListItemComponent.vue";
import IgComponent from "components/IgComponent.vue";
import projList from "assets/json/Projects.json";
=======
import ProjectItem from "src/components/ProjectItem.vue";
import { defineComponent } from "vue";
>>>>>>> 6bf0f0c48a09936f21622901980e9b75248ea2de

projList = projList.slice(0, 3);

export default defineComponent({
  name: "IndexPage",
  components: {
    CarouselSection,
    ChiSiamoSection,
    ProjectItem,
    IgComponent,
  },

  setup() {
    return {
      projects: projList,
    };
  },
});
</script>
