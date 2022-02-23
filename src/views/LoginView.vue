<script>
import { ref, onMounted, inject } from 'vue';
import { useRouter } from 'vue-router';
import useStore from '@/stores';

export default {
  setup() {
    const baseUrl = process.env.VUE_APP_API_URL;
    const axios = inject('axios');
    const { adminStore } = useStore();
    const { handleSetLogin, handleGetToken } = adminStore;
    const router = useRouter();
    const userName = ref('');
    const userPassword = ref('');

    function handlerSubmit() {
      const username = userName.value;
      const password = userPassword.value;
      axios.post(`${baseUrl}/admin/signin`, { username, password })
        .then((res) => {
          const data = {
            token: res.data.token,
            expired: res.data.expired,
          };
          handleSetLogin(data);
          router.push('/admin');
        })
        .catch((err) => {
          console.dir(err);
        });
    }

    onMounted(() => {
      const cookieToken = handleGetToken();
      if (cookieToken[0] !== '' && cookieToken[0] !== undefined) {
        router.push('/admin');
      }
    });

    return {
      userName,
      userPassword,
      handlerSubmit,
    };
  },
};
</script>

<template>
  <main class="flex justify-center items-center h-screen bg-gray-50">
    <div class="container max-w-lg">
      <form class="p-8 space-y-8 bg-white rounded shadow-sm" @submit.prevent="handlerSubmit">
        <legend class="text-4xl text-center">請先登入</legend>
        <div class="space-y-4">
          <label for="name" class="block">使用者帳號</label>
          <input
            id="name"
            type="text"
            name="userName"
            placeholder="請輸入帳號Email"
            v-model.trim="userName"
            class="p-2 w-full text-primary-800 border
            focus:text-primary-600 bg-gray-50 rounded focus:ring-primary-500
            invalid:border-primary-600 invalid:text-primary-600"
          />
        </div>
        <div class="space-y-4">
          <label for="password" class="block">使用者密碼</label>
          <input
            id="password"
            type="password"
            class="p-2 w-full text-primary-800 bg-gray-50 rounded border
            invalid:text-primary-600 invalid:border-primary-600
            focus:text-primary-600 focus:ring-primary-500"
            v-model="userPassword"
            placeholder="請輸入密碼"
          />
        </div>
        <button
          type="submit"
          class="py-4 w-full text-white bg-primary-500 hover:bg-primary-600 rounded-lg
          transition duration-300"
        >
          登入
        </button>
      </form>
    </div>
  </main>
</template>
