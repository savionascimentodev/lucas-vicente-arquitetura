<template>
  <MDBNavbar
    expand="lg"
    style="background-image: linear-gradient(to right, #434343 0%, black 100%)"
  >
    <MDBNavbarNav center>
      <img
        src="@/assets/lucas_vicente-logo_white-150x386.png"
        height="50"
        alt="logo Lucas Vicente"
        style="border-radius: 5px"
      />
      <MDBNavbarItem to="/" class="d-flex align-items-center">
        Home
      </MDBNavbarItem>
      <MDBNavbarItem to="/" class="d-flex align-items-center">
        Contato
      </MDBNavbarItem>
      <MDBNavbarItem to="/gallery" class="d-flex align-items-center">
        Galeria
      </MDBNavbarItem>
    </MDBNavbarNav>
  </MDBNavbar>
</template>
<script>
import {
  MDBNavbar,
  // MDBNavbarBrand,
  // MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem
  // MDBCollapse
} from 'mdb-vue-ui-kit'
export default {
  components: {
    MDBNavbar,
    // MDBNavbarBrand,
    // MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem
    // MDBCollapse
  }
}
</script>

<style lang="scss">
.nav-link {
  color: #fff !important;

  .nav-link:hover {
    transform: scale(1.1) !important;
    transition: all 0.5s !important;
  }
}
</style>
