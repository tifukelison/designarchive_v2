<template>
  <nav class="navbar flex justify-between items-center p-4 font-sora font-bold">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo_1.svg" alt="The Design Archive" class="w-12 md:w-20 lg:w-24 transition-width duration-300">
      </router-link>
    </div>
    <div class="menu md:hidden cursor-pointer flex flex-col gap-1" @click="toggleMenu">
      <span class="w-6 h-0.5 bg-black"></span>
      <span class="w-6 h-0.5 bg-black"></span>
      <span class="w-6 h-0.5 bg-black"></span>
    </div>
    <ul :class="{ 'flex': isOpen, 'hidden': !isOpen }" class="hidden md:flex gap-8 items-center flex-1 justify-center">
      <li><router-link to="/" class="hover:underline" @click="closeMenu">Home</router-link></li>
      <li><router-link to="/about" class="hover:underline" @click="closeMenu">About</router-link></li>
      <li><router-link to="/blog" class="hover:underline" @click="closeMenu">Blog</router-link></li>
      <li><router-link to="/what-we-do" class="hover:underline" @click="closeMenu">What We Do</router-link></li>
    </ul>
    <div class="hidden md:block">
      <router-link to="/work" class="underline">Work with Us</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log("works");
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Sora", serif;
  padding: 1rem;
  font-weight: 700;
  position: relative;
  z-index: 10; /* Ensure navbar is above other content */
}

.menu {
  cursor: pointer;
  display: none;
  flex-direction: column;
  gap: 4px;
}

.menu span {
  width: 25px;
  height: 3px;
  background-color: #000;
}

ul {
  list-style: none;
  display: flex;
  gap: 3rem;
  justify-content: center;
}

ul li a {
  text-decoration: none;
  color: #242424;
}

@media (max-width: 768px) {
  .menu {
    display: flex;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 20; /* Ensure menu button is above the menu */
  }

  ul {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 4rem;
    left: 0;
    background-color: white;
    padding: 1rem;
    z-index: 15; /* Ensure menu is above other content but below the button */
  }

  ul.flex {
    display: flex;
  }
}

.logo img {
  width: 50px;
  transition: width 0.3s ease;
}

@media (min-width: 768px) {
  .logo img {
    width: 75px;
  }
}

@media (min-width: 1024px) {
  .logo img {
    width: 100px;
  }
}
</style>
