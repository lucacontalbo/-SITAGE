<template>
  <q-page>
    <div class="q-ma-none">
      <q-layout view="hHh Lpr lff" container class="rounded-borders shadow-2">
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
                @click="default_index = proj.index"
              >
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>

                <q-item-section> {{ proj.title }} </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </q-drawer>
        <project-component :default_index="default_index" />
      </q-layout>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import ProjectComponent from "components/ProjectComponent.vue";
import projList from "assets/json/Projects.json";

export default defineComponent({
  name: "ProjectsPage",
  components: {
    ProjectComponent,
  },
  setup() {
    return {
      default_index: ref(0),
      projList,
    };
  },
});
</script>

<style lang="scss">
.page-height {
  height: 100vh;
}
</style>
