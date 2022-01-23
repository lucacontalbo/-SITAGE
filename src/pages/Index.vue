<template>
  <q-page>
    <carousel-section />
    <chi-siamo-section />
    <!-- IG -->
    <ig-component />
    <!-- ListaProgetti -->
    <div class="q-ma-none">
      <q-list>
        <list-item-component
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
import ListItemComponent from "components/ListItemComponent.vue";
import CarouselSection from "src/components/CarouselSection.vue";
import ChiSiamoSection from "src/components/ChiSiamoSection.vue";
import { defineComponent } from "vue";

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
  name: "IndexPage",
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
