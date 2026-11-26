// ==========================================
// 1. COURSE REPOSITORY DATA
// ==========================================
const courses = [
  {
    id: 1,
    title: "Full-Stack Web Architecture & Ecosystems",
    category: "Web Development",
    level: "Advanced",
    duration: "8 Weeks",
    description: "Master enterprise-grade web applications with modern frontend frameworks, secure backend routing, and scalable database schemas.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=80",
    modules: ["Module 1: Advanced Routing & MVC", "Module 2: State Management & Redux", "Module 3: Security & OAuth2 Protocols"]
  },
  {
    id: 2,
    title: "Python for Automation & Data Structures",
    category: "Programming",
    level: "Beginner",
    duration: "5 Weeks",
    description: "Build a rock-solid foundation in Python programming, object-oriented concepts, algorithmic thinking, and automated scripts.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
    modules: ["Module 1: Syntax & Control Flows", "Module 2: OOP Principles in Python", "Module 3: Scripting & Task Automation"]
  },
  {
    id: 3,
    title: "Advanced UI/UX Systems & Design Tokens",
    category: "Graphic Design",
    level: "Intermediate",
    duration: "6 Weeks",
    description: "Learn high-end digital design systems, user journey prototyping, accessibility standards, and professional Figma workflows.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80",
    modules: ["Module 1: Atomic Design Systems", "Module 2: Prototyping & Micro-Interactions", "Module 3: Client Handoff & Typography"]
  },
  {
    id: 4,
    title: "Performance Digital Marketing & Growth SEO",
    category: "Digital Marketing",
    level: "Beginner",
    duration: "4 Weeks",
    description: "Scale digital brand growth through advanced search engine optimization, programmatic ads, and multi-channel attribution tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    modules: ["Module 1: On-Page & Technical SEO", "Module 2: Programmatic Ad Targeting", "Module 3: Analytics & Conversion Funnels"]
  },
  {
    id: 5,
    title: "Data Science & Predictive Machine Learning",
    category: "Data Science",
    level: "Advanced",
    duration: "10 Weeks",
    description: "Deep dive into statistical modeling, data cleaning pipelines, exploratory data analysis, and scikit-learn models.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    modules: ["Module 1: NumPy & Pandas Pipelines", "Module 2: Data Visualization Matrices", "Module 3: Scikit-Learn Model Training"]
  },
  {
    id: 6,
    title: "React.js & State Management Masterclass",
    category: "Web Development",
    level: "Intermediate",
    duration: "6 Weeks",
    description: "Build reactive, component-driven web interfaces using custom hooks, Context API, Redux Toolkit, and RESTful APIs.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80",
    modules: ["Module 1: Hooks & Component Lifecycles", "Module 2: Context & Redux Ecosystem", "Module 3: API Integration & Testing"]
  },
  {
    id: 7,
    title: "Object-Oriented Java & Enterprise Services",
    category: "Programming",
    level: "Advanced",
    duration: "8 Weeks",
    description: "Explore advanced concurrency, design patterns, robust backend microservices architecture, and clean code principles in Java.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80",
    modules: ["Module 1: Advanced Concurrency", "Module 2: Enterprise Design Patterns", "Module 3: Spring Boot Microservices"]
  },
  {
    id: 8,
    title: "Conversion Rate & Social Media Ad Mastery",
    category: "Digital Marketing",
    level: "Intermediate",
    duration: "4 Weeks",
    description: "Create high-converting funnels, optimize ad ROI across platforms, and execute targeted audience retargeting campaigns.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80",
    modules: ["Module 1: Funnel Optimization", "Module 2: Meta & TikTok Ad Scaling", "Module 3: A/B Testing Frameworks"]
  }
];

// ==========================================
// 2. STATE STORAGE
// ==========================================
let favorites = JSON.parse(localStorage.getItem("ysse_cyber_favs")) || [];
let enrollments = JSON.parse(localStorage.getItem("ysse_cyber_enrollments")) || [];
let progressData = JSON.parse(localStorage.getItem("ysse_cyber_progress")) || {};
let showOnlyFavorites = false;
let currentTheme = localStorage.getItem("ysse_cyber_theme") || "dark";

// ==========================================
// 3. CURSOR & CANVAS ANIMATION
// ==========================================
const smoothCursor = document.getElementById("smoothCursor");
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let cursorX = window.innerWidth / 2, cursorY = window.innerHeight / 2;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function renderCursorLoop() {
  cursorX += (mouseX - cursorX) * 0.2;
  cursorY += (mouseY - cursorY) * 0.2;
  if (smoothCursor) {
    smoothCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  }
  requestAnimationFrame(renderCursorLoop);
}
requestAnimationFrame(renderCursorLoop);

document.addEventListener("mouseover", (e) => {
  if (e.target.closest("button, a, select, input, .interactive")) {
    document.body.classList.add("cursor-hover");
  }
});
document.addEventListener("mouseout", (e) => {
  if (e.target.closest("button, a, select, input, .interactive")) {
    document.body.classList.remove("cursor-hover");
  }
});

// Canvas Background Network
const canvas = document.getElementById("neuralCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1
    });
  }

  function animateNeuralNetwork() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = currentTheme === "dark";
    ctx.fillStyle = isDark ? "rgba(6, 182, 212, 0.35)" : "rgba(8, 145, 178, 0.25)";
    ctx.strokeStyle = isDark ? "rgba(6, 182, 212, 0.08)" : "rgba(8, 145, 178, 0.06)";

    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      for (let j = index + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(animateNeuralNetwork);
  }
  animateNeuralNetwork();
}

// ==========================================
// 4. THEME & TOAST UTILITIES
// ==========================================
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("ysse_cyber_theme", theme);
  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    themeIcon.className = theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
  }
}

document.addEventListener("click", (e) => {
  if (e.target.closest("#themeToggleBtn")) {
    setTheme(currentTheme === "dark" ? "light" : "dark");
    showToast(`Spectrum switched to ${currentTheme.toUpperCase()}`);
  }
});
setTheme(currentTheme);

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-bolt"></i><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toastSlideOut 0.3s ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ==========================================
// 5. ROUTER & PAGE HANDLERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("course-detail.html") || path.includes("course_detail.html")) {
    initCourseDetail();
  } else if (path.includes("dashboard.html")) {
    initDashboard();
  } else {
    initCourseHub();
  }
});

// --- HUB PAGE LOGIC ---
function initCourseHub() {
  const courseContainer = document.getElementById("courseContainer");
  if (!courseContainer) return;

  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const categoryFilter = document.getElementById("categoryFilter");
  const levelFilter = document.getElementById("levelFilter");
  const sortSelect = document.getElementById("sortSelect");
  const resetBtn = document.getElementById("resetBtn");
  const emptyResetBtn = document.getElementById("emptyResetBtn");
  const favoritesFilterBtn = document.getElementById("favoritesFilterBtn");
  const noResults = document.getElementById("noResults");
  const courseCount = document.getElementById("courseCount");
  const activePillsContainer = document.getElementById("activePillsContainer");
  const gridViewBtn = document.getElementById("gridViewBtn");
  const listViewBtn = document.getElementById("listViewBtn");

  function displayCourses(courseList) {
    courseContainer.innerHTML = "";
    if (courseCount) courseCount.textContent = courseList.length;
    updateGlobalCounters();
    renderActivePills();

    if (courseList.length === 0) {
      noResults.classList.remove("hidden");
      return;
    } else {
      noResults.classList.add("hidden");
    }

    courseList.forEach((course) => {
      const isFav = favorites.includes(course.id);
      const card = document.createElement("article");
      card.className = "course-card interactive";

      card.innerHTML = `
        <div class="card-img-container">
          <img src="${course.image}" alt="${course.title}" loading="lazy">
          <button class="bookmark-btn ${isFav ? 'bookmarked' : ''}" data-id="${course.id}" title="${isFav ? 'Remove bookmark' : 'Bookmark course'}">
            <i class="${isFav ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'}"></i>
          </button>
        </div>
        <div class="card-body">
          <div>
            <div class="card-badges">
              <span class="badge-category">${course.category}</span>
              <span class="badge-level level-${course.level}">${course.level}</span>
            </div>
            <a href="course-detail.html?id=${course.id}" class="course-title">${course.title}</a>
            <p class="course-desc">${course.description}</p>
          </div>
          <div class="card-footer">
            <span><i class="fa-regular fa-clock"></i> ${course.duration}</span>
            <a href="course-detail.html?id=${course.id}" class="btn btn-secondary interactive" style="padding: 6px 12px; font-size: 0.8rem;">View Spec &rarr;</a>
          </div>
        </div>
      `;

      courseContainer.appendChild(card);
    });

    document.querySelectorAll(".bookmark-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleBookmark(Number(btn.dataset.id));
      });
    });
  }

  function filterAndSortCourses() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const selectedLevel = levelFilter.value;
    const sortType = sortSelect.value;

    if (searchTerm.length > 0) {
      clearSearchBtn.classList.remove("hidden");
    } else {
      clearSearchBtn.classList.add("hidden");
    }

    let result = courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm) ||
                            course.description.toLowerCase().includes(searchTerm) ||
                            course.category.toLowerCase().includes(searchTerm);
      
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
      const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
      const matchesFav = !showOnlyFavorites || favorites.includes(course.id);

      return matchesSearch && matchesCategory && matchesLevel && matchesFav;
    });

    if (sortType === "title-asc") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "title-desc") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortType === "duration") {
      result.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
    }

    displayCourses(result);
  }

  function renderActivePills() {
    if (!activePillsContainer) return;
    activePillsContainer.innerHTML = "";
    const pills = [];

    if (searchInput.value.trim() !== "") pills.push({ label: `Query: "${searchInput.value}"`, type: "search" });
    if (categoryFilter.value !== "All") pills.push({ label: `Domain: ${categoryFilter.value}`, type: "category" });
    if (levelFilter.value !== "All") pills.push({ label: `Tier: ${levelFilter.value}`, type: "level" });
    if (showOnlyFavorites) pills.push({ label: "Bookmarks Only", type: "fav" });

    pills.forEach((pill) => {
      const pillEl = document.createElement("div");
      pillEl.className = "filter-pill";
      pillEl.innerHTML = `<span>${pill.label}</span> <button class="interactive">&times;</button>`;
      
      pillEl.querySelector("button").addEventListener("click", () => {
        if (pill.type === "search") { searchInput.value = ""; clearSearchBtn.classList.add("hidden"); }
        if (pill.type === "category") { categoryFilter.value = "All"; }
        if (pill.type === "level") { levelFilter.value = "All"; }
        if (pill.type === "fav") { showOnlyFavorites = false; favoritesFilterBtn.classList.remove("active"); }
        filterAndSortCourses();
      });

      activePillsContainer.appendChild(pillEl);
    });
  }

  searchInput.addEventListener("input", filterAndSortCourses);
  categoryFilter.addEventListener("change", filterAndSortCourses);
  levelFilter.addEventListener("change", filterAndSortCourses);
  sortSelect.addEventListener("change", filterAndSortCourses);

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchBtn.classList.add("hidden");
    filterAndSortCourses();
  });

  favoritesFilterBtn.addEventListener("click", () => {
    showOnlyFavorites = !showOnlyFavorites;
    favoritesFilterBtn.classList.toggle("active", showOnlyFavorites);
    filterAndSortCourses();
  });

  const resetAll = () => {
    searchInput.value = "";
    categoryFilter.value = "All";
    levelFilter.value = "All";
    sortSelect.value = "default";
    showOnlyFavorites = false;
    favoritesFilterBtn.classList.remove("active");
    clearSearchBtn.classList.add("hidden");
    filterAndSortCourses();
    showToast("Matrix parameters purged");
  };

  resetBtn.addEventListener("click", resetAll);
  emptyResetBtn.addEventListener("click", resetAll);

  gridViewBtn.addEventListener("click", () => {
    gridViewBtn.classList.add("active");
    listViewBtn.classList.remove("active");
    courseContainer.classList.remove("list-view");
  });

  listViewBtn.addEventListener("click", () => {
    listViewBtn.classList.add("active");
    gridViewBtn.classList.remove("active");
    courseContainer.classList.add("list-view");
  });

  filterAndSortCourses();
}

// --- COURSE DETAIL PAGE LOGIC & POP-UP FORM ---
function initCourseDetail() {
  const detailContainer = document.getElementById("detailContainer");
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const courseId = Number(urlParams.get("id")) || 1;
  const course = courses.find(c => c.id === courseId) || courses[0];

  const enrollModal = document.getElementById("enrollModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const enrollForm = document.getElementById("enrollForm");

  function renderDetailCard() {
    const isEnrolled = enrollments.includes(course.id);
    const isFav = favorites.includes(course.id);
    const currentProg = progressData[course.id] || (isEnrolled ? 25 : 0);

    detailContainer.innerHTML = `
      <div class="detail-hero-img">
        <img src="${course.image}" alt="${course.title}">
      </div>
      <div class="card-badges" style="margin-bottom: 16px;">
        <span class="badge-category">${course.category}</span>
        <span class="badge-level level-${course.level}">${course.level}</span>
      </div>
      <h1 style="font-size: 2.2rem; margin-bottom: 12px; font-weight: 800;">${course.title}</h1>
      <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 25px;">${course.description}</p>
      
      <div style="display: flex; gap: 20px; margin-bottom: 30px; font-size: 0.95rem; color: var(--text-muted);">
        <span><i class="fa-regular fa-clock" style="color: var(--cyan-primary);"></i> Duration: ${course.duration}</span>
        <span><i class="fa-solid fa-shield-halved" style="color: var(--cyan-primary);"></i> Certified YSSE Node</span>
      </div>

      ${isEnrolled ? `
        <div class="progress-container" style="margin-bottom: 30px;">
          <div class="progress-info">
            <span>Curriculum Progression</span>
            <span id="progText">${currentProg}% Complete</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" id="progFill" style="width: ${currentProg}%;"></div>
          </div>
          <button id="advanceProgBtn" class="btn btn-secondary interactive" style="margin-top: 12px; font-size: 0.85rem;" type="button">
            <i class="fa-solid fa-plus"></i> Simulate Module Completion (+25%)
          </button>
        </div>
      ` : ''}

      <div class="modal-curriculum" style="margin-bottom: 30px;">
        <h4><i class="fa-solid fa-list-check"></i> Curriculum Modules</h4>
        <ul>
          ${course.modules.map(m => `<li>${m}</li>`).join('')}
        </ul>
      </div>

      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        ${isEnrolled ? `
          <button id="detailCancelBtn" class="btn btn-danger interactive" type="button">
            <i class="fa-solid fa-ban"></i> Cancel Enrollment
          </button>
        ` : `
          <button id="openEnrollModalBtn" class="btn btn-odd-accent interactive" type="button">
            <i class="fa-solid fa-rocket"></i> Enroll in Course
          </button>
        `}
        <button id="detailFavBtn" class="btn btn-secondary interactive" type="button">
          <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i> ${isFav ? 'Bookmarked' : 'Bookmark Node'}
        </button>
      </div>
    `;

    // Bind triggers dynamically
    const openBtn = document.getElementById("openEnrollModalBtn");
    if (openBtn) {
      openBtn.addEventListener("click", () => {
        if (enrollModal) enrollModal.classList.remove("hidden"), enrollModal.classList.add("active");
      });
    }

    const cancelBtn = document.getElementById("detailCancelBtn");
    if (cancelBtn) {
      cancelBtn.addEventListener("click", () => {
        if (confirm(`Are you sure you want to cancel your enrollment in "${course.title}"?`)) {
          enrollments = enrollments.filter(id => id !== course.id);
          delete progressData[course.id];
          localStorage.setItem("ysse_cyber_enrollments", JSON.stringify(enrollments));
          localStorage.setItem("ysse_cyber_progress", JSON.stringify(progressData));
          showToast("Enrollment canceled successfully");
          renderDetailCard();
        }
      });
    }

    const advanceBtn = document.getElementById("advanceProgBtn");
    if (advanceBtn) {
      advanceBtn.addEventListener("click", () => {
        let p = progressData[course.id] || 25;
        p = p >= 100 ? 100 : p + 25;
        progressData[course.id] = p;
        localStorage.setItem("ysse_cyber_progress", JSON.stringify(progressData));
        
        document.getElementById("progText").textContent = `${p}% Complete`;
        document.getElementById("progFill").style.width = `${p}%`;
        showToast(`Progression advanced to ${p}%!`);
      });
    }

    const favBtn = document.getElementById("detailFavBtn");
    if (favBtn) {
      favBtn.addEventListener("click", () => {
        toggleBookmark(course.id);
        renderDetailCard();
      });
    }
  }

  renderDetailCard();

  // Modal Close Events
  if (modalCloseBtn && enrollModal) {
    modalCloseBtn.addEventListener("click", () => {
      enrollModal.classList.remove("active");
      enrollModal.classList.add("hidden");
    });

    enrollModal.addEventListener("click", (e) => {
      if (e.target === enrollModal) {
        enrollModal.classList.remove("active");
        enrollModal.classList.add("hidden");
      }
    });
  }

  // Submit Enrollment Form Event
  if (enrollForm) {
    enrollForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const studentName = document.getElementById("studentName").value.trim();

      if (!enrollments.includes(course.id)) {
        enrollments.push(course.id);
        progressData[course.id] = 25;
        localStorage.setItem("ysse_cyber_enrollments", JSON.stringify(enrollments));
        localStorage.setItem("ysse_cyber_progress", JSON.stringify(progressData));
      }

      if (enrollModal) {
        enrollModal.classList.remove("active");
        enrollModal.classList.add("hidden");
      }

      showToast(`Welcome ${studentName}! Enrollment authorized.`);
      renderDetailCard();
    });
  }
}

// --- DASHBOARD PAGE LOGIC ---
function initDashboard() {
  const dashBookmarksContainer = document.getElementById("dashBookmarksContainer");
  const dashEnrollmentsContainer = document.getElementById("dashEnrollmentsContainer");
  const dashNoBookmarks = document.getElementById("dashNoBookmarks");
  const dashNoEnrollments = document.getElementById("dashNoEnrollments");
  const dashFavCount = document.getElementById("dashFavCount");
  const dashEnrollCount = document.getElementById("dashEnrollCount");

  if (dashFavCount) dashFavCount.textContent = favorites.length;
  if (dashEnrollCount) dashEnrollCount.textContent = enrollments.length;

  if (dashBookmarksContainer) {
    const bookmarkedCourses = courses.filter(c => favorites.includes(c.id));
    if (bookmarkedCourses.length === 0) {
      dashNoBookmarks.classList.remove("hidden");
    } else {
      dashNoBookmarks.classList.add("hidden");
      bookmarkedCourses.forEach(course => {
        const card = document.createElement("article");
        card.className = "course-card interactive";
        card.innerHTML = `
          <div class="card-img-container">
            <img src="${course.image}" alt="${course.title}">
            <button class="bookmark-btn bookmarked" data-id="${course.id}" title="Remove bookmark">
              <i class="fa-solid fa-bookmark"></i>
            </button>
          </div>
          <div class="card-body">
            <div>
              <div class="card-badges">
                <span class="badge-category">${course.category}</span>
                <span class="badge-level level-${course.level}">${course.level}</span>
              </div>
              <a href="course-detail.html?id=${course.id}" class="course-title">${course.title}</a>
              <p class="course-desc">${course.description}</p>
            </div>
            <div class="card-footer">
              <span><i class="fa-regular fa-clock"></i> ${course.duration}</span>
              <a href="course-detail.html?id=${course.id}" class="btn btn-secondary interactive" style="padding: 6px 12px; font-size: 0.8rem;">View Spec &rarr;</a>
            </div>
          </div>
        `;
        dashBookmarksContainer.appendChild(card);
      });
    }
  }

  if (dashEnrollmentsContainer) {
    const enrolledCourses = courses.filter(c => enrollments.includes(c.id));
    if (enrolledCourses.length === 0) {
      dashNoEnrollments.classList.remove("hidden");
    } else {
      dashNoEnrollments.classList.add("hidden");
      enrolledCourses.forEach(course => {
        const p = progressData[course.id] || 25;
        const card = document.createElement("article");
        card.className = "course-card interactive";
        card.innerHTML = `
          <div class="card-img-container">
            <img src="${course.image}" alt="${course.title}">
            <button class="cancel-enroll-btn bookmark-btn bookmarked" data-id="${course.id}" title="Cancel Enrollment" style="background: var(--odd-accent);">
              <i class="fa-solid fa-ban"></i>
            </button>
          </div>
          <div class="card-body">
            <div>
              <div class="card-badges">
                <span class="badge-category">${course.category}</span>
                <span class="badge-level level-${course.level}">${course.level}</span>
              </div>
              <a href="course-detail.html?id=${course.id}" class="course-title">${course.title}</a>
              <div class="progress-container">
                <div class="progress-info">
                  <span>Progression</span>
                  <span>${p}%</span>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" style="width: ${p}%;"></div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <span><i class="fa-regular fa-clock"></i> ${course.duration}</span>
              <a href="course-detail.html?id=${course.id}" class="btn btn-odd-accent interactive" style="padding: 6px 12px; font-size: 0.8rem;">Continue &rarr;</a>
            </div>
          </div>
        `;
        dashEnrollmentsContainer.appendChild(card);
      });
    }
  }

  document.querySelectorAll(".cancel-enroll-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const courseId = Number(btn.dataset.id);
      if (confirm("Cancel enrollment for this course node?")) {
        enrollments = enrollments.filter(id => id !== courseId);
        delete progressData[courseId];
        localStorage.setItem("ysse_cyber_enrollments", JSON.stringify(enrollments));
        localStorage.setItem("ysse_cyber_progress", JSON.stringify(progressData));
        showToast("Enrollment canceled successfully");
        location.reload();
      }
    });
  });

  document.querySelectorAll(".bookmark-btn:not(.cancel-enroll-btn)").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleBookmark(Number(btn.dataset.id));
      location.reload();
    });
  });
}

// ==========================================
// 6. GLOBAL COUNTERS
// ==========================================
function toggleBookmark(courseId) {
  if (favorites.includes(courseId)) {
    favorites = favorites.filter(id => id !== courseId);
    showToast("Bookmark removed from matrix");
  } else {
    favorites.push(courseId);
    showToast("Course bookmarked securely");
  }
  localStorage.setItem("ysse_cyber_favs", JSON.stringify(favorites));
  updateGlobalCounters();
}

function updateGlobalCounters() {
  const favCountEl = document.getElementById("favCount");
  if (favCountEl) favCountEl.textContent = favorites.length;
}