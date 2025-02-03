<template>
  <div class="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
    <!-- Introduction -->
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
      Nous contacter pour un premier contact
    </h2>
    <p class="text-gray-600 mb-8 text-center">
      Merci de nous laisser le maximum d'informations afin que nous puissions
      vous recontacter avec des possibilités de rendez-vous pour un premier
      contact. Cela nous permettra de mieux vous connaître ou de répondre à vos
      questions sur les ateliers et cercles. Nous vous communiquerons l'horaire
      du mois par mail.
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Nom complet -->
      <div>
        <label for="fullName" class="block text-sm font-medium text-gray-700">
          Nom complet
        </label>
        <input
          type="text"
          id="fullName"
          v-model="form.fullName"
          class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Votre nom complet"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Votre adresse email"
          required
        />
      </div>

      <!-- Téléphone -->
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          v-model="form.phone"
          class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Votre numéro de téléphone"
        />
      </div>

      <!-- Choix de l'accompagnement -->
      <div>
        <label
          for="accompaniment"
          class="block text-sm font-medium text-gray-700"
        >
          Choisissez un accompagnement
        </label>
        <select
          id="accompaniment"
          v-model="form.accompaniment"
          class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="" disabled>
            Veuillez sélectionner un accompagnement
          </option>
          <option value="Accompagnement du couple">
            Accompagnement du couple
          </option>
          <option value="Accompagnement des femmes">
            Accompagnement des femmes
          </option>
          <option value="Cercles et Ateliers">Cercles et Ateliers</option>
          <option value="Massages">Massages</option>
        </select>
      </div>

      <!-- Message -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Expliquez brièvement votre demande"
        ></textarea>
      </div>

      <!-- Bouton d'envoi -->
      <div class="text-center">
        <button
          type="submit"
          class="bg-[#7f632e] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
        >
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        phone: "",
        accompaniment: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Affiche les données dans la console (à remplacer par une intégration serveur ou email)
      console.log("Formulaire soumis :", this.form);

      // Réinitialise le formulaire après soumission
      this.form = {
        fullName: "",
        email: "",
        phone: "",
        accompaniment: "",
        message: "",
      };

      // Afficher une alerte de confirmation
      alert("Votre demande a été envoyée avec succès !");
    },
  },
};
</script>
