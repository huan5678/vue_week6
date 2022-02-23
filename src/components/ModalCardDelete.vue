<script>
import { ref, watchEffect } from 'vue';
import useStore from '@/stores';
import ModalCardTitle from './ModalCardTitle.vue';

export default {
  components: { ModalCardTitle },
  setup(props, context) {
    const { adminProductStore } = useStore();
    const { handleDeleteProduct } = adminProductStore;
    const productData = ref({ ...adminProductStore.productList.tempProduct });

    watchEffect(() => {
      productData.value = { ...adminProductStore.productList.tempProduct };
    });

    function closeModal() {
      context.attrs.handleOpenModal(false);
    }

    function handleSetDeleteProduct(id) {
      handleDeleteProduct(id);
      closeModal();
    }

    return {
      productData,
      handleSetDeleteProduct,
      handleOpenModal: context.attrs.handleOpenModal,
      closeModal,
    };
  },
};
</script>

<template>
  <section class="overflow-hidden space-y-4 bg-gray-50 rounded-md">
    <ModalCardTitle title="請確認是否刪除" :close-modal="handleOpenModal" />
    <p class="p-2 text-xl text-center text-secondary-500">
      {{ productData.title }}
    </p>
    <div class="container flex gap-4 justify-between p-4">
      <button
        class="flex-auto p-2 text-white bg-danger-500 hover:bg-danger-600
        rounded-md hover:shadow hover:shadow-danger-500 transition duration-300"
        type="button"
        @click="handleSetDeleteProduct(productData.id)"
      >
        確認刪除
      </button>
      <button
        class="flex-auto p-2 text-white bg-gray-500 hover:bg-gray-600
        rounded-md hover:shadow hover:shadow-gray-500 transition duration-300"
        @click="closeModal"
        type="button"
      >
        取消刪除
      </button>
    </div>
  </section>
</template>
