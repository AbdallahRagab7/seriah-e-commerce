<template>
  <div
    class="myContainer py-[40px] text-center mb-20 min-h-[calc(100vh-200px)]"
  >
    <h1 class="heading1 !mb-12">Terms & Conditions</h1>
    <div class="text-customGray max-w-[85%] mx-auto">
      <div v-html="renderedRefundPolicy"></div>
      <div class="mt-6" v-html="renderedShippingPolicy"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";
const socialLinks = useSocialLinksStore();

const markdownRenderer = new MarkdownIt();
const renderedRefundPolicy = computed(() => {
  return markdownRenderer.render(socialLinks.policies.refund_policy);
});
const renderedShippingPolicy = computed(() => {
  return markdownRenderer.render(socialLinks.policies.shipping_policy);
});
</script>

<style scoped>
:deep(h1) {
  font-size: 2.5rem;
  margin: 0.3em 0;
}

:deep(h2) {
  font-size: 2rem;
  margin: 0.3em 0;
}

:deep(h3) {
  font-size: 1.75rem;
  margin: 0.3em 0;
}

:deep(h4) {
  font-size: 1.5rem;
  margin: 0.3em 0;
}

:deep(h5) {
  font-size: 1.25rem;
  margin: 0.3em 0;
}

:deep(h6) {
  font-size: 1rem;
  margin: 0.3em 0;
}
</style>
