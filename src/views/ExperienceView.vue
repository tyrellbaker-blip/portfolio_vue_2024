<!-- src/views/ExperienceView.vue -->
<template>
  <div class="experience">
    <h1>Key Experiences</h1>
    <div v-for="(experience, index) in experiences" :key="index" class="experience-item">
      <h2>{{ experience.title }}</h2>
      <p><strong>{{ experience.organization }}</strong></p>
      <p>{{ experience.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceView',
  data() {
    return {
      experiences: [
        {
          title: 'Head Teaching Assistant',
          organization: 'Stanford\'s Code in Place',
          description: 'Led and managed a team of 55 volunteer instructors for two summers, teaching programming to a global audience and developing comprehensive curricula.'
        },
        {
          title: 'Research Assistant',
          organization: 'Deep Data Lab, University of California, Irvine',
          description: 'Worked on predictive modeling for exercise behavior based on Behavioral Inhibition and Behavioral Activation System scores.'
        },
        {
          title: 'Data Science Intern',
          organization: 'Carnegie Institution for Science',
          description: 'Analyzed the FLUXNET-CH4 dataset, applying data cleaning, preprocessing, and linear regression modeling techniques.'
        },
        {
          title: 'Software Development Intern',
          organization: 'Stanford Linear Accelerator Center National Accelerator Laboratory',
          description: 'Integrated the Nelder-Mead optimization algorithm into existing accelerator software, enhancing system capabilities.'
        },
        {
          title: 'CalBridge Scholar',
          organization: 'CalBridge Program',
          description: 'Selected for this highly competitive program aimed at helping underrepresented students pursue PhDs in physical sciences.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.experience {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

h1 {
  color: #42b983;
}

.experience-item {
  margin-bottom: 30px;
  border-bottom: 1px solid #42b983;
  padding-bottom: 20px;
}

.experience-item:last-child {
  border-bottom: none;
}

h2 {
  color: #e0e0e0;
}
</style>