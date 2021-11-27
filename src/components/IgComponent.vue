<template>
  <div class="cont">
    <div
      class="q-pt-lg q-mt-lg q-mb-lg q-pa-sx row items-start twoside justify-center"
    >
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="card-ig" flat bordered>
          <q-img src="/ig/0_ig.jpg" />

          <q-card-section>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="card-ig" flat bordered>
          <q-img src="/ig/1_ig.jpg" />

          <q-card-section>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="card-ig" flat bordered>
          <q-img src="/ig/2_ig.jpg" />

          <q-card-section>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ListItemComponent",
  props: {
    index: {
      type: String,
      required: false,
    },
  },
  setup() {
    return {
      expanded: ref(false),
    };
  },
});
</script>

<style lang="sass" scoped>
.card-ig
  width: 100%
  max-width: 350px
</style>
