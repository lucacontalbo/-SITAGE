<template>
  <div class="bg-img-container">
    <div style="text-align: center" class="container-storia col">
      <div class="titolo row-12">
        <h2 class="bold">STORIA AGE</h2>
      </div>
      <div class="sottotitolo-l row-3 padmar">
        <p class="my-mar-left">sottotitolo 1</p>
      </div>
      <div class="paragrafo padmar">
        <p>la storia di age è bella</p>
      </div>
      <div class="sottotitolo-r row-3 padmar minibold">
        <p class="my-mar-right">sottotitolo 2</p>
      </div>
      <div class="paragrafo padmar">
        <p>poi io sono ancora più bello</p>
      </div>
      <div class="sottotitolo-l row-3 padmar minibold">
        <p class="my-mar-left">sottotitolo 3</p>
      </div>
      <div class="paragrafo padmar">
        <p>siamo tutti belli</p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {},
});
</script>
<style scoped>
.bg-img-container:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  background-image: url("./../assets/logos/project-background.png");
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: 50% 100%;
}

.bg-img-container {
  position: relative;
}

.padmar {
  padding: 10px;
  margin: 10px;
}
.minibold {
  font-weight: 500;
}

.my-mar-left {
  margin-left: 250px;
}
.my-mar-right {
  margin-right: 250px;
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
.container-storia * {
  opacity: 1;
}
</style>
