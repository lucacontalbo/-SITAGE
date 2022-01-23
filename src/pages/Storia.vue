<template>
  <div class="bg-img-container">
    <div class="col container-storia text-center">
      <div class="row-12 titolo">
        <h2 class="bold">STORIA AGE</h2>
      </div>
      <div class="padmar row-3 sottotitolo-l">
        <p class="my-mar-left">sottotitolo 1</p>
      </div>
      <div class="padmar paragrafo">
        <p>la storia di age è bella</p>
      </div>
      <div class="minibold padmar row-3 sottotitolo-r">
        <p class="my-mar-right">sottotitolo 2</p>
      </div>
      <div class="padmar paragrafo">
        <p>poi io sono ancora più bello</p>
      </div>
      <div class="minibold padmar row-3 sottotitolo-l">
        <p class="my-mar-left">sottotitolo 3</p>
      </div>
      <div class="padmar paragrafo">
        <p>siamo tutti belli</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "StoriaPage",
  setup() {},
});
</script>

<style lang="scss" scoped>
.bg-img-container::before {
  background-image: url("./../assets/logos/age.png");
  background-image: url("./../assets/logos/project-background.png");
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: 50% 100%;
  content: "";
  display: block;
  height: 100%;
  left: 0;
  opacity: 0.1;
  opacity: 1;
  position: absolute;
  top: 0;
  width: 100%;
}

.bg-img-container {
  position: relative;
}

.padmar {
  margin: 10px;
  padding: 10px;
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
  font-size: large;
  text-align: center;
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
  color: #f00;
}

.container-storia * {
  opacity: 1;
}
</style>
