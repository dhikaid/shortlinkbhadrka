document.documentElement.classList.replace("no-js", "js");

// ============================================================
// LAYOUT CONFIG — "style dynamic". Ditulis ke CSS sebagai
// custom properties; CSS hanya membaca variabelnya.
// ============================================================
const LAYOUT = {
  max: "30rem",
  maxDesktop: "66rem",
  padX: "clamp(1.5rem, 4.5vw, 3rem)",
  split: [2, 3],
  splitGap: "3.5rem",
  cardGap: "0.9rem",
  cardRadius: "1.25rem",
  rowGap: "2.75rem",
  bentoCols: 2,
  skeletonMs: 900, // durasi minimum skeleton — dinikmati di jaringan cepat maupun lambat
};

function applyLayout() {
  const root = document.documentElement.style;
  const set = (key, value) => root.setProperty(key, value);
  set("--layout-max", LAYOUT.max);
  set("--layout-max-lg", LAYOUT.maxDesktop);
  set("--layout-pad-x", LAYOUT.padX);
  set("--split-left", `${LAYOUT.split[0]}fr`);
  set("--split-right", `${LAYOUT.split[1]}fr`);
  set("--split-gap", LAYOUT.splitGap);
  set("--card-gap", LAYOUT.cardGap);
  set("--card-radius", LAYOUT.cardRadius);
  set("--row-gap", LAYOUT.rowGap);
  set("--cols", String(LAYOUT.bentoCols));
}

// ============================================================
// SUMBER DATA TUNGGAL.
// ============================================================
const defaultConfig = {
  profile: {
    picture: "src/img/profile-pp.png",
    name: "Bhadrika Aryaputra",
    title: "Backend Developer",
    verified: false,
  },
  links: [
    {
      icon: "fas fa-laptop-code",
      gradient: "portfolio",
      title: "Portfolio",
      description: "Lihat project Bhadrika",
      url: "https://web.bhadrikais.my.id",
      verified: false,
      maintenance: true,
    },
    {
      icon: "fab fa-github",
      gradient: "github",
      title: "GitHub",
      description: "Open source projects",
      url: "https://github.com/dhikaid",
      verified: false,
      maintenance: false,
    },
    {
      icon: "fab fa-linkedin",
      gradient: "linkedin",
      title: "LinkedIn",
      description: "Professional network",
      url: "https://www.linkedin.com/in/bhadrika05",
      verified: false,
      maintenance: false,
    },
    {
      icon: "fab fa-instagram",
      gradient: "instagram",
      title: "Instagram",
      description: "Bhadrika's daily life & tech",
      url: "https://www.instagram.com/bhadrika_aryaputra/",
      verified: true,
      maintenance: false,
    },
  ],
  socialLinks: [
    {
      icon: "fab fa-github",
      url: "https://github.com/dhikaid",
      label: "GitHub",
      color: "text-gray-700 hover:text-gray-900",
    },
    {
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/bhadrika05",
      label: "LinkedIn",
      color: "text-gray-700 hover:text-blue-600",
    },
    {
      icon: "fas fa-envelope",
      url: "mailto:me@bhadrikais.my.id",
      label: "Email",
      color: "text-gray-700 hover:text-red-500",
    },
  ],
  footerText:
    "Built with ❤️ by Bhadrika A (2020 - " +
    new Date().getFullYear() +
    ")",
  pageTitle: "Bhadrika Aryaputra - Backend Developer | Portfolio & Links",
};

const ICON_BY_CLASS = {
  "fas fa-laptop-code": "briefcase",
  "fab fa-github": "github",
  "fab fa-linkedin": "linkedin",
  "fab fa-instagram": "instagram",
  "fas fa-envelope": "mail",
};

const LINKS = defaultConfig.links.map((link, index) => ({
  label: link.title,
  note: link.description,
  icon: ICON_BY_CLASS[link.icon] || "arrow",
  href: link.url,
  external: /^https?:\/\//.test(link.url),
  maintenance: link.maintenance,
  verified: link.verified,
  span: index === 0 || index === defaultConfig.links.length - 1 ? 2 : 1,
}));

const SOCIAL_LINKS = defaultConfig.socialLinks;

const ICONS = {
  briefcase:
    '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  github:
    '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  instagram:
    '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  youtube:
    '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  arrow: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  lock: '<rect width="16" height="12" x="4" y="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
};

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls) => {
  const n = document.createElement(tag);
  n.className = cls;
  return n;
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

let stagger = 2;
const nextStagger = () => String(Math.min(stagger++, 8));

// ------------------------------------------------------------
// Sinkronisasi skeleton ↔ data: span tiap kartu skeleton mengikuti
// LINKS, kelebihan kartu dihapus, kekurangan di-clone dari terakhir.
// ------------------------------------------------------------
function syncSkeleton() {
  const grid = $("#sk-bento");
  const cards = [...grid.children];
  for (let i = 0; i < LINKS.length; i++) {
    let node = cards[i];
    if (!node) {
      node = cards[cards.length - 1].cloneNode(true);
      grid.append(node);
    }
    node.style.setProperty(
      "--span",
      String(Math.min(LINKS[i].span ?? 1, LAYOUT.bentoCols)),
    );
  }
  for (const extra of cards.slice(LINKS.length)) extra.remove();
}

// ------------------------------------------------------------
// Komponen kartu bento (unified). Label & note via textContent —
// aman dari karakter '<'. Render idempoten via replaceChildren.
// ------------------------------------------------------------
function createBentoCard(link, index) {
  const a = el(
    "a",
    `bcard js-card rise${link.maintenance ? " is-disabled" : ""}`,
  );
  a.setAttribute(
    "aria-label",
    `${link.label} — ${link.note}${link.verified ? " — Verified" : ""}${link.maintenance ? " — Maintenance, disabled" : ""}`,
  );
  a.dataset.verified = String(Boolean(link.verified));
  a.dataset.maintenance = String(Boolean(link.maintenance));
  if (link.maintenance) {
    a.setAttribute("aria-disabled", "true");
    a.setAttribute("tabindex", "-1");
    a.addEventListener("click", (event) => event.preventDefault());
  } else {
    a.href = link.href;
  }
  a.style.setProperty("--stagger", nextStagger());
  a.style.setProperty(
    "--span",
    String(Math.min(link.span ?? 1, LAYOUT.bentoCols)),
  );
  if (link.external && !link.maintenance) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }

  const top = el("span", "bcard-top");
  const ico = el("span", "bcard-icon");
  ico.innerHTML = icon(link.icon);
  const idx = el("span", "bcard-index");
  idx.textContent = String(index + 1).padStart(2, "0");
  idx.setAttribute("aria-hidden", "true");
  top.append(ico, idx);

  const body = el("span", "bcard-body");
  const label = el("span", "bcard-label");
  label.textContent = link.label;
  const note = el("span", "bcard-note");
  note.textContent = link.maintenance ? "Sedang disiapkan" : link.note;
  body.append(label, note);
  if (link.maintenance) {
    const status = el("span", "bcard-status");
    status.innerHTML = `${icon("lock")}<span>Maintenance</span>`;
    body.append(status);
  }

  const arrow = el("span", "bcard-arrow");
  arrow.innerHTML = icon("arrow");

  a.append(top, body);
  if (!link.maintenance) a.append(arrow);
  return a;
}

function renderBento() {
  $("#bento").replaceChildren(...LINKS.map(createBentoCard));
  $("#link-count").textContent = String(LINKS.length).padStart(2, "0");
  $("#kbd-max").textContent = String(LINKS.length);
}

function createSocialLink(social) {
  const a = el("a", "pill");
  a.href = social.url;
  a.setAttribute("aria-label", social.label || social.icon);
  a.innerHTML = icon(ICON_BY_CLASS[social.icon] || "arrow");
  a.append(document.createTextNode(social.label));
  return a;
}

function renderSocialLinks() {
  $("#social-links").replaceChildren(...SOCIAL_LINKS.map(createSocialLink));
}



// ------------------------------------------------------------
// REVEAL GATE — inti skeleton experience:
// tunggu MAKSIMUM antara (durasi minimum skeleton) dan
// (font siap). Jaringan cepat → skeleton tetap tampil penuh;
// jaringan lambat → skeleton menunggu lebih lama, otomatis.
// Guard is-ready mencegah double-reveal (race condition).
// ------------------------------------------------------------
async function revealApp() {
  const frame = $("#frame");
  if (frame.classList.contains("is-ready")) return;

  const minWait = new Promise((resolve) =>
    setTimeout(resolve, LAYOUT.skeletonMs),
  );
  await Promise.all([minWait, document.fonts.ready]);

  frame.classList.add("is-ready");
  frame.setAttribute("aria-busy", "false");
  setTimeout(() => $("#skeleton")?.remove(), 450); // beres setelah crossfade selesai
}

function initAvatar() {
  $("#avatar-img").addEventListener("error", (e) => e.target.remove(), {
    once: true,
  });
}

function initShortcuts() {
  document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey)
      return;
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      (target.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
    )
      return;

    const index = Number(event.key) - 1;
    if (!Number.isInteger(index) || index < 0 || index >= LINKS.length)
      return;

    const card = $("#bento")?.children[index];
    if (!(card instanceof HTMLAnchorElement)) return;
    if (card.dataset.maintenance === "true") return;
    event.preventDefault();
    card.click();
  });
}

// type="module" dieksekusi setelah parsing selesai → bebas race condition DOM.
$("#current-year").textContent = String(new Date().getFullYear());
document.title = defaultConfig.pageTitle;
applyLayout();
renderBento();
renderSocialLinks();
syncSkeleton();
initAvatar();
initShortcuts();
revealApp();
