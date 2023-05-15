<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default {
  name: 'App',

  setup() {
    const siteData = reactive({
      title: `Lucas Vicente Arq`,
      description: `Lucas Vicente Arquitetura e Interiores`,
      author: `Lucas Vicente`,
      keywords: `arquitetura, interiores, projetos, obras, Arquitetura Residencial, galeira, Projeto piloto,Nova Mutum - MT, nova mutum, reforma`,
      ogTitle: `Lucas Vicente Arquitetura e Interiores`,
      ogDescription: `Site de Lucas Vicente Arquitetura e Interiores`,
      ogImage: `https://lucasvicentearq.com.br/img/casaConceito01.20e2881f.webp`,
      ogUrl: `https://lucasvicentearq.com.br/`
    })
    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description)
        },
        {
          name: `theme-color`,
          content: '#BCBCBC'
        },
        {
          name: `author`,
          content: computed(() => siteData.author)
        },
        {
          name: `keywords`,
          content: computed(() => siteData.keywords)
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1.0`
        },
        {
          property: `og:title`,
          content: computed(() => siteData.ogTitle)
        },
        {
          property: `og:description`,
          content: computed(() => siteData.ogDescription)
        },
        {
          property: `og:image`,
          content: computed(() => siteData.ogImage)
        },
        {
          property: `og:url`,
          content: computed(() => siteData.ogUrl)
        }
      ]
    })
  }
}
</script>
