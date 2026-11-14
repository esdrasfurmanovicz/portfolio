<script setup>
import { ref } from 'vue'
import { lang } from '../composables/useLang.js'
import { content } from '../data/content.js'

const copied = ref(false)

async function copyValue(text) {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
  } catch {
    // clipboard unavailable, ignore
  }
}
</script>

<template>
  <section id="contact" class="section no-border">
    <div class="container">
      <div class="section-head">
        <span class="n">06</span>
        <h2>{{ content.contact[lang].title }}</h2>
      </div>

      <p class="description">{{ content.contact[lang].description }}</p>

      <div class="panel terminal">
        <div class="terminal-bar">
          <span class="dot" /><span class="dot" /><span class="dot" />
        </div>
        <div class="terminal-body mono">
          <p v-for="(line, i) in content.contact[lang].lines" :key="i">
            <span class="prefix">$ contact</span> <span class="flag">{{ line.flag }}</span>
            <a v-if="line.href" :href="line.href" target="_blank" rel="noopener" class="val link">{{ line.value }}</a>
            <button v-else-if="line.copy" type="button" class="val link as-button" @click="copyValue(line.value)">
              {{ line.value }}<span v-if="copied" class="ok"> ✓</span>
            </button>
            <span v-else class="val">{{ line.value }}</span>
          </p>
        </div>
      </div>

      <div class="actions">
        <a :href="`mailto:${content.profile.email}`" target="_blank" rel="noopener" class="btn btn-primary">email</a>
        <a :href="content.profile.linkedin" target="_blank" rel="noopener" class="btn">linkedin</a>
        <a :href="content.profile.github" target="_blank" rel="noopener" class="btn">github</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-border {
  border-bottom: none;
}

.description {
  max-width: 56ch;
  margin-bottom: 28px;
}

.terminal {
  max-width: 560px;
  margin-bottom: 28px;
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
  padding: 16px 18px;
}

.terminal-body p {
  margin: 0 0 10px;
  font-size: 0.84rem;
}

.terminal-body p:last-child {
  margin-bottom: 0;
}

.prefix {
  color: var(--text-faint);
}

.flag {
  color: var(--accent);
}

.val {
  color: var(--text);
  margin-left: 4px;
}

.val.link {
  text-decoration: underline;
  text-decoration-color: var(--border-strong);
  text-underline-offset: 3px;
}

.val.link:hover {
  color: var(--accent);
  text-decoration-color: var(--accent);
}

.as-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
}

.ok {
  color: var(--accent);
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
