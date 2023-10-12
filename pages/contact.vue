<template>
  <div class="container mx-auto p-8">
    <Head>
      <Title>Contact</Title>
      <Meta name="description" :content="contact.description" />
      <Link rel="icon" type="images/x-icon" href="/img/iicon.png"/>
    </Head>
    <h1 class="text-3xl font-bold mb-4">Contact US</h1>
    <div class="mx-auto p-8">
      <h2><b>Company</b></h2>
      <p v-if="contact.company_name">{{ contact.company_name }}</p>
      <br />
      <h2><b>Description</b></h2>
      <p v-if="contact.description">{{ contact.description }}</p>
      <br />
      <h2><b>Email</b></h2>
      <p v-if="contact.email">{{ contact.email }}</p>
      <br />
      <h2><b>Phone</b></h2>
      <p v-if="contact.phone">{{ contact.phone }}</p>
    </div>
  </div>
</template>

<script setup>
const { data: contact } = await useFetch("/api/contact", {
  baseURL: "http://localhost:3000",
});
</script>
