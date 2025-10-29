<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-900">Education Gateway</h1>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a @click="scrollToSection('hero')" class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Home</a>
              <a @click="scrollToSection('institutions')" class="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Universities</a>
              <a @click="scrollToSection('categories')" class="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Programs</a>
              <a @click="scrollToSection('about')" class="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">About</a>
            </div>
          </div>
          <div class="hidden md:block">
            <button @click="scrollToSection('search')" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
              Start Search
            </button>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a @click="scrollToSection('hero'); toggleMobileMenu()" class="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Home</a>
            <a @click="scrollToSection('institutions'); toggleMobileMenu()" class="text-gray-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Universities</a>
            <a @click="scrollToSection('categories'); toggleMobileMenu()" class="text-gray-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Programs</a>
            <a @click="scrollToSection('about'); toggleMobileMenu()" class="text-gray-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">About</a>
            <button @click="scrollToSection('search'); toggleMobileMenu()" class="w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer mt-2">
              Start Search
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-50 border-t border-gray-200">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Education Gateway</h3>
            <p class="text-gray-600 text-sm">
              Connecting learners with opportunities worldwide. Discover universities and colleges 
              from around the globe in one central platform.
            </p>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a @click="scrollToSection('about')" class="text-gray-600 hover:text-blue-600 text-sm cursor-pointer">About Us</a></li>
              <li><a @click="scrollToSection('institutions')" class="text-gray-600 hover:text-blue-600 text-sm cursor-pointer">Universities</a></li>
              <li><a @click="scrollToSection('categories')" class="text-gray-600 hover:text-blue-600 text-sm cursor-pointer">Programs</a></li>
              <li><a @click="scrollToSection('search')" class="text-gray-600 hover:text-blue-600 text-sm cursor-pointer">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 mb-4">Support</h4>
            <ul class="space-y-2">
              <li><a href="mailto:support@educationgateway.co.za" class="text-gray-600 hover:text-blue-600 text-sm">Help Center</a></li>
              <li><a href="#" class="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-600 hover:text-blue-600 text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-200">
          <p class="text-center text-gray-600 text-sm">
            © 2025 Education Gateway. Connecting learners with opportunities worldwide.
          </p>
          <p class="text-center text-gray-500 text-xs mt-2">
            Developed by Karabo Molepo
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Mobile menu state
const mobileMenuOpen = ref(false)

// Navigation functionality
const scrollToSection = (sectionId) => {
  const sections = {
    'hero': 'hero-section',
    'search': 'hero-section',
    'categories': 'categories-section',
    'institutions': 'institutions-section',
    'about': 'about-section'
  }
  
  const element = document.getElementById(sections[sectionId])
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Mobile menu toggle
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style>
/* Global styles */
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
