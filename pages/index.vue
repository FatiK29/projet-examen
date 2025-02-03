<template>
  <div>
    <!-- Section Hero avec image ronde -->
    <section class="py-20 px-4 md:px-8 mb-16 bg-[#ece8e6]">
      <div class="container mx-auto">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <!-- Contenu textuel à gauche -->
          <div class="w-full md:w-1/2 space-y-6">
            <h1
              class="text-5xl font-bold font-serif text-gray-800 leading-tight"
            >
              Release-Coaching
            </h1>
            <p class="text-2xl text-[#7f632e] font-medium">
              Votre espace de bien-être et d'épanouissement
            </p>
            <p class="text-gray-600 text-lg leading-relaxed">
              Bienvenue dans votre havre de paix dédié au développement
              personnel et au bien-être. Chez Release-Coaching, nous vous
              accompagnons dans votre voyage vers l'équilibre et l'harmonie, que
              ce soit en tant qu'individu ou en couple.
            </p>
            <div class="pt-4">
              <NuxtLink
                to="/apropos"
                class="px-4 py-2 bg-[#7f632e] text-white hover:bg-opacity-90 rounded font-medium inline-block transition-all duration-300"
              >
                En savoir plus
              </NuxtLink>
            </div>
          </div>

          <!-- Image ronde à droite -->
          <div class="w-full md:w-1/2 flex justify-center">
            <div class="relative">
              <!-- Cercle décoratif en arrière-plan -->
              <div
                class="absolute inset-0 rounded-full bg-[#7f632e] opacity-10 transform scale-110"
              ></div>
              <!-- Container de l'image -->
              <div
                class="relative w-[450px] h-[450px] rounded-full overflow-hidden border-8 border-white shadow-2xl"
              >
                <img
                  src="/public/wellness-3419590_1280.jpg"
                  alt="Wellness Background"
                  class="w-full h-full object-cover"
                />
              </div>
              <!-- Élément décoratif -->
              <div
                class="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#bc9d22] opacity-20"
              ></div>
              <div
                class="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#3a7a73] opacity-20"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Page d'accueil avec animation fade-in -->
    <section class="p-8 mb-16">
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Mes Accompagnements
        </h2>
        <h3
          class="text-xl text-gray-600 animate__animated animate__fadeIn animate__delay-1s"
        >
          Des solutions adaptées à chacun, pour un bien-être durable
        </h3>
      </div>
    </section>

    <!-- Galerie d'images avec intitulés et CTA -->
    <section class="p-8 bg-[#ece8e6] mb-16">
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
          <h3 class="text-lg text-[#bc9d22] font-semibold mt-4">
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
          <h3 class="text-lg text-[#3a7a73] font-semibold mt-4">
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
          <h3 class="text-lg text-[#7f632e] font-semibold mt-4">Massages</h3>
          <p class="text-gray-600 mt-2 text-sm">
            Détendez-vous avec nos massages relaxants et thérapeutiques.
          </p>
        </div>
      </div>

      <!-- Bouton vers la page d'accompagnement -->
      <div class="text-center mt-8">
        <NuxtLink
          to="/accompagnement"
          class="bg-[#7f632e] text-white px-6 py-3 text-lg rounded-lg hover:bg-opacity-90 shadow-lg transition-colors duration-300"
        >
          Découvrir mes accompagnements
        </NuxtLink>
      </div>
    </section>

    <!-- Section Kits de Formation Individuelle -->
    <section
      class="bg-[#ece8e6] p-8 mt-32 mb-16 flex flex-col justify-center items-center bg-cover bg-center"
    >
      <h2 class="text-center text-3xl font-bold mb-6 text-gray-800">
        Á venir mes Kits de Formation Individuelle sur la plateforme IO
      </h2>

      <!-- Grille de kits -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            class="mt-4 bg-[#7f632e] text-white px-4 py-2 rounded hover:bg-opacity-90"
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
            class="mt-4 bg-[#7f632e] text-white px-4 py-2 rounded hover:bg-opacity-90"
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
            class="mt-4 bg-[#7f632e] text-white px-4 py-2 rounded hover:bg-opacity-90"
          >
            Découvrir le kit
          </button>
        </div>
        <!-- Kit 4 -->
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
            class="mt-4 bg-[#7f632e] text-white px-4 py-2 rounded hover:bg-opacity-90"
          >
            Découvrir le kit
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
