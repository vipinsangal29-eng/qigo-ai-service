(() => {
  const isLocal = ["127.0.0.1", "localhost"].includes(window.location.hostname);
  const apiOrigin = window.location.hostname === "qigo.co.in" || window.location.hostname === "www.qigo.co.in"
    ? "https://turantsewa-ai-services.vipinsangal29.chatgpt.site"
    : "";
  const visitorKey = "qigoVisitorIdV1";

  function getVisitorId() {
    try {
      let id = window.localStorage.getItem(visitorKey);
      if (!id) {
        id = (window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`).replace(/[^a-zA-Z0-9_-]/g, "");
        window.localStorage.setItem(visitorKey, id);
      }
      return id;
    } catch {
      return `session_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    }
  }

  async function request(path, payload) {
    if (isLocal) {
      await new Promise((resolve) => window.setTimeout(resolve, 280));
      if (path === "/api/visit") {
        const value = Number(window.localStorage.getItem("qigoLocalVisitorCount") || 1284) + 1;
        window.localStorage.setItem("qigoLocalVisitorCount", String(value));
        return { ok: true, uniqueVisitors: value, pageViews: value * 3 };
      }
      return {
        ok: true,
        registrationId: `QG-DEMO-${Date.now().toString().slice(-6)}`,
        status: "pending_verification",
        message: "Demo registration तैयार है।",
      };
    }

    const response = await fetch(`${apiOrigin}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      credentials: apiOrigin ? "omit" : "same-origin",
    });
    const result = await response.json().catch(() => ({ ok: false, message: "Server response नहीं मिला।" }));
    if (!response.ok || !result.ok) throw new Error(result.message || "Request पूरा नहीं हुआ।");
    return result;
  }

  async function loadCounter() {
    const counters = document.querySelectorAll("[data-site-visitors]");
    if (!counters.length) return;
    try {
      const result = await request("/api/visit", { visitorId: getVisitorId() });
      const value = Number(result.uniqueVisitors || 0).toLocaleString("en-IN");
      counters.forEach((node) => {
        node.textContent = value;
        node.closest("[data-counter-wrap]")?.classList.add("counter-ready");
      });
    } catch {
      counters.forEach((node) => {
        node.textContent = "LIVE";
        node.closest("[data-counter-wrap]")?.setAttribute("title", "Counter reconnect हो रहा है");
      });
    }
  }

  async function register(payload) {
    return request("/api/register", payload);
  }

  function setupCustomerRegistration() {
    const dialog = document.querySelector("#customerRegistrationDialog");
    const openButton = document.querySelector("#openCustomerRegistration");
    const closeButton = document.querySelector("#closeCustomerRegistration");
    const finishButton = document.querySelector("#finishCustomerRegistration");
    const form = document.querySelector("#customerRegistrationForm");
    if (!dialog || !openButton || !form) return;

    const formWrap = document.querySelector("#customerRegistrationFormWrap");
    const success = document.querySelector("#customerRegistrationSuccess");
    const status = document.querySelector("#customerRegistrationStatus");
    const submit = document.querySelector("#submitCustomerRegistration");
    const need = document.querySelector("#customerNeed");

    function resetDialog() {
      formWrap.hidden = false;
      success.hidden = true;
      status.textContent = "";
      submit.disabled = false;
      submit.innerHTML = 'Registration save करें <span>→</span>';
    }

    openButton.addEventListener("click", () => {
      resetDialog();
      const currentQuery = document.querySelector("#serviceQuery")?.value.trim();
      if (currentQuery && !need.value) need.value = currentQuery;
      dialog.showModal();
      window.setTimeout(() => document.querySelector("#customerName")?.focus(), 80);
    });

    closeButton?.addEventListener("click", () => dialog.close());
    finishButton?.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      status.textContent = "Registration save हो रहा है…";
      submit.disabled = true;
      submit.textContent = "SAVE हो रहा है…";
      try {
        const result = await register({
          role: "customer",
          name: document.querySelector("#customerName").value.trim(),
          phone: document.querySelector("#customerPhone").value,
          city: document.querySelector("#customerCity").value.trim(),
          service: need.value.trim(),
          consent: document.querySelector("#customerConsent").checked,
        });
        document.querySelector("#customerRegistrationId").textContent = result.registrationId;
        formWrap.hidden = true;
        success.hidden = false;
      } catch (error) {
        status.textContent = error.message || "Registration save नहीं हुआ।";
        submit.disabled = false;
        submit.innerHTML = 'दोबारा कोशिश करें <span>→</span>';
      }
    });
  }

  window.QigoPlatform = { register, loadCounter };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      loadCounter();
      setupCustomerRegistration();
    }, { once: true });
  } else {
    loadCounter();
    setupCustomerRegistration();
  }
})();
