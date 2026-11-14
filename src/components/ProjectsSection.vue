<script setup>
import { lang } from '../composables/useLang.js'
import { content } from '../data/content.js'
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-head">
        <span class="n">03</span>
        <h2>{{ content.projects[lang].title }}</h2>
      </div>

      <div class="grid">
        <article v-for="(p, i) in content.projects[lang].items" :key="i" class="card project" :class="{ featured: p.featured }">
          <img :src="p.image" :alt="p.name" class="thumb" loading="lazy" />
          <div class="body">
            <p class="path mono">{{ p.path }}</p>
            <h3>{{ p.name }}</h3>

            <dl>
              <dt class="mono">{{ content.projects[lang].labels.problem }}</dt>
              <dd>{{ p.problem }}</dd>
              <dt class="mono">{{ content.projects[lang].labels.solution }}</dt>
              <dd>{{ p.solution }}</dd>
              <dt class="mono">{{ content.projects[lang].labels.result }}</dt>
              <dd class="result">{{ p.result }}</dd>
            </dl>

            <div class="stack">
              <span v-for="s in p.stack" :key="s" class="tag">{{ s }}</span>
            </div>

            <div class="links mono">
              <a v-for="l in p.links" :key="l.href" :href="l.href" target="_blank" rel="noopener">{{ l.label }} ↗</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.project {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.thumb {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid var(--border);
  filter: grayscale(0.4);
}

.body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.path {
  font-size: 0.72rem;
  color: var(--accent);
  margin: 0;
}

h3 {
  font-size: 1.02rem;
  margin: 0;
}

dl {
  margin: 4px 0 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

dt {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-faint);
  font-weight: 700;
}

dd {
  margin: 0 0 8px;
  font-size: 0.86rem;
  color: var(--text-dim);
}

dd.result {
  color: var(--text);
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.links {
  margin-top: auto;
  display: flex;
  gap: 14px;
  padding-top: 6px;
}

.links a {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text);
}

.links a:hover {
  color: var(--accent);
}

/* projeto em destaque: ocupa a largura toda, com a imagem grande ao lado do texto */
.project.featured {
  grid-column: 1 / -1;
  flex-direction: row;
}

.featured .thumb {
  width: 54%;
  height: auto;
  min-height: 340px;
  flex-shrink: 0;
  border-bottom: none;
  border-right: 1px solid var(--border);
  filter: none;
}

.featured .body {
  padding: 28px;
  justify-content: center;
}

.featured h3 {
  font-size: 1.35rem;
}

@media (max-width: 960px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .project.featured {
    flex-direction: column;
  }

  .featured .thumb {
    width: 100%;
    min-height: 0;
    height: auto;
    aspect-ratio: 1 / 1;
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .featured .body {
    padding: 20px;
  }
}
</style>
