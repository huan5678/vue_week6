<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import useStore from '@/stores';

export default {
  props: ['product'],
  setup(props) {
    const product = { ...props.product };
    const { cartStore } = useStore();
    const { handleAddCart } = cartStore;
    const router = useRouter();

    function handleOpenProductDetail(id) {
      router.push({ path: `/detail/${id}` });
    }

    return {
      products: product,
      handleAddCart,
      isLoading: computed(() => cartStore.isLoading),
      handleOpenProductDetail,
    };
  },
};
</script>

<template>
  <div class="flex flex-col justify-between rounded-md shadow
  overflow-hidden relative h-full">
    <div class="group cursor-pointer h-full"
    @click="handleOpenProductDetail(products.id)"
    @keydown="handleOpenProductDetail(products.id)">
      <div class="overflow-clip">
        <img
          :src="products.imageUrl"
          :alt="products.title"
          class="object-cover w-full transition-all duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <ul class="p-4 space-y-4">
        <li>
          <h2 class="text-xl text-center">{{ products.title }}</h2>
        </li>
        <li class="flex justify-between">
          <span>原價</span>
          <span class="line-through">
            {{ products.origin_price }}
          </span>
        </li>
        <li class="flex justify-between">
          <span>特價</span>
          <span class="text-xl">{{ products.price }}</span>
        </li>
      </ul>
    </div>
    <div class="overflow-clip flex-[1_0_auto]">
      <button
        type="button"
        class="flex gap-2 justify-center items-center py-4 w-full
        text-xl text-gray-50 bg-secondary-700 hover:bg-secondary-900 transition-all duration-500
        ease-in-out hover:scale-110"
        :class="isLoading === products.id ? 'bg-gray-300 hover:bg-gray-300' : ''"
        :disabled="isLoading === products.id"
        @click="handleAddCart(products.id)"
      >
        <svg
          class="mr-3 -ml-1 w-5 h-5 text-gray-300 animate-spin"
          :class="isLoading === products.id ? '' : 'hidden'"
          :disabled="isLoading === products.id"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962
            7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        加入購物車
      </button>
    </div>
  </div>
</template>
