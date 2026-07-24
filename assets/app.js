(() => {
  "use strict";

  const zh = {
    "a11y.skip": "跳到主要内容",
    "a11y.home": "LufiaASIO 首页",
    "a11y.mainNav": "主导航",
    "a11y.language": "语言",
    "a11y.github": "在 GitHub 查看 LufiaASIO",
    "a11y.stats": "LufiaASIO 概览",
    "a11y.matrix": "可横向滚动的五乘五音频后端兼容矩阵",
    "a11y.workflowMetrics": "工作流特性",
    "a11y.menuOpen": "打开导航",
    "a11y.menuClose": "关闭导航",

    "nav.features": "功能",
    "nav.workflows": "工作流",
    "nav.processing": "测量处理",
    "nav.quickStart": "快速开始",
    "nav.faq": "常见问题",
    "nav.download": "下载",

    "hero.eyebrow": "按你的方式连接 Windows 音频",
    "hero.version": "1.2.8 Alpha",
    "hero.titleOne": "一个 ASIO 驱动。",
    "hero.titleTwo": "连接五种 Windows 音频后端。",
    "hero.lead": "输入与输出，自由组合。",
    "hero.description": "面向测量工作台的多协议音频路由器，让你自由搭配合适的 ADC、DAC、驱动与主机软件，同时保留熟悉的 ASIO 工作流。",
    "hero.alphaTitle": "预览版本。",
    "hero.alphaBody": "投入生产使用前，请用已知参考复核每一项关键测量。",
    "hero.download": "下载 1.2.8 Alpha",
    "hero.github": "在 GitHub 查看",
    "hero.platform": "Windows 10 / 11 · 支持 32 位与 64 位 ASIO 主机",
    "hero.input": "输入",
    "hero.output": "输出",

    "images.controlPanel": "LufiaASIO 控制面板，显示独立的 ASIO 输入和 WASAPI Exclusive 输出路由",
    "images.apx": "Audio Precision APx500 通过 LufiaASIO 进行 768 kHz 数字环回测量",
    "images.rew": "Room EQ Wizard 通过 LufiaASIO 建立 768 kHz 数字环回路由",
    "images.thd": "LufiaASIO THD 补偿控制与 REW 频谱测量",
    "images.notch": "LufiaASIO 自适应陷波控制与 REW 残余频谱",
    "images.asio": "ASIO Compatible 标识——ASIO 是 Steinberg Media Technologies GmbH 的注册商标",

    "stats.backends": "Windows 音频后端",
    "stats.pairings": "种后端组合",
    "stats.rate": "最高 32-bit PCM*",
    "stats.buffer": "主机缓冲帧范围",
    "stats.qualifier": "* 仅当兼容的 WASAPI Exclusive PCM32 端点实际接受该格式时可用；不支持的采样率绝不会被模拟。",

    "routing.kicker": "突破单驱动限制的路由能力",
    "routing.title": "构建工作台真正需要的信号链。",
    "routing.description": "输入与输出后端可以独立选择。遇到不受支持的路由时，LufiaASIO 会明确报告，而不会悄悄切换到其他 API。",

    "matrix.title": "任意后端，皆可彼此连接。",
    "matrix.description": "把 Windows 端点接入仅支持 ASIO 的主机，聚合两个原生 ASIO 驱动，或将传统采集路径与现代播放设备组合起来。",
    "matrix.itemOne": "输入和输出分别选择模式、设备与通道",
    "matrix.itemTwo": "WASAPI Auto、Exclusive 与 Shared 三种选择",
    "matrix.itemThree": "逐侧验证精确采样率支持",
    "matrix.outputAxis": "输出后端",
    "matrix.inputOutput": "输入 / 输出",
    "matrix.caption": "LufiaASIO 支持的输入与输出后端组合",
    "matrix.supported": "支持",

    "features.aggregateTitle": "原生 ASIO 聚合",
    "features.aggregateBody": "主机只需看到一个 ASIO 设备，即可从一个原生驱动采集，并通过另一个原生驱动播放。",
    "features.rateTitle": "超越 Windows 界面采样率列表",
    "features.rateBody": "直接探测原生 WASAPI Exclusive 端点，并列出硬件真正接受的全部格式。",
    "features.bitPerfectTitle": "条件明确的 bit-perfect",
    "features.bitPerfectBody": "关闭全部处理后，兼容的整数 WASAPI Exclusive、原生 ASIO 与部分 WDM-KS 路径可保持 bit-perfect。",
    "features.recallTitle": "稳定的设备召回",
    "features.recallBody": "配置跟随各后端的原生设备 ID，而不是可能重复、损坏或重排的显示名称。",
    "features.realtimeTitle": "严格约束的实时路径",
    "features.realtimeBody": "实时回调中不执行堆分配、注册表访问、文件 I/O 或界面工作。",
    "features.diagnosticsTitle": "可采取行动的诊断信息",
    "features.diagnosticsBody": "直接在控制面板查看欠载、溢出、不连续、回调、帧数和 FIFO 水位计数。",
    "features.compatTitle": "兼容路径也保持诚实。",
    "features.compatBody": "MME、DirectSound、WASAPI Shared 以及需要 Windows 格式转换的路由不会被宣传为 bit-perfect。",

    "workflows.kicker": "为测量工作流而生",
    "workflows.title": "保留熟悉的软件，连接真正需要的硬件。",
    "workflows.description": "LufiaASIO 将 Windows 端点和独立接口接入支持 ASIO 的测试工具，同时不掩盖底层的真实传输方式。",
    "workflows.apxTitle": "把 Windows 端点带入仅支持 ASIO 的测量台。",
    "workflows.apxBody": "在 APx 中选择 LufiaASIO 作为连接器，再将任一方向路由到 WASAPI Exclusive、WDM-KS 或原生 ASIO 设备。",
    "workflows.rewTitle": "混合不同接口，无需放弃 ASIO。",
    "workflows.rewBody": "将主机缓冲与各后端的原生包大小解耦，为大型 FFT、持续录音与快速宽带测量提供支持。",
    "workflows.soundcheckTitle": "面向持续测试序列的灵活路由。",
    "workflows.soundcheckBody": "复合引擎针对连续回调、不一致的包大小以及刻意设置的大型主机缓冲而设计。",
    "workflows.continuous": "连续工作负载",
    "workflows.maxBuffer": "最大缓冲帧数",
    "workflows.disclaimer": "图中结果来自所示数字环回测试环境，仅作为示例，不构成其他硬件的保证规格。",

    "processing.kicker": "精密测量处理",
    "processing.title": "把经过校准的处理放进路由。",
    "processing.description": "逐通道工具仅出现在原生 ASIO 与 WASAPI Exclusive 路由中；配置按后端、方向、模式、设备 ID 和通道分别保存。",
    "processing.outputTool": "输入 / 输出工具",
    "processing.thdTitle": "逐通道 THD Compensation",
    "processing.thdBody": "应用带符号的多项式校正，并提供可选系数精度、实时预览、峰值预测和自动衰减。",
    "processing.thdItemOne": "每个启用通道拥有独立系数",
    "processing.thdItemTwo": "16 至 32 位系数精度",
    "processing.thdItemThree": "无需传统 EQ 曲线的实验性谐波风格调整",
    "processing.calibration": "必须校准。",
    "processing.thdWarning": "系数与具体设备、通道、电平、负载及测试环境绑定。",
    "processing.inputTool": "输入工具",
    "processing.notchTitle": "数字基波 Notch",
    "processing.notchBody": "抑制采集到的基波，让低电平谐波与残余噪声更容易观察。",
    "processing.notchItemOne": "在设定范围内自适应搜索并自动跟踪锁定",
    "processing.notchItemTwo": "可固定频率、衰减量与 Q 值",
    "processing.notchItemThree": "实时锁定状态与逐通道配置",
    "processing.method": "必须纳入测量方法。",
    "processing.notchWarning": "Notch 会改变采集数据；固定模式可能需要匹配的校准曲线。",
    "processing.cautionTitle": "这些处理会有意改变样本。",
    "processing.cautionBody": "进行 bit-perfect 传输测试时应关闭 THD Compensation 和 Notch；启用前先建立干净的基线。",

    "quick.kicker": "快速开始",
    "quick.title": "从安装程序到经过验证的路由。",
    "quick.description": "先在无处理状态下验证信号链，再只加入测量方法真正需要的工具。",
    "quick.stepOneTitle": "安装正确的软件包",
    "quick.stepOneBody": "64 位 Windows 请使用 x64 包，它会同时注册 x64 与 x86 ASIO 组件；仅 32 位 Windows 使用 x86 包。",
    "quick.stepTwoTitle": "选择 LufiaASIO",
    "quick.stepTwoBody": "在主机中将 LufiaASIO 设为 ASIO 驱动，然后打开它的控制面板。",
    "quick.stepThreeTitle": "构建路由",
    "quick.stepThreeBody": "分别设置输入与输出的模式、设备和通道。应用后允许主机重置。",
    "quick.stepFourTitle": "处理前先验证",
    "quick.stepFourBody": "确认采样率、通道顺序、电平和无处理基线。测量工作可从 2,048 或 16,384 帧开始。",

    "clock.kicker": "重要时钟说明",
    "clock.title": "相同的采样率标签，不代表相同的物理时钟。",
    "clock.body": "LufiaASIO 不使用自适应采样率转换，以保留符合条件的 bit-perfect 路径。两个独立设备可能持续漂移，直至 FIFO 欠载或溢出。",
    "clock.actionTitle": "进行长时间同步测量时：",
    "clock.actionBody": "请共享字时钟、公共数字时钟或其他已确认的硬件参考。",
    "clock.noSrc": "无自适应 SRC",
    "clock.fifo": "尽力而为的 FIFO",
    "clock.sync": "建议硬件同步",

    "download.title": "准备构建更灵活的 Windows 音频链了吗？",
    "download.body": "请仅从官方发布页面下载，并在安装前核对随附的 SHA-256 文件。",
    "download.releases": "打开 GitHub Releases",
    "download.guide": "阅读安装指南",

    "faq.kicker": "常见问题",
    "faq.title": "让测量保持可信的关键细节。",
    "faq.description": "LufiaASIO 扩展了路由选择，但不会绕过硬件、驱动、格式或时钟本身的限制。",
    "faq.fullGuide": "完整故障排除指南",
    "faq.qOne": "为什么某个采样率没有出现？",
    "faq.aOne": "所有启用方向都必须精确支持该采样率。WASAPI Shared 只能接受当前的 Windows 混合格式；不受支持的原生格式仍不可用。",
    "faq.qTwo": "为什么两个原生 ASIO 设备无法同时打开？",
    "faq.aTwo": "部分厂商驱动只允许一个进程级实例。请关闭其他音频应用，或在合适时将其中一侧切换到其他后端。",
    "faq.qThree": "长时间测试中出现音频中断的原因是什么？",
    "faq.aThree": "增大缓冲并检查 FIFO 欠载与溢出计数。如果两个独立设备的计数持续增长，请同步它们的硬件时钟。",
    "faq.qFour": "所有 LufiaASIO 路由都是 bit-perfect 吗？",
    "faq.aFour": "不是。符合条件的原生整数 WASAPI Exclusive、原生 ASIO 和部分 WDM-KS 路径可以 bit-perfect；Shared、MME、DirectSound、格式转换、THD Compensation 与 Notch 均不属于此类。",
    "faq.qFive": "隐藏时钟警告会让设备同步吗？",
    "faq.aFive": "不会。隐藏警告只改变显示；除非设备共享已确认的硬件参考，独立时钟仍会漂移。",
    "faq.qSix": "该版本可以直接用于合规或生产判定吗？",
    "faq.aSix": "未经独立验证不可以。1.2.8 Alpha 是面向评估和测量实验室测试的预览版本。",

    "footer.tagline": "路由不妥协，测量有依据。",
    "footer.createdBy": "创建与维护者：",
    "footer.product": "产品",
    "footer.resources": "资源",
    "footer.legal": "LufiaASIO 是独立项目，与 Steinberg Media Technologies GmbH 不存在隶属、赞助或背书关系。Audio Precision、APx、SoundCheck、Room EQ Wizard 及其他产品名称归各自权利人所有。",
    "footer.preview": "LufiaASIO 1.2.8 Alpha 预览版"
  };

  const meta = {
    en: {
      title: "LufiaASIO — Route without compromise",
      description: "LufiaASIO is a multi-protocol Windows audio router: one ASIO driver, five backends, and independent input-to-output routing for measurement workflows.",
      socialTitle: "LufiaASIO — Route without compromise",
      socialDescription: "One ASIO driver. Five Windows audio backends. Any input-to-output combination.",
      imageAlt: "LufiaASIO logo"
    },
    "zh-CN": {
      title: "LufiaASIO — 路由不妥协，测量有依据",
      description: "LufiaASIO 是多协议 Windows 音频路由器：一个 ASIO 驱动连接五种后端，为测量工作流独立组合输入与输出。",
      socialTitle: "LufiaASIO — 路由不妥协，测量有依据",
      socialDescription: "一个 ASIO 驱动，连接五种 Windows 音频后端。输入与输出，自由组合。",
      imageAlt: "LufiaASIO 标志"
    }
  };

  const textDefaults = new Map();
  const ariaDefaults = new Map();
  const altDefaults = new Map();

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!textDefaults.has(key)) textDefaults.set(key, element.textContent.trim());
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (!ariaDefaults.has(key)) ariaDefaults.set(key, element.getAttribute("aria-label") || "");
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (!altDefaults.has(key)) altDefaults.set(key, element.getAttribute("alt") || "");
  });

  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navPanel = document.querySelector("[data-nav-panel]");
  const languageButtons = [...document.querySelectorAll("[data-language]")];
  const mobileQuery = window.matchMedia("(max-width: 1080px)");
  let currentLanguage = "en";

  const getText = (key, fallback = "") => {
    if (currentLanguage === "zh-CN" && Object.prototype.hasOwnProperty.call(zh, key)) return zh[key];
    return textDefaults.get(key) || ariaDefaults.get(key) || altDefaults.get(key) || fallback;
  };

  const setMetaContent = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute("content", value);
  };

  const updateMenuLabel = () => {
    if (!menuButton) return;
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    const key = isOpen ? "a11y.menuClose" : "a11y.menuOpen";
    const fallback = isOpen ? "Close navigation" : "Open navigation";
    menuButton.setAttribute("aria-label", currentLanguage === "zh-CN" ? zh[key] : fallback);
  };

  const setLanguage = (language, persist = true) => {
    currentLanguage = language === "zh-CN" ? "zh-CN" : "en";
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = getText(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      element.setAttribute("aria-label", getText(element.dataset.i18nAria));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      element.setAttribute("alt", getText(element.dataset.i18nAlt));
    });

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
    });

    const selectedMeta = meta[currentLanguage];
    document.title = selectedMeta.title;
    setMetaContent('meta[name="description"]', selectedMeta.description);
    setMetaContent('meta[property="og:title"]', selectedMeta.socialTitle);
    setMetaContent('meta[property="og:description"]', selectedMeta.socialDescription);
    setMetaContent('meta[property="og:image:alt"]', selectedMeta.imageAlt);
    setMetaContent('meta[name="twitter:title"]', selectedMeta.socialTitle);
    setMetaContent('meta[name="twitter:description"]', selectedMeta.socialDescription);
    updateMenuLabel();

    if (persist) {
      try {
        window.localStorage.setItem("lufiaasio-language", currentLanguage);
      } catch (_) {
        // The page remains fully usable when storage is unavailable.
      }
    }
  };

  const setMenu = (open, restoreFocus = false) => {
    if (!header || !menuButton) return;
    const shouldOpen = Boolean(open && mobileQuery.matches);
    header.classList.toggle("menu-open", shouldOpen);
    menuButton.setAttribute("aria-expanded", String(shouldOpen));
    updateMenuLabel();
    if (!shouldOpen && restoreFocus) menuButton.focus();
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  if (menuButton && navPanel) {
    menuButton.addEventListener("click", () => {
      setMenu(menuButton.getAttribute("aria-expanded") !== "true");
    });

    navPanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        setMenu(false, true);
      }
    });

    document.addEventListener("click", (event) => {
      if (menuButton.getAttribute("aria-expanded") === "true" && !header.contains(event.target)) {
        setMenu(false);
      }
    });

    mobileQuery.addEventListener("change", () => setMenu(false));
  }

  const updateHeader = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const revealElements = [...document.querySelectorAll("[data-reveal]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (revealElements.length && !reduceMotion && "IntersectionObserver" in window) {
    document.body.classList.add("reveal-ready");
    revealElements.forEach((element) => {
      if (element.dataset.delay) element.style.transitionDelay = `${element.dataset.delay}ms`;
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -7%", threshold: 0.08 });

    requestAnimationFrame(() => revealElements.forEach((element) => revealObserver.observe(element)));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  const matrix = document.querySelector("[data-route-matrix]");
  if (matrix) {
    const matrixCells = [...matrix.querySelectorAll("td[data-col]")];
    const clearColumn = () => matrix.querySelectorAll(".is-column-active").forEach((cell) => cell.classList.remove("is-column-active"));
    matrixCells.forEach((cell) => {
      cell.addEventListener("pointerenter", () => {
        clearColumn();
        matrix.querySelectorAll(`[data-col="${cell.dataset.col}"]`).forEach((columnCell) => columnCell.classList.add("is-column-active"));
      });
    });
    matrix.addEventListener("pointerleave", clearColumn);
  }

  let savedLanguage = "en";
  try {
    const stored = window.localStorage.getItem("lufiaasio-language");
    if (stored === "zh-CN" || stored === "en") savedLanguage = stored;
  } catch (_) {
    // English remains the deterministic first-visit default.
  }
  setLanguage(savedLanguage, false);
})();
