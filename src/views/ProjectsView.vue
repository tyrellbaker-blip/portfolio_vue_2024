<template>
  <div class="projects">
    <h1>Projects and Experience</h1>

    <div class="project" v-for="(project, index) in projects" :key="index">
      <h2>{{ project.title }}</h2>
      <h3>{{ project.company }}</h3>
      <p class="date">{{ project.date }}</p>
      <ul>
        <li v-for="(detail, i) in project.details" :key="i">{{ detail }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        {
          title: 'Data Science Research Fellow',
          company: 'Deep Data Laboratory, University of California, Irvine',
          date: '2024',
          details: [
            'Analyzed over four million data points among adolescents to examine changes in intrinsic motivation and physical activity over time.',
            'Investigated gender differences, baseline fitness levels, and BMI percentiles in response to interventions.',
            'Conducted detailed heart rate data analysis to evaluate improvements in participants\' ability to stay within target heart rate zones.',
            'Performed mediation analysis to determine if intrinsic motivation changes influenced physical activity.'
          ]
        },
        {
          title: 'Data Science Intern',
          company: 'Carnegie Institution for Science, Washington, DC',
          date: '2023',
          details: [
            'Analyzed over 300 million data points from the FLUXNET-CH4 dataset, covering 79 global sites.',
            'Applied data cleaning and preprocessing techniques, using correlation coefficients for feature selection.',
            'Executed linear regression modeling with statsmodels on over 1.2 million time-series records.',
            'Visualized findings with Seaborn and Matplotlib, creating scatter plots, time series graphs, and heatmaps.'
          ]
        },
        {
          title: 'Head Teaching Assistant',
          company: 'Stanford University, Stanford, CA',
          date: '2023',
          details: [
            'Directed and supervised a team of 50 instructors for Stanford\'s global initiative, "Code in Place".',
            'Spearheaded the development of a comprehensive curriculum for the instruction team.',
            'Demonstrated technical expertise by swiftly resolving issues within Stanford\'s proprietary development environment.',
            'Collaborated with colleagues to identify, address, and prevent technical obstacles.'
          ]
        },
        {
          title: 'Software Development Intern',
          company: 'SLAC National Accelerator Laboratory, Stanford University, Menlo Park, CA',
          date: '2022',
          details: [
            'Incorporated the Nelder-Mead optimization function into the current accelerator software.',
            'Modified the existing Xopt GUI to facilitate the integration of Nelder-Mead for accelerator prediction.',
            'Spearheaded the successful rollout of the Xopt Nelder-Mead feature to a team of 150 accelerator operators.',
            'Collaborated closely with the team to provide technical expertise and troubleshoot issues.'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.project {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

h1, h2 {
  color: #42b983;
}

h3 {
  color: #2c3e50;
}

.date {
  font-style: italic;
  color: #666;
}

ul {
  padding-left: 1rem;
}

li {
  margin-bottom: 0.5rem;
}
</style>