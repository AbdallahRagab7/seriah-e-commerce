export const useSocialLinksStore = defineStore("socialLinks", () => {
  const whatsappNumber = ref("");
  const Instagram = ref("");
  const youtube = ref("");

  const setSocialLinks = (data: any) => {
    whatsappNumber.value = data.whatsappNumber;
    Instagram.value = data.Instagram;
    youtube.value = data.youtube;
  };

  return { whatsappNumber, Instagram, youtube, setSocialLinks };
});
