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

const generatedPartnerNames = [
  "Aarav S.", "Ayesha K.", "Kabir M.", "Meera P.", "Rohan V.",
  "Sana R.", "Vikram J.", "Neha D.", "Imran A.", "Pooja N.",
];

function createServicePartners(serviceId, providerRole) {
  const seed = [...serviceId].reduce((total, character) => total + character.charCodeAt(0), 0);
  return Array.from({ length: 5 }, (_, index) => {
    const name = generatedPartnerNames[(seed + index * 3) % generatedPartnerNames.length];
    const initials = name
      .replace(".", "")
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return {
      name,
      initials,
      currentJob: (seed + index * 3) % 9,
      travel: 4 + ((seed + index * 2) % 9),
      rating: Number((4.6 + ((seed + index) % 4) / 10).toFixed(1)),
      distance: Number((0.7 + ((seed + index * 7) % 31) / 10).toFixed(1)),
      providerRole,
    };
  });
}

const expandedServiceDefinitions = [
  ["beauty", "Beauty Professional", "✦", "Personal Care", "₹299+", "beautician|beauty parlour|facial|waxing|threading|cleanup|ब्यूटी|फेशियल|वैक्सिंग"],
  ["makeup", "Makeup Artist", "◉", "Personal Care", "₹799+", "makeup|bridal makeup|party makeup|दुल्हन मेकअप|मेकअप आर्टिस्ट"],
  ["massage", "Massage Therapist", "≈", "Wellness", "₹599+", "massage|spa|body massage|relaxation|मालिश|स्पा"],
  ["mehndi", "Mehndi Artist", "❋", "Personal Care", "₹399+", "mehndi|henna|bridal mehndi|मेहंदी"],
  ["tailor", "Tailor", "⌁", "Clothing", "₹149+", "tailor|silai|alteration|blouse|pant fitting|zip|दरजी|सिलाई|अल्टरेशन"],
  ["laundry", "Laundry Service", "◌", "Clothing", "₹99+", "laundry|dry clean|kapde dhona|washing|ड्राई क्लीन|कपड़े धोना"],
  ["ironing", "Ironing Service", "▱", "Clothing", "₹79+", "iron clothes|press wala|istri|कपड़े प्रेस|इस्त्री"],
  ["shoe-care", "Shoe & Bag Repair", "◒", "Clothing", "₹99+", "shoe repair|mochi|bag repair|zip repair|जूता मरम्मत|मोची"],
  ["locksmith", "Locksmith", "⌾", "Home Repair", "₹199+", "locksmith|lock|key|chabi|tala|door lock|ताला|चाबी"],
  ["painter", "Painter", "◫", "Home Improvement", "₹499+", "painter|paint|wall paint|putty|polish|पेंटर|पेंट|पुट्टी"],
  ["mason", "Mason / Civil Work", "▦", "Home Improvement", "₹499+", "mason|raj mistri|construction|plaster|brick|cement|राज मिस्त्री|प्लास्टर"],
  ["welder", "Welder", "⌁", "Home Repair", "₹299+", "welder|welding|gate|grill|iron work|वेल्डिंग|गेट|ग्रिल"],
  ["glass", "Glass & Aluminium Expert", "◇", "Home Repair", "₹299+", "glass repair|window glass|mirror|aluminium|शीशा|कांच|एलुमिनियम"],
  ["waterproofing", "Waterproofing Expert", "◍", "Home Improvement", "₹999+", "waterproofing|seepage|leakage wall|terrace leak|सीलन|छत लीकेज|वॉटरप्रूफिंग"],
  ["tiling", "Tile & Marble Expert", "▦", "Home Improvement", "₹599+", "tile|marble|granite|flooring|टाइल|मार्बल|फ्लोरिंग"],
  ["gardener", "Gardener", "❧", "Home Care", "₹249+", "gardener|garden|plants|mali|lawn|पेड़ पौधे|माली"],
  ["cook", "Home Cook", "◐", "Food", "₹299+", "cook|home cook|khana banana|rasoi|chef|खाना बनाने वाला|रसोइया"],
  ["tiffin", "Tiffin Service", "▤", "Food", "₹89+", "tiffin|home food|lunch|dinner|meal|टिफिन|घर का खाना"],
  ["catering", "Catering Service", "◫", "Food", "₹2999+", "catering|party food|wedding food|halwai|कैटरिंग|हलवाई"],
  ["packers", "Packers & Movers", "▣", "Moving", "₹1499+", "packers movers|shifting|moving house| सामान शिफ्ट|घर बदलना|मूवर्स"],
  ["interior", "Interior Expert", "◲", "Home Improvement", "Scope-based", "interior|false ceiling|modular kitchen|home design|इंटीरियर|मॉड्यूलर किचन"],
  ["cctv", "CCTV Technician", "◉", "Security", "₹399+", "cctv|camera|security camera|dvr|nvr|सीसीटीवी|कैमरा"],
  ["internet", "Wi-Fi & Internet Technician", "⌁", "Technology", "₹199+", "wifi|internet|router|broadband|network|वाईफाई|इंटरनेट|राउटर"],
  ["computer", "Computer Technician", "▣", "Technology", "₹299+", "computer|laptop|desktop|windows|software|कंप्यूटर|लैपटॉप"],
  ["printer", "Printer Technician", "▤", "Technology", "₹249+", "printer|cartridge|scanner|print nahi|प्रिंटर|कार्ट्रिज"],
  ["mobile", "Mobile Repair", "▯", "Technology", "₹299+", "mobile repair|phone screen|battery|charging|मोबाइल|फोन रिपेयर|स्क्रीन"],
  ["tv", "TV Technician", "▰", "Appliances", "₹299+", "tv|led tv|smart tv|television|टीवी|एलईडी"],
  ["ro", "RO Water Purifier Expert", "◉", "Appliances", "₹249+", "ro|water purifier|filter|tds|आरओ|वाटर प्यूरिफायर"],
  ["solar", "Solar Technician", "☼", "Energy", "₹499+", "solar|solar panel|solar inverter|सोलर|सोलर पैनल"],
  ["inverter", "Inverter & Battery Expert", "ϟ", "Energy", "₹249+", "inverter|ups|battery backup|इन्वर्टर|बैटरी"],
  ["generator", "Generator Technician", "◈", "Energy", "₹499+", "generator|genset|diesel generator|जनरेटर"],
  ["lift", "Lift Technician", "↕", "Building", "₹599+", "lift|elevator|stuck lift|लिफ्ट|एलिवेटर"],
  ["fire-safety", "Fire Safety Technician", "△", "Security", "₹399+", "fire extinguisher|fire alarm|smoke detector|फायर अलार्म|अग्निशामक"],
  ["car-wash", "Car Wash", "◒", "Vehicle", "₹299+", "car wash|bike wash|vehicle cleaning|कार वॉश|गाड़ी धुलाई"],
  ["towing", "Vehicle Towing", "➜", "Vehicle", "₹599+", "towing|car tow|bike tow|breakdown pickup|टोइंग|गाड़ी उठाना"],
  ["driver", "Driver on Demand", "◉", "Transport", "₹399+", "driver|chauffeur|car driver|ड्राइवर|चालक"],
  ["tyre", "Tyre & Puncture Expert", "◉", "Vehicle", "₹149+", "puncture|tyre|flat tyre|पंचर|टायर"],
  ["courier", "Local Courier", "➜", "Delivery", "₹79+", "courier|parcel|document delivery|pickup drop|कूरियर|पार्सल"],
  ["event", "Event Planner", "✦", "Events", "Scope-based", "event planner|birthday|wedding planner|party organizer|इवेंट|शादी प्लानर"],
  ["photographer", "Photographer", "◉", "Events", "₹1499+", "photographer|photo|video shoot|wedding photography|फोटोग्राफर|फोटो"],
  ["decorator", "Event Decorator", "❋", "Events", "₹1999+", "decoration|balloon decoration|flower decoration|stage|डेकोरेशन|सजावट"],
  ["dj", "DJ & Sound Service", "♫", "Events", "₹2999+", "dj|sound system|music system|speaker rental|डीजे|साउंड"],
  ["tutor", "Home Tutor", "⌘", "Education", "₹399+", "tutor|teacher|tuition|math teacher|science teacher|ट्यूटर|टीचर|ट्यूशन"],
  ["language", "Language Tutor", "A", "Education", "₹399+", "english speaking|language teacher|hindi tutor|spoken english|अंग्रेजी सीखना|भाषा"],
  ["music", "Music Teacher", "♫", "Education", "₹499+", "music teacher|guitar|piano|singing|tabla|संगीत|गिटार|गाना"],
  ["dance", "Dance Teacher", "↗", "Education", "₹499+", "dance teacher|dance class|choreographer|डांस|कोरियोग्राफर"],
  ["yoga", "Yoga Instructor", "∞", "Wellness", "₹399+", "yoga|meditation|pranayam|योग|ध्यान|प्राणायाम"],
  ["fitness", "Fitness Trainer", "▲", "Wellness", "₹499+", "fitness trainer|personal trainer|gym trainer|workout|फिटनेस|जिम ट्रेनर"],
  ["physio", "Physiotherapist", "+", "Health Support", "₹599+", "physiotherapy|physio|back pain exercise|rehab|फिजियोथेरेपी|फिजियो"],
  ["home-nurse", "Home Nursing Support", "+", "Health Support", "₹799+", "home nurse|nursing care|injection nurse|patient care|होम नर्स|नर्सिंग"],
  ["elder-care", "Elder Care Assistant", "♡", "Care", "₹499+", "elder care|senior citizen care|attendant|बुजुर्ग देखभाल|अटेंडेंट"],
  ["babysitter", "Babysitter", "♡", "Care", "₹399+", "babysitter|nanny|child care|baby care|आया|बच्चे की देखभाल"],
  ["domestic-help", "Domestic Help", "⌂", "Home Care", "₹299+", "maid|house help|domestic help|jhadu pocha|कामवाली|घर का काम"],
  ["pet-grooming", "Pet Groomer", "◇", "Pet Care", "₹499+", "pet grooming|dog bath|cat grooming|pet haircut|पेट ग्रूमिंग|कुत्ते को नहलाना"],
  ["veterinary", "Veterinary Visit", "+", "Pet Care", "₹699+", "vet|veterinary|pet doctor|dog doctor|पशु डॉक्टर|पेट डॉक्टर"],
  ["security-guard", "Security Guard", "◆", "Security", "Scope-based", "security guard|bouncer|watchman|गार्ड|चौकीदार"],
  ["document-help", "Document & Form Assistant", "▤", "Professional", "₹199+", "form fill|document help|online form|application|दस्तावेज|फॉर्म भरना"],
  ["accountant", "Accountant / Tax Assistant", "Σ", "Professional", "₹499+", "accountant|gst|income tax|itr|bookkeeping|अकाउंटेंट|जीएसटी|इनकम टैक्स"],
  ["legal", "Legal Consultation", "§", "Professional", "₹999+", "lawyer|legal advice|advocate|agreement|वकील|कानूनी सलाह|एग्रीमेंट"],
  ["property", "Property Assistant", "⌂", "Professional", "Scope-based", "property dealer|rent house|buy house|broker|प्रॉपर्टी|किराये का घर|ब्रोकर"],
  ["travel", "Travel Booking Assistant", "➜", "Travel", "₹199+", "travel booking|hotel booking|tour package|ticket help|ट्रैवल|होटल बुकिंग"],
];

const expandedServices = expandedServiceDefinitions.map(
  ([id, label, icon, category, basePrice, keywordText]) => {
    const providerRole = `${label.toUpperCase()} PARTNER`;
    return {
      id,
      label,
      icon,
      category,
      keywords: [...keywordText.split("|"), label, category],
      basePrice,
      providerRole,
      providers: createServicePartners(id, providerRole),
    };
  },
);

serviceIntents.splice(serviceIntents.length - 1, 0, ...expandedServices);

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
  location: null,
  geofenceKm: 8,
  booking: null,
  trackingTimer: null,
  trackingTickMs: 2800,
};

const appShell = document.querySelector("#appShell");
const searchScene = document.querySelector("#searchScene");
const radarScene = document.querySelector("#radarScene");
const trackingScene = document.querySelector("#trackingScene");
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
const selectProviderButton = document.querySelector("#selectProvider");
const trackingProviderMarker = document.querySelector("#trackingProviderMarker");
const trackingYouMarker = document.querySelector("#trackingYouMarker");
const trackingRouteLine = document.querySelector("#trackingRouteLine");
const trackingRouteShadow = document.querySelector("#trackingRouteShadow");
const trackingRouteTravelled = document.querySelector("#trackingRouteTravelled");
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

function clearTrackingTimer() {
  if (!state.trackingTimer) return;
  window.clearInterval(state.trackingTimer);
  state.trackingTimer = null;
}

const rotatingPlaceholders = [
  "बताइए, मैं आपके लिए क्या कर सकता हूँ?",
  "मुझे अभी प्लंबर चाहिए",
  "घर पर बाल काटने वाला चाहिए",
  "AC ठंडा नहीं कर रहा",
  "बुज़ुर्ग देखभाल के लिए सहायक चाहिए",
  "आज ही कंप्यूटर ठीक करवाना है",
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
    const demoLocation = {
      latitude: 28.6139,
      longitude: 77.209,
      accuracy: null,
    };

    if (state.demoMode) {
      state.locationStatus = "demo";
      addTimer(() => resolve({ status: "demo", ...demoLocation }), 450);
      return;
    }

    if (!window.isSecureContext) {
      state.locationStatus = "secure-required";
      resolve({ status: "secure-required", ...demoLocation });
      return;
    }

    if (!navigator.geolocation) {
      state.locationStatus = "unavailable";
      resolve({ status: "unavailable", ...demoLocation });
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
          accuracy: Math.round(position.coords.accuracy || 0),
        });
      },
      () => {
        state.locationStatus = "denied";
        finish({ status: "denied", ...demoLocation });
      },
      { enableHighAccuracy: false, timeout: 4500, maximumAge: 120000 },
    );

    addTimer(() => {
      state.locationStatus = "timeout";
      finish({ status: "timeout", ...demoLocation });
    }, 4800);
  });
}

function offsetCoordinate(latitude, longitude, distanceKm, bearingDegrees) {
  const earthRadiusKm = 6371;
  const angularDistance = distanceKm / earthRadiusKm;
  const bearing = bearingDegrees * (Math.PI / 180);
  const latitudeRadians = latitude * (Math.PI / 180);
  const longitudeRadians = longitude * (Math.PI / 180);
  const targetLatitude = Math.asin(
    Math.sin(latitudeRadians) * Math.cos(angularDistance)
      + Math.cos(latitudeRadians) * Math.sin(angularDistance) * Math.cos(bearing),
  );
  const targetLongitude = longitudeRadians + Math.atan2(
    Math.sin(bearing) * Math.sin(angularDistance) * Math.cos(latitudeRadians),
    Math.cos(angularDistance) - Math.sin(latitudeRadians) * Math.sin(targetLatitude),
  );

  return {
    latitude: targetLatitude * (180 / Math.PI),
    longitude: targetLongitude * (180 / Math.PI),
  };
}

function haversineDistance(start, end) {
  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const earthRadiusKm = 6371;
  const latitudeDelta = toRadians(end.latitude - start.latitude);
  const longitudeDelta = toRadians(end.longitude - start.longitude);
  const startLatitude = toRadians(start.latitude);
  const endLatitude = toRadians(end.latitude);
  const a = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(startLatitude) * Math.cos(endLatitude) * Math.sin(longitudeDelta / 2) ** 2;
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
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

function prepareProviders(intent, location) {
  const seed = [...intent.id].reduce((total, character) => total + character.charCodeAt(0), 0);
  const userCoordinate = {
    latitude: location.latitude,
    longitude: location.longitude,
  };

  return intent.providers
    .map((provider, index) => {
      const bearing = (seed * 11 + index * 73) % 360;
      const expectedDistance = Math.min(
        state.geofenceKm - 0.4,
        Math.max(0.6, provider.distance || 0.8 + index * 0.7),
      );
      const providerCoordinate = offsetCoordinate(
        userCoordinate.latitude,
        userCoordinate.longitude,
        expectedDistance,
        bearing,
      );
      const distance = haversineDistance(userCoordinate, providerCoordinate);
      const roadFactor = 1.12 + ((seed + index) % 5) * 0.07;
      const travel = Math.max(3, Math.ceil((distance * roadFactor) / 0.38));
      const currentJob = provider.currentJob ?? ((seed + index * 3) % 9);

      return {
        ...provider,
        id: `${intent.id}-${index + 1}`,
        currentJob,
        travel,
        eta: currentJob + travel,
        skill: provider.providerRole || intent.providerRole,
        price: intent.basePrice,
        distance: Number(distance.toFixed(1)),
        latitude: providerCoordinate.latitude,
        longitude: providerCoordinate.longitude,
        bearing,
        locationMode: location.status,
      };
    })
    .filter((provider) => provider.distance <= state.geofenceKm)
    .sort((a, b) => a.eta - b.eta);
}

const trackingRoutes = [
  {
    name: "Qigo fastest local route",
    path: "M 870 105 C 805 120 846 208 758 225 C 660 245 690 330 610 350 C 545 370 582 455 685 478 C 750 493 724 545 700 566",
  },
  {
    name: "Central link route",
    path: "M 900 125 C 820 160 855 245 748 250 C 640 255 675 350 775 365 C 842 376 810 445 720 458 C 655 468 674 530 700 566",
  },
  {
    name: "Qigo low-traffic route",
    path: "M 835 90 C 760 135 790 220 690 235 C 580 252 610 345 705 370 C 795 393 765 480 690 492 C 640 500 665 545 700 566",
  },
  {
    name: "Neighbourhood express route",
    path: "M 905 110 C 815 105 790 195 845 245 C 900 295 838 355 740 350 C 625 343 605 430 690 465 C 755 490 730 540 700 566",
  },
];

function saveBooking() {
  try {
    if (state.booking) {
      window.sessionStorage.setItem("qigoActiveBooking", JSON.stringify(state.booking));
    } else {
      window.sessionStorage.removeItem("qigoActiveBooking");
    }
  } catch {
    // Tracking still works when private browsing blocks storage.
  }
}

function updateRouteMarker(progress) {
  if (!trackingRouteLine) return;
  const boundedProgress = Math.max(0, Math.min(1, progress));
  const length = trackingRouteLine.getTotalLength();
  const point = trackingRouteLine.getPointAtLength(length * boundedProgress);
  const endPoint = trackingRouteLine.getPointAtLength(length);
  const mobileScale = window.matchMedia("(max-width: 760px)").matches ? 0.58 : 1;

  trackingProviderMarker.style.left = `${point.x / 10}%`;
  trackingProviderMarker.style.top = `${(point.y / 6.8) * mobileScale}%`;
  trackingYouMarker.style.left = `${endPoint.x / 10}%`;
  trackingYouMarker.style.top = `${(endPoint.y / 6.8) * mobileScale}%`;
  trackingRouteTravelled.style.strokeDasharray = `${boundedProgress * 100} 100`;
}

function setJourneyState(routeProgress, phase) {
  const bookedStep = document.querySelector("#journeyStepBooked");
  const routeStep = document.querySelector("#journeyStepRoute");
  const arrivalStep = document.querySelector("#journeyStepArrival");
  const journeyFill = document.querySelector("#journeyFill");

  bookedStep.className = "journey-step done";
  routeStep.className = `journey-step ${phase === "arrived" ? "done" : "active"}`;
  arrivalStep.className = `journey-step ${phase === "arrived" ? "done active" : ""}`.trim();
  journeyFill.style.width = phase === "arrived"
    ? "100%"
    : `${Math.round(12 + routeProgress * 76)}%`;
}

function renderTracking() {
  const booking = state.booking;
  if (!booking) return;

  const provider = booking.provider;
  const eta = Math.max(0, booking.currentJobRemaining + booking.travelRemaining);
  const routeProgress = booking.currentJobRemaining > 0
    ? 0
    : Math.max(0, Math.min(1, 1 - booking.travelRemaining / Math.max(1, booking.initialTravel)));
  const remainingDistance = booking.currentJobRemaining > 0
    ? booking.initialDistance
    : booking.initialDistance * (1 - routeProgress);
  const phase = eta === 0 ? "arrived" : booking.currentJobRemaining > 0 ? "current-job" : "on-route";

  setText("#trackingBookingId", booking.id);
  setText("#trackingMarkerInitials", provider.initials);
  setText("#trackingAvatar", provider.initials);
  setText("#trackingSkill", provider.skill);
  setText("#trackingName", provider.name);
  setText("#trackingRating", `${provider.rating.toFixed(1)} ★`);
  setText("#trackingEta", String(eta));
  setText("#trackingDistance", eta === 0 ? "0.0 km" : `${Math.max(0.1, remainingDistance).toFixed(1)} km`);
  setText("#trackingVia", booking.routeName);
  setText("#trackingService", booking.serviceLabel);
  setText("#trackingRouteLabel", `${booking.routeName} · ${booking.initialDistance.toFixed(1)} km`);

  if (phase === "current-job") {
    setText("#trackingStatusKicker", "BOOKING CONFIRMED");
    setText("#trackingStatusTitle", `${provider.name} मौजूदा काम पूरा कर रहे हैं`);
    setText("#trackingNetworkBadge", "PREPARING");
    setText("#journeyRouteTitle", `${booking.currentJobRemaining} min का काम बाकी`);
    setText("#journeyRouteDetail", "इसके बाद आपकी ओर निकलेंगे");
  } else if (phase === "on-route") {
    setText("#trackingStatusKicker", "ON THE WAY");
    setText("#trackingStatusTitle", `${provider.name} आपकी ओर आ रहे हैं`);
    setText("#trackingNetworkBadge", "DEMO LIVE");
    setText("#journeyRouteTitle", "रास्ते में हैं");
    setText("#journeyRouteDetail", `${booking.travelRemaining} min · location online`);
  } else {
    setText("#trackingStatusKicker", "ARRIVED");
    setText("#trackingStatusTitle", `${provider.name} आपकी location पर पहुँच गए हैं`);
    setText("#trackingNetworkBadge", "ARRIVED");
    setText("#journeyRouteTitle", "Route पूरा हुआ");
    setText("#journeyRouteDetail", "Provider पहुँच गए हैं");
    setText("#trackingAction", "काम शुरू करें");
  }

  setJourneyState(routeProgress, phase);
  updateRouteMarker(phase === "arrived" ? 1 : routeProgress);
}

function stepTracking() {
  const booking = state.booking;
  if (!booking) {
    clearTrackingTimer();
    return;
  }

  if (booking.currentJobRemaining > 0) {
    booking.currentJobRemaining -= 1;
  } else if (booking.travelRemaining > 0) {
    booking.travelRemaining -= 1;
  }

  renderTracking();
  saveBooking();

  if (booking.currentJobRemaining + booking.travelRemaining === 0) {
    clearTrackingTimer();
    showToast(`${booking.provider.name} आपकी location पर पहुँच गए हैं।`);
  }
}

function startTrackingTimer() {
  clearTrackingTimer();
  if (!state.booking) return;
  if (state.booking.currentJobRemaining + state.booking.travelRemaining <= 0) return;
  state.trackingTimer = window.setInterval(stepTracking, state.trackingTickMs);
}

function showTrackingScene() {
  const booking = state.booking;
  if (!booking) return;

  clearSequence();
  searchScene.hidden = true;
  radarScene.hidden = true;
  trackingScene.hidden = false;
  providerDialog.close?.();
  appShell.classList.add("radar-active", "tracking-active");
  setText("#networkStateText", "Active booking");

  const route = trackingRoutes[booking.routeIndex % trackingRoutes.length];
  trackingRouteShadow.setAttribute("d", route.path);
  trackingRouteLine.setAttribute("d", route.path);
  trackingRouteTravelled.setAttribute("d", route.path);

  const userLocation = booking.location || state.location || { latitude: 28.6139, longitude: 77.209 };
  const routeUrl = new URL("https://www.google.com/maps/dir/");
  routeUrl.searchParams.set("api", "1");
  routeUrl.searchParams.set("origin", `${booking.provider.latitude},${booking.provider.longitude}`);
  routeUrl.searchParams.set("destination", `${userLocation.latitude},${userLocation.longitude}`);
  routeUrl.searchParams.set("travelmode", "driving");
  document.querySelector("#realRouteLink").href = routeUrl.toString();

  renderTracking();
  startTrackingTimer();
}

function startBooking(provider) {
  const routeIndex = Math.abs(Math.round(provider.bearing || 0)) % trackingRoutes.length;
  const route = trackingRoutes[routeIndex];
  const bookingId = `QG-${Date.now().toString().slice(-6)}`;

  state.booking = {
    id: bookingId,
    provider,
    serviceLabel: state.intent.label,
    initialDistance: provider.distance,
    initialTravel: provider.travel,
    currentJobRemaining: provider.currentJob,
    travelRemaining: provider.travel,
    routeIndex,
    routeName: route.name,
    location: state.location,
    createdAt: Date.now(),
  };
  saveBooking();

  selectProviderButton.disabled = true;
  selectProviderButton.innerHTML = "Booking confirm हो रही है… <span>•••</span>";
  addTimer(showTrackingScene, 650);
}

function restoreBooking() {
  try {
    const stored = window.sessionStorage.getItem("qigoActiveBooking");
    if (!stored) return false;
    const booking = JSON.parse(stored);
    if (!booking?.provider || !booking?.id) return false;
    state.booking = booking;
    state.selectedProvider = booking.provider;
    showTrackingScene();
    return true;
  } catch {
    return false;
  }
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
            <span>${provider.distance.toFixed(1)} km · ${provider.currentJob}m job + ${provider.travel}m route · ${provider.rating} ★</span>
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
    const accuracy = location.accuracy ? ` ±${location.accuracy}m` : "";
    setText("#locationLabel", `Live location locked${accuracy} · ${state.geofenceKm} km geofence`);
    return;
  }
  if (location.status === "demo") {
    setText("#locationLabel", `Demo location · ${state.geofenceKm} km preview`);
    return;
  }
  if (location.status === "secure-required") {
    setText("#locationLabel", "HTTPS activate hote hi live location · abhi demo geofence");
    return;
  }
  setText("#locationLabel", `Location unavailable · ${state.geofenceKm} km demo radius`);
}

function startNetworkSequence(location) {
  const providerCount = state.providers.length;
  setLocationLabel(location);
  setText("#capsuleStatus", "Qualified providers ko ping kiya ja raha hai");
  setText("#pulseTitle", "Aas-paas signal bhej raha hoon");
  setText("#pulseDetail", `${providerCount} qualified providers ${state.geofenceKm} km geofence mein mile`);
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
  radarQuery.value = trimmed;

  searchScene.hidden = true;
  radarScene.hidden = false;
  trackingScene.hidden = true;
  appShell.classList.add("radar-active");
  appShell.classList.remove("tracking-active");
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
  state.location = location;
  state.providers = prepareProviders(state.intent, location);
  startNetworkSequence(location);
}

function resetHome() {
  clearSequence();
  radarScene.hidden = true;
  trackingScene.hidden = true;
  searchScene.hidden = false;
  appShell.classList.remove("radar-active", "tracking-active");
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
  selectProviderButton.disabled = false;
  selectProviderButton.innerHTML = "Booking confirm करें <span>→</span>";
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

const restoredBooking = restoreBooking();
if (!restoredBooking) startPlaceholderAnimation();

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
document.querySelector("#brandHome").addEventListener("click", () => {
  if (state.booking && !trackingScene.hidden) {
    showToast("Active booking चल रही है। नीचे से booking रद्द करके नई search शुरू कर सकते हैं।");
    return;
  }
  resetHome();
});
document.querySelector("#closeProviderDialog").addEventListener("click", () => providerDialog.close());
document.querySelector("#selectProvider").addEventListener("click", () => {
  const provider = state.selectedProvider;
  if (!provider) return;
  startBooking(provider);
});

document.querySelector("#trackingAction").addEventListener("click", () => {
  if (!state.booking) return;
  const eta = state.booking.currentJobRemaining + state.booking.travelRemaining;
  if (eta === 0) {
    const providerName = state.booking.provider.name;
    clearTrackingTimer();
    state.booking = null;
    saveBooking();
    resetHome();
    showToast(`${providerName} के साथ service शुरू की गई।`);
    return;
  }
  showToast("Demo tracking में message preview है। Real provider app जुड़ने पर live chat यहीं खुलेगी।");
});

document.querySelector("#cancelBooking").addEventListener("click", () => {
  const providerName = state.booking?.provider?.name;
  clearTrackingTimer();
  state.booking = null;
  state.selectedProvider = null;
  saveBooking();
  resetHome();
  showToast(providerName ? `${providerName} की demo booking रद्द कर दी गई।` : "Booking रद्द कर दी गई।");
});

window.addEventListener("resize", () => {
  if (state.booking && !trackingScene.hidden) renderTracking();
});

document.addEventListener("click", (event) => {
  const providerButton = event.target.closest("[data-provider-id]");
  if (providerButton) openProvider(providerButton.dataset.providerId);
});

providerDialog.addEventListener("click", (event) => {
  if (event.target === providerDialog) providerDialog.close();
});
