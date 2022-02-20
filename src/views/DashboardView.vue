<script>
import { onBeforeMount, computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { $vfm } from 'vue-final-modal';

import useStore from '@/stores';
import ProductsTable from '@/components/ProductsTable.vue';
import ModalCardDetail from '@/components/ModalCardDetail.vue';
import ModalCardDelete from '@/components/ModalCardDelete.vue';
import ModalCardAddition from '@/components/ModalCardAddition.vue';

export default {
  components: {
    ProductsTable,
    ModalCardDetail,
    ModalCardDelete,
    ModalCardAddition,
  },
  setup() {
    const { adminStore } = useStore();
    const { handleCheckUser, handleGetToken } = adminStore;

    const router = useRouter();
    const isOpenModal = ref(false);

    function handleOpenModal()

    onBeforeMount(() => {
      handleGetToken();
      handleCheckUser();
      const cookieToken = handleGetToken();
      cookieToken[0] === '' && router.push('/login');
    });

    return {
      modalState: computed(() => state.modalType),
      products: computed(() => state.modalProps),
    };
  },
};
</script>

<template>
  <main class="bg-gray-100">
    <div class="container">
      <ProductsTable />

        <ModalCardDelete v-if="modalState === 'productDelete'" />
        <ModalCardDetail v-if="modalState === 'getDetail'" />
        <ModalCardAddition
          v-if="modalState === 'productEdit' || modalState === 'productCreate'"
          :products="products"
        />
    </div>
  </main>
</template>
