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
  <section class="space-y-4 bg-gray-50 rounded-md overflow-hidden">
    <ModalCardTitle title="請確認是否刪除" :close-modal="handleOpenModal" />
    <p class="p-2 text-secondary-500 text-center text-xl">
      {{ productData.title }}
    </p>
    <div class="container flex justify-between gap-4 p-4">
      <button
        class="flex-auto p-2 bg-danger-500 text-white rounded-md
        hover:bg-danger-600 hover:shadow hover:shadow-danger-500 transition duration-300"
        type="button"
        @click="handleSetDeleteProduct(productData.id)"
      >
        確認刪除
      </button>
      <button
        class="flex-auto p-2 bg-gray-500 text-white rounded-md
        hover:bg-gray-600 hover:shadow hover:shadow-gray-500 transition duration-300"
        @click="closeModal"
        type="button"
      >
        取消刪除
      </button>
    </div>
  </section>
</template>
