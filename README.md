# 🌱 "乡理人"点亮行动

> 面向大学生村官和返乡创业青年的乡村治理能力培训平台

![License](https://img.shields.io/badge/license-MIT-green)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📖 项目简介

"乡理人"点亮行动是一个致力于培养新时代乡村治理人才的在线学习平台。平台提供六大核心能力模块、成功案例库、课程中心、学习资料、AI 智能助手和交流社区，帮助大学生村官和返乡创业青年系统提升乡村治理能力。

## ✨ 功能特色

| 模块 | 说明 |
|------|------|
| 🏠 **首页** | 平台总览、能力模块导航、今日任务、数据统计 |
| 📚 **能力培养** | 六大核心模块：政策解读、经济管理、品牌建设、营销推广、数据分析、综合治理 |
| 🏆 **成功案例** | 10 个全国各地乡村振兴典型案例，覆盖东/西/南/北/中各区域 |
| 🎓 **课程中心** | 视频课程与图文教程，支持按类型筛选 |
| 📄 **学习资料** | 政策文件、行业报告、培训视频、推荐书籍 |
| 🤖 **AI 助手** | 智能问答，支持案例分析、政策解读、品牌策划等场景 |
| 💬 **交流社区** | 按地区划分的村官交流群组与热门话题讨论 |

## 🛠️ 技术栈

- **纯静态站点** — 无需构建工具、无服务端依赖，开箱即用
- **HTML5** — 语义化标签 + ARIA 无障碍支持
- **CSS3** — 自定义属性设计系统（Biophilic 自然主题）、Flexbox/Grid 布局、响应式设计
- **原生 JavaScript** — IntersectionObserver 滚动动画、模态框、AI 聊天模拟
- **Font Awesome 6.4** — 图标库（CDN 加载）

## 📁 项目结构

```
rural-ceo-app/
├── index.html          # 首页
├── modules.html        # 能力培养
├── cases.html          # 成功案例
├── courses.html        # 课程中心
├── resources.html      # 学习资料
├── ai.html             # AI 助手
├── community.html      # 交流社区
├── css/
│   ├── main.css        # 主样式（设计系统 + 组件）
│   └── responsive.css  # 响应式媒体查询
├── js/
│   └── data.js         # 统一数据层（AppData 接口）
├── images/             # 案例封面图等静态资源
└── README.md
```

## 🚀 快速开始

本项目是纯静态网站，**无需安装任何依赖**。

### 方式一：直接打开

双击 `index.html` 即可在浏览器中查看。

### 方式二：本地服务器（推荐）

```bash
# 使用 Python
cd rural-ceo-app
python3 -m http.server 8080

# 或使用 Node.js
npx serve .

# 或使用 VS Code Live Server 插件
# 右键 index.html → Open with Live Server
```

然后访问 `http://localhost:8080`。

## 📱 响应式支持

- 🖥️ 桌面端（> 1024px）
- 📱 平板端（768px ~ 1024px）
- 📱 手机端（< 768px）
- 📱 小屏手机（< 480px）

## ♿ 无障碍特性

- 跳转到主内容链接（Skip to content）
- ARIA 角色与标签
- 键盘导航支持（Tab / Enter / Escape）
- `prefers-reduced-motion` 减弱动画
- 屏幕阅读器友好

## 📄 License

MIT License — 自由使用、修改和分发。
