// composables/useRestaurantService.ts
// import { useStrapi } from '@nuxtjs/strapi'
import type { Slider } from "~/types/home";

export function useHomePage() {
  const { find, create } = useStrapi();

  const getSliders = async () => {
    try {
      const response = await find<Slider>("sliders");
      return response?.data;
    } catch (error) {
      //call toast , pass error.message
      throw new Error(
        (error as Error)?.message || "Failed to fetch restaurant"
      );
    }
  };

  return { getSliders };
}
