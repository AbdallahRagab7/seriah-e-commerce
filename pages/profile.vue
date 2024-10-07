<template>
  <section class="bg-[#f5f5f5]">
    <section class="container max-w-[90%] font-poppins pt-5">
      <div class="grid md:grid-cols-3 gap-4">
        <!-- Sidebar -->
        <div class="max-h-[300px]">
          <section class="p-1 lg:p-4">
            <ul
              class="space-y-4 divide-gray-200 p-5 bg-white rounded-md shadow-sm border"
            >
              <h2 class="font-semibold mb-4 flex items-center">
                <Icon name="gg:menu-grid-o" class="text-xl mr-1" />
                Your Menu
              </h2>
              <li
                @click="currentComponent = 'ProfileAccount'"
                class="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-primary pb-3 border-b-2"
                :class="
                  currentComponent === 'ProfileAccount' ? 'text-primary' : ''
                "
              >
                <Icon name="iconamoon:profile-fill" />
                <span>My Account</span>
              </li>
              <li
                @click="currentComponent = 'ProfileOrders'"
                class="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-primary pb-3 border-b-2"
                :class="
                  currentComponent === 'ProfileOrders' ? 'text-primary' : ''
                "
              >
                <Icon name="lets-icons:order" />
                <span>Orders</span>
              </li>
              <li
                @click="currentComponent = 'ProfileChangePassword'"
                class="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-primary pb-3 border-b-2"
                :class="
                  currentComponent === 'ProfileChangePassword'
                    ? 'text-primary'
                    : ''
                "
              >
                <Icon name="mdi:password" />
                <span>Change Password</span>
              </li>
              <li
                @click="logout"
                class="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-primary pb-3"
              >
                <Icon name="tabler:logout" />
                <span>Logout</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Main Content -->
        <div class="md:col-span-2">
          <!-- <component :is="currentComponent" /> -->
          <section class="p-1 lg:p-4">
            <!-- <ProfileAccount /> -->
            <!-- <ProfileOrders /> -->
            <!-- <ProfileChangePassword /> -->
            <keep-alive>
              <component :is="currentComponent" />
            </keep-alive>
          </section>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import ProfileAccount from "@/components/profile/account.vue";
import ProfileOrders from "@/components/profile/orders.vue";
import ProfileChangePassword from "@/components/profile/changePassword.vue";
const currentComponent = ref("ProfileAccount");
</script>
