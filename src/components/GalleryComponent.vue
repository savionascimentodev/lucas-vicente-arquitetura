<template>
  <div style="position: relative; overflow: hidden">
    <div class="projects-title" :class="{ hovering: isHovering }">
      {{ projectTitle }}
      <hr />
      {{ projectType }}
    </div>
    <img
      :src="thumbnail.src"
      alt="Thumbs gallery"
      @mouseout="isHovering = false"
      @mouseover="isHovering = true"
      @click="show"
    />
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
    },
    projectTitle: {
      type: String,
      required: true
    },
    projectType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isHovering: false
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
<style lang="scss" scoped>
.hovering {
  pointer-events: none;
  cursor: not-allowed;
}
.projects-title {
  font-family: Cambria, serif;
  position: absolute;
  bottom: 50%;
  text-align: center;
  width: 100%;
  z-index: 1;

  &:hover {
    pointer-events: none;
    cursor: not-allowed;
  }
  // &::after {
  //   content: '';
  //   background: currentColor;
  //   width: 50%;
  //   height: 4px;
  //   display: block;
  //   margin: 0 auto;
  // }
  // &::before {
  //   content: '';
  //   background: currentColor;
  //   width: 50%;
  //   height: 4px;
  //   display: block;
  //   margin: 0.2rem auto;
  // }
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.5s ease-in;
  border: 1px solid #000;

  &:hover {
    filter: opacity(0.2);
  }
}
</style>
