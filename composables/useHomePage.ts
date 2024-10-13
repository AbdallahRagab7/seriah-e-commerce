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
      toast.error(error.error.message || "Failed to fetch sliders");

      // throw new Error(error.error.message || "Failed to sliders");
      // rethrow error without cathing it will crash the app
      // so u rethrow it if u will catch it when u call this service
    }
  };
  const getHome = async () => {
    try {
      const response = await findOne<Home>("home-page");
      return response?.data;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to fetch home-page");

      // throw new Error(error.error.message || "Failed to home-page");
    }
  };
  const getCollections = async () => {
    try {
      const response = await find<Collection>("collections", {
        populate: "*",
      });
      return response?.data;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to fetch collections");

      // throw new Error(error.error.message || "Failed to collections");
    }
  };

  const createSubscribe = async (email: string) => {
    try {
      const response = await create<any>("subscribers", {
        data: {
          email: email,
        },
      });

      return response;
    } catch (error: any) {
      // console.log(error.error.message);
      toast.error(error.error.message || "Failed to subscribe");

      // throw new Error(error.error.message || "Failed to subscribe");
      // rethrow error without cathing it will crash the app
      // so u rethrow it if u will catch it when u call this service
    }
  };

  return { getSliders, getHome, getCollections, createSubscribe };
}
