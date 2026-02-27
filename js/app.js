// ========== 全局状态 ==========
const state = {
  currentPage: 'home',
  studyDays: 162,
  totalHours: 48,
  completedCourses: 12,
  streakDays: 7,
  previousPage: 'home'
};

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
});

// ========== 页面切换（HTML中调用switchTab） ==========
function switchTab(pageId) {
  state.previousPage = state.currentPage;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    state.currentPage = pageId;
  }
  // 更新底部导航高亮
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.page === pageId);
  });
  // 渲染对应页面
  const renderers = {
    home: renderHome, courses: renderCourses, cases: renderCases,
    resources: renderResources, ai: renderAI, community: renderCommunity, profile: renderProfile
  };
  if (renderers[pageId]) renderers[pageId]();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
  switchTab(state.previousPage || 'home');
}

// ========== 首页渲染 ==========
function renderHome() {
  renderAbilityGrid();
  renderTodayTasks();
  renderHomeCases();
}

function renderAbilityGrid() {
  const grid = document.getElementById('ability-modules');
  if (!grid) return;
  grid.innerHTML = abilityModules.map(m => `
    <div class="ability-module" onclick="showModuleDetail('${m.id}')">
      <div class="module-circle" style="border-color:${m.color};color:${m.color}">${m.name}</div>
      <div class="module-title">${m.title}</div>
      <div class="module-progress"><div class="module-progress-bar" style="width:${m.progress}%;background:${m.color}"></div></div>
    </div>
  `).join('');
}

function renderTodayTasks() {
  const list = document.getElementById('today-tasks');
  if (!list) return;
  list.innerHTML = todayTasks.map(t => `
    <div class="task-item" onclick="switchTab('courses')">
      <div class="task-icon" style="background:${t.color}"><i class="${t.icon}"></i></div>
      <div class="task-info">
        <div class="task-title">${t.title}</div>
        <div class="task-desc">今日推荐学习内容</div>
      </div>
      <span class="task-tag" style="background:${t.tagColor};color:${t.tagTextColor}">${t.tag}</span>
    </div>
  `).join('');
}

function renderHomeCases() {
  const container = document.getElementById('home-cases');
  if (!container) return;
  container.innerHTML = casesData.slice(0, 4).map(c => `
    <div class="case-card" onclick="showCaseDetail(${c.id})">
      <div class="case-card-img" style="background:linear-gradient(135deg,${c.color},${c.color}dd)"><i class="${c.icon}"></i></div>
      <div class="case-card-body">
        <div class="case-card-title">${c.title}</div>
        <div class="case-card-meta"><i class="fas fa-map-marker-alt"></i> ${c.location}</div>
      </div>
    </div>
  `).join('');
}

// ========== 课程页渲染 ==========
function renderCourses(filter) {
  const container = document.getElementById('course-list');
  if (!container) return;
  const f = filter || 'all';
  document.querySelectorAll('#page-courses .filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === f);
    tab.onclick = () => renderCourses(tab.dataset.filter);
  });
  const filtered = f === 'all' ? coursesData : coursesData.filter(c => c.category === f);
  container.innerHTML = filtered.map(c => `
    <div class="course-item" onclick="showCourseDetail(${c.id})">
      <div class="course-thumb" style="background:linear-gradient(135deg,${c.color},${c.color}cc)"><i class="${c.icon}"></i></div>
      <div class="course-info">
        <div class="course-title">${c.title}</div>
        <div class="course-meta">
          <span><i class="fas fa-clock"></i> ${c.duration}</span>
          <span><i class="fas fa-user"></i> ${c.students}人学习</span>
        </div>
        <div class="course-tags">
          <span class="course-tag tag-${c.type}">${c.type === 'video' ? '视频' : '图文'}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ========== 案例页渲染 ==========
function renderCases(filter) {
  const container = document.getElementById('case-list');
  if (!container) return;
  const f = filter || 'all';
  document.querySelectorAll('#page-cases .filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === f);
    tab.onclick = () => renderCases(tab.dataset.filter);
  });
  const filtered = f === 'all' ? casesData : casesData.filter(c => c.region === f);
  container.innerHTML = filtered.map(c => `
    <div class="case-card" onclick="showCaseDetail(${c.id})">
      <div class="case-card-img" style="background:linear-gradient(135deg,${c.color},${c.color}dd)"><i class="${c.icon}"></i></div>
      <div class="case-card-body">
        <div class="case-card-title">${c.title}</div>
        <div class="case-card-meta"><i class="fas fa-map-marker-alt"></i> ${c.location}</div>
      </div>
    </div>
  `).join('');
}

// ========== 资料页渲染 ==========
function renderResources(filter) {
  const container = document.getElementById('resource-list');
  if (!container) return;
  const f = filter || 'all';
  document.querySelectorAll('#page-resources .filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === f);
    tab.onclick = () => renderResources(tab.dataset.filter);
  });
  const filtered = f === 'all' ? resourcesData : resourcesData.filter(r => r.type === f);
  const typeMap = { policy: 'policy', report: 'report', video: 'video', book: 'book' };
  container.innerHTML = filtered.map(r => `
    <div class="resource-item" onclick="showToast('资料查看功能演示：${r.title}')">
      <div class="resource-icon ${typeMap[r.type] || 'policy'}"><i class="${r.icon}"></i></div>
      <div class="resource-info">
        <div class="resource-title">${r.title}</div>
        <div class="resource-desc">${r.desc}</div>
      </div>
      <span class="resource-badge">${r.format}</span>
    </div>
  `).join('');
}

// ========== AI助手 ==========
let aiInitialized = false;

function renderAI() {
  if (aiInitialized) return;
  aiInitialized = true;
  addAIMessage(aiResponses.greeting[0]);
}

function aiQuickAction(type) {
  const textMap = { case: '请帮我分析成功案例', learn: '请给我学习建议', policy: '请解读最新政策', brand: '请帮我做品牌策划' };
  const input = document.getElementById('chat-input');
  if (input && textMap[type]) {
    input.value = textMap[type];
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  if (!input || !input.value.trim()) return;
  const text = input.value.trim();
  input.value = '';
  addUserMessage(text);
  showTyping();
  setTimeout(() => {
    hideTyping();
    const category = detectCategory(text);
    const responses = aiResponses[category] || aiResponses.default;
    const reply = responses[Math.floor(Math.random() * responses.length)];
    addAIMessage(reply);
  }, 1000 + Math.random() * 1500);
}

function detectCategory(text) {
  if (/案例|成功|经验|模式/.test(text)) return 'case';
  if (/学习|课程|建议|进度/.test(text)) return 'learn';
  if (/政策|文件|法规|补贴/.test(text)) return 'policy';
  if (/品牌|营销|推广|包装/.test(text)) return 'brand';
  return 'default';
}

function addAIMessage(text) {
  const msgs = document.getElementById('chat-messages');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = 'chat-msg ai';
  div.innerHTML = '<div class="chat-msg-avatar"><i class="fas fa-robot"></i></div><div class="chat-msg-bubble">' + text + '</div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMessage(text) {
  const msgs = document.getElementById('chat-messages');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  div.innerHTML = '<div class="chat-msg-avatar"><i class="fas fa-user"></i></div><div class="chat-msg-bubble">' + text + '</div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chat-messages');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = 'chat-msg ai';
  div.id = 'typing-msg';
  div.innerHTML = '<div class="chat-msg-avatar"><i class="fas fa-robot"></i></div><div class="chat-msg-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById('typing-msg');
  if (el) el.remove();
}

// ========== 社区 ==========
function renderCommunity() {
  const container = document.getElementById('community-groups');
  if (!container) return;
  container.innerHTML = communityGroups.map(g => `
    <div class="group-item" onclick="openCommunityChat(${g.id})">
      <div class="group-avatar" style="background:${g.color}"><i class="${g.icon}"></i></div>
      <div class="group-info">
        <div class="group-name">${g.name}</div>
        <div class="group-desc">${g.desc}</div>
      </div>
      <div class="group-badge"><i class="fas fa-users"></i> ${g.members}</div>
    </div>
  `).join('');
}

function openCommunityChat(groupId) {
  const group = communityGroups.find(g => g.id === groupId);
  if (!group) return;
  const chatPanel = document.getElementById('community-chat');
  if (!chatPanel) return;
  chatPanel.classList.remove('hidden');
  document.getElementById('chat-group-name').textContent = group.name;
  document.getElementById('chat-member-count').textContent = group.members + '人';
  const msgContainer = document.getElementById('community-messages');
  msgContainer.innerHTML = mockCommunityMessages.map(m => `
    <div class="community-msg">
      <div class="community-msg-avatar">${m.avatar}</div>
      <div class="community-msg-content">
        <div class="community-msg-name">${m.name}</div>
        <div class="community-msg-bubble">${m.msg}</div>
      </div>
    </div>
  `).join('');
  msgContainer.scrollTop = msgContainer.scrollHeight;
}

function closeCommunityChat() {
  const chatPanel = document.getElementById('community-chat');
  if (chatPanel) chatPanel.classList.add('hidden');
}

function sendCommunityMessage() {
  const input = document.getElementById('community-input');
  if (!input || !input.value.trim()) return;
  const text = input.value.trim();
  input.value = '';
  const msgContainer = document.getElementById('community-messages');
  const div = document.createElement('div');
  div.className = 'community-msg self';
  div.innerHTML = '<div class="community-msg-avatar">我</div><div class="community-msg-content"><div class="community-msg-name">我</div><div class="community-msg-bubble">' + text + '</div></div>';
  msgContainer.appendChild(div);
  msgContainer.scrollTop = msgContainer.scrollHeight;
  setTimeout(() => {
    const replies = ['说得好！', '赞同你的观点。', '我们这边也是类似情况。', '可以加个微信详细聊聊。', '这个经验很有参考价值！'];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    const names = ['张建国', '李小红', '王大明'];
    const name = names[Math.floor(Math.random() * names.length)];
    const rdiv = document.createElement('div');
    rdiv.className = 'community-msg';
    rdiv.innerHTML = '<div class="community-msg-avatar">' + name[0] + '</div><div class="community-msg-content"><div class="community-msg-name">' + name + '</div><div class="community-msg-bubble">' + reply + '</div></div>';
    msgContainer.appendChild(rdiv);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }, 1500 + Math.random() * 2000);
}

// ========== 个人中心 ==========
function renderProfile() {
  renderAbilityProgress();
}

function renderAbilityProgress() {
  const container = document.getElementById('ability-progress');
  if (!container) return;
  container.innerHTML = abilityModules.map(m => `
    <div class="progress-item">
      <span class="progress-label" style="color:${m.color}">${m.title}</span>
      <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${m.progress}%;background:${m.color}"></div></div>
      <span class="progress-value">${m.progress}%</span>
    </div>
  `).join('');
}

// ========== 详情页 ==========
function showModuleDetail(moduleId) {
  const m = abilityModules.find(a => a.id === moduleId);
  if (!m) return;
  state.previousPage = state.currentPage;
  const content = document.getElementById('module-detail-content');
  content.innerHTML = `
    <div class="detail-cover" style="background:linear-gradient(135deg,${m.color},${m.color}cc)"><i class="${m.icon}"></i></div>
    <h1 class="detail-title">${m.title}</h1>
    <div class="detail-meta"><span><i class="fas fa-book"></i> ${m.courses.length}门课程</span><span><i class="fas fa-chart-line"></i> 进度 ${m.progress}%</span></div>
    <div class="detail-section"><h3>模块简介</h3><p>${m.desc}</p></div>
    <div class="detail-section"><h3>课程列表</h3>
      <div class="module-course-list">${m.courses.map((c, i) => `
        <div class="module-course-item" onclick="showToast('${c.title}')">
          <div class="module-course-num">${i + 1}</div>
          <span class="module-course-title">${c.title}</span>
          <span class="module-course-status ${c.done ? 'done' : ''}">${c.done ? '✓ 已学' : '未学'}</span>
        </div>`).join('')}
      </div>
    </div>`;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-module-detail').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCourseDetail(courseId) {
  const c = coursesData.find(x => x.id === courseId);
  if (!c) return;
  state.previousPage = state.currentPage;
  const content = document.getElementById('course-detail-content');
  content.innerHTML = `
    ${c.type === 'video' ? '<div class="video-placeholder" onclick="showToast(\'视频播放功能演示\')"><i class="fas fa-play-circle"></i><span>点击播放课程视频</span></div>' : ''}
    <h1 class="detail-title">${c.title}</h1>
    <div class="detail-meta"><span><i class="fas fa-clock"></i> ${c.duration}</span><span><i class="fas fa-user"></i> ${c.students}人学习</span><span><i class="fas fa-tag"></i> ${c.type === 'video' ? '视频课程' : '图文课程'}</span></div>
    <div class="detail-actions"><button class="btn-primary" onclick="showToast('开始学习：${c.title}')"><i class="fas fa-play"></i> 开始学习</button><button class="btn-outline" onclick="showToast('已收藏')"><i class="fas fa-bookmark"></i> 收藏</button></div>
    <div class="detail-section"><h3>课程简介</h3><p>${c.desc}</p></div>
    <div class="detail-section"><h3>课程内容</h3><p>${c.content.replace(/\n/g, '<br>')}</p></div>`;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-course-detail').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCaseDetail(caseId) {
  const c = casesData.find(x => x.id === caseId);
  if (!c) return;
  state.previousPage = state.currentPage;
  const content = document.getElementById('case-detail-content');
  content.innerHTML = `
    <div class="detail-cover" style="background:linear-gradient(135deg,${c.color},${c.color}dd)"><i class="${c.icon}"></i></div>
    <h1 class="detail-title">${c.title}</h1>
    <div class="detail-meta"><span><i class="fas fa-map-marker-alt"></i> ${c.location}</span></div>
    <div class="detail-actions"><button class="btn-primary" onclick="analyzeCase(${c.id})"><i class="fas fa-robot"></i> AI分析此案例</button><button class="btn-outline" onclick="showToast('已收藏')"><i class="fas fa-bookmark"></i> 收藏</button></div>
    <div class="detail-section"><h3>案例概述</h3><p>${c.summary}</p></div>
    <div class="detail-section"><h3>详细分析</h3><p>${c.detail.replace(/\n/g, '<br>')}</p></div>
    <div class="detail-section"><h3>标签</h3><div class="course-tags">${c.tags.map(t => '<span class="course-tag tag-article">' + t + '</span>').join('')}</div></div>`;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-case-detail').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function analyzeCase(caseId) {
  switchTab('ai');
  setTimeout(() => {
    const c = casesData.find(x => x.id === caseId);
    if (c) {
      addUserMessage('请帮我分析这个案例：' + c.title);
      showTyping();
      setTimeout(() => {
        hideTyping();
        addAIMessage(aiResponses.case[Math.floor(Math.random() * aiResponses.case.length)]);
      }, 1500);
    }
  }, 300);
}

// ========== 模态框与通知 ==========
function showModal(title, bodyHtml) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = bodyHtml;
  document.getElementById('modal-overlay').classList.remove('hidden');
  document.getElementById('modal-panel').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.getElementById('modal-panel').classList.add('hidden');
}

function showNotifications() {
  showModal('消息通知', '<div style="text-align:center;padding:20px;color:var(--text-muted)"><i class="fas fa-bell" style="font-size:36px;margin-bottom:12px;display:block"></i><p>暂无新消息</p><p style="font-size:13px">系统通知和学习提醒将在这里显示</p></div>');
}

function showBookmarks() {
  showModal('我的收藏', '<div style="text-align:center;padding:20px;color:var(--text-muted)"><i class="fas fa-bookmark" style="font-size:36px;margin-bottom:12px;display:block"></i><p>暂无收藏内容</p><p style="font-size:13px">收藏的课程和案例将在这里显示</p></div>');
}

function showHistory() {
  showModal('学习记录', '<div style="text-align:center;padding:20px;color:var(--text-muted)"><i class="fas fa-history" style="font-size:36px;margin-bottom:12px;display:block"></i><p>学习记录功能开发中</p><p style="font-size:13px">您的学习轨迹将在这里展示</p></div>');
}

function showSettings() {
  showModal('设置', '<div style="padding:10px 0"><div style="padding:12px 0;border-bottom:1px solid var(--border);display:flex;justify-content:space-between"><span>深色模式</span><span style="color:var(--text-muted)">即将推出</span></div><div style="padding:12px 0;border-bottom:1px solid var(--border);display:flex;justify-content:space-between"><span>消息推送</span><span style="color:var(--success)">已开启</span></div><div style="padding:12px 0;display:flex;justify-content:space-between"><span>清除缓存</span><span style="color:var(--text-muted)">0.5MB</span></div></div>');
}

function showAbout() {
  showModal('关于我们', '<div style="text-align:center;padding:20px"><div style="font-size:36px;color:var(--primary);margin-bottom:12px"><i class="fas fa-seedling"></i></div><h3 style="margin-bottom:8px">"乡理人"点亮行动</h3><p style="color:var(--text-muted);font-size:14px;margin-bottom:16px">致力于培养新时代乡村治理人才</p><p style="font-size:13px;color:var(--text-muted)">版本 1.0.0</p><p style="font-size:13px;color:var(--text-muted);margin-top:8px">本平台旨在通过系统化的学习课程、成功案例分析和AI智能辅助，帮助大学生村官和返乡创业青年提升乡村治理能力。</p></div>');
}

function shareApp() {
  showToast('分享链接已复制到剪贴板', 'success');
}

// ========== Toast ==========
function showToast(msg, type) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast ' + (type || '');
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
