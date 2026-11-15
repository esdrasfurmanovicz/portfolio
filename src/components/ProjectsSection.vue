<script setup>
import { computed, ref } from 'vue'
import { lang } from '../composables/useLang.js'
import { content } from '../data/content.js'
import GalleryModal from './GalleryModal.vue'

const ui = {
  pt: { open: (n) => `Abrir galeria de fotos de ${n}`, photos: 'fotos' },
  en: { open: (n) => `Open photo gallery for ${n}`, photos: 'photos' },
}
const t = computed(() => ui[lang.value] || ui.pt)

// a foto de destaque do card é a primeira da galeria; as demais vêm de `gallery`
function slides(p) {
  return [{ src: p.image, caption: p.name }, ...(p.gallery || [])]
}

const gallery = ref({ open: false, items: [], title: '', path: '' })
function openGallery(p) {
  gallery.value = { open: true, items: slides(p), title: p.name, path: p.path }
}
function closeGallery() {
  gallery.value.open = false
}
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
          <button type="button" class="thumb-btn" :aria-label="t.open(p.name)" @click="openGallery(p)">
            <img :src="p.image" :alt="p.name" class="thumb" loading="lazy" />
            <span class="thumb-hint" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <circle cx="8.5" cy="10" r="1.6" />
                <path d="M21 16l-5-5-8 8" />
              </svg>
              <span class="mono">{{ slides(p).length }} {{ t.photos }}</span>
            </span>
          </button>
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

            <div v-if="p.links && p.links.length" class="links mono">
              <a v-for="l in p.links" :key="l.href" :href="l.href" target="_blank" rel="noopener">{{ l.label }} ↗</a>
            </div>
          </div>
        </article>
      </div>
    </div>

    <GalleryModal
      :open="gallery.open"
      :items="gallery.items"
      :title="gallery.title"
      :path="gallery.path"
      @close="closeGallery"
    />
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 22px;
}

/* cards comuns dividem a linha em duas metades; os destacados ocupam a linha inteira */
.project {
  grid-column: span 3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.thumb-btn {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  border: none;
  border-bottom: 1px solid var(--border);
  background: var(--bg-raised);
  overflow: hidden;
  cursor: zoom-in;
  font: inherit;
  color: inherit;
}

.thumb {
  display: block;
  width: 100%;
  aspect-ratio: 5 / 2; /* mesmo formato das capturas (1600x640), sem cortar */
  height: auto;
  object-fit: cover;
  filter: grayscale(0.4);
  transition: transform 0.45s ease, filter 0.3s ease;
}

/* escurece a imagem e mostra o ícone da galeria no canto inferior direito */
.thumb-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(8, 9, 10, 0.55), rgba(8, 9, 10, 0) 55%);
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
}

.thumb-hint {
  position: absolute;
  right: 12px;
  bottom: 12px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px 7px 10px;
  border-radius: 999px;
  background: var(--accent);
  color: var(--accent-contrast);
  font-size: 0.74rem;
  font-weight: 700;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.45);
  opacity: 0;
  transform: translateY(8px) scale(0.96);
  transition: opacity 0.25s ease, transform 0.25s ease;
  pointer-events: none;
}

.thumb-btn:hover .thumb,
.thumb-btn:focus-visible .thumb {
  transform: scale(1.035);
  filter: grayscale(0);
}
.thumb-btn:hover::after,
.thumb-btn:focus-visible::after { opacity: 1; }
.thumb-btn:hover .thumb-hint,
.thumb-btn:focus-visible .thumb-hint { opacity: 1; transform: none; }
.thumb-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }

/* telas de toque não têm hover: o ícone fica sempre visível */
@media (hover: none) {
  .thumb-hint { opacity: 1; transform: none; }
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

.featured .thumb-btn {
  width: 54%;
  flex-shrink: 0;
  border-bottom: none;
  border-right: 1px solid var(--border);
}

.featured .thumb {
  height: 100%;
  min-height: 340px;
  aspect-ratio: auto;
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

  .project,
  .project.featured {
    grid-column: 1 / -1;
  }

  .project.featured {
    flex-direction: column;
  }

  .featured .thumb-btn {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .featured .thumb {
    min-height: 0;
    height: auto;
    aspect-ratio: 1 / 1;
  }

  .featured .body {
    padding: 20px;
  }
}
</style>
