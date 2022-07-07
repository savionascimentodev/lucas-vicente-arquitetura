<template>
  <MDBFooter
    style="
      background-image: linear-gradient(to right, #434343 0%, black 100%);
      color: white;
    "
  >
    <MDBContainer class="text-center text-md-start pt-4">
      <MDBRow>
        <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
          <img
            src="@/assets/lucas_vicente-logo_black-200x515.png"
            class="hover-shadow img-fluid rounded"
            alt="logo Lucas Vicente"
            width="450"
          />
        </MDBCol>

        <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4 text-white">
          <h6 class="text-uppercase fw-bold mb-2">Contato</h6>
          <p>
            <MDBIcon icon="envelope" class="me-3" />lucasvicentenn@gmail.com
          </p>
          <p><MDBIcon icon="phone" class="me-3" />(65) 9933-1027</p>
        </MDBCol>

        <MDBCol md="3" lg="2" xl="2" class="mx-auto mb-4 text-white">
          <h6 class="text-uppercase fw-bold mb-4">Redes Socias</h6>
          <a
            href="https://www.instagram.com/lucasvicentenn"
            target="_blank"
            class="me-4 text-reset"
          >
            <MDBIcon iconStyle="fab" icon="instagram"></MDBIcon>
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <div
      class="text-center p-3 text-white"
      style="background-color: rgba(0, 0, 0, 0.05)"
    >
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
        Lucas Vicente Arquitetura
      </a>
    </div>
  </MDBFooter>
</template>

<script>
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-vue-ui-kit'

export default {
  name: 'FooterComponent',
  components: {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon
  }
}
</script>

<style scoped lang="scss"></style>
