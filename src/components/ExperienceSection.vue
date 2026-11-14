<script setup>
import { lang } from '../composables/useLang.js'
import { content } from '../data/content.js'
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <div class="section-head">
        <span class="n">02</span>
        <h2>{{ content.experience[lang].title }}</h2>
      </div>

      <ul class="list">
        <li v-for="(item, i) in content.experience[lang].items" :key="i" class="item">
          <div class="side">
            <span class="tag-num mono">{{ item.tag }}</span>
            <span class="period mono">{{ item.period }}</span>
          </div>
          <div class="body">
            <h3>{{ item.role }} <span class="company">· {{ item.company }}</span></h3>
            <p class="place mono">{{ item.place }}</p>
            <ul class="bullets">
              <li v-for="(b, j) in item.bullets" :key="j">{{ b }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.item {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 32px;
  padding: 28px 0;
  border-top: 1px solid var(--border);
}

.item:last-child {
  border-bottom: 1px solid var(--border);
}

.side {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tag-num {
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 700;
}

.period {
  font-size: 0.76rem;
  color: var(--text-faint);
}

h3 {
  font-size: 1.1rem;
  margin: 0 0 4px;
}

.company {
  color: var(--text-dim);
  font-weight: 400;
  font-size: 0.95rem;
}

.place {
  font-size: 0.78rem;
  color: var(--text-faint);
  margin: 0 0 12px;
}

.bullets li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 8px;
  color: var(--text-dim);
}

.bullets li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent);
}

@media (max-width: 680px) {
  .item {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .side {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
