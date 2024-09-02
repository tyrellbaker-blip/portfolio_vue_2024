<!-- src/views/ResearchView.vue -->
<template>
  <div class="research">
    <h1>Research Interests</h1>
    <ul>
      <li>Machine Learning in Education</li>
      <li>Lifelong Learning and Catastrophic Forgetting</li>
      <li>AI-powered Personalized Tutoring Systems</li>
      <li>Increasing Diversity in Computer Science Academia</li>
    </ul>
    <p>My goal is to develop AI solutions that can adapt to individual learning styles and needs, potentially revolutionizing access to quality education, especially in underserved communities.</p>

    <h2>Current Focus</h2>
    <p>I am particularly interested in addressing the challenges faced by students like Henrique from Malaysia, who I met during my time as a Head TA for Stanford's Code in Place. His determination to learn programming despite significant obstacles highlighted the urgent need for accessible, personalized education solutions.</p>
    <p>I'm exploring how AI and machine learning can be leveraged to create flexible, adaptable, and persistent AI tutors that can fundamentally change the way teachers teach and students learn, especially in resource-constrained environments.</p>
  </div>
</template>

<script>
export default {
  name: 'ResearchView'
}
</script>

<style scoped>
.research {
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