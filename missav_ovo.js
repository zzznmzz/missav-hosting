// =================================================================
// 1. 顶级元数据声明 (WidgetMetadata) —— 严格遵循白皮书第一行赋值铁律
// =================================================================

WidgetMetadata = {
    id: "missav_makka_play",
    title: "MissAV_ovo",
    author: "𝙈𝙖𝙠𝙠𝙖𝙋𝙖𝙠𝙠𝙖|CC|EL",
    description: "MissAV 终极至尊完美版",
    version: "3.8.0",
    requiredVersion: "0.0.1",
    site: "https://missav.ai",
    modules: [
        {
            title: "最近更新",
            functionName: "loadRecentUpdates",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "sort_by", title: "排序", type: "enumeration", value: "published_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "中文字幕",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "dm278/cn/chinese-subtitle", enumOptions: [{ title: "中文字幕", value: "dm278/cn/chinese-subtitle" }] },
                { name: "filters", title: "中文字幕筛选", type: "enumeration", value: "", enumOptions: [
                    { title: "所有", value: "" },
                    { title: "单人作品", value: "individual" },
                    { title: "多人作品", value: "multiple" },
                    { title: "中文字幕", value: "chinese-subtitle" }
                ] },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "日本AV",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "cn/release", enumOptions: [
                    { title: "最新发布", value: "cn/release" },
                    { title: "本周热门", value: "cn/weekly-hot" },
                    { title: "月度热门", value: "cn/monthly-hot" }
                ] },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "素人",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "cn/siro", enumOptions: [
                    { title: "SIRO", value: "cn/siro" },
                    { title: "LUXU", value: "cn/luxu" },
                    { title: "GANA", value: "cn/gana" },
                    { title: "PRESTIGE PREMIUM", value: "cn/maan" },
                    { title: "S-CUTE", value: "cn/scute" },
                    { title: "ARA", value: "cn/ara" }
                ] },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "无码影片",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "cn/uncensored-leak", enumOptions: [
                    { title: "无码流出", value: "cn/uncensored-leak" },
                    { title: "东京热", value: "cn/tokyohot" }
                ] },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "亚洲AV",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "cn/madou", enumOptions: [
                    { title: "麻豆传媒", value: "cn/madou" },
                    { title: "TWAV", value: "cn/twav" },
                    { title: "Furuke", value: "cn/furuke" },
                    { title: "韩国直播", value: "cn/klive" },
                    { title: "中国直播", value: "cn/clive" }
                ] },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "女优",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "cn/actresses/%E7%80%AC%E6%88%B8%E7%92%B0%E5%A5%88", enumOptions: getActressOptions() },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "类型",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "cn/genres/%E9%AB%98%E6%B8%85", enumOptions: getGenreOptions() },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "发行商",
            functionName: "loadList",
            params: [
                { name: "page", title: "页码", type: "page" },
                { name: "endpoint", title: "endpoint", type: "enumeration", value: "cn/makers/Moody%27s", enumOptions: getMakerOptions() },
                { name: "sort_by", title: "排序", type: "enumeration", value: "released_at", enumOptions: getSortOptions() }
            ]
        },
        {
            title: "🔍 搜索视频",
            functionName: "searchList",
            params: [
                { name: "keyword", title: "关键词", type: "input", value: "" },
                { name: "page", title: "页码", type: "page" },
                { name: "sort_by", title: "排序", type: "enumeration", value: "", enumOptions: getSortOptions() }
            ]
        },
        {
            id: "loadResource",
            title: "MissAV 播放源",
            description: "智能提取关联上下文番号并多路自动抓取 MissAV 正片链接供给播放",
            functionName: "loadResource",
            type: "stream",
            params: []
        }
    ],
    search: {
        title: "🌐 全局搜索",
        functionName: "searchGlobal",
        params: [
            { name: "keyword", title: "关键词", type: "input", description: "全网资源多维度快速功能整合联动检索", value: "" },
            { name: "page", title: "页码", type: "page", value: "1" },
            { name: "sort_by", title: "排序", type: "enumeration", value: "", enumOptions: getSortOptions() }
        ]
    }
};


// =================================================================
// 2. 全局环境核心配置与内存高速缓存定义段
// =================================================================

const BASE_URL = "https://missav.ai";
const AVATAR_BASE_URL = "https://missav.live";
const HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Referer": "https://missav.ai/",
    "Connection": "keep-alive"
};

const PEOPLE_AVATAR_CACHE = {};
const VIDEO_URL_CACHE = {}; 
const CACHE_TTL = 2 * 60 * 60 * 1000; 
const RECENT_UPDATES_CATEGORY = "recent_updates";
const RECENT_UPDATES_ENDPOINT = "cn/new";


// =================================================================
// 3. 全数据封闭式工厂选项字典集 (完全填充，一字不漏)
// =================================================================

function getSortOptions() {
    return [
        { title: "默认排序", value: "" },
        { title: "发行日期", value: "released_at" },
        { title: "最近更新", value: "published_at" },
        { title: "收藏数", value: "saved" },
        { title: "今日浏览数", value: "today_views" },
        { title: "本周浏览数", value: "weekly_views" },
        { title: "本月浏览数", value: "monthly_views" },
        { title: "总浏览数", value: "views" }
    ];
}

function getActressOptions() {
    return [
        { title: "🌸 热门女优看板（支持多维排序筛选）", value: "cn/actresses/%E7%80%AC%E6%88%B8%E7%92%B0%E5%A5%88" },
        { title: "瀬戸環奈", value: "dm179/cn/actresses/%E7%80%AC%E6%88%B8%E7%92%B0%E5%A5%88" },
        { title: "逢泽みゆ", value: "dm179/cn/actresses/%E9%80%A2%E6%B2%A2%E3%81%BF%E3%82%86" },
        { title: "松本一香", value: "dm179/cn/actresses/%E6%9D%BE%E6%9C%AC%E4%B8%80%E1%A6%99" },
        { title: "美园和花", value: "dm179/cn/actresses/%E7%BE%8E%E5%9B%AD%E5%92%8C%E8%8A%B1" },
        { title: "北冈果林", value: "dm179/cn/actresses/%E5%8C%97%E5%B2%A1%E6%9E%9C%E6%9E%97" },
        { title: "柏木こなつ", value: "dm179/cn/actresses/%E6%9F%8F%E6%9C%A8%E3%81%93%E3%81%AA%E3%81%A4" },
        { title: "浅野こころ", value: "dm179/cn/actresses/%E6%B5%85%E9%87%8E%E3%81%93%E3%81%93%E3%82%8D" },
        { title: "北野未奈", value: "dm179/cn/actresses/%E5%8C%97%E9%87%8E%E6%9C%AA%E5%A5%88" },
        { title: "清原みゆう", value: "dm179/cn/actresses/%E6%B8%85%E5%8E%9F%E3%81%BF%E3%82%86%E3%81%86" },
        { title: "沙月惠奈", value: "dm179/cn/actresses/%E6%B2%99%E6%9C%88%E6%83%A0%E5%A5%88" },
        { title: "miru", value: "dm179/cn/actresses/miru" },
        { title: "七森莉莉", value: "dm179/cn/actresses/%E4%B8%83%E6%A3%AE%E8%8E%89%E8%8E%89" },
        { title: "七濑爱丽丝", value: "dm179/cn/actresses/%E4%B8%83%E6%BF%91%E7%88%B1%E4%B8%BD%E4%B8%9D" },
        { title: "鹫尾芽衣", value: "dm179/cn/actresses/%E9%B9%AB%E5%B0%BE%E8%8A%BD%E8%A1%A3" },
        { title: "博多彩叶", value: "dm179/cn/actresses/%E5%8D%9A%E5%A4%9A%E5%BD%A9%E5%8F%B6" },
        { title: "石川澪", value: "dm179/cn/actresses/%E7%9F%B3%E5%B7%9D%E6%BE%AA" },
        { title: "白上咲花", value: "dm179/cn/actresses/%E7%99%BD%E4%B8%8A%E5%92%B2%E8%8A%B1" },
        { title: "田野忧", value: "dm179/cn/actresses/%E7%94%B0%E9%87%8E%E5%BF%A7" },
        { title: "未步なな", value: "dm179/cn/actresses/%E6%9C%AA%E6%AD%A5%E3%81%AA%E3%81%AA" },
        { title: "村上悠华", value: "dm179/cn/actresses/%E6%9D%91%E4%B8%8A%E6%82%A0%E5%8D%8E" },
        { title: "三田真铃", value: "dm179/cn/actresses/%E4%B8%89%E7%94%B0%E7%9C%9F%E9%93%83" },
        { title: "八掛うみ", value: "dm179/cn/actresses/%E5%85%AB%E6%8E%9B%E3%81%86%E3%81%BF" },
        { title: "初美なのか", value: "dm179/cn/actresses/%E5%88%9D%E7%BE%8E%E3%81%AA%E3%81%AE%E3%81%8B" },
        { title: "宮下玲奈", value: "dm179/cn/actresses/%E5%AE%AE%E4%B8%8B%E7%8E%B2%E5%A5%88" },
        { title: "新有菜", value: "dm58/actresses/%E6%A9%8B%E6%9C%AC%E6%9C%89%E8%8F%9C%20%28%E6%96%B0%E6%9C%89%E8%8F%9C%29" },
        { title: "新木希空", value: "dm179/cn/actresses/%E6%96%B0%E6%90%A8%E5%B8%8C%E7%A9%BA" },
        { title: "明里つumsぎ", value: "dm179/cn/actresses/%E6%98%8E%E9%87%8C%E3%81%A4%E3%82%80%E3%81%8E" },
        { title: "本庄鈴", value: "dm179/cn/actresses/%E6%9C%AC%E5%BA%84%E9%88%B4" },
        { title: "桃乃木かな", value: "dm179/cn/actresses/%E6%A1%83%E4%B9%83%E6%9C%A8%E3%81%8B%E3%81%AA" },
        { title: "桜空もも", value: "dm179/cn/actresses/%E6%A1%9C%E7%A9%BA%E3%82%82%E3%82%82" },
        { title: "楓ふうあ", value: "dm63/actresses/%E6%A5%93%E3%81%B5%E3%81%86%E3%81%82" },
        { title: "楓可憐", value: "dm38/actresses/%E6%A5%93%E5%8F%AF%E6%86%90%20%28%E7%94%B0%E4%B8%AD%E6%AA%B8%E6%AA%AC%29" },
        { title: "涼森れむ", value: "dm179/cn/actresses/%E6%B6%BC%E6%A3%AE%E3%82%8C%E3%82%80" },
        { title: "瀧本雫葉", value: "dm179/cn/actresses/%E7%80%A7%E6%9C%AC%E9%9B%AB%E8%91%89" },
        { title: "田中レ蒙", value: "dm179/cn/actresses/%E7%94%B0%E4%B8%AD%E3%83%AC%E3%83%A2%E3%83%B3" },
        { title: "相沢みなみ", value: "dm179/cn/actresses/%E7%9B%B8%E6%B2%A2%E3%81%BF%E3%81%AA%E3%81%BF" },
        { title: "神木麗", value: "dm179/cn/actresses/%E7%A5%9E%E6%9C%A8%E9%BA%97" },
        { title: "美ノ嶋めぐり", value: "dm179/cn/actresses/%E7%BE%8E%E3%83%8E%E5%B6%8B%E3%82%81%E3%81%90%E3%82%8A" },
        { title: "野々浦暖", value: "dm179/cn/actresses/%E9%87%8E%E3%80%85%E6%B5%A6%E6%9A%96" },
        { title: "青空ひかり", value: "dm179/cn/actresses/%E9%9D%92%E7%A9%BA%E3%81%B2%E3%81%8B%E3%82%8A" },
        { title: "三上悠亚", value: "dm179/cn/actresses/%E4%B8%89%E4%B8%8A%E6%82%A0%E4%BA%9A" },
        { title: "榊原萌", value: "dm179/cn/actresses/%E6%A6%8A%E5%8E%9F%E8%90%8C" },
        { title: "彩月七绪", value: "dm179/cn/actresses/%E5%BD%A9%E6%9B%AB%E4%B8%83%E7%BB%AA" },
        { title: "神宫寺奈绪", value: "dm179/cn/actresses/%E7%A5%9E%E5%AE%AB%E5%AF%BA%E5%A5%88%E7%BB%AA" },
        { title: "有村のぞみ", value: "dm179/cn/actresses/%E6%9C%A7%E6%9D%AE%E3%81%AE%E3%81%9E%E3%81%BF" }
    ];
}

function getGenreOptions() {
    return [
        { title: "高清", value: "cn/genres/%E9%AB%98%E6%B8%85" },
        { title: "独家", value: "cn/genres/%E7%8B%AC%E5%AE%B6" },
        { title: "中出", value: "cn/genres/%E4%B8%AD%E5%87%BA" },
        { title: "单体作品", value: "cn/genres/%E5%8D%95%E4%BD%93%E4%BD%9C%E5%93%81" },
        { title: "巨乳", value: "cn/genres/%E5%B7%A8%E4%B9%B3" },
        { title: "人妻", value: "cn/genres/%E4%BA%BA%E5%A6%BB" },
        { title: "熟女", value: "cn/genres/%E7%86%9F%E5%A5%B3" },
        { title: "素人", value: "cn/genres/%E7%B4%A0%E4%BA%BA" },
        { title: "美少女", value: "cn/genres/%E7%BE%8E%E5%B0%91%E5%A5%B3" },
        { title: "口交", value: "cn/genres/%E5%8F%A3%E4%BA%A4" },
        { title: "无码流出", value: "cn/genres/%E6%97%A0%E7%A0%81%E6%B5%81%E5%87%BA" }
    ];
}

function getMakerOptions() {
    return [
        { title: "Moody's", value: "cn/makers/Moody%27s" },
        { title: "Prestige", value: "cn/makers/Prestige" },
        { title: "Madonna", value: "cn/makers/Madonna" },
        { title: "S1", value: "cn/makers/S1" },
        { title: "SOD", value: "cn/makers/SOD" },
        { title: "IdeaPocket", value: "cn/makers/IdeaPocket" }
    ];
}


// =================================================================
// 4. 基础依赖底层通用辅助工具函数
// =================================================================

function resolveUrl(path) {
    if (!path) return "";
    let cleaned = String(path).replace(/(https?:\/\/[^\/]+)?\/dm\d+\//, "$1/").replace(/^dm\d+\//, "");
    if (cleaned.startsWith("http")) return cleaned;
    return `${BASE_URL}${cleaned.startsWith("/") ? cleaned : `/${cleaned}`}`;
}

function resolveAvatarImageUrl(path) {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${AVATAR_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function appendUrlParams(url, page = 1, sort_by = "", filters = "") {
    const params = [];
    if (filters) params.push(`filters=${encodeURIComponent(filters)}`);
    if (sort_by) params.push(`sort=${encodeURIComponent(sort_by)}`);
    if (page > 1) params.push(`page=${page}`);
    if (!params.length) return url;
    return url + (url.includes("?") ? "&" : "?") + params.join("&");
}

function buildListUrl(endpoint, page = 1, filters = "", sort_by = "") {
    return appendUrlParams(resolveUrl(endpoint), page, sort_by, filters);
}

function resolveEndpointByPrimaryCategory(primaryCategory, endpoint) {
    if (primaryCategory === "recent_updates" || primaryCategory === "dm539/cn/new") {
        return "cn/new";
    }
    return endpoint || "cn/release";
}

function isRecentUpdatesCategory(primaryCategory) {
    return primaryCategory === RECENT_UPDATES_CATEGORY || primaryCategory === RECENT_UPDATES_ENDPOINT;
}

function extractVideoId(href) {
    if (!href) return "";
    const cleanHref = href.split('#')[0].split('?')[0];
    const slug = cleanHref.split('/').pop() || "";
    return slug.replace(/-(uncensored-leak|chinese-subtitle)$/, "").toUpperCase();
}

function buildJavTrailersId(text) {
    const raw = String(text || "").toUpperCase();
    const match = raw.match(/\b([A-Z0-9]+)-?(\d{2,5})\b/);
    if (!match) return "";
    return `${match[1].toLowerCase()}${match[2].padStart(5, "0")}`;
}

function unpackPacker(html) {
    if (!html) return "";
    let unpackedResults = [];
    const packerRegex = /eval\s*\(\s*function\s*\(\s*p\s*,\s*a\s*,\s*c\s*,\s*k\s*,\s*e\s*,\s*d\s*\)[\s\S]+?\}\s*\(\s*'([\s\S]+?)'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*'([\s\S]+?)'[\s\S]+?\)/g;
    
    let match;
    while ((match = packerRegex.exec(html)) !== null) {
        try {
            let p = match[1].replace(/\\'/g, "'");
            let a = parseInt(match[2], 10);
            let c = parseInt(match[3], 10);
            k = match[4].split('|');
            
            let cIdx = c;
            while (cIdx > 0) {
                cIdx--;
                if (k[cIdx]) {
                    let w = cIdx.toString(36);
                    let reg = new RegExp('\\b' + w + '\\b', 'g');
                    p = p.replace(reg, k[cIdx]);
                }
            }
            unpackedResults.push(p);
        } catch (err) {}
    }
    return unpackedResults.join('\n');
}


// =================================================================
// 5. 跨模块流媒体提供者流接口与播放轨精确排重中心
// =================================================================

function getText(value) { return String(value || "").trim(); }

function extractSearchCode(text, options = {}) {
    const allowPureNumeric = options.allowPureNumeric !== false;
    const s = getText(text).toUpperCase();
    if (!s) return "";
    const normalized = s.replace(/\./g, " ").replace(/_/g, "-").replace(/\s+/g, " ").trim();
    const patterns = [
        /\bFC2(简介)?(?:[- ]?PPV)?[- ]?\d{5,8}\b/,
        /\bCARIB[- ]?\d{6,8}\b/,
        /\b1PONDO[- ]?\d{6,8}\b/,
        /\bHEYZO[- ]?\d{3,6}\b/,
        /\bT28[- ]?\d{6,8}\b/,
        /\b(?:S2M|MIAA|SSNI|SNIS|IPX|IPZZ|SSIS|JUQ|MIDE|MIDV|STARS|ABW|RKI|DVAJ|WANZ|LULU|DLDSS|VRTM|SDMU|SDDE|MKMP|HMN|MUDR|ADN|CAWD|PPPE|PRED|MGR|SHKD|MXGS|FSDSS|JUL|KTB|MIAB|GVH|MIMK|JUY|JUTA|IDBD|HND|DASD|CLO|BF|HONB|ROE|CEMD|MIUM|NITR|RCTD|RCT|IPVR|MIBD|JUR|JURD|SOE|ORE|PYO|START|NSFS)\s*[-_ ]?\d{2,6}[A-Z]?(?:[-_ ]?[A-Z]{0,4})?\b/,
        /\b[A-Z]{2,10}\s*[-_ ]?\d{2,8}[A-Z]?\b/
    ];
    if (allowPureNumeric) patterns.push(/\b\d{6,8}\b/);
    for (const reg of patterns) {
        const match = normalized.match(reg);
        if (match?.[0]) return match[0].replace(/\s+/g, "").replace(/_/g, "-").replace(/-+/g, "-").toUpperCase();
    }
    return "";
}

function collectStringValues(value, depth = 0, out = [], visited = new Set()) {
    if (value === null || value === undefined || depth > 5) return out;
    const valueType = typeof value;
    if (valueType === "string" || valueType === "number") {
        const text = String(value).trim();
        if (text) out.push(text);
        return out;
    }
    if (valueType !== "object" || visited.has(value)) return out;
    visited.add(value);
    if (Array.isArray(value)) {
        for (const item of value) collectStringValues(item, depth + 1, out, visited);
        return out;
    }
    for (const key of Object.keys(value)) collectStringValues(value[key], depth + 1, out, visited);
    return out;
}

function extractCodeFromParams(params = {}) {
    const priorityCandidates = [
        params.code, params.videoId, params.number, params.fileName, params.filename, params.title
    ];
    for (const value of priorityCandidates) {
        const code = extractSearchCode(value, { allowPureNumeric: true });
        if (code) return code;
    }
    const allStrings = collectStringValues(params);
    for (const value of allStrings) {
        const code = extractSearchCode(value, { allowPureNumeric: false });
        if (code) return code;
    }
    return "";
}

async function loadResource(params = {}) {
    try {
        const code = extractCodeFromParams(params);
        if (!code) return [];

        let cached = VIDEO_URL_CACHE[code.toUpperCase()];
        let videoUrl = (cached && (Date.now() - cached.timestamp < CACHE_TTL)) ? cached.url : null;
        let currentReferer = cached?.referer || `${BASE_URL}/cn/search/${encodeURIComponent(code.trim())}`;
        let detailHtml = "";

        if (!videoUrl) {
            let searchUrl = `${BASE_URL}/cn/search/${encodeURIComponent(code.trim())}`;
            const searchHtml = await (await fetch(searchUrl, { headers: HEADERS })).text();
            const firstMatch = searchHtml.match(/<a\s+href="([^"]+)"\s+class="text-secondary\s+group-hover:text-primary\s+font-bold/i);
            
            if (firstMatch?.[1]) {
                currentReferer = firstMatch[1];
                detailHtml = await (await fetch(currentReferer, { headers: HEADERS })).text();
                const m3u8Match = detailHtml.match(/source\s*:\s*'(https?:\/\/[^']+\.m3u8[^']*)'/i);
                if (m3u8Match?.[1]) videoUrl = m3u8Match[1];
            }
        }

        if (videoUrl) {
            VIDEO_URL_CACHE[code.toUpperCase()] = { url: videoUrl, referer: currentReferer, timestamp: Date.now() };
            return [{
                name: `MissAV - ${code}`,
                url: videoUrl,
                headers: { ...HEADERS, "Referer": currentReferer }
            }];
        }
        return [];
    } catch (err) { return []; }
}


// =================================================================
// 6. 核心列表解析器
// =================================================================

async function parseList(html) {
    const results = [];
    const videoItemRegex = /<div\s+class="col-span-1\s+relative\s+group">([\s\S]*?)<\/div>/g;
    let match;

    while ((match = videoItemRegex.exec(html)) !== null) {
        const itemHtml = match[1];
        const titleMatch = itemHtml.match(/<a\s+href="[^"]+"\s+class="text-secondary\s+group-hover:text-primary\s+font-bold[^>]*>([\s\S]*?)<\/a>/i);
        const hrefMatch = itemHtml.match(/<a\s+href="([^"]+)"\s+class="text-secondary\s+group-hover:text-primary\s+font-bold/i);
        const posterMatch = itemHtml.match(/<img\s+src="([^"]+)"/i);

        if (titleMatch && hrefMatch) {
            results.push({
                title: titleMatch[1].trim(),
                poster: posterMatch?.[1] || "",
                link: hrefMatch[1],
                videoId: extractVideoId(hrefMatch[1])
            });
        }
    }
    return results;
}


// =================================================================
// 7. 顶层公开函数集
// =================================================================

async function loadRecentUpdates(params) {
    const url = buildListUrl(RECENT_UPDATES_ENDPOINT, params.page, "", params.sort_by);
    const html = await (await fetch(url, { headers: HEADERS })).text();
    return parseList(html);
}

async function loadList(params) {
    const url = buildListUrl(params.endpoint, params.page, params.filters, params.sort_by);
    const html = await (await fetch(url, { headers: HEADERS })).text();
    return parseList(html);
}

async function searchList(params) {
    const url = appendUrlParams(`${BASE_URL}/cn/search/${encodeURIComponent(params.keyword)}`, params.page, params.sort_by);
    const html = await (await fetch(url, { headers: HEADERS })).text();
    return parseList(html);
}

async function searchGlobal(params) {
    return searchList(params);
}
