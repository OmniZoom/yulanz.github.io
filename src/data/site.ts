export type Locale = "en" | "zh";

export const profile = {
  en: {
    name: "Yulan Zeng",
    chineseName: "曾钰岚",
    role: "AI Product · Engineering · Research",
    nav: [
      ["overview", "Overview"], ["projects", "Projects"], ["experience", "Experience"],
      ["research", "Research"], ["skills", "Skills"],
    ],
    resume: "Resume",
    resumeHref: null,
    contact: "Contact",
    contactHref: "mailto:abigailmounind@163.com",
    language: "中文",
  },
  zh: {
    name: "曾钰岚",
    chineseName: "Yulan Zeng",
    role: "AI 产品 · 工程 · 研究",
    nav: [
      ["overview", "概览"], ["projects", "项目"], ["experience", "经历"],
      ["research", "研究"], ["skills", "能力"],
    ],
    resume: "简历",
    resumeHref: null,
    contact: "联系",
    contactHref: "mailto:abigailmounind@163.com",
    language: "EN",
  },
} as const;

export const overview = {
  en: {
    eyebrow: "PERSONAL WEBSITE",
    title: "AI product, engineering, and research",
    introduction: [
      "I am Yulan Zeng, working at the intersection of AI product thinking, engineering, and research. My current focus is turning AI capabilities into systems with clear product boundaries, measurable evaluation, and deployable implementations.",
      "My background spans AI research in electrical and computer engineering at Sungkyunkwan University and an engineering education at Zhejiang University. Research trained me to define problems, design experiments, and interpret evidence; product engineering extends that discipline into usable AI workflows and end-to-end delivery.",
    ],
    timelineLabel: "Education",
    timeline: [
      { period: "2024.09 — 2026.08", organization: "Sungkyunkwan University", role: "Researcher · Department of Electrical and Computer Engineering", description: "Completed master’s-level coursework and two years of AI research training across machine learning, deep learning, computer vision, graph neural networks, experimental design, and results validation." },
      { period: "2019.09 — 2023.06", organization: "Zhejiang University", role: "B.Eng. · Agricultural Engineering", description: "Completed undergraduate engineering education and received the Zhejiang University Academic Scholarship for 2019–2020." },
    ],
  },
  zh: {
    eyebrow: "个人网站",
    title: "AI 产品、工程与研究",
    introduction: [
      "我是曾钰岚，目前关注 AI 产品、工程与研究的交叉方向。我希望将 AI 能力转化为边界清晰、可以评测并能够部署的系统。",
      "我的背景包括成均馆大学电气与计算机工程方向的 AI 科研训练，以及浙江大学的工科教育。科研经历让我持续练习问题定义、实验设计与证据分析；AI 产品工程则将这些方法延伸到可使用的 workflow 与端到端交付。",
    ],
    timelineLabel: "教育经历",
    timeline: [
      { period: "2024.09 — 2026.08", organization: "成均馆大学", role: "研究员 · 电气与计算机工程系", description: "完成硕士阶段课程与两年 AI 科研训练，涉及机器学习、深度学习、计算机视觉、图神经网络、实验设计与结果验证。" },
      { period: "2019.09 — 2023.06", organization: "浙江大学", role: "农业工程 · 工学学士", description: "完成本科工科教育，并获得 2019–2020 学年浙江大学学业奖学金。" },
    ],
  },
} as const;

export const project = {
  en: {
    eyebrow: "FEATURED AI PRODUCT CASE STUDY",
    title: "Enterprise Engineering Copilot",
    summary: "A citation-grounded knowledge and agent platform that helps engineering teams ask, compare, and troubleshoot against authorized evidence—not model memory.",
    status: "v1.0.0 evaluated baseline",
    actions: { caseStudy: "Read the case study", github: "View GitHub", video: "Video Demo", release: "View release evidence" },
    capabilities: ["Product definition", "RAG & retrieval", "Bounded agent workflows", "Evaluation", "Security", "Deployment"],
    outcomes: [
      ["57", "versioned evaluation cases"], ["1.00", "citation resolution"],
      ["1.00", "unsupported-question refusal"], ["0", "runtime failures in recorded runs"],
    ],
  },
  zh: {
    eyebrow: "AI 产品完整案例",
    title: "Enterprise Engineering Copilot",
    summary: "面向工程团队的引用可追溯知识与 Agent 平台：在授权证据范围内完成问答、比较与故障排查，而不是依赖模型记忆。",
    status: "v1.0.0 作品集基线",
    actions: { caseStudy: "阅读完整案例", github: "查看 GitHub", video: "视频演示", release: "查看发布证据" },
    capabilities: ["产品定义", "RAG 与检索", "有边界的 Agent workflow", "Evaluation", "安全", "部署"],
    outcomes: [
      ["57", "个版本化评估案例"], ["1.00", "引用解析率"],
      ["1.00", "无证据问题拒答准确率"], ["0", "记录运行中的 runtime failure"],
    ],
  },
} as const;

export const lifecycle = {
  en: [
    ["problem", "Problem", "Engineering knowledge lives across runbooks, specifications, architecture documents, and incident notes. Search retrieves documents; generic chat can produce answers without authority, access control, or inspectable evidence.", "The product problem was not ‘build RAG.’ It was reducing time-to-answer without sacrificing evidence, permissions, or failure visibility."],
    ["research", "Research boundary", "The initial build used explicit product hypotheses and engineering-domain observations, not fabricated user interviews. Formal user validation remains a stated gap.", "This distinction is intentional: product evidence, assumptions, and measured system results are never presented as the same thing."],
    ["product", "Product definition", "The primary user is an engineer who needs a defensible answer inside an authorized knowledge scope. The core jobs are Ask, Compare, and read-only Troubleshooting.", "Non-goals included a general autonomous agent, premature multi-agent architecture, persistent memory, and MCP without a concrete external workflow."],
    ["prd", "PRD & acceptance", "The PRD converted the problem into observable outcomes: scoped ingestion, grounded answers, controlled refusal, resolvable citations, explicit failure states, and replaceable infrastructure.", "Each milestone had acceptance criteria and an owner approval gate before repository-changing work."],
    ["feasibility", "AI feasibility", "Feasibility was tested across embeddings, dense and sparse retrieval, hybrid fusion, optional reranking, structured generation, citation validation, provider behavior, and local resource limits.", "Model reasoning was used only where semantic generation added value; authorization, evidence ownership, budgets, and validation stayed deterministic."],
    ["workflow", "AI workflow", "Authenticated request → authorized Knowledge Base → typed task contract → retrieval Tool → evidence gate → Skill coordination → provider generation → application-owned citation validation.", "Every terminal outcome is explicit: grounded response, insufficient evidence, or typed failure."],
    ["engineering", "Engineering implementation", "A modular FastAPI monolith owns business boundaries. PostgreSQL is canonical storage, Qdrant is a rebuildable index, Next.js is the public BFF, and LangGraph coordinates bounded steps.", "Docker Compose provides a reproducible single-host deployment without pretending the project requires Kubernetes."],
    ["evaluation", "Evaluation", "A versioned 57-case suite measures Recall, MRR, nDCG, citation resolution, refusal accuracy, task success, latency, usage, failures, and bounded steps. Human review covers completed generated answers.", "Recall@1/5 is 0.90/1.00; MRR is 0.95; citation resolution and unsupported-refusal accuracy are both 1.00 in the recorded baseline and repeat."],
    ["bad-cases", "Bad cases", "Bad cases shaped the product: excessive comparison context, invalid cross-target citations, provider refusals, CSP-blocked hydration, fragile runtime-origin comparison, and broad retrieval queries rejected by the evidence gate.", "Each moved through symptom → root cause → user impact → bounded fix → regression test → remaining limitation."],
    ["analysis", "Data interpretation", "High Recall@5 did not erase the Recall@1 gap. Citation resolution did not become a claim of universal answer quality. Retrieval score was explicitly labeled as similarity, not confidence.", "A repeat run regressed from two provider failures to three; the failed gate stayed visible instead of selecting only the better run."],
    ["iteration", "Product iteration", "The product evolved from dense grounded Q&A to hybrid retrieval, Tool boundaries, Compare, authorization, runtime controls, Troubleshooting, unified evaluation, and deployment closure.", "Complexity entered only when a measured failure or user-facing capability justified it."],
    ["cost", "Cost", "Provider token usage is recorded, but historical dollar cost is not claimed because no versioned pricing snapshot accompanied the experiment.", "Local embeddings and reranking reduce recurring API dependence; retries and multi-target workflows remain explicit cost drivers."],
    ["value", "Business value", "The commercial hypothesis is faster, safer access to engineering knowledge: lower search time, more consistent runbook use, inspectable answers, and controlled refusal.", "Business impact is not invented. It would be validated with time-to-answer, task completion, citation inspection, repeat-question reduction, and active team usage."],
  ],
  zh: [
    ["problem", "发现问题", "工程知识分散在 runbook、规范、架构文档和事故记录中。搜索只能找文档，通用对话模型又可能给出缺少权限与证据约束的答案。", "真正的问题不是“做一个 RAG”，而是在不牺牲证据、权限和失败可见性的前提下缩短获得答案的时间。"],
    ["research", "研究边界", "项目初期基于明确的产品假设和工程领域观察，没有虚构用户访谈。正式用户验证仍被如实记录为缺口。", "产品证据、待验证假设和系统实测结果始终分开陈述。"],
    ["product", "定义产品", "目标用户是在授权知识范围内需要可信答案的工程师。核心任务是 Ask、Compare 和只读 Troubleshooting。", "明确不做通用自主 Agent、过早的多 Agent、持久记忆，以及没有业务用例的 MCP。"],
    ["prd", "PRD 与验收", "PRD 将问题转化为可观察结果：范围化摄取、有依据回答、受控拒答、可解析引用、明确失败状态和可替换基础设施。", "每个里程碑都有验收标准，修改仓库前必须经过 Owner approval gate。"],
    ["feasibility", "AI 可行性", "通过真实实验验证 embedding、dense/sparse/hybrid retrieval、可选 reranking、结构化生成、引用校验、provider 行为与本地资源限制。", "只在语义生成真正创造价值时使用模型；权限、证据所有权、预算和验证保持确定性。"],
    ["workflow", "AI Workflow", "认证请求 → 授权 Knowledge Base → typed task contract → retrieval Tool → evidence gate → Skill 协调 → provider 生成 → 应用侧引用校验。", "终态明确为：grounded response、insufficient evidence 或 typed failure。"],
    ["engineering", "工程实现", "FastAPI 模块化单体承载业务边界；PostgreSQL 是 canonical storage，Qdrant 是可重建索引，Next.js 是公开 BFF，LangGraph 只协调有边界步骤。", "Docker Compose 提供可复现的单机部署，不制造 Kubernetes 规模幻觉。"],
    ["evaluation", "建立 Evaluation", "57-case 版本化套件评估 Recall、MRR、nDCG、引用解析、拒答、任务成功、延迟、usage、失败和步骤；完成生成的答案另有人工 review。", "记录结果中 Recall@1/5 为 0.90/1.00，MRR 为 0.95，引用解析与无证据拒答准确率均为 1.00。"],
    ["bad-cases", "发现 Bad Cases", "真实问题包括 Compare context 过宽、跨目标引用错误、provider 拒答、CSP 阻断 hydration、runtime origin 比较脆弱，以及宽泛 query 被 evidence gate 拒绝。", "每个问题都沿着现象、根因、用户影响、有界修复、回归测试和剩余限制处理。"],
    ["analysis", "数据分析", "Recall@5 较高不代表可以忽略 Recall@1；引用可解析不等于普遍正确；retrieval score 被明确标注为相似度而不是置信度。", "repeat run 的 provider failure 从 2 增至 3，失败的 regression gate 被保留而非隐藏。"],
    ["iteration", "产品迭代", "产品从 dense grounded Q&A 演进到 hybrid retrieval、Tool boundary、Compare、权限、runtime controls、Troubleshooting、统一评估和部署闭环。", "只有在真实失败或用户能力需要时才增加复杂度。"],
    ["cost", "成本", "记录了 provider token usage，但由于实验时没有版本化价格快照，没有虚构历史美元成本。", "本地 embedding/reranking 降低 API 依赖；retry 和双目标 workflow 是明确成本驱动因素。"],
    ["value", "商业价值", "商业假设是更快、更安全地获取工程知识：减少搜索时间、提升 runbook 使用一致性、提供可检查答案并受控拒答。", "没有编造业务收益；未来应以 time-to-answer、task completion、citation inspection、重复提问减少和团队活跃度验证。"],
  ],
} as const;
