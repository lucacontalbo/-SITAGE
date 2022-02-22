<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :width="200"
    :breakpoint="500"
    page-height
    bordered
    class="bg-grey-3"
  >
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <q-item
          v-for="proj in projList"
          :key="proj.index"
          v-bind="proj"
          :active="default_index === proj.index"
          clickable
          @click="setNewIndex(proj.index)"
        >
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>

          <q-item-section> {{ proj.title }} </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
  <project-component ref="foo" :default_index="default_index" />
</template>

<script>
import { defineComponent, ref } from "vue";
import ProjectComponent from "components/ProjectComponent.vue";
import projList from "assets/json/Projects.json";

var default_index = ref(0);

export default defineComponent({
  name: "ProjectsPage",
  components: {
    ProjectComponent,
  },
  setup() {
    return {
      default_index,
      projList,
    };
  },
  methods: {
    setNewIndex: function (idx) {
      default_index = idx;
      this.$refs.foo.update(idx);
    },
  },
});
</script>

<style lang="scss">
.page-height {
  height: 100vh;
}
</style>
