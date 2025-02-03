<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-yellow-950 bg-opacity-10 py-20">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">
            Nos Accompagnements
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos différentes formules d'accompagnement personnalisées
            pour répondre à vos besoins spécifiques
          </p>
        </div>
      </div>
    </section>

    <!-- Section Accompagnements -->
    <div class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <!-- Ajoutez cette section après la section "Accompagnement Couple" et avant "Cercles & Ateliers" -->
        <div class="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-bold text-[#bc9d22] mb-6">
              Accompagnement des Femmes
            </h2>
            <p class="text-gray-600 mb-6">
              Un espace dédié aux femmes pour se reconnecter à leur essence,
              retrouver confiance et s'épanouir pleinement dans tous les aspects
              de leur vie.
            </p>
            <h3 class="text-xl font-semibold text-[#bc9d22] mb-4">
              Format des séances
            </h3>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#bc9d22] rounded-full mr-3"></span>
                <span>Séances individuelles d'1h30</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#bc9d22] rounded-full mr-3"></span>
                <span>En présentiel ou en ligne selon vos préférences</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#bc9d22] rounded-full mr-3"></span>
                <span>Accompagnement personnalisé et sur-mesure</span>
              </li>
            </ul>
            <h3 class="text-xl font-semibold text-[#bc9d22] mb-4">
              Thématiques abordées
            </h3>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#bc9d22] rounded-full mr-3"></span>
                <span>Développement de la confiance en soi</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#bc9d22] rounded-full mr-3"></span>
                <span>Équilibre vie personnelle et professionnelle</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#bc9d22] rounded-full mr-3"></span>
                <span>Reconnexion à sa féminité</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#bc9d22] rounded-full mr-3"></span>
                <span>Gestion des émotions et du stress</span>
              </li>
            </ul>
            <a
              href="/contact"
              class="bg-[#bc9d22] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
            >
              Prendre rendez-vous
            </a>
          </div>
          <div class="w-full md:w-1/2">
            <img
              src="/femme.jpg"
              alt="Accompagnement des Femmes"
              class="w-full h-96 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <!-- Section 2: Accompagnement Couple -->
        <div
          class="flex flex-col-reverse md:flex-row items-center gap-12 mb-24 bg-[#ece8e6] rounded-2xl p-8 shadow-lg"
        >
          <div class="w-full md:w-1/2">
            <img
              src="/couple.jpg"
              alt="Accompagnement Couple"
              class="w-full h-96 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-bold text-[#76220c] mb-6">
              Accompagnement Couple
            </h2>
            <p class="text-gray-600 mb-6">
              Renforcez votre relation et retrouvez l'harmonie dans votre couple
              grâce à un accompagnement adapté à vos besoins.
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#76220c] rounded-full mr-3"></span>
                <span>Séances en couple de 2h</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#76220c] rounded-full mr-3"></span>
                <span>Amélioration de la communication</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#76220c] rounded-full mr-3"></span>
                <span>Résolution des conflits</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#76220c] rounded-full mr-3"></span>
                <span>Reconstruction des liens</span>
              </li>
            </ul>
            <a
              href="/contact"
              class="bg-[#76220c] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
        <!-- Section 4: Massages Bien-être -->
        <div class="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-bold text-[#7f632e] mb-6">
              Massages Bien-être
            </h2>
            <p class="text-gray-600 mb-6">
              Offrez-vous un moment de détente profonde et de ressourcement avec
              nos massages thérapeutiques et relaxants.
            </p>

            <h3 class="text-xl font-semibold text-[#7f632e] mb-4">
              Types de massages proposés
            </h3>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#7f632e rounded-full mr-3"></span>
                <span>Massage relaxant aux huiles essentielles</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#7f632e] rounded-full mr-3"></span>
                <span>Massage ayurvédique traditionnel</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#7f632e] rounded-full mr-3"></span>
                <span>Massage énergétique</span>
              </li>
            </ul>

            <h3 class="text-xl font-semibold text-[#7f632e] mb-4">
              Bienfaits des massages
            </h3>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#7f632e] rounded-full mr-3"></span>
                <span>Réduction du stress et des tensions</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#7f632e] rounded-full mr-3"></span>
                <span>Amélioration de la circulation sanguine</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#7f632e] rounded-full mr-3"></span>
                <span>Harmonisation énergétique</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#7f632e] rounded-full mr-3"></span>
                <span>Bien-être physique et mental</span>
              </li>
            </ul>

            <h3 class="text-xl font-semibold text-[#7f632e] mb-4">
              Durée et tarifs
            </h3>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#7f632e] rounded-full mr-3"></span>
                <span>Séance de 1h : 65€</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#7f632e] rounded-full mr-3"></span>
                <span>Séance de 1h30 : 90€</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#7f632e] rounded-full mr-3"></span>
                <span>Forfait 3 séances d'1h : 180€</span>
              </li>
            </ul>

            <a
              href="/contact"
              class="bg-[#7f632e] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
            >
              Réserver un massage
            </a>
          </div>

          <div class="w-full md:w-1/2">
            <img
              src="/massage.jpg"
              alt="Massages Bien-être"
              class="w-full h-96 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <!-- Section 4: Cercles & Ateliers -->
        <div
          class="flex flex-col-reverse md:flex-row items-center gap-12 mb-24 bg-[#ece8e6] rounded-2xl p-8 shadow-lg"
        >
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-bold text-[#3a7a73] mb-6">
              Cercles & Ateliers
            </h2>
            <p class="text-gray-600 mb-6">
              Participez à nos ateliers collectifs pour partager et apprendre
              dans un cadre bienveillant et enrichissant.
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#3a7a73] rounded-full mr-3"></span>
                <span>Ateliers thématiques mensuels</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#3a7a73] rounded-full mr-3"></span>
                <span>Cercles de parole et d'échange</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#3a7a73] rounded-full mr-3"></span>
                <span>Exercices pratiques en groupe</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-[#3a7a73] rounded-full mr-3"></span>
                <span>Soutien collectif bienveillant</span>
              </li>
            </ul>
            <a
              href="/contact"
              class="bg-[#3a7a73] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
            >
              Découvrir les ateliers
            </a>
          </div>

          <div class="w-full md:w-1/2">
            <img
              src="/cercle.jpg"
              alt="Cercles et Ateliers"
              class="w-full h-96 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
