<template>
  <q-page>
    <CarouselSection />
    <ChiSiamoSection />
    <!--IG-->
    <IgComponent />
    <!--ListaProgetti-->
    <div class="q-ma-none">
      <q-list>
        <ListItemComponent
          v-for="item in projects"
          :key="item.index"
          v-bind="item"
        />
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CarouselSection from "src/components/CarouselSection.vue";
import ChiSiamoSection from "src/components/ChiSiamoSection.vue";
import ListItemComponent from "components/ListItemComponent.vue";
import IgComponent from "components/IgComponent.vue";
import projList from "assets/json/Projects.json";

projList = projList.slice(0, 3);

export default defineComponent({
  name: "Index",
  components: {
    CarouselSection,
    ChiSiamoSection,
    ListItemComponent,
    IgComponent,
  },

  setup() {
    return {
      projects: projList,
    };
  },
});
</script>

<style lang="scss"></style>
