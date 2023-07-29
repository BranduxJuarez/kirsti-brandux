<template>
  <section class="w-full bg-slate-100 pt-12 pb-5">
    <section class="section-container">
      <HeaderSection title="Sobre digital" subtitle="Tu bendición es un regalo que significa mucho para nosotros y si dar es una expresión de tu gratitud, puedes dar regalos sin efectivo"></HeaderSection>
      <section class="">
        <template v-for="(wallet, x) in wallets" :key="x">
          <div data-aos="zoom-in" class="w-8/12 text-center border border-gray-200 mx-auto p-5 mb-5 bg-gray-100 shadow-lg rounded-tl-3xl rounded-br-3xl">
            <img :src="wallet.thumb" :alt="wallet.platform" class="w-4/12 mx-auto mb-3">
            <p class="text-xs">Por favor haga una transferencia a través de {{ wallet.prefix }} ó {{ wallet.prefixCCI }}</p>
            <Clipboard :content="wallet.number"></Clipboard> 
            <br>
            <Clipboard :content="wallet.numberCCI"></Clipboard>
          </div>
        </template>
      </section>
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Clipboard from '@/components/Clipboard.vue'

const wallets = [
  {
    thumb: 'wallets/Interbank.png',
    platform: 'Interbank',
    name: 'Interbank',
    number: '4953099769612',
    numberCCI: '00349501309976961290',
    prefix: 'C. Ahorro',
    prefixCCI: 'C. Interbancaria ',
  },
  {
    thumb: 'wallets/BBVA.png',
    platform: 'visa',
    name: 'BBVA',
    number: '001108140216574627',
    numberCCI: '001181400021657462718',
    prefix: 'C. Ahorro',
    prefixCCI: 'C. Interbancaria '
  },
  {
    thumb: 'wallets/bcp.png',
    platform: 'BCP',
    name: 'BBVA',
    number: '19170533036055',
    numberCCI: '00219117059903605557',
    prefix: 'C. Ahorro',
    prefixCCI: 'C. Interbancaria '
  }
]
</script>
