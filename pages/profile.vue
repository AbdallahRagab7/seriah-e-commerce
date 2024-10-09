<template>
  <section class="bg-[#f5f5f5] py-[60px]">
    <section class="myContainer !max-w-[82%] font-poppins pt-5">
      <div class="grid md:grid-cols-3 gap-4">
        <!-- Sidebar -->
        <div class="max-h-[300px]">
          <ul
            class="space-y-4 text-[14px] font-medium divide-gray-200 p-5 bg-white rounded-sm border border-[#eceaea]"
          >
            <h2 class="font-semibold mb-4 flex items-center">
              <Icon name="gg:menu-grid-o" class="text-xl mr-[3px]" />
              Your Menu
            </h2>
            <li
              @click="currentComponent = 'ProfileAccount'"
              class="flex items-center space-x-2 cursor-pointer hover:text-primary pb-3 border-b-2"
              :class="
                currentComponent === 'ProfileAccount' ? 'text-primary' : ''
              "
            >
              <Icon name="iconamoon:profile-fill" class="text-lg" />
              <span>My Account</span>
            </li>
            <li
              @click="currentComponent = 'ProfileOrders'"
              class="flex items-center space-x-2 cursor-pointer hover:text-primary pb-3 border-b-2"
              :class="
                currentComponent === 'ProfileOrders' ? 'text-primary' : ''
              "
            >
              <Icon name="lets-icons:order" class="text-lg" />
              <span>Orders</span>
            </li>
            <li
              @click="currentComponent = 'ProfileChangePassword'"
              class="flex items-center space-x-2 cursor-pointer hover:text-primary pb-3 border-b-2"
              :class="
                currentComponent === 'ProfileChangePassword'
                  ? 'text-primary'
                  : ''
              "
            >
              <Icon name="mdi:password" class="text-lg" />
              <span>Change Password</span>
            </li>
            <li
              @click="logout"
              class="flex items-center space-x-2 cursor-pointer hover:text-primary pb-3"
            >
              <Icon name="tabler:logout" class="text-lg" />
              <span>Logout</span>
            </li>
          </ul>
        </div>

        <!-- Main Content -->
        <div class="md:col-span-2">
          <!-- <component :is="currentComponent" /> -->
          <section class="p-1 lg:px-4">
            <!-- <ProfileAccount /> -->
            <!-- <ProfileOrders /> -->
            <!-- <ProfileChangePassword /> -->
            <keep-alive>
              <component :is="ProfileChangePassword" />
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
