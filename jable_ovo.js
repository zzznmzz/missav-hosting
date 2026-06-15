//Original Author:nibiru
WidgetMetadata = {
  id: "jable_int",
  title: "Jable",
  description: "Jable分类浏览.全局搜索.标签.女优.预告.推荐.聚合",
  author: "nibiru｜MakkaPakka｜廿二日",
  site: "https://jable.tv",
  version: "2.5.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 60,
  modules: [
    // \u641c\u7d22\u6a21\u5757
    {
      id: "search",
      title: "\u641c\u7d22",
      description: "\u641c\u7d22",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 3600,
      params: [
        {
          name: "keyword",
          title: "\u5173\u952e\u8bcd",
          type: "input",
          description: "\u5173\u952e\u8bcd",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: [
            { title: "\u6700\u9ad8\u76f8\u5173", value: "" },
            { title: "\u6700\u591a\u89c2\u770b", value: "video_viewed" },
            { title: "\u8fd1\u671f\u6700\u4f73", value: "post_date_and_popularity" },
            { title: "\u6700\u8fd1\u66f4\u65b0", value: "post_date" },
            { title: "\u6700\u591a\u6536\u85cf", value: "most_favourited" },
          ],
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },
    // \u70ed\u95e8\u6a21\u5757
    {
      id: "hot",
      title: "\u70ed\u95e8",
      description: "\u70ed\u95e8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://jable.tv/hot/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: [
            { title: "\u4eca\u65e5\u70ed\u95e8", value: "video_viewed_today" },
            { title: "\u672c\u5468\u70ed\u95e8", value: "video_viewed_week" },
            { title: "\u672c\u6708\u70ed\u95e8", value: "video_viewed_month" },
            { title: "\u6240\u6709\u65f6\u95f4", value: "video_viewed" },
          ],
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },
    // \u6700\u65b0\u6a21\u5757
    {
      id: "newRelease",
      title: "\u6700\u65b0",
      description: "\u6700\u65b0\u4e0a\u5e02\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://jable.tv/new-release/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: [
            { title: "\u6700\u65b0\u53d1\u5e03", value: "latest-updates" },
            { title: "\u6700\u591a\u89c2\u770b", value: "video_viewed" },
            { title: "\u6700\u591a\u6536\u85cf", value: "most_favourited" },
          ],
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },

    // \u6700\u8fd1\u66f4\u65b0\u6a21\u5757
    {
      id: "latest",
      title: "\u6700\u8fd1\u66f4\u65b0",
      description: "\u6700\u8fd1\u66f4\u65b0\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://jable.tv/latest-updates/?mode=async&function=get_block&block_id=list_videos_latest_videos_list",
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },

    // \u4e2d\u6587\u6a21\u5757
    {
      id: "chinese",
      title: "\u4e2d\u6587",
      description: "\u4e2d\u6587\u5b57\u5e55\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://jable.tv/categories/chinese-subtitle/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: [
            { title: "\u6700\u8fd1\u66f4\u65b0", value: "post_date" },
            { title: "\u6700\u591a\u89c2\u770b", value: "video_viewed" },
            { title: "\u6700\u591a\u6536\u85cf", value: "most_favourited" },
          ],
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },
    // \u5973\u4f18\u6a21\u5757
    {
      id: "models",
      title: "\u5973\u4f18",
      description: "\u6309\u5973\u4f18\u5206\u7c7b\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u9009\u62e9\u5973\u4f18",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: ["post_date","video_viewed","most_favourited"],
            },
          enumOptions: [
            { 
              title: "\u4e09\u4e0a\u60a0\u4e9a", 
              value: "https://jable.tv/s1/models/yua-mikami/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u696a\u53ef\u601c", 
              value: "https://jable.tv/models/86b2f23f95cc485af79fe847c5b9de8d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5c0f\u91ce\u5915\u5b50", 
              value: "https://jable.tv/models/2958338aa4f78c0afb071e2b8a6b5f1b/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5927\u69fb\u54cd", 
              value: "https://jable.tv/models/hibiki-otsuki/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u85e4\u68ee\u91cc\u7a57", 
              value: "https://jable.tv/models/riho-fujimori/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "JULIA", 
              value: "https://jable.tv/models/julia/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u660e\u91cc\u4337", 
              value: "https://jable.tv/models/tsumugi-akari/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6843\u4e43\u6728\u9999\u5948", 
              value: "https://jable.tv/models/momonogi-kana/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6c34\u6237\u9999\u5948", 
              value: "https://jable.tv/models/kana-mito/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7be0\u7530\u3086\u3046", 
              value: "https://jable.tv/s1/models/shinoda-yuu/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u67ab\u53ef\u601c", 
              value: "https://jable.tv/models/kaede-karen/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5409\u6ca2\u660e\u6b69", 
              value: "https://jable.tv/models/akiho-yoshizawa/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7fbd\u6708\u5e0c", 
              value: "https://jable.tv/models/21e145d3f4d7c8c818fc7eae19342a7a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7f8e\u8c37\u6731\u91cc", 
              value: "https://jable.tv/s1/models/mitani-akari/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5c71\u5cb8\u9022\u82b1", 
              value: "https://jable.tv/models/yamagishi-aika/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4f50\u4f50\u6728\u660e\u5e0c", 
              value: "https://jable.tv/models/sasaki-aki/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u795e\u6728\u9e97", 
              value: "https://jable.tv/models/ef9b1ab9a21b58d6ee4d7d97ab883288/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e03\u6cfd\u7f8e\u4e9a", 
              value: "https://jable.tv/models/nanasawa-mia/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u702c\u6238\u74b0\u5948", 
              value: "https://jable.tv/models/1a71be5a068c6f9e00fac285b31019f9/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7022\u672c\u96eb\u8449", 
              value: "https://jable.tv/models/7ffb432871f53eda0b4d80be34fff86a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u3055\u304f\u3089\u308f\u304b\u306a", 
              value: "https://jable.tv/models/0b96db26c8b192b0a54e24d878380765/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5f69\u6708\u4e03\u7dd2", 
              value: "https://jable.tv/models/e82b22cd3275fd0e569147d82fa1999d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u9234\u4e43\u30a6\u30c8", 
              value: "https://jable.tv/models/559904d22cbf03091f790258aa4e9b8c/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e03\u30c4\u68ee\u308a\u308a", 
              value: "https://jable.tv/models/9ed214792a2144520430dd494c93f651/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e03\u5d8b\u821e", 
              value: "https://jable.tv/models/6ab2e738a33eafc3db27cab0b83cf5cd/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u516b\u639b\u3046\u307f", 
              value: "https://jable.tv/models/83397477054d35cd07e2c48685335a86/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u516b\u6728\u5948\u3005", 
              value: "https://jable.tv/models/3610067a1d725dab8ee8cd3ffe828850/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5bae\u4e0b\u73b2\u5948", 
              value: "https://jable.tv/models/b435825a4941964079157dd2fc0a8e5a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5c0f\u6e4a\u3088\u3064\u8449", 
              value: "https://jable.tv/models/ff8ce98f2419126e00a90bc1f3385824/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5c0f\u91ce\u516d\u82b1", 
              value: "https://jable.tv/models/0478c4db9858c4e6c60af7fbf828009a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5de5\u85e4\u3086\u3089", 
              value: "https://jable.tv/models/e7ba849893aa7ce8afcc3003a4075c20/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u672c\u5e84\u9234", 
              value: "https://jable.tv/models/honjou-suzu/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u685c\u7a7a\u3082\u3082", 
              value: "https://jable.tv/models/sakura-momo/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6953\u3075\u3046\u3042", 
              value: "https://jable.tv/models/f88e49c4c1adb0fd1bae71ac122d6b82/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6cb3\u5317\u5f69\u4f3d", 
              value: "https://jable.tv/models/saika-kawakita2/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u77e2\u57dc\u611b\u8309", 
              value: "https://jable.tv/models/0903b1921df6c616c29041be11c3d2e8/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u77f3\u5ddd\u6faa", 
              value: "https://jable.tv/models/a855133fa44ca5e7679cac0a0ab7d1cb/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7f8e\u30ce\u5d8b\u3081\u3050\u308a", 
              value: "https://jable.tv/models/d1ebb3d61ee367652e6b1f35b469f2b6/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u91ce\u3005\u6d66\u6696", 
              value: "https://jable.tv/models/6b0ce5c4944edce04ab48d4bb608fd4c/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u9752\u7a7a\u3072\u304b\u308a", 
              value: "https://jable.tv/models/4c7a2cfa27b343e3e07659650400f61d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u65b0\u3042\u308a\u306a", 
              value: "https://jable.tv/models/e763382dc86aa703456d964ca25d0e8b/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u672a\u6b69\u306a\u306a", 
              value: "https://jable.tv/models/c9535c2f157202cd0e934d62ef582e2e/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u51ea\u307ひかる", 
              value: "https://jable.tv/models/91fca8d824e07075d09de0282f6e9076/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e09\u5bae\u306つばき", 
              value: "https://jable.tv/models/f0e279c00b2a7e1aca2ef4d31d611020/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u85cd\u82bd\u307みずき", 
              value: "https://jable.tv/models/679c69a5488daa35a5544749b75556c6/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u306つばさ舞", 
              value: "https://jable.tv/models/0d7709a62cc199f923107c120d30893b/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u671d\u65e5\u308りお", 
              value: "https://jable.tv/models/ad0935cfa1449ab126dde2b0c0929ad0/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u65e5\u4e0b\u90e8\u52a0\u5948", 
              value: "https://jable.tv/models/dfea76fd68bc52e0888a78e0fedce073/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5f13\u4e43\u308りむ", 
              value: "https://jable.tv/models/06c22ca98d8ec82963046ad17e0fad4a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u590f\u5e0c\u307まろん", 
              value: "https://jable.tv/models/1c0f1b4475962e88b541f9f0db1584fe/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6c34\u5ddd\u30b9\u30df\u30ec", 
              value: "https://jable.tv/models/7415fde573b12a4e87e83ef33ea354d5/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5b9f\u6d5c\u307みき", 
              value: "https://jable.tv/models/299c2d256b9c509f80302d261ea0b5a9/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5f25\u751f\u307みずき", 
              value: "https://jable.tv/s1/models/mizuki-yayoi/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5929\u5ddd\u305そら", 
              value: "https://jable.tv/models/3e69d39a117c2d25a407dfd57e204e48/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u65b0\u540d\u304あみん", 
              value: "https://jable.tv/models/0dba31ccef2f1fca3563c56dbcf3fa7d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5c0f\u6cf泽菜穗", 
              value: "https://jable.tv/models/2ec30dc8e35906a29fe5c8f5b97e6c89/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e09\u539f\u307ほのか", 
              value: "https://jable.tv/models/mihara-honoka/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6dbc\u68ee\u308れむ", 
              value: "https://jable.tv/models/7cadf3e484f607dc7d0f1c0e7a83b007/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u68ee\u65e5\u5411\u5b50", 
              value: "https://jable.tv/models/1a7543f89b125421e489d98de472ebf4/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u91d1\u677e\u5b63\u6b69", 
              value: "https://jable.tv/models/48ace5552227a2a4f867af73efa18f2d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }
          ],
          value: "https://jable.tv/s1/models/yua-mikami/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        }
      ]
    }
  ]
};
