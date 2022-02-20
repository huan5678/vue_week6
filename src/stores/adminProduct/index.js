import { reactive, inject } from 'vue';
import { defineStore } from 'pinia';
import { useAdminStore } from '@/stores/admin';

export const useAdminProductStore = defineStore('adminProduct', () => {
  const axios = inject('axios');
  const baseUrl = process.env.VUE_APP_API_URL;
  const apiPath = process.env.VUE_APP_API_PATH;

  const productList = reactive({
    products: [],
    pagination: {},
    currentPage: 1,
    category: null,
  });

  const adminStore = useAdminStore();

  function handleGetProductAll() {
    axios.get(`${baseUrl}api/${apiPath}/admin/products/all`, { token: adminStore.token })
      .then((res) => {
        // console.log(res.data);
        productList.products = res.data.products;
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  function handleGetProductList(
    page = productList.currentPage,
    category = productList.category,
  ) {
    let productCategory = category;
    if (category === null) {
      productCategory = '';
    }
    axios.get(`${baseUrl}api/${apiPath}/admin/products?page=${page}${productCategory}`, { token: adminStore.token })
      .then((res) => {
        // console.log(res.data);

        productList.products = res.data.products;
        productList.pagination = res.data.pagination;
      })
      .catch((err) => {
        console.dir(err);
      });
  }
  function handleEditProduct(id, data) {
    axios.put(`${baseUrl}api/${apiPath}/admin/product/${id}`, data, { token: adminStore.token })
      .then(() => {
        handleGetProductList();
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  function handleDeleteProduct(id) {
    axios.delete(`${baseUrl}api/${apiPath}/admin/product/${id}`, { token: adminStore.token })
      .then(() => {
        handleGetProductList();
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  function handleCreateProduct(data) {
    axios.post(`${baseUrl}api/${apiPath}/admin/product`, data, { token: adminStore.token })
      .then(() => {
        handleGetProductList(productList.currentPage);
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  function handleImageUpload(file) {
    const formData = new FormData();
    formData.append('file-to-upload', file);
    return axios.post(`${baseUrl}api/${apiPath}/admin/upload`, formData, {
      token: adminStore.token,
    });
  }

  return {
    productList,
    handleCreateProduct,
    handleGetProductAll,
    handleGetProductList,
    handleEditProduct,
    handleDeleteProduct,
    handleImageUpload,
  };
});
export default useAdminProductStore;
