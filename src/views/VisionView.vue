<!-- src/views/VisionView.vue -->
<template>
  <div class="vision">
    <h1>Vision and Goals</h1>
    <p>As an aspiring Computer Science professor, I aim to make significant contributions to the field and society:</p>
    <ul>
      <li>Increase diversity in academia, particularly in Computer Science</li>
      <li>Develop innovative AI solutions to level the playing field in STEM education</li>
      <li>Inspire and mentor students from underrepresented backgrounds</li>
      <li>Conduct groundbreaking research at the intersection of machine learning, cognitive science, and educational technology</li>
    </ul>

    <h2>Long-term Objectives</h2>
    <p>My ultimate goal is to transform unlikely scenarios into energizing opportunities at scale. By obtaining a PhD and becoming a professor, I hope to:</p>
    <ul>
      <li>Contribute to the mere 1.7% of Black tenure-track faculty at U.S. Ph.D.-granting institutions</li>
      <li>Serve as an inspiration for students from various underrepresented groups to envision themselves in academic leadership roles</li>
      <li>Create and implement AI-powered educational tools that can adapt to individual learning needs, making quality education more accessible</li>
      <li>Bridge the gap between cutting-edge AI research and practical applications in education</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VisionView'
}
</script>

<style scoped>
.vision {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

h1, h2 {
  color: #42b983;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

li:before {
  content: '•';
  color: #42b983;
  position: absolute;
  left: 0;
}
</style>