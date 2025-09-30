<template>
  <div>
    <NuxtLoadingIndicator color="#022f98" />

    <Toaster
      position="top-right"
      :expand="false"
      richColors
      closeButton
      :duration="1600"
    />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { getHome } = useHomePage();
const socialLinks = useSocialLinksStore();

const { data: home, error } = await useAsyncData("home-page", () => getHome());

const runtime = useRuntimeConfig();
const seo = computed(() => home.value?.attributes?.seo);

const ogImageUrl = computed(() => {
  const imagePath = seo.value?.metaImage?.data?.attributes?.url;
  if (!imagePath) return "";
  const base = runtime.public.STRAPI_URL || "";
  return base ? `${base}${imagePath}` : imagePath;
});

useSeoMeta({
  title: seo.value?.metaTitle || "",
  description: seo.value?.metaDescription || "",
  ogImage: ogImageUrl.value || "",
  keywords: () => seo.value?.keywords || "",
});

if (seo.value?.structuredData) {
  try {
    useSchemaOrg(JSON.parse(seo.value.structuredData));
  } catch (_) {
    // ignore invalid structured data
  }
}
socialLinks.setSocialLinks({
  whatsappNumber: home?.value?.attributes?.whatsappNumber || "",
  Instagram: home?.value?.attributes?.Instagram || "",
  youtube: home?.value?.attributes?.youtube || "",
  email: home?.value?.attributes?.email || "",
  phoneNumber: home?.value?.attributes?.phoneNumber || "",
  address: home?.value?.attributes?.address || "",
});

socialLinks.setPolicies({
  privacy_policy: home?.value?.attributes?.privacy_policy || "",
  shipping_policy: home?.value?.attributes?.shipping_policy || "",
  refund_policy: home?.value?.attributes?.refund_policy || "",
});
</script>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
