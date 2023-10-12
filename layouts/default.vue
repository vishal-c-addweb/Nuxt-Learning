<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <AppHeader />
    <div class="flex-1 container mx-auto p-4">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
