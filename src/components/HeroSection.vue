<script setup>
import { lang } from '../composables/useLang.js'
import { content } from '../data/content.js'
</script>

<template>
  <section id="top" class="hero">
    <div class="container grid">
      <div class="copy">
        <p class="prompt mono">{{ content.hero[lang].prompt }}</p>
        <h1>{{ content.hero[lang].name }}</h1>
        <p class="role-tag mono">{{ content.hero[lang].roleTag }}</p>

        <p class="headline">{{ content.hero[lang].headline }}</p>
        <p class="description">{{ content.hero[lang].description }}</p>

        <div class="cta">
          <a href="#projects" class="btn btn-primary">{{ content.hero[lang].ctaPrimary }}</a>
          <a :href="content.profile.resume" download target="_blank" rel="noopener" class="btn">{{ content.hero[lang].ctaSecondary }}</a>
        </div>

        <p class="status mono">{{ content.hero[lang].status }}</p>
      </div>

      <div class="photo-wrap">
        <div class="photo-frame">
          <img :src="content.profile.photo" :alt="content.profile.name" class="photo" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 120px 0 90px;
}

.grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 48px;
  align-items: center;
}

.prompt {
  color: var(--accent);
  font-size: 0.88rem;
  margin-bottom: 10px;
}

h1 {
  font-size: clamp(2.3rem, 5vw, 3.4rem);
  margin-bottom: 4px;
}

.role-tag {
  color: var(--text-faint);
  font-size: 0.85rem;
  margin-bottom: 24px;
}

.headline {
  color: var(--text);
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 16px;
  max-width: 44ch;
}

.description {
  max-width: 50ch;
}

.cta {
  display: flex;
  gap: 14px;
  margin: 26px 0 22px;
  flex-wrap: wrap;
}

.status {
  font-size: 0.78rem;
  color: var(--text-faint);
  margin: 0;
}

.status::before {
  content: '> ';
  color: var(--accent);
}

.photo-wrap {
  justify-self: center;
}

.photo-frame {
  position: relative;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 8px;
}

.photo-frame::before {
  content: '';
  position: absolute;
  inset: -1px;
  border: 1px dashed var(--border-strong);
  border-radius: 8px;
  margin: 6px;
  pointer-events: none;
}

.photo {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 4px;
  filter: grayscale(0.25) contrast(1.05);
}

@media (max-width: 760px) {
  .hero {
    padding: 96px 0 56px;
  }

  .grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .headline,
  .description {
    margin-left: auto;
    margin-right: auto;
  }

  .cta {
    justify-content: center;
  }

  .photo-wrap {
    order: -1;
  }

  .photo {
    width: 170px;
    height: 170px;
  }
}
</style>
