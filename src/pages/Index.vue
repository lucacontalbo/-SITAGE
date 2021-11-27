<template>
  <q-page>
    <CarouselSection />
    <ChiSiamoSection />
    <!--IG-->
    <IgComponent />
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
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CarouselSection from "src/components/CarouselSection.vue";
import ChiSiamoSection from "src/components/ChiSiamoSection.vue";
import ListItemComponent from "components/ListItemComponent.vue";
import IgComponent from "components/IgComponent.vue";

const projList = [
  {
    index: 0,
    title: "Du iu Spik Inglish",
    text: "Il duiu è un bel progetto che faccio io quindi vienici",
    picture: "carousel/3.jpg",
  },
  {
    index: 1,
    title: "CampAGE",
    text: "We have fun here, lorem ipsum and all that",
    picture: "carousel/2.jpg",
  },
  {
    index: 2,
    title: "Ovunque",
    text: "Lorem era proprio un Ipsum ieri sera. Io non ci esco più!",
    picture: "carousel/1.jpg",
  },
];

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
