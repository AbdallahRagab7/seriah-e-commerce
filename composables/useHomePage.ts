// composables/useRestaurantService.ts
// import { useStrapi } from '@nuxtjs/strapi'
import type { Slider } from "~/types/home";

export function useHomePage() {
  const { find, create } = useStrapi();

  const getSliders = async () => {
    try {
      const response = await find<Slider>("restaurants");
      return response;
    } catch (error) {
      //call toast , pass error.message
      throw new Error(
        (error as Error)?.message || "Failed to fetch restaurant"
      );
    }
  };

  //   const createRestaurant = async (restaurantData: Partial<Slider>) => {
  //     try {
  //       const response = await create("restaurants", restaurantData);
  //       return response;
  //     } catch (error) {
  //       throw new Error(error?.message || "Failed to create restaurant");
  //     }
  //   };

  //   return { getSlider, createRestaurant };
  return { getSliders };
}
