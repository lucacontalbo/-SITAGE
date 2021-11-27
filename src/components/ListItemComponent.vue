<template>
<div class="q-ma-xl" :class=" index%2==0 ? 'row' : 'row reverse'">
    <div class="text-center col">
      <div class="text-h4 text-weight-light">
        {{ title }}
      </div>
      <div class="q-mt-lg text-weight-light">
        {{ text }}

      </div>
      <q-btn outline color="primary" label="Scopri di più" class="q-mt-lg" />
    </div>
    <div class="col q-ml-lg text-center">
      <q-img :src="picture" class="image" />
    </div>
  </div>
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
