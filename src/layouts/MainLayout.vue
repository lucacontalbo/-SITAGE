<template>
  <q-layout view="hHh lpr lFf">
    <q-header elevated class="q-pa-none bg-primary">
      <q-toolbar>
        <q-btn
          v-if="$q.screen.xs"
          dense
          flat
          round
          size="xl"
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-btn flat to="/">
          <img class="q-pa-md" alt="AGE logo" src="~assets/logos/age.png" />
          <span class="">AGE</span>
        </q-btn>

        <template v-if="$q.screen.gt.xs">
          <q-space />

          <q-btn to="/home" stretch flat>home</q-btn>
          <q-btn-dropdown
            :content-style="{ borderRadius: '0 0 4px 4px', boxShadow: 'none' }"
            label="about"
            flat
            stretch
          >
            <q-list class="bg-primary text-white">
              <q-item to="/history">Storia</q-item>
              <q-item to="/who-are-we">Chi siamo</q-item>
              <q-item to="/organizational-chart">Organigramma</q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn to="/projects" stretch flat>progetti</q-btn>

          <q-btn stretch flat>
            <a href="https://www.facebook.com/agegiovani/" target="_blank">
              <img
                svg-inline
                class="svg-logo"
                src="../assets/logos/facebook.svg"
                alt="Facebook logo"
              />
            </a>
          </q-btn>
          <q-btn stretch flat>
            <a href="https://www.instagram.com/age.giovani/" target="_blank">
              <img
                svg-inline
                class="svg-logo"
                src="../assets/logos/instagram.svg"
                alt="Instagram logo"
              />
            </a>
          </q-btn>
        </template>
      </q-toolbar>
      <q-banner
        v-if="bannerOpen"
        inline-actions
        class="text-white bg-negative text-center"
      >
        Dona al nostro 5x1000 o piango
        <template #action>
          <q-btn flat color="white" label="DONA!"></q-btn>
          <q-btn
            flat
            color="white"
            icon="close"
            @click="bannerOpen = false"
          ></q-btn>
        </template>
      </q-banner>
    </q-header>

    <q-drawer
      v-if="$q.screen.xs"
      v-model="leftDrawerOpen"
      overlay
      elevated
      content-class="bg-secondary"
    >
      <q-list>
        <q-item to="/home">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-expansion-item default-opened dense-toggle label="About">
          <q-item to="/history">
            <q-item-section>Storia</q-item-section>
          </q-item>
          <q-item to="/who-are-we">
            <q-item-section>Chi siamo</q-item-section>
          </q-item>
          <q-item to="/organizational-chart">
            <q-item-section>Organigramma</q-item-section>
          </q-item>
        </q-expansion-item>
        <q-item to="/projects">
          <q-item-section>Progetti</q-item-section>
        </q-item>

        <q-separator class="q-mt-lg" color="white-12" />

        <q-item>
          <q-item-section>
            <a href="https://www.facebook.com/agegiovani/" target="_blank">
              Facebook
            </a>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <a href="https://www.facebook.com/agegiovani/" target="_blank">
              Instagram
            </a>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    const bannerOpen = ref(true);

    return {
      leftDrawerOpen,
      bannerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss">
.svg-logo {
  fill: $white;
}
</style>
