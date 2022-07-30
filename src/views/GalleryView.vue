<template>
  <nav>
    <NavbarComponent />
  </nav>
  <main>
    <!-- <MDBContainer class="py-5"> -->
    <div class="container-galeria">
      <div class="item-galeria w-2">
        <GalleryComponent
          class="teste"
          :images="project3.images"
          :thumbnail="project3.images[0]"
          :project-title="project3.title"
          :project-type="project3.type"
        />
      </div>
      <div class="item-galeria h-1 w-2">
        <GalleryComponent
          class="teste"
          :images="project2.images"
          :thumbnail="project2.images[0]"
          :project-title="project2.title"
          :project-type="project2.type"
        />
      </div>
      <div class="item-galeria h-2 w-2">
        <GalleryComponent
          :images="project1.images"
          class="teste"
          :thumbnail="project1.images[0]"
          :project-title="project1.title"
          :project-type="project1.type"
        />
      </div>
      <div class="item-galeria h-2 w-2">
        <GalleryComponent
          :images="project4.images"
          class="teste"
          :thumbnail="project4.images[0]"
          :project-title="project4.title"
          :project-type="project4.type"
        />
      </div>
      <div class="item-galeria h-1 w-2">
        <GalleryComponent
          :images="project4.images"
          class="teste"
          :thumbnail="project4.images[0]"
          :project-title="project4.title"
          :project-type="project4.type"
        />
      </div>
      <div class="item-galeria w-2">
        <GalleryComponent
          :images="project4.images"
          class="teste"
          :thumbnail="project4.images[0]"
          :project-title="project4.title"
          :project-type="project4.type"
        />
      </div>
    </div>
    <!-- <div class="row">
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
    </div> -->
    <!-- </MDBContainer> -->
  </main>

  <footer>
    <ScrollTop />
    <FooterComponent />
  </footer>
</template>
<script>
// import { MDBContainer } from 'mdb-vue-ui-kit'

import { project1 } from '@/api/gallery'
import { project2 } from '@/api/gallery'
import { projeto3 } from '@/api/projects.js'
import { projeto4 } from '@/api/projects.js'

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
      project1: project1,
      project2: project2,
      project3: projeto3,
      project4: projeto4
    }
  }
}
</script>
<style lang="scss" scoped>
.container-galeria {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 300px;
}
.item-galeria {
  position: relative;
}
.teste {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.h-1 {
  grid-row: span 2;
}
.h-2 {
  grid-row: span 3;
}
.w-1 {
  grid-column: span 2;
}
.w-2 {
  grid-column: span 3;
}
</style>
