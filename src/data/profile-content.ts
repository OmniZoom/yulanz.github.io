import type { Locale } from "./site";

export type ExperienceItem = {
  period: string;
  organization: string;
  location?: string;
  role: string;
  details: string[];
  topics: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: Array<{ name: string; evidence: string; strength: number }>;
};

export const experience: Record<Locale, {
  eyebrow: string;
  title: string;
  introduction: string;
  items: ExperienceItem[];
  honorsTitle: string;
  honors: Array<{ period: string; title: string }>;
}> = {
  en: {
    eyebrow: "EXPERIENCE",
    title: "Academic and project experience",
    introduction: "A detailed record of my AI research training, engineering work, and education.",
    items: [
      {
        period: "2026.06 — 2026.08",
        organization: "Enterprise Engineering Copilot",
        role: "Independent project · Product owner and full-stack AI engineering",
        details: [
          "Led the product from initial problem framing through PRD, prioritization, milestones, acceptance criteria, and an end-to-end workflow spanning knowledge ingestion, evidence retrieval, grounded answers, comparison, and troubleshooting.",
          "Compared dense, sparse, and hybrid retrieval with optional reranking. Reranking raised Recall@1 from 90% to 93.33% while increasing median latency from about 25 ms to 494 ms; retained multiple modes and selected dense retrieval as the default based on the measured trade-off.",
          "Defined bounded agent behavior with LangGraph and explicit Tool, Skill, and Agent Harness responsibilities, including timeouts, retries, token budgets, tool allowlists, and terminal conditions.",
          "Built a 57-case evaluation suite covering retrieval, answers, citations, refusal, and agent tasks. The recorded results include Recall@5 100%, MRR 95%, citation resolution 100%, and unsupported-question refusal accuracy 100%.",
          "Implemented authentication, knowledge-base isolation, structured logging, and a reproducible Docker Compose deployment.",
        ],
        topics: ["AI product", "RAG", "LangGraph", "FastAPI", "PostgreSQL", "Qdrant", "Evaluation", "Docker Compose"],
      },
      {
        period: "2024.09 — 2026.08",
        organization: "Sungkyunkwan University",
        location: "Republic of Korea",
        role: "Researcher · Department of Electrical and Computer Engineering",
        details: [
          "Completed master’s-level coursework and two years of AI research training in machine learning, deep learning, neural networks, computer vision, and graph neural networks.",
          "Worked across literature review, problem definition, experiment design, model training, data analysis, and results validation, while continuously reviewing developments in deep learning and generative AI.",
          "Led an unsupervised human activity recognition study from problem analysis and algorithm design through implementation, baseline reproduction, ablation experiments, and hyperparameter analysis.",
          "Developed a joint structural-temporal graph approach for multivariate sensor data and evaluated it on four public HAR benchmarks.",
        ],
        topics: ["Machine learning", "Deep learning", "Computer vision", "Graph neural networks", "PyTorch", "Experimental design"],
      },
      {
        period: "2019.09 — 2023.06",
        organization: "Zhejiang University",
        location: "Zhejiang, China",
        role: "Bachelor of Engineering · Agricultural Engineering",
        details: ["Completed undergraduate engineering education at Zhejiang University."],
        topics: ["Engineering"],
      },
    ],
    honorsTitle: "Honors",
    honors: [
      { period: "2024 — 2025", title: "Sungkyunkwan University STEM Scholarship" },
      { period: "2019 — 2020", title: "Zhejiang University Academic Scholarship" },
    ],
  },
  zh: {
    eyebrow: "经历",
    title: "学术与项目经历",
    introduction: "详细记录我的 AI 科研训练、工程实践与教育背景。",
    items: [
      {
        period: "2026.06 — 2026.08",
        organization: "Enterprise Engineering Copilot",
        role: "独立项目 · 产品负责人及全栈 AI 工程",
        details: [
          "从问题定义推进至 PRD、优先级、里程碑与验收标准，搭建覆盖知识入库、证据检索、可信回答、技术方案对比和故障排查的端到端产品闭环。",
          "对 Dense、Sparse、Hybrid Retrieval 与可选 Reranking 进行对比评测。Reranking 将 Recall@1 从 90% 提升至 93.33%，同时使中位延迟从约 25 ms 增至 494 ms；根据实测取舍保留多种模式，并选择 Dense 作为默认方案。",
          "使用 LangGraph 定义受控 Agent 行为，明确 Tool、Skill 与 Agent Harness 职责，并加入超时、重试、Token 预算、工具白名单及终止条件。",
          "建立覆盖检索、回答、引用、拒答与 Agent 任务的 57 条评测集；记录结果包括 Recall@5 100%、MRR 95%、引用解析准确率 100% 和无依据拒答准确率 100%。",
          "完成认证、知识库数据隔离、结构化日志与可复现的 Docker Compose 部署。",
        ],
        topics: ["AI 产品", "RAG", "LangGraph", "FastAPI", "PostgreSQL", "Qdrant", "Evaluation", "Docker Compose"],
      },
      {
        period: "2024.09 — 2026.08",
        organization: "成均馆大学",
        location: "韩国",
        role: "研究员 · 电气与计算机工程系",
        details: [
          "完成硕士阶段课程与两年 AI 科研训练，涉及机器学习、深度学习、神经网络、计算机视觉与图神经网络。",
          "持续开展论文调研、问题定义、实验设计、模型训练、数据分析与结果验证，并跟踪深度学习和生成式 AI 研究进展。",
          "主导无监督人类行为识别研究，完成从问题分析、算法设计到模型实现、基线复现、消融实验和超参数分析的完整流程。",
          "针对多变量传感器数据设计结构—时序联合图建模方案，并在四个公开 HAR benchmark 上进行评测。",
        ],
        topics: ["机器学习", "深度学习", "计算机视觉", "图神经网络", "PyTorch", "实验设计"],
      },
      {
        period: "2019.09 — 2023.06",
        organization: "浙江大学",
        location: "中国浙江",
        role: "农业工程 · 工学学士",
        details: ["在浙江大学完成本科工科教育。"],
        topics: ["工程"],
      },
    ],
    honorsTitle: "荣誉与奖学金",
    honors: [
      { period: "2024 — 2025", title: "成均馆大学 STEM 奖学金" },
      { period: "2019 — 2020", title: "浙江大学学业奖学金" },
    ],
  },
};

const comparisonMethods = ["ST-HAR", "SCGC", "AGCN", "CaEGCN", "DFCN", "SEDCN", "SDCN"] as const;
const comparisonRows = [
  { dataset:"HHAR", metric:"ACC", values:["89.79 ± 0.10","89.49 ± 0.15","88.11 ± 0.43","87.42 ± 3.16","87.10 ± 0.10","86.59 ± 0.47","84.26 ± 0.17"] },
  { dataset:"HHAR", metric:"NMI", values:["83.24 ± 0.15","84.24 ± 0.29","82.44 ± 0.62","82.56 ± 0.72","82.20 ± 0.10","81.63 ± 0.38","79.90 ± 0.09"] },
  { dataset:"HHAR", metric:"ARI", values:["79.42 ± 0.18","79.28 ± 0.28","77.07 ± 0.66","76.27 ± 1.90","76.40 ± 0.10","75.62 ± 0.54","72.84 ± 0.09"] },
  { dataset:"HHAR", metric:"Macro-F1", values:["89.76 ± 0.10","89.59 ± 0.23","88.00 ± 0.53","87.24 ± 3.31","87.30 ± 0.10","86.32 ± 0.67","82.58 ± 0.08"] },
  { dataset:"PAMAP2", metric:"ACC", values:["78.95 ± 0.06","76.97 ± 0.15","77.24 ± 0.19","77.25 ± 0.50","60.24 ± 0.03","70.59 ± 0.02","76.65 ± 0.14"] },
  { dataset:"PAMAP2", metric:"NMI", values:["73.98 ± 0.26","73.50 ± 0.03","73.74 ± 0.11","73.47 ± 0.51","62.86 ± 0.01","71.04 ± 0.01","72.33 ± 0.31"] },
  { dataset:"PAMAP2", metric:"ARI", values:["65.66 ± 0.26","63.71 ± 0.04","64.19 ± 0.12","64.25 ± 0.63","48.72 ± 0.02","61.51 ± 0.02","63.04 ± 0.28"] },
  { dataset:"PAMAP2", metric:"Macro-F1", values:["76.64 ± 0.14","75.93 ± 0.15","76.44 ± 0.19","75.11 ± 0.57","52.61 ± 0.01","67.86 ± 0.01","75.58 ± 0.12"] },
  { dataset:"MHEALTH", metric:"ACC", values:["84.13 ± 1.03","75.56 ± 4.09","75.28 ± 2.83","71.72 ± 0.01","62.91 ± 0.03","73.43 ± 0.00","77.18 ± 2.61"] },
  { dataset:"MHEALTH", metric:"NMI", values:["87.00 ± 0.79","81.11 ± 2.20","83.37 ± 1.41","81.78 ± 0.01","67.68 ± 0.04","84.53 ± 0.01","83.54 ± 1.76"] },
  { dataset:"MHEALTH", metric:"ARI", values:["74.93 ± 1.38","65.71 ± 4.27","67.24 ± 2.08","64.53 ± 0.01","51.69 ± 0.01","67.78 ± 0.01","68.57 ± 2.40"] },
  { dataset:"MHEALTH", metric:"Macro-F1", values:["78.09 ± 1.41","73.88 ± 4.32","73.28 ± 2.53","64.46 ± 0.01","61.84 ± 0.02","66.68 ± 0.01","73.98 ± 2.61"] },
  { dataset:"MotionSense", metric:"ACC", values:["73.01 ± 0.13","69.53 ± 0.11","70.30 ± 0.10","69.86 ± 0.39","68.21 ± 2.76","69.71 ± 0.00","70.41 ± 0.83"] },
  { dataset:"MotionSense", metric:"NMI", values:["68.71 ± 0.45","61.61 ± 0.11","65.98 ± 0.06","66.27 ± 0.41","58.94 ± 0.13","65.45 ± 0.01","66.29 ± 0.47"] },
  { dataset:"MotionSense", metric:"ARI", values:["64.72 ± 0.23","59.21 ± 0.12","62.00 ± 0.12","61.55 ± 0.41","58.44 ± 1.32","61.39 ± 0.01","61.76 ± 0.38"] },
  { dataset:"MotionSense", metric:"Macro-F1", values:["69.94 ± 0.10","66.53 ± 0.11","67.21 ± 0.09","57.79 ± 0.46","62.19 ± 3.96","57.68 ± 0.00","58.52 ± 0.81"] },
] as const;
const ablationRows = [
  { dataset:"HHAR", values:["89.82","89.02","0.80","89.36","0.46","89.52","0.30"] },
  { dataset:"PAMAP2", values:["78.95","78.91","0.04","78.66","0.29","78.64","0.31"] },
  { dataset:"MHEALTH", values:["86.26","78.00","8.26","85.42","0.84","84.36","1.90"] },
  { dataset:"MotionSense", values:["72.52","70.41","2.11","71.23","1.29","71.30","1.22"] },
] as const;

export const research = {
  en: {
    title: "Research",
    paper: {
      title: "Self-Adaptive Structural-Temporal GNN for Deep Clustering on Human Activity Recognition",
      authors: "Yulan Zeng*, Sibo Qiu*, Man Luo, Zhongyi Yu, Weipeng Zhuo, Chul-Ho Lee, and Wansu Lim",
      note: "* Equal contribution · Yulan Zeng is first author",
      status: "Archived manuscript",
      abstractTitle: "Abstract",
      abstract: "ST-HAR is an end-to-end unsupervised deep clustering system for inertial measurement unit data. It constructs a joint graph that connects sensor segments through both feature similarity and temporal proximity, uses a structural-temporal graph neural network to learn representations, and applies a temporal coherence regularizer to reduce unstable cluster switching across consecutive segments.",
      methodTitle: "Pipeline and method",
      method: [
        "The system partitions continuous multichannel IMU streams into overlapping windows and extracts a fixed-dimensional feature vector for each segment. Each segment becomes a node in the graph.",
        "Graph construction combines a semantic similarity graph with a temporal-neighbor graph, preserving both feature-level relationships and sequential continuity. ST-GNN injects edge-wise temporal distance information into message passing through rotary positional encoding.",
        "The clustering objective is trained jointly with a temporal coherence regularizer that pulls temporally nearby embeddings closer, reducing spurious cluster switching along continuous activity streams.",
      ],
      pipelineCaption: "System overview of ST-HAR, reproduced from the supplied manuscript asset pipeline.pdf.",
      resultsTitle: "Main results",
      resultsSummary: "The manuscript compares ST-HAR with six deep and graph clustering baselines on HHAR, PAMAP2, MHEALTH, and MotionSense. Values are mean ± standard deviation in percent. Across the 16 dataset–metric combinations, ST-HAR records 15 first-place results and one second-place result.",
      comparisonTitle: "Clustering performance comparison",
      comparisonCaption: "Best values are highlighted; second-best values are underlined. Ground-truth labels are used only for evaluation.",
      comparisonMethods,
      comparisonRows,
      ablationTitle: "Ablation study",
      ablationCaption: "Accuracy (%) and performance drop after removing the temporal coherence regularizer (Lₜ), temporal graph construction (TG), or RoPE injection.",
      ablationRows,
      sensitivityTitle: "Sensitivity analysis",
      windowCaption: "Clustering accuracy under different window sizes (w) and similarity thresholds (τ). The paper reports that window size has a larger effect than the threshold, with competitive results also obtained without thresholding.",
      regularizerCaption: "Sensitivity to the temporal coherence coefficient λₜ across two learning rates. The paper adopts λₜ = 0.01 and learning rate 0.001 as its default configuration.",
      qualitativeTitle: "Qualitative comparison",
      qualitativeCaption: "Complete 4×4 t-SNE comparison supplied with the manuscript. Colors denote ground-truth activity labels; the plots compare learned embedding structure across datasets and methods.",
    },
  },
  zh: {
    title: "科研成果",
    paper: {
      title: "Self-Adaptive Structural-Temporal GNN for Deep Clustering on Human Activity Recognition",
      authors: "Yulan Zeng*、Sibo Qiu*、Man Luo、Zhongyi Yu、Weipeng Zhuo、Chul-Ho Lee、Wansu Lim",
      note: "* 共同贡献 · 曾钰岚为第一作者",
      status: "已归档稿件",
      abstractTitle: "摘要",
      abstract: "ST-HAR 是面向惯性测量单元数据的端到端无监督深度聚类系统。它同时依据特征相似性与时间邻近关系连接传感器片段，使用结构—时序图神经网络学习表示，并通过时间一致性正则项减少连续片段之间不稳定的聚类切换。",
      methodTitle: "Pipeline 与方法",
      method: [
        "系统将连续多通道 IMU 数据划分为重叠窗口，并为每个片段提取固定维度特征向量；每个片段对应图中的一个节点。",
        "图构建结合语义相似图和时间邻接图，同时保留特征层面的关系与序列连续性。ST-GNN 通过旋转位置编码，在消息传递中注入边级时间距离信息。",
        "聚类目标与时间一致性正则项联合训练，使时间上相邻的表示更加接近，从而减少连续行为流中的非预期聚类切换。",
      ],
      pipelineCaption: "ST-HAR 系统概览，直接使用研究材料中的 pipeline.pdf。",
      resultsTitle: "主要结果",
      resultsSummary: "论文在 HHAR、PAMAP2、MHEALTH 和 MotionSense 上，将 ST-HAR 与六种深度聚类及图聚类基线进行比较。数值为百分制的均值 ± 标准差。在 16 个数据集—指标组合中，ST-HAR 取得 15 项第一和 1 项第二。",
      comparisonTitle: "聚类性能完整对比",
      comparisonCaption: "最佳结果高亮显示，第二名使用下划线；真实标签仅用于结果评测。",
      comparisonMethods,
      comparisonRows,
      ablationTitle: "消融实验",
      ablationCaption: "移除时间一致性正则项（Lₜ）、时序图构建（TG）或 RoPE 注入后的准确率（%）与性能下降。",
      ablationRows,
      sensitivityTitle: "敏感性分析",
      windowCaption: "不同窗口大小（w）与相似度阈值（τ）下的聚类准确率。论文分析显示窗口大小的影响更明显，在不使用阈值时也能取得有竞争力的结果。",
      regularizerCaption: "两个学习率下时间一致性系数 λₜ 的敏感性分析。论文选择 λₜ = 0.01、学习率 0.001 作为默认配置。",
      qualitativeTitle: "定性对比",
      qualitativeCaption: "研究材料提供的完整 4×4 t-SNE 对比。颜色表示真实行为标签，用于比较不同数据集和方法的表示结构。",
    },
  },
} as const;

export const skills: Record<Locale, {
  eyebrow: string;
  title: string;
  introduction: string;
  evidenceLabel: string;
  scale: [string, string, string];
  groups: SkillGroup[];
  languagesTitle: string;
  languages: Array<{ name: string; evidence: string }>;
}> = {
  en: {
    eyebrow: "SKILLS",
    title: "Capabilities backed by practice",
    introduction: "The indicators describe how each capability appears in the supplied record—coursework, research, or end-to-end project delivery—not an invented percentage score.",
    evidenceLabel: "Evidence",
    scale: ["Coursework", "Applied", "End-to-end"],
    groups: [
      { title: "Algorithm", description: "Modeling and experimental foundations used in research.", skills: [
        { name: "Python", evidence: "Research and project implementation", strength: 90 },
        { name: "PyTorch", evidence: "Model implementation and training", strength: 88 },
        { name: "Deep learning", evidence: "Coursework and two years of research training", strength: 88 },
        { name: "Graph neural networks", evidence: "First-author ST-HAR research", strength: 86 },
        { name: "Computer vision", evidence: "Graduate coursework and research training", strength: 68 },
      ]},
      { title: "AI Engineering", description: "Retrieval, controlled workflows, and measurable AI behavior.", skills: [
        { name: "LLM", evidence: "Enterprise Engineering Copilot", strength: 86 },
        { name: "Prompt", evidence: "Research experiments and 57-case product suite", strength: 84 },
        { name: "AI workflows", evidence: "Bounded LangGraph task orchestration", strength: 82 },
        { name: "RAG", evidence: "Retrieval implementation", strength: 65 },
        { name: "Evaluation", evidence: "Vector index integration", strength: 62 },
      ]},
      { title: "Software Engineering", description: "Tools used to deliver the verified AI system.", skills: [
        { name: "Pandas / Numpy", evidence: "Application and workflow boundaries", strength: 72 },
        { name: "Git / Linux", evidence: "Research and project workflows", strength: 62 },
        { name: "PostgreSQL", evidence: "Canonical storage and data isolation", strength: 58 },
        { name: "Docker Compose", evidence: "Reproducible deployment", strength: 58 },
        { name: "FastAPI", evidence: "Data analysis", strength: 58 },
      ]},
      { title: "Product", description: "Methods used to turn an AI opportunity into testable behavior.", skills: [
        { name: "Data analysis", evidence: "Research and retrieval experiments", strength: 72 },
        { name: "AI product definition", evidence: "Scoped product and agent boundaries", strength: 72 },
        { name: "PRD & prioritization", evidence: "0→1 product planning", strength: 68 },
        { name: "Product iteration", evidence: "Metrics- and bad-case-driven changes", strength: 68 },
        { name: "User research", evidence: "Product method; formal customer validation remains future work", strength: 35 },
      ]},
    ],
    languagesTitle: "Languages",
    languages: [{ name: "English", evidence: "CET-6 594 · IELTS 7.0" }, { name: "Korean", evidence: "TOPIK Advanced" }],
  },
  zh: {
    eyebrow: "能力",
    title: "由实践证据支持的能力",
    introduction: "指标表示能力在现有材料中对应课程、实际应用或端到端交付，并非虚构的百分比评分。",
    evidenceLabel: "依据",
    scale: ["课程", "应用", "端到端"],
    groups: [
      { title: "算法", description: "在科研中使用的建模与实验基础。", skills: [
        { name: "Python", evidence: "科研与项目实现", strength: 90 },
        { name: "PyTorch", evidence: "模型实现与训练", strength: 88 },
        { name: "深度学习", evidence: "课程学习与两年科研训练", strength: 88 },
        { name: "图神经网络", evidence: "一作 ST-HAR 研究", strength: 86 },
        { name: "计算机视觉", evidence: "研究生课程与科研训练", strength: 68 },
      ]},
      { title: "AI 工程", description: "检索、受控 workflow 与可评测的 AI 行为。", skills: [
        { name: "LLM", evidence: "Enterprise Engineering Copilot", strength: 86 },
        { name: "Prompt", evidence: "科研实验与 57 条产品评测集", strength: 84 },
        { name: "AI Workflow", evidence: "有边界的 LangGraph 任务编排", strength: 82 },
        { name: "RAG", evidence: "检索实现", strength: 65 },
        { name: "Evaluation", evidence: "向量索引集成", strength: 62 },
      ]},
      { title: "软件工程", description: "用于交付已验证 AI 系统的工程工具。", skills: [
        { name: "Pandas / Numpy", evidence: "应用与 workflow 边界", strength: 72 },
        { name: "Git / Linux", evidence: "科研与项目 workflow", strength: 62 },
        { name: "PostgreSQL", evidence: "Canonical storage 与数据隔离", strength: 58 },
        { name: "Docker Compose", evidence: "可复现部署", strength: 58 },
        { name: "FastAPI", evidence: "数据分析", strength: 58 },
      ]},
      { title: "产品", description: "将 AI 机会转化为可测试产品行为的方法。", skills: [
        { name: "数据分析", evidence: "科研与检索实验", strength: 72 },
        { name: "AI 产品定义", evidence: "产品与 Agent 边界设计", strength: 72 },
        { name: "PRD 与优先级", evidence: "0→1 产品规划", strength: 68 },
        { name: "产品迭代", evidence: "由指标与 bad case 驱动的改进", strength: 68 },
        { name: "用户研究", evidence: "具备产品方法；正式客户验证仍是后续工作", strength: 35 },
      ]},
    ],
    languagesTitle: "语言",
    languages: [{ name: "英语", evidence: "CET-6 594 · IELTS 7.0" }, { name: "韩语", evidence: "TOPIK 高级" }],
  },
};
