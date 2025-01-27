<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6 text-center text-[#7f632e]">
      Contactez-nous
    </h1>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  components: {
    ContactForm,
  },
};
</script>
