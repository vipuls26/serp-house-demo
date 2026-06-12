<template>
     <div class="py-8">
            <h2 class="text-dark text-bolder text-center text-3xl mx-auto">
                Scale Up Your Business with
            </h2>

            <h2 class="text-dark text-bolder text-center text-3xl mx-auto">
                SERPHouse
            </h2>


            <div
                class="flex flex-col md:flex-row space-y-3 space-x-3 md:space-y-0 md:space-x-6 justify-center items-center p-4">

                <div class="justify-start">
                    <p class="flex items-center">
                        <span class="mr-2">
                            <BaseTick />
                        </span> 4,000 free searches
                    </p>
                    <p class="flex items-center">
                        <span class="mr-2">
                            <BaseTick />
                        </span> No credit card required
                    </p>
                    <p class="flex items-center">
                        <span class="mr-2">
                            <BaseTick />
                        </span> Cancel at any time
                    </p>
                </div>

            </div>

            <!-- button -->
            <div class="flex flex-row space-x-6 justify-center py-8">

                <BaseButton label="Try free for 1 week" />

                <BaseButton label="Contact sales" varient="secondary" />
            </div>


        </div>
</template>

<script setup>

import BaseButton from '../ui/BaseButton.vue';
import BaseTick from '../reusbale/BaseTick.vue';
</script>