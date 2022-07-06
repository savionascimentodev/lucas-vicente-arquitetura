<template>
  <nav>
    <NavbarComponent />
  </nav>
  <GalleryComponent :images="project1.images" :thumbnail="project1.images[0]" />

  <!-- <MDBContainer class="py-5">
    <div class="row">
      <div class="col">
        <GalleryComponent
          :images="project1.images"
          :thumbnail="project1.images[0]"
        />
      </div>
      <div class="col">
        <GalleryComponent
          :images="project2.images"
          :thumbnail="project2.images[0]"
        />
      </div>
      <div class="col">
        <GalleryComponent
          :images="project3.images"
          :thumbnail="project3.images[0]"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <GalleryComponent
          :images="project1.images"
          :thumbnail="project1.images[0]"
        />

        <GalleryComponent
          :images="project1.images"
          :thumbnail="project1.images[0]"
        />
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <GalleryComponent
          :images="project1.images"
          :thumbnail="project1.images[0]"
        />
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <GalleryComponent
          :images="project1.images"
          :thumbnail="project1.images[0]"
        />
      </div>
    </div>
  </MDBContainer> -->

  <footer>
    <FooterComponent />
  </footer>
</template>
<script>
// import { MDBContainer } from 'mdb-vue-ui-kit'

import { projeto1 } from '@/api/projects.js'
import { projeto2 } from '@/api/projects.js'
import { projeto3 } from '@/api/projects.js'

import GalleryComponent from '@/components/GalleryComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'GalleryView',
  components: {
    NavbarComponent,
    FooterComponent,
    GalleryComponent
    // MDBContainer
  },
  data() {
    return {
      project1: projeto1,
      project2: projeto2,
      project3: projeto3
    }
  }
}
</script>
