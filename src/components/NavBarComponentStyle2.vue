<template>
  <MDBNavbar class="navigation" expand="lg" position="top" container>
    <MDBNavbarBrand class="m-0" href="#">
      <a class="navbar-brand" href="#!">
        <span style="color: #f85e0eff">LucasVicente</span>
        <span style="color: #f1f2f3">Arquitetura</span>
      </a>
    </MDBNavbarBrand>
    <MDBNavbarToggler
      @click="showMobileMenu = !showMobileMenu"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="showMobileMenu" id="navbarSupportedContent">
      <MDBNavbarNav class="text-center mb-lg-0">
        <MDBNavbarItem to="/" active> Home </MDBNavbarItem>
        <MDBNavbarItem to="/gallery"> Galeria </MDBNavbarItem>
        <MDBNavbarItem
          :href="whatsAppUrl"
          style="display: flex"
          target="_blank"
        >
          Contato
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse
} from 'mdb-vue-ui-kit'

export default {
  name: 'navgationComponent',
  components: {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse
  },
  data() {
    return {
      showMobileMenu: false,
      whatsAppUrl:
        'https://api.whatsapp.com/send?phone=+556599331027&text=Olá%20eu%20vi%20o%20seu%20site%20e%20fiquei%20interessado'
    }
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
}
</script>
<style lang="scss">
i.fas.fa-bars.fa-1x {
  color: coral !important;
}
.navigation {
  background: rgba(0, 0, 0, 0.59);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.1px);
  -webkit-backdrop-filter: blur(3.1px);
}

.nav-link {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2rem;
  color: white !important;
  transition: 2s;

  &:hover {
    color: #f85e0eff !important;
    text-shadow: 0px 0px 10px rgba(150, 150, 150, 1);
  }
}

.navbar-collapse {
  flex-grow: 0 !important;
}
</style>

<style lang="scss" scoped>
.navbar-brand {
  font-size: 1.75rem;
  letter-spacing: 3px;
  font-family: 'Josefin Sans', sans-serif;
}

// Medias ---

@media screen and (min-width: 320px) {
  ul.navbar-nav.me-auto.mb-lg-0 {
    :nth-child(3) {
      margin: 2px;
    }
  }
  .navbar-brand {
    font-size: 1.1rem;
  }
}

@media screen and (min-width: 480px) {
  .navbar-brand {
    font-size: 1.7rem;
  }
}
</style>
