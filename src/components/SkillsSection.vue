<script setup>
import { lang } from '../composables/useLang.js'
import { content } from '../data/content.js'
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-head">
        <span class="n">04</span>
        <h2>{{ content.skills[lang].title }}</h2>
      </div>

      <div class="grid">
        <div v-for="(g, i) in content.skills[lang].groups" :key="i" class="group">
          <h3 class="mono">// {{ g.name }}</h3>
          <ul class="items">
            <li v-for="item in g.items" :key="item" class="mono">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
}

.group {
  padding: 22px 20px;
  border-left: 1px solid var(--border);
}

.group:first-child {
  border-left: none;
}

h3 {
  font-size: 0.82rem;
  color: var(--accent);
  margin-bottom: 14px;
}

.items li {
  font-size: 0.86rem;
  color: var(--text-dim);
  padding: 4px 0;
}

.items li::before {
  content: '- ';
  color: var(--text-faint);
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }

  .group:nth-child(3) {
    border-left: none;
  }

  .group:nth-child(odd) {
    border-left: none;
  }

  .group {
    border-top: 1px solid var(--border);
  }

  .group:first-child,
  .group:nth-child(2) {
    border-top: none;
  }
}

@media (max-width: 520px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .group {
    border-left: none !important;
  }

  .group:not(:first-child) {
    border-top: 1px solid var(--border);
  }
}
</style>
