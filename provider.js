const providerRoles = [
  { id: "electrician", label: "Electrician", icon: "E" },
  { id: "plumber", label: "Plumber", icon: "P" },
  { id: "painter", label: "Painter", icon: "PA" },
  { id: "barber", label: "Barber", icon: "B" },
  { id: "ac", label: "AC Technician", icon: "AC" },
  { id: "cleaner", label: "Cleaning", icon: "C" },
  { id: "mechanic", label: "Mechanic", icon: "M" },
  { id: "carpenter", label: "Carpenter", icon: "CA" },
  { id: "cook", label: "Home Cook", icon: "HC" },
  { id: "delivery", label: "Delivery", icon: "D" },
  { id: "shop", label: "Shop / Seller", icon: "S" },
  { id: "other", label: "Other service", icon: "+" },
];

const requestCatalog = {
  "fan-repair": {
    icon: "F",
    title: "2 ceiling fan repair",
    meta: "1.8 km · customer को अभी service चाहिए",
    travel: 7,
    work: 65,
    price: 290,
  },
  "switch-repair": {
    icon: "S",
    title: "3 sockets बदलने हैं",
    meta: "3.2 km · आज शाम 5 बजे",
    travel: 12,
    work: 45,
    price: 350,
  },
  inverter: {
    icon: "I",
    title: "New inverter connection",
    meta: "4.6 km · कल सुबह",
    travel: 18,
    work: 110,
    price: 850,
  },
};

const roleRequestCatalog = {
  electrician: [
    { id: "fan-repair", icon: "F", category: "FAN REPAIR", title: "2 ceiling fan repair", description: "आवाज और low speed issue · wiring check", distance: "1.8 km", when: "अभी", travel: 7, work: 65, workLabel: "55–70 min work", customer: "4.8", price: 290 },
    { id: "switch-repair", icon: "S", category: "SWITCH / SOCKET", title: "3 sockets बदलने हैं", description: "Material customer के पास है · शाम 5 बजे", distance: "3.2 km", when: "आज", travel: 12, work: 45, workLabel: "35–50 min work", customer: "4.9", price: 350 },
    { id: "inverter", icon: "I", category: "INVERTER", title: "New inverter connection", description: "Battery + inverter wiring · site photo attached", distance: "4.6 km", when: "कल", travel: 18, work: 110, workLabel: "90–120 min work", customer: "4.7", price: 850 },
  ],
  plumber: [
    { id: "tap-leak", icon: "T", category: "LEAK REPAIR", title: "Kitchen tap leak repair", description: "Tap लगातार टपक रहा है · photo attached", distance: "1.4 km", when: "अभी", travel: 6, work: 40, workLabel: "30–45 min work", customer: "4.9", price: 260 },
    { id: "washbasin", icon: "W", category: "WASHBASIN", title: "Washbasin pipe बदलना है", description: "Flexible pipe और fitting की जरूरत", distance: "2.9 km", when: "आज", travel: 11, work: 55, workLabel: "45–60 min work", customer: "4.8", price: 420 },
    { id: "tank-valve", icon: "V", category: "WATER TANK", title: "Tank float valve repair", description: "पानी overflow हो रहा है · terrace access", distance: "4.1 km", when: "आज", travel: 16, work: 70, workLabel: "60–80 min work", customer: "4.7", price: 580 },
  ],
  painter: [
    { id: "room-paint", icon: "P", category: "WALL PAINT", title: "1 room wall repaint", description: "12×10 room · light colour · material quote भी चाहिए", distance: "1.6 km", when: "अभी", travel: 7, work: 240, workLabel: "3–5 hr work", customer: "4.9", price: 1800 },
    { id: "damp-patch", icon: "D", category: "PATCH PAINT", title: "Damp wall patch repair", description: "लगभग 18 sq ft patch · photos attached", distance: "3.1 km", when: "आज", travel: 12, work: 120, workLabel: "90–150 min work", customer: "4.8", price: 950 },
    { id: "door-polish", icon: "W", category: "WOOD POLISH", title: "2 doors polish कराने हैं", description: "Old polish refresh · shade suggestion चाहिए", distance: "4.8 km", when: "कल", travel: 19, work: 300, workLabel: "4–6 hr work", customer: "4.7", price: 2400 },
  ],
  barber: [
    { id: "home-haircut", icon: "H", category: "HOME HAIRCUT", title: "Men haircut at home", description: "Regular haircut · customer के पास chair है", distance: "1.2 km", when: "अभी", travel: 5, work: 35, workLabel: "25–40 min work", customer: "4.9", price: 220 },
    { id: "hair-beard", icon: "B", category: "HAIR + BEARD", title: "Haircut और beard trim", description: "Home visit · kit और hygiene cover साथ लाएँ", distance: "2.7 km", when: "आज", travel: 10, work: 55, workLabel: "45–60 min work", customer: "4.8", price: 360 },
    { id: "senior-cut", icon: "S", category: "SENIOR CARE", title: "Senior citizen haircut", description: "Gentle home service · ground floor", distance: "4.0 km", when: "आज", travel: 16, work: 40, workLabel: "30–45 min work", customer: "5.0", price: 280 },
  ],
  ac: [
    { id: "ac-cooling", icon: "AC", category: "AC REPAIR", title: "AC cooling कम है", description: "1.5 ton split AC · error code नहीं दिख रहा", distance: "1.9 km", when: "अभी", travel: 8, work: 75, workLabel: "60–90 min work", customer: "4.8", price: 550 },
    { id: "ac-service", icon: "S", category: "AC SERVICE", title: "2 split AC wet service", description: "Outdoor units balcony में accessible हैं", distance: "3.4 km", when: "आज", travel: 13, work: 120, workLabel: "90–140 min work", customer: "4.9", price: 1100 },
    { id: "ac-install", icon: "I", category: "INSTALLATION", title: "Split AC installation", description: "Copper pipe 8 ft अनुमानित · new house", distance: "5.2 km", when: "कल", travel: 20, work: 180, workLabel: "2–4 hr work", customer: "4.7", price: 1800 },
  ],
  cleaner: [
    { id: "kitchen-clean", icon: "K", category: "DEEP CLEANING", title: "Kitchen deep cleaning", description: "Medium kitchen · chimney exterior included", distance: "1.5 km", when: "अभी", travel: 6, work: 150, workLabel: "2–3 hr work", customer: "4.9", price: 1250 },
    { id: "sofa-clean", icon: "S", category: "SOFA CLEANING", title: "5-seater sofa cleaning", description: "Fabric sofa · light stains · parking available", distance: "3.0 km", when: "आज", travel: 12, work: 100, workLabel: "80–120 min work", customer: "4.8", price: 980 },
    { id: "bathroom-clean", icon: "B", category: "BATHROOM", title: "2 bathroom deep clean", description: "Hard-water marks · supplies provider लाए", distance: "4.4 km", when: "कल", travel: 17, work: 140, workLabel: "2–3 hr work", customer: "4.7", price: 1350 },
  ],
  mechanic: [
    { id: "bike-start", icon: "B", category: "BIKE REPAIR", title: "Bike start नहीं हो रही", description: "Self और kick दोनों check करने हैं", distance: "1.3 km", when: "अभी", travel: 5, work: 50, workLabel: "35–60 min work", customer: "4.8", price: 350 },
    { id: "car-battery", icon: "C", category: "CAR BATTERY", title: "Car battery jump-start", description: "Sedan parking में खड़ी है · easy access", distance: "2.8 km", when: "अभी", travel: 11, work: 30, workLabel: "20–35 min work", customer: "4.9", price: 450 },
    { id: "scooter-service", icon: "S", category: "SCOOTER", title: "Scooter basic service", description: "Oil change + brake adjustment quotation", distance: "4.6 km", when: "कल", travel: 18, work: 100, workLabel: "80–120 min work", customer: "4.7", price: 750 },
  ],
  carpenter: [
    { id: "door-align", icon: "D", category: "DOOR REPAIR", title: "Door alignment और lock fit", description: "Wooden door floor से rub कर रहा है", distance: "1.7 km", when: "अभी", travel: 7, work: 70, workLabel: "55–80 min work", customer: "4.9", price: 520 },
    { id: "hinge-repair", icon: "H", category: "CUPBOARD", title: "4 cupboard hinges बदलने हैं", description: "Soft-close hinge size photo attached", distance: "3.3 km", when: "आज", travel: 13, work: 85, workLabel: "70–100 min work", customer: "4.8", price: 680 },
    { id: "furniture-assembly", icon: "F", category: "ASSEMBLY", title: "Study table assemble करना है", description: "Flat-pack table · instruction sheet available", distance: "4.9 km", when: "कल", travel: 19, work: 120, workLabel: "90–140 min work", customer: "4.7", price: 900 },
  ],
  cook: [
    { id: "dinner-four", icon: "D", category: "HOME COOK", title: "4 लोगों का dinner बनाना है", description: "Dal, 1 sabzi, roti · ingredients घर पर हैं", distance: "1.4 km", when: "आज", travel: 6, work: 100, workLabel: "80–120 min work", customer: "4.9", price: 600 },
    { id: "meal-prep", icon: "M", category: "MEAL PREP", title: "3 दिन का meal prep", description: "Vegetarian · 2 adults · menu discuss करना है", distance: "3.0 km", when: "कल", travel: 12, work: 180, workLabel: "2–4 hr work", customer: "4.8", price: 1400 },
    { id: "party-cook", icon: "P", category: "SMALL PARTY", title: "12 guests के लिए cook", description: "North Indian dinner · helper available", distance: "5.0 km", when: "रविवार", travel: 20, work: 300, workLabel: "4–6 hr work", customer: "4.9", price: 3200 },
  ],
  delivery: [
    { id: "medicine-pickup", icon: "M", category: "MEDICINE", title: "Medicine pickup और delivery", description: "Prescription ready · prepaid pharmacy order", distance: "1.1 km", when: "अभी", travel: 5, work: 30, workLabel: "20–35 min trip", customer: "5.0", price: 90 },
    { id: "document-drop", icon: "D", category: "DOCUMENT", title: "Urgent document delivery", description: "Sealed envelope · receiver OTP required", distance: "3.5 km", when: "अभी", travel: 14, work: 45, workLabel: "35–55 min trip", customer: "4.9", price: 160 },
    { id: "grocery-pickup", icon: "G", category: "GROCERY", title: "Grocery order pickup", description: "Order packed है · 2 bags · online paid", distance: "4.7 km", when: "आज", travel: 18, work: 55, workLabel: "45–65 min trip", customer: "4.8", price: 190 },
  ],
  shop: [
    { id: "electric-material", icon: "E", category: "ELECTRICAL MATERIAL", title: "10 bundle 10 mm wire quotation", description: "Brand, GST bill, delivery time और final rate भेजें", distance: "1.9 km", when: "अभी", travel: 8, work: 35, workLabel: "Quote + delivery", customer: "4.8", price: 18600 },
    { id: "grocery-list", icon: "G", category: "GROCERY LIST", title: "Monthly grocery quotation", description: "24 items · preferred brands list attached", distance: "3.1 km", when: "आज", travel: 12, work: 60, workLabel: "Packing + delivery", customer: "4.9", price: 4250 },
    { id: "sanitary-material", icon: "S", category: "SANITARY MATERIAL", title: "Bathroom fittings quotation", description: "Tap, shower, health faucet · branded options चाहिए", distance: "4.5 km", when: "आज", travel: 18, work: 75, workLabel: "Quote + delivery", customer: "4.7", price: 7800 },
  ],
  other: [
    { id: "custom-now", icon: "Q", category: "CUSTOM REQUEST", title: "Nearby custom service request", description: "Customer ने requirement और photos share की हैं", distance: "1.8 km", when: "अभी", travel: 7, work: 60, workLabel: "Time आप बताइए", customer: "4.8", price: 500 },
    { id: "custom-today", icon: "Q", category: "SCHEDULED", title: "आज की scheduled requirement", description: "Details खोलकर अपना time और quote भेजें", distance: "3.2 km", when: "आज", travel: 12, work: 90, workLabel: "Scope पर निर्भर", customer: "4.9", price: 750 },
    { id: "custom-value", icon: "Q", category: "HIGH VALUE", title: "Detailed quotation चाहिए", description: "Material और labour अलग-अलग mention करें", distance: "4.6 km", when: "कल", travel: 18, work: 120, workLabel: "Site visit needed", customer: "4.7", price: 1200 },
  ],
};

const views = {
  welcome: document.querySelector("#welcomeView"),
  onboarding: document.querySelector("#onboardingView"),
  dashboard: document.querySelector("#dashboardView"),
  requests: document.querySelector("#requestsView"),
  active: document.querySelector("#activeView"),
  profile: document.querySelector("#profileView"),
};

const state = {
  currentView: "welcome",
  roleId: "electrician",
  roleLabel: "Electrician",
  radius: 5,
  partnerName: "Amit Electricals",
  initials: "AB",
  online: true,
  remainingMinutes: 8,
  selectedRequestId: "fan-repair",
  quote: null,
  activeJob: false,
  jobStage: 0,
  registrationId: null,
  toastTimer: null,
};

const providerBottomNav = document.querySelector("#providerBottomNav");
const providerRoleGrid = document.querySelector("#providerRoleGrid");
const customRoleWrap = document.querySelector("#customRoleWrap");
const customRole = document.querySelector("#customRole");
const providerOnboardingForm = document.querySelector("#providerOnboardingForm");
const partnerName = document.querySelector("#partnerName");
const partnerPhone = document.querySelector("#partnerPhone");
const partnerCity = document.querySelector("#partnerCity");
const availabilityToggle = document.querySelector("#availabilityToggle");
const availabilityTitle = document.querySelector("#availabilityTitle");
const availabilityCopy = document.querySelector("#availabilityCopy");
const remainingMinutes = document.querySelector("#remainingMinutes");
const remainingMinus = document.querySelector("#remainingMinus");
const remainingPlus = document.querySelector("#remainingPlus");
const quoteDialog = document.querySelector("#quoteDialog");
const quoteSentDialog = document.querySelector("#quoteSentDialog");
const quoteForm = document.querySelector("#quoteForm");
const quoteArrival = document.querySelector("#quoteArrival");
const quoteWorkTime = document.querySelector("#quoteWorkTime");
const quotePrice = document.querySelector("#quotePrice");
const providerToast = document.querySelector("#providerToast");
const emptyActiveJob = document.querySelector("#emptyActiveJob");
const liveActiveJob = document.querySelector("#liveActiveJob");
const activeJobBadge = document.querySelector("#activeJobBadge");
const advanceJobStatus = document.querySelector("#advanceJobStatus");

function setText(selector, text) {
  const node = document.querySelector(selector);
  if (node) node.textContent = text;
}

function getInitials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "QP";
  return parts.slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function showToast(message) {
  window.clearTimeout(state.toastTimer);
  providerToast.textContent = message;
  providerToast.classList.add("show");
  state.toastTimer = window.setTimeout(() => providerToast.classList.remove("show"), 3000);
}

function renderRoleGrid() {
  providerRoleGrid.innerHTML = providerRoles.map((role) => `
    <button
      class="provider-role-button${role.id === state.roleId ? " selected" : ""}"
      type="button"
      data-role-id="${role.id}"
      aria-pressed="${role.id === state.roleId}"
    >
      <span>${role.icon}</span>
      <strong>${role.label}</strong>
    </button>
  `).join("");
}

function showView(viewName) {
  if (!views[viewName]) return;
  Object.entries(views).forEach(([name, view]) => {
    view.hidden = name !== viewName;
  });
  state.currentView = viewName;

  const portalView = ["dashboard", "requests", "active", "profile"].includes(viewName);
  providerBottomNav.hidden = !portalView;
  providerBottomNav.querySelectorAll("[data-nav-target]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.navTarget === viewName);
  });

  const currentView = views[viewName];
  currentView.querySelector(".view-scroll, .portal-scroll")?.scrollTo?.({ top: 0, behavior: "auto" });
}

function updateProviderIdentity() {
  const shortName = state.partnerName.split(/\s+/)[0] || "Partner";
  setText("#dashboardPartnerName", shortName);
  setText("#dashboardRoleLabel", `${state.roleLabel} · ${state.radius} km radius`);
  setText("#dashboardPartnerName", shortName);
  setText("#partnerAvatar", state.initials);
  setText("#profileAvatar", state.initials);
  setText("#profileTitle", state.partnerName);
  setText("#profileRole", `${state.roleLabel} · ${state.radius} km service radius`);
  setText("#settingService", state.roleLabel);
  setText("#settingRadius", `${state.radius} km`);
  const badge = document.querySelector("#profileRegistrationBadge");
  if (badge && state.registrationId) badge.title = `Registration ${state.registrationId}`;
}

function renderRoleRequests() {
  const requests = roleRequestCatalog[state.roleId] || roleRequestCatalog.other;
  Object.keys(requestCatalog).forEach((key) => delete requestCatalog[key]);
  requests.forEach((request) => {
    requestCatalog[request.id] = {
      icon: request.icon,
      title: request.title,
      meta: `${request.distance} · customer को ${request.when === "अभी" ? "अभी service चाहिए" : request.when}`,
      travel: request.travel,
      work: request.work,
      price: request.price,
    };
  });
  state.selectedRequestId = requests[0].id;

  const priority = document.querySelector(".priority-request");
  priority.querySelector(".request-radar small").textContent = `${requests[0].distance} · fastest route`;
  priority.querySelector(".priority-copy small").textContent = `${requests[0].category} · ${requests[0].when}`;
  priority.querySelector(".priority-copy h2").textContent = requests[0].title;
  priority.querySelector(".priority-copy p").textContent = requests[0].description;
  const priorityFacts = priority.querySelectorAll(".request-facts strong");
  priorityFacts[0].textContent = requests[0].distance;
  priorityFacts[1].textContent = `${requests[0].customer} ★`;
  priorityFacts[2].textContent = requests[0].workLabel.replace(" work", "");
  const priorityQuoteButton = priority.querySelector(".quote-request-button");
  priorityQuoteButton.dataset.requestId = requests[0].id;
  priorityQuoteButton.disabled = false;
  priorityQuoteButton.innerHTML = `अपना time और quote भेजें <span>→</span>`;

  document.querySelector("#requestCount").textContent = String(requests.length);
  document.querySelector("#requestList").innerHTML = requests.map((request, index) => `
    <article class="request-card${index === 0 ? " featured-request-card" : ""}" data-request-card="${request.id}">
      <div class="request-card-top">
        <span class="request-type-icon">${request.icon}</span>
        <div><small>${request.category} · ${request.when}</small><strong>${request.title}</strong></div>
        <em>${request.distance}</em>
      </div>
      <p>${request.description}</p>
      <div class="request-card-meta"><span>${request.workLabel}</span><span>${request.customer} ★ customer</span></div>
      <button class="quote-request-button" type="button" data-request-id="${request.id}">Quote दें →</button>
    </article>
  `).join("");
}

function updateAvailability() {
  availabilityToggle.classList.toggle("online", state.online);
  availabilityToggle.setAttribute("aria-checked", String(state.online));
  availabilityTitle.textContent = state.online ? "ONLINE" : "OFFLINE";
  availabilityCopy.textContent = state.online
    ? "Nearby requests मिल सकती हैं"
    : "नई requests अभी pause हैं";
}

function updateRemainingMinutes(nextValue) {
  state.remainingMinutes = Math.max(0, Math.min(180, nextValue));
  remainingMinutes.textContent = String(state.remainingMinutes);
  remainingMinus.disabled = state.remainingMinutes <= 0;
  remainingPlus.disabled = state.remainingMinutes >= 180;
}

function updateQuotePreview() {
  const arrival = Math.max(1, Number(quoteArrival.value) || 1);
  const work = Math.max(10, Number(quoteWorkTime.value) || 10);
  const price = Math.max(1, Number(quotePrice.value) || 1);
  setText("#quoteArrivalPreview", `${arrival} min`);
  setText("#quoteSummaryText", `${arrival} min arrival · ${work} min work · ₹${price}`);
}

function openQuote(requestId) {
  const request = requestCatalog[requestId] || requestCatalog["fan-repair"];
  state.selectedRequestId = requestId in requestCatalog ? requestId : "fan-repair";
  setText("#quoteRequestIcon", request.icon);
  setText("#quoteRequestTitle", request.title);
  setText("#quoteRequestMeta", request.meta);
  setText("#quoteCurrentMinutes", String(state.remainingMinutes));
  setText("#quoteTravelMinutes", `${request.travel} min`);

  quoteArrival.value = String(state.remainingMinutes + request.travel);
  quoteWorkTime.value = String(request.work);
  quotePrice.value = String(request.price);
  document.querySelector("#quoteNote").value = "";
  updateQuotePreview();
  quoteDialog.showModal();
}

function markQuoteSent() {
  const card = document.querySelector(`[data-request-card="${state.selectedRequestId}"]`);
  const cardButton = card?.querySelector(".quote-request-button");
  if (cardButton) {
    cardButton.textContent = `Quote sent · ₹${state.quote.price}`;
    cardButton.disabled = true;
  }
  setText("#sentQuoteSummary", `${state.quote.arrival} min arrival · ₹${state.quote.price}`);
}

function activateDemoJob() {
  state.activeJob = true;
  state.jobStage = 0;
  emptyActiveJob.hidden = true;
  liveActiveJob.hidden = false;
  activeJobBadge.textContent = "BOOKED";
  setText("#activeJobSubtitle", "Customer ने आपका quote चुना · route तैयार है");
  setText("#activeJobName", requestCatalog[state.selectedRequestId]?.title || "Service request");
  setText("#activeEtaNumber", String(state.quote?.arrival || 15));
  renderJobStage();
  showView("active");
  showToast("Customer ने आपका quote चुन लिया। Booking active है।");
}

function renderJobStage() {
  const stageNodes = [
    document.querySelector("#stepDepart"),
    document.querySelector("#stepArrive"),
    document.querySelector("#stepWork"),
  ];
  stageNodes.forEach((node, index) => {
    node.classList.toggle("done", index < state.jobStage);
    node.classList.toggle("current", index === state.jobStage);
  });

  const stageCopy = [
    { badge: "BOOKED", button: "Customer की ओर निकलें", toast: "Route चालू है। Customer को आपका live ETA दिख रहा है।" },
    { badge: "ON THE WAY", button: "मैं पहुँच गया", toast: "Arrival customer को notify कर दिया गया।" },
    { badge: "ARRIVED", button: "काम शुरू करें", toast: "Work timer शुरू हो गया।" },
    { badge: "IN PROGRESS", button: "काम पूरा करें", toast: "Job complete हुआ। Earnings में payment जुड़ गया।" },
    { badge: "COMPLETED", button: "Dashboard पर जाएँ", toast: "बहुत बढ़िया—आज का job complete है।" },
  ];
  const copy = stageCopy[state.jobStage] || stageCopy[0];
  activeJobBadge.textContent = copy.badge;
  advanceJobStatus.innerHTML = `${copy.button} <span>→</span>`;
}

document.querySelector("#startRegistration").addEventListener("click", () => showView("onboarding"));
document.querySelector("#openProviderDemo").addEventListener("click", () => {
  renderRoleRequests();
  updateProviderIdentity();
  showView("dashboard");
  showToast("Demo partner dashboard खुल गया।");
});

document.querySelectorAll("[data-view-target]").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewTarget));
});

providerRoleGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-role-id]");
  if (!button) return;
  const role = providerRoles.find((item) => item.id === button.dataset.roleId);
  if (!role) return;
  state.roleId = role.id;
  state.roleLabel = role.label;
  customRoleWrap.hidden = role.id !== "other";
  renderRoleGrid();
});

document.querySelector(".radius-options").addEventListener("click", (event) => {
  const button = event.target.closest("[data-radius]");
  if (!button) return;
  state.radius = Number(button.dataset.radius);
  document.querySelectorAll("[data-radius]").forEach((option) => {
    option.classList.toggle("selected", option === button);
  });
});

providerOnboardingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!providerOnboardingForm.reportValidity()) return;
  if (state.roleId === "other") {
    const customLabel = customRole.value.trim();
    if (!customLabel) {
      customRole.focus();
      showToast("अपनी service का नाम लिखिए।");
      return;
    }
    state.roleLabel = customLabel;
  }
  state.partnerName = partnerName.value.trim();
  state.initials = getInitials(state.partnerName);
  const submitButton = providerOnboardingForm.querySelector(".onboarding-submit");
  submitButton.disabled = true;
  submitButton.textContent = "Profile save हो रही है…";
  try {
    if (!window.QigoPlatform?.register) throw new Error("Registration service connect नहीं हुई।");
    const result = await window.QigoPlatform.register({
      role: "provider",
      name: state.partnerName,
      phone: partnerPhone.value,
      city: partnerCity.value.trim(),
      service: state.roleLabel,
      radiusKm: state.radius,
      consent: document.querySelector("#partnerConsent").checked,
    });
    state.registrationId = result.registrationId;
    renderRoleRequests();
    updateProviderIdentity();
    showView("dashboard");
    showToast(`Registration save हुआ · ${state.registrationId} · Mobile verification pending`);
  } catch (error) {
    showToast(error.message || "Registration save नहीं हुआ। दोबारा कोशिश करें।");
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = 'Profile save करके dashboard खोलें <span>→</span>';
  }
});

availabilityToggle.addEventListener("click", () => {
  state.online = !state.online;
  updateAvailability();
  showToast(state.online ? "आप online हैं। Nearby requests चालू हैं।" : "आप offline हैं। नई requests pause हैं।");
});

remainingMinus.addEventListener("click", () => updateRemainingMinutes(state.remainingMinutes - 1));
remainingPlus.addEventListener("click", () => updateRemainingMinutes(state.remainingMinutes + 1));

document.querySelectorAll("[data-nav-target]").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.navTarget));
});

document.querySelectorAll(".request-filter-row button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".request-filter-row button").forEach((option) => option.classList.toggle("selected", option === button));
    showToast(`${button.textContent.trim()} requests दिख रही हैं।`);
  });
});

document.addEventListener("click", (event) => {
  const quoteButton = event.target.closest(".quote-request-button");
  if (!quoteButton || quoteButton.disabled) return;
  if (!state.online) {
    showToast("Quote देने के लिए पहले online आइए।");
    showView("dashboard");
    return;
  }
  openQuote(quoteButton.dataset.requestId);
});

document.querySelector("#closeQuoteDialog").addEventListener("click", () => quoteDialog.close());

[quoteArrival, quoteWorkTime, quotePrice].forEach((input) => {
  input.addEventListener("input", updateQuotePreview);
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!quoteForm.reportValidity()) return;
  state.quote = {
    arrival: Number(quoteArrival.value),
    work: Number(quoteWorkTime.value),
    price: Number(quotePrice.value),
    note: document.querySelector("#quoteNote").value.trim(),
  };
  markQuoteSent();
  quoteDialog.close();
  quoteSentDialog.showModal();
});

document.querySelector("#simulateCustomerSelection").addEventListener("click", () => {
  quoteSentDialog.close();
  activateDemoJob();
});

document.querySelector("#closeQuoteSent").addEventListener("click", () => {
  quoteSentDialog.close();
  showView("requests");
});

advanceJobStatus.addEventListener("click", () => {
  const messages = [
    "Route चालू है। Customer को आपका live ETA दिख रहा है।",
    "Arrival customer को notify कर दिया गया।",
    "Work timer शुरू हो गया।",
    "Job complete हुआ। Earnings में payment जुड़ गया।",
    "Dashboard पर वापस आ गए।",
  ];
  if (state.jobStage >= 4) {
    showView("dashboard");
    showToast(messages[4]);
    return;
  }
  state.jobStage += 1;
  renderJobStage();
  showToast(messages[state.jobStage - 1]);
});

document.querySelector("#callCustomerDemo").addEventListener("click", () => {
  showToast("Real app में secure in-app chat खुलेगी।");
});

document.querySelectorAll(".verification-list button, .profile-setting-card button").forEach((button) => {
  button.addEventListener("click", () => showToast("यह verification step backend जुड़ने पर active होगा।"));
});

renderRoleGrid();
renderRoleRequests();
updateAvailability();
updateRemainingMinutes(state.remainingMinutes);
updateProviderIdentity();
