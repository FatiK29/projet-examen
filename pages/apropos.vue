<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-yellow-950 bg-opacity-10 py-20">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">
            À Propos de Release-Coaching
          </h1>
          <p class="text-lg text-gray-600">
            Bienvenue sur Release-Coaching, dirigé par
            <strong>Marie Hellen</strong>, une passionnée du développement
            personnel et du bien-être. Marie s'engage à accompagner chaque
            individu dans sa quête d'harmonie, de sérénité et de lumière
            intérieure.
          </p>
        </div>
      </div>
    </section>

    <!-- Section Mon Histoire-->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Mon Histoire</h2>
            <p class="text-gray-600 mb-4">
              Je suis <strong>Marie Hellen</strong>, fondatrice de
              Release-Coaching et coach holistique. Depuis toujours, je suis
              animée par le désir d’aider les autres à s’épanouir et à trouver
              un équilibre dans leur vie.
            </p>
            <p class="text-gray-600">
              Mon parcours a débuté il y a plusieurs années lorsque j’ai
              découvert les bienfaits du Reiki et des soins énergétiques. Cela a
              marqué un tournant décisif dans ma vie, me poussant à approfondir
              mes connaissances et à me former dans divers domaines tels que les
              massages ayurvédiques et le coaching personnel.
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <img
              src="/profil.png"
              alt="Mon Histoire"
              class="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <!-- Mes Engagements -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Mes Engagements</h2>
          <p class="text-gray-600 mb-4">
            En tant que coach holistique, j’ai pour vocation de vous accompagner
            dans toutes les dimensions de votre être : physique, mentale,
            émotionnelle et spirituelle. Chaque soin ou service est conçu pour
            répondre à vos besoins uniques et vous aider à révéler votre plein
            potentiel.
          </p>
        </section>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div class="bg-yellow-950 bg-opacity-5 p-8 rounded-xl">
            <div
              class="bg-[#3a7a73] w-12 h-12 rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-white text-2xl">♥</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">
              Un accompagnement sur-mesure
            </h3>
            <p class="text-gray-600">
              Des séances de coaching personnalisées pour un accompagnement
              sur-mesure.
            </p>
          </div>

          <div class="bg-yellow-950 bg-opacity-5 p-8 rounded-xl">
            <div
              class="bg-[#bc9d22] w-12 h-12 rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-white text-2xl">✧</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Soins adaptés</h3>
            <p class="text-gray-600">
              Des techniques de relaxation et des soins adaptés à vos besoins
              spécifiques
            </p>
          </div>

          <div class="bg-yellow-950 bg-opacity-5 p-8 rounded-xl">
            <div
              class="bg-[#826e5b] w-12 h-12 rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-white text-2xl">↗</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Bienveillance</h3>
            <p class="text-gray-600">
              Un espace bienveillant où vous pourrez vous recentrer et vous
              reconnecter à vous-même
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mon Cabinet -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12 mb-24">
          <!-- Image à gauche -->
          <div class="w-full md:w-1/2">
            <img
              src="/cabinet.jpg"
              alt="Mon Cabinet"
              class="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          <!-- Contenu à droite -->
          <div class="w-full md:w-1/2">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Mon Cabinet</h2>
            <p class="text-gray-600 mb-4">
              Je vous accueille dans un environnement chaleureux et apaisant,
              pensé pour vous offrir un moment de détente et de sérénité.
            </p>
            <p class="text-gray-600">
              Mon cabinet est un lieu où vous pourrez vous ressourcer, partager
              vos aspirations et entamer un voyage vers un bien-être durable.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Contact -->
    <section class="bg-yellow-950 bg-opacity-10 py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Besoin d'informations supplémentaires ?
        </h2>
        <p class="text-gray-600 mb-8">
          N'hésitez pas à nous contacter pour en savoir plus sur nos
          accompagnements
        </p>
        <a
          href="/contact"
          class="bg-[#7f632e] text-white px-8 py-3 rounded-lg hover:bg-yellow-950 transition-colors duration-300"
        >
          Contactez-nous
        </a>
      </div>
    </section>
  </div>
</template>
