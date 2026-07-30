const serviceIntents = [
  {
    id: "barber",
    label: "Haircut / Barber",
    icon: "✂",
    keywords: [
      "baal", "hair", "haircut", "hair cut", "barber", "nai", "salon", "cutting",
      "shave", "daadhi", "beard", "बाल", "नाई", "हेयरकट", "दाढ़ी",
    ],
    basePrice: "₹249+",
    providerRole: "HAIR PROFESSIONAL",
    providers: [
      { name: "Aman S.", initials: "AS", currentJob: 2, travel: 3, rating: 4.9, distance: 0.8 },
      { name: "Kabir R.", initials: "KR", currentJob: 0, travel: 8, rating: 4.8, distance: 1.7 },
      { name: "Salim H.", initials: "SH", currentJob: 6, travel: 4, rating: 4.9, distance: 1.1 },
      { name: "Rohit N.", initials: "RN", currentJob: 3, travel: 11, rating: 4.7, distance: 2.6 },
    ],
  },
  {
    id: "plumber",
    label: "Plumber",
    icon: "⌁",
    keywords: [
      "plumber", "nal", "tap", "pipe", "leak", "paani", "water", "flush", "drain",
      "toilet", "sink", "प्लंबर", "नल", "पानी", "लीक", "पाइप", "फ्लश",
    ],
    basePrice: "₹199+",
    providerRole: "PLUMBING PROFESSIONAL",
    providers: [
      { name: "Vikas P.", initials: "VP", currentJob: 1, travel: 4, rating: 4.8, distance: 0.9 },
      { name: "Nadeem A.", initials: "NA", currentJob: 4, travel: 4, rating: 4.9, distance: 1.2 },
      { name: "Sonu K.", initials: "SK", currentJob: 0, travel: 11, rating: 4.7, distance: 2.3 },
      { name: "Arjun M.", initials: "AM", currentJob: 7, travel: 7, rating: 4.8, distance: 2.0 },
    ],
  },
  {
    id: "electrician",
    label: "Electrician",
    icon: "ϟ",
    keywords: [
      "electrician", "electric", "bijli", "fan", "switch", "socket", "light", "wire",
      "wiring", "mcb", "fuse", "inverter", "बिजली", "पंखा", "स्विच", "वायरिंग",
    ],
    basePrice: "₹149+",
    providerRole: "ELECTRICAL PROFESSIONAL",
    providers: [
      { name: "Ravi E.", initials: "RE", currentJob: 0, travel: 5, rating: 4.9, distance: 1.0 },
      { name: "Faizan K.", initials: "FK", currentJob: 3, travel: 5, rating: 4.8, distance: 1.4 },
      { name: "Deepak J.", initials: "DJ", currentJob: 2, travel: 9, rating: 4.8, distance: 2.1 },
      { name: "Amit B.", initials: "AB", currentJob: 8, travel: 6, rating: 4.7, distance: 1.8 },
    ],
  },
  {
    id: "ac",
    label: "AC Technician",
    icon: "❄",
    keywords: [
      "ac", "air conditioner", "cooling", "thanda", "gas refill", "compressor",
      "split ac", "window ac", "एसी", "कूलिंग", "ठंडा", "गैस",
    ],
    basePrice: "₹299+",
    providerRole: "AC PROFESSIONAL",
    providers: [
      { name: "Imran C.", initials: "IC", currentJob: 1, travel: 5, rating: 4.9, distance: 1.1 },
      { name: "Sameer Q.", initials: "SQ", currentJob: 4, travel: 4, rating: 4.8, distance: 1.0 },
      { name: "Manoj T.", initials: "MT", currentJob: 0, travel: 12, rating: 4.8, distance: 2.8 },
      { name: "Danish R.", initials: "DR", currentJob: 7, travel: 7, rating: 4.7, distance: 2.0 },
    ],
  },
  {
    id: "cleaning",
    label: "Home Cleaning",
    icon: "✦",
    keywords: [
      "clean", "cleaning", "safai", "deep clean", "bathroom", "kitchen", "sofa",
      "carpet", "dust", "jhadu", "pocha", "सफाई", "बाथरूम", "सोफा",
    ],
    basePrice: "₹399+",
    providerRole: "CLEANING PROFESSIONAL",
    providers: [
      { name: "Neetu C.", initials: "NC", currentJob: 0, travel: 6, rating: 4.9, distance: 1.2 },
      { name: "Pooja H.", initials: "PH", currentJob: 3, travel: 5, rating: 4.8, distance: 1.4 },
      { name: "Sakshi G.", initials: "SG", currentJob: 5, travel: 6, rating: 4.8, distance: 1.8 },
      { name: "Rina S.", initials: "RS", currentJob: 2, travel: 12, rating: 4.7, distance: 2.9 },
    ],
  },
  {
    id: "appliance",
    label: "Appliance Technician",
    icon: "▣",
    keywords: [
      "fridge", "refrigerator", "washing machine", "washer", "microwave", "geyser",
      "chimney", "appliance", "machine", "फ्रिज", "वाशिंग मशीन", "गीजर",
    ],
    basePrice: "₹299+",
    providerRole: "APPLIANCE PROFESSIONAL",
    providers: [
      { name: "Manoj A.", initials: "MA", currentJob: 2, travel: 4, rating: 4.9, distance: 0.9 },
      { name: "Javed F.", initials: "JF", currentJob: 0, travel: 9, rating: 4.8, distance: 1.9 },
      { name: "Vijay D.", initials: "VD", currentJob: 4, travel: 7, rating: 4.8, distance: 1.8 },
      { name: "Karan U.", initials: "KU", currentJob: 8, travel: 6, rating: 4.7, distance: 2.2 },
    ],
  },
  {
    id: "carpenter",
    label: "Carpenter",
    icon: "⌂",
    keywords: [
      "carpenter", "mistri", "furniture", "door", "darwaza", "almari", "bed", "table",
      "chair", "wood", "shelf", "बढ़ई", "दरवाजा", "फर्नीचर",
    ],
    basePrice: "₹249+",
    providerRole: "CARPENTRY PROFESSIONAL",
    providers: [
      { name: "Mohan W.", initials: "MW", currentJob: 0, travel: 5, rating: 4.9, distance: 1.0 },
      { name: "Salim F.", initials: "SF", currentJob: 3, travel: 6, rating: 4.8, distance: 1.5 },
      { name: "Rakesh C.", initials: "RC", currentJob: 6, travel: 5, rating: 4.8, distance: 1.4 },
      { name: "Harish L.", initials: "HL", currentJob: 4, travel: 10, rating: 4.7, distance: 2.5 },
    ],
  },
  {
    id: "mechanic",
    label: "Vehicle Mechanic",
    icon: "●",
    keywords: [
      "bike", "car", "mechanic", "gaadi", "vehicle", "battery", "puncture", "tyre",
      "start nahi", "breakdown", "बाइक", "गाड़ी", "बैटरी", "पंचर",
    ],
    basePrice: "₹299+",
    providerRole: "VEHICLE PROFESSIONAL",
    providers: [
      { name: "Vikas M.", initials: "VM", currentJob: 1, travel: 4, rating: 4.8, distance: 0.8 },
      { name: "Faheem B.", initials: "FB", currentJob: 0, travel: 8, rating: 4.9, distance: 1.7 },
      { name: "Rohit K.", initials: "RK", currentJob: 5, travel: 6, rating: 4.8, distance: 1.9 },
      { name: "Azeem S.", initials: "AS", currentJob: 6, travel: 8, rating: 4.7, distance: 2.7 },
    ],
  },
  {
    id: "pest",
    label: "Pest Control",
    icon: "◇",
    keywords: [
      "pest", "cockroach", "termite", "deemak", "bed bug", "ants", "mosquito",
      "rat", "keede", "कॉकरोच", "दीमक", "खटमल", "चूहा",
    ],
    basePrice: "₹699+",
    providerRole: "PEST PROFESSIONAL",
    providers: [
      { name: "Nitin P.", initials: "NP", currentJob: 0, travel: 6, rating: 4.9, distance: 1.2 },
      { name: "Shahid V.", initials: "SV", currentJob: 3, travel: 6, rating: 4.8, distance: 1.6 },
      { name: "Ajay R.", initials: "AR", currentJob: 5, travel: 7, rating: 4.8, distance: 2.1 },
      { name: "Kunal H.", initials: "KH", currentJob: 7, travel: 7, rating: 4.7, distance: 2.4 },
    ],
  },
  {
    id: "general",
    label: "Local Service Expert",
    icon: "Q",
    keywords: [
      "help", "service", "expert", "technician", "repair", "kaam", "urgent", "madad",
      "सहायता", "मरम्मत", "काम",
    ],
    basePrice: "Scope-based",
    providerRole: "QIGO PROFESSIONAL",
    providers: [
      { name: "Qigo Pro 07", initials: "Q7", currentJob: 0, travel: 6, rating: 4.8, distance: 1.2 },
      { name: "Qigo Pro 12", initials: "Q12", currentJob: 4, travel: 5, rating: 4.8, distance: 1.5 },
      { name: "Qigo Pro 18", initials: "Q18", currentJob: 2, travel: 10, rating: 4.7, distance: 2.4 },
    ],
  },
];

const state = {
  query: "",
  intent: serviceIntents.at(-1),
  providers: [],
  selectedProvider: null,
  timers: [],
  toastTimer: null,
  placeholderTimer: null,
  placeholderIndex: 0,
  placeholderCharacter: 0,
  placeholderDeleting: false,
  demoMode: new URLSearchParams(window.location.search).get("demo") === "1",
  locationStatus: "pending",
};

const appShell = document.querySelector("#appShell");
const searchScene = document.querySelector("#searchScene");
const radarScene = document.querySelector("#radarScene");
const mainSearchForm = document.querySelector("#mainSearchForm");
const serviceQuery = document.querySelector("#serviceQuery");
const radarSearchForm = document.querySelector("#radarSearchForm");
const radarQuery = document.querySelector("#radarQuery");
const intentPreview = document.querySelector("#intentPreview");
const providerLayer = document.querySelector("#providerLayer");
const providerResponses = document.querySelector("#providerResponses");
const networkPulse = document.querySelector("#networkPulse");
const responseDock = document.querySelector("#responseDock");
const providerDialog = document.querySelector("#providerDialog");
const toast = document.querySelector("#toast");

function normalize(value) {
  return value
    .toLocaleLowerCase("hi-IN")
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function detectIntent(query) {
  const clean = normalize(query);
  let best = serviceIntents.at(-1);
  let bestScore = 0;

  for (const intent of serviceIntents.slice(0, -1)) {
    let score = 0;
    for (const keyword of intent.keywords) {
      const cleanKeyword = normalize(keyword);
      if (!cleanKeyword) continue;
      if (clean.includes(cleanKeyword)) {
        score += 10 + cleanKeyword.length;
      } else {
        const queryTokens = clean.split(" ");
        const keywordTokens = cleanKeyword.split(" ");
        for (const token of keywordTokens) {
          if (token.length > 2 && queryTokens.some((queryToken) => queryToken.startsWith(token) || token.startsWith(queryToken))) {
            score += 4;
          }
        }
      }
    }
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }

  return best;
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3200);
}

function addTimer(callback, delay) {
  const timer = window.setTimeout(callback, delay);
  state.timers.push(timer);
  return timer;
}

function clearSequence() {
  state.timers.forEach((timer) => window.clearTimeout(timer));
  state.timers = [];
}

const rotatingPlaceholders = [
  "बताइए, मैं आपके लिए क्या कर सकता हूँ?",
];

function stopPlaceholderAnimation() {
  window.clearTimeout(state.placeholderTimer);
  state.placeholderTimer = null;
}

function animateRequirementPlaceholder() {
  if (serviceQuery.value) {
    stopPlaceholderAnimation();
    return;
  }

  const message = rotatingPlaceholders[state.placeholderIndex];
  if (!state.placeholderDeleting) {
    state.placeholderCharacter += 1;
    serviceQuery.placeholder = message.slice(0, state.placeholderCharacter);
    if (state.placeholderCharacter >= message.length) {
      state.placeholderDeleting = true;
      state.placeholderTimer = window.setTimeout(animateRequirementPlaceholder, 1500);
      return;
    }
    state.placeholderTimer = window.setTimeout(animateRequirementPlaceholder, 65);
    return;
  }

  state.placeholderCharacter -= 1;
  serviceQuery.placeholder = message.slice(0, state.placeholderCharacter);
  if (state.placeholderCharacter <= 0) {
    state.placeholderDeleting = false;
    state.placeholderIndex = (state.placeholderIndex + 1) % rotatingPlaceholders.length;
    state.placeholderTimer = window.setTimeout(animateRequirementPlaceholder, 280);
    return;
  }
  state.placeholderTimer = window.setTimeout(animateRequirementPlaceholder, 28);
}

function startPlaceholderAnimation() {
  stopPlaceholderAnimation();
  if (serviceQuery.value) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    serviceQuery.placeholder = rotatingPlaceholders[0];
    return;
  }
  state.placeholderTimer = window.setTimeout(animateRequirementPlaceholder, 500);
}

function updateIntentPreview(query) {
  if (normalize(query).length < 2) {
    intentPreview.hidden = true;
    return;
  }
  const intent = detectIntent(query);
  setText("#intentIcon", intent.icon);
  setText("#intentLabel", intent.label);
  intentPreview.hidden = false;
}

function requestLiveLocation() {
  return new Promise((resolve) => {
    if (state.demoMode) {
      state.locationStatus = "demo";
      addTimer(() => resolve({ status: "demo" }), 450);
      return;
    }

    if (!navigator.geolocation) {
      state.locationStatus = "unavailable";
      resolve({ status: "unavailable" });
      return;
    }

    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      resolve(result);
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        state.locationStatus = "live";
        finish({
          status: "live",
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        state.locationStatus = "denied";
        finish({ status: "denied" });
      },
      { enableHighAccuracy: false, timeout: 4500, maximumAge: 120000 },
    );

    addTimer(() => {
      state.locationStatus = "timeout";
      finish({ status: "timeout" });
    }, 4800);
  });
}

function positionForProvider(provider, index, total) {
  const eta = provider.currentJob + provider.travel;
  const radius = Math.max(13, Math.min(46, (eta / 15) * 46));
  const baseAngles = [-36, 64, 154, 235, 302];
  const angle = (baseAngles[index] ?? (360 / total) * index - 40) * (Math.PI / 180);
  return {
    x: 50 + Math.cos(angle) * radius,
    y: 50 + Math.sin(angle) * radius,
  };
}

function prepareProviders(intent) {
  return intent.providers
    .map((provider, index) => ({
      ...provider,
      id: `${intent.id}-${index + 1}`,
      eta: provider.currentJob + provider.travel,
      skill: intent.providerRole,
      price: intent.basePrice,
    }))
    .sort((a, b) => a.eta - b.eta);
}

function renderProviderNodes() {
  providerLayer.innerHTML = state.providers
    .map((provider, index) => {
      const position = positionForProvider(provider, index, state.providers.length);
      return `
        <button
          class="provider-node${index === 0 ? " fastest" : ""}"
          type="button"
          data-provider-id="${provider.id}"
          style="--x:${position.x}%;--y:${position.y}%;--delay:${index * 150}ms"
          aria-label="${provider.name}, ${provider.eta} minute"
        >
          <span class="node-avatar">${provider.initials}</span>
          <span class="node-eta"><strong>${provider.eta}</strong><small>min</small></span>
        </button>
      `;
    })
    .join("");
}

function renderProviderResponses() {
  providerResponses.innerHTML = state.providers
    .map(
      (provider, index) => `
        <button
          class="provider-response${index === 0 ? " fastest" : ""}"
          type="button"
          data-provider-id="${provider.id}"
          aria-label="${provider.name} select karein, ${provider.eta} minute"
        >
          <span class="response-avatar">${provider.initials}</span>
          <span class="response-copy">
            <b>${provider.name}</b>
            <span>${provider.currentJob}m job + ${provider.travel}m route · ${provider.rating} ★</span>
          </span>
          <span class="response-eta"><strong>${provider.eta}</strong><small>min</small></span>
        </button>
      `,
    )
    .join("");
  setText("#responseCount", String(state.providers.length));
}

function setLocationLabel(location) {
  if (location.status === "live") {
    setText("#locationLabel", "Live location locked");
    return;
  }
  if (location.status === "demo") {
    setText("#locationLabel", "Demo location · preview mode");
    return;
  }
  setText("#locationLabel", "Location unavailable · demo radius");
}

function startNetworkSequence(location) {
  const providerCount = state.providers.length;
  setLocationLabel(location);
  setText("#capsuleStatus", "Qualified providers ko ping kiya ja raha hai");
  setText("#pulseTitle", "Aas-paas signal bhej raha hoon");
  setText("#pulseDetail", `${providerCount} qualified providers is geofence mein mile`);
  setText("#networkStateText", "Scanning geofence");
  networkPulse.classList.remove("done");
  responseDock.hidden = true;
  providerLayer.innerHTML = "";

  renderProviderNodes();
  renderProviderResponses();

  addTimer(() => {
    document.querySelectorAll(".provider-node").forEach((node) => node.classList.add("visible"));
    setText("#capsuleStatus", "Provider replies aa rahi hain");
    setText("#pulseTitle", `${providerCount} professionals ne signal dekha`);
    setText("#pulseDetail", "Unka bacha hua kaam aur travel time jod raha hoon…");
  }, 850);

  addTimer(() => {
    networkPulse.classList.add("done");
    responseDock.hidden = false;
    setText("#networkStateText", "Live replies");
    setText("#capsuleStatus", "Prototype network · live ETA simulation");
  }, 1750);
}

async function runRadarSearch(query) {
  const trimmed = query.trim();
  if (!trimmed) {
    serviceQuery.focus();
    return;
  }

  clearSequence();
  state.query = trimmed;
  state.intent = detectIntent(trimmed);
  state.providers = prepareProviders(state.intent);
  radarQuery.value = trimmed;

  searchScene.hidden = true;
  radarScene.hidden = false;
  appShell.classList.add("radar-active");
  providerDialog.close?.();

  setText("#matchedService", state.intent.label);
  setText("#capsuleStatus", "Live location connect ho rahi hai…");
  setText("#networkStateText", "Locating you");
  setText("#responseTitle", `${state.intent.label}: kaun sabse jaldi aa sakta hai?`);
  setText("#pulseTitle", "Aapki live location dhoondh raha hoon");
  setText("#pulseDetail", "Location sirf nearby matching ke liye use hogi");
  setText("#locationLabel", "Live location connect ho rahi hai…");
  networkPulse.classList.remove("done");
  responseDock.hidden = true;
  providerLayer.innerHTML = "";

  const location = await requestLiveLocation();
  startNetworkSequence(location);
}

function resetHome() {
  clearSequence();
  radarScene.hidden = true;
  searchScene.hidden = false;
  appShell.classList.remove("radar-active");
  providerDialog.close?.();
  serviceQuery.value = state.query;
  updateIntentPreview(serviceQuery.value);
  setText("#networkStateText", "AI network ready");
  window.setTimeout(() => serviceQuery.focus(), 120);
}

function openProvider(providerId) {
  const provider = state.providers.find((item) => item.id === providerId);
  if (!provider) return;
  state.selectedProvider = provider;

  setText("#dialogAvatar", provider.initials);
  setText("#dialogSkill", provider.skill);
  setText("#dialogName", provider.name);
  setText("#dialogEta", String(provider.eta));
  const dialogEta = document.querySelector("#dialogEta");
  const minLabel = document.createElement("small");
  minLabel.textContent = "min";
  dialogEta.appendChild(minLabel);
  setText("#dialogJobTime", `${provider.currentJob} min`);
  setText("#dialogTravelTime", `${provider.travel} min`);
  setText("#dialogTotalTime", `${provider.eta} min`);
  setText("#dialogRating", provider.rating.toFixed(1));
  setText("#dialogDistance", `${provider.distance.toFixed(1)} km`);
  setText("#dialogPrice", provider.price);
  providerDialog.showModal();
}

function startVoiceSearch() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    showToast("Is browser mein voice search available nahi hai. Aap requirement type kar sakte hain.");
    return;
  }

  const recognition = new Recognition();
  recognition.lang = "hi-IN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  const voiceButton = document.querySelector("#voiceButton");
  voiceButton.classList.add("listening");
  setText("#searchStatus", "Qigo sun raha hai");
  recognition.start();

  recognition.onresult = (event) => {
    serviceQuery.value = event.results[0][0].transcript;
    updateIntentPreview(serviceQuery.value);
  };
  recognition.onerror = () => showToast("Voice samajh nahi aayi. Dobara boliye ya type kijiye.");
  recognition.onend = () => voiceButton.classList.remove("listening");
}

startPlaceholderAnimation();

serviceQuery.addEventListener("input", () => {
  updateIntentPreview(serviceQuery.value);
  if (serviceQuery.value) {
    stopPlaceholderAnimation();
  } else {
    state.placeholderCharacter = 0;
    state.placeholderDeleting = false;
    startPlaceholderAnimation();
  }
});

mainSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runRadarSearch(serviceQuery.value);
});

radarSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runRadarSearch(radarQuery.value);
});

document.querySelector("#voiceButton").addEventListener("click", startVoiceSearch);
document.querySelector("#brandHome").addEventListener("click", resetHome);
document.querySelector("#closeProviderDialog").addEventListener("click", () => providerDialog.close());
document.querySelector("#selectProvider").addEventListener("click", () => {
  const provider = state.selectedProvider;
  providerDialog.close();
  if (!provider) return;
  showToast(
    `${provider.name} ko select kiya. Real request bhejne ke liye provider app, registration aur booking backend agle phase mein connect hoga.`,
  );
});

document.addEventListener("click", (event) => {
  const providerButton = event.target.closest("[data-provider-id]");
  if (providerButton) openProvider(providerButton.dataset.providerId);
});

providerDialog.addEventListener("click", (event) => {
  if (event.target === providerDialog) providerDialog.close();
});
