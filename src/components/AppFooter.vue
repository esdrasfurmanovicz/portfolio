<script setup>
import { lang } from '../composables/useLang.js'
import { content } from '../data/content.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container row mono">
      <p>© {{ year }} {{ content.profile.name }} · {{ content.footer[lang].rights }}</p>
      <p class="built">{{ content.footer[lang].built }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 28px 0;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

p {
  margin: 0;
  font-size: 0.74rem;
  color: var(--text-faint);
}
</style>
