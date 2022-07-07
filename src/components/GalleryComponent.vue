<template>
  <!-- Gallery -->
  <!-- <div class="">
    <img
      :src="thumbnail.src"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Thumbs gallery"
      @click="show"
    />
  </div> -->
  <div class="container">
    <masonry-wall
      :items="items"
      :ssr-columns="3"
      :column-width="150"
      :gap="18"
      rtl
    >
      <template #default="{ item, index }">
        <div :style="{ height: `${index * 100}px` }">
          <h1>{{ item.title }}</h1>
          <span>{{ item.description }}</span>
          <img :src="item.src" width="450" />
        </div>
      </template>
    </masonry-wall>
  </div>
</template>
<script>
export default {
  name: 'GalleryComponent',
  props: {
    images: {
      type: Object,
      required: true
    },
    thumbnail: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      items: [
        {
          title: '0',
          description: 'The first item.',
          src: require('@/assets/casa.L.M.V/areaGourmet08.png')
        },
        {
          title: '2',
          description: 'The first item.',
          src: require('@/assets/casa.L.M.V/areaGourmet07.png')
        },
        {
          title: '3',
          description: 'The first item.',
          src: require('@/assets/casa.L.M.V/areaGourmet06.png')
        },
        {
          title: '1',
          description: 'The second item.'
        }
      ]
      // : [
      // require('@/assets/casa.L.M.V/areaGourmet08.png'),
      // require('@/assets/casa.L.M.V/areaGourmet07.png')
      // ]
    }
  },

  methods: {
    show() {
      this.$viewerApi({
        images: this.images
      })
    }
  }
}
</script>
