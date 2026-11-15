<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { lang } from '../composables/useLang.js'

const props = defineProps({
  open: { type: Boolean, default: false },
  items: { type: Array, default: () => [] }, // [{ src, caption }]
  title: { type: String, default: '' },
  path: { type: String, default: '' },
  start: { type: Number, default: 0 },
})
const emit = defineEmits(['close'])

const labels = {
  pt: { close: 'Fechar galeria', prev: 'Foto anterior', next: 'Próxima foto', thumbs: 'Miniaturas', of: 'de' },
  en: { close: 'Close gallery', prev: 'Previous photo', next: 'Next photo', thumbs: 'Thumbnails', of: 'of' },
}
const t = computed(() => labels[lang.value] || labels.pt)

const index = ref(0)
const direction = ref('next') // controla o sentido da animação
const dialog = ref(null)
const closeBtn = ref(null)
const strip = ref(null)
let opener = null
let touchX = null

const current = computed(() => props.items[index.value] || null)
const counter = computed(() => String(index.value + 1).padStart(2, '0') + ' / ' + String(props.items.length).padStart(2, '0'))
const single = computed(() => props.items.length <= 1)

function go(step) {
  if (single.value) return
  direction.value = step > 0 ? 'next' : 'prev'
  index.value = (index.value + step + props.items.length) % props.items.length
}
function goTo(i) {
  if (i === index.value) return
  direction.value = i > index.value ? 'next' : 'prev'
  index.value = i
}

function onKey(e) {
  if (!props.open) return
  if (e.key === 'Escape') { e.preventDefault(); emit('close') }
  else if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
  else if (e.key === 'Home') { e.preventDefault(); goTo(0) }
  else if (e.key === 'End') { e.preventDefault(); goTo(props.items.length - 1) }
  else if (e.key === 'Tab') trapFocus(e)
}

// mantém o foco do teclado dentro da galeria enquanto ela está aberta
function trapFocus(e) {
  const focusables = dialog.value?.querySelectorAll('button:not([disabled])')
  if (!focusables || !focusables.length) return
  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
}

function onTouchStart(e) { touchX = e.changedTouches[0].clientX }
function onTouchEnd(e) {
  if (touchX === null) return
  const dx = e.changedTouches[0].clientX - touchX
  touchX = null
  if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
}

function preload(i) {
  const item = props.items[(i + props.items.length) % props.items.length]
  if (item) { const img = new Image(); img.src = item.src }
}

function scrollThumbIntoView() {
  nextTick(() => {
    const el = strip.value?.querySelector('[aria-current="true"]')
    el?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  })
}

watch(index, (i) => { preload(i + 1); preload(i - 1); scrollThumbIntoView() })

watch(
  () => props.open,
  async (isOpen) => {
    if (isOpen) {
      index.value = Math.min(Math.max(props.start, 0), Math.max(props.items.length - 1, 0))
      opener = document.activeElement
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onKey)
      await nextTick()
      closeBtn.value?.focus()
      preload(index.value + 1)
      preload(index.value - 1)
      scrollThumbIntoView()
    } else {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      opener?.focus?.()
    }
  },
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="gal">
      <div v-if="open" class="gal-overlay" @click.self="emit('close')">
        <div
          ref="dialog"
          class="gal"
          role="dialog"
          aria-modal="true"
          :aria-label="title"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
        >
          <header class="gal-bar">
            <p class="gal-path mono">
              <span class="gal-dot"></span>{{ path }}<span class="gal-sep">/</span>galeria
            </p>
            <p class="gal-title">{{ title }}</p>
            <p class="gal-count mono" aria-live="polite">{{ counter }}</p>
            <button ref="closeBtn" type="button" class="gal-close" :aria-label="t.close" @click="emit('close')">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>

          <div class="gal-stage" @click.self="emit('close')">
            <button v-if="!single" type="button" class="gal-nav gal-prev" :aria-label="t.prev" @click="go(-1)">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
            </button>

            <Transition :name="'slide-' + direction" mode="out-in">
              <figure v-if="current" :key="current.src" class="gal-figure">
                <img :src="current.src" :alt="current.caption" class="gal-img" draggable="false" />
              </figure>
            </Transition>

            <button v-if="!single" type="button" class="gal-nav gal-next" :aria-label="t.next" @click="go(1)">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          <p v-if="current" class="gal-caption">{{ current.caption }}</p>

          <div v-if="!single" ref="strip" class="gal-strip" role="group" :aria-label="t.thumbs">
            <button
              v-for="(it, i) in items"
              :key="it.src"
              type="button"
              class="gal-thumb"
              :class="{ active: i === index }"
              :aria-current="i === index ? 'true' : undefined"
              :aria-label="`${i + 1} ${t.of} ${items.length}: ${it.caption}`"
              @click="goTo(i)"
            >
              <img :src="it.src" alt="" loading="lazy" draggable="false" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.gal-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(10px, 3vw, 36px);
  background: rgba(5, 6, 7, 0.9);
  backdrop-filter: blur(8px);
}

.gal {
  width: min(1180px, 100%);
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 0;
}

/* barra superior no estilo "terminal" do portfólio */
.gal-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 8px 8px 16px;
  background: var(--bg-raised);
  border: 1px solid var(--border);
  border-radius: 10px;
}
.gal-path {
  margin: 0;
  font-size: 0.74rem;
  color: var(--accent);
  white-space: nowrap;
}
.gal-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent);
}
.gal-sep { color: var(--text-faint); margin: 0 2px; }
.gal-title {
  margin: 0;
  flex: 1;
  min-width: 0;
  font-weight: 600;
  font-size: 0.92rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.gal-count {
  margin: 0;
  font-size: 0.78rem;
  color: var(--text-dim);
  padding: 3px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
}
.gal-close {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}
.gal-close:hover { background: var(--accent); border-color: var(--accent); color: var(--accent-contrast); }

/* palco da imagem */
.gal-stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  flex: 1;
}
.gal-figure {
  margin: 0;
  display: flex;
  justify-content: center;
  max-width: 100%;
}
.gal-img {
  display: block;
  max-width: 100%;
  max-height: calc(100vh - 290px);
  min-height: 160px;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid var(--border-strong);
  background: var(--surface);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  user-select: none;
}

.gal-nav {
  position: absolute;
  top: 50%;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  margin-top: -24px;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  background: rgba(18, 19, 21, 0.85);
  color: var(--text);
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
}
.gal-nav:hover { background: var(--accent); border-color: var(--accent); color: var(--accent-contrast); transform: scale(1.06); }
.gal-prev { left: 10px; }
.gal-next { right: 10px; }

.gal-caption {
  margin: 0;
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-dim);
  min-height: 1.4em;
}

/* tira de miniaturas */
.gal-strip {
  display: flex;
  gap: 10px;
  padding: 4px 2px 6px;
  overflow-x: auto;
  justify-content: safe center;
  scrollbar-width: thin;
  scrollbar-color: var(--border-strong) transparent;
}
.gal-thumb {
  flex: none;
  width: 92px;
  height: 58px;
  padding: 0;
  border-radius: 8px;
  border: 2px solid var(--border);
  background: var(--surface);
  overflow: hidden;
  cursor: pointer;
  opacity: 0.55;
  transition: opacity 0.2s, border-color 0.2s, transform 0.15s;
}
.gal-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.gal-thumb:hover { opacity: 0.9; transform: translateY(-2px); }
.gal-thumb.active { opacity: 1; border-color: var(--accent); }

.gal-close:focus-visible,
.gal-nav:focus-visible,
.gal-thumb:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

/* entrada/saída da galeria */
.gal-enter-active, .gal-leave-active { transition: opacity 0.22s ease; }
.gal-enter-active .gal, .gal-leave-active .gal { transition: transform 0.22s ease; }
.gal-enter-from, .gal-leave-to { opacity: 0; }
.gal-enter-from .gal, .gal-leave-to .gal { transform: translateY(14px) scale(0.985); }

/* troca de foto, com o sentido da navegação */
.slide-next-enter-active, .slide-next-leave-active,
.slide-prev-enter-active, .slide-prev-leave-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.slide-next-enter-from { opacity: 0; transform: translateX(28px); }
.slide-next-leave-to { opacity: 0; transform: translateX(-28px); }
.slide-prev-enter-from { opacity: 0; transform: translateX(-28px); }
.slide-prev-leave-to { opacity: 0; transform: translateX(28px); }

@media (max-width: 720px) {
  .gal-path { display: none; }
  .gal-bar { padding-left: 12px; }
  .gal-img { max-height: calc(100vh - 250px); }
  .gal-nav { width: 40px; height: 40px; margin-top: -20px; }
  .gal-prev { left: 4px; }
  .gal-next { right: 4px; }
  .gal-thumb { width: 72px; height: 46px; }
}

@media (prefers-reduced-motion: reduce) {
  .gal-enter-active, .gal-leave-active, .gal-enter-active .gal, .gal-leave-active .gal,
  .slide-next-enter-active, .slide-next-leave-active, .slide-prev-enter-active, .slide-prev-leave-active { transition: none; }
}
</style>
