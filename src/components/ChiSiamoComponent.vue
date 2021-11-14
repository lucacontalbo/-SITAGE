<template>
  <div class="q-pt-lg q-mt-lg q-mb-lg q-pa-sx row items-start twoside justify-center">

    <div class="q-ma-lg oneside row justify-center">
      <div class="q-mb-lg text-h4 text-weight-light">
       {{ header }}
      </div>
      <div class="q-mb-lg text-weight-light">
        {{ body }}
      </div>
        <q-btn outline color="primary" label="Scopri di più" />
    </div>
   
    <div class="q-ma-md oneside row justify-center">
    <q-card class="my-card">
            <q-responsive :ratio="1" class="col" style="max-height:278px">
      <q-img :src=picture>
      </q-img>
            </q-responsive>
    </q-card>
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChiSiamoComponent',
  props: {
    header: {
      type: String,
      required: true
    },
    body:{
      type: String,
      required: true
    },
    picture:{
        type: String,
        required: true
    }
  }
})
</script>
