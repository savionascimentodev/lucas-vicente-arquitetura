<template>
  <DialogComponent
    v-model:visible="isActiveModal"
    class="projects-modal rounded-5"
    :draggable="false"
  >
    <template #header>
      <h3 v-if="$i18n.locale === 'pt_BR'" class="projects-title">
        {{ currentProject.title }}
      </h3>
      <h3 v-if="$i18n.locale === 'en'" class="projects-title">
        {{ currentProject.titleEnglish }}
      </h3>
      <h3 v-if="$i18n.locale === 'es'" class="projects-title">
        {{ currentProject.titleSpanish }}
      </h3>
    </template>
    <div class="row-contend-dialog">
      <MDBCol>
        <MDBCarousel
          class="carrocel-container shadow-4-strong"
          :items="currentProject.images"
          :controls="false"
          fade
        />
      </MDBCol>
      <MDBCol>
        <div class="d-flex justify-content-center">
          <h4 class="datasheet">{{ $t('modal.datasheet') }}</h4>
        </div>
        <div class="p-2 text-texte">
          <div style="overflow: auto; height: 70%">
            <b>{{ $t('modal.description') }}: </b>
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ currentProject.description }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{ currentProject.descriptionEnglish }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{ currentProject.descriptionSpanish }}
            </span>
          </div>
          <div>
            <b>{{ $t('modal.type') }}: </b>
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ currentProject.type }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{ currentProject.typeEnglish }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{ currentProject.typeSpanish }}
            </span>
          </div>
          <div>
            <b>{{ $t('modal.local') }}:</b>
            {{ currentProject.local }}
          </div>
          <div>
            <b>{{ $t('modal.year') }}:</b>
            {{ currentProject.year }}
          </div>
          <div>
            <b>{{ $t('modal.area') }}:</b>
            {{ currentProject.area }}
          </div>
          <div>
            <b>{{ $t('modal.status') }}: </b>
            <span v-if="$i18n.locale === 'pt_BR'">
              {{ currentProject.status }}
            </span>
            <span v-if="$i18n.locale === 'en'">
              {{ currentProject.statusEnglish }}
            </span>
            <span v-if="$i18n.locale === 'es'">
              {{ currentProject.statusSpanish }}
            </span>
          </div>
        </div>
      </MDBCol>
    </div>
    <template #footer>
      <div class="mb-2 d-flex align-items-end justify-content-end">
        <MDBBtn
          style="background: #f85e0eff; color: #fff"
          rounded
          @click="$router.push(`/about/${currentProject.id}`)"
        >
          {{ $t('modal.knowMore') }}
        </MDBBtn>
      </div>
    </template>
  </DialogComponent>
</template>
<script>
import { MDBCol, MDBBtn, MDBCarousel } from 'mdb-vue-ui-kit'
export default {
  name: 'ProjectsModal',
  components: {
    MDBCol,
    MDBBtn,
    MDBCarousel
  },
  props: {
    currentProject: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isActiveModal: false
    }
  }
}
</script>
<style lang="scss">
.p-dialog.p-component.p-ripple-disabled.projects-modal {
  width: 90%;
}
.p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
  padding-bottom: 10px;
}
.carrocel-container {
  border-radius: 10% !important;

  .carousel-inner {
    border-radius: 12px !important;
  }
}
.p-dialog .p-dialog-header {
  padding-bottom: 0 !important;
}
</style>
<style lang="scss" scoped>
.projects-title {
  color: #f85e0eff;
}
.datasheet {
  font-size: 1.2rem;
  margin-bottom: 0;
}
/* Media */
@media screen and (min-width: 320px) {
  .row-contend-dialog {
    display: block;
  }
  .datasheet {
    margin-top: 1.2rem;
  }
  .text-texte {
    font-size: 1rem;
  }
}
@media screen and (min-width: 1025px) {
  .row-contend-dialog {
    display: flex;
  }
  .datasheet {
    margin-top: 0;
  }
  .text-texte {
    font-size: 1rem;
  }
}
</style>
