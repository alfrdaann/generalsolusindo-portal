/* ============================================
   GENERALSOLUSINDO — Portal Internal
   JavaScript

   Daftar isi:
   1. Konfigurasi (data pengguna, stats, aplikasi)
   2. Ikon SVG
   3. Fungsi render
   4. Pencarian (Search)
   5. Navigasi Sidebar Mobile & Inisialisasi
   ============================================ */


/* -------------------------------------------
   1. KONFIGURASI
   ------------------------------------------- */

/**
 * Data pengguna yang sedang login.
 */
const USER = {
  firstName: 'Fardan',           // Nama depan (untuk sapaan)
  fullName: 'Fardan',            // Nama lengkap (di navbar)
  role: 'Staf Operasional',      // Jabatan (di navbar)
  initials: 'F'                  // Inisial (di avatar)
};

/**
 * Statistik ringkasan untuk dashboard quick stats.
 */
const STATS = [
  { value: 9, label: 'Aplikasi tersedia', icon: 'grid', accent: 'blue' },
  { value: 2, label: 'Permohonan menunggu', icon: 'calendar', accent: 'coral' },
  { value: 1, label: 'Tugas rekrutmen aktif', icon: 'briefcase', accent: 'gold' },
  { value: 0, label: 'Pengumuman terbaru', icon: 'bell', accent: 'green' }
];

/**
 * Daftar kategori dan aplikasi.
 */
const SECTIONS = [
  {
    id: 'operasional',
    title: 'Operasional Bisnis',
    subtitle: 'Dukungan untuk operasional dan kegiatan bisnis perusahaan.',
    icon: 'briefcase',
    apps: [
      {
        id: 'crm',
        name: 'CRM',
        description: 'Manajemen pelanggan dan penjualan',
        url: 'http://crm.delogic.net/',
        icon: 'users',
        accent: 'pastel-blue',
        keywords: 'crm pelanggan penjualan sales client'
      },
      {
        id: 'inventaris',
        name: 'Inventaris',
        description: 'Pengelolaan aset dan persediaan',
        url: null,
        icon: 'box',
        accent: 'pastel-green',
        keywords: 'inventaris stok barang aset persediaan'
      }
    ]
  },
  {
    id: 'sdm',
    title: 'SDM & Kepegawaian',
    subtitle: 'Layanan untuk kebutuhan karyawan dan manajemen SDM.',
    icon: 'user',
    apps: [
      {
        id: 'izin',
        name: 'Izin & Cuti',
        description: 'Pengajuan izin dan cuti',
        url: null,
        icon: 'calendar',
        accent: 'pastel-coral',
        keywords: 'izin cuti pengajuan libur sakit'
      },
      {
        id: 'hrd',
        name: 'HRD',
        description: 'Kelola absensi, penggajian, dan kebutuhan administrasi karyawan.',
        url: null,
        icon: 'users-group',
        accent: 'pastel-blue',
        keywords: 'hrd absensi penggajian kepegawaian presensi gaji slip sdm karyawan administrasi'
      },
      {
        id: 'rekrutmen',
        name: 'Rekrutmen',
        description: 'Lowongan dan proses seleksi',
        url: 'https://test-iq.delogic.net/',
        icon: 'users-group',
        accent: 'pastel-purple',
        keywords: 'rekrutmen lowongan seleksi iq tes kerja pelamar'
      }
    ]
  },
  {
    id: 'dukungan',
    title: 'Dukungan Internal',
    subtitle: 'Layanan pendukung untuk aktivitas kerja sehari-hari.',
    icon: 'headset',
    apps: [
      {
        id: 'daily-report',
        name: 'Daily Report',
        description: 'Laporan aktivitas dan pekerjaan harian.',
        url: null,
        icon: 'clipboard',
        accent: 'pastel-orange',
        keywords: 'daily report daily report laporan harian laporan aktivitas pekerjaan kerja activity'
      },
      {
        id: 'helpdesk',
        name: 'Helpdesk',
        description: 'Bantuan dan pelaporan masalah teknis.',
        url: null,
        icon: 'headphones',
        accent: 'pastel-blue',
        keywords: 'helpdesk it bantuan tiket masalah kendala teknis'
      },
      {
        id: 'knowledge-base',
        name: 'Basis Pengetahuan',
        description: 'Panduan, tutorial, dan dokumentasi.',
        url: null,
        icon: 'book',
        accent: 'pastel-green',
        keywords: 'basis pengetahuan wiki panduan tutorial dokumentasi faq kb'
      },
      {
        id: 'pengumuman',
        name: 'Pengumuman',
        description: 'Informasi terbaru dan pengumuman perusahaan.',
        url: null,
        icon: 'megaphone',
        accent: 'pastel-yellow',
        keywords: 'pengumuman berita informasi edaran kabar'
      }
    ]
  }
];


/* -------------------------------------------
   2. IKON SVG
   ------------------------------------------- */
var ICONS = {
  grid: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="3" y="3" width="7" height="7" rx="1.5"/>' +
    '<rect x="14" y="3" width="7" height="7" rx="1.5"/>' +
    '<rect x="14" y="14" width="7" height="7" rx="1.5"/>' +
    '<rect x="3" y="14" width="7" height="7" rx="1.5"/>' +
    '</svg>',

  bell: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>' +
    '<path d="M13.73 21a2 2 0 0 1-3.46 0"/>' +
    '</svg>',

  users: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>' +
    '<circle cx="9" cy="7" r="4"/>' +
    '<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>' +
    '<path d="M16 3.13a4 4 0 0 1 0 7.75"/>' +
    '</svg>',

  box: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>' +
    '<polyline points="3.27 6.96 12 12.01 20.73 6.96"/>' +
    '<line x1="12" y1="22.08" x2="12" y2="12"/>' +
    '</svg>',

  clipboard: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>' +
    '<rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>' +
    '<line x1="9" y1="12" x2="15" y2="12"/>' +
    '<line x1="9" y1="16" x2="15" y2="16"/>' +
    '</svg>',

  calendar: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>' +
    '<line x1="16" y1="2" x2="16" y2="6"/>' +
    '<line x1="8" y1="2" x2="8" y2="6"/>' +
    '<line x1="3" y1="10" x2="21" y2="10"/>' +
    '</svg>',

  clock: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<circle cx="12" cy="12" r="10"/>' +
    '<polyline points="12 6 12 12 16 14"/>' +
    '</svg>',

  wallet: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="2" y="5" width="20" height="15" rx="2"/>' +
    '<path d="M2 10h20"/>' +
    '<circle cx="17" cy="15" r="1"/>' +
    '</svg>',

  briefcase: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>' +
    '<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>' +
    '</svg>',

  headphones: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/>' +
    '<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>' +
    '<path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>' +
    '</svg>',

  cart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<circle cx="9" cy="21" r="1"/>' +
    '<circle cx="20" cy="21" r="1"/>' +
    '<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>' +
    '</svg>',

  'users-group': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>' +
    '<circle cx="9" cy="7" r="4"/>' +
    '<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>' +
    '<path d="M16 3.13a4 4 0 0 1 0 7.75"/>' +
    '</svg>',

  megaphone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M3 11l18-5v12L3 13v-2z"/>' +
    '<path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>' +
    '</svg>',

  user: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>' +
    '<circle cx="12" cy="7" r="4"/>' +
    '</svg>',

  headset: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/>' +
    '<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>' +
    '<path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>' +
    '</svg>',

  book: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>' +
    '<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' +
    '</svg>'
};


/* -------------------------------------------
   3. FUNGSI RENDER
   ------------------------------------------- */

/**
 * Menentukan sapaan berdasarkan jam saat ini.
 */
function getGreeting() {
  var hour = new Date().getHours();
  if (hour >= 5 && hour < 11)  return 'Selamat pagi.';
  if (hour >= 11 && hour < 15) return 'Selamat siang.';
  if (hour >= 15 && hour < 18) return 'Selamat sore.';
  return 'Selamat malam.';
}

/**
 * Format tanggal dalam bahasa Indonesia.
 */
function getFormattedDate() {
  return new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Render sapaan dan tanggal di hero section.
 */
function renderHero() {
  var greetingTitleEl = document.getElementById('hero-greeting-title') || document.getElementById('hero-greeting-name');
  var dateEl = document.getElementById('hero-date');

  if (greetingTitleEl) {
    greetingTitleEl.textContent = getGreeting();
  }
  if (dateEl) {
    dateEl.textContent = getFormattedDate();
  }
}

/**
 * Render statistik ringkasan quick stats.
 */
function renderStats() {
  var statsEl = document.getElementById('hero-stats');
  if (!statsEl) return;
  var html = '';

  for (var i = 0; i < STATS.length; i++) {
    var stat = STATS[i];
    var accentClass = stat.accent || (i === 0 ? 'blue' : i === 1 ? 'coral' : i === 2 ? 'gold' : 'green');
    var iconHTML = ICONS[stat.icon] || ICONS.box;

    html += '<div class="stat-card ' + accentClass + '">';
    html += '  <div class="stat-icon-wrapper">' + iconHTML + '</div>';
    html += '  <div class="stat-info">';
    html += '    <span class="stat-value">' + stat.value + '</span>';
    html += '    <span class="stat-label">' + stat.label + '</span>';
    html += '  </div>';
    html += '</div>';
  }

  statsEl.innerHTML = html;
}

/**
 * Render data profil pengguna di navbar/topbar.
 */
function renderProfile() {
  var nameEl = document.getElementById('profile-name');
  var roleEl = document.getElementById('profile-role');
  var avatarEl = document.getElementById('profile-avatar');

  if (nameEl) nameEl.textContent = USER.fullName;
  if (roleEl) roleEl.textContent = USER.role;
  if (avatarEl) avatarEl.textContent = USER.initials;
}

/**
 * Membuat HTML untuk satu card aplikasi (horizontal compact modern).
 */
function createCardHTML(app) {
  var iconHTML = ICONS[app.icon] || ICONS.box;
  var arrowHTML = '<svg class="card-arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
    '<line x1="5" y1="12" x2="19" y2="12"></line>' +
    '<polyline points="12 5 19 12 12 19"></polyline>' +
    '</svg>';

  var isClickable = !!(app.url && app.url !== '#');
  var tag = isClickable ? 'a' : 'div';
  var attrs = isClickable
    ? ' href="' + app.url + '" target="_blank" rel="noopener noreferrer" class="app-card app-card-clickable" aria-label="Buka ' + app.name + '"'
    : ' class="app-card app-card-disabled"';

  return '<' + tag + attrs + ' id="card-' + app.id + '" data-app-id="' + app.id + '">' +
    '  <div class="card-icon-wrap ' + (app.accent || 'pastel-blue') + '" aria-hidden="true">' +
    '    ' + iconHTML +
    '  </div>' +
    '  <div class="card-content">' +
    '    <h4 class="card-name">' + app.name + '</h4>' +
    '    <p class="card-desc">' + app.description + '</p>' +
    '  </div>' +
    '  <div class="card-arrow" aria-hidden="true">' +
    '    ' + arrowHTML +
    '  </div>' +
    '</' + tag + '>';
}

/**
 * Render semua section dan card aplikasi ke halaman.
 */
function renderSections() {
  var container = document.getElementById('sections-container');
  if (!container) return;
  var html = '';

  for (var i = 0; i < SECTIONS.length; i++) {
    var section = SECTIONS[i];
    var sectionIcon = ICONS[section.icon] || '';

    html += '<section class="app-section" id="section-' + section.id + '">';
    html += '  <header class="section-header">';
    html += '    <div class="section-header-icon" aria-hidden="true">' + sectionIcon + '</div>';
    html += '    <div class="section-header-text">';
    html += '      <h3 class="section-title">' + section.title + '</h3>';
    html += '      <p class="section-subtitle">' + section.subtitle + '</p>';
    html += '    </div>';
    html += '  </header>';
    html += '  <div class="section-grid">';

    for (var j = 0; j < section.apps.length; j++) {
      html += createCardHTML(section.apps[j]);
    }

    html += '  </div>';
    html += '</section>';
  }

  container.innerHTML = html;
}


/* -------------------------------------------
   4. PENCARIAN (Search)
   ------------------------------------------- */

function handleSearch() {
  var searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  var query = searchInput.value.toLowerCase().trim();
  var emptyStateEl = document.getElementById('search-empty');
  var totalVisible = 0;

  for (var i = 0; i < SECTIONS.length; i++) {
    var section = SECTIONS[i];
    var sectionEl = document.getElementById('section-' + section.id);
    if (!sectionEl) continue;

    var sectionHasMatch = false;

    for (var j = 0; j < section.apps.length; j++) {
      var app = section.apps[j];
      var cardEl = document.getElementById('card-' + app.id);
      if (!cardEl) continue;

      var appKeywords = app.keywords ? app.keywords.toLowerCase() : '';

      var isMatch = !query
        || app.name.toLowerCase().indexOf(query) !== -1
        || app.description.toLowerCase().indexOf(query) !== -1
        || appKeywords.indexOf(query) !== -1
        || section.title.toLowerCase().indexOf(query) !== -1;

      if (isMatch) {
        cardEl.removeAttribute('hidden');
        sectionHasMatch = true;
        totalVisible++;
      } else {
        cardEl.setAttribute('hidden', '');
      }
    }

    if (sectionHasMatch) {
      sectionEl.removeAttribute('hidden');
    } else {
      sectionEl.setAttribute('hidden', '');
    }
  }

  if (emptyStateEl) {
    if (totalVisible === 0 && query) {
      emptyStateEl.removeAttribute('hidden');
    } else {
      emptyStateEl.setAttribute('hidden', '');
    }
  }
}


/* -------------------------------------------
   5. INISIALISASI, NAVIGASI SIDEBAR, & MOBILE TOGGLE
   ------------------------------------------- */

/**
 * Mengatur active state navigasi sidebar (Beranda / Aplikasi).
 */
function setActiveNav(sectionName) {
  var navBeranda = document.getElementById('nav-beranda');
  var navAplikasi = document.getElementById('nav-aplikasi');
  if (!navBeranda || !navAplikasi) return;

  if (sectionName === 'aplikasi') {
    navBeranda.classList.remove('active');
    navBeranda.removeAttribute('aria-current');
    navAplikasi.classList.add('active');
    navAplikasi.setAttribute('aria-current', 'page');
  } else {
    navAplikasi.classList.remove('active');
    navAplikasi.removeAttribute('aria-current');
    navBeranda.classList.add('active');
    navBeranda.setAttribute('aria-current', 'page');
  }
}

/**
 * Mengatur interaksi navigasi sidebar (active state, smooth scroll, scroll spy).
 */
function initSidebarNavigation() {
  var navBeranda = document.getElementById('nav-beranda');
  var navAplikasi = document.getElementById('nav-aplikasi');
  var heroSection = document.getElementById('hero');
  var appsSection = document.getElementById('aplikasi');
  var sidebar = document.getElementById('sidebar');
  var sidebarOverlay = document.getElementById('sidebar-overlay');
  var brandLogo = document.querySelector('.brand-logo-card');
  var viewAllLink = document.querySelector('.apps-view-all-link');

  if (!navBeranda || !navAplikasi) return;

  function closeMobileSidebar() {
    if (sidebar && sidebar.classList.contains('mobile-open')) {
      sidebar.classList.remove('mobile-open');
      if (sidebarOverlay) {
        sidebarOverlay.classList.remove('active');
      }
    }
  }

  var isClickScrolling = false;
  var scrollTimeout = null;

  function setClickScrollingLock() {
    isClickScrolling = true;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      isClickScrolling = false;
    }, 850);
  }

  // Klik menu Beranda
  navBeranda.addEventListener('click', function (e) {
    e.preventDefault();
    setActiveNav('beranda');
    closeMobileSidebar();
    setClickScrollingLock();

    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Klik logo sidebar (kembali ke beranda)
  if (brandLogo) {
    brandLogo.addEventListener('click', function (e) {
      e.preventDefault();
      setActiveNav('beranda');
      closeMobileSidebar();
      setClickScrollingLock();

      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Klik menu Aplikasi
  navAplikasi.addEventListener('click', function (e) {
    e.preventDefault();
    setActiveNav('aplikasi');
    closeMobileSidebar();
    setClickScrollingLock();

    if (appsSection) {
      appsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Klik link Lihat Semua Aplikasi
  if (viewAllLink) {
    viewAllLink.addEventListener('click', function (e) {
      e.preventDefault();
      setActiveNav('aplikasi');
      setClickScrollingLock();

      if (appsSection) {
        appsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Scroll Spy untuk sinkronisasi posisi scroll dengan menu aktif
  function handleScrollSpy() {
    if (isClickScrolling) return;
    if (!appsSection) return;

    var appsRect = appsSection.getBoundingClientRect();
    // Ketika bagian atas Aplikasi Kerja masuk mendekati area baca viewport
    if (appsRect.top <= 180) {
      setActiveNav('aplikasi');
    } else {
      setActiveNav('beranda');
    }
  }

  window.addEventListener('scroll', handleScrollSpy, { passive: true });
}

/**
 * Menampilkan feedback notification (toast) untuk kartu tanpa URL.
 */
function showToast(title, message) {
  var container = document.getElementById('portal-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'portal-toast-container';
    container.className = 'portal-toast-container';
    document.body.appendChild(container);
  }

  container.innerHTML = '';

  var toast = document.createElement('div');
  toast.className = 'portal-toast';
  toast.innerHTML = '' +
    '<svg class="toast-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '  <circle cx="12" cy="12" r="10"></circle>' +
    '  <line x1="12" y1="8" x2="12" y2="12"></line>' +
    '  <line x1="12" y1="16" x2="12.01" y2="16"></line>' +
    '</svg>' +
    '<div class="toast-body">' +
    '  <span class="toast-title">' + title + '</span>' +
    '  <span class="toast-desc">' + message + '</span>' +
    '</div>';

  toast.addEventListener('click', function () {
    toast.classList.add('toast-hiding');
    setTimeout(function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 200);
  });

  container.appendChild(toast);

  setTimeout(function () {
    if (toast.parentNode) {
      toast.classList.add('toast-hiding');
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 200);
    }
  }, 3200);
}

function initDisabledCardFeedback() {
  var container = document.getElementById('sections-container');
  if (!container) return;

  container.addEventListener('click', function (e) {
    var disabledCard = e.target.closest('.app-card-disabled');
    if (disabledCard) {
      var nameEl = disabledCard.querySelector('.card-name');
      var appName = nameEl ? nameEl.textContent : 'ini';
      showToast('Fitur belum tersedia', 'Link aplikasi ' + appName + ' belum ditambahkan.');
    }
  });
}

/* -------------------------------------------
   6. PAGE ENTRY ANIMATION ORCHESTRATOR
   ------------------------------------------- */

/**
 * Cek apakah user lebih suka gerakan dikurangi.
 */
function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Inisiasi seluruh sequence page entry animation.
 * Semua animasi dikendalikan lewat CSS class pe-* yang di-inject oleh JS,
 * sehingga tidak ada dampak ke layout atau responsive behavior.
 */
function initPageEntryAnimation() {
  // Jika user ingin reduced motion, tampilkan semua langsung
  if (prefersReducedMotion()) {
    return;
  }

  // Tandai body sedang animasi agar hover tidak aktif dulu
  document.body.classList.add('page-animating');

  var isMobile = window.innerWidth <= 768;

  // -- 1. TOPBAR --
  var topbar = document.getElementById('topbar');
  if (topbar) {
    topbar.classList.add('pe-topbar');
  }

  // -- 2. SIDEBAR --
  // Hanya desktop (mobile sidebar adalah drawer, tidak dianimasikan)
  if (!isMobile) {
    var sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.add('pe-sidebar');
    }
  }

  // -- 3. HERO (card wrapper + background image) --
  var hero = document.getElementById('hero');
  if (hero) {
    hero.classList.add('pe-hero');
    var heroBg = hero.querySelector('.hero-background');
    if (heroBg) {
      heroBg.classList.add('pe-hero-bg');
    }
  }

  // -- 4. HERO CONTENT STAGGER --
  // Kicker: 100ms, Greeting: 180ms, Headline: 260ms, Date chip: 360ms
  var heroContentItems = [
    { id: 'hero-kicker',        delay: 100 },
    { id: 'hero-greeting-title', delay: 180 },
    { id: 'hero-headline',      delay: 260 },
    { id: 'hero-date-chip',     delay: 360 }
  ];
  heroContentItems.forEach(function(item) {
    var el = document.getElementById(item.id);
    if (el) {
      el.classList.add('pe-hero-content');
      el.style.animationDelay = item.delay + 'ms';
    }
  });

  // -- 5. APPS OVERVIEW HEADER --
  var appsHeader = document.querySelector('.apps-header');
  if (appsHeader) {
    appsHeader.classList.add('pe-apps-header');
  }

  // -- 6. CATEGORY HEADERS STAGGER --
  // Setiap section header muncul berurutan: delay 500ms, 580ms, 660ms
  var sectionHeaders = document.querySelectorAll('.section-header');
  var catBaseDelay = 500;
  sectionHeaders.forEach(function(header, idx) {
    header.classList.add('pe-section-header');
    header.style.animationDelay = (catBaseDelay + idx * 80) + 'ms';
  });

  // -- 7. APPLICATION CARDS STAGGER --
  // Setiap card: 0ms, 50ms, 100ms, ..., maks 400ms
  // Base offset mulai 560ms (setelah section header pertama)
  var cards = document.querySelectorAll('.app-card');
  var cardBaseDelay = 560;
  var cardStagger = 50;
  var cardAnimDuration = 440; // durasi animasi pe-slide-up pada card
  var iconSettleDuration = 350; // durasi pe-icon-settle

  cards.forEach(function(card, idx) {
    var cardDelay = cardBaseDelay + Math.min(idx * cardStagger, 400);
    var iconDelay = cardDelay + 200; // icon settle mulai 200ms setelah card muncul

    // Tambah entrance class ke card
    card.classList.add('pe-card');
    card.style.animationDelay = cardDelay + 'ms';

    // Hapus pe-card segera setelah animasinya selesai
    // Ini kunci: setelah dihapus, :hover/:active/:focus-visible bekerja normal kembali
    (function(c, removeAt) {
      setTimeout(function() {
        c.classList.remove('pe-card');
        c.style.animationDelay = '';
      }, removeAt);
    })(card, cardDelay + cardAnimDuration + 20);

    // Icon settle — pakai class terpisah, bukan child selector
    var iconWrap = card.querySelector('.card-icon-wrap');
    if (iconWrap) {
      iconWrap.classList.add('pe-icon-settling');
      iconWrap.style.animationDelay = iconDelay + 'ms';

      // Hapus pe-icon-settling setelah settle selesai
      (function(iw, removeAt) {
        setTimeout(function() {
          iw.classList.remove('pe-icon-settling');
          iw.style.animationDelay = '';
        }, removeAt);
      })(iconWrap, iconDelay + iconSettleDuration + 20);
    }
  });

  // -- 8. HAPUS page-animating setelah SEMUA animasi selesai --
  var lastCardDelay = cardBaseDelay + Math.min((cards.length - 1) * cardStagger, 400);
  var totalAnimDuration = lastCardDelay + cardAnimDuration + 50; // +50ms buffer
  setTimeout(function() {
    document.body.classList.remove('page-animating');
  }, totalAnimDuration);

  // -- 9. FOOTER via IntersectionObserver --
  var footer = document.getElementById('footer');
  if (footer) {
    footer.classList.add('pe-footer-hidden');

    if ('IntersectionObserver' in window) {
      var footerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('pe-footer-visible');
            footerObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      footerObserver.observe(footer);
    } else {
      // Fallback: langsung tampilkan
      footer.classList.add('pe-footer-visible');
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  renderProfile();
  renderHero();
  renderSections();
  initSidebarNavigation();
  initDisabledCardFeedback();

  // Jalankan page entry animation setelah DOM siap
  initPageEntryAnimation();

  // Handle Search Input
  var searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        searchInput.value = '';
        handleSearch();
        searchInput.blur();
      }
    });
  }

  // Handle Mobile Navigation Sidebar Toggle
  var mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  var sidebar = document.getElementById('sidebar');
  var sidebarOverlay = document.getElementById('sidebar-overlay');

  if (mobileToggleBtn && sidebar && sidebarOverlay) {
    function toggleSidebar() {
      sidebar.classList.toggle('mobile-open');
      sidebarOverlay.classList.toggle('active');
    }

    function closeSidebar() {
      sidebar.classList.remove('mobile-open');
      sidebarOverlay.classList.remove('active');
    }

    mobileToggleBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
  }
});
