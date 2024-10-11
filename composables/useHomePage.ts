import type { Slider, Home } from "~/types/home";
import { toast } from "vue-sonner";

type Strapi4ResponseData<T> = {
  id: number;
  attributes: T;
};

export function useHomePage() {
  const { find, findOne } = useStrapi();

  const getSliders = async () => {
    try {
      const response = await find<Slider>("sliders", {
        populate: "*", // Populate all related data
      });
      return response?.data;
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch sliders");

      throw new Error((error as Error)?.message || "Failed to fetch sliders");
    }
  };
  const getHome = async () => {
    try {
      const response = await findOne<Home>("home-page");
      return response?.data;
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch home-page");

      throw new Error((error as Error)?.message || "Failed to fetch home-page");
    }
  };

  return { getSliders, getHome };
}
