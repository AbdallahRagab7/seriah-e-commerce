import { toast } from "vue-sonner";

export function useCustomAuth() {
  const { create } = useStrapi();

  const updateUser = async (data: any) => {
    try {
      const response = await create<any>("user/updateMe", {
        ...data,
      });
      return response;
    } catch (error: any) {
      toast.error(error.error.message || "Failed to  update user");
    }
  };

  return { updateUser };
}
