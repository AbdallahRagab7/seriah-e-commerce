export const useSocialLinksStore = defineStore("socialLinks", () => {
  const footerData = ref({
    whatsappNumber: "",
    Instagram: "",
    youtube: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const policies = ref({
    privacy_policy: "",
    shipping_policy: "",
    refund_policy: "",
  });

  const setSocialLinks = (data: any) => {
    footerData.value.whatsappNumber = data.whatsappNumber;
    footerData.value.Instagram = data.Instagram;
    footerData.value.youtube = data.youtube;
    footerData.value.email = data.email;
    footerData.value.address = data.address;
    footerData.value.phoneNumber = data.phoneNumber;
  };

  const setPolicies = (data: any) => {
    policies.value.privacy_policy = data.privacy_policy;
    policies.value.shipping_policy = data.shipping_policy;
    policies.value.refund_policy = data.refund_policy;
  };

  return { footerData, policies, setSocialLinks, setPolicies };
});
