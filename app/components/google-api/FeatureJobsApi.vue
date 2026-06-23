<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue';

import BaseDescription from '../reusbale/BaseDescription.vue';
import BaseLink from '../ui/BaseLink.vue';

</script>

<template>

    <BaseContainer class="pb-4 space-y-6 py-8 my-20">

        <!-- feature -->
        <div class="mb-10">

            <h1 class="text-blue-950 text-center text-xl md:text-2xl">
                Key Features of the Google Jobs API
            </h1>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 mb-5">

                <div class="flex flex-col items-center text-center p-6 h-full">
                    <img src="/images/googleSerpApi/googleJobApi/real-time-job-listings.png" alt="job listing"
                        class="h-12 w-12 object-contain">

                    <p class="mt-4 min-h-14 text-lg font-medium text-blue-950 flex items-center">
                        Real-Time Job Listings
                    </p>

                    <p class="mt-2 min-h-36 text-base text-slate-700">
                        Pull job postings as they appear on Google Jobs at the time
                        of the request. Searches can be based on keywords, roles,
                        industries, or locations, depending on how you structure
                        your queries.
                    </p>
                </div>

                <div class="flex flex-col items-center text-center p-6 h-full">
                    <img src="/images/googleSerpApi/googleJobApi/structured-job-data.png" alt="structured job data"
                        class="h-12 w-12 object-contain">

                    <p class="mt-4 min-h-14 text-lg font-medium text-blue-950 flex items-center">
                        Structured Job Data
                    </p>

                    <p class="mt-2 min-h-36 text-base text-slate-700">
                        Results are returned in a clean format that includes job title,
                        employer, location, posting date, salary information when
                        available, and the application URL.
                    </p>
                </div>

                <div class="flex flex-col items-center text-center p-6 h-full">
                    <img src="/images/googleSerpApi/googleJobApi/google-jobs-coverage.png" alt="google jobs coverage"
                        class="h-12 w-12 object-contain">

                    <p class="mt-4 min-h-14 text-lg font-medium text-blue-950 flex items-center">
                        Reliable Google Jobs Coverage
                    </p>

                    <p class="mt-2 min-h-36 text-base text-slate-700">
                        SERPHouse focuses on stability. The API is designed to work
                        consistently in live environments where job data is accessed
                        daily.
                    </p>
                </div>

            </div>


        </div>

        <!-- use case -->
        <div>
            <h1 class="text-2xl text-blue-950 text-center mb-10">Use Cases of Google Job Search API</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-5">

                <div
                    class="flex gap-3 hover:shadow-2xl p-4 border-b-2 border-transparent hover:border-violet-500 rounded-2xl">
                    <BaseDescription />

                    <div class="flex flex-col gap-3">
                        <p class="text-blue-950">Job Boards and Career Sites</p>

                        <p class="text-slate-700">Use Google Jobs data to keep listings up to date and reduce expired or
                            irrelevant postings.
                            This helps improve trust for users searching across different roles and locations.</p>
                    </div>
                </div>

                <div
                    class="flex gap-3 hover:shadow-2xl p-4 border-b-2 border-transparent hover:border-violet-500 rounded-2xl">
                    <BaseDescription />

                    <div class="flex flex-col gap-3">
                        <p class="text-blue-950">Recruitment and Hiring Tools</p>

                        <p class="text-slate-700">Support sourcing and research by pulling current job openings into
                            internal systems. Useful for understanding where companies are actively hiring and how roles
                            change over time.</p>
                    </div>
                </div>

                <div
                    class="flex gap-3 hover:shadow-2xl p-4 border-b-2 border-transparent hover:border-violet-500 rounded-2xl">
                    <BaseDescription />

                    <div class="flex flex-col gap-3">
                        <p class="text-blue-950">Market and Salary Research</p>

                        <p class="text-slate-700">Analyze job activity across regions and industries. Salary signals,
                            role demand, and location trends become easier to study when the data stays fresh.</p>
                    </div>
                </div>


                <div
                    class="flex gap-3 hover:shadow-2xl p-4 border-b-2 border-transparent hover:border-violet-500 rounded-2xl">
                    <BaseDescription />

                    <div class="flex flex-col gap-3">
                        <p class="text-blue-950">Business Reporting and Analysis</p>

                        <p class="text-slate-700">
                            Track employer hiring behavior and job volume changes. This data can support planning,
                            research, and competitive analysis without relying on estimates.h.</p>
                    </div>
                </div>


            </div>


        </div>

        <!-- try it -->
        <BaseContainer class="pb-8 space-y-12 grid gap-8 rounded-3xl bg-white py-10 shadow-sm md:grid-cols-2 md:items-center">

            <div>
                <h2
                    class="text-center text-xl xl:text-4xl leading-tight text-blue-950 md:text-left md:text-2xl lg:text-3xl">
                    Ready to Try It?
                </h2>

                <p class="text-center text-sm text-gray-500 mt-3 md:text-left xl:text-lg py-1">
                    Start using the Google Job API today and unlock structured job listings from Google in real time.
                </p>

                <p class="text-center text-sm text-gray-500 mt-3 md:text-left xl:text-lg py-1">Whether you’re building a job
                    board, recruitment tool, or analytics platform, this API gives you the
                    edge.</p>
            </div>

            <div class="flex flex-col items-center gap-5 md:items-end md:justify-self-end">
                <div class="flex justify-center md:justify-end">
                    <BaseLink name="Get Started Free" />
                </div>

                <div class="flex flex-wrap items-center justify-center gap-3 text-center md:justify-end md:text-right">
                    <img src="/images/homePage/credit-card-off.png" alt="Credit card" class="h-5 w-5 opacity-70" />
                    <span class="text-sm font-medium text-slate-500 sm:text-base">
                        No Credit Card Required
                    </span>
                </div>
            </div>

        </BaseContainer>

    </BaseContainer>


</template>