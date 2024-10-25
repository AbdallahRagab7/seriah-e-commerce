import { toast } from "vue-sonner";

export function useCustomAuth() {
  const { update } = useStrapi();

  const updateUser = async (userId: number, data: any) => {
    try {
      const response = await update<any>("users", userId, {
        ...data,
      });
      return response;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to  update user");
    }
  };

  return { updateUser };
}
