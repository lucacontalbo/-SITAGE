<template>
  <div class="cont">
    <div class="items-start justify-center q-mb-lg q-mt-lg q-pa-sx q-pt-lg row">
      <div v-for="(url, index) in urlImages" :key="index" v-bind="url">
        <div class="items-stretch q-gutter-md q-pa-md row">
          <!-- TODO: keep q-cards sizes fixed. (e.g. when loading, the size dinamically changes based on the num of cards loaded) -->
          <q-card class="card-ig" flat bordered>
            <q-img :src="url.media_url" />

            <q-card-section>
              <div class="text-caption text-grey">
                {{ url.caption }}
              </div>
            </q-card-section>

            <q-card-actions>
              <q-space />

              <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
              />
            </q-card-actions>

            <q-slide-transition>
              <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subitle2">
                  Lorem ipsum di prova
                </q-card-section>
              </div>
            </q-slide-transition>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "IgComponent",
  setup() {
    const expanded = ref(false);
    const urlImages = ref([]);
    onMounted(async () => {
      const { access_token } =
        process.env.NODE_ENV === "production"
          ? (await import(/* webpackIgnore: true */ "/accesstoken.json"))
              .default
          : await import("app/public/accesstoken.json");
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption&access_token=${access_token}`
      );
      const { data: igIdx } = await response.json();
      for (let j = 0; j < 3; j++) {
        const urlsObj = await fetch(
          "https://graph.instagram.com/" +
            igIdx[j]["id"] +
            "/?fields=media_url,caption&access_token=IGQVJVNHBWTE5COUdYY2U2UTFIMVF6cHJHWEpCZAGYwSTJ3YXdwWFVmOW44UzhnX2hzMWlONl90N1pMZAGlodC1WaUtmc01zRGN0d3pGck5IMmRLamtGVHdsNmU2ZA1JaYy1qV3Fsb1lLcmQ2Vl9mUk0xWQZDZD"
        );
        const url = await urlsObj.json();
        urlImages.value.push(url);
      }
      console.log(urlImages.value);
    });
    return {
      expanded,
      urlImages,
    };
  },
});
</script>

<style lang="scss" scoped>
.card-ig {
  max-width: 350px;
  width: 100%;
}

.cont {
  display: inline-block;
  width: 100%;
}

.oneside {
  width: 45%;
}
</style>
