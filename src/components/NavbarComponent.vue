<template>
  {{ $t('hello') }}

  <MDBNavbar class="navigation" expand="lg" position="top" container>
    <MDBNavbarBrand class="m-0">
      <a class="navbar-brand" href="/">
        <span style="color: #f85e0eff">LucasVicente</span>
        <span style="color: #f1f2f3">Arquitetura</span>
      </a>
    </MDBNavbarBrand>
    <MDBNavbarToggler
      @click="showMobileMenu = !showMobileMenu"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="showMobileMenu" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-lg-0" style="align-items: center">
        <MDBNavbarItem to="/" active> Home </MDBNavbarItem>
        <MDBNavbarItem to="/gallery"> Galeria </MDBNavbarItem>
        <MDBNavbarItem :href="whatsAppUrl" target="_blank">
          Contato
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>

    <span @click="setLocale('pt_BR')">PT</span>
    <span @click="setLocale('en')">EN</span>
    <CascadeSelect
      v-model="selectedCity"
      :options="countries"
      optionLabel="cname"
      optionGroupLabel="name"
      :optionGroupChildren="['states', 'cities']"
      style="minwidth: 14rem"
    >
      <template #option="slotProps">
        <div class="country-item">
          <img
            src="@/assets/flags/brazil.png"
            width="24"
            :class="'flag flag-' + slotProps.option.code.toLowerCase()"
            v-if="slotProps.option.states"
          />
          <i class="pi pi-compass mr-2" v-if="slotProps.option.cities"></i>
          <i class="pi pi-map-marker mr-2" v-if="slotProps.option.cname"></i>
          <span>{{ slotProps.option.cname || slotProps.option.name }}</span>
        </div>
      </template>
    </CascadeSelect>
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
      selectedCity: null,
      countries: [
        {
          name: 'Australia',
          code: 'AU',
          states: [
            {
              name: 'New South Wales',
              cities: [
                { cname: 'Sydney', code: 'A-SY' },
                { cname: 'Newcastle', code: 'A-NE' },
                { cname: 'Wollongong', code: 'A-WO' }
              ]
            },
            {
              name: 'Queensland',
              cities: [
                { cname: 'Brisbane', code: 'A-BR' },
                { cname: 'Townsville', code: 'A-TO' }
              ]
            }
          ]
        },
        {
          name: 'Canada',
          code: 'CA',
          states: [
            {
              name: 'Quebec',
              cities: [
                { cname: 'Montreal', code: 'C-MO' },
                { cname: 'Quebec City', code: 'C-QU' }
              ]
            },
            {
              name: 'Ontario',
              cities: [
                { cname: 'Ottawa', code: 'C-OT' },
                { cname: 'Toronto', code: 'C-TO' }
              ]
            }
          ]
        },
        {
          name: 'United States',
          code: 'US',
          states: [
            {
              name: 'California',
              cities: [
                { cname: 'Los Angeles', code: 'US-LA' },
                { cname: 'San Diego', code: 'US-SD' },
                { cname: 'San Francisco', code: 'US-SF' }
              ]
            },
            {
              name: 'Florida',
              cities: [
                { cname: 'Jacksonville', code: 'US-JA' },
                { cname: 'Miami', code: 'US-MI' },
                { cname: 'Tampa', code: 'US-TA' },
                { cname: 'Orlando', code: 'US-OR' }
              ]
            },
            {
              name: 'Texas',
              cities: [
                { cname: 'Austin', code: 'US-AU' },
                { cname: 'Dallas', code: 'US-DA' },
                { cname: 'Houston', code: 'US-HO' }
              ]
            }
          ]
        }
      ],
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
      console.log(this.$i18n.locale)
      this.$i18n.locale = locale
      console.log('oi')
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
    border-top: 1px solid #fff;

    li {
      border-bottom: 1px solid #fff;
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
