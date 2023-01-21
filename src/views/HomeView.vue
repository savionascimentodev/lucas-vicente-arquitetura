<template>
  <div class="home">
    <nav>
      <NavbarComponent />
    </nav>
    <main>
      <CarroucelComponent />
      <MDBContainer>
        <GridCards />
      </MDBContainer>
    </main>
    <footer>
      <ScrollTop style="background: #f85e0eff; color: #fff" />
      <FooterComponent />
    </footer>
  </div>
</template>

<script>
import { MDBContainer } from 'mdb-vue-ui-kit'

import NavbarComponent from '@/components/NavbarComponent.vue'
import CarroucelComponent from '@/components/CarouselComponent.vue'
import GridCards from '@/components/GridCards.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    CarroucelComponent,
    GridCards,
    FooterComponent,
    MDBContainer
  }
}
</script>

<style>
* {
  font-family: 'Josefin Sans', sans-serif;
}
</style>
<style scoped>
main {
  background-image: linear-gradient(
    to top,
    lightgrey 0%,
    lightgrey 1%,
    #e0e0e0 26%,
    #efefef 48%,
    #d9d9d9 75%,
    #bcbcbc 100%
  );
}
</style>
