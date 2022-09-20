<template>
  <MDBFooter>
    <div class="footer-container">
      <MDBContainer class="text-center text-md-start pt-4">
        <MDBRow>
          <MDBCol md="4" class="footer-description mx-auto mb-md-0 mb-4 pb-3">
            <img
              src="@/assets/logoClaro.png"
              class="logo hover-shadow img-fluid rounded"
              alt="logo Lucas Vicente"
            />
          </MDBCol>

          <MDBCol
            md="4"
            class="footer-description mx-auto mb-md-0 mb-4 text-white"
          >
            <h6 class="footer-title text-uppercase fw-bold mb-2">Contato</h6>
            <p>
              <MDBIcon icon="envelope" class="me-3" />lucasvicentenn@gmail.com
            </p>
            <p><MDBIcon icon="phone" class="me-3" />(65) 9933-1027</p>
            <p>
              <a
                href="https://www.instagram.com/lucasvicentenn"
                target="_blank"
                class="text-reset"
              >
                <MDBIcon iconStyle="fab" class="me-3" icon="instagram" />
                lucasvicentenn
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" class="footer-description mx-auto text-white">
            <h6 class="footer-title text-uppercase fw-bold mb-0">
              Conselho de arquitetura
            </h6>
            <h6 class="footer-title text-uppercase fw-bold mb-4">
              e urbanismo
            </h6>
            <p><MDBIcon icon="building" class="me-3" />A271919-3</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div class="text-center p-3 text-white">
        © 2021 Copyright:
        <a class="text-reset fw-bold"> Lucas Vicente Arquitetura </a>
      </div>
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
<style lang="scss">
.footer-container {
  background: #333333ff;
}
</style>
<style lang="scss" scoped>
// Medias ---

@media screen and (min-width: 320px) {
  .logo {
    width: 60%;
  }
  .footer-title {
    font-size: 1rem;
  }

  .footer-description {
    border-bottom: 1px solid #fff;
  }
}

@media screen and (min-width: 480px) {
  .logo {
    width: 65%;
  }
  .footer-title {
    font-size: 1.3rem;
  }
}

@media screen and (min-width: 769px) {
  .logo {
    width: 90%;
  }
}

@media screen and (min-width: 1025px) {
  .logo {
    width: 90%;
  }
}
</style>
