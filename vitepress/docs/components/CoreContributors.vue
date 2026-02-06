<template>
  <div class="core-contributors-grid">
    <CoreContributorCard
      v-for="member in members"
      :key="member.name"
      :member="member"
    />
  </div>
</template>

<script setup>
import CoreContributorCard from './CoreContributorCard.vue'

defineProps({
  members: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.core-contributors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

@media (min-width: 640px) {
  .core-contributors-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

@media (min-width: 960px) {
  .core-contributors-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
}
</style>
