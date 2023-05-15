<template>
  <MDBFooter>
    <div class="footer-container" style="background-color: #333">
      <MDBContainer class="text-center text-md-start pt-4">
        <MDBRow>
          <MDBCol md="4" class="footer-description mx-auto mb-md-0 mb-4 pb-3">
            <img
              src="@/assets/logoClaro.png"
              width="100"
              height="100"
              class="logo hover-shadow img-fluid rounded"
              alt="logo Lucas Vicente"
            />
          </MDBCol>

          <MDBCol
            md="4"
            class="footer-description mx-auto mb-md-0 mb-4 text-white"
          >
            <h6 class="footer-title text-uppercase fw-bold mb-2">
              {{ $t('footer.contact') }}
            </h6>
            <p>
              <MDBIcon icon="envelope" class="me-3" />lucasvicentenn@gmail.com
            </p>
            <p><MDBIcon icon="phone" class="me-3" />(65) 9933-1027</p>
            <p class="instagram">
              <a
                href="https://www.instagram.com/lucasvicente.arq/"
                target="_blank"
                class="text-reset"
              >
                <MDBIcon iconStyle="fab" class="me-3" icon="instagram" />
                lucasvicente.arq
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" class="footer-description mx-auto text-white">
            <h6 class="footer-title text-uppercase fw-bold mb-0">
              {{ $t('footer.architecturalCouncil') }}
            </h6>
            <h6 class="footer-title text-uppercase fw-bold mb-4">
              {{ $t('footer.urbanism') }}
            </h6>
            <p><MDBIcon icon="building" class="me-3" />A271919-3</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div class="text-center p-3 text-white">
        © 2021 Copyright:
        <span class="text-reset fw-bold">Lucas Vicente Arquitetura</span>
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
<style lang="scss" scoped>
/* Medias */
@media screen and (min-width: 320px) {
  .logo {
    width: 60%;
  }

  .instagram {
    color: #f85e0eff;
  }
  .footer-title {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }

  .footer-description {
    border-bottom: 1px solid #f85e0eff;
  }
}

@media screen and (min-width: 480px) {
  .logo {
    width: 65%;
  }
  .footer-title {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 769px) {
  .instagram {
    color: #fff;
  }
  .logo {
    width: 100%;
  }
}

@media screen and (min-width: 1025px) {
  .logo {
    width: 90%;
  }
}
</style>
