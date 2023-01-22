<template>
  <div style="position: relative; overflow: hidden">
    <div :class="{ hovering: isHovering }">
      {{ isHovering ? projectTitle + ' - ' + projectType : '' }}
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
  position: absolute;
  z-index: 999;
  pointer-events: none;
  cursor: not-allowed;
  font-family: Cambria, serif;
  bottom: 50%;
  text-align: center;
  width: 100%;
  font-weight: 900;
  color: #000;
  bottom: 38%;
  text-align: center;
  width: 100%;
  &::after {
    content: '';
    background: currentColor;
    width: 50%;
    height: 4px;
    display: block;
    margin: 10px auto;
  }
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
