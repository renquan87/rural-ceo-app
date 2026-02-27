// ========== 六大能力模块 ==========
const abilityModules = [
  { id: 'zheng', name: '政', title: '政策解读', color: '#2563eb', icon: 'fas fa-landmark', progress: 65,
    desc: '深入解读乡村振兴相关政策法规，掌握土地流转、合作社运营等核心政策',
    courses: [
      { title: '乡村振兴战略政策全解读', done: true },
      { title: '土地流转政策与实操指南', done: true },
      { title: '农村合作社运营管理办法', done: false },
      { title: '农业补贴政策申请攻略', done: false },
      { title: '乡村治理现代化政策解读', done: false }
    ]
  },
  { id: 'jing', name: '经', title: '经济管理', color: '#16a34a', icon: 'fas fa-chart-line', progress: 45,
    desc: '学习农村经济管理知识，掌握财务分析、项目评估等实用技能',
    courses: [
      { title: '农村集体经济发展模式', done: true },
      { title: '乡村项目投资评估方法', done: false },
      { title: '农产品成本核算与定价', done: false },
      { title: '乡村旅游经济效益分析', done: false },
      { title: '农村金融与融资渠道', done: false }
    ]
  },
  { id: 'pin', name: '品', title: '品牌建设', color: '#ea580c', icon: 'fas fa-award', progress: 30,
    desc: '学习区域公共品牌打造方法，提升农产品品牌价值和市场竞争力',
    courses: [
      { title: '区域公共品牌打造方法论', done: true },
      { title: '农产品品牌故事策划', done: false },
      { title: '品牌视觉设计基础', done: false },
      { title: '地理标志产品申报指南', done: false },
      { title: '品牌传播与口碑营销', done: false }
    ]
  },
  { id: 'shi', name: '实', title: '实践案例', color: '#dc2626', icon: 'fas fa-hands-helping', progress: 55,
    desc: '深入分析各地乡村振兴成功案例，提炼可复制的实践经验',
    courses: [
      { title: '浙江安吉"两山"实践经验', done: true },
      { title: '山东寿光蔬菜产业模式', done: true },
      { title: '贵州遵义红色旅游开发', done: false },
      { title: '四川战旗村集体经济改革', done: false },
      { title: '江苏华西村发展启示录', done: false }
    ]
  },
  { id: 'xiao', name: '销', title: '营销推广', color: '#9333ea', icon: 'fas fa-bullhorn', progress: 40,
    desc: '掌握新媒体营销、电商运营等现代营销方法，拓宽农产品销售渠道',
    courses: [
      { title: '农产品电商运营实战', done: true },
      { title: '短视频营销与直播带货', done: false },
      { title: '社群营销与私域流量', done: false },
      { title: '农产品包装与视觉营销', done: false },
      { title: '线上线下融合营销策略', done: false }
    ]
  },
  { id: 'shu', name: '数', title: '数据分析', color: '#0891b2', icon: 'fas fa-database', progress: 20,
    desc: '学习数据采集与分析方法，用数据驱动乡村治理和产业决策',
    courses: [
      { title: '乡村数据采集与管理基础', done: true },
      { title: '农业大数据应用场景', done: false },
      { title: '数据可视化与报告制作', done: false },
      { title: '智慧农业与物联网入门', done: false },
      { title: '数据驱动的乡村治理', done: false }
    ]
  }
];

// ========== 课程数据 ==========
const coursesData = [
  { id: 1, category: 'zheng', title: '乡村振兴战略政策全解读', desc: '系统梳理乡村振兴战略的政策框架，解读核心文件精神。', type: 'video', duration: '45分钟', students: 2380, color: '#2563eb', icon: 'fas fa-landmark', content: '本课程从中央一号文件出发，系统解读乡村振兴战略的五大振兴。\n\n课程大纲：\n1. 乡村振兴战略的提出背景与意义\n2. 五大振兴的核心内容解读\n3. 各级政府配套政策梳理\n4. 政策落地的关键路径\n5. 典型地区政策实践案例分析' },
  { id: 2, category: 'zheng', title: '土地流转政策与实操指南', desc: '详解农村土地流转相关法律法规，提供规范化操作流程。', type: 'article', duration: '30分钟', students: 1856, color: '#2563eb', icon: 'fas fa-file-contract', content: '土地流转是乡村产业发展的基础。\n\n重点内容：\n1. 土地流转的法律依据\n2. 流转合同签订规范\n3. 流转价格确定方法\n4. 纠纷预防与解决机制\n5. 成功流转案例分享' },
  { id: 3, category: 'jing', title: '农村集体经济发展模式', desc: '分析各地农村集体经济发展的成功模式。', type: 'video', duration: '50分钟', students: 1920, color: '#16a34a', icon: 'fas fa-chart-line', content: '农村集体经济是乡村振兴的重要支撑。\n\n课程内容：\n1. 集体经济的定义与重要性\n2. 四种主要发展模式详解\n3. 集体资产管理与运营\n4. 收益分配机制设计\n5. 各地创新实践案例' },
  { id: 4, category: 'pin', title: '区域公共品牌打造方法论', desc: '从品牌定位到传播推广，系统讲解品牌打造全流程。', type: 'video', duration: '40分钟', students: 1650, color: '#ea580c', icon: 'fas fa-award', content: '区域公共品牌是提升农产品附加值的关键。\n\n核心内容：\n1. 区域品牌定位策略\n2. 品牌命名与视觉设计\n3. 品牌标准体系建设\n4. 品牌传播渠道选择\n5. 品牌维护与升级' },
  { id: 5, category: 'shi', title: '浙江安吉"两山"实践经验', desc: '深入剖析安吉县践行"两山"理念的成功经验。', type: 'article', duration: '25分钟', students: 2100, color: '#dc2626', icon: 'fas fa-mountain', content: '安吉县是"两山"理念的发源地。\n\n案例要点：\n1. 安吉的发展困境与转型契机\n2. 生态经济发展路径\n3. 白茶产业的品牌化之路\n4. 美丽乡村建设经验\n5. 可复制的发展模式总结' },
  { id: 6, category: 'xiao', title: '农产品电商运营实战', desc: '手把手教你做好农产品电商，打通线上销售渠道。', type: 'video', duration: '60分钟', students: 3200, color: '#9333ea', icon: 'fas fa-shopping-cart', content: '电商是农产品上行的重要渠道。\n\n实战内容：\n1. 电商平台选择与入驻\n2. 产品详情页设计技巧\n3. 定价策略与促销方案\n4. 物流与售后管理\n5. 数据分析与优化' },
  { id: 7, category: 'xiao', title: '短视频营销与直播带货', desc: '学习短视频内容创作和直播带货技巧。', type: 'video', duration: '55分钟', students: 4100, color: '#9333ea', icon: 'fas fa-video', content: '短视频和直播已成为农产品营销的新阵地。\n\n课程大纲：\n1. 短视频平台算法解析\n2. 农产品短视频内容策划\n3. 拍摄与剪辑基础技巧\n4. 直播带货流程与话术\n5. 粉丝运营与转化提升' },
  { id: 8, category: 'shu', title: '乡村数据采集与管理基础', desc: '学习乡村治理中的数据采集方法和管理工具。', type: 'article', duration: '35分钟', students: 980, color: '#0891b2', icon: 'fas fa-database', content: '数据是智慧乡村建设的基础。\n\n学习内容：\n1. 乡村数据的分类与价值\n2. 常用数据采集工具\n3. 数据整理与存储方法\n4. 简单数据分析技巧\n5. 数据安全与隐私保护' },
  { id: 9, category: 'jing', title: '乡村旅游经济效益分析', desc: '学习乡村旅游项目的经济效益评估方法。', type: 'video', duration: '40分钟', students: 1450, color: '#16a34a', icon: 'fas fa-umbrella-beach', content: '乡村旅游是产业振兴的重要方向。\n\n课程内容：\n1. 乡村旅游市场分析方法\n2. 投资成本估算\n3. 收益预测模型\n4. 风险评估与应对\n5. 成功项目案例分析' },
  { id: 10, category: 'pin', title: '农产品品牌故事策划', desc: '学习如何挖掘产品背后的故事，提升品牌价值。', type: 'article', duration: '20分钟', students: 1280, color: '#ea580c', icon: 'fas fa-pen-fancy', content: '好的品牌故事能让产品更有温度。\n\n核心内容：\n1. 品牌故事的要素与结构\n2. 挖掘产品文化内涵\n3. 故事化表达技巧\n4. 多渠道传播策略\n5. 优秀品牌故事案例赏析' }
];

// ========== 案例数据 ==========
const casesData = [
  { id: 1, region: 'east', title: '浙江安吉：绿水青山就是金山银山', location: '浙江省湖州市安吉县', color: '#16a34a', icon: 'fas fa-mountain', summary: '安吉县从矿山经济转型为生态经济，白茶产业年产值超30亿元。', detail: '安吉县曾是浙江省25个贫困县之一。2005年提出"两山"理念后，全面关停矿山，发展白茶、竹产业和乡村旅游。\n\n关键举措：\n- 关停全部矿山，修复生态环境\n- 发展安吉白茶品牌\n- 打造美丽乡村示范带\n- 建设竹产业链\n\n成效：白茶年产值超30亿元，年接待游客超2000万人次，农民人均收入超4万元。', tags: ['生态经济', '品牌农业', '乡村旅游'] },
  { id: 2, region: 'east', title: '山东寿光：中国蔬菜之乡的产业传奇', location: '山东省潍坊市寿光市', color: '#2563eb', icon: 'fas fa-seedling', summary: '寿光市通过蔬菜产业集群化发展，建成全国最大的蔬菜生产和批发市场。', detail: '寿光从普通农业县发展为"中国蔬菜之乡"。\n\n发展历程：\n- 1989年引进冬暖式大棚技术\n- 建设寿光蔬菜批发市场\n- 发展蔬菜种苗产业\n- 推进智慧农业建设\n\n成效：蔬菜种植面积60万亩，年产量450万吨，带动周边100万农民增收。', tags: ['产业集群', '技术创新', '市场建设'] },
  { id: 3, region: 'west', title: '贵州遵义：红色旅游带动乡村振兴', location: '贵州省遵义市', color: '#dc2626', icon: 'fas fa-flag', summary: '遵义依托红色文化资源，发展红色旅游+乡村旅游融合模式。', detail: '遵义充分利用红色文化资源优势。\n\n发展模式：\n- 红色旅游+乡村旅游融合发展\n- 红色文化+农耕文化体验\n- 旅游+特色农产品销售\n\n成效：年接待游客超1.5亿人次，旅游综合收入超500亿元，带动10万余人就业。', tags: ['红色旅游', '文旅融合', '乡村民宿'] },
  { id: 4, region: 'central', title: '四川战旗村：集体经济改革样板', location: '四川省成都市郫都区', color: '#ea580c', icon: 'fas fa-users', summary: '战旗村通过集体经济改革，实现村集体资产超亿元。', detail: '战旗村是全国农村集体经济改革的标杆。\n\n改革路径：\n- 农村集体资产股份化改革\n- 集体建设用地入市试点\n- 发展乡村旅游和文创产业\n\n成效：村集体资产超1亿元，村民人均收入超3万元。', tags: ['集体经济', '制度创新', '共同富裕'] },
  { id: 5, region: 'east', title: '江苏华西村：天下第一村的转型之路', location: '江苏省无锡市江阴市', color: '#9333ea', icon: 'fas fa-building', summary: '华西村从传统农业村发展为多元化产业集团。', detail: '华西村被誉为"天下第一村"。\n\n发展阶段：\n- 1960s-1970s：农业学大寨\n- 1980s：乡镇企业崛起\n- 1990s：产业多元化发展\n- 2000s至今：转型升级\n\n核心经验：坚持集体经济道路，与时俱进产业升级。', tags: ['集体经济', '产业升级', '城镇化'] },
  { id: 6, region: 'south', title: '广东清远：农村电商助力脱贫攻坚', location: '广东省清远市', color: '#0891b2', icon: 'fas fa-shopping-bag', summary: '清远市通过"农村电商+特色农产品"模式，帮助山区农民增收致富。', detail: '清远市地处粤北山区，通过发展农村电商让农产品走向全国。\n\n发展策略：\n- 建设县镇村三级电商服务体系\n- 培育本土电商人才\n- 打造清远鸡、英德红茶等品牌\n\n成效：农产品网络零售额超50亿元，带动5万余农户增收。', tags: ['农村电商', '品牌农业', '人才培养'] },
  { id: 7, region: 'central', title: '湖南十八洞村：精准扶贫首倡地', location: '湖南省湘西州花垣县', color: '#dc2626', icon: 'fas fa-hand-holding-heart', summary: '十八洞村探索出"可复制、可推广"的脱贫经验，人均收入增长10倍。', detail: '2013年精准扶贫理念在十八洞村首次提出。\n\n脱贫路径：\n- 发展特色种植（猕猴桃、油茶）\n- 开发苗族文化旅游\n- 发展苗绣等手工艺产业\n\n成效：人均年收入从1668元增长到超2万元。', tags: ['精准扶贫', '文化旅游', '产业发展'] },
  { id: 8, region: 'north', title: '河北正定：古城文旅融合发展', location: '河北省石家庄市正定县', color: '#ea580c', icon: 'fas fa-torii-gate', summary: '正定县依托千年古城文化资源，打造文旅融合发展新模式。', detail: '正定是国家历史文化名城。\n\n发展策略：\n- 古城保护与修复\n- 夜经济与文创产业\n- 智慧旅游建设\n\n成效：年接待游客超1500万人次，旅游收入超100亿元。', tags: ['文旅融合', '古城保护', '夜经济'] },
  { id: 9, region: 'west', title: '云南元阳：哈尼梯田的活态保护', location: '云南省红河州元阳县', color: '#16a34a', icon: 'fas fa-water', summary: '元阳县在保护世界文化遗产的同时，发展生态农业和文化旅游。', detail: '哈尼梯田是世界文化遗产。\n\n保护与发展策略：\n- 传统农耕文化保护\n- 梯田红米品牌化发展\n- 哈尼文化体验旅游\n\n成效：梯田红米售价提升5倍，年旅游收入超20亿元。', tags: ['文化遗产', '生态农业', '文化旅游'] },
  { id: 10, region: 'south', title: '海南博鳌：从小渔村到国际会议中心', location: '海南省琼海市博鳌镇', color: '#2563eb', icon: 'fas fa-globe-asia', summary: '博鳌从普通渔村发展为亚洲论坛永久会址所在地。', detail: '博鳌的蜕变是借助重大机遇实现跨越式发展的典型。\n\n发展历程：\n- 2001年亚洲论坛落户博鳌\n- 基础设施全面升级\n- 发展会议经济和旅游业\n\n成效：年接待游客超500万人次，周边村庄人均收入翻番。', tags: ['会议经济', '基础设施', '机遇把握'] }
];

// ========== 学习资料数据 ==========
const resourcesData = [
  { id: 1, type: 'policy', title: '2024年中央一号文件全文', desc: '关于有力有效推进乡村全面振兴的意见', format: 'PDF', icon: 'fas fa-file-pdf' },
  { id: 2, type: 'policy', title: '乡村振兴促进法', desc: '中华人民共和国乡村振兴促进法（全文）', format: 'PDF', icon: 'fas fa-gavel' },
  { id: 3, type: 'policy', title: '农村土地承包法（修订版）', desc: '最新修订的农村土地承包法律条文及解读', format: 'PDF', icon: 'fas fa-file-contract' },
  { id: 4, type: 'report', title: '中国乡村振兴发展报告', desc: '全面分析乡村振兴战略实施进展与成效', format: 'PDF', icon: 'fas fa-chart-bar' },
  { id: 5, type: 'report', title: '农村电商发展趋势白皮书', desc: '深度解析农村电商市场现状与未来趋势', format: 'PDF', icon: 'fas fa-shopping-cart' },
  { id: 6, type: 'report', title: '乡村旅游市场调研报告', desc: '2024年乡村旅游消费趋势与市场机会分析', format: 'PDF', icon: 'fas fa-umbrella-beach' },
  { id: 7, type: 'video', title: '乡村振兴大讲堂：产业兴旺', desc: '专家解读产业振兴的路径与方法', format: '视频', icon: 'fas fa-play-circle' },
  { id: 8, type: 'video', title: '电商直播实操培训', desc: '从零开始学习农产品直播带货', format: '视频', icon: 'fas fa-video' },
  { id: 9, type: 'book', title: '《乡村振兴战略规划解读》', desc: '权威解读乡村振兴战略规划要点', format: '电子书', icon: 'fas fa-book' },
  { id: 10, type: 'book', title: '《农村电商实战手册》', desc: '农产品电商运营从入门到精通', format: '电子书', icon: 'fas fa-book-open' },
  { id: 11, type: 'video', title: '品牌农业建设系列课程', desc: '如何打造有影响力的农产品品牌', format: '视频', icon: 'fas fa-play-circle' },
  { id: 12, type: 'policy', title: '农业农村部最新通知汇编', desc: '近期农业农村部发布的重要政策通知', format: 'PDF', icon: 'fas fa-file-alt' }
];

// ========== 社区群组数据 ==========
const communityGroups = [
  { id: 1, name: '华东地区村官交流群', region: '华东', members: 256, color: '#2563eb', icon: 'fas fa-map-marker-alt', desc: '上海、江苏、浙江、安徽、福建、江西、山东' },
  { id: 2, name: '华南地区村官交流群', region: '华南', members: 189, color: '#16a34a', icon: 'fas fa-map-marker-alt', desc: '广东、广西、海南' },
  { id: 3, name: '华中地区村官交流群', region: '华中', members: 213, color: '#ea580c', icon: 'fas fa-map-marker-alt', desc: '河南、湖北、湖南' },
  { id: 4, name: '华北地区村官交流群', region: '华北', members: 178, color: '#dc2626', icon: 'fas fa-map-marker-alt', desc: '北京、天津、河北、山西、内蒙古' },
  { id: 5, name: '西南地区村官交流群', region: '西南', members: 234, color: '#9333ea', icon: 'fas fa-map-marker-alt', desc: '重庆、四川、贵州、云南、西藏' },
  { id: 6, name: '西北地区村官交流群', region: '西北', members: 145, color: '#0891b2', icon: 'fas fa-map-marker-alt', desc: '陕西、甘肃、青海、宁夏、新疆' },
  { id: 7, name: '东北地区村官交流群', region: '东北', members: 167, color: '#64748b', icon: 'fas fa-map-marker-alt', desc: '辽宁、吉林、黑龙江' }
];

// ========== 模拟聊天消息 ==========
const mockCommunityMessages = [
  { name: '张建国', avatar: '张', msg: '大家好，我是安徽的村官，最近在推进土地流转，有经验的朋友可以交流一下吗？', self: false },
  { name: '李小红', avatar: '李', msg: '我们村去年完成了300亩的流转，关键是要和村民充分沟通，保障他们的权益。', self: false },
  { name: '王大明', avatar: '王', msg: '建议先做好土地确权工作，这是流转的基础。我们这边就是因为确权不清楚导致了一些纠纷。', self: false },
  { name: '赵小芳', avatar: '赵', msg: '我们村搞了个合作社，统一流转统一经营，效果不错，村民每年有分红。', self: false },
  { name: '刘志强', avatar: '刘', msg: '请问大家流转价格一般怎么定？我们这边水田和旱地差别挺大的。', self: false },
  { name: '陈美玲', avatar: '陈', msg: '我们是参考当地粮食产值来定的，水田大概800-1200元/亩/年，旱地500-800元。', self: false }
];

// ========== AI回复模板 ==========
const aiResponses = {
  greeting: [
    '您好！我是乡理人AI助手，很高兴为您服务。我可以帮您分析成功案例、提供学习建议、解读政策文件，或者协助品牌策划。请问有什么可以帮助您的？',
    '欢迎使用乡理人AI助手！我能为您提供案例分析、政策解读、品牌策划等方面的智能建议。请告诉我您的需求。'
  ],
  case: [
    '根据您的需求，我为您分析了几个相关的成功案例：\n\n1. 浙江安吉模式：通过生态转型，发展白茶产业和乡村旅游，实现了"绿水青山就是金山银山"。\n\n关键启示：\n- 找准本地特色资源\n- 坚持生态优先发展理念\n- 打造区域公共品牌\n- 发展多元化产业体系\n\n建议您结合本地实际情况，选择适合的发展路径。需要更详细的分析吗？',
    '为您推荐以下案例分析思路：\n\n案例：山东寿光蔬菜产业\n\n成功要素分析：\n1. 技术创新：引进冬暖式大棚技术\n2. 市场建设：建成全国最大蔬菜批发市场\n3. 品牌效应：打造"寿光蔬菜"区域品牌\n4. 产业链延伸：从种植到加工到销售全链条\n\n可借鉴之处：\n- 以技术创新为驱动力\n- 重视市场体系建设\n- 注重品牌价值提升'
  ],
  learn: [
    '根据您的学习进度，我为您制定了个性化学习建议：\n\n当前阶段建议重点学习：\n1. 政策解读模块 - 掌握最新乡村振兴政策\n2. 实践案例模块 - 学习成功经验\n3. 营销推广模块 - 提升产品销售能力\n\n每天建议学习30-60分钟，循序渐进。',
    '学习建议：\n\n您目前的学习进度不错！建议接下来：\n1. 完成"品牌建设"模块的基础课程\n2. 重点关注"数据分析"模块\n3. 多看实践案例，结合本地情况思考\n\n推荐课程：《区域公共品牌打造方法论》'
  ],
  policy: [
    '为您解读最新政策要点：\n\n2024年中央一号文件核心内容：\n1. 确保国家粮食安全\n2. 确保不发生规模性返贫\n3. 提升乡村产业发展水平\n4. 提升乡村建设水平\n5. 提升乡村治理水平\n\n重点关注：学习运用"千万工程"经验，因地制宜推进乡村全面振兴。',
    '政策解读：\n\n《乡村振兴促进法》要点：\n- 明确了乡村振兴的法律地位\n- 规定了各级政府的职责\n- 强调产业发展和人才支撑\n- 保障农民合法权益\n\n建议重点关注与您所在地区相关的配套政策。'
  ],
  brand: [
    '品牌策划建议：\n\n打造区域农产品品牌的五步法：\n\n第一步：资源梳理\n- 盘点本地特色农产品\n- 挖掘文化历史内涵\n- 分析市场竞争格局\n\n第二步：品牌定位\n- 确定目标消费群体\n- 提炼核心卖点\n- 制定差异化策略\n\n第三步：品牌设计\n- 品牌命名与标识\n- 包装设计\n- 品牌故事\n\n第四步：渠道建设\n第五步：持续运营\n\n需要针对具体产品深入分析吗？',
    '为您提供品牌建设思路：\n\n成功案例参考 - "丽水山耕"品牌：\n- 统一区域公共品牌\n- 严格品质标准\n- 线上线下融合销售\n- 品牌溢价提升30%以上\n\n建议您：\n1. 先做好产品品质\n2. 挖掘地域文化特色\n3. 设计统一品牌形象\n4. 利用新媒体传播'
  ],
  default: [
    '感谢您的提问！这是一个很好的问题。\n\n基于我的分析，建议您：\n1. 先了解相关政策背景\n2. 参考类似地区的成功案例\n3. 结合本地实际制定方案\n4. 分步骤逐步实施\n\n您可以在案例库中查看更多成功经验，或者告诉我更具体的需求，我来为您做针对性分析。',
    '这个问题涉及多个方面，让我为您梳理一下：\n\n从政策层面看：国家大力支持乡村振兴\n从市场层面看：消费升级带来新机遇\n从技术层面看：数字化工具降低门槛\n\n建议您从以下几个方向入手：\n1. 明确发展目标和定位\n2. 整合本地优势资源\n3. 借鉴成功经验\n4. 善用政策支持\n\n需要更详细的建议吗？'
  ]
};

// ========== 今日任务数据 ==========
const todayTasks = [
  { title: '掌握土地流转合作社运营', category: 'zheng', icon: 'fas fa-landmark', color: '#2563eb', tag: '政策', tagColor: '#dbeafe', tagTextColor: '#1e40af' },
  { title: '打造区域公共品牌', category: 'pin', icon: 'fas fa-award', color: '#ea580c', tag: '品牌', tagColor: '#ffedd5', tagTextColor: '#9a3412' },
  { title: '新媒体进行营销推广', category: 'xiao', icon: 'fas fa-bullhorn', color: '#9333ea', tag: '营销', tagColor: '#f3e8ff', tagTextColor: '#6b21a8' }
];
