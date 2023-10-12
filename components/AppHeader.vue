<template>
  <div>
    <header class="bg-indigo-700 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <nav>
          <ul class="flex space-x-4">
            <li>
              <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>
