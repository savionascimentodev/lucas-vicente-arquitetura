<template>
  <nav>
    <NavBarComponentStyle2 />
  </nav>
  <main>
    <MDBContainer class="pt-5 mt-5 pb-0">
      <MDBBadge class="about-projects-title p-2" badge="dark">
        <h3 class="m-0">
          {{ project.title }}
        </h3>
      </MDBBadge>

      <div class="about-projects-description-container">
        <p class="about-projects-description mb-0">
          {{ project.description }}
        </p>
      </div>
    </MDBContainer>

    <MDBContainer class="pb-5 px-0">
      <MDBRow :cols="['1', 'md-3']" class="projects-cards-container g-4">
        <MDBCol v-for="card in project.images" :key="card.id">
          <MDBCard>
            <MDBCardImg :src="card.src" top />
            <MDBCardBody class="card-details-body p-0">
              <MDBCardTitle class="card-details-title mb-0">
                {{ card.title }}
              </MDBCardTitle>
              <MDBCardText class="card-details-description p-3">
                {{ card.description }}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </main>
  <footer>
    <ScrollTop style="background: #f85e0eff; color: #fff" />
    <FooterComponent />
  </footer>
</template>
<script>
import { projects } from '@/api/projects.js'
import NavBarComponentStyle2 from '@/components/NavBarComponentStyle2.vue'
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
    NavBarComponentStyle2,
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
      project: {}
    }
  },
  mounted() {
    this.project = projects.find(({ id }) => id === Number(this.id))
  }
}
</script>
<style lang="scss" scoped>
.about-projects-description-container {
  font-family: sans-serif;
  background-image: url('@/assets/mosaico2.png');
  color: #d6d6d6;
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 12px;
}

.card-details-title {
  display: flex;
  justify-content: center;
  background: #414141;
  color: #fff;
  padding: 0.2rem;
}

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

// Medias ---

@media screen and (min-width: 320px) {
  .about-projects-title {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto !important;
  }

  .about-projects-description {
    font-size: 0.9rem !important;
  }

  .projects-cards-container {
    margin: 0 auto;
  }

  .card-details-description {
    font-size: 0.9rem !important;
  }
}

@media screen and (min-width: 480px) {
  .card-details-description {
    font-size: 1rem !important;
  }

  .about-projects-description {
    font-size: 1rem !important;
  }
}

@media screen and (min-width: 769px) {
  .about-projects-title {
    width: 40%;
    margin: 0 !important;
  }

  .about-projects-description {
    font-size: 0.9rem !important;
  }

  .card-details-body {
    height: 15rem;
  }

  .card-details-description {
    font-size: 0.9rem !important;
  }
}

@media screen and (min-width: 1025px) {
  .about-projects-description {
    font-size: 1rem !important;
  }
  .card-details-description {
    font-size: 1rem !important;
  }
}

@media screen and (min-width: 1201px) {
  .about-projects-description {
    font-size: 1.1rem !important;
  }
  .card-details-description {
    font-size: 1.1rem !important;
  }
}
</style>
