<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <template v-if="$q.screen.xs">
          <q-btn
            dense
            flat
            round
            size="lg"
            icon="menu"
            @click="toggleLeftDrawer"
          />

          <q-space />
        </template>

        <q-btn flat round to="/">
          <img class="q-pa-md" alt="AGE logo" src="~assets/logos/age.png" />
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

          <q-btn round flat>
            <a href="https://www.facebook.com/agegiovani/" target="_blank">
              <img
                svg-inline
                class="svg-logo"
                src="../assets/logos/facebook.svg"
                alt="Facebook logo"
              />
            </a>
          </q-btn>
          <q-btn round flat>
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
          <q-item to="/projects">
            <q-item-section>Progetti</q-item-section>
          </q-item>
        </q-expansion-item>
        <q-separator class="q-mt-lg" color="white-12" />

        <q-item
          clickable
          tag="a"
          href="https://www.facebook.com/agegiovani/"
          target="_blank"
        >
          <q-item-section>Facebook</q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          href="https://www.instagram.com/age.giovani/"
          target="_blank"
        >
          <q-item-section>Instagram</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="row">
      <div class="col text-center">
        <!--LOCATION-->
        <div class="text-h4 text-weight-light">DOVE SIAMO</div>
        <!--width="600"
          height="450"-->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.334676109828!2d10.628121715184056!3d44.692365679099346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47801c583ebe73b9%3A0x1c01d12d02d7a4fc!2sVia%20Francesco%20Cassoli%2C%201%2C%2042123%20Reggio%20Emilia%20RE!5e0!3m2!1sit!2sit!4v1639220644003!5m2!1sit!2sit"
          style="border: 0"
          loading="lazy"
        ></iframe>
      </div>
      <div class="col text-center">
        <!--KONTATTI-->
        <div class="text-h4 text-weight-light">CONTATTI</div>
        <q-list class="column inline flex">
          <q-item
            clickable
            tag="a"
            href="mailto:info@ageuropa.eu"
            target="_blank"
          >
            <q-item-section side>
              <img
                svg-inline
                class="svg-logo"
                src="../assets/logos/mailicon.svg"
                alt="Email icon"
              />
            </q-item-section>
            <q-item-section>EMAIL</q-item-section>
          </q-item>
          <q-item
            clickable
            tag="a"
            href="https://www.facebook.com/agegiovani/"
            target="_blank"
          >
            <q-item-section side>
              <img
                svg-inline
                class="svg-logo"
                src="../assets/logos/facebook.svg"
                alt="Facebook logo"
              />
            </q-item-section>
            <q-item-section>FACEBOOK</q-item-section>
          </q-item>
          <q-item
            clickable
            tag="a"
            href="https://www.instagram.com/age.giovani/"
            target="_blank"
          >
            <q-item-section side>
              <img
                svg-inline
                class="svg-logo"
                src="../assets/logos/instagram.svg"
                alt="Instagram logo"
              />
            </q-item-section>
            <q-item-section>INSTAGRAM</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-footer>
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
  vertical-align: middle;
}
</style>
