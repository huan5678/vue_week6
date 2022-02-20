<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'FrontEndView',
  components: { TheHeader },
};
</script>

<template>
  <TheHeader />
  <router-view/>
</template>
