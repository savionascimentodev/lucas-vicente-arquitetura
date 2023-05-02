<template>
  <MDBContainer class="py-5 px-0">
    <div class="gallery-row">
      <MDBCol class="mb-3 px-2">
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering1 }">
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ isHovering1 ? project1.title + ' - ' + project1.type : '' }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{
                isHovering1
                  ? project1.titleEnglish + ' - ' + project1.typeEnglish
                  : ''
              }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{
                isHovering1
                  ? project1.titleSpanish + ' - ' + project1.typeSpanish
                  : ''
              }}
            </span>
          </div>
          <img
            class="rounded card-image"
            src="@/assets/casa.L.M.W/areaGourmet01.png"
            alt="casa L.M.W"
            @mouseout="isHovering1 = false"
            @mouseover="isHovering1 = true"
            @click="showDescriptionModal1"
          />
        </div>
      </MDBCol>
      <MDBCol class="mb-3 px-2">
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering2 }">
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ isHovering2 ? project2.title + ' - ' + project2.type : '' }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{
                isHovering2
                  ? project2.titleEnglish + ' - ' + project2.typeEnglish
                  : ''
              }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{
                isHovering2
                  ? project2.titleSpanish + ' - ' + project2.typeSpanish
                  : ''
              }}
            </span>
          </div>
          <img
            src="@/assets/pontoVet/ThumbPontoVet.webp"
            class="rounded card-image"
            alt="projeto Pet"
            @mouseout="isHovering2 = false"
            @mouseover="isHovering2 = true"
            @click="showDescriptionModal2"
          />
        </div>
      </MDBCol>
      <MDBCol class="mb-3 px-2">
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering3 }">
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ isHovering3 ? project3.title + ' - ' + project3.type : '' }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{
                isHovering3
                  ? project3.titleEnglish + ' - ' + project3.typeEnglish
                  : ''
              }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{
                isHovering3
                  ? project3.titleSpanish + ' - ' + project3.typeSpanish
                  : ''
              }}
            </span>
          </div>
          <img
            src="@/assets/casaConceito/casaConceito01.png"
            class="rounded card-image"
            alt="Casa Conceito"
            @mouseout="isHovering3 = false"
            @mouseover="isHovering3 = true"
            @click="showDescriptionModal3"
          />
        </div>
      </MDBCol>
    </div>

    <div class="gallery-row">
      <MDBCol class="mb-3 px-2">
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering4 }">
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ isHovering4 ? project4.title + ' - ' + project4.type : '' }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{
                isHovering4
                  ? project4.titleEnglish + ' - ' + project4.typeEnglish
                  : ''
              }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{
                isHovering4
                  ? project4.titleSpanish + ' - ' + project4.typeSpanish
                  : ''
              }}
            </span>
          </div>
          <img
            src="@/assets/escritorio.L.M.V/escritorio.L.M.V01.png"
            class="rounded card-image"
            alt="escritorio L.M.W"
            @mouseout="isHovering4 = false"
            @mouseover="isHovering4 = true"
            @click="showDescriptionModal4"
          />
        </div>
      </MDBCol>
      <MDBCol class="mb-3 px-2">
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering5 }">
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ isHovering5 ? project5.title + ' - ' + project5.type : '' }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{
                isHovering5
                  ? project5.titleEnglish + ' - ' + project5.typeEnglish
                  : ''
              }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{
                isHovering5
                  ? project5.titleSpanish + ' - ' + project5.typeSpanish
                  : ''
              }}
            </span>
          </div>
          <img
            src="@/assets/casaMC/casaMC04.png"
            class="rounded card-image"
            alt="casa MC"
            @mouseout="isHovering5 = false"
            @mouseover="isHovering5 = true"
            @click="showDescriptionModal5"
          />
        </div>
      </MDBCol>
      <MDBCol class="mb-3 px-2">
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering6 }">
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ isHovering6 ? project6.title + ' - ' + project6.type : '' }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{
                isHovering6
                  ? project6.titleEnglish + ' - ' + project6.typeEnglish
                  : ''
              }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{
                isHovering6
                  ? project6.titleSpanish + ' - ' + project6.typeSpanish
                  : ''
              }}
            </span>
          </div>
          <img
            src="@/assets/casaRJ/casaRJ03.png"
            class="rounded card-image"
            alt="casa RJ"
            @mouseout="isHovering6 = false"
            @mouseover="isHovering6 = true"
            @click="showDescriptionModal6"
          />
        </div>
      </MDBCol>
    </div>

    <div class="gallery-row">
      <MDBCol class="mb-3 px-2">
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering7 }">
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ isHovering7 ? project7.title + ' - ' + project7.type : '' }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{
                isHovering7
                  ? project7.titleEnglish + ' - ' + project7.typeEnglish
                  : ''
              }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{
                isHovering7
                  ? project7.titleSpanish + ' - ' + project7.typeSpanish
                  : ''
              }}
            </span>
          </div>
          <img
            src="@/assets/casaLVS/casaLVS01.png"
            class="rounded card-image"
            alt="casa LVS"
            width="450"
            @mouseout="isHovering7 = false"
            @mouseover="isHovering7 = true"
            @click="showDescriptionModal7"
          />
        </div>
      </MDBCol>
      <MDBCol class="mb-3 px-2">
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering8 }">
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ isHovering8 ? project8.title + ' - ' + project8.type : '' }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{
                isHovering8
                  ? project8.titleEnglish + ' - ' + project8.typeEnglish
                  : ''
              }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{
                isHovering8
                  ? project8.titleSpanish + ' - ' + project8.typeSpanish
                  : ''
              }}
            </span>
          </div>
          <img
            src="@/assets/investindoConstrução/ThumbInvestindoconstrucao.webp"
            class="rounded card-image"
            width="450"
            alt="Investindo na Construção"
            @mouseout="isHovering8 = false"
            @mouseover="isHovering8 = true"
            @click="showDescriptionModal8"
          />
        </div>
      </MDBCol>
      <MDBCol class="mb-3 px-2">
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering9 }">
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ isHovering9 ? project9.title + ' - ' + project9.type : '' }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{
                isHovering9
                  ? project9.titleEnglish + ' - ' + project9.typeEnglish
                  : ''
              }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{
                isHovering9
                  ? project9.titleSpanish + ' - ' + project9.typeSpanish
                  : ''
              }}
            </span>
          </div>
          <img
            src="@/assets/casaVM/casaVM03.png"
            class="rounded card-image"
            width="450"
            alt="Casa V.M"
            @mouseout="isHovering9 = false"
            @mouseover="isHovering9 = true"
            @click="showDescriptionModal9"
          />
        </div>
      </MDBCol>
    </div>

    <div v-if="!activeSeeMore" class="d-flex justify-content-center pt-4">
      <MDBBtn
        style="background: #f85e0eff; color: #fff"
        rounded
        @click="clickActiveSeeMore"
      >
        {{ $t('main.seeMore') }}
      </MDBBtn>
    </div>

    <!-- Colunas com imagens 'fase de construção' com o v-if do botão -->
    <div v-if="activeSeeMore" class="gallery-row">
      <MDBCol class="mb-3 px-2">
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering10 }">
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ isHovering10 ? project10.title + ' - ' + project10.type : '' }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{
                isHovering10
                  ? project10.titleEnglish + ' - ' + project10.typeEnglish
                  : ''
              }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{
                isHovering10
                  ? project10.titleSpanish + ' - ' + project10.typeSpanish
                  : ''
              }}
            </span>
          </div>
          <img
            src="@/assets/InterioresQuartoEscritorio/01.png"
            class="rounded card-image"
            width="450"
            alt="Interiores - Quarto/Escritório"
            @mouseout="isHovering10 = false"
            @mouseover="isHovering10 = true"
            @click="showDescriptionModal10"
          />
        </div>
      </MDBCol>
      <MDBCol class="mb-3 px-2">
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering11 }">
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ isHovering11 ? project11.title + ' - ' + project11.type : '' }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{
                isHovering11
                  ? project11.titleEnglish + ' - ' + project11.typeEnglish
                  : ''
              }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{
                isHovering11
                  ? project11.titleSpanish + ' - ' + project11.typeSpanish
                  : ''
              }}
            </span>
          </div>
          <img
            src="@/assets/InterioresCasaMC/01.png"
            class="rounded card-image"
            width="450"
            alt="Investindo na Construção"
            @mouseout="isHovering11 = false"
            @mouseover="isHovering11 = true"
            @click="showDescriptionModal11"
          />
        </div>
      </MDBCol>
      <MDBCol class="mb-3 px-2">
        <img
          src="@/assets/logoEscuro.png"
          class="hover-shadow img-fluid rounded"
          alt="Em Breve"
          width="450"
        />
      </MDBCol>
    </div>
    <MDBRow v-if="activeSeeMore" class="pt-4">
      <MDBCol>
        <img
          src="@/assets/logoEscuro.png"
          class="hover-shadow img-fluid rounded"
          alt="Em Breve"
          width="450"
        />
      </MDBCol>
      <MDBCol>
        <img
          src="@/assets/logoEscuro.png"
          class="hover-shadow img-fluid rounded mr-5"
          alt="Em Breve"
          width="450"
        />
      </MDBCol>
      <MDBCol>
        <img
          src="@/assets/logoEscuro.png"
          class="hover-shadow img-fluid rounded mr-5"
          alt="Em Breve"
          width="450"
        />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <!-- Modais -->
  <ProjectsModal v-model:visible="exampleModal1" :current-project="project1" />
  <ProjectsModal v-model:visible="exampleModal2" :current-project="project2" />
  <ProjectsModal v-model:visible="exampleModal3" :current-project="project3" />
  <ProjectsModal v-model:visible="exampleModal4" :current-project="project4" />
  <ProjectsModal v-model:visible="exampleModal5" :current-project="project5" />
  <ProjectsModal v-model:visible="exampleModal6" :current-project="project6" />
  <ProjectsModal v-model:visible="exampleModal7" :current-project="project7" />
  <ProjectsModal v-model:visible="exampleModal8" :current-project="project8" />
  <ProjectsModal v-model:visible="exampleModal9" :current-project="project9" />
  <ProjectsModal
    v-model:visible="exampleModal10"
    :current-project="project10"
  />
  <ProjectsModal
    v-model:visible="exampleModal11"
    :current-project="project11"
  />
</template>

<script>
import { project1 } from '@/api/projects.js'
import { project2 } from '@/api/projects.js'
import { project3 } from '@/api/projects.js'
import { project4 } from '@/api/projects.js'
import { project5 } from '@/api/projects.js'
import { project6 } from '@/api/projects.js'
import { project7 } from '@/api/projects.js'
import { project8 } from '@/api/projects.js'
import { project9 } from '@/api/projects.js'
import { project10 } from '@/api/projects.js'
import { project11 } from '@/api/projects.js'
import ProjectsModal from '@/components/ProjectsModal.vue'

import { MDBCol, MDBRow, MDBContainer, MDBBtn } from 'mdb-vue-ui-kit'
export default {
  components: {
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBBtn,
    ProjectsModal
  },
  data() {
    return {
      activeSeeMore: false,
      isHovering1: false,
      isHovering2: false,
      isHovering3: false,
      isHovering4: false,
      isHovering5: false,
      isHovering6: false,
      isHovering7: false,
      isHovering8: false,
      isHovering9: false,
      isHovering10: false,
      isHovering11: false,
      exampleModal1: false,
      exampleModal2: false,
      exampleModal3: false,
      exampleModal4: false,
      exampleModal5: false,
      exampleModal6: false,
      exampleModal7: false,
      exampleModal8: false,
      exampleModal9: false,
      exampleModal10: false,
      exampleModal11: false,
      project1: project1,
      project2: project2,
      project3: project3,
      project4: project4,
      project5: project5,
      project6: project6,
      project7: project7,
      project8: project8,
      project9: project9,
      project10: project10,
      project11: project11
    }
  },
  methods: {
    clickActiveSeeMore() {
      this.activeSeeMore = true
    },
    showDescriptionModal1() {
      this.exampleModal1 = true
    },
    showDescriptionModal2() {
      this.exampleModal2 = true
    },
    showDescriptionModal3() {
      this.exampleModal3 = true
    },
    showDescriptionModal4() {
      this.exampleModal4 = true
    },
    showDescriptionModal5() {
      this.exampleModal5 = true
    },
    showDescriptionModal6() {
      this.exampleModal6 = true
    },
    showDescriptionModal7() {
      this.exampleModal7 = true
    },
    showDescriptionModal8() {
      this.exampleModal8 = true
    },
    showDescriptionModal9() {
      this.exampleModal9 = true
    },
    showDescriptionModal10() {
      this.exampleModal10 = true
    },
    showDescriptionModal11() {
      this.exampleModal11 = true
    }
  }
}
</script>
<style lang="scss" scoped>
.modal-body {
  height: 200px;
}
.hovering {
  position: absolute;
  z-index: 2;
  pointer-events: none;
  cursor: not-allowed;
  font-family: Cambria, serif;
  font-size: 16px;
  font-weight: 900;
  color: #000;
  bottom: 38%;
  text-align: center;
  width: 100%;

  &::after {
    content: '';
    background: currentColor;
    width: 50%;
    height: 4px;
    display: block;
    margin: 10px auto;
  }
}
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.5s ease-in;
  &:hover {
    filter: opacity(0.1);
  }
}
/* Medias */
@media screen and (min-width: 320px) {
  .gallery-row {
    display: block;
  }
}
@media screen and (min-width: 769px) {
  .gallery-row {
    display: flex;
  }
}
</style>
