<script>
export default {
  setup(props, context) {
    console.log(context.attrs);
    const { title } = context.attrs;
    function closeModal() {
      context.attrs['close-modal'](false);
    }
    return {
      title,
      closeModal,
    };
  },
};
</script>

<template>
  <div class="flex justify-between items-center space-y-3 bg-gray-900">
    <h2 class="p-4 text-lg text-white">{{ title }}</h2>
    <button
      type="button"
      class="p-4 text-gray-50 hover:text-gray-100 transition-all duration-200
      ease-in-out hover:scale-125"
      @click="closeModal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="w-8 h-8"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707
          8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0
          1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </button>
  </div>
</template>
