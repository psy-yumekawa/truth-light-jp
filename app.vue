<script setup lang="ts">
  useHead({
    link: [
      { rel: `preconnect`, href: `https://fonts.googleapis.com`},
      { rel: `preconnect`, href: `https://fonts.gstatic.com`, crossorigin:`anonymous`},
      { rel: `stylesheet`, href: `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Outfit:wght@100..900&display=swap`}
    ],
  })
</script>
<template>
  <div class="bg-[#EAEFEF] text-[#25343F] custom-font-normal">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>