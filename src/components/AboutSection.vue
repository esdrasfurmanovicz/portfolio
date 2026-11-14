<script setup>
import { lang } from '../composables/useLang.js'
import { content } from '../data/content.js'
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <div class="section-head">
        <span class="n">01</span>
        <h2>{{ content.about[lang].title }}</h2>
      </div>

      <div class="layout">
        <div class="text">
          <p v-for="(p, i) in content.about[lang].paragraphs" :key="i" v-html="p" />
        </div>

        <div class="panel terminal">
          <div class="terminal-bar">
            <span class="dot" /><span class="dot" /><span class="dot" />
          </div>
          <div class="terminal-body mono">
            <p v-for="(line, i) in content.about[lang].terminal" :key="i">
              <span class="key">{{ line.k }}:</span> <span class="val">{{ line.v }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 48px;
  align-items: start;
}

.text p {
  font-size: 1.02rem;
}

.terminal-bar {
  display: flex;
  gap: 6px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--border);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border-strong);
}

.terminal-body {
  padding: 18px 18px 20px;
}

.terminal-body p {
  margin: 0 0 10px;
  font-size: 0.82rem;
  color: var(--text-dim);
}

.terminal-body p:last-child {
  margin-bottom: 0;
}

.key {
  color: var(--accent);
}

.key::before {
  content: '> ';
  color: var(--text-faint);
}

.val {
  color: var(--text);
}

@media (max-width: 760px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
