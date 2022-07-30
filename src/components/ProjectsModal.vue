<template>
  <DialogComponent
    v-model:visible="isActiveModal"
    modal
    :style="{ width: '95vw' }"
  >
    <template #header>
      <h3>{{ teste.title }}</h3>
    </template>
    <MDBRow>
      <MDBCol>
        <MDBCarousel :items="teste.images" :controls="false" />
      </MDBCol>
      <MDBCol style="display: grid">
        <div class="d-flex justify-content-center">
          <h3>Ficha Técnica</h3>
        </div>
        <div>
          <div>
            <b>Descrição:</b>
            {{ teste.description }}
          </div>
          <div>
            <b>Tipo:</b>
            {{ teste.type }}
          </div>
          <div>
            <b>Local:</b>
            {{ teste.local }}
          </div>
          <div>
            <b>Ano:</b>
            {{ teste.year }}
          </div>
          <div>
            <b>Área:</b>
            {{ teste.area }}
          </div>
          <div>
            <b>Status:</b>
            {{ teste.status }}
          </div>
        </div>
        <div class="d-flex align-items-end justify-content-end">
          <MDBBtn
            color="black"
            rounded
            @click="$router.push(`/about/${teste.id}`)"
          >
            <MDBIcon icon="fas fa-plus-circle" />
            Saiba Mais
          </MDBBtn>
          <MDBBtn outline="dark" @click="clickActiveSeeMore" rounded>
            Saiba Mais
          </MDBBtn>
        </div>
      </MDBCol>
    </MDBRow>
    <template #footer> </template>
  </DialogComponent>
</template>
<script>
import { MDBCol, MDBRow, MDBIcon, MDBBtn, MDBCarousel } from 'mdb-vue-ui-kit'

export default {
  name: 'ProjectsModal',
  components: {
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn,
    MDBCarousel
  },
  props: {
    teste: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isActiveModal: false
    }
  },
  methods: {
    showDescriptionModal() {
      this.exampleModal = true
    }
  }
}
</script>
<style>
.p-dialog .p-dialog-header {
  padding-bottom: 0 !important;
}
.p-dialog .p-dialog-content {
  padding-bottom: 1rem !important;
}
</style>
