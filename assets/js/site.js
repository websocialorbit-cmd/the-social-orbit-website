(function () {
  function renderChrome() {
    const chrome = document.querySelector("[data-chrome]");
    const footer = document.querySelector("[data-footer]");
    if (chrome) {
      chrome.innerHTML = `
        <div class="aurora" aria-hidden="true"></div>
        <div class="spot" aria-hidden="true"></div>
        <div class="progress" aria-hidden="true"></div>
        <div class="cursor-ring" aria-hidden="true"></div>
        <div class="cursor-dot" aria-hidden="true"></div>
        <div class="live" aria-hidden="true">
          <div class="live__inner">
            <span class="dot"></span><span>LIVE</span><span><b>Mumbai</b> production pod active</span><span><b>Dubai</b> brand films in pipeline</span><span><b>12</b> edits moving today</span><span><b>AI</b> ad film sprint online</span><span><b>VFX</b> plates in review</span><span>WhatsApp +91 97699 73899</span>
            <span class="dot"></span><span>LIVE</span><span><b>Mumbai</b> production pod active</span><span><b>Dubai</b> brand films in pipeline</span><span><b>12</b> edits moving today</span><span><b>AI</b> ad film sprint online</span><span><b>VFX</b> plates in review</span><span>WhatsApp +91 97699 73899</span>
          </div>
        </div>
        <div class="nav-wrap">
          <nav class="nav" aria-label="Primary navigation">
            <a class="nav__brand" href="index.html" data-magnetic>
              <img class="nav__logo" src="assets/images/social-orbit-wide-white.png" alt="The Social Orbit">
            </a>
            <div class="nav__links">
              <a class="nav__link" data-nav href="index.html">Home</a>
              <a class="nav__link" data-nav href="services.html">Services</a>
              <a class="nav__link" data-nav href="work.html">Work</a>
              <a class="nav__link" data-nav href="process.html">Process</a>
              <a class="nav__link" data-nav href="calculator.html">Estimator</a>
              <a class="nav__link" data-nav href="about.html">About</a>
              <a class="nav__link" data-nav href="team.html">Team</a>
            </div>
            <a class="nav__cta" href="contact.html" data-magnetic>Start Project <span class="arrow">&rarr;</span></a>
            <button class="nav__burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu" data-menu-open>
              <span class="nav__burger-lines" aria-hidden="true"><span></span><span></span></span>
            </button>
          </nav>
        </div>
        <aside class="menu" id="mobile-menu" aria-hidden="true">
          <div class="menu__top">
            <span class="eyebrow">Menu - S.O 2026</span>
            <button class="menu__close" type="button" aria-label="Close menu" data-menu-close><span></span><span></span></button>
          </div>
          <nav class="menu__nav" aria-label="Mobile navigation">
            <a class="menu__item" href="services.html"><span class="menu__n">01</span><span class="menu__t">Services</span><span class="menu__a">&rarr;</span></a>
            <a class="menu__item" href="work.html"><span class="menu__n">02</span><span class="menu__t">Work</span><span class="menu__a">&rarr;</span></a>
            <a class="menu__item" href="process.html"><span class="menu__n">03</span><span class="menu__t">Process</span><span class="menu__a">&rarr;</span></a>
            <a class="menu__item" href="team.html"><span class="menu__n">04</span><span class="menu__t">Team</span><span class="menu__a">&rarr;</span></a>
            <a class="menu__item" href="clients.html"><span class="menu__n">05</span><span class="menu__t">Clients</span><span class="menu__a">&rarr;</span></a>
            <a class="menu__item" href="contact.html"><span class="menu__n">06</span><span class="menu__t">Contact</span><span class="menu__a">&rarr;</span></a>
          </nav>
          <div class="menu__foot">
            <span>Mumbai | Dubai</span>
            <span>webthesocialorbit@gmail.com</span>
          </div>
        </aside>
        <div class="menu-scrim" data-menu-scrim aria-hidden="true"></div>
      `;
    }
    if (footer) {
      footer.innerHTML = `
        <footer class="foot">
          <div class="wrap">
            <div class="foot__top">
              <div>
                <div class="foot__brand">
                  <img src="assets/images/social-orbit-mark.png" alt="">
                  <div><strong>Social Orbit</strong><small>Production | Post Production | Marketing</small></div>
                </div>
                <p>Mumbai and Dubai creative partner for films, post-production, branding, websites and AI-powered execution.</p>
              </div>
              <div>
                <h4>Studio</h4>
                <ul>
                  <li><a href="about.html">About</a></li>
                  <li><a href="team.html">Team</a></li>
                  <li><a href="clients.html">Clients</a></li>
                  <li><a href="process.html">Process</a></li>
                </ul>
              </div>
              <div>
                <h4>Services</h4>
                <ul>
                  <li><a href="services.html#film">Film Production</a></li>
                  <li><a href="services.html#post">Post Production</a></li>
                  <li><a href="services.html#branding">Branding &amp; SSM</a></li>
                  <li><a href="services.html#ai">AI &amp; Automations</a></li>
                </ul>
              </div>
              <div>
                <h4>Say Hi</h4>
                <ul>
                  <li><a href="mailto:webthesocialorbit@gmail.com">webthesocialorbit@gmail.com</a></li>
                  <li><a href="tel:+919769973899">+91 97699 73899</a></li>
                  <li><a href="tel:+918273606310">+91 82736 06310</a></li>
                  <li><a href="https://www.thesocialorbit.in">www.thesocialorbit.in</a></li>
                </ul>
              </div>
            </div>
            <div class="foot__word">The Social Orbit</div>
            <div class="foot__bottom">
              <span>2026 The Social Orbit</span>
              <span>Mumbai | Dubai</span>
              <span>/thesocialorbit</span>
            </div>
          </div>
        </footer>
      `;
    }
  }

  renderChrome();

  function initOrbitChat() {
    if (document.querySelector("[data-orbit-chat]")) return;

    const chat = document.createElement("div");
    chat.className = "orbit-chat";
    chat.dataset.orbitChat = "";
    chat.innerHTML = `
      <section class="orbit-chat__panel" aria-label="Chat with Bharat AI" aria-hidden="true">
        <header class="orbit-chat__head">
          <div class="orbit-chat__identity">
            <img class="orbit-chat__avatar" src="assets/images/orbit-ai-assistant.png" alt="">
            <div>
              <strong class="orbit-chat__name">Bharat AI</strong>
              <span class="orbit-chat__status">Online</span>
            </div>
          </div>
          <button class="orbit-chat__close" type="button" aria-label="Close chat">&times;</button>
        </header>
        <div class="orbit-chat__messages" aria-live="polite">
          <p class="orbit-chat__message orbit-chat__message--bot">Hi, I’m Bharat AI. Tell me what you’re creating, and I’ll point you to the right Social Orbit service.</p>
        </div>
        <div class="orbit-chat__quick" aria-label="Quick questions">
          <button type="button" data-chat-reply="I need an ad film">Ad film</button>
          <button type="button" data-chat-reply="I need post production">Post production</button>
          <button type="button" data-chat-reply="I need a website">Website</button>
          <button type="button" data-chat-reply="Talk to the team">Book a call</button>
        </div>
        <div class="orbit-chat__lead" aria-label="Send your enquiry to our team">
          <span>Ready to discuss your project?</span>
          <a class="orbit-chat__lead-link" data-chat-email>Email</a>
          <a class="orbit-chat__lead-link" data-chat-whatsapp target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <form class="orbit-chat__form">
          <span class="orbit-chat__voice-status" data-chat-voice-status aria-live="polite" hidden></span>
          <input class="orbit-chat__input" type="text" maxlength="2000" aria-label="Type a message" placeholder="Ask Bharat AI anything..." autocomplete="off">
          <button class="orbit-chat__voice" type="button" data-chat-voice aria-label="Ask Bharat AI by voice and hear the reply" title="Ask by voice and hear Bharat AI reply" aria-pressed="false">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="2" width="6" height="12" rx="3"></rect><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"></path></svg>
          </button>
          <button class="orbit-chat__send" type="submit" aria-label="Send message">&uarr;</button>
        </form>
      </section>
      <span class="orbit-chat__badge">Chat with Bharat AI</span>
      <button class="orbit-chat__toggle" type="button" aria-label="Open Bharat AI chat" aria-expanded="false">
        <img src="assets/images/orbit-ai-assistant.png" alt="Bharat AI assistant">
      </button>
    `;
    document.body.appendChild(chat);

    const panel = chat.querySelector(".orbit-chat__panel");
    const toggle = chat.querySelector(".orbit-chat__toggle");
    const close = chat.querySelector(".orbit-chat__close");
    const form = chat.querySelector(".orbit-chat__form");
    const input = chat.querySelector(".orbit-chat__input");
    const messages = chat.querySelector(".orbit-chat__messages");
    const emailLink = chat.querySelector("[data-chat-email]");
    const whatsappLink = chat.querySelector("[data-chat-whatsapp]");
    const voiceButton = chat.querySelector("[data-chat-voice]");
    const voiceStatus = chat.querySelector("[data-chat-voice-status]");
    const sendButton = chat.querySelector(".orbit-chat__send");
    const conversation = [{
      type: "Bharat AI",
      text: "Hi, I’m Bharat AI. Tell me what you’re creating, and I’ll point you to the right Social Orbit service."
    }];
    let isReplying = false;
    let isListening = false;
    let recognition = null;

    function setVoiceStatus(text) {
      voiceStatus.textContent = text;
      voiceStatus.hidden = !text;
    }

    function updateVoiceButton(listening) {
      isListening = listening;
      voiceButton.classList.toggle("is-listening", listening);
      voiceButton.setAttribute("aria-pressed", String(listening));
      voiceButton.setAttribute("aria-label", listening ? "Stop voice input" : "Ask Bharat AI by voice and hear the reply");
      voiceButton.title = listening ? "Stop voice input" : "Ask by voice and hear Bharat AI reply";
      input.placeholder = listening ? "Listening..." : "Ask Bharat AI anything...";
    }

    function speakReply(text) {
      if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
        setVoiceStatus("Spoken replies are not supported in this browser.");
        return;
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = navigator.language || "en-IN";
      utterance.onstart = () => setVoiceStatus("Bharat AI is speaking.");
      utterance.onend = () => setVoiceStatus("Voice reply finished.");
      utterance.onerror = (event) => {
        console.error("Bharat AI speech output error:", event.error);
        setVoiceStatus("The spoken reply could not be played.");
      };
      window.speechSynthesis.speak(utterance);
    }

    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognitionAPI) {
      recognition = new SpeechRecognitionAPI();
      recognition.lang = navigator.language || "en-IN";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.onstart = () => {
        updateVoiceButton(true);
        setVoiceStatus("Listening. Speak now.");
      };
      recognition.onresult = (event) => {
        const spokenText = event.results[event.resultIndex]?.[0]?.transcript.trim();
        if (!spokenText) {
          setVoiceStatus("No speech was detected. Tap the microphone and try again.");
          return;
        }
        setVoiceStatus("Sending your voice message...");
        sendMessage(spokenText, true);
      };
      recognition.onerror = (event) => {
        if (event.error === "aborted") return;
        const messagesByError = {
          "audio-capture": "No microphone was found. Connect a microphone and try again.",
          "network": "Voice recognition could not connect. Check your connection and try again.",
          "no-speech": "No speech was detected. Tap the microphone and try again.",
          "not-allowed": "Microphone access was denied. Allow microphone access and try again.",
          "service-not-allowed": "Voice recognition is unavailable. Check your browser permissions."
        };
        setVoiceStatus(messagesByError[event.error] || "Voice input failed. Please try again.");
      };
      recognition.onend = () => {
        updateVoiceButton(false);
        if (voiceStatus.textContent === "Listening. Speak now.") setVoiceStatus("Voice input stopped.");
      };
    } else {
      voiceButton.disabled = true;
      voiceButton.title = "Voice input is not supported in this browser.";
      setVoiceStatus("Voice input is not supported in this browser.");
    }

    function updateLeadLinks() {
      const transcript = conversation.slice(-12)
        .map((message) => `${message.type}: ${message.text}`)
        .join("\n\n");
      const body = `${transcript}\n\nPage: ${window.location.href}`;
      const subject = "New project enquiry via Bharat AI";
      emailLink.href = `mailto:webthesocialorbit@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      whatsappLink.href = `https://wa.me/919769973899?text=${encodeURIComponent(`Hi Social Orbit, I'd like to discuss a project.\n\n${body}`)}`;
    }

    updateLeadLinks();

    function setOpen(open) {
      chat.classList.toggle("is-open", open);
      panel.setAttribute("aria-hidden", String(!open));
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close Bharat AI chat" : "Open Bharat AI chat");
      if (!open) {
        if (recognition && isListening) recognition.stop();
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      }
      if (open) window.setTimeout(() => input.focus(), 280);
    }

    function addMessage(text, type) {
      const message = document.createElement("p");
      message.className = `orbit-chat__message orbit-chat__message--${type}`;
      message.textContent = text;
      messages.appendChild(message);
      conversation.push({ type: type === "user" ? "Visitor" : "Bharat AI", text });
      updateLeadLinks();
      messages.scrollTop = messages.scrollHeight;
    }

    async function sendMessage(text, speakResponse = false) {
      if (isReplying || !text.trim()) return;

      addMessage(text.trim(), "user");
      isReplying = true;
      input.disabled = true;
      sendButton.disabled = true;
      voiceButton.disabled = true;
      chat.querySelectorAll("[data-chat-reply]").forEach((button) => {
        button.disabled = true;
      });

      const typing = document.createElement("p");
      typing.className = "orbit-chat__message orbit-chat__message--bot";
      typing.textContent = "Bharat AI is thinking...";
      messages.appendChild(typing);
      messages.scrollTop = messages.scrollHeight;

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: conversation.slice(-12).map((message) => ({
              role: message.type === "Visitor" ? "user" : "assistant",
              content: message.text
            }))
          })
        });
        const contentType = response.headers.get("content-type") || "";
        let result;
        if (contentType.includes("application/json")) {
          result = await response.json();
        } else if ([404, 405, 501].includes(response.status)) {
          throw new Error("Live AI replies are unavailable on this static preview. Deploy the site to Vercel and add OPENAI_API_KEY in Project Settings → Environment Variables, then redeploy. You can still contact us using Email or WhatsApp.");
        } else {
          throw new Error("The AI service returned an unexpected response. Check the Vercel deployment and function logs, then try again.");
        }
        if (!response.ok) throw new Error(result.error || "Chat request failed.");
        if (typeof result.reply !== "string" || !result.reply.trim()) {
          throw new Error("The assistant returned an empty reply.");
        }
        addMessage(result.reply.trim(), "bot");
        if (speakResponse) speakReply(result.reply.trim());
      } catch (error) {
        console.error("Bharat AI chat error:", error);
        const errorMessage = error.message || "I couldn't connect just now. Please try again or contact our team by Email or WhatsApp.";
        addMessage(errorMessage, "bot");
        if (speakResponse) speakReply(errorMessage);
      } finally {
        typing.remove();
        isReplying = false;
        input.disabled = false;
        sendButton.disabled = false;
        voiceButton.disabled = !recognition;
        chat.querySelectorAll("[data-chat-reply]").forEach((button) => {
          button.disabled = false;
        });
        if (!speakResponse) input.focus();
      }
    }

    toggle.addEventListener("click", () => setOpen(!chat.classList.contains("is-open")));
    close.addEventListener("click", () => setOpen(false));

    voiceButton.addEventListener("click", () => {
      if (!recognition || isReplying) return;
      if (isListening) {
        recognition.stop();
        return;
      }
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      try {
        recognition.start();
      } catch (error) {
        console.error("Bharat AI voice input error:", error);
        setVoiceStatus("Voice input could not start. Check microphone permissions and try again.");
      }
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const text = input.value;
      if (!text.trim() || isReplying) return;
      input.value = "";
      sendMessage(text);
    });

    chat.querySelectorAll("[data-chat-reply]").forEach((button) => {
      button.addEventListener("click", () => {
        sendMessage(button.dataset.chatReply);
      });
    });

    setOpen(false);
  }

  const doc = document.documentElement;
  const body = document.body;
  const ring = document.querySelector(".cursor-ring");
  const dot = document.querySelector(".cursor-dot");
  const progress = document.querySelector(".progress");
  const spot = document.querySelector(".spot");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function setActiveNav() {
    const file = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll("[data-nav]").forEach((link) => {
      const href = (link.getAttribute("href") || "index.html").split("#")[0].toLowerCase();
      const isHome = file === "" || file === "index.html";
      link.classList.toggle("is-active", href === file || (isHome && href === "index.html"));
    });
  }

  function initWorkFilters() {
    const controls = Array.from(document.querySelectorAll("[data-work-filter]"));
    const subcontrols = Array.from(document.querySelectorAll("[data-work-subfilter]"));
    const subfilterNav = document.querySelector("[data-work-subfilters]");
    const socialSubcontrols = Array.from(document.querySelectorAll("[data-social-subfilter]"));
    const socialSubfilterNav = document.querySelector("[data-social-subfilters]");
    const grids = Array.from(document.querySelectorAll(".work-project-grid"));
    if (!controls.length || !grids.length) return;

    const cards = grids.flatMap((grid) => Array.from(grid.querySelectorAll(".work-project")));
    const groups = Array.from(document.querySelectorAll("[data-work-category-group]"));
    const emptyState = document.querySelector("[data-work-empty]");
    const socialEmptyState = document.querySelector("[data-social-empty]");
    const categoryLabels = new Map(controls.map((control) => [
      control.dataset.workFilter,
      control.textContent.trim()
    ]));
    subcontrols.forEach((control) => categoryLabels.set(control.dataset.workSubfilter, control.textContent.trim()));
    let filterTimeout;
    let filterVersion = 0;

    cards.forEach((card) => {
      const subcategory = (card.dataset.workSubcategories || "").split(/\s+/)[0];
      const category = card.dataset.workCategory || (card.dataset.workCategories || "").split(/\s+/)[0];
      const label = categoryLabels.get(subcategory) || categoryLabels.get(category);
      if (!label || card.dataset.workNoCategory !== undefined || card.querySelector(".work-project__category")) return;
      const badge = document.createElement("span");
      badge.className = "work-project__category";
      badge.textContent = label;
      card.append(badge);
    });

    function applyFilter(category, subcategory = "all", socialSubcategory = "all-creatives") {
      const version = ++filterVersion;
      window.clearTimeout(filterTimeout);
      controls.forEach((control) => {
        const isActive = control.dataset.workFilter === category;
        control.classList.toggle("is-active", isActive);
        control.setAttribute("aria-pressed", String(isActive));
      });
      subcontrols.forEach((control) => {
        const isActive = control.dataset.workSubfilter === subcategory;
        control.classList.toggle("is-active", isActive);
        control.setAttribute("aria-pressed", String(isActive));
      });
      socialSubcontrols.forEach((control) => {
        const isActive = control.dataset.socialSubfilter === socialSubcategory;
        control.classList.toggle("is-active", isActive);
        control.setAttribute("aria-pressed", String(isActive));
      });
      if (subfilterNav) subfilterNav.hidden = category !== "films-post-production";
      if (socialSubfilterNav) socialSubfilterNav.hidden = category !== "social-media-branding";
      groups.forEach((group) => {
        const groupCategory = group.dataset.workCategoryGroup;
        group.hidden = category === "all"
          ? groupCategory === "social-media-branding"
          : groupCategory !== category;
      });

      let visibleCount = 0;
      cards.forEach((card) => {
        const categories = (card.dataset.workCategories || card.dataset.workCategory || "").split(/\s+/);
        const subcategories = (card.dataset.workSubcategories || "").split(/\s+/);
        const cardSocialCategory = card.dataset.socialCategory || "";
        const isVisible = (category === "all"
          ? !categories.includes("social-media-branding")
          : categories.includes(category))
          && (category !== "films-post-production" || subcategory === "all" || subcategories.includes(subcategory))
          && (category !== "social-media-branding" || socialSubcategory === "all-creatives" || cardSocialCategory === socialSubcategory);
        const categoryBadge = card.querySelector(".work-project__category");
        const badgeCategory = subcategory !== "all" && subcategories.includes(subcategory)
          ? subcategory
          : subcategories[0] || card.dataset.workCategory || (card.dataset.workCategories || "").split(/\s+/)[0];
        if (categoryBadge) categoryBadge.textContent = categoryLabels.get(badgeCategory) || "Project";
        card.hidden = false;
        card.classList.remove("is-filtering-in", "is-filtering-out");
        card.classList.add(isVisible ? "is-filtering-in" : "is-filtering-out");
        if (isVisible) visibleCount += 1;
      });

      if (emptyState) emptyState.hidden = visibleCount > 0 || category === "social-media-branding";
      if (socialEmptyState) socialEmptyState.hidden = true;
      filterTimeout = window.setTimeout(() => {
        if (version !== filterVersion) return;
        cards.forEach((card) => {
          if (card.classList.contains("is-filtering-out")) card.hidden = true;
          card.classList.remove("is-filtering-in", "is-filtering-out");
        });
      }, 240);
    }

    controls.forEach((control) => {
      control.addEventListener("click", () => applyFilter(control.dataset.workFilter, "all", "all-creatives"));
    });
    subcontrols.forEach((control) => {
      control.addEventListener("click", () => applyFilter("films-post-production", control.dataset.workSubfilter, "all-creatives"));
    });
    socialSubcontrols.forEach((control) => {
      control.addEventListener("click", () => applyFilter("social-media-branding", "all", control.dataset.socialSubfilter));
    });
    applyFilter("all");
  }

  function initWorkProjectActions() {
    const normalizeProjectLabel = (label) => label.toLowerCase().replace(/[^a-z0-9]+/g, "");
    const youtubeTrailers = new Map([
      ["Theatrical|PSI Arjun", "https://www.youtube.com/watch?v=nGhGPWS_rEo"],
      ["Theatrical|Vahali", "https://www.youtube.com/watch?v=5awrU8ejsok"],
      ["Theatrical|Well Done C.A Sahab", "https://www.youtube.com/watch?v=5P92-Mycl9E"],
      ["Theatrical|Udan Chhoo", "https://www.youtube.com/watch?v=0qcc7dQKSZo"],
      ["Theatrical|Where The Heart Is", "https://www.youtube.com/watch?v=KoYu-UYWDGI"],
      ["Theatrical|Trisha On The Rocks", "https://www.youtube.com/watch?v=AnIOx7PJwsI"],
      ["Theatrical|Malik Ni Varta", "https://www.youtube.com/watch?v=A6u00XHdBMA&t=3s"],
      ["Theatrical|Fari Ek Vaar", "https://www.youtube.com/watch?v=o87MoJqOEP4"],
      ["Theatrical|HahaCar", "https://www.youtube.com/watch?v=U8fAXvA7YFo"],
      ["Theatrical|Fakt Purusho Maate", "https://www.youtube.com/watch?v=RTl6d5QMy7s"],
      ["Theatrical|Hustlers", "https://www.youtube.com/watch?v=w4pw4jHf3TA"],
      ["Theatrical|Itta Kitta", "https://www.youtube.com/watch?v=SndmYECnuys"],
      ["Theatrical|Jachdi", "https://www.youtube.com/watch?v=c-S2UKqpNB4"],
      ["Theatrical|Kasoombo", "https://www.youtube.com/watch?v=U_PZLg_syms"],
      ["Theatrical|Sunny Deol Honey", "https://www.youtube.com/watch?v=1XiEXIZ1p3o"],
      ["Music Video|Ek Mulaqaat", "https://www.youtube.com/watch?v=HKw-2tWGr9g"],
      ["Music Video|Hadh Se", "https://www.youtube.com/watch?v=7p4G2orDczQ"],
      ["Music Video|Juda Huye Ho", "https://youtu.be/-lR0wvxfAdk"],
      ["Music Video|Sohneya", "https://youtu.be/-q9QRI4rVTU"],
      ["Music Video|Ram Piya", "https://youtu.be/ZBvjSM-EN6k"],
      ["Music Video|Baari Barsi", "https://youtu.be/zqVZGwS4Snw"],
      ["Music Video|Mohabbat Bula Rahi Hai", "https://youtu.be/HO0B2I093zM"],
      ["Music Video|Gham Ki Baarish", "https://youtu.be/XtDCRhWsFO0"],
      ["Music Video|Tum Badal Rahe Ho", "https://youtu.be/KMzhJpAQ6Jc"],
      ["Music Video|Kareeb Aao", "https://youtu.be/ifyHJrqcbfU"],
      ["Music Video|Pyar Karta Rahun", "https://youtu.be/aOrOdrJ1DfQ"],
      ["Music Video|Tum Yaad Bahut Aate Ho", "https://youtu.be/72C__SyjQwg"],
      ["Music Video|Sathiya Tu Wada Kar", "https://youtu.be/tM4NVEcudMk"],
      ["Music Video|Zehnaseeb", "https://youtu.be/ub10I47B5qU"],
      ["Music Video|Is Dil Ki Zaroorat", "https://youtu.be/aDkRMM8IG90"],
      ["Music Video|Jhim Jhim", "https://youtu.be/ZLU4rx24024"],
      ["Music Video|Jachdi", "https://youtu.be/SXWr8Ph2gtQ"],
      ["Music Video|Helo Maro", "https://youtu.be/65uiI0Eor0A"],
      ["Music Video|Nachne De", "https://youtu.be/Tmf6DAkxTfs"],
      ["Music Video|Kahaniyaan", "https://youtu.be/0q6GxWvLLkk"],
      ["Music Video|Babal De Desh", "https://www.youtube.com/watch?v=OP9C2oXXdig"]
    ]);
    youtubeTrailers.set(normalizeProjectLabel("Music Video|Pyaar Karta Rahun"), "https://youtu.be/aOrOdrJ1DfQ");
    youtubeTrailers.set(normalizeProjectLabel("Music Video|Saathiya Tu Wada Kar"), "https://youtu.be/tM4NVEcudMk");
    youtubeTrailers.set(normalizeProjectLabel("Music Video|Iss Dil Ki Zaroorat"), "https://youtu.be/aDkRMM8IG90");
    youtubeTrailers.set(normalizeProjectLabel("Music Video|Jachab"), "https://youtu.be/SXWr8Ph2gtQ");

    const normalizedTrailers = new Map(
      [...youtubeTrailers].map(([key, url]) => [normalizeProjectLabel(key), url])
    );

    document.querySelectorAll(".work-project").forEach((card) => {
      const imdbLink = card.querySelector(".work-project__poster");
      if (!imdbLink) return;
      if (card.dataset.workCategory === "directors-work" && !card.dataset.vimeoId) return;

      const actions = document.createElement("div");
      actions.className = "work-project__actions";

      const createLink = (label, href, className) => {
        const link = document.createElement("a");
        link.className = className;
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = label;
        return link;
      };

      const createPlayerButton = (label, videoUrl, className) => {
        const button = document.createElement("button");
        button.className = className;
        button.type = "button";
        button.dataset.workPlayVideo = "";
        button.dataset.videoUrl = videoUrl;
        button.textContent = label;
        return button;
      };

      const title = card.querySelector("h3")?.textContent.trim() || "Project video";
      const projectType = card.querySelector(".kicker")?.textContent.split("·")[0].trim();
      const trailerUrl = normalizedTrailers.get(normalizeProjectLabel(`${projectType}|${title}`))
        || (title === "Hustlers" ? normalizedTrailers.get(normalizeProjectLabel("Theatrical|Hustlers")) : null);

      const videoId = card.dataset.vimeoId;
      if (videoId) {
        if (!/^\d+$/.test(videoId)) return;
        const videoUrl = `https://vimeo.com/${videoId}`;
        actions.append(createPlayerButton("Watch on Vimeo", videoUrl, "work-project__action"));
        card.append(actions);
        return;
      }

      if (card.dataset.workExternal === "true") {
        actions.append(createLink("View Project", imdbLink.href, "work-project__action"));
        if (card.dataset.videoUrl) {
          actions.append(createPlayerButton("Play Video", card.dataset.videoUrl, "work-project__action work-project__action--trailer"));
        }
        if (trailerUrl) actions.append(createPlayerButton("Play Video", trailerUrl, "work-project__action work-project__action--trailer"));
        card.append(actions);
        return;
      }

      if (card.dataset.workCategory === "websites-apps-ai") {
        actions.append(createLink("Visit Website", imdbLink.href, "work-project__action"));
        card.append(actions);
        return;
      }

      const titleUrl = new URL(imdbLink.href);
      actions.append(createLink("View on IMDb", titleUrl.href, "work-project__action"));
      if (trailerUrl) actions.append(createPlayerButton("Play Trailer", trailerUrl, "work-project__action work-project__action--trailer"));
      card.append(actions);
    });
  }

  function initWorkMediaPlayer() {
    const dialog = document.querySelector("[data-work-player]");
    const iframe = dialog?.querySelector("iframe");
    const title = dialog?.querySelector("[data-work-player-title]");
    const close = dialog?.querySelector("[data-work-player-close]");
    if (!dialog || !iframe || !title || !close) return;

    function openPlayer(videoUrl, videoTitle) {
      const url = new URL(videoUrl);
      let embedUrl;

      if (["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be"].includes(url.hostname)) {
        const videoId = url.hostname === "youtu.be"
          ? url.pathname.split("/").filter(Boolean)[0]
          : url.searchParams.get("v") || url.pathname.split("/").filter(Boolean).pop();
        if (!videoId || !/^[\w-]{11}$/.test(videoId)) return;
        const embed = new URL(`https://www.youtube-nocookie.com/embed/${videoId}`);
        embed.searchParams.set("autoplay", "1");
        embed.searchParams.set("playsinline", "1");
        embed.searchParams.set("rel", "0");
        embed.searchParams.set("origin", window.location.origin);
        const start = url.searchParams.get("start") || url.searchParams.get("t");
        if (start) {
          const timeParts = start.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/);
          const seconds = /^\d+$/.test(start)
            ? Number(start)
            : timeParts
              ? timeParts.slice(1).reduce((total, part, index) => total + Number(part || 0) * [3600, 60, 1][index], 0)
              : 0;
          if (seconds > 0) embed.searchParams.set("start", String(seconds));
        }
        embedUrl = embed.href;
      } else if (["vimeo.com", "www.vimeo.com"].includes(url.hostname)) {
        const videoId = url.pathname.split("/").filter(Boolean).pop();
        if (!videoId || !/^\d+$/.test(videoId)) return;
        embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`;
      } else {
        return;
      }

      title.textContent = videoTitle;
      iframe.title = videoTitle;
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.src = embedUrl;
      dialog.showModal();
    }

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const vimeoButton = target.closest("[data-vimeo-player]");
      if (vimeoButton) {
        const card = vimeoButton.closest(".work-project");
        const videoId = card?.dataset.vimeoId;
        if (videoId) openPlayer(`https://vimeo.com/${videoId}`, card.querySelector("h3")?.textContent.trim() || "Vimeo video");
        return;
      }

      const playButton = target.closest("[data-work-play-video]");
      if (playButton) {
        const card = playButton.closest(".work-project");
        openPlayer(playButton.dataset.videoUrl, card?.querySelector("h3")?.textContent.trim() || "Project video");
      }
    });

    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => {
      iframe.removeAttribute("src");
      iframe.title = "Project video";
      title.textContent = "Project video";
    });
  }

  function initCursor() {
    if (!canHover || !ring || !dot) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;

    window.addEventListener("mousemove", (event) => {
      x = event.clientX;
      y = event.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      if (spot) {
        spot.style.setProperty("--sx", `${x}px`);
        spot.style.setProperty("--sy", `${y}px`);
      }
    }, { passive: true });

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    tick();

    const hoverTargets = "a, button, summary, input, textarea, select, [data-cursor]";
    document.addEventListener("mouseover", (event) => {
      if (event.target.closest(hoverTargets)) ring.classList.add("is-hover");
    });
    document.addEventListener("mouseout", (event) => {
      if (event.target.closest(hoverTargets)) ring.classList.remove("is-hover");
    });
  }

  function initProgress() {
    if (!progress) return;
    const update = () => {
      const scrollable = Math.max(1, doc.scrollHeight - window.innerHeight);
      const scale = Math.min(1, Math.max(0, window.scrollY / scrollable));
      progress.style.transform = `scaleX(${scale})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function initMenu() {
    const open = document.querySelector("[data-menu-open]");
    const close = document.querySelector("[data-menu-close]");
    const scrim = document.querySelector("[data-menu-scrim]");
    const menu = document.querySelector("#mobile-menu");
    if (!open || !menu) return;

    const setOpen = (value) => {
      body.classList.toggle("menu-open", value);
      open.setAttribute("aria-expanded", String(value));
      menu.setAttribute("aria-hidden", String(!value));
    };

    open.addEventListener("click", () => setOpen(true));
    close?.addEventListener("click", () => setOpen(false));
    scrim?.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    items.forEach((item) => observer.observe(item));
  }

  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;
    const formatter = new Intl.NumberFormat("en-IN");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const end = Number(el.dataset.count || "0");
        const suffix = el.dataset.suffix || "";
        const prefix = el.dataset.prefix || "";
        const duration = Number(el.dataset.duration || "1600");
        const start = performance.now();
        const step = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = `${prefix}${formatter.format(Math.round(end * eased))}${suffix}`;
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.unobserve(el);
      });
    }, { threshold: .4 });
    counters.forEach((counter) => observer.observe(counter));
  }

  function initMagnetic() {
    if (!canHover) return;
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (event) => {
        const rect = el.getBoundingClientRect();
        const mx = event.clientX - rect.left - rect.width / 2;
        const my = event.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${mx * .12}px, ${my * .18}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  function initEstimator() {
    const root = document.querySelector("[data-estimator]");
    if (!root) return;

    const budget = root.querySelector("[data-input='budget']");
    const conversion = root.querySelector("[data-input='conversion']");
    const value = root.querySelector("[data-input='value']");
    const outputs = {
      budget: root.querySelector("[data-output='budget']"),
      conversion: root.querySelector("[data-output='conversion']"),
      value: root.querySelector("[data-output='value']"),
      leads: root.querySelector("[data-output='leads']"),
      revenue: root.querySelector("[data-output='revenue']"),
      roi: root.querySelector("[data-output='roi']")
    };
    const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
    const number = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

    function fill(input) {
      const min = Number(input.min || 0);
      const max = Number(input.max || 100);
      const val = Number(input.value || 0);
      const pct = ((val - min) / (max - min)) * 100;
      input.style.setProperty("--fill", `${pct}%`);
    }

    function update() {
      const b = Number(budget.value);
      const c = Number(conversion.value);
      const v = Number(value.value);
      const estimatedLeads = Math.max(1, Math.round((b / 850) * (c / 3.8)));
      const estimatedRevenue = Math.round(estimatedLeads * v);
      const roi = Math.max(0, Math.round(((estimatedRevenue - b) / b) * 100));

      outputs.budget.textContent = money.format(b);
      outputs.conversion.textContent = `${c}%`;
      outputs.value.textContent = money.format(v);
      outputs.leads.textContent = number.format(estimatedLeads);
      outputs.revenue.textContent = money.format(estimatedRevenue);
      outputs.roi.textContent = `${roi}%`;
      [budget, conversion, value].forEach(fill);
    }

    [budget, conversion, value].forEach((input) => input.addEventListener("input", update));
    update();
  }

  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const message = [
        "Hi Social Orbit, I want to start a project.",
        `Name: ${data.get("name") || ""}`,
        `Email: ${data.get("email") || ""}`,
        `Phone: ${data.get("phone") || ""}`,
        `Service: ${data.get("service") || ""}`,
        `Message: ${data.get("message") || ""}`
      ].join("\n");
      window.open(`https://wa.me/919769973899?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
  }

  setActiveNav();
  initWorkFilters();
  initWorkProjectActions();
  initWorkMediaPlayer();
  initCursor();
  initProgress();
  initMenu();
  initReveal();
  initCounters();
  initMagnetic();
  initEstimator();
  initContactForm();
  initOrbitChat();
})();
