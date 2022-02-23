<script>
import useStore from '@/stores';
import { onMounted, computed, ref } from 'vue';
import ProductCard from './ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  setup() {
    const { productStore } = useStore();
    const {
      productList, handleGetProductList, productCategory, handleGetProductAll, isLoading,
    } = productStore;
    const selectCategory = ref('');
    onMounted(() => {
      handleGetProductAll();
    });

    function handleCategoryChange() {
      if (selectCategory.value === 'All') {
        handleGetProductAll();
      } else {
        handleGetProductList(selectCategory.value);
      }
    }

    return {
      selectCategory,
      productList: computed(() => productList.products),
      productCategory: computed(() => productCategory),
      handleCategoryChange,
      isLoading: computed(() => isLoading),
    };
  },
};
</script>

<template>
  <section class="container mb-14">
    <div class="flex gap-2 items-center mb-6">
      <label for="category" class="text-xl">選擇分類項目</label>
      <select
        id="category"
        class="py-2 rounded border"
        @change="handleCategoryChange"
        defaultValue="All"
        v-model="selectCategory"
      >
        <option value="" selected disabled>請選擇</option>
        <option value="All">全部</option>
        <option v-for="category in productCategory" :key="category" :value="category">
          {{ category }}
        </option>
      </select>

    </div>
    <ul class="grid grid-cols-4 gap-4">
      <li
        class=""
        v-for="product in productList"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </li>
    </ul>
  </section>
</template>
