<template>
  <nav>
    <NavBarComponent />
  </nav>
  <main>
    <MDBContainer class="pt-5 mt-5">
      <MDBBadge class="about-projects-title p-2" badge="dark">
        <h3 v-if="$i18n.locale === 'pt_BR'" class="mb-0">
          {{ project.title }}
        </h3>
        <h3 v-if="$i18n.locale === 'en'" class="mb-0">
          {{ project.titleEnglish }}
        </h3>
        <h3 v-if="$i18n.locale === 'es'" class="mb-0">
          {{ project.titleSpanish }}
        </h3>
      </MDBBadge>

      <div class="about-projects-description-container">
        <p v-if="$i18n.locale === 'pt_BR'">
          {{ project.description }}
        </p>
        <p v-if="$i18n.locale === 'en'">
          {{ project.descriptionEnglish }}
        </p>
        <p v-if="$i18n.locale === 'es'">
          {{ project.descriptionSpanish }}
        </p>
      </div>
    </MDBContainer>

    <MDBContainer class="pb-5 px-0">
      <MDBRow :cols="['1', 'md-3']" class="projects-cards-container g-4">
        <MDBCol v-for="card in project.images" :key="card.id">
          <MDBCard>
            <MDBCardImg :src="card.src" top />
            <MDBCardBody class="card-details-body p-0">
              <MDBCardTitle v-if="card.title" class="card-details-title">
                <p v-if="$i18n.locale === 'pt_BR'" class="mb-0">
                  {{ card.title }}
                </p>
                <p v-if="$i18n.locale === 'en'" class="mb-0">
                  {{ card.titleEnglish }}
                </p>
                <p v-if="$i18n.locale === 'es'" class="mb-0">
                  {{ card.titleSpanish }}
                </p>
              </MDBCardTitle>
              <MDBCardText class="card-details-description p-3">
                <p v-if="$i18n.locale === 'pt_BR'">
                  {{ card.description }}
                </p>
                <p v-if="$i18n.locale === 'en'">
                  {{ card.descriptionEnglish }}
                </p>
                <p v-if="$i18n.locale === 'es'">
                  {{ card.descriptionSpanish }}
                </p>
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
import { projects } from '@/api/about'
import NavBarComponent from '@/components/NavbarComponent.vue'
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
    NavBarComponent,
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
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
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

/* Medias */

@media screen and (min-width: 320px) {
  .about-projects-title {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto !important;
  }

  .projects-cards-container {
    margin: 0 auto;
  }
}

@media screen and (min-width: 769px) {
  .about-projects-title {
    width: 40%;
    margin: 0 !important;
  }

  .card-details-body {
    height: 15rem;
  }
}

@media screen and (min-width: 1201px) {
  .card-details-description {
    font-size: 1.1rem !important;
  }
}
</style>
