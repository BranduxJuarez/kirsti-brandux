<style scoped>

.frame {
  @apply w-4/12 rotate-180;
}

.input-wrapper {
  @apply w-full flex flex-wrap gap-1 mb-3;
}

label {
  @apply w-full text-gray-600 font-medium;
}

input, textarea, select, option {
  @apply w-full px-2 py-3 rounded-lg bg-gray-800 border border-gray-100 shadow-lg duration-300 focus:border-gray-500 text-gray-200 placeholder:text-gray-400;
}

</style>

<template>
  <section class="w-full bg-slate-100 pt-5">
    <section class="container-section bg-slate-100">
      <HeaderSection title="Libro de visitas" subtitle="En aras del buen desarrollo del evento, invitamos a los invitados a garantizar su presencia en nuestro evento." />
      <!-- Form -->
      <form 
        ref="form"
        @submit="sendMessage"
        class="w-10/12 mx-auto mt-6">
        <!-- Alert -->
        <Alert :statusResponse="statusResponse" :showAlert="showAlert" v-on:close="showAlert = false" />
        <!-- Guest Name -->
        <div class="input-wrapper" data-aos="zoom-in">
          <label for="GuestName">Nombre</label>
          <input v-model="GuestName" placeholder="Tu nombre completo" name="GuestName" id="GuestName" type="text" required>
        </div>
        <!-- Guest Status -->
        <div class="input-wrapper" data-aos="zoom-in">
          <label for="GuestStatus">Presencia</label>
          <select v-model="GuestStatus" name="GuestStatus" id="GuestStatus" required>
            <option value="Hadir">Presente</option>
            <option value="Tidak Hadir">No presente</option>
          </select>
        </div>
        <!-- Guest Message -->
        <div class="input-wrapper" data-aos="zoom-in">
          <label for="GuestMessage">Mensaje</label>
          <textarea placeholder="Escriba su mensaje aquí" v-model="GuestMessage" name="GuestMessage" id="GuestMessage" cols="30" rows="5" required></textarea>
        </div>
        {{ query }}
        <!-- Submit -->
        <button 
          data-aos="zoom-in"
          class="w-full bg-gray-800 text-gray-100 mt-6 rounded-lg py-2 font-medium pointer active:scale-90 hover:border border-gray-500 hover:bg-gray-100 hover:text-green-500 duration-300" type="submit">
          <i class="fa fa-paper-plane mr-1"></i>
          Enviar mensaje
        </button>
      </form>
      <!-- Gift Section -->
      <Gift></Gift>
      <!-- Message Box -->
      <!--MessagesBox :messages="messages" -->
      <!-- Frames -->
      <div class="w-full text-center pb-12 mt-12">
        <p class="text-sm text-amber-600 font-medium">Brandux Juárez &copy; 2023</p>
      </div>
    </section>
  </section>
</template>

<script setup>

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import HeaderSection from '@/components/HeaderSection.vue'
import Alert from '@/components/Alert.vue'
//import Gift from '@/components/Gift.vue'

// Form handler
const form = ref(null)
const GuestName = ref(null)
const GuestMessage= ref(null)
const GuestStatus = ref('Hadir')

// Alert handler
const statusResponse = ref(false)
const showAlert = ref(false)

//URL
const scriptURL = "https://script.google.com/macros/s/AKfycbzPgWJ7760OwwRlvjhrBMSM9HTVJL2wjDnDB3Up9ZOEIm09LMBwpmSpkQ6eGjAPGPCH/exec"
// https://script.google.com/u/1/home/projects/14rNXWZhQwpzMdwuVtl0MIipr7bHwQ3sR43wgLMF1k_dfkIBfdnRDET9I/edit
const sendMessage = ( evt ) => {
  evt.preventDefault()
  
  setTimeout( () => {
    // Post form
    fetch(scriptURL, { method: 'POST', body: new FormData(form.value)})
      .then( res => {
        console.log('Success: ', res)
        statusResponse.value = true
        showAlert.value = true
       })
      .catch( err => {
        console.log('Error: ', err)
        statusResponse.value = false
        showAlert.value = true
      })
  }, 500)
}

// Auto fill guest name with route.query
const route = useRoute()
if ( route.query.to ) GuestName.value = route.query.to

</script>
