<script setup>
import { lang } from '../composables/useLang.js'
import { content } from '../data/content.js'
</script>

<template>
  <section id="education" class="section">
    <div class="container">
      <div class="section-head">
        <span class="n">05</span>
        <h2>{{ content.education[lang].title }}</h2>
      </div>

      <div class="layout">
        <div class="col">
          <article v-for="(d, i) in content.education[lang].degrees" :key="i" class="entry">
            <h3>{{ d.name }}</h3>
            <p class="place">{{ d.place }}</p>
            <span class="period mono">{{ d.period }}</span>
          </article>
        </div>

        <div class="col">
          <article v-for="(c, i) in content.education[lang].certifications" :key="i" class="entry">
            <h3>{{ c.name }}</h3>
            <p class="place">{{ c.place }}</p>
            <span class="period mono">{{ c.period }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.entry {
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--border);
}

.entry:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

h3 {
  font-size: 1rem;
  margin-bottom: 4px;
}

.place {
  font-size: 0.86rem;
  margin-bottom: 6px;
}

.period {
  font-size: 0.74rem;
  color: var(--accent);
  font-weight: 600;
}

@media (max-width: 760px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
