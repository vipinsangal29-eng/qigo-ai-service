(() => {
  const catalog = window.QIGO_EMERGENCY_CATALOG;
  if (!catalog) return;

  const appShell = document.querySelector("#appShell");
  const searchScene = document.querySelector("#searchScene");
  const taskScene = document.querySelector("#taskScene");
  const briefScene = document.querySelector("#briefScene");
  const radarScene = document.querySelector("#radarScene");
  const trackingScene = document.querySelector("#trackingScene");
  const emergencyScene = document.querySelector("#emergencyScene");
  const serviceQuery = document.querySelector("#serviceQuery");
  const radarQuery = document.querySelector("#radarQuery");
  const mainSearchForm = document.querySelector("#mainSearchForm");
  const radarSearchForm = document.querySelector("#radarSearchForm");
  const locationButton = document.querySelector("#emergencyLocationButton");
  const helpGrid = document.querySelector("#emergencyHelpGrid");
  const brandSelect = document.querySelector("#accidentVehicleBrand");
  const photoInput = document.querySelector("#accidentPhotos");
  const photoList = document.querySelector("#accidentPhotoList");
  const reportForm = document.querySelector("#accidentReportForm");
  const analysisResult = document.querySelector("#accidentAnalysisResult");
  const demoMode = new URLSearchParams(window.location.search).get("demo") === "1";

  const emergencyState = {
    query: "",
    location: null,
    driveState: "unknown",
    dangerState: "unknown",
    photos: [],
    previewUrls: [],
  };

  function normalizeEmergency(value) {
    return String(value || "")
      .toLocaleLowerCase("hi-IN")
      .normalize("NFKD")
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isAccidentEmergencyQuery(value) {
    const clean = normalizeEmergency(value);
    return [
      "accident",
      "road accident",
      "car crash",
      "bike crash",
      "takker",
      "takkar",
      "collision",
      "durghatna",
      "दुर्घटना",
      "एक्सीडेंट",
      "टक्कर",
      "गाड़ी पलट",
      "गाड़ी पलट",
      "car palat",
      "bike gir",
    ].some((phrase) => clean.includes(normalizeEmergency(phrase)));
  }

  function setEmergencyText(selector, value) {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  }

  function createMapsUrl(query) {
    const url = new URL("https://www.google.com/maps/search/");
    url.searchParams.set("api", "1");
    if (emergencyState.location) {
      url.searchParams.set(
        "query",
        `${query} near ${emergencyState.location.latitude},${emergencyState.location.longitude}`,
      );
    } else {
      url.searchParams.set("query", query);
    }
    return url.toString();
  }

  function getWorkshopQuery() {
    const brand = brandSelect.value;
    if (brand && !brand.toLowerCase().includes("other")) {
      return `${brand} authorised body repair workshop`;
    }
    return "authorised car body repair workshop";
  }

  function renderEmergencyHelp() {
    const officialCards = catalog.official.map((item) => `
      <a class="emergency-help-card official" href="${item.href}" aria-label="${item.actionLabel}">
        <span>${item.icon}</span>
        <strong>${item.title}</strong>
        <small>${item.subtitle}</small>
        <em>${item.actionLabel} →</em>
      </a>
    `);

    const nearbyCards = catalog.nearby.map((item) => {
      const query = item.id === "body-shop" ? getWorkshopQuery() : item.query;
      return `
        <a
          class="emergency-help-card"
          data-emergency-help-id="${item.id}"
          data-map-query="${query}"
          href="${createMapsUrl(query)}"
          target="_blank"
          rel="noopener"
          aria-label="${item.title} Google Maps पर खोजें"
        >
          <span>${item.icon}</span>
          <strong>${item.title}</strong>
          <small>${item.subtitle}</small>
          <em>${item.actionLabel} ↗</em>
        </a>
      `;
    });
    helpGrid.innerHTML = [...officialCards, ...nearbyCards].join("");
  }

  function renderEmergencyData() {
    document.querySelector("#emergencyDangerList").innerHTML = catalog.dangerSignals
      .map((signal) => `<li>${signal}</li>`)
      .join("");
    brandSelect.innerHTML = catalog.vehicleBrands
      .map((brand) => `<option value="${brand}">${brand}</option>`)
      .join("");
    renderEmergencyHelp();
  }

  function showEmergencyScene(query) {
    emergencyState.query = query.trim();
    searchScene.hidden = true;
    taskScene.hidden = true;
    briefScene.hidden = true;
    radarScene.hidden = true;
    trackingScene.hidden = true;
    emergencyScene.hidden = false;
    appShell.classList.remove("radar-active", "tracking-active");
    appShell.classList.add("emergency-active");
    document.querySelector("#providerDialog")?.close?.();
    setEmergencyText("#networkStateText", "Emergency support ready");
    emergencyScene.querySelector(".emergency-scroll").scrollTop = 0;
  }

  function closeEmergencyScene() {
    emergencyScene.hidden = true;
    searchScene.hidden = false;
    appShell.classList.remove("emergency-active");
    setEmergencyText("#networkStateText", "AI network ready");
    window.setTimeout(() => serviceQuery.focus(), 100);
  }

  function interceptEmergencySearch(event, input) {
    if (!isAccidentEmergencyQuery(input.value)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    showEmergencyScene(input.value);
  }

  function updateEmergencyIntentPreview() {
    if (!isAccidentEmergencyQuery(serviceQuery.value)) return;
    setEmergencyText("#intentIcon", "SOS");
    setEmergencyText("#intentLabel", "Accident / Emergency Support");
    document.querySelector("#intentPreview").hidden = false;
  }

  function applyEmergencyLocation(location) {
    emergencyState.location = location;
    const accuracy = location.accuracy ? ` · ±${location.accuracy} m` : "";
    setEmergencyText(
      "#emergencyLocationTitle",
      location.status === "demo" ? "Demo accident location ready" : "Live accident location ready",
    );
    setEmergencyText(
      "#emergencyLocationDetail",
      `${location.latitude.toFixed(5)}, ${location.longitude.toFixed(5)}${accuracy} · केवल nearby help links के लिए`,
    );
    locationButton.textContent = "Location ready ✓";
    locationButton.classList.add("location-ready");
    renderEmergencyHelp();
  }

  function requestEmergencyLocation() {
    locationButton.disabled = true;
    locationButton.textContent = "Location मिल रही है…";

    if (demoMode) {
      window.setTimeout(() => {
        applyEmergencyLocation({
          status: "demo",
          latitude: 28.6139,
          longitude: 77.209,
          accuracy: null,
        });
        locationButton.disabled = false;
      }, 350);
      return;
    }

    if (!window.isSecureContext || !navigator.geolocation) {
      setEmergencyText("#emergencyLocationTitle", "Live location उपलब्ध नहीं");
      setEmergencyText("#emergencyLocationDetail", "Google Maps links generic nearby search के साथ खुलेंगे।");
      locationButton.textContent = "फिर कोशिश करें";
      locationButton.disabled = false;
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        applyEmergencyLocation({
          status: "live",
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: Math.round(position.coords.accuracy || 0),
        });
        locationButton.disabled = false;
      },
      () => {
        setEmergencyText("#emergencyLocationTitle", "Location permission नहीं मिली");
        setEmergencyText("#emergencyLocationDetail", "112 call location को official control room अपने system से identify कर सकता है।");
        locationButton.textContent = "Permission दोबारा दें";
        locationButton.disabled = false;
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 30000 },
    );
  }

  function selectToggle(container, button, stateKey) {
    container.querySelectorAll(".accident-toggle").forEach((option) => {
      option.classList.toggle("selected", option === button);
    });
    emergencyState[stateKey] = button.dataset.driveState || button.dataset.dangerState;
  }

  function clearPhotoPreviews() {
    emergencyState.previewUrls.forEach((url) => URL.revokeObjectURL(url));
    emergencyState.previewUrls = [];
  }

  function renderAccidentPhotos(files) {
    clearPhotoPreviews();
    emergencyState.photos = files;
    photoList.innerHTML = files.map((file) => {
      const previewUrl = URL.createObjectURL(file);
      emergencyState.previewUrls.push(previewUrl);
      return `
        <div class="accident-photo-item">
          <img src="${previewUrl}" alt="Selected vehicle damage photo preview" />
          <span>${file.name}</span>
        </div>
      `;
    }).join("");
  }

  function showPhotoMessage(message) {
    clearPhotoPreviews();
    emergencyState.photos = [];
    photoList.innerHTML = `<p class="accident-photo-message">${message}</p>`;
  }

  function analyseAccidentReport() {
    const description = normalizeEmergency(document.querySelector("#accidentDescription").value);
    const highRiskWords = [
      "smoke", "fire", "fuel", "petrol", "diesel", "leak", "airbag", "bleeding",
      "tyre touch", "wheel jam", "धुआं", "धुआँ", "आग", "लीक", "एयरबैग", "खून",
    ];
    const hasHighRiskText = highRiskWords.some((word) => description.includes(normalizeEmergency(word)));
    const highRisk = emergencyState.dangerState === "yes"
      || emergencyState.driveState === "no"
      || hasHighRiskText;
    const uncertain = emergencyState.dangerState === "unknown"
      || emergencyState.driveState === "unknown";
    const photoCount = emergencyState.photos.length;
    const brand = brandSelect.value;
    const model = document.querySelector("#accidentVehicleModel").value.trim();

    analysisResult.dataset.risk = highRisk ? "high" : "normal";
    setEmergencyText(
      "#accidentRiskTitle",
      highRisk
        ? "Vehicle न चलाएँ—emergency / towing help लें"
        : uncertain
          ? "Safety confirm नहीं है—inspection या towing बेहतर है"
          : "Immediate danger report नहीं हुआ—फिर भी roadworthy confirm नहीं",
    );
    setEmergencyText(
      "#accidentRiskSummary",
      `${brand}${model ? ` ${model}` : ""} · ${photoCount} photo ready · `
      + "यह demo answers और file metadata पढ़ता है; real AI vision backend अभी image pixels analyse नहीं कर रहा।",
    );

    const nextSteps = [
      highRisk
        ? "अगर कोई घायल/फँसा है, smoke/fire/leak है या traffic danger है तो 112 call करें।"
        : "लोगों की safety पहले check करें; medical doubt हो तो 112 call करें।",
      emergencyState.driveState === "yes" && !highRisk
        ? "Visible damage कम लगे तब भी steering, brakes, tyre और fluid leak professional से check कराएँ।"
        : "Vehicle को खुद चलाने के बजाय towing / roadside recovery चुनें।",
      `Photos, accident time और location सुरक्षित रखें; ${brand} insurer/authorised workshop को claim number के साथ भेजें।`,
      "Police/insurer को data भेजना अलग consent step में होगा; Qigo demo ने अभी कुछ transmit नहीं किया।",
    ];
    document.querySelector("#accidentNextSteps").innerHTML = nextSteps
      .map((step) => `<li>${step}</li>`)
      .join("");
    analysisResult.hidden = false;
    analysisResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  renderEmergencyData();

  mainSearchForm.addEventListener(
    "submit",
    (event) => interceptEmergencySearch(event, serviceQuery),
    true,
  );
  radarSearchForm.addEventListener(
    "submit",
    (event) => interceptEmergencySearch(event, radarQuery),
    true,
  );
  serviceQuery.addEventListener("input", updateEmergencyIntentPreview);
  document.querySelector("#emergencyBackButton").addEventListener("click", closeEmergencyScene);
  document.querySelector("#brandHome").addEventListener("click", () => {
    if (!emergencyScene.hidden) closeEmergencyScene();
  });
  locationButton.addEventListener("click", requestEmergencyLocation);

  document.querySelector("#accidentDriveState").addEventListener("click", (event) => {
    const button = event.target.closest("[data-drive-state]");
    if (button) selectToggle(event.currentTarget, button, "driveState");
  });
  document.querySelector("#accidentDangerState").addEventListener("click", (event) => {
    const button = event.target.closest("[data-danger-state]");
    if (button) selectToggle(event.currentTarget, button, "dangerState");
  });
  brandSelect.addEventListener("change", renderEmergencyHelp);

  photoInput.addEventListener("change", () => {
    const selectedFiles = Array.from(photoInput.files || []).slice(0, 6);
    const validFiles = selectedFiles.filter((file) => (
      file.type.startsWith("image/") && file.size <= 8 * 1024 * 1024
    ));
    if (validFiles.length !== selectedFiles.length) {
      photoInput.value = "";
      showPhotoMessage("सिर्फ image files चुनें और हर photo 8 MB से छोटी रखें।");
      return;
    }
    renderAccidentPhotos(validFiles);
  });

  reportForm.addEventListener("submit", (event) => {
    event.preventDefault();
    analyseAccidentReport();
  });

  window.addEventListener("beforeunload", clearPhotoPreviews);
})();
