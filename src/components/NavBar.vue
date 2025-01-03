<template>
    <nav class="navbar">
      <div class="logo">Design Archive</div>
      <div class="menu" @click="toggleMenu">
        <span></span><span></span><span></span>
      </div>
      <ul :class="{ open: isOpen }">
        <li><router-link to="/">Home</router-link></li>
        
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li class="link"><router-link to="/work">Work with Us</router-link></li>
      </ul>
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
        this.isOpen = !this.isOpen;
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
    /*background-color: #f8f8f8; */
  }
  
  .menu {
    cursor: pointer;
    display: none; /* Initially hide the hamburger menu */
    flex-direction: column;
    gap: 4px;
  }
  li .link {
    
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
    width: 40%; /* Cover 40% of the space on larger screens */
  }
  
  ul.open {
    display: block;
  }
  ul li a {
    text-decoration: none;
    color: #242424;
  }
  
  @media (max-width: 768px) {
    .menu {
      display: flex; /* Show the hamburger menu on smaller screens */
    }
  
    ul {
      display: none; /* Hide the menu items initially on smaller screens */
      flex-direction: column;
      width: auto; /* Reset width for mobile view */
    }
  
    ul.open {
      display: block; /* Show the menu items when the menu is open */
    }
  }
  </style>