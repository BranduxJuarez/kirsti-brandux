<template>
  <section class="w-full bg-gradient-to-b from-gray-800 to-gray-700">
    <wave class="fill-white" />
    <section class="container-section">
      <HeaderSection text-color="text-gray-100" title="La novia y el novio" subtitle="Oh Dios, con la esperanza de Tu complacencia y gracia, permítenos unir a estas dos personas de estas dos familias para que se conviertan en socios que siempre reciban Tu gracia." />
      <Profile></Profile>
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Profile from '@/components/Profile.vue'
import Timelines from '@/components/Timelines.vue'
import wave from '@/assets/svg/wave.svg'

</script>
