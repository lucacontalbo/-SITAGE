<template>
  <div
    class="bg-blue flex flex-center fullscreen q-pa-md text-center text-white"
  >
    <div>
      <div class="title">404</div>

      <div class="text-h2">Oops. Nothing here...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error404Page",
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 30vh;
}
</style>
