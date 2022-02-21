<script>
import { onBeforeMount, ref } from 'vue';
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

    function handleOpenModal(id) {
      isOpenModal.value = true;
      $vfm.show(id);
    }

    onBeforeMount(() => {
      handleGetToken();
      handleCheckUser();
      const cookieToken = handleGetToken();
      if (cookieToken[0] === '') router.push('/login');
    });

    return {
      handleOpenModal,
    };
  },
};
</script>

<template>
  <main class="bg-gray-100">
    <div class="container">
      <ProductsTable handleOpenModal="handleOpenModal" />
      <vue-final-modal
        v-model="isOpenModal"
        classes="flex justify-center items-center bg-opacity-50 backdrop-blur-[2px]"
        content-class="bg-gray-50 rounded-md shadow-md overflow-hidden"
        focus-trap
      >
        <ModalCardDelete v-if="modalState === 'productDelete'" />
        <ModalCardDetail v-if="modalState === 'getDetail'" />
        <ModalCardAddition
          v-if="modalState === 'productEdit' || modalState === 'productCreate'"
          :products="products"
        />
      </vue-final-modal>
    </div>
  </main>
</template>
