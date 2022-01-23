<template>
  <div style="text-align: center" class="container-storia col">
    <div class="titolo row-12">
      <h2 class="bold">STORIA AGE</h2>
    </div>
    <div class="sottotitolo-l row-3 padmar">
      <p class="q-ml-xl">sottotitolo 1</p>
    </div>
    <div class="paragrafo padmar">
      <p>la storia di age è bella</p>
    </div>
    <div class="sottotitolo-r row-3 padmar minibold">sottotitolo 2</div>
    <div class="paragrafo padmar">
      <p>poi io sono ancora più bello</p>
    </div>
    <div class="sottotitolo-l row-3 padmar minibold">sottotitolo 3</div>
    <div class="paragrafo padmar">
      <p>siamo tutti belli</p>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {},
});
</script>
<style scoped>
.padmar {
  padding: 10px;
  margin: 10px;
}
.minibold {
  font-weight: 500;
}

.titolo {
  text-align: center;
  font-size: large;
}

.bold {
  font-weight: 500;
}

.sottotitolo-l {
  text-align: left;
}

.sottotitolo-r {
  text-align: right;
}

.paragrafo {
  color: red;
}
</style>
