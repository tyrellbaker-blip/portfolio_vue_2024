<!-- src/views/ContactView.vue -->
<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <p>Feel free to reach out to me for any opportunities or questions:</p>

    <div class="contact-info">
      <p>Email: <a href="mailto:tybaker@csumb.edu">tybaker@csumb.edu</a></p>
      <p>Phone: (619) 991 2367</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/tyrell-baker-4254a0245/" target="_blank">Tyrell Baker</a></p>
    </div>

    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>

      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', this.form);
      alert('Thank you for your message! I\'ll get back to you soon.');
      this.form = { name: '', email: '', message: '' };
    }
  }
}
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #42b983;
}

.contact-info {
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  height: 150px;
}

.submit-btn {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #3aa876;
}
</style>