<template>
  <div class="carousel-container">
    <MDBCarousel :items="project.images" :controls="true" fade />
  </div>
</template>

<script>
import { MDBCarousel } from 'mdb-vue-ui-kit'
import { project3 } from '@/api/projects.js'

export default {
  name: 'CarouselComponent',
  components: {
    MDBCarousel
  },
  data() {
    return {
      project: project3
    }
  }
}
</script>
