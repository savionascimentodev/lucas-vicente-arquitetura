<template>
  <MDBContainer class="py-5 px-0">
    <MDBRow>
      <MDBCol>
        <img
          src="@/assets/casa.L.M.V/areaGourmet01.png"
          class="hover-shadow img-fluid rounded card-image"
          alt="projeto L.M.V"
          width="450"
          @click="showDescriptionModal1"
        />
      </MDBCol>
      <MDBCol>
        <img
          src="@/assets/pontoVet/pontoVet01.png"
          class="hover-shadow img-fluid rounded card-image"
          alt="projeto Pet"
          width="450"
          @click="showDescriptionModal2"
        />
      </MDBCol>
      <MDBCol>
        <img
          src="@/assets/casaConceito/casaConceito01.png"
          class="hover-shadow img-fluid rounded card-image"
          alt="projeto L.M.V"
          width="450"
          @click="showDescriptionModal3"
        />
      </MDBCol>
    </MDBRow>
    <MDBRow class="pt-4">
      <MDBCol>
        <img
          src="@/assets/escritorio.L.M.V/escritorio.L.M.V01.png"
          class="hover-shadow img-fluid rounded card-image"
          alt="escritorio L.M.V"
          width="450"
          @click="showDescriptionModal4"
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
    <MDBRow class="pt-4">
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

    <div v-if="!activeSeeMore" class="d-flex justify-content-center pt-4">
      <MDBBtn color="black" rounded @click="clickActiveSeeMore">
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
  </MDBContainer>
</template>
<script>
import { projeto1 } from '@/api/projects.js'
import { projeto2 } from '@/api/projects.js'
import { projeto3 } from '@/api/projects.js'
import { projeto4 } from '@/api/projects.js'
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
      exampleModal: false,
      exampleModal2: false,
      exampleModal3: false,
      exampleModal4: false,
      project1: projeto1,
      project2: projeto2,
      project3: projeto3,
      project4: projeto4
    }
  },
  watch: {},
  methods: {
    clickActiveSeeMore() {
      this.activeSeeMore = true
    },
    showDescriptionModal1() {
      this.exampleModal = true
      console.log(this.exampleModal)
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
    }
  }
}
</script>
<style scoped>
.modal-body {
  height: 200px;
}
.card-image:hover {
  cursor: pointer;
  /* background: red !important; */
}
</style>
