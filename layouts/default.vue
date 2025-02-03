<template>
  <div>
    <head>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />
    </head>
    <!-- En-tête -->
    <header class="bg-white bg-opacity-10 p-6">
      <nav class="flex items-center justify-between max-w-7xl mx-auto">
        <!-- Logo avec lien vers la page d'accueil -->
        <div class="flex items-center flex-1">
          <NuxtLink to="/" class="flex items-center group">
            <div class="relative group">
              <!-- Logo -->
              <img
                src="/public/REF-00112 - Release - Logo.png"
                alt="Release-Coaching"
                class="h-32 w-auto relative transform group-hover:scale-105 transition-all duration-300"
              />
            </div>
          </NuxtLink>
        </div>

        <!-- Liens de navigation -->
        <ul class="flex space-x-6 text-xl text-black font-medium">
          <!-- Taille XL -->
          <li>
            <NuxtLink to="/accompagnement/" class="hover:text-[#7f632e]">
              Accompagnements
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/apropos" class="hover:text-[#7f632e]">
              À propos
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ressources" class="hover:text-[#7f632e]">
              Ressources
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="bg-[#7f632e] text-white px-4 py-2 rounded-lg hover:bg-[#6a5427] transition-colors duration-300"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <!-- Slot pour le contenu des pages -->
    <slot />
    <!-- Footer -->
    <footer class="bg-[#ffffff] bg-opacity-80 py-8 border-t-4 border-[#ffffff]">
      <div class="border-t-2 border-[#ece8e6] my-4"></div>
      <div class="container mx-auto text-black">
        <!-- Section du Footer avec Flexbox pour aligner le contenu -->
        <div class="flex flex-wrap justify-between items-center mb-8">
          <!-- Menu à gauche -->
          <div class="flex flex-col space-y-4">
            <ul class="space-y-2 text-xl">
              <!-- Augmentation de la taille -->
              <li>
                <a href="/" class="hover:text-[#0d7f4c]">Accueil</a>
              </li>
              <li>
                <a href="/accompagnement" class="hover:text-[#0d7f4c]"
                  >Accompagnements</a
                >
              </li>
              <li>
                <a href="/apropos" class="hover:text-[#0d7f4c]">À propos</a>
              </li>
              <li>
                <a href="/ressources" class="hover:text-[#0d7f4c]"
                  >Ressources</a
                >
              </li>
              <li>
                <a href="/contact" class="hover:text-[#0d7f4c]">Contact</a>
              </li>
            </ul>
          </div>

          <!-- Logo à droite avec fond -->
          <div class="bg-[#ffffff] p-4 rounded-lg mb-4 sm:mb-0">
            <img
              src="public/REF-00112 - Release - Logo.png"
              alt="Logo"
              class="mx-auto h-20"
            />
          </div>
        </div>
        <!-- Ligne séparatrice -->
        <div class="border-t-2 border-[#ece8e6] my-4"></div>
        <!-- Icône Facebook et Copyright -->
        <div class="flex justify-between items-center">
          <!-- Copyright aligné à gauche -->
          <div class="text-left">
            <p class="text-sm">
              © 2024-2025 Release-Coaching. Tous droits réservés.
            </p>
          </div>

          <div class="flex items-center gap-4">
            <a href="#" target="_blank" class="hover:text-[#F5F1E1]">
              <i class="fab fa-facebook-f text-3xl"></i>
            </a>
            <a href="#" target="_blank" class="hover:text-[#F5F1E1]">
              <i class="fab fa-instagram text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
