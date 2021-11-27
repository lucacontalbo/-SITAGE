<template>
  <!--<q-item :tabindex="index">-->
  <div
    class="q-pt-lg q-mt-lg q-mb-lg q-pa-sx row items-start twoside justify-center"
  >
    <div class="q-ma-lg oneside row justify-center">
      <div class="q-mb-lg text-h4 text-weight-light">
        {{ title }}
      </div>
      <div class="q-mb-lg text-weight-light">
        {{ text }}
      </div>
      <q-btn outline color="primary" label="More Details" />
    </div>
    <div class="q-ma-md oneside row justify-center">
      <q-card class="my-card">
        <q-responsive :ratio="1" class="col" style="max-height: 278px">
          <q-img :src="picture"> </q-img>
        </q-responsive>
      </q-card>
    </div>
  </div>
  <!--</q-item>-->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListItemComponent",
  props: {
    index: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
});
</script>
