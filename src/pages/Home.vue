<template>
  <div class="home">
    <div class="flex items-center justify-center mt-4">
    <div class="relative flex items-center">
      <span class="absolute flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
      <span class="ml-6 text-sm text-gray-700" style="font-family: 'Inter';">3 spots left</span>
    </div>
  </div>
    <section class="hero">
      <h1>Building Brands That Create History</h1>
      <p>Helping people do what they love</p>
      <router-link to="/work" class="btn">Explore Portfolio</router-link>
    </section>

    <section class="services">
      <h2>Our Services</h2>
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <section class="portfolio-preview">
      <h2>Featured Works</h2>
      <div class="portfolio-grid">
        <div v-for="(project, index) in featuredProjects" :key="index" class="portfolio-card">
          <img :src="project.image" :alt="project.title" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      services: [
        { title: "Brand Identity", description: "Crafting memorable visual brands." },
        { title: "Content Design", description: "Designing content that converts." },
        { title: "Educational Content", description: "Empowering through insights." },
      ],
      featuredProjects: [
        {
          title: "Luxury Branding Project",
          description: "High-end branding for luxury brands.",
          image: "image1.png",
        },
        {
          title: "Tech Startup Identity",
          description: "Modern and sleek design for tech startups.",
          image: "image2.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');

/* Add hero, services, and portfolio styling */
.hero {
  text-align: center;
  padding: 2rem;
  /* background-color: #f5f5f5; */
  font-family: 'Sora', serif;
}
 h2, h3 {
  font-family: 'Sora';
  color: #242424;
  font-weight: 600;
 }

.hero h1 {
  font-size: 2.0rem;
  font-weight: bold;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
  font-family: 'Inter';
  
}

.btn {
  margin-top: 0.5rem;
  font-family: 'Inter';
  padding: 0.5rem 1rem;
  background-color: #242424;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #444;
}

.services {
  padding: 2rem;
  /* background: #fff; */
}

.services h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.services-grid {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.service-card {
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
  text-align: center;
}

.portfolio-preview {
  text-align: center;
  padding: 3rem 1rem;
  /* background-color: #f5f5f5; */
}

.portfolio-preview h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #222;
}

.portfolio-grid {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.portfolio-item {
  flex: 1 1 30%;
  max-width: 300px;
  /* background-color: #fff; */
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

</style>
