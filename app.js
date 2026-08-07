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

const retailPartnerNames = [
  "Sharma Mart", "City Supply", "Gupta Traders", "Aarav Store",
  "Metro Materials", "Neighbour Hub", "Reliable Bazaar", "QuickKart Local",
];

function createRetailPartners(serviceId, providerRole) {
  const seed = [...serviceId].reduce((total, character) => total + character.charCodeAt(0), 0);
  return Array.from({ length: 5 }, (_, index) => {
    const name = retailPartnerNames[(seed + index * 3) % retailPartnerNames.length];
    const initials = name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return {
      name,
      initials,
      currentJob: 0,
      travel: 4 + ((seed + index * 2) % 8),
      rating: Number((4.5 + ((seed + index) % 5) / 10).toFixed(1)),
      distance: Number((0.5 + ((seed + index * 5) % 28) / 10).toFixed(1)),
      providerRole,
      store: true,
      quality: 82 + ((seed + index * 7) % 18),
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

const retailServiceDefinitions = [
  ["grocery-store", "Grocery & Daily Needs", "G", "₹999", "grocery|kirana|parchoon|ration|daily needs|vegetables|fruits|milk|दुकान|किराना|परचून|राशन|सब्जी|फल|दूध"],
  ["sanitary-material", "Sanitary Material", "S", "₹2499", "sanitary|bathroom material|toilet seat|wash basin|tap|shower|pipe fitting|सैनिटरी|बाथरूम सामान|नल|शावर|वॉश बेसिन"],
  ["hardware-material", "Hardware Material", "H", "₹1499", "hardware material|tools|nail|screw|hinge|lock material|हार्डवेयर|औजार|कील|पेंच|कब्जा"],
  ["electrical-material", "Electrical Material", "E", "₹1999", "electrical material|electric saman|electrical saman|bijli saman|bijli ka saman|bijli material|wire chahiye|cable chahiye|switch chahiye|wire|cable|switch|socket|fan|light|mcb|बिजली का सामान|बिजली सामान|वायर|स्विच|सॉकेट|पंखा|लाइट"],
  ["paint-material", "Paint & Polish Material", "P", "₹2999", "paint material|paint bucket|primer|putty|brush|roller|polish material|पेंट का सामान|पुट्टी|प्राइमर|ब्रश|पॉलिश"],
  ["construction-material", "Construction Material", "C", "₹9999", "construction material|cement|brick|sand|steel|sariya|tile material|बिल्डिंग मटेरियल|सीमेंट|ईंट|रेत|सरिया"],
  ["home-utility-store", "Home Utility Store", "U", "₹1499", "home utility|kitchen item|plastic item|storage|cleaning material|घर का सामान|किचन सामान|प्लास्टिक सामान"],
  ["general-material", "Any Material Quotation", "Q", "₹1999", "any material|item chahiye|material quotation|quotation|rate list|shop nearby|कोई मटेरियल|मटेरियल कोटेशन|कोटेशन|रेट चाहिए"],
];

const retailServices = retailServiceDefinitions.map(
  ([id, label, icon, basePrice, keywordText]) => {
    const providerRole = `${label.toUpperCase()} SELLER`;
    return {
      id,
      label,
      icon,
      category: "Nearby Shops & Material",
      keywords: [...keywordText.split("|"), label, "shop", "store", "material"],
      basePrice,
      quoteBase: Number(basePrice.replace(/[^\d]/g, "")) || 999,
      providerRole,
      mode: "product",
      providers: createRetailPartners(id, providerRole),
    };
  },
);

serviceIntents.splice(serviceIntents.length - 1, 0, ...expandedServices, ...retailServices);

const serviceTaskOptions = {
  barber: ["Haircut", "Beard trim / shave", "Hair styling", "Kids haircut", "Hair colour", "Grooming package"],
  plumber: ["Tap / pipe leakage", "Blocked drain", "Toilet / flush repair", "Water tank work", "New fitting installation", "Motor / water pressure issue"],
  electrician: ["Switch / socket repair", "Fan repair / fitting", "Light installation", "MCB / fuse issue", "Complete wiring", "Inverter connection"],
  ac: ["AC service", "Cooling issue", "Gas refill", "AC installation", "AC uninstallation", "Water leakage", "Compressor check"],
  cleaning: ["Full home cleaning", "Kitchen deep cleaning", "Bathroom cleaning", "Sofa / carpet cleaning", "Move-in cleaning", "Single room cleaning"],
  appliance: ["Washing machine", "Refrigerator", "Microwave", "Geyser", "Kitchen chimney", "Dishwasher"],
  carpenter: ["Door repair", "Furniture repair", "Wardrobe work", "Bed / table work", "New furniture", "Shelf installation", "Wood polish"],
  mechanic: ["Car breakdown", "Bike breakdown", "Battery issue", "Engine check", "Brake / clutch work", "Regular servicing"],
  pest: ["Cockroach control", "Termite treatment", "Bed bug treatment", "Mosquito control", "Rat control", "Full home pest control"],
  beauty: ["Facial / cleanup", "Waxing", "Threading", "Manicure / pedicure", "Hair spa", "Home salon package"],
  makeup: ["Bridal makeup", "Party makeup", "Engagement makeup", "HD makeup", "Hair styling", "Saree draping"],
  massage: ["Full body massage", "Back / shoulder massage", "Foot massage", "Head massage", "Relaxation therapy", "Couple massage"],
  mehndi: ["Bridal mehndi", "Party mehndi", "Arabic design", "Simple hand mehndi", "Feet mehndi", "Group booking"],
  tailor: ["New stitching", "Alteration", "Blouse stitching", "Pant fitting", "Zip replacement", "Urgent repair"],
  laundry: ["Wash & fold", "Dry cleaning", "Blanket / curtain cleaning", "Stain removal", "Pickup laundry", "Express laundry"],
  ironing: ["Daily clothes press", "Bulk ironing", "Saree press", "Suit / blazer press", "Curtain press", "Pickup & delivery"],
  "shoe-care": ["Shoe repair", "Sole replacement", "Shoe polish", "Bag repair", "Zip repair", "Leather restoration"],
  locksmith: ["Door lock opening", "New key", "Lock replacement", "Digital lock fitting", "Car key help", "Safe / locker lock"],
  painter: ["Wall paint", "Patch / touch-up paint", "Wood polish", "Single room paint", "Full home paint", "New home paint", "Old home repaint", "Putty & primer"],
  mason: ["Wall construction", "Plaster repair", "Brick work", "Cement repair", "Small civil work", "Bathroom renovation"],
  welder: ["Gate repair", "Grill work", "Railing work", "Iron frame", "On-site welding", "New metal fabrication"],
  glass: ["Window glass repair", "Mirror fitting", "Glass door work", "Aluminium window", "Shower partition", "Table-top glass"],
  waterproofing: ["Terrace leakage", "Bathroom leakage", "Wall seepage", "Water tank waterproofing", "Roof treatment", "Basement dampness"],
  tiling: ["Floor tiles", "Bathroom tiles", "Kitchen tiles", "Broken tile replacement", "Marble / granite", "Tile polishing"],
  gardener: ["Garden maintenance", "Plant care", "Lawn cutting", "New plants setup", "Tree pruning", "Terrace garden"],
  cook: ["Daily home cooking", "One-time meal", "Party cooking", "Vegetarian cook", "Non-vegetarian cook", "Monthly cook"],
  tiffin: ["Lunch tiffin", "Dinner tiffin", "Both meals", "Diet food", "Office tiffin", "Trial meal"],
  catering: ["Birthday catering", "Wedding catering", "Home function", "Corporate event", "Snacks & tea", "Full buffet"],
  packers: ["Full home shifting", "Office shifting", "Local shifting", "Vehicle transport", "Packing only", "Loading / unloading"],
  interior: ["Full home interior", "Modular kitchen", "False ceiling", "Wardrobe design", "Single room design", "Renovation consultation"],
  cctv: ["New camera installation", "Camera not working", "DVR / NVR issue", "Remote mobile view", "Wiring repair", "Annual maintenance"],
  internet: ["Wi-Fi not working", "Router setup", "Slow internet", "Network wiring", "Range extension", "Broadband installation"],
  computer: ["Laptop repair", "Desktop repair", "Windows / software", "Data backup", "Virus removal", "Hardware upgrade"],
  printer: ["Printer not printing", "Cartridge refill", "Paper jam", "Scanner issue", "New printer setup", "Office printer service"],
  mobile: ["Screen replacement", "Battery replacement", "Charging issue", "Speaker / mic issue", "Software issue", "Water damage"],
  tv: ["TV not starting", "Display issue", "Sound issue", "Wall mounting", "Smart TV setup", "Remote / port issue"],
  ro: ["RO service", "Filter replacement", "Water taste issue", "Low water flow", "New RO installation", "TDS check"],
  solar: ["Solar panel installation", "Panel cleaning", "Low generation", "Solar inverter issue", "Battery connection", "System inspection"],
  inverter: ["Inverter repair", "Battery replacement", "No backup", "New installation", "Wiring connection", "Battery water service"],
  generator: ["Generator repair", "Regular service", "Not starting", "Load issue", "New installation", "Emergency support"],
  lift: ["Lift breakdown", "Door issue", "Routine maintenance", "Control panel issue", "New installation check", "Emergency inspection"],
  "fire-safety": ["Fire extinguisher refill", "Fire alarm repair", "Smoke detector fitting", "Safety inspection", "Hydrant check", "New setup"],
  "car-wash": ["Exterior car wash", "Interior cleaning", "Full detailing", "Bike wash", "Waterless wash", "Monthly package"],
  towing: ["Car towing", "Bike towing", "Accident pickup", "Breakdown pickup", "Intercity towing", "Basement recovery"],
  driver: ["Local trip", "Outstation trip", "Airport drop", "Full-day driver", "Night driver", "Monthly driver"],
  tyre: ["Puncture repair", "Tyre replacement", "Air / pressure check", "Wheel change", "Tubeless repair", "Emergency roadside help"],
  courier: ["Document delivery", "Parcel delivery", "Same-day delivery", "Pickup & drop", "Bulk delivery", "Fragile item"],
  event: ["Birthday planning", "Wedding planning", "Anniversary event", "Corporate event", "Small home party", "Complete event management"],
  photographer: ["Wedding shoot", "Birthday shoot", "Product photography", "Portrait shoot", "Video shoot", "Photo editing"],
  decorator: ["Balloon decoration", "Flower decoration", "Stage decoration", "Wedding decor", "Home party decor", "Office event decor"],
  dj: ["DJ for party", "Wedding DJ", "Sound system", "Karaoke setup", "Lights & music", "Speaker rental"],
  tutor: ["Math tutor", "Science tutor", "All-subject tutor", "Exam preparation", "Homework support", "Online classes"],
  language: ["Spoken English", "Hindi learning", "Foreign language", "Interview speaking", "Kids language class", "Online practice"],
  music: ["Singing class", "Guitar class", "Piano / keyboard", "Tabla", "Music theory", "Home lessons"],
  dance: ["Wedding choreography", "Kids dance", "Fitness dance", "Classical dance", "Couple dance", "Home dance class"],
  yoga: ["Beginner yoga", "Weight-loss yoga", "Senior yoga", "Prenatal yoga", "Meditation", "Home group yoga"],
  fitness: ["Personal training", "Weight loss", "Strength training", "Senior fitness", "Home workout", "Monthly coaching"],
  physio: ["Back pain", "Knee pain", "Post-surgery rehab", "Sports injury", "Senior physiotherapy", "Home exercise plan"],
  "home-nurse": ["Injection / dressing", "Post-surgery care", "Patient monitoring", "Night nurse", "Full-day nurse", "Medicine support"],
  "elder-care": ["Daily assistance", "Walking support", "Hospital visit", "Medicine reminder", "Night attendant", "Full-time attendant"],
  babysitter: ["Few-hours babysitting", "Full-day care", "Night babysitter", "Newborn care", "School pickup support", "Monthly nanny"],
  "domestic-help": ["Jhadu / pocha", "Utensil cleaning", "Full home help", "Cooking help", "Part-time maid", "Full-time maid"],
  "pet-grooming": ["Pet bath", "Haircut / trimming", "Nail cutting", "Ear cleaning", "Full grooming", "De-shedding"],
  veterinary: ["General checkup", "Vaccination", "Pet illness", "Injury care", "Home consultation", "Follow-up visit"],
  "security-guard": ["Day guard", "Night guard", "Event security", "Bouncer", "Temporary guard", "Monthly security"],
  "document-help": ["Online form filling", "Government application", "Document upload", "Certificate application", "Print / scan help", "Appointment booking"],
  accountant: ["GST filing", "Income tax return", "Bookkeeping", "Business registration", "Tax consultation", "Monthly accounts"],
  legal: ["Legal consultation", "Agreement drafting", "Property matter", "Family matter", "Business legal help", "Notice / document review"],
  property: ["House on rent", "Property purchase", "Property sale", "Tenant search", "Site visit", "Property verification"],
  travel: ["Flight booking", "Train booking", "Hotel booking", "Tour package", "Visa assistance", "Complete trip planning"],
  "grocery-store": ["Monthly grocery list", "Vegetables & fruits", "Milk, bread & dairy", "Snacks & beverages", "Cleaning supplies", "Urgent grocery items"],
  "sanitary-material": ["Toilet & basin", "Tap & shower fittings", "Pipes & fittings", "Water tank / pump", "Bathroom accessories", "Complete sanitary list"],
  "hardware-material": ["Tools", "Nails, screws & hinges", "Door & lock hardware", "Plumbing hardware", "Building consumables", "Complete hardware list"],
  "electrical-material": ["Wire & cable", "Switches & sockets", "Fan & lights", "MCB & fuse", "Inverter & battery", "Complete electrical list"],
  "paint-material": ["Wall paint", "Primer & putty", "Waterproofing material", "Brushes & rollers", "Wood polish", "Complete paint list"],
  "construction-material": ["Cement", "Bricks / blocks", "Sand & aggregate", "Steel / sariya", "Tiles / marble", "Complete site material"],
  "home-utility-store": ["Kitchen items", "Storage items", "Plastic household items", "Cleaning material", "Bathroom utility", "Complete home list"],
  "general-material": ["Single item quotation", "Multiple item list", "Bulk material", "Urgent local purchase", "Pickup quotation", "Home delivery quotation"],
  general: ["Repair / fix", "New installation", "Inspection", "Regular maintenance", "Urgent help", "Consultation"],
};

const fallbackTaskOptions = [
  "Repair / fix",
  "New installation",
  "Inspection",
  "Regular maintenance",
  "Urgent help",
  "Consultation",
];

const materialBrandOptions = {
  "grocery-store": ["Any brand", "Aashirvaad", "Fortune", "Tata", "India Gate", "Amul"],
  "sanitary-material": ["Any company", "Jaquar", "Hindware", "Cera", "Parryware", "Astral"],
  "hardware-material": ["Any company", "Godrej", "Dorset", "Stanley", "Bosch", "Local ISI"],
  "electrical-material": ["Any company", "Polycab", "Havells", "Finolex", "Anchor by Panasonic", "GM / Legrand"],
  "paint-material": ["Any company", "Asian Paints", "Berger", "Nerolac", "Dulux", "Birla Opus"],
  "construction-material": ["Any company", "UltraTech", "Ambuja", "ACC", "Tata Tiscon", "JSW"],
  "home-utility-store": ["Any brand", "Milton", "Cello", "Nilkamal", "Prestige", "Local value brand"],
  "general-material": ["Any company", "Branded only", "ISI marked", "Local value brand"],
};

const pairedIntentIds = {
  electrician: "electrical-material",
  "electrical-material": "electrician",
  plumber: "sanitary-material",
  "sanitary-material": "plumber",
  painter: "paint-material",
  "paint-material": "painter",
  carpenter: "hardware-material",
  "hardware-material": "carpenter",
  mason: "construction-material",
  "construction-material": "mason",
  general: "general-material",
  "general-material": "general",
};

function getTaskOptions(intent) {
  return serviceTaskOptions[intent.id] || fallbackTaskOptions;
}

function getBrandOptions(intent) {
  return materialBrandOptions[intent.id] || materialBrandOptions["general-material"];
}

function getNeedHead(intent) {
  if (intent.mode === "product") return "SHOPPING & MATERIAL";
  if (["barber", "beauty", "makeup", "massage", "mehndi", "yoga", "fitness"].includes(intent.id)) {
    return "PERSONAL & WELLNESS";
  }
  if (["physio", "home-nurse", "elder-care", "babysitter", "veterinary"].includes(intent.id)) {
    return "HEALTH & CARE";
  }
  if (["mechanic", "car-wash", "towing", "driver", "tyre", "courier", "packers"].includes(intent.id)) {
    return "TRAVEL & MOVEMENT";
  }
  if (["event", "photographer", "decorator", "dj", "catering"].includes(intent.id)) {
    return "EVENTS";
  }
  if (["tutor", "language", "music", "dance"].includes(intent.id)) {
    return "LEARNING";
  }
  if (["document-help", "accountant", "legal", "property", "travel"].includes(intent.id)) {
    return "PROFESSIONAL HELP";
  }
  return "HOME & REPAIR";
}

function getBriefProfile(intent, taskLabel) {
  const task = normalize(taskLabel);
  const baseProfile = {
    unit: intent.mode === "product" ? "item" : "job",
    min: 1,
    max: intent.mode === "product" ? 50 : 20,
    minutesPerUnit: intent.mode === "product" ? 4 : 35,
    question: intent.mode === "product"
      ? "Quotation में कितनी items शामिल हैं?"
      : "काम की quantity कितनी है?",
    hint: intent.mode === "product"
      ? "Item count और नीचे पूरी list लिखें ताकि nearby दुकानदार सही total quotation दे सकें।"
      : "Quantity और timing बताइए ताकि हर active professional सही rate दे सके।",
    noteLabel: intent.mode === "product" ? "पूरी सामान list / brand / size" : "कोई जरूरी detail",
    notePlaceholder: intent.mode === "product"
      ? "हर item, quantity, preferred brand या size लिखें"
      : "समस्या, size या location की जरूरी जानकारी लिखें",
  };

  if (intent.id === "electrician") {
    if (task.includes("fan")) return { ...baseProfile, unit: "fan", max: 12, minutesPerUnit: 35, question: "कितने fan repair / fit कराने हैं?", notePlaceholder: "जैसे: ceiling fan आवाज कर रहा है, wiring भी check करनी है" };
    if (task.includes("light")) return { ...baseProfile, unit: "light", max: 30, minutesPerUnit: 20, question: "कितनी lights का काम है?" };
    if (task.includes("switch") || task.includes("socket")) return { ...baseProfile, unit: "point", max: 30, minutesPerUnit: 18, question: "कितने switch / socket points हैं?" };
  }

  if (intent.id === "plumber") {
    if (task.includes("tap") || task.includes("pipe")) return { ...baseProfile, unit: "point", max: 20, minutesPerUnit: 30, question: "कितने tap / pipe points का काम है?" };
    return { ...baseProfile, unit: "fixture", max: 12, minutesPerUnit: 40, question: "कितने fixtures का काम है?" };
  }

  if (intent.id === "painter") {
    if (task.includes("room")) return { ...baseProfile, unit: "room", max: 20, minutesPerUnit: 240, question: "कितने rooms paint कराने हैं?" };
    if (task.includes("home")) return { ...baseProfile, unit: "home", max: 5, minutesPerUnit: 720, question: "कितने घर / units paint कराने हैं?" };
    return { ...baseProfile, unit: "wall / area", max: 30, minutesPerUnit: 120, question: "कितनी walls / areas पर काम है?" };
  }

  const serviceProfiles = {
    ac: ["AC unit", 10, 75],
    cleaning: ["room / area", 20, 60],
    appliance: ["appliance", 10, 60],
    carpenter: ["item", 20, 75],
    barber: ["person", 10, 35],
    beauty: ["person", 10, 60],
    makeup: ["person", 20, 90],
    massage: ["person", 6, 60],
    tailor: ["clothing item", 30, 40],
    laundry: ["clothing item", 100, 4],
    ironing: ["clothing item", 100, 3],
    gardener: ["area / visit", 10, 90],
    cook: ["person / meal", 30, 30],
    tiffin: ["meal", 50, 10],
    catering: ["guest", 500, 6],
    packers: ["room", 20, 90],
    cctv: ["camera", 32, 45],
    computer: ["device", 10, 75],
    printer: ["printer", 10, 60],
    mobile: ["phone", 10, 60],
    tv: ["TV", 6, 60],
    ro: ["RO unit", 10, 60],
    "car-wash": ["vehicle", 10, 45],
    driver: ["trip / day", 30, 480],
    tyre: ["tyre", 12, 30],
    courier: ["parcel", 50, 15],
    event: ["guest", 1000, 5],
    photographer: ["hour", 24, 60],
    tutor: ["student", 10, 60],
    physio: ["session", 30, 45],
    "home-nurse": ["shift / day", 30, 480],
    "elder-care": ["shift / day", 30, 480],
    babysitter: ["hour / day", 30, 120],
    "domestic-help": ["visit / day", 30, 120],
    "pet-grooming": ["pet", 10, 60],
    veterinary: ["pet", 10, 45],
    "security-guard": ["guard / shift", 30, 480],
    "document-help": ["form / document", 30, 25],
  };

  if (serviceProfiles[intent.id]) {
    const [unit, max, minutesPerUnit] = serviceProfiles[intent.id];
    return {
      ...baseProfile,
      unit,
      max,
      minutesPerUnit,
      question: `कितने ${unit} के लिए requirement है?`,
    };
  }

  if (intent.mode === "product") {
    if (intent.id === "electrical-material") {
      if (task.includes("wire") || task.includes("cable")) {
        return {
          ...baseProfile,
          unit: "bundle",
          max: 100,
          minutesPerUnit: 3,
          question: "कितने wire / cable bundles चाहिए?",
          hint: "Bundle count, company और wire size बताइए ताकि nearby electrical shops सही quotation दे सकें।",
          noteLabel: "Wire size / length / colour",
          notePlaceholder: "जैसे: 10mm wire, 90 metre bundle, red colour",
        };
      }
      if (task.includes("fan") || task.includes("light")) {
        return {
          ...baseProfile,
          unit: "piece",
          max: 50,
          minutesPerUnit: 5,
          question: "कितने fan / light pieces चाहिए?",
          notePlaceholder: "Model, watt, colour या size लिखें",
        };
      }
    }

    const materialProfiles = {
      "grocery-store": ["list item", 100, 3],
      "sanitary-material": ["material item", 50, 8],
      "hardware-material": ["material item", 80, 5],
      "electrical-material": ["material item", 80, 6],
      "paint-material": ["material item", 50, 8],
      "construction-material": ["material item", 100, 10],
      "home-utility-store": ["item", 80, 4],
      "general-material": ["item", 100, 6],
    };
    const [unit, max, minutesPerUnit] = materialProfiles[intent.id] || ["item", 50, 5];
    return {
      ...baseProfile,
      unit,
      max,
      minutesPerUnit,
      question: `Quotation में कितनी ${unit}s हैं?`,
    };
  }

  return baseProfile;
}

function extractRequirementDetails(query, taskLabel, intent, profile) {
  const source = `${query} ${taskLabel}`.trim();
  const cleanSource = normalize(source);
  const quantityMatch = source.match(
    /(\d{1,3})\s*(bundles?|pieces?|items?|units?|bags?|fans?|rooms?|points?|kg|किलो|पीस|बंडल|बैग)(?:\s|$)/i,
  );
  const specificationMatch = source.match(
    /(\d+(?:\.\d+)?)\s*(sq\s*mm|mm|cm|metres?|meters?|mtr|kg|litres?|liters?|watt|amp)(?:\s|$)/i,
  );
  const availableBrands = intent.mode === "product" ? getBrandOptions(intent) : [];
  const brand = availableBrands.slice(1).find((item) => containsPhrase(cleanSource, item)) || "";
  const requestedQuantity = quantityMatch ? Number(quantityMatch[1]) : null;
  const quantity = requestedQuantity
    ? Math.max(profile.min, Math.min(profile.max, requestedQuantity))
    : null;
  const specification = specificationMatch
    ? `${specificationMatch[1]}${specificationMatch[2].replace(/\s+/g, "")}`
    : "";
  const isStandardTask = getTaskOptions(intent).includes(taskLabel);
  let itemType = "";
  if (intent.mode === "product" && /wire|cable/i.test(taskLabel)) itemType = "wire";
  if (intent.mode === "product" && /fan|light/i.test(taskLabel)) itemType = "fan / light";
  const notePrefill = !isStandardTask
    ? taskLabel
    : [specification, itemType].filter(Boolean).join(" ");
  const urgency = containsPhrase(cleanSource, "कल") || containsPhrase(cleanSource, "kal")
    ? "कल"
    : containsPhrase(cleanSource, "आज") || containsPhrase(cleanSource, "today") || containsPhrase(cleanSource, "aaj")
      ? "आज"
      : null;
  const summary = [
    quantity ? `${quantity} ${profile.unit}` : "",
    specification,
    brand,
    urgency,
  ].filter(Boolean);

  return {
    quantity,
    specification,
    brand,
    urgency,
    notePrefill,
    summary,
  };
}

const state = {
  query: "",
  intent: serviceIntents.at(-1),
  taskLabel: "",
  briefProfile: null,
  briefQuantity: 1,
  briefUrgency: "अभी / ASAP",
  briefBrand: "Any company",
  briefAttachment: null,
  parsedRequirement: null,
  requirementBrief: null,
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
const taskScene = document.querySelector("#taskScene");
const radarScene = document.querySelector("#radarScene");
const trackingScene = document.querySelector("#trackingScene");
const mainSearchForm = document.querySelector("#mainSearchForm");
const serviceQuery = document.querySelector("#serviceQuery");
const taskCentre = document.querySelector(".task-centre");
const taskOptions = document.querySelector("#taskOptions");
const taskOtherButton = document.querySelector("#taskOtherButton");
const intentRoute = document.querySelector("#intentRoute");
const intentRouteSwitch = document.querySelector("#intentRouteSwitch");
const customTaskForm = document.querySelector("#customTaskForm");
const customTaskInput = document.querySelector("#customTaskInput");
const briefScene = document.querySelector("#briefScene");
const briefForm = document.querySelector("#briefForm");
const quantityMinus = document.querySelector("#quantityMinus");
const quantityPlus = document.querySelector("#quantityPlus");
const briefNote = document.querySelector("#briefNote");
const urgencyOptions = document.querySelector("#urgencyOptions");
const brandField = document.querySelector("#brandField");
const brandOptions = document.querySelector("#brandOptions");
const briefParsed = document.querySelector("#briefParsed");
const briefAttachment = document.querySelector("#briefAttachment");
const briefAttachmentLabel = document.querySelector(".brief-attachment");
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
const trackingMap = document.querySelector("#trackingMap");
const trackingGoogleMap = document.querySelector("#trackingGoogleMap");
const toast = document.querySelector("#toast");
const installAppButton = document.querySelector("#installApp");
const installAppLabel = document.querySelector("#installAppLabel");
const GOOGLE_MAPS_EMBED_API_KEY = "AIzaSyCGWxxY1hTDB-Js68hDsM1YnD7S9VUTdSU";

function normalize(value) {
  return value
    .toLocaleLowerCase("hi-IN")
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function containsPhrase(cleanText, phrase) {
  const cleanPhrase = normalize(phrase);
  if (!cleanPhrase) return false;
  return ` ${cleanText} `.includes(` ${cleanPhrase} `);
}

function detectIntent(query) {
  const clean = normalize(query);
  const strongPurchaseSignals = [
    "buy", "purchase", "kharid", "khareed", "saman", "saaman", "material",
    "quotation", "rate list", "shop", "store", "dukan", "order", "mangwa",
    "mangwana", "delivery", "deliver", "bhejo",
    "खरीद", "सामान", "मटेरियल", "कोटेशन", "दुकान", "ऑर्डर", "मंगाना",
    "मंगवाना", "डिलीवरी", "भेजो",
  ];
  const requestSignals = ["chahiye", "chaahiye", "चाहिए", "चाहिये"];
  const serviceSignals = [
    "repair", "fix", "service", "mistri", "technician", "installation",
    "mechanic", "professional", "expert", "lagana", "karwana", "karana", "theek",
    "मरम्मत", "मिस्त्री", "मैकेनिक", "ठीक", "लगाना", "करवाना", "कराना",
  ];
  const hasStrongPurchaseSignal = strongPurchaseSignals.some((signal) => containsPhrase(clean, signal));
  const hasRequestSignal = requestSignals.some((signal) => containsPhrase(clean, signal));
  const hasPurchaseSignal = hasStrongPurchaseSignal || hasRequestSignal;
  const hasServiceSignal = serviceSignals.some((signal) => containsPhrase(clean, signal));
  const productRoutingRules = [
    ["electrical-material", ["bijli saman", "bijli ka saman", "electric saman", "electrical saman", "wire", "cable", "switch", "socket", "mcb", "fan", "light", "बिजली का सामान", "बिजली सामान", "वायर", "स्विच", "सॉकेट", "पंखा", "लाइट"]],
    ["grocery-store", ["grocery", "kirana", "parchoon", "ration", "किराना", "परचून", "राशन"]],
    ["sanitary-material", ["sanitary", "toilet seat", "wash basin", "bathroom material", "tap", "shower", "सैनिटरी", "वॉश बेसिन", "नल", "शावर"]],
    ["hardware-material", ["hardware material", "nail", "screw", "hinge", "lock material", "हार्डवेयर", "कील", "पेंच"]],
    ["paint-material", ["paint", "paint material", "paint bucket", "primer", "putty", "पेंट", "पेंट का सामान", "पुट्टी", "प्राइमर"]],
    ["construction-material", ["construction material", "cement", "brick", "sariya", "सीमेंट", "ईंट", "सरिया"]],
  ];
  const serviceRoutingRules = [
    ["mechanic", ["car", "bike", "vehicle", "scooter", "gaadi", "गाड़ी", "कार", "बाइक", "स्कूटर"]],
    ["electrician", ["fan", "wire", "wiring", "switch", "socket", "mcb", "fuse", "bijli", "पंखा", "वायर", "वायरिंग", "स्विच", "सॉकेट", "बिजली"]],
    ["plumber", ["tap", "pipe", "leak", "flush", "drain", "nal", "paani", "नल", "पाइप", "लीक", "फ्लश", "पानी"]],
    ["painter", ["paint", "polish", "wall", "पेंट", "पॉलिश", "दीवार"]],
  ];

  if (hasServiceSignal) {
    const routedService = serviceRoutingRules.find(([, patterns]) => (
      patterns.some((pattern) => containsPhrase(clean, pattern))
    ));
    if (routedService) {
      const serviceIntent = serviceIntents.find((intent) => intent.id === routedService[0]);
      if (serviceIntent) return serviceIntent;
    }
  }

  if (hasPurchaseSignal && !hasServiceSignal) {
    const routedProduct = productRoutingRules.find(([, patterns]) => (
      patterns.some((pattern) => containsPhrase(clean, pattern))
    ));
    if (routedProduct) {
      const productIntent = serviceIntents.find((intent) => intent.id === routedProduct[0]);
      if (productIntent) return productIntent;
    }
  }

  const genericFuzzyTokens = new Set([
    "repair", "service", "help", "expert", "professional", "technician",
    "material", "काम", "मरम्मत", "सर्विस", "मिस्त्री",
  ]);
  let best = serviceIntents.at(-1);
  let bestScore = 0;

  for (const intent of serviceIntents.slice(0, -1)) {
    let score = 0;
    for (const keyword of intent.keywords) {
      const cleanKeyword = normalize(keyword);
      if (!cleanKeyword) continue;
      if (containsPhrase(clean, cleanKeyword)) {
        score += 10 + cleanKeyword.length;
      } else {
        const queryTokens = clean.split(" ");
        const keywordTokens = cleanKeyword.split(" ");
        for (const token of keywordTokens) {
          if (
            token.length > 2
            && !genericFuzzyTokens.has(token)
            && queryTokens.some((queryToken) => queryToken.startsWith(token) || token.startsWith(queryToken))
          ) {
            score += 4;
          }
        }
      }
    }
    if (score > 0 && intent.mode === "product" && hasStrongPurchaseSignal) score += 18;
    if (score > 0 && intent.mode !== "product" && hasServiceSignal) score += 14;
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

const isStandaloneApp = (
  window.matchMedia("(display-mode: standalone)").matches
  || window.navigator.standalone === true
);
const isIosDevice = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
let deferredInstallPrompt = null;

if (installAppButton && !isStandaloneApp) {
  installAppButton.hidden = false;
  if (isIosDevice) installAppLabel.textContent = "ADD APP";
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (installAppButton && !isStandaloneApp) installAppButton.hidden = false;
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  if (installAppButton) installAppButton.hidden = true;
  showToast("Qigo app install ho gaya. Ab home screen se seedha kholiye.");
});

installAppButton?.addEventListener("click", async () => {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installAppButton.hidden = true;
    if (choice.outcome !== "accepted") {
      showToast("App baad mein browser menu se bhi install kar sakte hain.");
    }
    return;
  }

  showToast(
    isIosDevice
      ? "iPhone par Share dabaiye, phir Add to Home Screen chuniye."
      : "Browser menu kholiye aur Install Qigo ya Add to Home screen chuniye.",
  );
});

if ("serviceWorker" in window.navigator) {
  window.addEventListener("load", () => {
    window.navigator.serviceWorker.register("/sw.js?v=20260807-8").catch(() => {
      // The live experience still works if offline support is unavailable.
    });
  });
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
  "मेरा accident हो गया है",
  "10 bundle 10mm Polycab wire चाहिए",
  "मुझे अभी plumber चाहिए",
  "Fan repair करवाना है",
  "घर पर haircut चाहिए",
  "किराने की list की quotation चाहिए",
  "AC ठंडा नहीं कर रहा",
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

function renderTaskOptions(intent) {
  taskOptions.replaceChildren();

  getTaskOptions(intent).forEach((label, index) => {
    const button = document.createElement("button");
    const number = document.createElement("span");
    const title = document.createElement("b");
    const arrow = document.createElement("span");

    button.className = "task-option";
    button.type = "button";
    button.dataset.taskLabel = label;
    button.setAttribute("aria-label", `${label} चुनें`);

    number.className = "task-option-number";
    number.textContent = String(index + 1).padStart(2, "0");
    title.textContent = label;
    arrow.className = "task-option-arrow";
    arrow.textContent = "→";

    button.append(number, title, arrow);
    taskOptions.append(button);
  });
}

function renderIntentRouteCorrection(intent) {
  const pairedIntentId = pairedIntentIds[intent.id];
  const pairedIntent = serviceIntents.find((item) => item.id === pairedIntentId);
  if (!pairedIntent) {
    intentRoute.hidden = true;
    intentRouteSwitch.removeAttribute("data-target-intent");
    return;
  }

  intentRoute.hidden = false;
  setText("#intentRouteBadge", intent.mode === "product" ? "SHOPPING MODE" : "SERVICE MODE");
  intentRouteSwitch.dataset.targetIntent = pairedIntent.id;
  intentRouteSwitch.textContent = intent.mode === "product"
    ? "मिस्त्री / service चाहिए?"
    : "सामान खरीदना है?";
}

function showTaskScene(query, forcedIntent = null) {
  const trimmed = query.trim();
  if (!trimmed) {
    serviceQuery.focus();
    return;
  }

  clearSequence();
  state.query = trimmed;
  state.intent = forcedIntent || detectIntent(trimmed);
  state.taskLabel = "";
  state.requirementBrief = null;
  serviceQuery.value = trimmed;
  radarQuery.value = trimmed;

  renderTaskOptions(state.intent);
  renderIntentRouteCorrection(state.intent);
  setText("#taskServiceName", state.intent.label);
  setText("#taskQuestionSuffix", state.intent.mode === "product" ? "से क्या मंगाना है?" : "से क्या काम करवाना है?");
  setText(
    "#taskSubtitle",
    state.intent.mode === "product"
      ? "सामान का प्रकार चुनिए, फिर Qigo nearby दुकानों से quotations मंगाएगा।"
      : "एक विकल्प चुनिए, फिर Qigo आपके पास उपलब्ध सही professional खोजेगा।",
  );
  setText("#networkStateText", "काम समझ रहा है");
  setText("#searchStatus", `${state.intent.label} के लिए काम का प्रकार चुनें`);

  customTaskInput.value = "";
  customTaskForm.hidden = true;
  taskOtherButton.classList.remove("active");
  taskOtherButton.disabled = false;
  taskCentre.scrollTop = 0;

  searchScene.hidden = true;
  taskScene.hidden = false;
  briefScene.hidden = true;
  radarScene.hidden = true;
  trackingScene.hidden = true;
  appShell.classList.remove("radar-active", "tracking-active");
  providerDialog.close?.();
  stopPlaceholderAnimation();
}

function renderBriefQuantity() {
  setText("#quantityValue", String(state.briefQuantity));
  setText("#quantityUnit", state.briefProfile?.unit || "item");
  quantityMinus.disabled = state.briefQuantity <= (state.briefProfile?.min || 1);
  quantityPlus.disabled = state.briefQuantity >= (state.briefProfile?.max || 20);
}

function showBriefScene(taskLabel) {
  state.taskLabel = taskLabel;
  state.briefProfile = getBriefProfile(state.intent, taskLabel);
  state.requirementBrief = null;

  const isProduct = state.intent.mode === "product";
  const availableBrands = isProduct ? getBrandOptions(state.intent) : [];
  const mentionedBrand = availableBrands.slice(1).find((brand) => (
    containsPhrase(normalize(`${state.query} ${taskLabel}`), brand)
  ));
  state.parsedRequirement = extractRequirementDetails(
    state.query,
    taskLabel,
    state.intent,
    state.briefProfile,
  );
  state.briefQuantity = state.parsedRequirement.quantity || 1;
  state.briefUrgency = state.parsedRequirement.urgency || "अभी / ASAP";
  state.briefBrand = state.parsedRequirement.brand || mentionedBrand || availableBrands[0] || "Any company";
  state.briefAttachment = null;
  setText("#briefNeedHead", getNeedHead(state.intent));
  setText("#briefServiceSummary", `${state.intent.label} · ${taskLabel}`);
  setText("#briefModeBadge", isProduct ? "SHOP QUOTATIONS" : "SERVICE QUOTES");
  setText("#briefQuestion", state.briefProfile.question);
  setText("#briefHint", state.briefProfile.hint);
  setText("#briefNoteLabel", state.briefProfile.noteLabel);
  setText("#urgencyLegend", isProduct ? "Delivery कब चाहिए?" : "काम कब चाहिए?");
  setText("#findOffersLabel", isProduct ? "Nearby shop quotations देखें" : "Nearby professional quotes देखें");
  setText("#briefAnalysisTitle", isProduct ? "Qigo best quotation निकालेगा" : "Qigo सही rate मंगाएगा");
  setText(
    "#briefAnalysisText",
    isProduct
      ? "Company + unit rate + stock + delivery + seller quality को साथ compare करेगा।"
      : "Arrival time + work time + price + rating को साथ compare करेगा।",
  );

  briefNote.value = state.parsedRequirement.notePrefill || "";
  briefNote.placeholder = state.briefProfile.notePlaceholder;
  urgencyOptions.querySelectorAll(".urgency-option").forEach((button) => {
    button.classList.toggle("selected", button.dataset.urgency === state.briefUrgency);
  });
  briefParsed.hidden = state.parsedRequirement.summary.length === 0;
  setText("#briefParsedText", state.parsedRequirement.summary.join(" · "));
  brandField.hidden = !isProduct;
  brandOptions.innerHTML = isProduct
    ? availableBrands.map((brand) => `
        <button
          class="brand-option${brand === state.briefBrand ? " selected" : ""}"
          type="button"
          data-brand="${brand}"
          aria-pressed="${brand === state.briefBrand}"
        >${brand}</button>
      `).join("")
    : "";
  briefAttachment.value = "";
  briefAttachmentLabel.classList.remove("has-file");
  setText("#attachmentTitle", isProduct ? "Material list / photo जोड़ें" : "Problem photo जोड़ें");
  setText("#attachmentHint", isProduct ? "JPG, PNG, PDF या TXT · optional" : "JPG, PNG या PDF · optional");
  setText("#attachmentStatus", "ATTACH");
  renderBriefQuantity();
  briefForm.scrollTop = 0;

  searchScene.hidden = true;
  taskScene.hidden = true;
  briefScene.hidden = false;
  radarScene.hidden = true;
  trackingScene.hidden = true;
  appShell.classList.remove("radar-active", "tracking-active");
  setText("#networkStateText", isProduct ? "Quotation brief तैयार है" : "काम का brief तैयार है");
}

function chooseTask(taskLabel, selectedButton = null) {
  const trimmedTask = taskLabel.trim();
  if (!trimmedTask) {
    customTaskInput.focus();
    return;
  }

  state.taskLabel = trimmedTask;
  taskOptions.querySelectorAll(".task-option").forEach((button) => {
    button.disabled = true;
    button.classList.toggle("selected", button === selectedButton);
  });
  taskOtherButton.disabled = true;
  setText("#networkStateText", "Requirement detail तैयार कर रहा है");
  addTimer(() => showBriefScene(trimmedTask), 220);
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
  const requirement = state.requirementBrief || {
    quantity: 1,
    unit: "job",
    urgency: "अभी / ASAP",
    note: "",
  };
  const basePrice = intent.quoteBase
    || Number(String(intent.basePrice).replace(/[^\d]/g, ""))
    || 499;
  const isProduct = intent.mode === "product";
  const availableBrands = isProduct ? getBrandOptions(intent) : [];
  const preferredBrand = requirement.brand || availableBrands[0] || "";
  const openBrandChoice = /^any\b/i.test(preferredBrand);
  const itemQuantity = Math.max(1, Number(requirement.quantity) || 1);
  const productUnitFactors = {
    "grocery-store": 0.12,
    "sanitary-material": 0.34,
    "hardware-material": 0.16,
    "electrical-material": 0.36,
    "paint-material": 0.28,
    "construction-material": 0.1,
    "home-utility-store": 0.18,
    "general-material": 0.2,
  };
  const wireSizeMatch = String(requirement.note || "").match(
    /(\d+(?:\.\d+)?)\s*(?:sq\s*)?mm/i,
  );
  const specificationFactor = isProduct
    && intent.id === "electrical-material"
    && /wire|cable/i.test(state.taskLabel)
    && wireSizeMatch
    ? Math.min(5, Math.max(1, Number(wireSizeMatch[1]) / 2.5))
    : 1;

  const offers = intent.providers
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
      const quoteVariation = 0.88 + ((seed + index * 13) % 24) / 100;
      const unitMinutes = state.briefProfile?.minutesPerUnit || (isProduct ? 5 : 35);
      const workDuration = Math.max(
        isProduct ? 12 : 20,
        Math.round(unitMinutes * requirement.quantity * (0.88 + ((seed + index * 5) % 18) / 100)),
      );
      const packingOrJobQueue = isProduct
        ? 4 + ((seed + index * 3) % 8)
        : provider.currentJob ?? ((seed + index * 3) % 9);
      const quantityFactor = isProduct
        ? itemQuantity * (productUnitFactors[intent.id] || 0.2) * specificationFactor
        : Math.max(1, 0.55 + itemQuantity * 0.58);
      const effortFactor = isProduct
        ? 1
        : 1 + Math.min(1.8, workDuration / 240) * 0.34;
      const brand = isProduct
        ? (openBrandChoice
          ? availableBrands[1 + ((seed + index * 5) % Math.max(1, availableBrands.length - 1))]
          : preferredBrand)
        : "";
      const brandFactor = isProduct ? 0.94 + ((seed + index * 7) % 17) / 100 : 1;
      const itemSubtotal = Math.max(
        79,
        Math.round((basePrice * quantityFactor * effortFactor * quoteVariation * brandFactor) / 10) * 10,
      );
      const deliveryFee = isProduct ? [0, 0, 49, 79, 99][(seed + index * 3) % 5] : 0;
      const quotePrice = itemSubtotal + deliveryFee;
      const unitPrice = isProduct ? Math.max(1, Math.round(itemSubtotal / itemQuantity)) : 0;
      const stockStatus = isProduct && (seed + index) % 5 === 0 ? "2 HR STOCK" : "IN STOCK";
      const invoiceLabel = isProduct && (seed + index * 2) % 5 === 0 ? "BASIC BILL" : "GST BILL";
      const eta = packingOrJobQueue + travel;

      return {
        ...provider,
        id: `${intent.id}-${index + 1}`,
        currentJob: packingOrJobQueue,
        travel,
        eta,
        skill: provider.providerRole || intent.providerRole,
        price: `₹${quotePrice.toLocaleString("en-IN")}`,
        quotePrice,
        itemSubtotal,
        unitPrice,
        deliveryFee,
        stockStatus,
        invoiceLabel,
        quoteValidity: isProduct ? "15 min rate lock" : "",
        workDuration,
        quality: provider.quality || Math.round(provider.rating * 20),
        brand,
        offerMode: isProduct ? "product" : "service",
        distance: Number(distance.toFixed(1)),
        latitude: providerCoordinate.latitude,
        longitude: providerCoordinate.longitude,
        bearing,
        locationMode: location.status,
      };
    })
    .filter((provider) => provider.distance <= state.geofenceKm);

  if (!offers.length) return [];

  const lowestPrice = Math.min(...offers.map((provider) => provider.quotePrice));
  const fastestEta = Math.min(...offers.map((provider) => provider.eta));
  const highestPrice = Math.max(...offers.map((provider) => provider.quotePrice));
  const slowestEta = Math.max(...offers.map((provider) => provider.eta));

  offers.forEach((provider) => {
    const priceScore = highestPrice === lowestPrice
      ? 1
      : 1 - (provider.quotePrice - lowestPrice) / (highestPrice - lowestPrice);
    const etaScore = slowestEta === fastestEta
      ? 1
      : 1 - (provider.eta - fastestEta) / (slowestEta - fastestEta);
    const qualityScore = Math.min(1, provider.quality / 100);
    const stockScore = provider.offerMode === "product" && provider.stockStatus !== "IN STOCK" ? 0.6 : 1;
    provider.valueScore = provider.offerMode === "product"
      ? Math.round((priceScore * 0.38 + qualityScore * 0.28 + etaScore * 0.19 + stockScore * 0.15) * 100)
      : Math.round((priceScore * 0.42 + qualityScore * 0.38 + etaScore * 0.2) * 100);
    provider.lowestPrice = provider.quotePrice === lowestPrice;
    provider.fastest = provider.eta === fastestEta;
  });

  const bestValueScore = Math.max(...offers.map((provider) => provider.valueScore));
  offers.forEach((provider) => {
    provider.bestValue = provider.valueScore === bestValueScore;
  });

  return offers.sort(
    isProduct
      ? (a, b) => b.valueScore - a.valueScore || a.quotePrice - b.quotePrice
      : (a, b) => a.eta - b.eta || b.valueScore - a.valueScore,
  );
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

function updateGoogleTrackingMap(booking, routeProgress, phase) {
  const allowedHost = window.location.hostname === "qigo.co.in"
    || window.location.hostname === "www.qigo.co.in";
  const hasConfiguredKey = !GOOGLE_MAPS_EMBED_API_KEY.startsWith("__");

  if (!trackingGoogleMap || !trackingMap || !allowedHost || !hasConfiguredKey) {
    trackingGoogleMap?.setAttribute("hidden", "");
    trackingMap?.classList.remove("has-google-map");
    return;
  }

  const destination = booking.location || state.location || { latitude: 28.6139, longitude: 77.209 };
  const provider = booking.provider;
  const movingProgress = phase === "arrived" ? 1 : routeProgress;
  const origin = {
    latitude: provider.latitude + (destination.latitude - provider.latitude) * movingProgress,
    longitude: provider.longitude + (destination.longitude - provider.longitude) * movingProgress,
  };
  const routeToken = [
    origin.latitude.toFixed(5),
    origin.longitude.toFixed(5),
    destination.latitude.toFixed(5),
    destination.longitude.toFixed(5),
    phase,
  ].join(":");

  if (trackingGoogleMap.dataset.routeToken === routeToken) return;

  const embedUrl = new URL(
    phase === "arrived"
      ? "https://www.google.com/maps/embed/v1/place"
      : "https://www.google.com/maps/embed/v1/directions",
  );
  embedUrl.searchParams.set("key", GOOGLE_MAPS_EMBED_API_KEY);
  embedUrl.searchParams.set(
    phase === "arrived" ? "q" : "origin",
    `${origin.latitude},${origin.longitude}`,
  );
  if (phase !== "arrived") {
    embedUrl.searchParams.set("destination", `${destination.latitude},${destination.longitude}`);
    embedUrl.searchParams.set("mode", "driving");
  }
  embedUrl.searchParams.set("language", "hi");
  embedUrl.searchParams.set("region", "IN");

  trackingGoogleMap.dataset.routeToken = routeToken;
  trackingGoogleMap.src = embedUrl.toString();
  trackingGoogleMap.removeAttribute("hidden");
  trackingMap.classList.add("has-google-map");
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
  const isProduct = booking.offerMode === "product";

  setText("#trackingBookingId", booking.id);
  setText("#trackingMarkerInitials", provider.initials);
  setText("#trackingAvatar", provider.initials);
  setText("#trackingSkill", provider.skill);
  setText("#trackingName", provider.name);
  setText("#trackingRating", `${provider.rating.toFixed(1)} ★`);
  setText("#trackingEta", String(eta));
  setText("#trackingDistance", eta === 0 ? "0.0 km" : `${Math.max(0.1, remainingDistance).toFixed(1)} km`);
  setText("#trackingDistanceLabel", isProduct ? "बाकी delivery" : "बाकी दूरी");
  setText("#trackingQuoteLabel", isProduct ? "Quotation" : "Work quote");
  setText("#trackingQuote", booking.quotePrice || provider.price || "Scope-based");
  setText(
    "#trackingService",
    isProduct && provider.brand ? `${booking.serviceLabel} · ${provider.brand}` : booking.serviceLabel,
  );
  setText("#trackingRouteLabel", `${booking.routeName} · ${booking.initialDistance.toFixed(1)} km`);
  setText("#journeyStepBooked strong", isProduct ? "Order confirmed" : "Booked");
  setText("#journeyStepBooked small", isProduct ? "Shop ने quotation accept किया" : "Request accepted");
  setText("#journeyStepArrival strong", isProduct ? "Delivery" : "Arrival");
  setText("#journeyStepArrival small", isProduct ? "आपकी live location" : "आपकी live location");
  setText("#cancelBooking", isProduct ? "Order रद्द करें" : "Booking रद्द करें");
  setText("#trackingAction", isProduct ? "Shop को message" : "Provider को message");
  setText(
    ".tracking-disclaimer",
    isProduct
      ? "Prototype delivery: real seller app और order backend जुड़ने पर shop का वास्तविक movement आएगा।"
      : "Prototype tracking: real provider app और backend जुड़ने पर इसी screen पर वास्तविक movement आएगा।",
  );

  if (phase === "current-job") {
    setText("#trackingStatusKicker", isProduct ? "ORDER CONFIRMED" : "BOOKING CONFIRMED");
    setText(
      "#trackingStatusTitle",
      isProduct ? `${provider.name} आपका order pack कर रहा है` : `${provider.name} मौजूदा काम पूरा कर रहे हैं`,
    );
    setText("#trackingNetworkBadge", isProduct ? "PACKING" : "PREPARING");
    setText(
      "#journeyRouteTitle",
      isProduct ? `${booking.currentJobRemaining} min packing बाकी` : `${booking.currentJobRemaining} min का काम बाकी`,
    );
    setText("#journeyRouteDetail", isProduct ? "इसके बाद delivery निकलेगी" : "इसके बाद आपकी ओर निकलेंगे");
  } else if (phase === "on-route") {
    setText("#trackingStatusKicker", "ON THE WAY");
    setText(
      "#trackingStatusTitle",
      isProduct ? `${provider.name} से आपका order आ रहा है` : `${provider.name} आपकी ओर आ रहे हैं`,
    );
    setText("#trackingNetworkBadge", isProduct ? "DELIVERY LIVE" : "DEMO LIVE");
    setText("#journeyRouteTitle", isProduct ? "Delivery रास्ते में है" : "रास्ते में हैं");
    setText("#journeyRouteDetail", `${booking.travelRemaining} min · location online`);
  } else {
    setText("#trackingStatusKicker", "ARRIVED");
    setText(
      "#trackingStatusTitle",
      isProduct ? `${provider.name} का order पहुँच गया है` : `${provider.name} आपकी location पर पहुँच गए हैं`,
    );
    setText("#trackingNetworkBadge", "ARRIVED");
    setText("#journeyRouteTitle", isProduct ? "Delivery पूरी हुई" : "Route पूरा हुआ");
    setText("#journeyRouteDetail", isProduct ? "Order पहुँच गया है" : "Provider पहुँच गए हैं");
    setText("#trackingAction", isProduct ? "Order received" : "काम शुरू करें");
  }

  setJourneyState(routeProgress, phase);
  updateRouteMarker(phase === "arrived" ? 1 : routeProgress);
  updateGoogleTrackingMap(booking, routeProgress, phase);
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
    showToast(
      booking.offerMode === "product"
        ? `${booking.provider.name} का order आपकी location पर पहुँच गया है।`
        : `${booking.provider.name} आपकी location पर पहुँच गए हैं।`,
    );
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
  taskScene.hidden = true;
  briefScene.hidden = true;
  radarScene.hidden = true;
  trackingScene.hidden = false;
  providerDialog.close?.();
  appShell.classList.add("radar-active", "tracking-active");
  setText("#networkStateText", booking.offerMode === "product" ? "Active delivery" : "Active booking");

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
  routeUrl.searchParams.set("dir_action", "navigate");
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
    serviceLabel: state.taskLabel
      ? `${state.intent.label} · ${state.taskLabel}`
      : state.intent.label,
    initialDistance: provider.distance,
    initialTravel: provider.travel,
    currentJobRemaining: provider.currentJob,
    travelRemaining: provider.travel,
    routeIndex,
    routeName: route.name,
    location: state.location,
    requirementBrief: state.requirementBrief,
    offerMode: provider.offerMode,
    quotePrice: provider.price,
    workDuration: provider.workDuration,
    createdAt: Date.now(),
  };
  saveBooking();

  selectProviderButton.disabled = true;
  selectProviderButton.innerHTML = provider.offerMode === "product"
    ? "Quotation confirm हो रही है… <span>•••</span>"
    : "Booking confirm हो रही है… <span>•••</span>";
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
          class="provider-node${provider.fastest ? " fastest" : ""}${provider.bestValue ? " best-value" : ""}"
          type="button"
          data-provider-id="${provider.id}"
          style="--x:${position.x}%;--y:${position.y}%;--delay:${index * 150}ms"
          aria-label="${provider.name}, ${provider.eta} minute, ${provider.price} quote"
        >
          <span class="node-avatar">${provider.initials}</span>
          <span class="node-eta"><strong>${provider.eta}</strong><small>min · ${provider.price}</small></span>
        </button>
      `;
    })
    .join("");
}

function renderProviderResponses() {
  const isProduct = state.intent.mode === "product";
  providerResponses.innerHTML = state.providers
    .map(
      (provider, index) => `
        <button
          class="provider-response${provider.fastest ? " fastest" : ""}${provider.bestValue ? " best-value" : ""}"
          type="button"
          data-provider-id="${provider.id}"
          aria-label="${provider.name} चुनें, ${isProduct ? `${provider.brand} company, ` : ""}${provider.price}, ${provider.eta} minute"
        >
          <span class="response-avatar">${provider.initials}</span>
          <span class="response-copy">
            <b>${provider.name}</b>
            <span>
              ${provider.distance.toFixed(1)} km ·
              ${isProduct ? `<strong class="response-brand">${provider.brand}</strong> · ${provider.quality}% quality · ${provider.rating} ★` : `${provider.workDuration}m work · ${provider.rating} ★`}
            </span>
            ${isProduct ? `
              <span class="response-breakdown">
                ₹${provider.unitPrice.toLocaleString("en-IN")}/${state.requirementBrief.unit}
                × ${state.requirementBrief.quantity} · ${provider.stockStatus} · ${provider.invoiceLabel}
              </span>
            ` : ""}
            <span class="response-badges">
              ${provider.bestValue ? '<em class="best-value">BEST VALUE</em>' : ""}
              ${provider.lowestPrice ? '<em class="lowest-price">LOWEST PRICE</em>' : ""}
              ${provider.fastest ? `<em>${isProduct ? "FAST DELIVERY" : "FASTEST"}</em>` : ""}
            </span>
          </span>
          <span class="response-eta" style="--quote-delay:${index * 120}ms">
            <strong>${provider.price}</strong>
            <small>${isProduct ? "total quote" : "work quote"}</small>
            <em>${provider.eta} min ${isProduct ? "delivery" : "arrival"}</em>
          </span>
        </button>
      `,
    )
    .join("");
  setText("#responseCount", String(state.providers.length));
  setText("#responseCountLabel", isProduct ? "shop quotes" : "active quotes");
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

function configureNearbyGoogleMaps(location) {
  const mapsLink = document.querySelector("#nearbyMapsLink");
  if (!mapsLink) return;

  const mapsUrl = new URL("https://www.google.com/maps/search/");
  mapsUrl.searchParams.set("api", "1");
  mapsUrl.searchParams.set(
    "query",
    `${state.intent.label} ${state.taskLabel} near ${location.latitude},${location.longitude}`,
  );
  mapsLink.href = mapsUrl.toString();
  mapsLink.setAttribute(
    "aria-label",
    `Google Maps par nearby ${state.intent.label} for ${state.taskLabel} dekhein`,
  );
}

function startNetworkSequence(location) {
  const providerCount = state.providers.length;
  const isProduct = state.intent.mode === "product";
  setLocationLabel(location);
  configureNearbyGoogleMaps(location);
  setText("#capsuleStatus", isProduct ? "Eligible shops se quotations mangayi ja rahi hain" : "Active professionals se rate mangaya ja raha hai");
  setText("#pulseTitle", isProduct ? "Nearby दुकानदारों को list भेज रहा हूँ" : "Aas-paas active professionals को काम भेज रहा हूँ");
  setText(
    "#pulseDetail",
    `${providerCount} ${isProduct ? "eligible shops" : "active professionals"} ${state.geofenceKm} km geofence में मिले`,
  );
  setText("#networkStateText", isProduct ? "Collecting quotations" : "Collecting live quotes");
  setText(
    "#etaFormula",
    isProduct
      ? "Qigo Value = company + unit rate + stock + delivery + seller quality"
      : "Compare = arrival time + work time + quoted price + professional rating",
  );
  networkPulse.classList.remove("done");
  responseDock.hidden = true;
  providerLayer.innerHTML = "";

  renderProviderNodes();
  renderProviderResponses();

  addTimer(() => {
    document.querySelectorAll(".provider-node").forEach((node) => node.classList.add("visible"));
    setText("#capsuleStatus", isProduct ? "Shop quotations upload हो रही हैं" : "Rate और timing replies आ रही हैं");
    setText(
      "#pulseTitle",
      `${providerCount} ${isProduct ? "shops ने requirement देखी" : "professionals ने काम देखा"}`,
    );
    setText(
      "#pulseDetail",
      isProduct ? "Company, unit rate, stock और delivery compare कर रहा हूँ…" : "Arrival, work time और price compare कर रहा हूँ…",
    );
  }, 850);

  addTimer(() => {
    networkPulse.classList.add("done");
    responseDock.hidden = false;
    setText("#networkStateText", isProduct ? "Shop quotes live" : "Professional quotes live");
    setText("#capsuleStatus", isProduct ? "Demo seller network · quotation simulation" : "Demo partner network · quote simulation");
  }, 1750);
}

async function runRadarSearch(taskLabel) {
  const trimmedQuery = state.query.trim();
  const trimmedTask = taskLabel.trim();
  if (!trimmedQuery || !trimmedTask) {
    serviceQuery.focus();
    return;
  }

  clearSequence();
  state.taskLabel = trimmedTask;
  radarQuery.value = trimmedQuery;
  const isProduct = state.intent.mode === "product";
  const requirement = state.requirementBrief || { quantity: 1, unit: "job" };
  const requestedBrand = requirement.brand || getBrandOptions(state.intent)[0];
  const brandSummary = isProduct
    ? ` · ${/^any\b/i.test(requestedBrand) ? "Multiple companies" : requestedBrand}`
    : "";
  const serviceSummary = `${state.intent.label} · ${trimmedTask} · ${requirement.quantity} ${requirement.unit}${brandSummary}`;

  searchScene.hidden = true;
  taskScene.hidden = true;
  briefScene.hidden = true;
  radarScene.hidden = false;
  trackingScene.hidden = true;
  appShell.classList.add("radar-active");
  appShell.classList.remove("tracking-active");
  providerDialog.close?.();

  setText("#matchedService", serviceSummary);
  setText("#capsuleStatus", "Live location connect ho rahi hai…");
  setText("#networkStateText", "Locating you");
  setText(
    "#responseTitle",
    isProduct
      ? `${trimmedTask}: company, rate और delivery compare करें`
      : `${trimmedTask}: rate और arrival compare करें`,
  );
  setText("#pulseTitle", "Aapki live location dhoondh raha hoon");
  setText(
    "#pulseDetail",
    isProduct ? "Location सिर्फ nearby eligible shops ढूँढने के लिए use होगी" : "Location सिर्फ nearby active professionals के लिए use होगी",
  );
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
  taskScene.hidden = true;
  briefScene.hidden = true;
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
  const isProduct = provider.offerMode === "product";

  setText("#dialogAvatar", provider.initials);
  setText("#dialogSkill", provider.skill);
  setText("#dialogName", provider.name);
  setText("#dialogEta", String(provider.eta));
  const dialogEta = document.querySelector("#dialogEta");
  const minLabel = document.createElement("small");
  minLabel.textContent = "min";
  dialogEta.appendChild(minLabel);
  setText("#dialogJobLabel", isProduct ? "Packing" : "Current job");
  setText("#dialogTravelLabel", isProduct ? "Delivery" : "Travel");
  setText("#dialogArrivalLabel", isProduct ? "Delivered in" : "Arrival");
  setText("#dialogJobTime", `${provider.currentJob} min`);
  setText("#dialogTravelTime", `${provider.travel} min`);
  setText("#dialogTotalTime", `${provider.eta} min`);
  setText("#dialogRating", provider.rating.toFixed(1));
  setText("#dialogRatingLabel", isProduct ? "seller rating" : "rating");
  setText("#dialogDistance", `${provider.distance.toFixed(1)} km`);
  setText("#dialogDistanceMetaLabel", isProduct ? "shop distance" : "away");
  setText("#dialogWorkDuration", isProduct ? `${provider.quality}%` : `${provider.workDuration} min`);
  setText("#dialogDurationLabel", isProduct ? "quality score" : "work time");
  setText("#dialogPrice", provider.price);
  setText("#dialogPriceLabel", isProduct ? "demo total quote" : "quoted price");
  const dialogBrandLine = document.querySelector("#dialogBrandLine");
  const dialogQuoteBreakdown = document.querySelector("#dialogQuoteBreakdown");
  dialogBrandLine.hidden = !isProduct;
  dialogQuoteBreakdown.hidden = !isProduct;
  if (isProduct) {
    setText("#dialogBrand", provider.brand);
    setText(".dialog-brand-line small", `${provider.stockStatus} · ${provider.quoteValidity}`);
    setText(
      "#dialogUnitRate",
      `₹${provider.unitPrice.toLocaleString("en-IN")} / ${state.requirementBrief.unit}`,
    );
    setText(
      "#dialogQuoteQuantity",
      `${state.requirementBrief.quantity} ${state.requirementBrief.unit}`,
    );
    setText(
      "#dialogDeliveryFee",
      provider.deliveryFee ? `₹${provider.deliveryFee.toLocaleString("en-IN")}` : "FREE",
    );
    setText("#dialogInvoice", provider.invoiceLabel);
  }
  selectProviderButton.disabled = false;
  selectProviderButton.innerHTML = isProduct
    ? "यह quotation चुनें <span>→</span>"
    : "इस professional को book करें <span>→</span>";
  setText(
    "#dialogDisclaimer",
    isProduct
      ? "यह prototype quotation है। Real seller database जुड़ने पर stock, GST और final rate shop से live आएँगे।"
      : "Confirm करते ही active booking और live route screen खुलेगी।",
  );
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
  showTaskScene(serviceQuery.value);
});

radarSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  showTaskScene(radarQuery.value);
});

taskOptions.addEventListener("click", (event) => {
  const selectedButton = event.target.closest("[data-task-label]");
  if (!selectedButton || selectedButton.disabled) return;
  chooseTask(selectedButton.dataset.taskLabel, selectedButton);
});

intentRouteSwitch.addEventListener("click", () => {
  const targetIntent = serviceIntents.find(
    (intent) => intent.id === intentRouteSwitch.dataset.targetIntent,
  );
  if (!targetIntent) return;
  showTaskScene(state.query, targetIntent);
  showToast(
    targetIntent.mode === "product"
      ? "अब Qigo nearby shops और material quotations दिखाएगा।"
      : "अब Qigo nearby professionals और service quotes दिखाएगा।",
  );
});

taskOtherButton.addEventListener("click", () => {
  const willOpen = customTaskForm.hidden;
  customTaskForm.hidden = !willOpen;
  taskOtherButton.classList.toggle("active", willOpen);
  if (willOpen) window.setTimeout(() => customTaskInput.focus(), 80);
});

customTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  chooseTask(customTaskInput.value);
});

quantityMinus.addEventListener("click", () => {
  const min = state.briefProfile?.min || 1;
  state.briefQuantity = Math.max(min, state.briefQuantity - 1);
  renderBriefQuantity();
});

quantityPlus.addEventListener("click", () => {
  const max = state.briefProfile?.max || 20;
  state.briefQuantity = Math.min(max, state.briefQuantity + 1);
  renderBriefQuantity();
});

urgencyOptions.addEventListener("click", (event) => {
  const urgencyButton = event.target.closest("[data-urgency]");
  if (!urgencyButton) return;
  state.briefUrgency = urgencyButton.dataset.urgency;
  urgencyOptions.querySelectorAll(".urgency-option").forEach((button) => {
    button.classList.toggle("selected", button === urgencyButton);
  });
});

brandOptions.addEventListener("click", (event) => {
  const brandButton = event.target.closest("[data-brand]");
  if (!brandButton) return;
  state.briefBrand = brandButton.dataset.brand;
  brandOptions.querySelectorAll(".brand-option").forEach((button) => {
    const selected = button === brandButton;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
});

briefAttachment.addEventListener("change", async () => {
  const file = briefAttachment.files?.[0];
  if (!file) {
    state.briefAttachment = null;
    briefAttachmentLabel.classList.remove("has-file");
    setText("#attachmentStatus", "ATTACH");
    return;
  }
  if (file.size > 8 * 1024 * 1024) {
    briefAttachment.value = "";
    state.briefAttachment = null;
    showToast("File 8 MB से छोटी रखें।");
    return;
  }

  state.briefAttachment = {
    name: file.name,
    type: file.type || "file",
    size: file.size,
  };
  briefAttachmentLabel.classList.add("has-file");
  setText("#attachmentStatus", file.name);
  setText("#attachmentTitle", "Attachment ready");
  setText(
    "#attachmentHint",
    `${Math.max(1, Math.round(file.size / 1024))} KB · demo में local, backend जुड़ने पर भेजी जाएगी`,
  );

  if (file.type === "text/plain" || file.name.toLowerCase().endsWith(".txt")) {
    const text = (await file.text()).trim().slice(0, 1500);
    if (text) briefNote.value = [briefNote.value.trim(), text].filter(Boolean).join("\n");
  }
});

briefForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.requirementBrief = {
    quantity: state.briefQuantity,
    unit: state.briefProfile.unit,
    urgency: state.briefUrgency,
    brand: state.intent.mode === "product" ? state.briefBrand : "",
    note: briefNote.value.trim(),
    attachment: state.briefAttachment,
    needHead: getNeedHead(state.intent),
    mode: state.intent.mode === "product" ? "product" : "service",
  };
  runRadarSearch(state.taskLabel);
});

document.querySelector("#briefBackButton").addEventListener("click", () => showTaskScene(state.query, state.intent));
document.querySelector("#taskBackButton").addEventListener("click", resetHome);
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
  const isProduct = state.booking.offerMode === "product";
  const eta = state.booking.currentJobRemaining + state.booking.travelRemaining;
  if (eta === 0) {
    const providerName = state.booking.provider.name;
    clearTrackingTimer();
    state.booking = null;
    saveBooking();
    resetHome();
    showToast(
      isProduct
        ? `${providerName} का demo order received mark कर दिया गया।`
        : `${providerName} के साथ service शुरू की गई।`,
    );
    return;
  }
  showToast(
    isProduct
      ? "Demo delivery में shop message preview है। Seller app जुड़ने पर live chat यहीं खुलेगी।"
      : "Demo tracking में message preview है। Real provider app जुड़ने पर live chat यहीं खुलेगी।",
  );
});

document.querySelector("#cancelBooking").addEventListener("click", () => {
  const providerName = state.booking?.provider?.name;
  const isProduct = state.booking?.offerMode === "product";
  clearTrackingTimer();
  state.booking = null;
  state.selectedProvider = null;
  saveBooking();
  resetHome();
  showToast(
    providerName
      ? `${providerName} ${isProduct ? "का demo order" : "की demo booking"} रद्द कर दिया गया।`
      : `${isProduct ? "Order" : "Booking"} रद्द कर दिया गया।`,
  );
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
