<!-- src/views/ResumeView.vue -->
<template>
  <div class="resume">
    <h1>Resume</h1>
    <p>Download my full resume as a PDF:</p>
    <a href="/Tyrell_Baker_Resume.pdf" download class="download-btn">Download Resume</a>

    <h2>Summary</h2>
    <p>{{ summary }}</p>

    <h2>Experience</h2>
    <div v-for="(job, index) in experience" :key="index" class="job">
      <h3>{{ job.title }}</h3>
      <p>{{ job.company }} | {{ job.date }}</p>
      <ul>
        <li v-for="(responsibility, i) in job.responsibilities" :key="i">{{ responsibility }}</li>
      </ul>
    </div>

    <h2>Education</h2>
    <p>{{ education }}</p>

    <h2>Skills</h2>
    <p>{{ skills }}</p>
  </div>
</template>

<script>
export default {
  name: 'ResumeView',
  data() {
    return {
      summary: 'Multifaceted and well-organized Data Scientist with a strong foundation in data analysis, statistical modeling, and machine learning techniques. Proficient in Python, R, and SQL, with hands-on experience in data preprocessing, visualization, and predictive model development.',
      experience: [
        {
          title: 'Data Science Research Fellow',
          company: 'Deep Data Laboratory, University of California, Irvine',
          date: '2024',
          responsibilities: [
            'Analyzed over four million data points among adolescents to examine changes in intrinsic motivation and physical activity over time.',
            'Investigated gender differences, baseline fitness levels, and BMI percentiles in response to interventions.',
            'Conducted detailed heart rate data analysis to evaluate improvements in participants\' ability to stay within target heart rate zones.',
            'Performed mediation analysis to determine if intrinsic motivation changes influenced physical activity.'
          ]
        },
        // Add other job experiences here...
      ],
      education: 'Bachelor of Science in Computer Science - California State University, Monterey Bay, Marina, CA',
      skills: 'Data Analysis, Statistical Modeling, Machine Learning, Data Preprocessing, Data Visualization, Model Development, Data Cleaning, Predictive Modeling, Python, R, SQL, Pandas, NumPy, SciPy, Matplotlib, Seaborn'
    }
  }
}
</script>

<style scoped>
.resume {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1, h2 {
  color: #42b983;
}

.download-btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.job {
  margin-bottom: 2rem;
}

ul {
  padding-left: 1rem;
}

li {
  margin-bottom: 0.5rem;
}
</style>