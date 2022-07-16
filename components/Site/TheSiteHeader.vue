<template>
  <header>
    <div class="myvii-container-wrapper flex justify-between py-6">
      <div class="text-3xl">myvii</div>
      <div class="flex gap-4 items-center">
        <div @click="menuIsOpen = true" class="md:hidden">
          <PhList size="32" />
        </div>
        <div class="hidden md:flex gap-4">
          <NuxtLink to="/auth/login" class="px-6 py-2 rounded-md"
            >Login</NuxtLink
          >
          <NuxtLink class="bg-primary text-white px-6 py-2 rounded-md">
            Sign up
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="menuIsOpen"
      class="absolute inset-0 min-h-full min-w-full bg-white"
    >
      <div class="myvii-container-wrapper py-6">
        <div class="flex justify-between">
          <div class="text-3xl">myvii</div>
          <div @click="menuIsOpen = false" class="md:hidden">
            <PhX size="32" />
          </div>
        </div>
        <div class="flex flex-col gap-4 text-center">
          <NuxtLink to="/auth/login" class="px-6 py-2 rounded-md"
            >Login</NuxtLink
          >
          <NuxtLink class="bg-primary text-white px-6 py-2 rounded-md">
            Sign up
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { PhList, PhX } from 'phosphor-vue';

const menuIsOpen = ref(false);
</script>

<style scoped></style>
