<template>
  <section class="container mx-auto py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Left Column - Find Us Here -->
      <div class="space-y-6">
        <h2 class="text-xl">Find us here.</h2>
        <div class="flex flex-col gap-6 mb-6 md:mb-0 font-medium text-base">
          <!-- START ADDRESS -->
          <div class="flex items-start gap-4">
            <div class="flex justify-center items-center w-6 h-6 rounded-md">
              <Icon
                name="mdi:address-marker-outline"
                class="w-full h-full text-gray-700"
              />
            </div>

            <div>
              <p class="text-lg">Address:</p>
              <p class="text-gray-500">
                1234 Heaven Stress, Beverly Hill, Melbourne, USA.
              </p>
            </div>
          </div>
          <!-- END ADDRESS -->
          <!-- START EMAIL -->
          <div class="flex items-start gap-4">
            <div class="flex justify-center items-center w-6 h-6 rounded-md">
              <Icon name="oui:email" class="w-full h-full text-gray-700" />
            </div>

            <div>
              <p class="text-lg">Email:</p>
              <p class="text-gray-500">Contact@basictheme.com.</p>
            </div>
          </div>
          <!-- END EMAIL -->
          <!-- START Phone Number -->
          <div class="flex items-start gap-4">
            <div class="flex justify-center items-center w-6 h-6 rounded-md">
              <Icon
                name="lets-icons:phone"
                class="w-full h-full text-gray-700"
              />
            </div>

            <div>
              <p class="text-lg">Phone Number:</p>
              <p class="text-gray-500">(800) 123 456 789</p>
            </div>
          </div>
          <!-- END PHONE -->
        </div>

        <div class="text-gray-500">
          <p>
            Outstock is a premium Templates theme with advanced admin module.
            It’s extremely customizable, easy to use and fully responsive and
            retina ready. Vel illum dolore eu feugiat nulla facilisis at vero
            eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p>
        </div>
      </div>

      <div class="space-y-6">
        <h2 class="text-xl">Contact Us.</h2>
        <form class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label for="name" class="customLabel">Name *</label>
              <input
                id="name"
                type="text"
                class="customInput w-full"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label for="email" class="customLabel">Email *</label>
              <input
                id="email"
                type="email"
                class="customInput w-full"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div>
            <label for="subject" class="customLabel">Subject *</label>
            <input
              id="subject"
              type="text"
              class="customInput w-full"
              placeholder="Subject"
              required
            />
          </div>

          <div>
            <label for="message" class="customLabel">Message</label>
            <textarea
              id="message"
              class="customInput w-full h-32"
              placeholder="Your Message"
            ></textarea>
          </div>

          <BaseButton class="px-4 py-2 rounded-xl"> Send Message </BaseButton>
        </form>
      </div>
    </div>
  </section>
</template>
