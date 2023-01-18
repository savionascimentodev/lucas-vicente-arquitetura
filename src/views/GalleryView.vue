<template>
  <nav>
    <NavbarComponent />
  </nav>
  <main>
    <div class="container-galeria">
      <div class="item-galeria w-2">
        <GalleryComponent
          class="teste"
          :images="project4.images"
          :thumbnail="project4.images[0]"
          :project-title="project4.title"
          :project-type="project4.type"
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
      <div class="item-galeria h-1 w-2">
        <GalleryComponent
          :images="project3.images"
          class="teste"
          :thumbnail="project3.images[21]"
          :project-title="project3.title"
          :project-type="project3.type"
        />
      </div>
      <div class="item-galeria h-1 w-2">
        <GalleryComponent
          :images="project6.images"
          class="teste"
          :thumbnail="project6.images[0]"
          :project-title="project6.title"
          :project-type="project6.type"
        />
      </div>
      <div class="item-galeria w-2">
        <GalleryComponent
          :images="project5.images"
          class="teste"
          :thumbnail="project5.images[3]"
          :project-title="project5.title"
          :project-type="project5.type"
        />
      </div>
      <div class="item-galeria h-1 w-2">
        <GalleryComponent
          class="teste"
          :images="project7.images"
          :thumbnail="project7.images[0]"
          :project-title="project7.title"
          :project-type="project7.type"
        />
      </div>
      <div class="item-galeria h-2 w-2">
        <GalleryComponent
          :images="project8.images"
          class="teste"
          :thumbnail="project8.images[0]"
          :project-title="project8.title"
          :project-type="project8.type"
        />
      </div>
      <!-- <div class="item-galeria h-2 w-2">
        <GalleryComponent
          :images="project9.images"
          class="teste"
          :thumbnail="project9.images[21]"
          :project-title="project9.title"
          :project-type="project9.type"
        />
      </div> -->
    </div>
  </main>

  <footer>
    <ScrollTop style="background: #f85e0eff; color: #fff" />
    <FooterComponent />
  </footer>
</template>
<script>
import { project1 } from '@/api/gallery'
import { project2 } from '@/api/gallery'
import { project3 } from '@/api/gallery'
import { project4 } from '@/api/gallery'
import { project5 } from '@/api/gallery'
import { project6 } from '@/api/gallery'
import { project7 } from '@/api/gallery'
import { project8 } from '@/api/gallery'
// import { project9 } from '@/api/gallery'

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
      project3: project3,
      project4: project4,
      project5: project5,
      project6: project6,
      project7: project7,
      project8: project8
      // project9: project9
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

/* Medias */

@media screen and (min-width: 320px) {
  .h-1 {
    grid-row: span 1;
  }
  .h-2 {
    grid-row: span 1;
  }
  .w-1 {
    grid-column: span 1;
  }
  .w-2 {
    grid-column: span 3;
  }
}

@media screen and (min-width: 700px) {
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
}
</style>
