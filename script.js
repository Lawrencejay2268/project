// ===================== DATA =====================
const SERVICES = [
  {
    id: "tatlo",
    name: "Tatlo Lopez Barbershop",
    cat: "beauty",
    catLabel: "💈 Beauty / Salon",
    icon: "💈",
    badge: "BEAUTY",
    rating: 4.8,
    reviews: 142,
    tips: 23,
    addr: "Jaro, Iloilo City, 5000",
    mapQuery: "Jaro+Iloilo+City",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.218146740639!2d122.5601833!3d10.71775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQzJzAzLjkiTiAxMjLCsDMzJzM2LjciRQ!5e0!3m2!1sen!2sph!4v1640000000000",
    dirLink: "https://www.google.com/maps/dir//Jaro+Iloilo+City",
    status: "Open",
    hours: {
      Mon: "8AM–8PM",
      Tue: "8AM–8PM",
      Wed: "8AM–8PM",
      Thu: "8AM–8PM",
      Fri: "8AM–9PM",
      Sat: "8AM–9PM",
      Sun: "Closed",
    },
    info: {
      Phone: "+63 915 234 5678",
      Category: "Barber / Salon",
      District: "Jaro",
      "Price Range": "₱80–₱250",
    },
    posts: [
      {
        type: "tip",
        name: "Franz Naval",
        stars: 5,
        desc: "Very busy but affordable. Go-to place to eat with friends and family.",
      },
      {
        type: "kudos",
        name: "Lhea Catelo",
        stars: 4,
        desc: "Excellent service and ambiance overall. Staff are friendly.",
      },
      {
        type: "warning",
        name: "RJ Bagas",
        stars: 3,
        desc: "Servings are satisfying but parking is a bit difficult.",
      },
    ],
  },
  {
    id: "grace",
    name: "The Grace Salon",
    cat: "beauty",
    catLabel: "💈 Beauty / Salon",
    icon: "💈",
    badge: "BEAUTY",
    rating: 4.6,
    reviews: 98,
    tips: 15,
    addr: "Mandurriao, Iloilo City, 5000",
    mapQuery: "Mandurriao+Iloilo+City",
    mapEmbed: "https://www.google.com/maps/embed?pb=...",
    dirLink: "https://www.google.com/maps/dir//Mandurriao+Iloilo+City",
    status: "Open",
    hours: {
      Mon: "9AM–7PM",
      Tue: "9AM–7PM",
      Wed: "9AM–7PM",
      Thu: "9AM–7PM",
      Fri: "9AM–8PM",
      Sat: "9AM–8PM",
      Sun: "10AM–6PM",
    },
    info: {
      Phone: "+63 927 345 6789",
      Category: "Hair / Nail Salon",
      District: "Mandurriao",
      "Price Range": "₱150–₱600",
    },
    posts: [
      {
        type: "kudos",
        name: "Joy Pabalan",
        stars: 5,
        desc: "The stylist here really knows her craft!",
      },
      {
        type: "tip",
        name: "Mark Torres",
        stars: 4,
        desc: "Book ahead on weekends — it gets really packed.",
      },
    ],
  },
  {
    id: "clinching",
    name: "Clinching Gym",
    cat: "repair", // Note: Using repair cat to match your HTML filter logic
    catLabel: "🏋 Fitness / Gym",
    icon: "🏋",
    badge: "GYM",
    rating: 4.5,
    reviews: 76,
    tips: 11,
    addr: "La Paz, Iloilo City, 5000",
    mapQuery: "La+Paz+Iloilo+City",
    mapEmbed: "https://www.google.com/maps/embed?pb=...",
    dirLink: "https://www.google.com/maps/dir//La+Paz+Iloilo+City",
    status: "Open",
    hours: {
      Mon: "5AM–10PM",
      Tue: "5AM–10PM",
      Wed: "5AM–10PM",
      Thu: "5AM–10PM",
      Fri: "5AM–10PM",
      Sat: "6AM–8PM",
      Sun: "7AM–6PM",
    },
    info: {
      Phone: "+63 908 456 7890",
      Category: "Fitness / Gym",
      District: "La Paz",
      "Price Range": "₱500/month",
    },
    posts: [
      {
        type: "tip",
        name: "Carlo Divinagracia",
        stars: 5,
        desc: "Best gym in Iloilo for boxing and MMA.",
      },
      {
        type: "warning",
        name: "Bea Montes",
        stars: 3,
        desc: "Parking can be limited on evenings.",
      },
    ],
  },
  {
    id: "stpaul",
    name: "St Paul Hospital",
    cat: "medical",
    catLabel: "🏥 Medical / Hospital",
    icon: "🏥",
    badge: "MEDICAL",
    rating: 4.2,
    reviews: 210,
    tips: 32,
    addr: "General Luna St, Iloilo City, 5000",
    mapQuery: "St+Paul+Hospital+Iloilo",
    mapEmbed: "https://www.google.com/maps/embed?pb=...",
    dirLink: "https://www.google.com/maps/dir//St+Paul+Hospital+Iloilo",
    status: "Open 24hrs",
    hours: {
      Mon: "24hrs",
      Tue: "24hrs",
      Wed: "24hrs",
      Thu: "24hrs",
      Fri: "24hrs",
      Sat: "24hrs",
      Sun: "24hrs",
    },
    info: {
      Phone: "+63 33 321 7181",
      Category: "Hospital",
      District: "City Proper",
      "Price Range": "Varies",
    },
    posts: [
      {
        type: "tip",
        name: "Donna Cruz",
        stars: 4,
        desc: "ER is responsive and staff are professional.",
      },
      {
        type: "warning",
        name: "Alex Batino",
        stars: 3,
        desc: "OPD waiting time can be long on Monday mornings.",
      },
    ],
  },
  {
    id: "bella",
    name: "Bella Phone Repair",
    cat: "repair",
    catLabel: "🔧 Repair / Tech",
    icon: "🔧",
    badge: "REPAIR",
    rating: 4.6,
    reviews: 54,
    tips: 9,
    addr: "Molo, Iloilo City, 5000",
    mapQuery: "Molo+Iloilo+City",
    mapEmbed: "https://www.google.com/maps/embed?pb=...",
    dirLink: "https://www.google.com/maps/dir//Molo+Iloilo+City",
    status: "Open",
    hours: {
      Mon: "9AM–6PM",
      Tue: "9AM–6PM",
      Wed: "9AM–6PM",
      Thu: "9AM–6PM",
      Fri: "9AM–6PM",
      Sat: "9AM–5PM",
      Sun: "Closed",
    },
    info: {
      Phone: "+63 918 567 8901",
      Category: "Electronics Repair",
      District: "Molo",
      "Price Range": "₱100–₱1500",
    },
    posts: [
      {
        type: "tip",
        name: "Ian Gallo",
        stars: 5,
        desc: "Fixed my cracked screen in under an hour.",
      },
      {
        type: "kudos",
        name: "Gia Fuentebella",
        stars: 5,
        desc: "Super professional and fast!",
      },
    ],
  },
  {
    id: "cafe",
    name: "CAFE",
    cat: "food",
    catLabel: "☕ Food / Cafe",
    icon: "☕",
    badge: "FOOD",
    rating: 4.6,
    reviews: 117,
    tips: 19,
    addr: "Lapuz, Iloilo City, 5000",
    mapQuery: "Lapuz+Iloilo+City",
    mapEmbed: "https://www.google.com/maps/embed?pb=...",
    dirLink: "https://www.google.com/maps/dir//Lapuz+Iloilo+City",
    status: "Open",
    hours: {
      Mon: "7AM–9PM",
      Tue: "7AM–9PM",
      Wed: "7AM–9PM",
      Thu: "7AM–9PM",
      Fri: "7AM–10PM",
      Sat: "8AM–10PM",
      Sun: "9AM–8PM",
    },
    info: {
      Phone: "+63 916 678 9012",
      Category: "Cafe",
      District: "Lapuz",
      "Price Range": "₱80–₱350",
    },
    posts: [
      {
        type: "kudos",
        name: "Rina Santos",
        stars: 5,
        desc: "Cozy vibe makes it perfect for studying.",
      },
      {
        type: "tip",
        name: "Leo Cabreza",
        stars: 4,
        desc: "Free WiFi is fast and reliable.",
      },
    ],
  },
];

// ===================== STATE =====================
let currentProfile = null;
let selectedRatingVal = 0;
let selectedRating2Val = 0;
let currentFilter = "all";
let allPosts = [];
let previousPage = "services";

// Initialize Global Posts from Data
SERVICES.forEach((s) => {
  s.posts.forEach((p) => {
    allPosts.push({ ...p, service: s.name, id: Math.random() });
  });
});

// ===================== NAVIGATION =====================
function showPage(pageId) {
  // Reset Mobile Menu
  const menu = document.getElementById("menuItems");
  if (menu) menu.classList.remove("open");

  // Hide everything
  document
    .querySelectorAll(".page, .profile-page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nav-links button")
    .forEach((b) => b.classList.remove("active"));

  // Show selected
  const pg =
    document.getElementById("page-" + pageId) ||
    document.getElementById(pageId);
  if (pg) pg.classList.add("active");

  const btn = document.getElementById("nav-" + pageId);
  if (btn) btn.classList.add("active");

  // Load content dynamically
  if (pageId === "services") renderServices("all");
  if (pageId === "community") renderPosts("all");

  window.scrollTo(0, 0);
}

function toggleMenu() {
  const menu = document.getElementById("menuItems");
  if (menu) menu.classList.toggle("open");
}

// ===================== SERVICES =====================
function renderServices(cat) {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  const filtered =
    cat === "all" ? SERVICES : SERVICES.filter((s) => s.cat === cat);
  grid.innerHTML = filtered
    .map(
      (s) => `
    <div class="service-card" onclick="showProfile('${s.id}')">
        <div class="service-card-top">
            <div class="service-icon">${s.icon}</div>
            <div class="service-badge">${s.badge}</div>
        </div>
        <div class="service-name">${s.name}</div>
        <div class="service-addr">📍 ${s.addr}</div>
        <div class="service-rating-row">
            <div class="big-rating">${s.rating}</div>
            <div class="rating-meta">
                <div class="stars">${getStars(s.rating)}</div>
                <div class="count">${s.reviews} reviews</div>
            </div>
        </div>
        <div class="service-card-footer">
            <button class="btn-sm btn-sm-primary" onclick="event.stopPropagation();showProfile('${s.id}')">View Profile</button>
            <button class="btn-sm btn-sm-ghost" onclick="event.stopPropagation();getDirections('${s.id}')">Directions</button>
        </div>
    </div>
    `,
    )
    .join("");
}

function filterCat(btn, cat) {
  document
    .querySelectorAll(".cat-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderServices(cat);
}

function getStars(r) {
  const full = Math.floor(r);
  const half = r % 1 >= 0.5 ? 1 : 0;
  return (
    "★".repeat(full) +
    (half ? "½" : "") +
    "☆".repeat(Math.max(0, 5 - full - half))
  );
}

// ===================== PROFILE =====================
function showProfile(id) {
  const s = SERVICES.find((x) => x.id === id);
  if (!s) return;
  currentProfile = s;
  previousPage = "services";

  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("profile-page").classList.add("active");

  // UI Updates
  document.getElementById("p-cat").textContent = s.catLabel;
  document.getElementById("p-name").textContent = s.name;
  document.getElementById("p-addr").textContent = s.addr;
  document.getElementById("p-rating").textContent = s.rating;
  document.getElementById("p-reviews").textContent = s.reviews;
  document.getElementById("p-tips").textContent = s.tips;
  document.getElementById("p-map").src = s.mapEmbed;

  // Load Details
  const servicePosts = allPosts.filter((p) => p.service === s.name);
  document.getElementById("p-reviews-list").innerHTML =
    servicePosts
      .map(
        (p) => `
    <div class="review-card">
        <div class="review-header">
            <div class="reviewer-name">${p.name}</div>
            <span class="review-badge badge-${p.type}">${p.type.toUpperCase()}</span>
        </div>
        <div class="review-stars">${"★".repeat(p.stars)}${"☆".repeat(5 - p.stars)}</div>
        <div class="review-text">${p.desc}</div>
    </div>
    `,
      )
      .join("") || '<p style="color:var(--muted);">No reviews yet.</p>';

  document.getElementById("p-info").innerHTML =
    Object.entries(s.info)
      .map(
        ([k, v]) => `
    <div class="info-row"><span class="key">${k}</span><span class="val">${v}</span></div>
    `,
      )
      .join("") +
    `<div class="info-row"><span class="key">Status</span><span class="val ${s.status.includes("Open") ? "open-badge" : "closed-badge"}">${s.status}</span></div>`;

  document.getElementById("p-hours").innerHTML = Object.entries(s.hours)
    .map(
      ([day, time]) => `
    <div class="info-row"><span class="key">${day}</span><span class="val">${time}</span></div>
    `,
    )
    .join("");

  window.scrollTo(0, 0);
}

function goBack() {
  document.getElementById("profile-page").classList.remove("active");
  showPage(previousPage);
}

function getDirections(id) {
  const s = SERVICES.find((x) => x.id === id);
  if (s) window.open(s.dirLink, "_blank");
}

function openDirections() {
  if (currentProfile) window.open(currentProfile.dirLink, "_blank");
}

function saveService() {
  showToast("🔖 Service saved to your list!");
}

// ===================== COMMUNITY FEED =====================
function renderPosts(filter) {
  const list = document.getElementById("posts-list");
  if (!list) return;

  const filtered =
    filter === "all" ? allPosts : allPosts.filter((p) => p.type === filter);
  list.innerHTML = filtered
    .slice()
    .reverse()
    .map(
      (p) => `
    <div class="post-card">
        <div class="post-header">
            <span class="post-type-badge type-${p.type}">${p.type.toUpperCase()}</span>
            <span class="post-meta">${p.service}</span>
        </div>
        <div class="post-service">${p.service}</div>
        <div class="post-desc">${p.desc}</div>
        <div class="post-footer">
            <span class="post-stars">${"★".repeat(p.stars)}${"☆".repeat(5 - p.stars)}</span>
            <span class="post-author">— ${p.name}</span>
            <button class="helpful-btn" onclick="this.textContent='✓ Helpful'">Helpful?</button>
        </div>
    </div>
    `,
    )
    .join("");
}

function filterPosts(btn, type) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = type;
  renderPosts(type);
}

// ===================== FORM HANDLING =====================
function setRating(n) {
  selectedRatingVal = n;
  document
    .querySelectorAll("#star-input span")
    .forEach((s, i) => s.classList.toggle("active", i < n));
}

function setRating2(n) {
  selectedRating2Val = n;
  document
    .querySelectorAll("#m-star-input span")
    .forEach((s, i) => s.classList.toggle("active", i < n));
}

function submitPost() {
  const type = document.getElementById("tip-type").value;
  const service = document.getElementById("tip-service").value;
  const name = document.getElementById("tip-name").value.trim() || "Anonymous";
  const desc = document.getElementById("tip-desc").value.trim();

  if (!desc) return alert("Please write a description.");

  allPosts.push({
    type,
    service,
    name,
    stars: selectedRatingVal || 4,
    desc,
    id: Math.random(),
  });

  document.getElementById("post-success").style.display = "block";
  document.getElementById("tip-desc").value = "";
  document.getElementById("tip-name").value = "";
  setRating(0);

  setTimeout(() => {
    document.getElementById("post-success").style.display = "none";
  }, 3000);
  renderPosts(currentFilter);
  showToast("✓ Tip posted!");
}

// ===================== MODAL =====================
function showPostModal() {
  document.getElementById("post-modal").classList.add("open");
}

function closeModal() {
  document.getElementById("post-modal").classList.remove("open");
  document.getElementById("modal-success").style.display = "none";
}

function submitModalPost() {
  const type = document.getElementById("m-type").value;
  const name = document.getElementById("m-name").value.trim() || "Anonymous";
  const desc = document.getElementById("m-desc").value.trim();

  if (!desc) return alert("Please write a description.");

  if (currentProfile) {
    allPosts.push({
      type,
      service: currentProfile.name,
      name,
      stars: selectedRating2Val || 4,
      desc,
      id: Math.random(),
    });
    currentProfile.tips++;

    document.getElementById("modal-success").style.display = "block";
    document.getElementById("m-desc").value = "";
    document.getElementById("m-name").value = "";
    setRating2(0);

    showProfile(currentProfile.id);
    setTimeout(() => {
      closeModal();
    }, 1500);
    showToast("✓ Tip posted!");
  }
}

// ===================== CONTACT & UTILS =====================
function submitContact() {
  const name = document.getElementById("c-name").value.trim();
  const msg = document.getElementById("c-msg").value.trim();
  if (!name || !msg) return alert("Please fill in your name and message.");

  document.getElementById("contact-success").style.display = "block";
  document.getElementById("c-name").value = "";
  document.getElementById("c-email").value = "";
  document.getElementById("c-msg").value = "";

  showToast("✉️ Message sent!");
  setTimeout(() => {
    document.getElementById("contact-success").style.display = "none";
  }, 4000);
}

function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

// ===================== INITIALIZE =====================
document.addEventListener("DOMContentLoaded", () => {
  renderServices("all");
  renderPosts("all");
});
