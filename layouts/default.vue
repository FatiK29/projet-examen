<template>
  <div>
    <!-- En-tête -->
    <header class="bg-yellow-950 bg-opacity-10 p-6">
      <nav class="flex items-center justify-between max-w-7xl mx-auto">
        <!-- Logo avec lien vers la page d'accueil -->
        <div class="flex items-center flex-1">
          <NuxtLink to="/" class="flex items-center group">
            <div class="relative group">
              <!-- Effet d'ombre derrière le logo supprimé -->
              <div
                class="absolute inset-0 transform group-hover:scale-110 transition-transform duration-300"
              ></div>
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
        <ul class="flex space-x-6 text-black font-medium">
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
    <footer class="bg-yellow-950 bg-opacity-80 p-6">
      <div class="text-center text-white">
        <p>© 2024-2025 Release-Coaching. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>
