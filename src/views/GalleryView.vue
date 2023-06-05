<template>
  <nav>
    <NavbarComponent />
  </nav>
  <main>
    <div class="container-galeria">
      <div class="item-galeria w-2">
        <GalleryComponent
          class="gallery-component"
          :images="project3.images"
          :thumbnail="project3.images[0]"
          :project-title="project3.title"
          :project-title-english="project3.titleEnglish"
          :project-title-spanish="project3.titleSpanish"
          :project-type="project3.type"
          :project-type-english="project3.typeEnglish"
          :project-type-spanish="project3.typeSpanish"
        />
      </div>
      <div class="item-galeria h-1 w-2">
        <GalleryComponent
          class="gallery-component"
          :images="project2.images"
          :thumbnail="project2.images[0]"
          :project-title="project2.title"
          :project-title-english="project2.titleEnglish"
          :project-title-spanish="project2.titleSpanish"
          :project-type="project2.type"
          :project-type-english="project2.typeEnglish"
          :project-type-spanish="project2.typeSpanish"
        />
      </div>
      <div class="item-galeria h-2 w-2">
        <GalleryComponent
          class="gallery-component"
          :images="project1.images"
          :thumbnail="project1.images[0]"
          :project-title="project1.title"
          :project-title-english="project1.titleEnglish"
          :project-title-spanish="project1.titleSpanish"
          :project-type="project1.type"
          :project-type-english="project1.typeEnglish"
          :project-type-spanish="project1.typeSpanish"
        />
      </div>
      <div class="item-galeria h-1 w-2">
        <GalleryComponent
          class="gallery-component"
          :images="project4.images"
          :thumbnail="project4.images[21]"
          :project-title="project4.title"
          :project-title-english="project4.titleEnglish"
          :project-title-spanish="project4.titleSpanish"
          :project-type="project4.type"
          :project-type-english="project4.typeEnglish"
          :project-type-spanish="project4.typeSpanish"
        />
      </div>
      <div class="item-galeria h-1 w-2">
        <GalleryComponent
          class="gallery-component"
          :images="project6.images"
          :thumbnail="project6.images[0]"
          :project-title="project6.title"
          :project-title-english="project6.titleEnglish"
          :project-title-spanish="project6.titleSpanish"
          :project-type="project6.type"
          :project-type-english="project6.typeEnglish"
          :project-type-spanish="project6.typeSpanish"
        />
      </div>
      <div class="item-galeria w-2">
        <GalleryComponent
          class="gallery-component"
          :images="project5.images"
          :thumbnail="project5.images[3]"
          :project-title="project5.title"
          :project-title-english="project5.titleEnglish"
          :project-title-spanish="project5.titleSpanish"
          :project-type="project5.type"
          :project-type-english="project5.typeEnglish"
          :project-type-spanish="project5.typeSpanish"
        />
      </div>
      <div class="item-galeria h-1 w-2">
        <GalleryComponent
          class="gallery-component"
          :images="project7.images"
          :thumbnail="project7.images[0]"
          :project-title="project7.title"
          :project-title-english="project7.titleEnglish"
          :project-title-spanish="project7.titleSpanish"
          :project-type="project7.type"
          :project-type-english="project7.typeEnglish"
          :project-type-spanish="project7.typeSpanish"
        />
      </div>
      <div class="item-galeria h-2 w-2">
        <GalleryComponent
          class="gallery-component"
          :images="project8.images"
          :thumbnail="project8.images[0]"
          :project-title="project8.title"
          :project-title-english="project8.titleEnglish"
          :project-title-spanish="project8.titleSpanish"
          :project-type="project8.type"
          :project-type-english="project8.typeEnglish"
          :project-type-spanish="project8.typeSpanish"
        />
      </div>
      <div class="item-galeria h-2 w-2">
        <GalleryComponent
          class="gallery-component"
          :images="project11.images"
          :thumbnail="project11.images[21]"
          :project-title="project11.title"
          :project-title-english="project11.titleEnglish"
          :project-title-spanish="project11.titleSpanish"
          :project-type="project11.type"
          :project-type-english="project11.typeEnglish"
          :project-type-spanish="project11.typeSpanish"
        />
      </div>
      <div class="item-galeria w-2 h-1">
        <GalleryComponent
          class="gallery-component"
          :images="project12.images"
          :thumbnail="project12.images[1]"
          :project-title="project12.title"
          :project-title-english="project12.titleEnglish"
          :project-title-spanish="project12.titleSpanish"
          :project-type="project12.type"
          :project-type-english="project12.typeEnglish"
          :project-type-spanish="project12.typeSpanish"
        />
      </div>
      <div class="item-galeria h-1 w-2">
        <GalleryComponent
          class="gallery-component"
          :images="project13.images"
          :thumbnail="project13.images[0]"
          :project-title="project13.title"
          :project-title-english="project13.titleEnglish"
          :project-title-spanish="project13.titleSpanish"
          :project-type="project13.type"
          :project-type-english="project13.typeEnglish"
          :project-type-spanish="project13.typeSpanish"
        />
      </div>
      <div class="item-galeria w-2">
        <GalleryComponent
          class="gallery-component"
          :images="project14.images"
          :thumbnail="project14.images[0]"
          :project-title="project14.title"
          :project-title-english="project14.titleEnglish"
          :project-title-spanish="project14.titleSpanish"
          :project-type="project14.type"
          :project-type-english="project14.typeEnglish"
          :project-type-spanish="project14.typeSpanish"
        />
      </div>
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
import { project10 } from '@/api/gallery'
import { project11 } from '@/api/gallery'
import { project12 } from '@/api/gallery'
import { project13 } from '@/api/gallery'
import { project14 } from '@/api/gallery'

import GalleryComponent from '@/components/GalleryComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'GalleryView',
  components: {
    NavbarComponent,
    FooterComponent,
    GalleryComponent
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
      project8: project8,
      // project9: project9
      project10: project10,
      project11: project11,
      project12: project12,
      project13: project13,
      project14: project14
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
.gallery-component {
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
