<template>
  <MDBNavbar class="navigation" expand="lg" position="top" container>
    <MDBNavbarBrand class="m-0">
      <a class="navbar-brand" href="/">
        <span style="color: #f85e0eff">LucasVicente</span>
        <span style="color: #f1f2f3">{{ $t('nav.architecture') }}</span>
      </a>
    </MDBNavbarBrand>

    <MDBNavbarToggler
      @click="showMobileMenu = !showMobileMenu"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>

    <MDBCollapse v-model="showMobileMenu" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-lg-0">
        <MDBNavbarItem to="/"> Home </MDBNavbarItem>
        <MDBNavbarItem to="/gallery"> {{ $t('nav.gallery') }} </MDBNavbarItem>
        <MDBNavbarItem :href="whatsAppUrl" target="_blank">
          {{ $t('nav.contact') }}
        </MDBNavbarItem>
      </MDBNavbarNav>

      <MDBDropdown v-model="isDropdown" class="d-flex justify-content-center">
        <MDBDropdownToggle @click="isDropdown = !isDropdown" color="dark">
          {{ $t('nav.language') }}
        </MDBDropdownToggle>
        <MDBDropdownMenu dark>
          <MDBDropdownItem tag="button" @click="setLocale('pt_BR')">
            <img
              src="@/assets/flags/brazil.png"
              class="me-2"
              width="24"
              height="24"
              alt="Brazil flag"
            />
            {{ $t('nav.portuguese') }}
          </MDBDropdownItem>
          <MDBDropdownItem tag="button" @click="setLocale('en')">
            <img
              src="@/assets/flags/united-states.png"
              class="me-2"
              width="24"
              height="24"
              alt="United States flag"
            />
            {{ $t('nav.english') }}
          </MDBDropdownItem>
          <MDBDropdownItem tag="button" @click="setLocale('es')">
            <img
              src="@/assets/flags/spain.png"
              class="me-2"
              width="24"
              height="24"
              alt="Spain flag"
            />
            {{ $t('nav.spanish') }}
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
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
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem
} from 'mdb-vue-ui-kit'

export default {
  name: 'navgationComponent',
  components: {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem
  },
  data() {
    return {
      isDropdown: true,
      showMobileMenu: false,
      whatsAppUrl:
        'https://api.whatsapp.com/send?phone=+556599331027&text=Olá%20eu%20vi%20o%20seu%20site%20e%20fiquei%20interessado'
    }
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    setLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
<style lang="scss">
i.fas.fa-bars.fa-1x {
  color: coral;
}
.navigation {
  background: #333;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.1px);
  -webkit-backdrop-filter: blur(3.1px);
}
.nav-link {
  font-size: 1rem;
  color: #fff !important;
  transition: 2s;

  a {
    padding-left: 0;
  }

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
}
.btn {
  margin: 0;
}

/* Medias */

@media screen and (min-width: 320px) {
  button.btn.btn-dark.dropdown-toggle {
    background: none !important;
    border-radius: 0;
    margin-top: 8px;
    padding: 0;
    color: #f85e0eff;
    font-size: 1rem;
    text-transform: capitalize;
  }

  ul.navbar-nav.me-auto.mb-lg-0 {
    border-top: 1px solid #fff;
    font-size: 10px;

    li {
      border-bottom: 1px solid #fff;
      display: flex;
      justify-content: center;
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

  button.btn.btn-dark.dropdown-toggle {
    margin-top: 0;
    padding: 8px 4px 9px 4px;
  }
}

@media screen and (min-width: 990px) {
  button.btn.btn-dark.dropdown-toggle {
    border-top: solid 1px #fff;
    border-bottom: solid 1px #fff;
  }
}
</style>
