export const useSocialLinksStore = defineStore("socialLinks", () => {
  const footerData = ref({
    whatsappNumber: "",
    Instagram: "",
    youtube: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const setSocialLinks = (data: any) => {
    footerData.value.whatsappNumber = data.whatsappNumber;
    footerData.value.Instagram = data.Instagram;
    footerData.value.youtube = data.youtube;
    footerData.value.email = data.email;
    footerData.value.address = data.address;
    footerData.value.phoneNumber = data.phoneNumber;
  };

  return { footerData, setSocialLinks };
});
