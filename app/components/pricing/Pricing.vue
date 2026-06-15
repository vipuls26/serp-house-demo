<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-3">

        <!-- header -->
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-center text-3xl text-blue-950 font-bold">Signup to Start Using the API Today!</h1>
            <p class="text-center text-lg mx-auto text-gray-600 mt-2">You’ll be up and running in less than 2 minutes.
            </p>
            <div class="w-48 h-1 bg-violet-500 mt-4"></div>
        </div>

        <!-- price -->
        <div class="flex justify-center gap-2">

            <p class="text-lg">$ USD</p>
            <label class="inline-flex items-center cursor-pointer">
                <input v-model="isINR" type="checkbox" class="sr-only peer">

                <div class="relative w-9 h-5 bg-violet-500 rounded-full
                   peer-checked:bg-green-500
                   after:content-['']
                   after:absolute
                   after:top-[2px]
                   after:start-[2px]
                   after:h-4
                   after:w-4
                   after:bg-white
                   after:rounded-full
                   after:transition-all
                   peer-checked:after:translate-x-full">
                </div>
            </label>


            <p class="text-lg">₹ INR</p>

        </div>


    </div>

</template>

<script setup>

const isINR = ref(false)

</script>