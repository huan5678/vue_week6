<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'FrontEndView',
  components: { TheHeader },
};
</script>

<template>
  <TheHeader />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
</template>
