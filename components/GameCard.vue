<template>
  <div
    @click="goToLobbies"
    class="flex flex-col rounded-lg shadow-lg overflow-hidden relative"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="[hover ? '' : '']"
  >
    <div class="flex-shrink-0">
      <img
        v-show="!hover || !game.clip"
        class="h-48 w-full object-cover transition-250"
        :src="game.background_image"
        alt
      />
      <video
        autoplay
        muted
        v-if="hover && game.clip"
        class="h-48 w-full object-cover transition-250"
        :src="game.clip.clip"
        alt
      >
        <source :src="game.clip.clip" type="video/mp4" />
      </video>
    </div>
    <div
      class="flex-1 duration-100 p-6 flex flex-col justify-between"
      :class="[hover ? 'bg-gray-700' : 'bg-gray-800']"
    >
      <div class="flex-1">
        <p class="text-sm leading-5 font-medium text-pink-600 flex items-center space-x-2">
          <template v-for="platform in game.platforms">
            <PlatformBadge :key="platform.id" :platform="platform.platform.name"></PlatformBadge>
          </template>
        </p>
        <a href="#" class="block">
          <h3 class="mt-2 text-xl leading-7 font-semibold text-white">{{game.name}}</h3>
          <!-- <p
            class="mt-3 text-base leading-6 text-gray-500"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.</p>-->
        </a>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a href="#">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt
            />
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm leading-5 font-medium text-white">
            <a href="#" class="hover:underline">Brenna Goyette</a>
          </p>
          <div class="flex text-sm leading-5 text-gray-500">
            <time datetime="2020-03-16">Mar 16, 2020</time>
            <span class="mx-1">&middot;</span>
            <span>6 min read</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object
    }
  },
  data() {
    return {
      hover: false
    }
  },
  methods: {
    parsePlatforms(platforms) {},
    goToLobbies() {
      this.$router.push({
        path: '/lobbies',
        query: { game: this.game.id }
      })
    }
  }
}
</script>