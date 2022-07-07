<template>
  <nav>
    <NavbarComponent />
  </nav>
  <main>
    <MDBContainer class="py-3 px-0">
      <MDBBadge class="p-2" badge="dark">
        <h3 class="m-0">{{ teste.title }}</h3>
      </MDBBadge>
    </MDBContainer>

    <MDBContainer>
      <MDBTabs
        v-model="activeTabId4"
        vertical
        style="background: #c0c0c0; color: white; border-radius: 8px"
      >
        <MDBTabNav tabsClasses="mb-3 text-center">
          <MDBTabItem :wrap="true" tabId="ex4-1" href="ex4-1">
            Português
          </MDBTabItem>
          <MDBTabItem :wrap="false" tabId="ex4-2" href="ex4-2">
            Inglês
          </MDBTabItem>
        </MDBTabNav>

        <MDBTabContent>
          <MDBTabPane tabId="ex4-1">{{ teste.description }}</MDBTabPane>
          <MDBTabPane tabId="ex4-2">{{ teste.englishDescription }}</MDBTabPane>
        </MDBTabContent>
      </MDBTabs>
    </MDBContainer>

    <MDBContainer class="pb-5 pt-4 px-0">
      <MDBRow :cols="['1', 'md-3']" class="g-4">
        <MDBCol v-for="card in teste.images" :key="card.id">
          <MDBCard>
            <MDBCardImg :src="card.src" top alt="..." />
            <MDBCardBody>
              <MDBCardTitle>{{ teste.title }}</MDBCardTitle>
              <MDBCardText>
                {{ teste.description }}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>
<script>
// import teste from '@/api/projects.js'

import { projects } from '@/api/projects.js'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBadge,
  // MDBCardGroup,
  MDBTabs,
  MDBTabNav,
  MDBTabItem,
  MDBTabContent,
  MDBTabPane,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg
} from 'mdb-vue-ui-kit'

export default {
  name: 'AboutView',
  components: {
    NavbarComponent,
    FooterComponent,
    MDBTabs,
    MDBTabNav,
    MDBTabItem,
    MDBTabContent,
    MDBTabPane,
    MDBContainer,
    MDBBadge,
    MDBCol,
    MDBRow,
    // MDBCardGroup,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      activeTabId4: true,
      teste: {}
      // oo:teste
    }
  },
  mounted() {
    this.teste = projects.find(({ id }) => id === Number(this.id))

    console.log(this.teste)
    console.log(projects)
    this.scrollToPosition()
    // this.$router.go()
    // this.$forceUpdate()
  },
  methods: {
    scrollToPosition() {
      // Caso queira o nativo apenas
      window.scrollTo(0, 1000)

      // smoothScrollTo(0, to);
    }
  }
  // beforeUpdate() {}
}
</script>
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
