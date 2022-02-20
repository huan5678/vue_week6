import { ref, inject } from 'vue';
import { defineStore } from 'pinia';

export const useAdminStore = defineStore('admin', () => {
  const axios = inject('axios');
  const baseUrl = process.env.VUE_APP_API_URL;
  const token = ref('');
  const expired = ref('');
  const isLoggedIn = ref(false);

  function handleCheckUser() {
    axios.post(`${baseUrl}api/user/check`, { token: token.value })
      .then((res) => {
        isLoggedIn.value = res.data.success;
        return res.data.success;
      })
      .catch((err) => {
        console.dir(err);
        isLoggedIn.value = err.response.data.success;
        return err.response.data.success;
      });
  }

  function handleGetToken() {
    const cookies = document.cookie.split('; backendToken=');
    token.value = cookies.pop().split(';').shift();
    return cookies;
  }

  function handleSetLogin(data) {
    token.value = data.token;
    expired.value = data.expired;
    isLoggedIn.value = true;
    document.cookie = `backendToken=${data.token}; expires=${new Date(
      data.expired,
    )};`;
  }
  function handleSetLogout() {
    isLoggedIn.value = false;
    token.value = '';
    expired.value = '';
    axios.post(`${baseUrl}api/user/logout`);
  }

  function handleClearToken() {
    document.cookie = `backendToken=; expires=${new Date(0)};`;
  }

  return {
    token,
    expired,
    isLoggedIn,
    handleSetLogin,
    handleSetLogout,
    handleCheckUser,
    handleGetToken,
    handleClearToken,
  };
});
export default useAdminStore;
