<template>
  <header
    class="flex justify-between items-center flex-wrap container m-auto px-3 py-7 bg-cyan-600 rounded-md max-md:justify-center"
  >
    <div class="flex gap-4 items-center max-md:mx-auto max-md:my-2">
      <img
        src="../assets/istockphoto-2048177034-1024x1024.jpg"
        class="max-w-32 rounded-md max-md:hidden"
      />
      <router-link
        :to="{ name: 'home' }"
        class=" h-full bg-cyan-50 p-3  rounded-full hover:bg-cyan-700 hover:text-cyan-50 border-2 border-cyan-50"
        >HOME</router-link
      >
    </div>
    <div class="flex gap-4 max-md:gap-1">
      <router-link
        :to="{ name: 'byname' }"
        class=" h-full bg-cyan-50 p-3 max-md:p-1 max-md:text-sm rounded-full hover:bg-cyan-700 hover:text-cyan-50 border-2 boreder-bg-cyan-900"
      >
        meals by name
      </router-link>
      <router-link
        :to="{ name: 'byletter' }"
        class=" h-full bg-cyan-50 p-3 max-md:p-1 max-md:text-sm rounded-full hover:bg-cyan-700 hover:text-cyan-50 border-2 boreder-bg-cyan-900"
      >
        meals by letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class=" h-full bg-cyan-50 p-3 max-md:p-1 max-md:text-sm rounded-full hover:bg-cyan-700 hover:text-cyan-50 border-2 boreder-bg-cyan-900"
      >
        meals by ingredients
      </router-link>
    </div>
  </header>
</template>
