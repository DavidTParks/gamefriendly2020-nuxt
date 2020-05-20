<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" :src="game.background_image" alt />
    </div>
    <div class="flex-1 bg-gray-800 p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm leading-5 font-medium text-pink-600 flex items-center space-x-1">
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
  }
}
</script>