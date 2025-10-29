<template>
  <div>
        <!-- Hero Section -->
        <section id="hero-section" class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Gateway to
                <span class="text-blue-600">Higher Education</span>
              </h1>
              <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover universities and colleges worldwide. All in one central platform.
              </p>
          
          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto mb-8">
            <div class="relative">
              <input 
                v-model="searchQuery"
                @keyup.enter="performSearch"
                type="text" 
                placeholder="Search universities, colleges, programs..."
                class="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
              <button @click="performSearch" class="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section id="categories-section" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Institution Type
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            @click="filterByType('all')" 
            :class="['text-center p-8 border rounded-lg hover:shadow-lg transition-all cursor-pointer', selectedType === 'all' ? 'border-blue-500 bg-blue-50' : 'border-gray-200']"
          >
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">All Institutions</h3>
            <p class="text-gray-600">Explore all universities and colleges worldwide</p>
          </div>
          
          <div 
            @click="filterByType('public')" 
            :class="['text-center p-8 border rounded-lg hover:shadow-lg transition-all cursor-pointer', selectedType === 'public' ? 'border-green-500 bg-green-50' : 'border-gray-200']"
          >
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Public Universities</h3>
            <p class="text-gray-600">State-funded institutions offering quality education</p>
          </div>
          
          <div 
            @click="filterByType('private')" 
            :class="['text-center p-8 border rounded-lg hover:shadow-lg transition-all cursor-pointer', selectedType === 'private' ? 'border-purple-500 bg-purple-50' : 'border-gray-200']"
          >
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Private Colleges</h3>
            <p class="text-gray-600">Independent institutions with specialized programs</p>
          </div>
        </div>
        
            <div class="text-center mt-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div 
                  @click="filterByType('online')" 
                  :class="['inline-flex p-8 border rounded-lg hover:shadow-lg transition-all cursor-pointer', selectedType === 'online' ? 'border-orange-500 bg-orange-50' : 'border-gray-200']"
                >
                  <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div class="ml-4 text-left">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Online Programs</h3>
                    <p class="text-gray-600">Flexible learning options from anywhere in the world</p>
                  </div>
                </div>
                
                <div 
                  @click="filterByType('tvet')" 
                  :class="['inline-flex p-8 border rounded-lg hover:shadow-lg transition-all cursor-pointer', selectedType === 'tvet' ? 'border-red-500 bg-red-50' : 'border-gray-200']"
                >
                  <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 019 10.172V5L8 4z"></path>
                    </svg>
                  </div>
                  <div class="ml-4 text-left">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">TVET Colleges</h3>
                    <p class="text-gray-600">Technical and vocational education and training institutions</p>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div class="text-gray-600">Universities</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div class="text-gray-600">Programs</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div class="text-gray-600">Countries</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-blue-600 mb-2">1M+</div>
            <div class="text-gray-600">Students Helped</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Institutions Section -->
    <section id="institutions-section" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Institutions
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore top South African universities and colleges. All institutions are CHE-accredited and DHET-registered. Click any card to visit their official website.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="institution in filteredInstitutions" 
            :key="institution.id"
            class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold text-gray-900">{{ institution.name }}</h3>
              <span :class="institution.badgeClass">{{ institution.type }}</span>
            </div>
            <p class="text-gray-600 mb-4">
              {{ institution.description }}
            </p>
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span>{{ institution.location }}</span>
              <span>{{ institution.students }}</span>
            </div>
          </div>
        </div>
        
        <!-- No results message -->
        <div v-if="filteredInstitutions.length === 0" class="text-center py-12">
          <div class="text-gray-500 text-lg">
            <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <p>No institutions found matching your criteria.</p>
            <p class="text-sm mt-2">Try adjusting your search or filter selection.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about-section" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Education Gateway
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to connecting students with the best educational opportunities across South Africa.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Verified Institutions</h3>
            <p class="text-gray-600">All universities and colleges are CHE-accredited and DHET-registered</p>
          </div>
          
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Easy Discovery</h3>
            <p class="text-gray-600">Find the perfect institution with our advanced search and filtering tools</p>
          </div>
          
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Student Support</h3>
            <p class="text-gray-600">Comprehensive information to help you make informed decisions</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Find Your Perfect University?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join millions of students who have discovered their ideal educational path with our platform
        </p>
        <button @click="scrollToSection('search')" class="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors cursor-pointer">
          Start Your Search
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Reactive data
const searchQuery = ref('')
const selectedType = ref('all')

// Institutions data
const institutions = ref([
  {
    id: 1,
    name: 'University of Cape Town (UCT)',
    type: 'Public University',
    badgeClass: 'bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded',
    description: 'South Africa\'s oldest university and consistently ranked as the top university in Africa, offering world-class education and research.',
    location: 'Cape Town, Western Cape',
    students: '30,000+',
    category: 'public'
  },
  {
    id: 2,
    name: 'University of the Witwatersrand (Wits)',
    type: 'Public University',
    badgeClass: 'bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded',
    description: 'A leading research university in Johannesburg, known for its strong programs in health sciences, engineering, and humanities.',
    location: 'Johannesburg, Gauteng',
    students: '40,000+',
    category: 'public'
  },
  {
    id: 3,
    name: 'University of Pretoria (UP)',
    type: 'Public University',
    badgeClass: 'bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded',
    description: 'One of South Africa\'s largest universities, offering comprehensive programs across all faculties with strong research output.',
    location: 'Pretoria, Gauteng',
    students: '55,000+',
    category: 'public'
  },
  {
    id: 4,
    name: 'University of South Africa (UNISA)',
    type: 'Distance Learning',
    badgeClass: 'bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded',
    description: 'Africa\'s largest distance learning institution, providing flexible education opportunities to students across the continent.',
    location: 'Pretoria, Gauteng',
    students: '400,000+',
    category: 'online'
  },
  {
    id: 5,
    name: 'Stellenbosch University',
    type: 'Public University',
    badgeClass: 'bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded',
    description: 'A leading research university in the Western Cape, known for its strong programs in agriculture, engineering, and sciences.',
    location: 'Stellenbosch, Western Cape',
    students: '32,000+',
    category: 'public'
  },
  {
    id: 6,
    name: 'University of Johannesburg (UJ)',
    type: 'Public University',
    badgeClass: 'bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded',
    description: 'A comprehensive university offering both traditional academic and technological qualifications in the heart of Johannesburg.',
    location: 'Johannesburg, Gauteng',
    students: '50,000+',
    category: 'public'
  },
  {
    id: 7,
    name: 'Tshwane University of Technology (TUT)',
    type: 'University of Technology',
    badgeClass: 'bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded',
    description: 'South Africa\'s largest university of technology, offering practical, career-oriented degrees and diplomas.',
    location: 'Pretoria, Gauteng',
    students: '60,000+',
    category: 'public'
  },
  {
    id: 8,
    name: 'IIE Varsity College',
    type: 'Private College',
    badgeClass: 'bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded',
    description: 'A leading private higher education institution offering career-focused programs across multiple campuses nationwide.',
    location: 'Multiple Campuses',
    students: '25,000+',
    category: 'private'
  },
  {
    id: 9,
    name: 'AFDA',
    type: 'Private College',
    badgeClass: 'bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded',
    description: 'The South African School of Motion Picture Medium and Live Performance, offering creative arts and entertainment programs.',
    location: 'Johannesburg, Cape Town',
    students: '3,000+',
    category: 'private'
  },
  {
    id: 10,
    name: 'Stadio Higher Education',
    type: 'Private College',
    badgeClass: 'bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded',
    description: 'A leading private higher education institution offering career-focused programs and professional qualifications.',
    location: 'Multiple Campuses',
    students: '15,000+',
    category: 'private'
  },
  {
    id: 11,
    name: 'MANCOSA Online',
    type: 'Online Platform',
    badgeClass: 'bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded',
    description: 'Management College of Southern Africa offering flexible online learning programs for working professionals.',
    location: 'Online',
    students: '20,000+',
    category: 'online'
  },
    {
      id: 12,
      name: 'Milpark Education',
      type: 'Private College',
      badgeClass: 'bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'A private higher education institution offering business and management programs with flexible study options.',
      location: 'Johannesburg, Cape Town',
      students: '8,000+',
      category: 'private'
    },
    // TVET Colleges - Gauteng
    {
      id: 13,
      name: 'Central Johannesburg TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'A leading TVET college in Johannesburg offering technical and vocational programs in engineering, business, and IT.',
      location: 'Johannesburg, Gauteng',
      students: '15,000+',
      category: 'tvet'
    },
    {
      id: 14,
      name: 'Ekurhuleni East TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Providing quality technical and vocational education in the East Rand region with modern facilities.',
      location: 'Ekurhuleni, Gauteng',
      students: '12,000+',
      category: 'tvet'
    },
    {
      id: 15,
      name: 'Ekurhuleni West TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Offering practical skills training in engineering, hospitality, and business studies.',
      location: 'Ekurhuleni, Gauteng',
      students: '10,000+',
      category: 'tvet'
    },
    {
      id: 16,
      name: 'Sedibeng TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Committed to providing quality technical and vocational education in the Sedibeng region.',
      location: 'Sedibeng, Gauteng',
      students: '8,000+',
      category: 'tvet'
    },
    {
      id: 17,
      name: 'Tshwane North TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Leading TVET college in Tshwane offering programs in engineering, agriculture, and business.',
      location: 'Tshwane, Gauteng',
      students: '18,000+',
      category: 'tvet'
    },
    {
      id: 18,
      name: 'Tshwane South TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Providing technical and vocational training with focus on practical skills development.',
      location: 'Tshwane, Gauteng',
      students: '14,000+',
      category: 'tvet'
    },
    // TVET Colleges - KwaZulu-Natal
    {
      id: 19,
      name: 'Coastal TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Serving the coastal region of KZN with programs in maritime studies, tourism, and hospitality.',
      location: 'KwaZulu-Natal',
      students: '11,000+',
      category: 'tvet'
    },
    {
      id: 20,
      name: 'Elangeni TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Offering technical and vocational programs with emphasis on rural development and agriculture.',
      location: 'KwaZulu-Natal',
      students: '9,000+',
      category: 'tvet'
    },
    {
      id: 21,
      name: 'Thekwini TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Located in Durban, offering programs in engineering, business, and hospitality.',
      location: 'Durban, KwaZulu-Natal',
      students: '16,000+',
      category: 'tvet'
    },
    // TVET Colleges - Western Cape
    {
      id: 22,
      name: 'College of Cape Town',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'One of the oldest TVET colleges in South Africa, offering diverse technical programs.',
      location: 'Cape Town, Western Cape',
      students: '20,000+',
      category: 'tvet'
    },
    {
      id: 23,
      name: 'False Bay TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Providing quality technical and vocational education in the Cape Peninsula region.',
      location: 'Cape Town, Western Cape',
      students: '13,000+',
      category: 'tvet'
    },
    {
      id: 24,
      name: 'Northlink TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Serving the northern suburbs of Cape Town with programs in engineering and business.',
      location: 'Cape Town, Western Cape',
      students: '12,000+',
      category: 'tvet'
    },
    // TVET Colleges - Eastern Cape
    {
      id: 25,
      name: 'Buffalo City TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Leading TVET college in East London offering programs in engineering and business studies.',
      location: 'East London, Eastern Cape',
      students: '15,000+',
      category: 'tvet'
    },
    {
      id: 26,
      name: 'Lovedale TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Historic TVET college in Alice, Eastern Cape, offering diverse technical programs.',
      location: 'Alice, Eastern Cape',
      students: '8,000+',
      category: 'tvet'
    },
    // TVET Colleges - Free State
    {
      id: 27,
      name: 'Motheo TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Serving the Free State region with programs in engineering, agriculture, and business.',
      location: 'Bloemfontein, Free State',
      students: '10,000+',
      category: 'tvet'
    },
    // TVET Colleges - Limpopo
    {
      id: 28,
      name: 'Capricorn TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Leading TVET college in Limpopo offering programs in engineering and business studies.',
      location: 'Polokwane, Limpopo',
      students: '12,000+',
      category: 'tvet'
    },
    // TVET Colleges - Mpumalanga
    {
      id: 29,
      name: 'Ehlanzeni TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Serving the Ehlanzeni region with programs in engineering, tourism, and agriculture.',
      location: 'Nelspruit, Mpumalanga',
      students: '9,000+',
      category: 'tvet'
    },
    // TVET Colleges - North West
    {
      id: 30,
      name: 'Orbit TVET College',
      type: 'TVET College',
      badgeClass: 'bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded',
      description: 'Providing technical and vocational education in the North West province.',
      location: 'North West',
      students: '7,000+',
      category: 'tvet'
    }
])

// Computed property for filtered institutions
const filteredInstitutions = computed(() => {
  let filtered = institutions.value

  // Filter by type
  if (selectedType.value !== 'all') {
    filtered = filtered.filter(institution => institution.category === selectedType.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(institution => 
      institution.name.toLowerCase().includes(query) ||
      institution.description.toLowerCase().includes(query) ||
      institution.location.toLowerCase().includes(query) ||
      institution.type.toLowerCase().includes(query)
    )
  }

  return filtered
})

// Methods
const filterByType = (type) => {
  selectedType.value = type
  // Scroll to institutions section to show filtered results
  scrollToSection('institutions')
}

const performSearch = () => {
  // Search is already reactive through the computed property
  console.log('Searching for:', searchQuery.value)
  // Scroll to institutions section to show results
  scrollToSection('institutions')
}

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
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
