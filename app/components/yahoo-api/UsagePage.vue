<template>
    <div class="mx-auto max-w-360 px-4 sm:px-6 lg:px-3 xl:px-12 pb-4">

        <div class="flex items-center justify-center gap-x-2 px-8">
            <img src="/images/yahooSerpApi/yahoo-api-logo.png" alt="yahoo logo" class="h-6">
            <p class="text-blue-950 text-lg font-medium">Yahoo</p>
        </div>

        <p class="text-slate-600 text-center px-8 mt-4">Using Yahoo Search API, you can get the below result snippets in
            JSON response.</p>

        <!-- result -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 text-center py-4">

            <div class="cursor-pointer flex flex-col items-center">
                <span>
                    1. Top Stories
                </span>

                <div class="w-30 h-0.5 bg-violet-500 mt-2"></div>
            </div>

            <div class="cursor-pointer flex flex-col items-center">
                <span>
                    2. Inline Image
                </span>

                <div class="w-32 h-0.5 bg-violet-500 mt-2"></div>
            </div>

            <div class="cursor-pointer flex flex-col items-center">
                <span>
                    3. Inline Videos
                </span>

                <div class="w-32 h-0.5 bg-violet-500 mt-2"></div>
            </div>

            <div class="cursor-pointer flex flex-col items-center">
                <span>
                    4. Related Questions
                </span>

                <div class="w-42 h-0.5 bg-violet-500 mt-2"></div>
            </div>

            <div class="cursor-pointer flex flex-col items-center">
                <span>
                    5. Knowledge Graph
                </span>

                <div class="w-40 h-0.5 bg-violet-500 mt-2"></div>
            </div>

            <div class="cursor-pointer flex flex-col items-center">
                <span>
                    6. Ad Result
                </span>

                <div class="w-30 h-0.5 bg-violet-500 mt-2"></div>

            </div>

            <div class="cursor-pointer flex flex-col items-center">
                <span>
                    7. Organic Results
                </span>

                <div class="w-35 h-0.5 bg-violet-500 mt-2"></div>

            </div>

            <div class="cursor-pointer flex flex-col items-center">
                <span>
                    8. Related Searches
                </span>

                <div class="w-40 h-0.5 bg-violet-500 mt-2"></div>
            </div>

        </div>
    </div>
</template>