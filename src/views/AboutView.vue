<!-- src/views/AboutView.vue -->
<template>
  <div class="about">
    <h1>About Me</h1>
    <p>I'm Tyrell Baker, a resilient and passionate Computer Science scholar with a unique journey. From overcoming early health challenges and socioeconomic barriers to becoming a CalBridge scholar, my path has been defined by perseverance and a drive to make a difference in tech education and diversity.</p>
    <p>My research interests lie in Machine Learning, particularly in Lifelong Learning and Catastrophic Forgetting, inspired by my experiences as an educator and my vision for more accessible, personalized education solutions.</p>

    <h2>My Journey</h2>
    <p>Born prematurely in 1993 and diagnosed with cerebral palsy at age two, my life has been a testament to overcoming obstacles. Growing up in Bethlehem, Georgia, I faced numerous challenges, including being one of the few Black families in a rural area and navigating life with a disability.</p>
    <p>After initial struggles in college and years of working various jobs, a pivotal moment came during the COVID-19 pandemic. Living in a Travelodge with my family and driving for DoorDash, I made the decision to return to education, this time with renewed determination and purpose.</p>
    <p>Discovering my passion for Computer Science at Foothill College led me to tutoring and teaching roles, including as a Head TA for Stanford's Code in Place. These experiences, coupled with the mentorship of Dr. Joshua Gross, guided me towards pursuing a PhD and a career in academia.</p>
    <p>Today, as a CalBridge scholar, I'm on the path to becoming a Computer Science professor, driven by the desire to increase diversity in academia and create innovative solutions in AI and education.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

h1, h2 {
  color: #42b983;
}
</style>