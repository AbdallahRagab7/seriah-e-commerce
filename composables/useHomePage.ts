import type { Slider, Home, Collection } from "~/types/home";
import { toast } from "vue-sonner";

export function useHomePage() {
  const { find, findOne, create } = useStrapi();

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
  const getCollections = async () => {
    try {
      const response = await find<Collection>("collections", {
        populate: "*",
      });
      return response?.data;
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch collections");

      throw new Error(
        (error as Error)?.message || "Failed to fetch collections"
      );
    }
  };

  const createSubscribe = async (email: string) => {
    try {
      const response = await create<any>("restaurants", {
        data: {
          email: email,
        },
      });

      return response?.data;
    } catch (error: any) {
      toast.error(error.message || "Failed to subscribe`");

      throw new Error((error as Error)?.message || "Failed to subscribe`");
    }
  };

  return { getSliders, getHome, getCollections, createSubscribe };
}
