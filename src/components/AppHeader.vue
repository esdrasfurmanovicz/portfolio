<script setup>
import { ref } from 'vue'
import { lang, toggleLang } from '../composables/useLang.js'
import { content } from '../data/content.js'

const open = ref(false)

function closeMenu() {
  open.value = false
}
</script>

<template>
  <header class="header">
    <div class="container bar">
      <a href="#top" class="logo mono" @click="closeMenu">
        <span class="bracket">[</span>ef<span class="bracket">]</span><span class="cursor">_</span>
      </a>

      <nav class="nav mono" :class="{ open }">
        <a v-for="item in content.nav[lang]" :key="item.id" :href="`#${item.id}`" @click="closeMenu">
          <span class="n">{{ item.n }}</span>{{ item.label }}
        </a>
      </nav>

      <div class="actions">
        <button class="lang-toggle mono" type="button" @click="toggleLang" :aria-label="'Toggle language'">
          {{ lang === 'pt' ? 'en' : 'pt' }}
        </button>
        <button class="burger" type="button" @click="open = !open" aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(11, 12, 13, 0.88);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.02em;
}

.logo .bracket {
  color: var(--text-faint);
}

.logo .cursor {
  color: var(--accent);
}

.nav {
  display: flex;
  gap: 26px;
}

.nav a {
  font-size: 0.82rem;
  color: var(--text-dim);
  transition: color 0.15s ease;
}

.nav a:hover {
  color: var(--accent);
}

.nav .n {
  color: var(--text-faint);
  margin-right: 6px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.lang-toggle {
  border: 1px solid var(--border-strong);
  background: transparent;
  color: var(--text);
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 0.74rem;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
}

.lang-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.burger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.burger span {
  width: 20px;
  height: 2px;
  background: var(--text);
}

@media (max-width: 760px) {
  .nav {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--bg-raised);
    border-bottom: 1px solid var(--border);
    padding: 16px 24px;
    gap: 16px;
    display: none;
  }

  .nav.open {
    display: flex;
  }

  .burger {
    display: flex;
  }
}
</style>
