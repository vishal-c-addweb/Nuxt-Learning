<template>
  <div class="container mx-auto p-8">
    <Head>
      <Title>About</Title>
      <Meta name="description" :content="about.description" />
      <Link rel="icon" type="images/x-icon" href="/img/iicon.png"/>
    </Head>
    <h1 class="text-3xl font-bold mb-4">About US</h1>
    <div class="mx-auto p-8">
      <h2><b>Company</b></h2>
      <p v-if="about.company_name">{{ about.company_name }}</p>
      <br />
      <h2><b>Description</b></h2>
      <p v-if="about.description">{{ about.description }}</p>
      <br />
      <h2><b>Mission</b></h2>
      <p v-if="about.mission">{{ about.mission }}</p>
      <br />
      <h2><b>Vision</b></h2>
      <p v-if="about.vision">{{ about.vision }}</p>
    </div>
  </div>
</template>

<script setup>
const { data: about } = await useFetch("/api/about", {
  baseURL: "http://localhost:3000",
});
</script>
