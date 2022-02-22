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

<script>
import TheHeader from '@/components/TheHeader.vue';
import { onBeforeMount } from 'vue';
import useStore from '@/stores';
import { useRouter } from 'vue-router';

export default {
  name: 'BackEndView',
  components: { TheHeader },
  setup() {
    const { adminStore } = useStore();
    const { handleCheckUser, handleGetToken } = adminStore;
    const router = useRouter();

    onBeforeMount(() => {
      handleGetToken();
      handleCheckUser();
      const cookieToken = handleGetToken();
      if (cookieToken[0] === '') {
        router.push('/login');
      }
    });
  },
};
</script>
