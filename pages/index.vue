<template>
  <div class="container mx-auto p-8">
    <Head>
      <Title>Home</Title>
      <Meta name="description" content="Users Data" />
      <Link rel="icon" type="images/x-icon" href="/img/iicon.png"/>
    </Head>
    <h1 class="text-3xl font-bold mb-4">Home Page</h1>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border rounded-lg">
        <thead class="bg-gray-200">
          <tr>
            <th class="py-3 px-6 border-b">Id</th>
            <th class="py-3 px-6 border-b">Email</th>
          </tr>
        </thead>
        <tbody v-if="users && users.length >= 1">
          <tr
            v-for="(user, index) in users"
            :key="index"
            :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'"
          >
            <td class="py-3 px-6 border-b">{{ user._id }}</td>
            <td class="py-3 px-6 border-b">{{ user.email }}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="2" class="py-4 px-6 text-center text-gray-500">
              No Data....
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const users = ref();

const fetchUserData = async () => {
  const { data: userData } = await useFetch("api/users", {
    baseURL: "http://localhost:3000",
  });
  users.value = userData.value;
};

fetchUserData();
</script>
