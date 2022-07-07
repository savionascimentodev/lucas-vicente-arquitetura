<template>
  <DialogComponent
    v-model:visible="isActiveModal"
    modal
    :style="{ width: '80vw' }"
  >
    <template #header>
      <h3>{{ teste.title }}</h3>
    </template>

    <MDBRow>
      <MDBCol>
        <MDBCarousel :items="teste.images" :controls="false" />
      </MDBCol>
      <MDBCol style="display: grid">
        <div>
          {{ teste.description }}
          {{ teste.type }}
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
