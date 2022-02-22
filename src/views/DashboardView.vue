<script>
import { onBeforeMount, ref, computed } from 'vue';
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
    const { adminStore, adminProductStore } = useStore();
    const { handleCheckUser, handleGetToken } = adminStore;

    const router = useRouter();
    const isOpenModal = ref(false);

    function handleOpenModal(boolean = true) {
      isOpenModal.value = boolean;
      $vfm.show('adminModal');
    }

    onBeforeMount(() => {
      handleGetToken();
      handleCheckUser();
      const cookieToken = handleGetToken();
      if (cookieToken[0] === '') router.push('/login');
    });

    return {
      handleOpenModal,
      isOpenModal,
      modalState: computed(() => adminProductStore.functionSelected.selected),
    };
  },
};
</script>

<template>
  <main class="bg-gray-100">
    <div class="container">
      <ProductsTable :handleOpenModal="handleOpenModal" />
      <vue-final-modal
        v-model="isOpenModal"
        id="adminModal"
        classes="flex justify-center items-center bg-opacity-50 backdrop-blur-[2px]"
        content-class="bg-gray-50 rounded-md shadow-md overflow-hidden"
        focus-trap
      >
        <ModalCardDelete v-if="modalState === 'productDelete'" :handleOpenModal="handleOpenModal" />
        <ModalCardDetail v-if="modalState === 'getDetail'" :handleOpenModal="handleOpenModal" />
        <ModalCardAddition
          v-if="modalState === 'productEdit' || modalState === 'productCreate'"
          :handleOpenModal="handleOpenModal"
        />
      </vue-final-modal>
    </div>
  </main>
</template>
