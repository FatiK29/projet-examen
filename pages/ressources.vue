<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-yellow-950 bg-opacity-10 py-20">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">
            Ressources & Documentation
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de ressources soigneusement choisies pour
            vous accompagner dans votre développement personnel
          </p>
        </div>
      </div>
    </section>

    <!-- Section Ressources -->
    <div class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <!-- Ressources pour les Couples -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-[#76220c] mb-8">
            Ressources pour les Couples
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Guide Communication -->
            <div
              class="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div class="bg-[#76220c] bg-opacity-10 rounded-lg p-4 mb-4">
                <span class="material-icons text-[#76220c] text-3xl">book</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Guide de Communication Positive
              </h3>
              <p class="text-gray-600 mb-4">
                Techniques et exercices pratiques pour améliorer la
                communication dans votre couple.
              </p>
              <button class="text-[#76220c] font-medium hover:underline">
                Télécharger le PDF
              </button>
            </div>

            <!-- Workbook Intimité -->
            <div
              class="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div class="bg-[#76220c] bg-opacity-10 rounded-lg p-4 mb-4">
                <span class="material-icons text-[#76220c] text-3xl"
                  >menu_book</span
                >
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Workbook Reconnexion Émotionnelle
              </h3>
              <p class="text-gray-600 mb-4">
                Exercices et réflexions pour renforcer votre connexion
                émotionnelle.
              </p>
              <button class="text-[#76220c] font-medium hover:underline">
                Accéder au workbook
              </button>
            </div>

            <!-- Kit Résolution Conflits -->
            <div
              class="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div class="bg-[#76220c] bg-opacity-10 rounded-lg p-4 mb-4">
                <span class="material-icons text-[#76220c] text-3xl"
                  >psychology</span
                >
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Kit de Résolution des Conflits
              </h3>
              <p class="text-gray-600 mb-4">
                Outils pratiques pour gérer et résoudre les conflits de manière
                constructive.
              </p>
              <button class="text-[#76220c] font-medium hover:underline">
                Découvrir le kit
              </button>
            </div>
          </div>
        </section>

        <!-- Ressources pour les Femmes -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-[#bc9d22] mb-8">
            Ressources pour les Femmes
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Journal Personnel -->
            <div
              class="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div class="bg-[#bc9d22] bg-opacity-10 rounded-lg p-4 mb-4">
                <span class="material-icons text-[#bc9d22] text-3xl"
                  >edit_note</span
                >
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Journal d'Épanouissement Personnel
              </h3>
              <p class="text-gray-600 mb-4">
                Un guide quotidien pour cultiver la confiance en soi et l'amour
                propre.
              </p>
              <button class="text-[#bc9d22] font-medium hover:underline">
                Télécharger le journal
              </button>
            </div>

            <!-- Guide Méditation -->
            <div
              class="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div class="bg-[#bc9d22] bg-opacity-10 rounded-lg p-4 mb-4">
                <span class="material-icons text-[#bc9d22] text-3xl"
                  >self_improvement</span
                >
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Guide de Méditation et Bien-être
              </h3>
              <p class="text-gray-600 mb-4">
                Techniques de méditation et exercices de respiration pour le
                quotidien.
              </p>
              <button class="text-[#bc9d22] font-medium hover:underline">
                Accéder au guide
              </button>
            </div>

            <!-- Kit Développement -->
            <div
              class="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div class="bg-[#bc9d22] bg-opacity-10 rounded-lg p-4 mb-4">
                <span class="material-icons text-[#bc9d22] text-3xl">spa</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Kit de Développement Personnel
              </h3>
              <p class="text-gray-600 mb-4">
                Ressources complètes pour votre développement personnel et
                professionnel.
              </p>
              <button class="text-[#bc9d22] font-medium hover:underline">
                Découvrir le kit
              </button>
            </div>
          </div>
        </section>

        <!-- Section Newsletter -->
        <section
          class="bg-yellow-950 bg-opacity-10 rounded-2xl p-8 text-center"
        >
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            Restez informé(e)
          </h2>
          <p class="text-gray-600 mb-6">
            Abonnez-vous à notre newsletter pour recevoir nos dernières
            ressources et actualités
          </p>
          <div class="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#7f632e]"
            />
            <button
              class="bg-[#7f632e] text-white px-6 py-2 rounded-lg hover:bg-opacity-90"
            >
              S'abonner
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
