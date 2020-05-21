<template>
  <span>
    <Xbox v-if="platform.indexOf('Xbox One') !== -1" class="h-5 w-5 text-pink-600 fill-current" />
    <Playstation
      v-if="platform.indexOf('PlayStation 5') !== -1"
      class="h-5 w-5 text-pink-600 fill-current"
    />
    <Windows v-if="platform.indexOf('PC') !== -1" class="h-5 w-5 text-pink-600 fill-current" />
    <Apple v-if="platform.indexOf('macOS') !== -1" class="h-5 w-5 text-pink-600 fill-current" />
    <Linux v-if="platform.indexOf('Linux') !== -1" class="h-5 w-5 text-pink-600 fill-current" />
    <Android v-if="platform.indexOf('Android') !== -1" class="h-5 w-5 text-pink-600 fill-current" />
    <iOS v-if="platform.indexOf('iOS') !== -1" class="h-5 w-5 text-pink-600 fill-current" />
  </span>
</template>

<script>
import Xbox from '~/assets/images/xbox-brands.svg'
import Playstation from '~/assets/images/playstation-brands.svg'
import Linux from '~/assets/images/linux-brands.svg'
import Windows from '~/assets/images/windows-brands.svg'
import Apple from '~/assets/images/apple-brands.svg'
import Android from '~/assets/images/android-brands.svg'
import iOS from '~/assets/images/mobile-solid.svg'
export default {
  props: ['platform'],
  components: {
    Xbox,
    Playstation,
    Linux,
    Windows,
    Apple,
    iOS,
    Android
  }
}
</script>