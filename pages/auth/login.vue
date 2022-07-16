<template>
  <div
    class="myvii-container-wrapper min-h-screen flex items-center justify-center"
  >
    <div class="w-full max-w-sm m-auto">
      <h1 class="text-3xl text-center mb-8">myvii</h1>
      <div class="text-xl font-bold text-center">Welcome back</div>
      <div class="text-lg text-center">Login to your account</div>

      <form @submit.prevent="log">
        <div class="mt-6">
          <label for="username" class="block text-sm">Username</label>
          <input
            v-model="user.username"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <div class="text-sm text-red-500 mt-2"></div>
        </div>

        <div class="mt-6">
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm">Password</label>
            <div href="#" class="text-xs cursor-pointer hover:underline">
              Forget Password?
            </div>
          </div>

          <input
            v-model="user.password"
            type="password"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <div class="text-sm text-red-500 mt-2"></div>
        </div>

        <div class="mt-6">
          <button
            class="w-full px-4 py-2 tracking-wide transition-colors duration-200 transform bg-primary text-white rounded-md hover:bg-primary-400 focus:outline-none focus:bg-gray-600"
          >
            Login
          </button>
        </div>
      </form>
      <p class="mt-8 text-xs text-center">
        Don't have an account?
        <NuxtLink href="#" class="font-bold hover:underline">
          Create One
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = reactive({
  username: null,
  password: null,
});

function log() {
  console.log(user);
}
</script>

<style scoped></style>
