var STORAGE_KEY = 'portfolio_data';

var defaultData = {
  profile: {
    name: '高欣妍',
    title: '虚拟现实技术 · 大专在读',
    bio: '热爱技术与创作，专注于虚拟现实、游戏开发和交互设计。喜欢把想法变成可视化的作品，也享受在团队中协作和成长。日常在学 Unity、Blender 和前端开发，希望未来能在创意技术领域做出有影响力的东西。',
    avatar: null,
    heroTagline: '用技术创造有温度的作品。'
  },
  contact: {
    qq: { value: '1234567890' },
    phone: { value: '138-xxxx-xxxx' },
    email: { value: 'chenwangyu@example.com' },
    wechat: { value: 'cwy_wechat' },
    custom: [
      { id: 'cc_github', type: 'github', label: 'GitHub', icon: 'github', value: 'github.com/chenwangyu' },
      { id: 'cc_bilibili', type: 'bilibili', label: 'Bilibili', icon: 'video', value: '空间主页' }
    ]
  },
  education: [
    { id: 'edu_1', school: '滁州职业技术学院', major: '虚拟现实技术应用', degree: '专科', period: '2023.09 - 2026.06', description: '主修虚拟现实技术，系统学习了 3D 建模、Unity 开发、C# 编程和交互设计。在校期间参与了多个 VR 项目和竞赛，积累了丰富的项目实战经验。' },
    { id: 'edu_2', school: 'XX 高级中学', major: '理科', degree: '高中', period: '2020.09 - 2023.06', description: '理科方向，对计算机和物理有浓厚兴趣，高中时期开始自学编程和 3D 建模基础。' }
  ],
  campusLife: [
    { id: 'campus_1', title: '全国大学生虚拟现实创新应用大赛', type: 'competition', date: '2024.11', description: '与团队一起设计并开发了一款基于 VR 的科普教育应用，负责场景建模和交互逻辑。最终获得省级二等奖。', image: null },
    { id: 'campus_2', title: '校园科技文化节志愿者', type: 'volunteer', date: '2024.05', description: '作为技术志愿者，协助布置 VR 体验展区，为来访师生讲解和演示 VR 设备的使用。接待超过 200 人次。', image: null },
    { id: 'campus_3', title: '暑期 3D 建模实习', type: 'parttime', date: '2024.07 - 2024.08', description: '在本地一家数字内容公司实习，负责使用 Blender 进行场景和道具建模。期间完成了 3 个商业项目的模型交付。', image: null },
    { id: 'campus_4', title: 'ACG 动漫社团 · 技术部干事', type: 'club', date: '2023.10 - 至今', description: '负责社团活动的技术支持，包括海报设计、视频剪辑和活动现场的设备调试。组织过 2 次校园漫展。', image: null }
  ],
  skills: [
    { id: 'skill_1', name: 'Unity', category: 'dev', level: 'proficient', years: '1.5 年', tools: 'C#, Visual Studio, XR Interaction Toolkit', description: '熟练使用 Unity 引擎进行 3D 交互应用和 VR 项目开发，熟悉 URP 渲染管线和 XR 交互系统。', projects: 'VR 科普教育应用、校园虚拟展厅' },
    { id: 'skill_2', name: 'Blender', category: 'design', level: 'proficient', years: '2 年', tools: 'Substance Painter, ZBrush', description: '能独立完成从概念到成品的 3D 建模全流程，擅长硬表面建模和场景搭建。', projects: '3 个商业模型交付、多个个人作品' },
    { id: 'skill_3', name: 'Figma', category: 'design', level: 'skilled', years: '1 年', tools: 'Illustrator, Photoshop', description: '能够独立完成 UI 界面设计和原型制作，熟悉设计系统和组件化设计方法。', projects: '校园 App 概念设计、社团活动海报' },
    { id: 'skill_4', name: 'HTML / CSS / JS', category: 'dev', level: 'skilled', years: '1 年', tools: 'VS Code, Git, Chrome DevTools', description: '能够独立开发响应式网页，熟悉现代 CSS 布局和 JavaScript DOM 操作。', projects: '个人主页、多个前端练习项目' },
    { id: 'skill_5', name: 'Premiere Pro', category: 'design', level: 'skilled', years: '1 年', tools: 'After Effects, DaVinci Resolve', description: '能够完成视频剪辑、调色和基础特效制作，熟悉短视频和活动花絮的制作流程。', projects: '社团宣传片、校园活动花絮剪辑' },
    { id: 'skill_6', name: 'C#', category: 'dev', level: 'skilled', years: '1.5 年', tools: 'Visual Studio, Rider, .NET', description: '主要用于 Unity 游戏逻辑开发，能编写模块化、可维护的代码。', projects: 'VR 交互系统、小游戏原型' },
    { id: 'skill_7', name: 'Python', category: 'dev', level: 'beginner', years: '0.5 年', tools: 'VS Code, Jupyter', description: '了解基础语法，能用于数据处理和简单脚本编写。正在学习中。', projects: '自动化脚本、课程作业' },
    { id: 'skill_8', name: '摄影', category: 'other', level: 'skilled', years: '2 年', tools: 'Lightroom, 手机摄影', description: '热爱摄影，擅长构图和后期调色，经常在校园活动中担任摄影记录。', projects: '校园活动记录、个人作品集' }
  ],
  works: [
    { id: 'work_1', title: 'VR 科普教育应用', description: '一款面向中小学生的虚拟现实科普应用，用户可以在 VR 环境中探索太阳系、观察细胞结构。我负责场景建模、交互逻辑开发和 UI 界面设计。', cover: null, images: [], pdf: null, pdfName: '', tags: ['Unity', 'VR', 'C#', '教育'], link: '', date: '2024.11', featured: true },
    { id: 'work_2', title: '校园虚拟展厅', description: '为学校招生宣传制作的线上虚拟展厅，支持第一人称漫游、展品点击查看详情。使用 Unity 开发 WebGL 版本，可通过浏览器直接访问。', cover: null, images: [], pdf: null, pdfName: '', tags: ['Unity', 'WebGL', '3D'], link: '', date: '2024.09', featured: true },
    { id: 'work_3', title: '个人主页网站', description: '响应式个人主页，支持编辑模式、数据本地存储、作品集展示和生活记录。采用漫画网点的设计风格，带有拨号解锁彩蛋。', cover: null, images: [], pdf: null, pdfName: '', tags: ['HTML/CSS', 'JavaScript', 'UI 设计'], link: '', date: '2024.12', featured: false },
    { id: 'work_4', title: '机械手臂 3D 模型', description: '用 Blender 制作的科幻风格机械手臂高精度模型，包含完整的材质贴图和骨骼绑定。用于个人作品集展示和 Unity 项目素材。', cover: null, images: [], pdf: null, pdfName: '', tags: ['Blender', '3D 建模', '渲染'], link: '', date: '2024.08', featured: false },
    { id: 'work_5', title: '社团招新海报系列', description: '为学校 ACG 动漫社团设计的招新系列海报，包含主视觉、传单和社交媒体配图，采用日系漫画风格搭配高饱和色彩。', cover: null, images: [], pdf: null, pdfName: '', tags: ['Figma', '平面设计', '插画'], link: '', date: '2024.03', featured: false },
    { id: 'work_6', title: '校园活动混剪视频', description: '为校园科技文化节制作的 3 分钟活动混剪，涵盖前期预热、现场花絮和幕后采访，发布在校官方视频号获得 5000+ 播放。', cover: null, images: [], pdf: null, pdfName: '', tags: ['Premiere Pro', '剪辑', '调色'], link: '', date: '2024.06', featured: false }
  ],
  life: [
    { id: 'life_1', date: '2024.12.01', title: '开始搭建个人主页', content: '花了几个周末的时间，从零开始设计并实现了这个个人主页。很喜欢漫画网点风格，所以用了很多细节来营造氛围。拨号解锁的灵感来自老式转盘电话，输入 666 还有小彩蛋 😈', images: [], mood: 'motivated' },
    { id: 'life_2', date: '2024.11.20', title: 'VR 比赛拿奖了！', content: '团队一起熬了好几个夜，终于在省赛拿了二等奖。站在领奖台的那一刻，觉得所有付出都值得了。感谢队友们的信任和努力，这是大学期间最难忘的经历之一。', images: [], mood: 'celebrating' },
    { id: 'life_3', date: '2024.09.15', title: '新学期新目标', content: '大三了，这学期给自己定了几个目标：完成毕业设计选题、多参加技术交流活动、把 C# 和 Unity 再深入学一遍。加油 💪', images: [], mood: 'firedUp' },
    { id: 'life_4', date: '2024.07.30', title: '实习结束小结', content: '两个月的暑期实习结束了。从最初连 Blender 快捷键都记不全，到现在能独立出图，进步还是很明显的。带我的前辈说我的建模感觉不错，要继续保持手感。', images: [], mood: 'happy' },
    { id: 'life_5', date: '2024.06.15', title: '科技文化节圆满结束', content: '连续三天的活动终于结束了，身体很累但心里很充实。剪了一支 3 分钟的混剪，记录下整个活动的精彩瞬间。听说视频号播放量破 5000 了，开心！', images: [], mood: 'relieved' }
  ],
  meta: { version: '1.0', lastUpdated: '' }
};

var Storage = {
  load: function() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return JSON.parse(JSON.stringify(defaultData));

      var data = JSON.parse(raw);
      // Deep merge with defaults for any missing keys
      return deepMerge(JSON.parse(JSON.stringify(defaultData)), data);
    } catch (e) {
      console.warn('Storage load failed, using defaults:', e);
      return JSON.parse(JSON.stringify(defaultData));
    }
  },

  save: function(data) {
    try {
      data.meta.lastUpdated = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Storage save failed:', e);
    }
  },

  get: function(path) {
    var data = this.load();
    var keys = path.split('.');
    var value = data;
    for (var i = 0; i < keys.length; i++) {
      if (value == null) return undefined;
      value = value[keys[i]];
    }
    return value;
  },

  set: function(path, value) {
    var data = this.load();
    var keys = path.split('.');
    var obj = data;
    for (var i = 0; i < keys.length - 1; i++) {
      if (!obj[keys[i]]) obj[keys[i]] = {};
      obj = obj[keys[i]];
    }
    obj[keys[keys.length - 1]] = value;
    this.save(data);
    return data;
  },

  reset: function() {
    localStorage.removeItem(STORAGE_KEY);
  },

  export: function() {
    return JSON.stringify(this.load(), null, 2);
  },

  import: function(jsonString) {
    var data = JSON.parse(jsonString);
    if (!data.meta || !data.meta.version) {
      throw new Error('Invalid data format: missing meta.version');
    }
    this.save(deepMerge(JSON.parse(JSON.stringify(defaultData)), data));
  }
};

function deepMerge(target, source) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        if (!target[key]) target[key] = {};
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

window.Storage = Storage;
