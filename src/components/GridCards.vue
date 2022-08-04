<template>
  <MDBContainer class="py-5 px-0">
    <MDBRow>
      <MDBCol>
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering1 }">
            {{ isHovering1 ? project1.title + ' - ' + project1.type : '' }}
          </div>
          <img
            class="rounded card-image"
            src="@/assets/casa.L.M.V/areaGourmet01.png"
            alt="casa L.M.V"
            @mouseout="isHovering1 = false"
            @mouseover="isHovering1 = true"
            @click="showDescriptionModal1"
          />
        </div>
      </MDBCol>
      <MDBCol>
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering2 }">
            {{ isHovering2 ? project2.title + ' - ' + project2.type : '' }}
          </div>
          <img
            src="@/assets/pontoVet/pontoVet01.png"
            class="rounded card-image"
            alt="projeto Pet"
            @mouseout="isHovering2 = false"
            @mouseover="isHovering2 = true"
            @click="showDescriptionModal2"
          />
        </div>
      </MDBCol>
      <MDBCol>
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering3 }">
            {{ isHovering3 ? project3.title + ' - ' + project3.type : '' }}
          </div>
          <img
            src="@/assets/casaConceito/casaConceito01.png"
            class="rounded card-image"
            alt="projeto Casa Conceito"
            @mouseout="isHovering3 = false"
            @mouseover="isHovering3 = true"
            @click="showDescriptionModal3"
          />
        </div>
      </MDBCol>
    </MDBRow>
    <MDBRow class="pt-4">
      <MDBCol>
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering4 }">
            {{ isHovering4 ? project4.title + ' - ' + project4.type : '' }}
          </div>
          <img
            src="@/assets/escritorio.L.M.V/escritorio.L.M.V01.png"
            class="rounded card-image"
            alt="escritorio L.M.V"
            @mouseout="isHovering4 = false"
            @mouseover="isHovering4 = true"
            @click="showDescriptionModal4"
          />
        </div>
      </MDBCol>
      <MDBCol>
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering5 }">
            {{ isHovering5 ? project5.title + ' - ' + project5.type : '' }}
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
      <MDBCol>
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering6 }">
            {{ isHovering6 ? project6.title + ' - ' + project6.type : '' }}
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
    </MDBRow>
    <MDBRow class="pt-4">
      <MDBCol>
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering7 }">
            {{ isHovering7 ? project7.title + ' - ' + project7.type : '' }}
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
      <MDBCol>
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering8 }">
            {{ isHovering8 ? project8.title + ' - ' + project8.type : '' }}
          </div>
          <img
            src="@/assets/investindoConstrução/investindoConstrução01.png"
            class="rounded card-image"
            width="450"
            alt="Investindo na Construção"
            @mouseout="isHovering8 = false"
            @mouseover="isHovering8 = true"
            @click="showDescriptionModal8"
          />
        </div>
      </MDBCol>
      <MDBCol>
        <div style="position: relative; overflow: hidden">
          <div :class="{ hovering: isHovering9 }">
            {{ isHovering9 ? project9.title + ' - ' + project9.type : '' }}
          </div>
          <img
            src="@/assets/casaVM/casaVM03.png"
            class="rounded card-image"
            width="450"
            alt="Investindo na Construção"
            @mouseout="isHovering9 = false"
            @mouseover="isHovering9 = true"
            @click="showDescriptionModal8"
          />
        </div>
      </MDBCol>
    </MDBRow>

    <div v-if="!activeSeeMore" class="d-flex justify-content-center pt-4">
      <MDBBtn outline="dark" @click="clickActiveSeeMore" rounded>
        Veja mais
      </MDBBtn>
    </div>

    <!-- Colunas com imagens 'fase de construção' com o v-if do botão -->
    <MDBRow v-if="activeSeeMore" class="pt-4">
      <MDBCol>
        <img
          src="@/assets/lucas_vicente-logo_white-150x386.png"
          class="hover-shadow img-fluid rounded"
          alt="projeto L.M.V"
          width="450"
          @click="showDescriptionModal1"
        />
      </MDBCol>
      <MDBCol>
        <img
          src="@/assets/lucas_vicente-logo_white-150x386.png"
          class="hover-shadow img-fluid rounded mr-5"
          alt=""
          width="450"
          @click="showDescriptionModal2"
        />
      </MDBCol>
      <MDBCol>
        <img
          src="@/assets/lucas_vicente-logo_white-150x386.png"
          class="hover-shadow img-fluid rounded mr-5"
          alt=""
          width="450"
        />
      </MDBCol>
    </MDBRow>
    <MDBRow v-if="activeSeeMore" class="pt-4">
      <MDBCol>
        <img
          src="@/assets/lucas_vicente-logo_white-150x386.png"
          class="hover-shadow img-fluid rounded"
          alt="projeto L.M.V"
          width="450"
          @click="showDescriptionModal1"
        />
      </MDBCol>
      <MDBCol>
        <img
          src="@/assets/lucas_vicente-logo_white-150x386.png"
          class="hover-shadow img-fluid rounded mr-5"
          alt=""
          width="450"
          @click="showDescriptionModal2"
        />
      </MDBCol>
      <MDBCol>
        <img
          src="@/assets/lucas_vicente-logo_white-150x386.png"
          class="hover-shadow img-fluid rounded mr-5"
          alt=""
          width="450"
        />
      </MDBCol>
    </MDBRow>

    <!-- Modais -->
    <ProjectsModal v-model:visible="exampleModal" :teste="project1" />
    <ProjectsModal v-model:visible="exampleModal2" :teste="project2" />
    <ProjectsModal v-model:visible="exampleModal3" :teste="project3" />
    <ProjectsModal v-model:visible="exampleModal4" :teste="project4" />
    <ProjectsModal v-model:visible="exampleModal5" :teste="project5" />
    <ProjectsModal v-model:visible="exampleModal6" :teste="project6" />
    <ProjectsModal v-model:visible="exampleModal7" :teste="project7" />
    <ProjectsModal v-model:visible="exampleModal8" :teste="project8" />
    <ProjectsModal v-model:visible="exampleModal9" :teste="project9" />
  </MDBContainer>
</template>
<script>
import { projeto1 } from '@/api/projects.js'
import { projeto2 } from '@/api/projects.js'
import { projeto3 } from '@/api/projects.js'
import { projeto4 } from '@/api/projects.js'
import { projeto5 } from '@/api/projects.js'
import { projeto6 } from '@/api/projects.js'
import { projeto7 } from '@/api/projects.js'
import { projeto8 } from '@/api/projects.js'
import { projeto9 } from '@/api/projects.js'
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
      exampleModal: false,
      exampleModal2: false,
      exampleModal3: false,
      exampleModal4: false,
      exampleModal5: false,
      exampleModal6: false,
      exampleModal7: false,
      exampleModal8: false,
      exampleModal9: false,
      project1: projeto1,
      project2: projeto2,
      project3: projeto3,
      project4: projeto4,
      project5: projeto5,
      project6: projeto6,
      project7: projeto7,
      project8: projeto8,
      project9: projeto9
    }
  },
  methods: {
    clickActiveSeeMore() {
      this.activeSeeMore = true
    },
    showDescriptionModal1() {
      this.exampleModal = true
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
</style>
