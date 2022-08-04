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

    <MDBContainer class="px-0">
      <div class="tabs-container">
        <ul class="tafirst-list">
          <li
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ active: currentIndex == index }"
            @click="currentIndex = index"
          >
            {{ tab }}
          </li>
        </ul>

        <div class="tab-content">
          <div v-show="currentIndex == 0">
            {{ teste.description }}
          </div>
          <div v-show="currentIndex == 1">
            {{ teste.englishDescription }}
          </div>
        </div>
      </div>
    </MDBContainer>

    <MDBContainer class="pb-5 pt-4 px-0">
      <MDBRow :cols="['1', 'md-3']" class="g-4">
        <MDBCol v-for="card in teste.images" :key="card.id">
          <MDBCard>
            <MDBCardImg :src="card.src" top alt="..." />
            <MDBCardBody style="height: 13rem">
              <MDBCardTitle>{{ teste.title }}</MDBCardTitle>
              <MDBCardText>
                {{ card.description }}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </main>
  <footer>
    <ScrollTop />
    <FooterComponent />
  </footer>
</template>
<script>
import { projects } from '@/api/projects.js'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBadge,
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
    MDBContainer,
    MDBBadge,
    MDBCol,
    MDBRow,
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
      currentIndex: 0,
      tabs: ['PORTUGUÊS', 'ENGLISH'],
      teste: {}
    }
  },
  mounted() {
    this.teste = projects.find(({ id }) => id === Number(this.id))

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
}
</script>
<style lang="scss">
.tabs-container {
  font-family: sans-serif;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  color: #d6d6d6;
  border-radius: 8px;

  ul {
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: center;
    padding-top: 1.4rem;
    justify-content: left;

    li {
      width: 15%;
      background: #212121;
      color: #fff;
      margin-right: 25px;
      padding: 0.7rem;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.1s ease-in;

      &:hover {
        background: #212121;
        color: #fff;
        border-bottom: #d6d6d6 solid;
      }
    }
    .active {
      background-color: #292929;
      color: #fff;
      border-bottom: #d6d6d6 solid;
      border-radius: 8px;
    }
  }
  .tab-content {
    color: #fff;
    padding: 1rem 2rem;
  }
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
