<template>
  <DialogComponent
    v-model:visible="isActiveModal"
    class="projects-modal rounded-5"
    :draggable="false"
  >
    <template #header>
      <h3 class="projects-title">{{ teste.title }}</h3>
    </template>
    <div class="row-contend-dialog">
      <MDBCol>
        <MDBCarousel
          :items="teste.images"
          :controls="false"
          fade
          class="carrocel-container shadow-4-strong"
        />
      </MDBCol>
      <MDBCol class="coluna-modal">
        <div class="d-flex justify-content-center">
          <h4 class="datasheet-teste">Ficha Técnica</h4>
        </div>
        <div class="p-2 text-texte">
          <div style="overflow: auto; height: 70%">
            <b>Descrição:</b>
            {{ teste.description }}...
          </div>
          <div>
            <b>Tipo:</b>
            {{ teste.type }}
          </div>
          <div>
            <b>Local:</b>
            {{ teste.local }}
          </div>
          <div>
            <b>Ano:</b>
            {{ teste.year }}
          </div>
          <div>
            <b>Área:</b>
            {{ teste.area }}
          </div>
          <div>
            <b>Status:</b>
            {{ teste.status }}
          </div>
        </div>
      </MDBCol>
    </div>

    <template #footer>
      <div class="mb-2 d-flex align-items-end justify-content-end">
        <MDBBtn
          style="background: #f85e0eff; color: #fff"
          rounded
          @click="$router.push(`/about/${teste.id}`)"
        >
          <MDBIcon icon="fas fa-plus-circle" />
          Saiba Mais
        </MDBBtn>
      </div>
    </template>
  </DialogComponent>
</template>
<script>
import { MDBCol, MDBIcon, MDBBtn, MDBCarousel } from 'mdb-vue-ui-kit'

export default {
  name: 'ProjectsModal',
  components: {
    MDBCol,
    // MDBRow,
    MDBIcon,
    MDBBtn,
    MDBCarousel
  },
  props: {
    teste: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isActiveModal: false,
      array: []
    }
  },
  methods: {
    showDescriptionModal() {
      this.exampleModal = true
    }
  }
}
</script>
<style lang="scss">
.p-dialog.p-component.p-ripple-disabled.projects-modal {
  width: 90%;
}
.carrocel-container {
  border-radius: 20% !important;

  .carousel-inner {
    border-radius: 12px !important;
  }
}
</style>
<style lang="scss" scoped>
.p-dialog .p-dialog-header {
  padding-bottom: 0 !important;
}
.p-dialog .p-dialog-content {
  padding-bottom: 1rem !important;
}

.projects-title {
  color: #f85e0eff;
}
@media screen and (min-width: 320px) {
  .row-contend-dialog {
    display: block;
  }

  .datasheet-teste {
    margin-top: 1.3rem;
    font-size: 1.2rem;
    // background: red;
  }

  .text-texte {
    // background: gray;
    // color: white;
    font-size: 1rem;
  }
}
@media screen and (min-width: 480px) {
  .datasheet-teste {
    font-size: 1.3rem;
    margin-top: 1.3rem;
    // background: red;
  }

  .row-contend-dialog {
    display: block;
  }

  .text-texte {
    font-size: 1.1rem;
    // background: blueviolet;
  }
}
@media screen and (min-width: 769px) {
  .row-contend-dialog {
    display: block;
  }

  .description-texte {
    // text-overflow: ellipsis;
    text-overflow: clip;
    // white-space: nowrap;
    overflow: hidden;
  }
  .datasheet-teste {
    font-size: 1.3rem;
    margin-top: 1.3rem;
    // background: red;
  }

  .text-texte {
    background: yellow;
    font-size: 1rem;
  }
}
@media screen and (min-width: 1025px) {
  .datasheet-teste {
    font-size: 1.2rem;
    margin-top: 0rem;
    // background: red;
  }

  .row-contend-dialog {
    display: flex;
  }

  .text-texte {
    font-size: 2px;
    background: yellowgreen;
    font-size: 1rem;
  }
}
@media screen and (min-width: 1201px) {
  .datasheet-teste {
    font-size: 1.2rem;
    margin-top: 0rem;
    // background: red;
  }

  .row-contend-dialog {
    display: flex;
  }

  .text-texte {
    font-size: 1rem;
    background: gray;
  }
}
</style>
