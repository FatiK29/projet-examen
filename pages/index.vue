<template>
  <div>
    <!-- Section Hero avec image en arrière-plan -->
    <section class="relative h-screen bg-cover bg-center">
      <!-- Image en arrière-plan -->
      <img
        src="/public/wellness-3419590_1280.jpg"
        alt="Wellness Background"
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <!-- Superposition sombre pour améliorer la lisibilité -->
      <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <!-- Contenu au-dessus de l'image -->
      <div
        class="relative z-20 flex flex-col items-center justify-center h-full text-center text-white"
      >
        <h1 class="text-5xl font-bold mb-4">Bienvenue</h1>
        <p class="text-xl">Découvrez notre espace bien-être et sérénité.</p>
        <NuxtLink
          to="/apropos"
          class="mt-6 px-6 py-3 bg-yellow-950 hover:bg-yellow-900 rounded-full font-medium inline-block"
        >
          En savoir plus
        </NuxtLink>
      </div>
    </section>

    <!-- Section Page d'accueil avec animation fade-in -->
    <section class="p-8 bg-gray-100">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Titre principal -->
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Nos Accompagnements
        </h2>

        <!-- Sous-titre avec animation -->
        <h3
          class="text-xl text-gray-600 animate__animated animate__fadeIn animate__delay-1s"
        >
          Des solutions adaptées à chacun, pour un bien-être durable
        </h3>
      </div>
    </section>

    <!-- Galerie d'images avec intitulés et CTA -->
    <section class="p-8 bg-gray-50">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Accompagnement du couple -->
        <div class="text-center">
          <NuxtImg
            src="couple.jpg"
            alt="Accompagnement du couple"
            class="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-110 duration-300 shadow-lg"
          />
          <h3 class="text-lg text-[#76220c] font-semibold mt-4">
            Accompagnement du Couple
          </h3>
          <p class="text-gray-600 mt-2 text-sm">
            Renforcez votre communication et retrouvez votre harmonie.
          </p>
        </div>

        <!-- Accompagnement des femmes -->
        <div class="text-center">
          <NuxtImg
            src="femme.jpg"
            alt="Accompagnement des femmes"
            class="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-110 duration-300 shadow-lg"
          />
          <h3 class="text-lg text-[#3a7a73] font-semibold mt-4">
            Accompagnement des Femmes
          </h3>
          <p class="text-gray-600 mt-2 text-sm">
            Boostez votre confiance et atteignez votre équilibre intérieur.
          </p>
        </div>

        <!-- Cercles et Ateliers -->
        <div class="text-center">
          <NuxtImg
            src="cercle.jpg"
            alt="Cercles et Ateliers"
            class="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-110 duration-300 shadow-lg"
          />
          <h3 class="text-lg text-[#bc9d22] font-semibold mt-4">
            Cercles et Ateliers
          </h3>
          <p class="text-gray-600 mt-2 text-sm">
            Connectez-vous, partagez et découvrez la force du collectif.
          </p>
        </div>

        <!-- Massages -->
        <div class="text-center">
          <NuxtImg
            src="massage.jpg"
            alt="Massages"
            class="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-110 duration-300 shadow-lg"
          />
          <h3 class="text-lg text-[#826e5b] font-semibold mt-4">Massages</h3>
          <p class="text-gray-600 mt-2 text-sm">
            Détendez-vous avec nos massages relaxants et thérapeutiques.
          </p>
        </div>
      </div>

      <!-- Bouton vers la page d'accompagnement -->
      <div class="text-center mt-8">
        <button
          onclick="location.href='/accompagnement'"
          class="bg-yellow-950 text-white px-6 py-3 text-lg rounded-lg hover:bg-[#7f632e] shadow-lg transition-colors duration-300"
        >
          Découvrir tous nos accompagnements
        </button>
      </div>
    </section>
    <!-- Section Kits de Formation Individuelle -->
    <section class="bg-yellow-950 bg-opacity-20 p-8">
      <h2 class="text-center text-3xl font-bold mb-6 text-gray-800">
        Découvrez nos Kits de Formation Individuelle sur la platforme IO
      </h2>

      <!-- Grille de kits -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Kit 1 -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp"
        >
          <h3 class="text-xl font-bold mb-4 text-gray-900">Kit Bien-Être</h3>
          <p class="text-gray-700 text-sm mb-4">
            Apprenez à gérer votre stress et à améliorer votre bien-être au
            quotidien grâce à des outils pratiques.
          </p>
          <button
            class="mt-4 bg-[#826e5b] text-white px-4 py-2 rounded hover:bg-[#6f5a48]"
          >
            Découvrir le kit
          </button>
        </div>

        <!-- Kit 2 -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-0.5s"
        >
          <h3 class="text-xl font-bold mb-4 text-gray-900">
            Kit Confiance en Soi
          </h3>
          <p class="text-gray-700 text-sm mb-4">
            Renforcez votre confiance grâce à des exercices guidés et des
            stratégies éprouvées pour atteindre vos objectifs.
          </p>
          <button
            class="mt-4 bg-[#826e5b] text-white px-4 py-2 rounded hover:bg-[#6f5a48]"
          >
            Découvrir le kit
          </button>
        </div>

        <!-- Kit 3 -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-1s"
        >
          <h3 class="text-xl font-bold mb-4 text-gray-900">
            Kit Communication
          </h3>
          <p class="text-gray-700 text-sm mb-4">
            Améliorez vos compétences de communication avec des outils adaptés
            pour des relations plus harmonieuses.
          </p>
          <button
            class="mt-4 bg-[#826e5b] text-white px-4 py-2 rounded hover:bg-[#6f5a48]"
          >
            Découvrir le kit
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
