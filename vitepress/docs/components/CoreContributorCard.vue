<template>
  <div class="core-contributor-card">
    <div class="card-content">
      <figure class="avatar">
        <img class="avatar-img" :src="member.avatar" :alt="member.name" />
      </figure>
      <div class="member-info">
        <h3 class="name">{{ member.name }}</h3>
        <p v-if="member.title" class="title">{{ member.title }}</p>
        <div v-if="member.links && member.links.length > 0" class="links">
          <VPSocialLink
            v-for="link in member.links"
            :key="link.link"
            :icon="link.icon"
            :link="link.link"
            :aria-label="link.icon"
            :me="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VPSocialLink } from 'vitepress/theme'

defineProps({
  member: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.core-contributor-card {
  padding: 24px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.25s;
  height: 100%;
}

.core-contributor-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.avatar {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  border-radius: 50%;
  box-shadow: var(--vp-shadow-3);
  overflow: hidden;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.member-info {
  width: 100%;
}

.name {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}

.title {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

.links {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-top: 8px;
}

.links :deep(.VPSocialLink) {
  width: 32px;
  height: 32px;
  border-radius: 6px;
}

.links :deep(.VPSocialLink:hover) {
  background: var(--vp-c-bg-alt);
}
</style>
