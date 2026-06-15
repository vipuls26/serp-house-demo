<script setup lang="ts">
import BasePricingCard from '../reusbale/BasePricingCard.vue';

</script>

<template>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-3">

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            <BasePricingCard card-name="Free Trail" price="$0.00"
                :features="['4,000 API Credits', 'Data From Google, Bing And Yahoo', 'HTTPS Encryption', 'No Credit Rollover', '60 Concurrency']"
                btn-name="Sign up For Free" link="/auth/register" />

            <BasePricingCard card-name="Basic" price="$29.99" month="/ month" :features="[
                '400,000 API Credits',
                'Data From Google, Bing And Yahoo',
                'HTTPS Encryption',
                '99.95% Uptime SLA',
                '100% Success Rate',
                'Priority Support',
                '60 Concurrency'
            ]" link="/auth/register" />

            <BasePricingCard card-name="Regular" price="$49.99" month="/ month" :features="[
                '800,000 API Credits',
                'Data From Google, Bing And Yahoo',
                'HTTPS Encryption',
                '99.95% Uptime SLA',
                '100% Success Rate',
                'Dedicated Support',
                '60 Concurrency'
            ]" link="/auth/register" />

             <BasePricingCard card-name="Custom" price="$$$" month="/ month" :features="[
                'API Credits',
                'Data From Google, Bing And Yahoo',
                'HTTPS Encryption',
                '99.95% Uptime SLA',
                '100% Success Rate',
                'Dedicated Support',
                '60 Concurrency'
            ]" 
            btn-name="Contact us"
            link="/contactus" />

        </div>
    </div>
</template>