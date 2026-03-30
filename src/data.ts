import { Apartment, Review, Post } from './types';

export const APARTMENTS: Apartment[] = [
  // --- London (5) ---
  {
    id: 'ldn-1',
    name: 'iQ Shoreditch',
    city: '伦敦',
    location: '2 Silicon Way, London N1 6AT',
    distance: '距KCL地铁20分钟 / 距UCL地铁15分钟',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.2,
    reviewCount: 156,
    tags: ['#网红公寓', '#设施极佳', '#价格昂贵'],
    latestReview: 'iQ Shoreditch以其卓越的地理位置和现代化的设施在伦敦留学生圈内享有盛誉。该公寓紧邻Old Street地铁站，为前往伦敦大学学院（UCL）和伦敦国王学院（KCL）的学生提供了极大的通勤便利。根据多方反馈，其前台服务响应迅速，安保系统完善，是追求高品质生活体验的理想选择。',
    roomTypes: ['Studio', 'En-suite'],
    schoolDistances: { 'KCL': 20, 'UCL': 15, 'LSE': 25 },
    scores: { value: 2.5, noise: 4.0, network: 4.8, hygiene: 4.5, heating: 4.2, management: 4.6 }
  },
  {
    id: 'ldn-2',
    name: 'Chapter Spitalfields',
    city: '伦敦',
    location: '9 Frying Pan Alley, London E1 7HS',
    distance: '距LSE地铁15分钟 / 距Queen Mary地铁10分钟',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.9,
    reviewCount: 210,
    tags: ['#高层视野', '#近利物浦街', '#社交丰富'],
    latestReview: 'Chapter Spitalfields以其标志性的高层建筑和壮丽的伦敦市中心景观而闻名。作为利物浦街车站附近的顶级留学生社区，它不仅提供了极佳的交通通达性，更通过其丰富的社交空间和定期的社区活动，为住户构建了一个充满活力的国际化生活圈。',
    roomTypes: ['Studio', 'En-suite', 'One Bed'],
    schoolDistances: { 'LSE': 15, 'Queen Mary': 10, 'KCL': 20, 'UCL': 25 },
    scores: { value: 3.0, noise: 3.2, network: 4.0, hygiene: 3.8, heating: 4.0, management: 3.5 }
  },
  {
    id: 'ldn-3',
    name: 'Scape Wembley',
    city: '伦敦',
    location: 'Lakeside Way, Wembley HA9 0BU',
    distance: '距Wembley Park站步行5分钟 / 距市中心地铁25分钟',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.1,
    reviewCount: 124,
    tags: ['#性价比高', '#设施新', '#近球场'],
    latestReview: 'Scape Wembley是伦敦西北部极具性价比的留学生住宿选择。公寓设施新颖且维护良好，周边生活配套设施如超市、餐厅及温布利球场购物中心均近在斥尺。虽然距离市中心有一定距离，但通过便捷的地铁网络，学生可以轻松往返于各大高校。',
    roomTypes: ['Studio', 'En-suite'],
    schoolDistances: { 'UCL': 30, 'KCL': 35, 'IC': 40 },
    scores: { value: 4.2, noise: 4.0, network: 4.5, hygiene: 4.3, heating: 4.5, management: 4.0 }
  },
  {
    id: 'ldn-4',
    name: 'Urbanest King\'s Cross',
    city: '伦敦',
    location: 'Canal Reach, London N1C 4BD',
    distance: '距UCL步行15分钟 / 距CSM步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.4,
    reviewCount: 188,
    tags: ['#位置极佳', '#安全', '#近火车站'],
    latestReview: 'Urbanest King\'s Cross坐落于伦敦核心交通枢纽，是伦敦大学学院（UCL）和中央圣马丁艺术学院（CSM）学生的理想居所。公寓以其极高的安全标准和管家式服务著称，为留学生提供了一个既便利又安心的学习生活环境。',
    roomTypes: ['Studio', 'En-suite', 'Non-En-suite'],
    schoolDistances: { 'UCL': 15, 'CSM': 5, 'KCL': 20, 'LSE': 25 },
    scores: { value: 3.5, noise: 3.8, network: 4.6, hygiene: 4.5, heating: 4.2, management: 4.7 }
  },
  {
    id: 'ldn-5',
    name: 'The Collective Old Oak',
    city: '伦敦',
    location: 'Nash House, Old Oak Ln, London NW10 6FF',
    distance: '距IC地铁25分钟',
    images: [
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.7,
    reviewCount: 95,
    tags: ['#共居空间', '#活动多', '#房间较小'],
    latestReview: 'The Collective Old Oak作为全球领先的共居空间（Co-living），为留学生提供了独特的社交型住宿体验。公寓内设有电影院、健身房及宽敞的公共厨房，极大地丰富了课余生活。尽管私人房间空间相对紧凑，但其完善的公共设施和活跃的社区氛围弥补了这一不足。',
    roomTypes: ['Studio', 'En-suite'],
    schoolDistances: { 'IC': 25, 'UCL': 35, 'KCL': 40 },
    scores: { value: 3.8, noise: 3.0, network: 4.2, hygiene: 3.6, heating: 4.0, management: 3.8 }
  },

  // --- Manchester (5) ---
  {
    id: 'man-1',
    name: 'Vita Student First Street',
    city: '曼彻斯特',
    location: '13 Jack Rosenthal St, Manchester M15 4RB',
    distance: '距曼大北校区步行10分钟 / 距市中心步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.5,
    reviewCount: 320,
    tags: ['#早餐免费', '#曼大首选', '#服务好'],
    latestReview: 'Vita Student First Street是曼彻斯特留学生公认的高端住宿标杆。公寓不仅提供每日免费早餐和高频次的社交活动，更以其卓越的管理团队和对学生需求的快速响应赢得了广泛好评。其优越的地理位置使其成为曼彻斯特大学学生的理想首选。',
    roomTypes: ['Studio'],
    schoolDistances: { 'UoM': 10, 'MMU': 15 },
    scores: { value: 3.8, noise: 3.5, network: 4.9, hygiene: 4.7, heating: 4.5, management: 4.9 }
  },
  {
    id: 'man-2',
    name: 'iQ Wilmslow Park',
    city: '曼彻斯特',
    location: '211 Hathersage Rd, Manchester M13 0JQ',
    distance: '距曼大南校区步行5分钟 / 距曼大主图书馆步行8分钟',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.8,
    reviewCount: 142,
    tags: ['#近图书馆', '#生活便利', '#设施略旧'],
    latestReview: 'iQ Wilmslow Park坐落于曼彻斯特大学南校区核心地带，紧邻主图书馆和圣玛丽医院。公寓以其极高的地理优势和成熟的生活配套，成为追求学术便利的学生们的首选。虽然建筑设施略显成熟，但其稳定的管理和便捷的交通依然使其保持着极高的入住率。',
    roomTypes: ['En-suite', 'Studio'],
    schoolDistances: { 'UoM': 5, 'MMU': 10 },
    scores: { value: 4.0, noise: 3.2, network: 4.0, hygiene: 3.5, heating: 3.8, management: 3.6 }
  },
  {
    id: 'man-3',
    name: 'The Grafton',
    city: '曼彻斯特',
    location: '60 Grafton St, Manchester M13 9NU',
    distance: '距曼大南校区步行3分钟',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.0,
    reviewCount: 86,
    tags: ['#位置无敌', '#安静', '#价格适中'],
    latestReview: 'The Grafton公寓以其无可比拟的地理位置优势，成为曼彻斯特大学南校区学生的热门选择。公寓紧邻主校区，步行即可到达各大教学楼及图书馆。其周边成熟的生活配套和安静的居住环境，为追求高效学习生活的学生提供了一个理想的落脚点。',
    roomTypes: ['En-suite', 'Non-En-suite'],
    schoolDistances: { 'UoM': 3, 'MMU': 8 },
    scores: { value: 4.2, noise: 4.0, network: 3.8, hygiene: 3.8, heating: 4.0, management: 3.8 }
  },
  {
    id: 'man-4',
    name: 'Lambert & Fairfield House',
    city: '曼彻斯特',
    location: 'Granby Row, Manchester M60 7HB',
    distance: '距曼大北校区步行2分钟 / 距Piccadilly火车站步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.2,
    reviewCount: 115,
    tags: ['#近火车站', '#北校区首选', '#社交好'],
    latestReview: 'Lambert & Fairfield House作为曼彻斯特北校区的标志性学生公寓，以其极佳的交通便利性（紧邻Piccadilly火车站）和现代化的社交设施而著称。公寓内部空间开阔，公共区域设计前卫，是追求便捷城市生活和活跃社交氛围的学生们的理想之选。',
    roomTypes: ['Studio', 'En-suite'],
    schoolDistances: { 'UoM': 2, 'MMU': 10 },
    scores: { value: 4.0, noise: 3.5, network: 4.2, hygiene: 4.0, heating: 4.2, management: 4.0 }
  },
  {
    id: 'man-5',
    name: 'Sir Charles Groves Hall',
    city: '曼彻斯特',
    location: 'Booth St W, Manchester M15 6PF',
    distance: '距曼大主校区步行5分钟 / 距RNCM步行1分钟',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.6,
    reviewCount: 74,
    tags: ['#位置好', '#价格便宜', '#设施一般'],
    latestReview: '价格在曼大周边算很便宜了，位置也很好，但是房间确实比较旧。',
    roomTypes: ['En-suite', 'Non-En-suite'],
    schoolDistances: { 'UoM': 5, 'MMU': 10 },
    scores: { value: 4.5, noise: 3.0, network: 3.5, hygiene: 3.2, heating: 3.5, management: 3.2 }
  },

  // --- Edinburgh (5) ---
  {
    id: 'edi-1',
    name: 'iQ Elliott House',
    city: '爱丁堡',
    location: '8-10 Hillside Crescent, Edinburgh EH7 5EA',
    distance: '距爱丁堡大学GS校区步行15分钟',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.0,
    reviewCount: 92,
    tags: ['#环境安静', '#近卡尔顿山'],
    latestReview: 'iQ Elliott House位于爱丁堡卡尔顿山脚下，环境清幽且充满苏格兰风情。公寓不仅为爱丁堡大学的学生提供了极佳的居住环境，更通过其现代化的内部设施和专业的管理服务，确保了住户在享受自然美景的同时，也能拥有高效的学习和生活体验。',
    roomTypes: ['Studio', 'En-suite'],
    schoolDistances: { 'UoE': 15 },
    scores: { value: 3.5, noise: 4.5, network: 4.0, hygiene: 4.2, heating: 4.5, management: 4.0 }
  },
  {
    id: 'edi-2',
    name: 'Shrubhill',
    city: '爱丁堡',
    location: '7 Shrubhill Walk, Edinburgh EH7 4RB',
    distance: '距爱丁堡大学GS校区公交15分钟',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.2,
    reviewCount: 68,
    tags: ['#设施新', '#近超市', '#安静'],
    latestReview: '公寓很新，楼下就有Lidl和Sainsbury\'s，生活非常方便。',
    roomTypes: ['En-suite', 'Studio'],
    schoolDistances: { 'UoE': 15 },
    scores: { value: 4.0, noise: 4.2, network: 4.5, hygiene: 4.3, heating: 4.5, management: 4.2 }
  },
  {
    id: 'edi-3',
    name: 'The Brae',
    city: '爱丁堡',
    location: '16-18 Bothwell St, Edinburgh EH7 5PU',
    distance: '距爱丁堡大学GS校区公交12分钟',
    images: [
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.3,
    reviewCount: 54,
    tags: ['#高品质', '#服务好'],
    latestReview: 'The Brae公寓以其高品质的居住体验和细致入微的管家式服务而著称。公寓房间装修风格极具格调，采光充足且居住舒适度极高。前台团队热情专业，能快速响应住户的各类需求。公寓内部设有丰富的社交空间和自习区域，为住户营造了一个既能专注学术又能享受生活的温馨社区，是爱丁堡留学生追求精致生活的理想场所。',
    roomTypes: ['Studio'],
    schoolDistances: { 'UoE': 12 },
    scores: { value: 3.8, noise: 4.5, network: 4.6, hygiene: 4.5, heating: 4.6, management: 4.7 }
  },
  {
    id: 'edi-4',
    name: 'Potterrow',
    city: '爱丁堡',
    location: 'Potterrow, Edinburgh EH8 9AL',
    distance: '距爱丁堡大学GS校区步行2分钟',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.9,
    reviewCount: 110,
    tags: ['#位置极佳', '#近图书馆', '#价格贵'],
    latestReview: '就在主校区中心，上课自习无敌方便。但是价格也是真的贵。',
    roomTypes: ['En-suite', 'Non-En-suite'],
    schoolDistances: { 'UoE': 2 },
    scores: { value: 2.8, noise: 3.5, network: 4.2, hygiene: 4.0, heating: 4.2, management: 3.8 }
  },
  {
    id: 'edi-5',
    name: 'Salisbury Court',
    city: '爱丁堡',
    location: 'St Leonard\'s Ln, Edinburgh EH8 9SH',
    distance: '距爱丁堡大学GS校区步行8分钟',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.1,
    reviewCount: 82,
    tags: ['#近体育馆', '#性价比高'],
    latestReview: '离学校体育馆很近，喜欢运动的同学首选。价格相对合理。',
    roomTypes: ['En-suite', 'Studio'],
    schoolDistances: { 'UoE': 8 },
    scores: { value: 4.2, noise: 3.8, network: 4.0, hygiene: 4.0, heating: 4.2, management: 4.0 }
  },

  // --- Glasgow (5) ---
  {
    id: 'gla-1',
    name: 'True Glasgow West End',
    city: '格拉斯哥',
    location: '100 Kelvinhaugh St, Glasgow G3 8PX',
    distance: '距格大步行10分钟',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.3,
    reviewCount: 145,
    tags: ['#滑梯公寓', '#设施超全', '#社交达人'],
    latestReview: 'True Glasgow West End以其标志性的室内滑梯和极具设计感的公共空间，在格拉斯哥留学生中拥有极高的人气。公寓致力于打造一个充满活力和社交机会的居住社区，不仅拥有顶级的健身房和自习室，更通过其独特的品牌文化，为住户提供了一个超越传统住宿的社交平台。',
    roomTypes: ['Studio', 'En-suite'],
    schoolDistances: { 'UoG': 10 },
    scores: { value: 4.0, noise: 3.8, network: 4.5, hygiene: 4.3, heating: 4.2, management: 4.5 }
  },
  {
    id: 'gla-2',
    name: 'Vita Student West End',
    city: '格拉斯哥',
    location: 'Kelvinhaugh St, Glasgow G3 8PX',
    distance: '距格大步行10分钟',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.6,
    reviewCount: 112,
    tags: ['#早餐免费', '#高品质', '#服务好'],
    latestReview: 'Vita Student West End延续了Vita品牌一贯的高端水准，为格拉斯哥留学生提供了顶级的居住体验。公寓每日提供丰盛的免费早餐，房间装修现代且充满质感。其位于格拉斯哥西区的核心位置，不仅方便学生前往格拉斯哥大学，更能让他们轻松享受西区独特的文化和商业氛围。公寓的管理服务卓越，是追求高品质生活的学子的首选。',
    roomTypes: ['Studio'],
    schoolDistances: { 'UoG': 10 },
    scores: { value: 3.5, noise: 4.2, network: 4.9, hygiene: 4.7, heating: 4.5, management: 4.8 }
  },
  {
    id: 'gla-3',
    name: 'iQ Elgin Place',
    city: '格拉斯哥',
    location: '240 Bath St, Glasgow G2 4JW',
    distance: '距格大地铁15分钟 / 距市中心步行2分钟',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.1,
    reviewCount: 88,
    tags: ['#市中心', '#设施新', '#近地铁'],
    latestReview: 'iQ Elgin Place位于格拉斯哥市中心的Bath Street，地理位置极其优越。公寓周边汇集了各类购物中心、餐厅 and 娱乐设施，生活极其便利。通过便捷的地铁网络，住户可以快速到达格拉斯哥大学等各大校区。公寓设施新颖，公共空间设计感十足，为住户提供了一个既能享受城市繁华又能专注学习的理想环境。',
    roomTypes: ['Studio', 'En-suite'],
    schoolDistances: { 'UoG': 15 },
    scores: { value: 3.8, noise: 3.5, network: 4.5, hygiene: 4.2, heating: 4.2, management: 4.0 }
  },
  {
    id: 'gla-4',
    name: 'Bridge House',
    city: '格拉斯哥',
    location: 'Old Dumbarton Rd, Glasgow G3 8RB',
    distance: '距格大步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.8,
    reviewCount: 65,
    tags: ['#位置好', '#性价比高'],
    latestReview: 'Bridge House公寓以其紧邻格拉斯哥大学主校区的地理优势而备受青睐。公寓位于西区，周边环境优美且充满学术氛围。房间租金在当地极具竞争力，非常适合追求高性价比和通勤便利的学生。公寓的管理团队热情周到，内部设施实用且维护良好，为住户提供了一个既便利又安心的学习生活环境。',
    roomTypes: ['En-suite', 'Non-En-suite'],
    schoolDistances: { 'UoG': 5 },
    scores: { value: 4.5, noise: 3.2, network: 3.8, hygiene: 3.5, heating: 4.0, management: 3.5 }
  },
  {
    id: 'gla-5',
    name: 'Kelvin Court',
    city: '格拉斯哥',
    location: 'Kelvinhaugh St, Glasgow G3 8NX',
    distance: '距格大步行12分钟',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.7,
    reviewCount: 72,
    tags: ['#近超市', '#安静'],
    latestReview: 'Kelvin Court公寓周边生活配套极其成熟，紧邻大型Tesco超市，极大地便利了住户的日常起居。公寓环境安静，非常适合追求高效率学习的学生。房间内部空间合理，采光良好。其位于格拉斯哥西区的核心地带，不仅方便学生通勤，也为他们提供了一个宁静且舒适的居住空间，是追求平衡学习与生活的理想选择。',
    roomTypes: ['En-suite', 'Studio'],
    schoolDistances: { 'UoG': 12 },
    scores: { value: 4.0, noise: 4.0, network: 3.5, hygiene: 3.4, heating: 3.8, management: 3.5 }
  },

  // --- Newcastle (5) ---
  {
    id: 'ncl-1',
    name: 'Vita Student Strawberry Place',
    city: '纽卡斯尔',
    location: 'Strawberry Pl, Newcastle upon Tyne NE1 4SF',
    distance: '距纽大步行5分钟 / 距纽卡主场1分钟',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.6,
    reviewCount: 88,
    tags: ['#位置极佳', '#高品质'],
    latestReview: 'Vita Student Strawberry Place坐落于纽卡斯尔联队主场圣詹姆斯公园球场旁，地理位置无与伦比。作为纽卡斯尔顶尖的高端学生公寓，它不仅为住户提供了现代化的居住环境，更通过其卓越的服务（如每日免费早餐、私人健身房）和丰富的社交活动，为留学生打造了一个高品质的家。其极佳的通勤便利性，使其成为纽卡斯尔大学学生的理想首选。',
    roomTypes: ['Studio'],
    schoolDistances: { 'NCL': 5 },
    scores: { value: 3.5, noise: 4.0, network: 4.8, hygiene: 4.6, heating: 4.5, management: 4.8 }
  },
  {
    id: 'ncl-2',
    name: 'The View',
    city: '纽卡斯尔',
    location: 'Gallowgate, Newcastle upon Tyne NE1 4SG',
    distance: '距纽大步行2分钟 / 距商学院步行1分钟',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.4,
    reviewCount: 120,
    tags: ['#近商学院', '#地标建筑'],
    latestReview: 'The View公寓作为纽卡斯尔的地标性建筑，以其紧邻纽卡斯尔大学商学院的地理优势而闻名。公寓高层房间视野开阔，可以俯瞰整个城市的壮丽景色。房间内部设施先进，设计风格现代。其优越的位置让商学院的学生能享受极致的通勤便利，是追求高效学术生活和优质居住环境的学生们的理想之选。',
    roomTypes: ['En-suite', 'Studio'],
    schoolDistances: { 'NCL': 2 },
    scores: { value: 3.2, noise: 3.8, network: 4.5, hygiene: 4.2, heating: 4.2, management: 4.0 }
  },
  {
    id: 'ncl-3',
    name: 'iQ Collingwood',
    city: '纽卡斯尔',
    location: 'Collingwood St, Newcastle upon Tyne NE1 1JF',
    distance: '距纽大步行15分钟 / 距火车站步行2分钟',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.0,
    reviewCount: 64,
    tags: ['#近火车站', '#社交好'],
    latestReview: 'iQ Collingwood公寓地理位置优越，紧邻纽卡斯尔火车站，为住户提供了极佳的交通便利性。公寓内部设施新颖，公共空间设计感十足，营造了一个充满活力的社交氛围。其专业的管理团队和高效的服务，确保了住户在纽卡斯尔能享受到安心且便捷的留学生活。对于那些喜欢探索周边城市和追求现代生活方式的学生来说，这里是最佳选择。',
    roomTypes: ['Studio', 'En-suite'],
    schoolDistances: { 'NCL': 15 },
    scores: { value: 4.0, noise: 3.2, network: 4.2, hygiene: 4.0, heating: 4.0, management: 4.2 }
  },
  {
    id: 'ncl-4',
    name: 'Leazes Terrace',
    city: '纽卡斯尔',
    location: 'Leazes Terrace, Newcastle upon Tyne NE1 4LY',
    distance: '距纽大步行3分钟',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.5,
    reviewCount: 45,
    tags: ['#古建筑', '#位置好', '#设施旧'],
    latestReview: 'Leazes Terrace公寓坐落于一座极具历史底蕴的受保护建筑内，为住户提供了一个独特且充满文化气息的居住环境。公寓紧邻纽卡斯尔大学主校区，地理位置极其优越。虽然内部设施保留了古典风格，但经过现代化的维护，依然能满足留学生的基本生活需求。其独特的建筑魅力和无与伦比的通勤便利，使其在当地留学生群体中一直保持着独特的吸引力。',
    roomTypes: ['En-suite', 'Non-En-suite'],
    schoolDistances: { 'NCL': 3 },
    scores: { value: 4.2, noise: 3.0, network: 3.2, hygiene: 3.0, heating: 3.5, management: 3.0 }
  },
  {
    id: 'ncl-5',
    name: 'Portland Green',
    city: '纽卡斯尔',
    location: 'Shieldfield Ln, Newcastle upon Tyne NE2 1AD',
    distance: '距纽大步行15分钟 / 距Northumbria步行8分钟',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.9,
    reviewCount: 105,
    tags: ['#性价比高', '#社区大'],
    latestReview: 'Portland Green公寓群作为纽卡斯尔规模最大的学生社区之一，以其极高的性价比和成熟的社区氛围而著称。公寓提供多样化的房型选择，配套设施完善，包括大型社交区域和自习室。虽然距离纽卡斯尔大学主校区有一定步行距离，但其亲民的价格和充满活力的社区生活，使其成为许多追求实用主义和广交朋友的留学生的理想落脚点。',
    scores: { value: 4.5, noise: 3.5, network: 3.8, hygiene: 3.8, heating: 4.0, management: 3.8 }
  },

  // --- Nottingham (5) ---
  {
    id: 'not-1',
    name: 'iQ Exchange',
    city: '诺丁汉',
    location: '152-160 City Rd, Nottingham NG1 1AY',
    distance: '距诺丁汉大学公交20分钟 / 距NTU步行10分钟',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.8,
    reviewCount: 112,
    tags: ['#性价比高', '#近市中心'],
    latestReview: '价格在诺丁汉算比较亲民的，去市中心买东西很方便。',
    roomTypes: ['En-suite', 'Non-En-suite'],
    schoolDistances: { 'UoN': 20 },
    scores: { value: 4.5, noise: 3.0, network: 3.8, hygiene: 3.5, heating: 4.0, management: 3.8 }
  },
  {
    id: 'not-2',
    name: 'Vita Student Station Street',
    city: '诺丁汉',
    location: 'Station St, Nottingham NG2 3AJ',
    distance: '距诺丁汉大学公交15分钟 / 距火车站步行1分钟',
    images: [
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.6,
    reviewCount: 78,
    tags: ['#近火车站', '#高品质', '#早餐免费'],
    latestReview: '就在火车站对面，去哪都方便。Vita的品质一直很稳。',
    roomTypes: ['Studio'],
    schoolDistances: { 'UoN': 15 },
    scores: { value: 3.2, noise: 4.2, network: 4.8, hygiene: 4.7, heating: 4.5, management: 4.8 }
  },
  {
    id: 'not-3',
    name: 'Hydrogen',
    city: '诺丁汉',
    location: 'Wollaton St, Nottingham NG1 5FW',
    distance: '距NTU步行5分钟 / 距市中心步行3分钟',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.2,
    reviewCount: 94,
    tags: ['#市中心', '#设施新'],
    latestReview: '位置非常好，就在市中心。房间很现代，住着很舒服。',
    roomTypes: ['Studio', 'En-suite'],
    schoolDistances: { 'UoN': 5 },
    scores: { value: 3.8, noise: 3.5, network: 4.5, hygiene: 4.2, heating: 4.2, management: 4.0 }
  },
  {
    id: 'not-4',
    name: 'Nottingham Two',
    city: '诺丁汉',
    location: 'Midland Way, Nottingham NG7 3NY',
    distance: '距诺丁汉大学Jubilee校区步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.0,
    reviewCount: 130,
    tags: ['#近Jubilee', '#社区大'],
    latestReview: 'Jubilee校区同学的首选，走两步就到学校。社区氛围很好。',
    roomTypes: ['En-suite', 'Non-En-suite'],
    schoolDistances: { 'UoN': 5 },
    scores: { value: 4.2, noise: 3.8, network: 4.0, hygiene: 4.0, heating: 4.2, management: 4.0 }
  },
  {
    id: 'not-5',
    name: 'The Glasshouse',
    city: '诺丁汉',
    location: 'Union Rd, Nottingham NG3 1FG',
    distance: '距NTU步行8分钟',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.6,
    reviewCount: 85,
    tags: ['#近商场', '#价格适中'],
    latestReview: '就在Victoria Centre旁边，买菜逛街太方便了。设施稍微有点旧。',
    roomTypes: ['En-suite', 'Studio'],
    schoolDistances: { 'UoN': 8 },
    scores: { value: 4.0, noise: 3.0, network: 3.5, hygiene: 3.4, heating: 3.8, management: 3.5 }
  },

  // --- Leeds (5) ---
  {
    id: 'lee-1',
    name: 'Vita Student St Albans',
    city: '利兹',
    location: 'St Albans Pl, Leeds LS2 8JP',
    distance: '距利兹大学步行12分钟',
    images: [
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.4,
    reviewCount: 76,
    tags: ['#高端公寓', '#服务周到'],
    latestReview: '利兹最好的公寓之一，房间很大，采光也很好。',
    roomTypes: ['Studio'],
    schoolDistances: { 'UoL': 12 },
    scores: { value: 3.2, noise: 4.2, network: 4.7, hygiene: 4.5, heating: 4.5, management: 4.7 }
  },
  {
    id: 'lee-2',
    name: 'iQ Marsden House',
    city: '利兹',
    location: 'Burley Rd, Leeds LS3 1JZ',
    distance: '距利兹大学步行15分钟',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.9,
    reviewCount: 110,
    tags: ['#性价比高', '#社交好'],
    latestReview: '价格非常合理，楼里有很多中国留学生，大家经常一起聚餐。',
    roomTypes: ['En-suite', 'Non-En-suite'],
    schoolDistances: { 'UoL': 15 },
    scores: { value: 4.5, noise: 3.5, network: 3.8, hygiene: 3.8, heating: 4.0, management: 3.8 }
  },
  {
    id: 'lee-3',
    name: 'The Tannery',
    city: '利兹',
    location: 'Kirkstall Rd, Leeds LS3 1HS',
    distance: '距利兹大学步行18分钟',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.7,
    reviewCount: 82,
    tags: ['#安静', '#近超市'],
    latestReview: '离市中心稍微远一点，所以很安静。楼下就有大超市。',
    roomTypes: ['En-suite', 'Studio'],
    schoolDistances: { 'UoL': 18 },
    scores: { value: 4.2, noise: 4.5, network: 3.5, hygiene: 3.5, heating: 3.8, management: 3.5 }
  },
  {
    id: 'lee-4',
    name: 'Skyline',
    city: '利兹',
    location: 'St Peter\'s Square, Leeds LS9 8BE',
    distance: '距利兹大学公交15分钟 / 距市中心步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.1,
    reviewCount: 65,
    tags: ['#市中心', '#视野好'],
    latestReview: '就在市中心，逛街吃饭无敌方便。高层房间视野很棒。',
    roomTypes: ['Studio', 'One Bed'],
    schoolDistances: { 'UoL': 15 },
    scores: { value: 3.8, noise: 3.2, network: 4.2, hygiene: 4.0, heating: 4.0, management: 4.0 }
  },
  {
    id: 'lee-5',
    name: 'Concept Place',
    city: '利兹',
    location: 'Park Ln, Leeds LS3 1ES',
    distance: '距利兹大学步行10分钟',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.8,
    reviewCount: 94,
    tags: ['#位置好', '#价格适中'],
    latestReview: '离学校很近，走路去上课很方便。房间大小也合适。',
    roomTypes: ['En-suite', 'Studio'],
    schoolDistances: { 'UoL': 10 },
    scores: { value: 4.0, noise: 3.5, network: 3.8, hygiene: 3.6, heating: 4.0, management: 3.8 }
  },

  // --- Liverpool (5) ---
  {
    id: 'liv-1',
    name: 'iQ Great Newton House',
    city: '利物浦',
    location: '2 Lower Gill St, Liverpool L3 5BB',
    distance: '距利物浦大学步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.7,
    reviewCount: 134,
    tags: ['#近校园', '#老牌公寓'],
    latestReview: '位置真的没得说，就在学校边上，但是设施稍微有点旧了。',
    roomTypes: ['En-suite', 'Non-En-suite'],
    schoolDistances: { 'UoL': 5 },
    scores: { value: 4.2, noise: 3.2, network: 3.5, hygiene: 3.4, heating: 3.8, management: 3.6 }
  },
  {
    id: 'liv-2',
    name: 'Vita Student Tinlings',
    city: '利物浦',
    location: 'Victoria St, Liverpool L1 6JD',
    distance: '距利物浦大学步行15分钟 / 距市中心步行2分钟',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.6,
    reviewCount: 82,
    tags: ['#市中心', '#高品质', '#早餐免费'],
    latestReview: '就在市中心最繁华的地方，生活太方便了。Vita的品质没得挑。',
    roomTypes: ['Studio'],
    schoolDistances: { 'UoL': 15 },
    scores: { value: 3.2, noise: 4.0, network: 4.9, hygiene: 4.7, heating: 4.5, management: 4.8 }
  },
  {
    id: 'liv-3',
    name: 'The Arch',
    city: '利物浦',
    location: 'Nelson St, Liverpool L1 5DW',
    distance: '距利物浦大学步行12分钟 / 距中国城步行1分钟',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.1,
    reviewCount: 96,
    tags: ['#近中国城', '#设施新'],
    latestReview: '就在中国城旁边，买中餐调料太方便了。公寓设施也很新。',
    roomTypes: ['Studio', 'En-suite'],
    schoolDistances: { 'UoL': 12 },
    scores: { value: 4.0, noise: 3.8, network: 4.2, hygiene: 4.0, heating: 4.2, management: 4.0 }
  },
  {
    id: 'liv-4',
    name: 'Grand Central',
    city: '利物浦',
    location: 'Skellorn St, Liverpool L3 5GA',
    distance: '距利物浦大学步行10分钟 / 距火车站步行1分钟',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.8,
    reviewCount: 150,
    tags: ['#近火车站', '#性价比高'],
    latestReview: '就在Lime Street火车站旁边，位置绝了。价格也比较亲民。',
    roomTypes: ['En-suite', 'Studio'],
    schoolDistances: { 'UoL': 10 },
    scores: { value: 4.5, noise: 3.0, network: 3.8, hygiene: 3.5, heating: 4.0, management: 3.5 }
  },
  {
    id: 'liv-5',
    name: 'Agnes Jones House',
    city: '利物浦',
    location: 'Catharine St, Liverpool L8 7JZ',
    distance: '距利物浦大学步行8分钟',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.5,
    reviewCount: 68,
    tags: ['#价格便宜', '#安静'],
    latestReview: '利物浦最便宜的公寓之一，虽然设施一般，但胜在安静且离学校近。',
    roomTypes: ['En-suite', 'Non-En-suite'],
    schoolDistances: { 'UoL': 8 },
    scores: { value: 4.8, noise: 4.0, network: 3.2, hygiene: 3.0, heating: 3.5, management: 3.0 }
  },

  // --- Birmingham (5) ---
  {
    id: 'bir-1',
    name: 'Vita Student Pebble Mill',
    city: '伯明翰',
    location: 'Pebble Mill Rd, Birmingham B5 7SA',
    distance: '距伯大步行15分钟',
    images: [
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.5,
    reviewCount: 95,
    tags: ['#环境优美', '#高品质'],
    latestReview: '周围环境很安静，绿化很好，房间设施都是顶级的。',
    roomTypes: ['Studio'],
    schoolDistances: { 'UoB': 15 },
    scores: { value: 3.5, noise: 4.8, network: 4.8, hygiene: 4.6, heating: 4.5, management: 4.7 }
  },
  {
    id: 'bir-2',
    name: 'iQ Penworks',
    city: '伯明翰',
    location: '4 Moland St, Birmingham B4 7AU',
    distance: '距阿斯顿大学步行5分钟 / 距BCU步行10分钟',
    images: [
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.0,
    reviewCount: 112,
    tags: ['#近阿斯顿', '#性价比高'],
    latestReview: '阿斯顿大学同学的首选，走两步就到。价格在伯明翰很划算。',
    roomTypes: ['En-suite', 'Studio'],
    schoolDistances: { 'UoB': 20 },
    scores: { value: 4.5, noise: 3.5, network: 4.0, hygiene: 3.8, heating: 4.0, management: 4.0 }
  },
  {
    id: 'bir-3',
    name: 'Battery Park',
    city: '伯明翰',
    location: '701 Bristol Rd, Birmingham B29 6SX',
    distance: '距伯大步行10分钟',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.2,
    reviewCount: 84,
    tags: ['#近超市', '#设施新'],
    latestReview: '就在Selly Oak，旁边就是大超市和火车站，生活极其便利。',
    roomTypes: ['En-suite', 'Studio'],
    schoolDistances: { 'UoB': 10 },
    scores: { value: 4.0, noise: 3.8, network: 4.5, hygiene: 4.2, heating: 4.2, management: 4.2 }
  },
  {
    id: 'bir-4',
    name: 'The Metalworks',
    city: '伯明翰',
    location: 'Warstone Ln, Birmingham B18 6JQ',
    distance: '距BCU步行15分钟 / 距市中心步行10分钟',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.9,
    reviewCount: 62,
    tags: ['#近珠宝角', '#安静'],
    latestReview: '在Jewellery Quarter，环境很文艺，也很安静。房间挺大的。',
    roomTypes: ['Studio', 'One Bed'],
    schoolDistances: { 'UoB': 25 },
    scores: { value: 3.8, noise: 4.5, network: 4.0, hygiene: 4.0, heating: 4.0, management: 3.8 }
  },
  {
    id: 'bir-5',
    name: 'Belgrave View',
    city: '伯明翰',
    location: 'Belgrave Middleway, Birmingham B12 9DG',
    distance: '距伯大公交15分钟',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.4,
    reviewCount: 120,
    tags: ['#价格便宜', '#社区大'],
    latestReview: '伯明翰最便宜的公寓之一，虽然离学校有点远，但有班车。',
    roomTypes: ['En-suite', 'Non-En-suite'],
    schoolDistances: { 'UoB': 15 },
    scores: { value: 4.8, noise: 3.0, network: 3.2, hygiene: 3.0, heating: 3.5, management: 3.0 }
  },

  // --- Sheffield (5) ---
  {
    id: 'shf-1',
    name: 'Vita Student Telephone House',
    city: '谢菲尔德',
    location: 'Telephone House, Charter Square, Sheffield S1 4HS',
    distance: '距谢大步行10分钟 / 距谢哈步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.7,
    reviewCount: 92,
    tags: ['#高品质', '#市中心', '#早餐免费'],
    latestReview: 'Vita Student Telephone House坐落于谢菲尔德市中心的标志性建筑内，为学生提供了顶级的居住体验。公寓不仅拥有现代化的房间设计，更以其卓越的服务（如每日免费早餐、私人自习室和丰富的社交活动）而闻名。其优越的地理位置让学生能轻松步行至谢菲尔德大学和谢菲尔德哈勒姆大学，是追求高品质留学生活的理想之选。',
    roomTypes: ['Studio'],
    schoolDistances: { 'UoS': 10, 'SHU': 5 },
    scores: { value: 3.5, noise: 4.5, network: 4.8, hygiene: 4.7, heating: 4.5, management: 4.8 }
  },
  {
    id: 'shf-2',
    name: 'iQ Brocco',
    city: '谢菲尔德',
    location: '34 Edward St, Sheffield S3 7GB',
    distance: '距谢大步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.2,
    reviewCount: 78,
    tags: ['#近校园', '#性价比高'],
    latestReview: 'iQ Brocco公寓以其紧邻谢菲尔德大学主校区的地理优势而备受推崇。公寓提供多样化的房型，旨在满足不同预算学生的需求。房间内部设施实用且维护良好，公共区域宽敞，为住户提供了一个理想的学习和社交环境。其极高的通勤效率和专业的管理团队，使其成为谢大留学生群体中极具竞争力的住宿选择。',
    scores: { value: 4.5, noise: 3.8, network: 4.2, hygiene: 4.0, heating: 4.0, management: 4.2 }
  },
  {
    id: 'shf-3',
    name: 'The Pinnacles',
    city: '谢菲尔德',
    location: 'Broad St, Sheffield S2 4DD',
    distance: '距谢哈步行8分钟 / 距火车站步行10分钟',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.9,
    reviewCount: 115,
    tags: ['#近谢哈', '#社区大'],
    latestReview: 'The Pinnacles公寓是谢菲尔德哈勒姆大学学生的理想居所，地理位置优越，步行即可到达校区和火车站。公寓作为一个成熟的学生社区，拥有完善的配套设施 and 丰富的社交空间。房间租金极具吸引力，非常适合追求高性价比和便捷城市生活的学子。其专业的安保和管理服务，为住户营造了一个安全且温馨的居住环境。',
    scores: { value: 4.2, noise: 3.5, network: 4.0, hygiene: 3.8, heating: 4.0, management: 3.8 }
  },
  {
    id: 'shf-4',
    name: 'St Mary\'s House',
    city: '谢菲尔德',
    location: 'London Rd, Sheffield S2 4LA',
    distance: '距谢大公交15分钟 / 距谢哈步行12分钟',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.8,
    reviewCount: 64,
    tags: ['#安静', '#价格适中'],
    latestReview: 'St Mary\'s House公寓以其宁静的居住环境和适中的价格而受到学生的欢迎。公寓位于生活配套成熟的区域，周边超市和餐厅林立。房间内部空间宽敞，采光充足。虽然距离谢大主校区有一定距离，但便捷的交通网络确保了通勤的效率。对于追求安静学习环境和高生活品质的学生来说，这里是一个非常不错的选择。',
    scores: { value: 4.0, noise: 4.5, network: 3.8, hygiene: 3.8, heating: 4.0, management: 3.8 }
  },
  {
    id: 'shf-5',
    name: 'Leadmill Point',
    city: '谢菲尔德',
    location: 'Leadmill Rd, Sheffield S1 4SF',
    distance: '距谢哈步行2分钟 / 距火车站步行3分钟',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.6,
    reviewCount: 130,
    tags: ['#位置极佳', '#价格便宜'],
    latestReview: 'Leadmill Point公寓以其无与伦比的地理位置而著称，紧邻谢菲尔德哈勒姆大学和火车站。公寓租金水平在当地极具竞争力，是追求极致通勤便利和高性价比学生的理想选择。虽然建筑风格较为传统，但内部设施齐全且维护得当。其充满活力的社交氛围和便捷的周边配套，使其在谢菲尔德留学生群体中一直保持着高人气。',
    scores: { value: 4.8, noise: 3.0, network: 3.5, hygiene: 3.2, heating: 3.8, management: 3.2 }
  },

  // --- Bristol (5) ---
  {
    id: 'bri-1',
    name: 'Vita Student Zed Alley',
    city: '布里斯托',
    location: 'Zed Alley, Bristol BS1 4UA',
    distance: '距布大步行8分钟',
    images: [
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.8,
    reviewCount: 65,
    tags: ['#顶级公寓', '#市中心', '#早餐免费'],
    latestReview: 'Vita Student Zed Alley坐落于布里斯托市中心的艺术街区，为学生提供了无与伦比的高端居住体验。公寓不仅拥有极具现代感的房间设计，更以其标志性的全方位服务（如每日免费早餐、私人健身房和管家式管理）而著称。其优越的地理位置让学生能轻松步行至布里斯托大学，是追求极致生活品质和学术效率的学子的首选。',
    scores: { value: 3.0, noise: 4.2, network: 4.9, hygiene: 4.8, heating: 4.5, management: 4.9 }
  },
  {
    id: 'bri-2',
    name: 'iQ Bristol',
    city: '布里斯托',
    location: 'Marlborough St, Bristol BS1 3EQ',
    distance: '距布大步行12分钟 / 距市中心步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.1,
    reviewCount: 110,
    tags: ['#位置好', '#设施全'],
    latestReview: 'iQ Bristol公寓地理位置极其优越，位于布里斯托市中心，紧邻主要的购物区和交通枢枢纽。公寓提供多样化的房型选择，内部设施新颖且维护良好，包括宽敞的社交区域和现代化的健身房。其专业的管理团队和高效的服务，确保了住户能享受到安心且便捷的留学生活。对于追求城市便利生活和高效通勤的学生来说，这里是理想之选。',
    scores: { value: 3.8, noise: 3.5, network: 4.5, hygiene: 4.2, heating: 4.2, management: 4.0 }
  },
  {
    id: 'bri-3',
    name: 'Print Hall',
    city: '布里斯托',
    location: 'Temple Way, Bristol BS2 0BU',
    distance: '距布大公交15分钟 / 距火车站步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.3,
    reviewCount: 84,
    tags: ['#近火车站', '#设施新'],
    latestReview: 'Print Hall公寓坐落于布里斯托的Temple Quay区域，紧邻火车站，为住户提供了极佳的交通便利性。公寓建筑风格现代，房间内部装修精致且采光充足。其完善的配套设施，包括屋顶露台和自习室，为住户营造了一个既能专注学术又能享受生活的温馨社区。对于那些经常需要往返于不同城市的学生来说，这里是最佳的落脚点。',
    scores: { value: 4.0, noise: 4.0, network: 4.5, hygiene: 4.3, heating: 4.2, management: 4.2 }
  },
  {
    id: 'bri-4',
    name: 'St Lawrence House',
    city: '布里斯托',
    location: 'Broad St, Bristol BS1 2HF',
    distance: '距布大步行10分钟',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.9,
    reviewCount: 72,
    tags: ['#老牌公寓', '#性价比高'],
    latestReview: 'St Lawrence House公寓以其深厚的历史底蕴和极高的性价比而受到留学生的青睐。公寓位于布里斯托老城中心，周边环境优美且充满文化气息。房间内部设施实用且维护良好，租金水平在当地极具竞争力。其专业的管理团队和定期的社区活动，为住户提供了一个既安心又充实的留学生活环境，是追求平衡学习与生活的理想选择。',
    scores: { value: 4.5, noise: 3.2, network: 3.8, hygiene: 3.8, heating: 4.0, management: 3.8 }
  },
  {
    id: 'bri-5',
    name: 'New Bridewell',
    city: '布里斯托',
    location: 'Nelson St, Bristol BS1 2BA',
    distance: '距布大步行15分钟',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.7,
    reviewCount: 95,
    tags: ['#市中心', '#社交好'],
    latestReview: 'New Bridewell公寓坐落于布里斯托市中心的核心地带，周边汇集了各类餐厅、酒吧和购物中心，生活极其便利。公寓内部设计充满活力，拥有宽敞的公共空间和多样化的社交设施，为住户营造了一个积极向上的社区氛围。虽然距离布大主校区有一定步行距离，但其优越的城市生活体验和专业的管理服务，使其成为许多留学生的理想之选。',
    scores: { value: 4.0, noise: 3.0, network: 3.5, hygiene: 3.4, heating: 3.8, management: 3.5 }
  },

  // --- Cardiff (5) ---
  {
    id: 'car-1',
    name: 'Vita Student Park Place',
    city: '加的夫',
    location: 'Park Pl, Cardiff CF10 3DQ',
    distance: '距加大步行2分钟',
    images: [
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.8,
    reviewCount: 58,
    tags: ['#顶级公寓', '#近校园', '#早餐免费'],
    latestReview: 'Vita Student Park Place坐落于加的夫大学主校区的核心地带，为学生提供了极致的通勤便利和高端居住体验。公寓延续了Vita品牌一贯的高水准，提供每日免费早餐、私人健身房和丰富的社交活动。房间内部装修极具现代感，采光充足且居住舒适度极高。其卓越的管理服务和无与伦比的地理位置，使其成为加的夫留学生梦寐以求的理想居所。',
    scores: { value: 3.0, noise: 4.5, network: 4.9, hygiene: 4.8, heating: 4.5, management: 4.9 }
  },
  {
    id: 'car-2',
    name: 'Zenith',
    city: '加的夫',
    location: 'Herbert St, Cardiff CF10 4DG',
    distance: '距加大步行15分钟 / 距市中心步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.5,
    reviewCount: 82,
    tags: ['#设施豪华', '#视野好'],
    latestReview: 'Zenith公寓以其豪华的配套设施和壮丽的城市视野而闻名。公寓内部设有私人影院、屋顶露台和现代化的健身房，为住户提供了顶级的休闲娱乐空间。房间装修风格精致，设计感十足。其位于加的夫市中心边缘，既能享受城市的繁华，又能拥有宁静的居住环境。对于追求高品质生活和独特居住体验的学生来说，这里是绝佳的选择。',
    scores: { value: 3.5, noise: 4.0, network: 4.8, hygiene: 4.6, heating: 4.5, management: 4.5 }
  },
  {
    id: 'car-3',
    name: 'The Fitzalan',
    city: '加的夫',
    location: 'Fitzalan Rd, Cardiff CF24 0AB',
    distance: '距加大步行10分钟',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.2,
    reviewCount: 105,
    tags: ['#位置好', '#性价比高'],
    latestReview: 'The Fitzalan公寓地理位置优越，步行即可轻松到达加的夫大学和市中心。公寓提供多样化的房型，旨在满足不同预算留学生的需求。房间内部设施齐全且维护良好，公共区域宽敞，为住户营造了一个理想的学习和社交环境。其极高的性价比和专业的管理团队，使其在加的夫留学生群体中一直保持着极高的推荐度。',
    scores: { value: 4.5, noise: 3.5, network: 4.2, hygiene: 4.0, heating: 4.0, management: 4.2 }
  },
  {
    id: 'car-4',
    name: 'Arofan House',
    city: '加的夫',
    location: 'Longcross St, Cardiff CF24 0AD',
    distance: '距加大步行12分钟',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.9,
    reviewCount: 76,
    tags: ['#社区大', '#社交好'],
    latestReview: 'Arofan House公寓作为一个充满活力的学生社区，以其丰富的社交活动和友好的居住氛围而著称。公寓内部设施完善，包括大型社交区域、自习室和健身房。房间租金水平合理，非常适合追求高性价比和广交朋友的学子。其专业的安保和管理服务，为住户营造了一个安全且温馨的居住环境，是加的夫留学生平衡学习与生活的理想选择。',
    scores: { value: 4.2, noise: 3.8, network: 4.0, hygiene: 3.8, heating: 4.0, management: 3.8 }
  },
  {
    id: 'car-5',
    name: 'LIV Student Cardiff',
    city: '加的夫',
    location: 'Cambrian Ln, Cardiff CF24 3AD',
    distance: '距加大步行15分钟',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.4,
    reviewCount: 64,
    tags: ['#设计感', '#设施新'],
    latestReview: 'LIV Student Cardiff公寓以其独特的设计感和现代化的设施而受到留学生的青睐。公寓内部装修风格简约而不失格调，公共空间设计巧妙，为住户提供了多样化的学习和休闲区域。房间采光良好，居住舒适度极高。其专业的管理团队和定期的社区活动，为住户营造了一个既能专注学术又能享受生活的理想环境，是追求精致生活的学子的首选。',
    scores: { value: 3.8, noise: 4.2, network: 4.5, hygiene: 4.4, heating: 4.2, management: 4.5 }
  },

  // --- Coventry (5) ---
  {
    id: 'cov-1',
    name: 'Vita Student Copper Towers',
    city: '考文垂',
    location: 'Warwick Rd, Coventry CV1 2FL',
    distance: '距考大步行5分钟 / 距火车站步行2分钟',
    images: [
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.7,
    reviewCount: 72,
    tags: ['#顶级公寓', '#近火车站', '#早餐免费'],
    latestReview: 'Vita Student Copper Towers作为考文垂的高端学生公寓标杆，地理位置极其优越，紧邻火车站和考文垂大学。公寓提供每日免费早餐、私人健身房和高标准的管家式服务。房间内部装修现代且充满质感，居住体验极佳。其卓越的管理团队和丰富的社交活动，为留学生打造了一个高品质且充满活力的家，是追求极致生活品质和通勤便利的学子的首选。',
    scores: { value: 3.2, noise: 4.5, network: 4.9, hygiene: 4.8, heating: 4.5, management: 4.9 }
  },
  {
    id: 'cov-2',
    name: 'iQ Weaver Place',
    city: '考文垂',
    location: 'Bishop St, Coventry CV1 1AN',
    distance: '距考大步行8分钟 / 距市中心步行3分钟',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.2,
    reviewCount: 120,
    tags: ['#位置好', '#设施全'],
    latestReview: 'iQ Weaver Place公寓坐落于考文垂市中心的核心地带，周边汇集了各类购物中心、餐厅和娱乐设施，生活极其便利。公寓内部设施新颖且维护良好，包括宽敞的社交区域、现代化的健身房和安静的自习室。其专业的管理团队和高效的服务，确保了住户能享受到安心且便捷的留学生活。对于追求城市便利生活和高效通勤的学生来说，这里是理想之选。',
    scores: { value: 4.0, noise: 3.5, network: 4.5, hygiene: 4.2, heating: 4.2, management: 4.0 }
  },
  {
    id: 'cov-3',
    name: 'Code Students Coventry',
    city: '考文垂',
    location: 'Fairfax St, Coventry CV1 5RY',
    distance: '距考大步行2分钟',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.5,
    reviewCount: 150,
    tags: ['#近校园', '#性价比高'],
    latestReview: 'Code Students Coventry公寓以其紧邻考文垂大学主校区的地理优势而闻名，是该校留学生的首选居所。公寓提供极具竞争力的租金水平，并配备了丰富的配套设施，如私人健身房和社交区域。房间内部设计实用且采光良好。其极高的通勤效率和充满活力的社区氛围，使其在考文垂留学生群体中一直保持着极高的推荐度和人气。',
    scores: { value: 4.8, noise: 3.2, network: 4.2, hygiene: 4.0, heating: 4.2, management: 4.2 }
  },
  {
    id: 'cov-4',
    name: 'The Cycle Works',
    city: '考文垂',
    location: 'Raglan St, Coventry CV1 5QU',
    distance: '距考大步行10分钟',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.9,
    reviewCount: 94,
    tags: ['#社区大', '#价格适中'],
    latestReview: 'The Cycle Works公寓作为一个成熟的学生社区，以其稳定的管理服务和适中的租金价格而受到留学生的青睐。公寓内部设施完善，包括宽敞的社交空间和自习区域。房间内部空间合理，采光良好。其优越的地理位置确保了住户能轻松步行至校区和市中心。对于追求高性价比和安心居住环境的学生来说，这里是一个非常实用的选择。',
    scores: { value: 4.2, noise: 3.8, network: 4.0, hygiene: 3.8, heating: 4.0, management: 3.8 }
  },
  {
    id: 'cov-5',
    name: 'Paradise Student Village',
    city: '考文垂',
    location: 'Deasy Rd, Coventry CV1 2RX',
    distance: '距考大步行12分钟',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.7,
    reviewCount: 110,
    tags: ['#价格便宜', '#社交好'],
    latestReview: 'Paradise Student Village公寓以其亲民的价格和充满活力的社交氛围而著称。公寓提供多样化的房型选择，配套设施齐全，包括大型社交区域和健身房。虽然建筑风格较为传统，但内部维护良好且安保严密。其专业的管理团队和定期的社区活动，为住户提供了一个既安心又充实的留学生活环境，是追求实用主义和广交朋友的学子的理想落脚点。',
    scores: { value: 4.5, noise: 3.0, network: 3.5, hygiene: 3.4, heating: 3.8, management: 3.5 }
  },

  // --- Leicester (5) ---
  {
    id: 'lei-1',
    name: 'Vita Student Leicester',
    city: '莱斯特',
    location: 'Richmond St, Leicester LE2 7AS',
    distance: '距莱大步行15分钟 / 距德大步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.7,
    reviewCount: 62,
    tags: ['#顶级公寓', '#早餐免费', '#服务好'],
    latestReview: 'Vita Student Leicester作为莱斯特的高端学生住宿典范，为住户提供了卓越的居住体验。公寓每日提供丰盛的免费早餐，房间装修现代且充满质感。其优越的地理位置让学生能轻松前往莱斯特大学和德蒙福特大学。公寓的管理服务卓越，定期举办的社交活动为留学生营造了一个温馨且充满活力的社区，是追求高品质生活的学子的首选。',
    scores: { value: 3.2, noise: 4.5, network: 4.9, hygiene: 4.8, heating: 4.5, management: 4.9 }
  },
  {
    id: 'lei-2',
    name: 'iQ Newarke Street',
    city: '莱斯特',
    location: 'Newarke St, Leicester LE1 5SN',
    distance: '距德大步行2分钟 / 距莱大步行15分钟',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.2,
    reviewCount: 94,
    tags: ['#近校园', '#性价比高'],
    latestReview: 'iQ Newarke Street公寓地理位置极佳，紧邻德蒙福特大学主校区，是该校留学生的理想居所。公寓提供多样化的房型，内部设施实用且维护良好，包括宽敞的社交区域和安静的自习室。其极高的通勤效率和专业的管理团队，确保了住户能享受到安心且便捷的留学生活。对于追求高性价比和便捷校园生活的学生来说，这里是最佳选择。',
    scores: { value: 4.5, noise: 3.5, network: 4.2, hygiene: 4.0, heating: 4.0, management: 4.2 }
  },
  {
    id: 'lei-3',
    name: 'The Summit',
    city: '莱斯特',
    location: 'Eastern Blvd, Leicester LE2 7JD',
    distance: '距德大步行5分钟 / 距莱大步行18分钟',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.4,
    reviewCount: 110,
    tags: ['#设施豪华', '#视野好'],
    latestReview: 'The Summit公寓以其现代化的建筑风格和豪华的内部设施而著称。公寓高层房间视野开阔，可以俯瞰莱斯特的城市美景。房间内部装修精致，设计感十足。其完善的配套设施，包括私人健身房和大型社交区域，为住户营造了一个既能专注学术又能享受生活的理想环境。对于追求高品质居住体验和现代生活方式的学生来说，这里是绝佳之选。',
    scores: { value: 3.8, noise: 4.0, network: 4.5, hygiene: 4.4, heating: 4.2, management: 4.5 }
  },
  {
    id: 'lei-4',
    name: 'Brookland Road',
    city: '莱斯特',
    location: 'Brookland Rd, Leicester LE2 6AB',
    distance: '距莱大步行10分钟',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.8,
    reviewCount: 85,
    tags: ['#安静', '#价格适中'],
    latestReview: 'Brookland Road公寓以其宁静的居住环境和亲民的价格而受到莱斯特大学留学生的青睐。公寓位于生活配套成熟的区域，周边环境优美且学术氛围浓厚。房间内部空间合理，采光良好。其专业的管理团队和高效的服务，确保了住户能享受到安心且舒适的留学生活。对于追求安静学习环境和高性价比的学生来说，这里是一个非常理想的选择。',
    scores: { value: 4.2, noise: 4.5, network: 3.8, hygiene: 3.8, heating: 4.0, management: 3.8 }
  },
  {
    id: 'lei-5',
    name: 'Liberty Park Leicester',
    city: '莱斯特',
    location: 'Eastern Blvd, Leicester LE2 7AY',
    distance: '距德大步行8分钟 / 距莱大步行15分钟',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.6,
    reviewCount: 125,
    tags: ['#社区大', '#社交好'],
    latestReview: 'Liberty Park Leicester公寓作为一个成熟且充满活力的学生社区，以其丰富的社交空间和友好的居住氛围而闻名。公寓内部设施完善，包括大型社交区域、健身房和自习室。房间租金水平合理，非常适合追求高性价比和广交朋友的学子。其专业的安保和管理服务，为住户营造了一个安全且温馨的居住环境，是莱斯特留学生平衡学习与生活的理想落脚点。',
    scores: { value: 4.5, noise: 3.0, network: 3.5, hygiene: 3.4, heating: 3.8, management: 3.5 }
  },

  // --- Aberdeen (3) ---
  {
    id: 'abd-1',
    name: 'The Combworks',
    city: '阿伯丁',
    location: '80-90 College St, Aberdeen AB11 6FD',
    distance: '距阿伯丁大学公交15分钟 / 距市中心步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.4,
    reviewCount: 42,
    tags: ['#市中心', '#设施新'],
    latestReview: 'The Combworks公寓坐落于阿伯丁市中心，为学生提供了一个现代且充满活力的居住环境。公寓内部装修精致，公共空间设计巧妙，包括宽敞的社交区域和安静的自习室。其优越的地理位置让住户能轻松享受城市的各类便利设施。公寓管理团队专业高效，为留学生在阿伯丁的学习生活提供了坚实的保障，是追求城市生活品质的学生们的理想之选。',
    scores: { value: 4.0, noise: 3.8, network: 4.5, hygiene: 4.2, heating: 4.2, management: 4.2 }
  },
  {
    id: 'abd-2',
    name: 'iQ Linksfield',
    city: '阿伯丁',
    location: 'Linksfield Rd, Aberdeen AB24 5RR',
    distance: '距阿伯丁大学步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.8,
    reviewCount: 56,
    tags: ['#近校园', '#性价比高'],
    latestReview: 'iQ Linksfield公寓以其紧邻阿伯丁大学主校区的地理优势而备受青睐。公寓提供多样化的房型选择，旨在满足不同预算留学生的需求。房间内部设施实用且维护良好，公共区域宽敞，为住户营造了一个理想的学习和社交环境。其极高的通勤效率和专业的管理团队，使其在阿伯丁留学生群体中一直保持着极高的推荐度。',
    scores: { value: 4.5, noise: 3.5, network: 3.8, hygiene: 3.8, heating: 4.0, management: 3.8 }
  },
  {
    id: 'abd-3',
    name: 'Causeway View',
    city: '阿伯丁',
    location: 'Causewayend, Aberdeen AB25 3TN',
    distance: '距阿伯丁大学步行12分钟',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.1,
    reviewCount: 38,
    tags: ['#古建筑', '#视野好'],
    latestReview: 'Causeway View公寓坐落于一座极具历史底蕴的受保护建筑内，为住户提供了一个独特且充满文化气息的居住环境。公寓内部经过精心的现代化改造，设施齐全且设计感十足。高层房间视野开阔，可以俯瞰阿伯丁的城市美景。其专业的管理团队和定期的社区活动，为住户营造了一个既安心又充实的留学生活环境，是追求独特居住体验的学子的首选。',
    scores: { value: 3.8, noise: 4.2, network: 4.2, hygiene: 4.0, heating: 4.0, management: 4.0 }
  },

  // --- Belfast (3) ---
  {
    id: 'bel-1',
    name: 'Student Roost Swanston House',
    city: '贝尔法斯特',
    location: '41-49 Queen St, Belfast BT1 6EB',
    distance: '距贝尔法斯特女王大学步行15分钟 / 距市中心步行2分钟',
    images: [
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.5,
    reviewCount: 64,
    tags: ['#市中心', '#社交好'],
    latestReview: 'Student Roost Swanston House公寓坐落于贝尔法斯特市中心的核心地带，周边生活配套极其成熟。公寓内部设施新颖，拥有宽敞的公共空间和多样化的社交设施，为住户营造了一个积极向上的社区氛围。房间装修风格现代，采光良好。其专业的管理团队和高效的服务，确保了住户能享受到安心且便捷的留学生活，是追求城市便利生活的学子们的理想之选。',
    scores: { value: 4.2, noise: 3.5, network: 4.5, hygiene: 4.3, heating: 4.2, management: 4.5 }
  },
  {
    id: 'bel-2',
    name: 'Alma Student Living',
    city: '贝尔法斯特',
    location: 'Library St, Belfast BT1 2GU',
    distance: '距阿尔斯特大学步行2分钟 / 距女王大学公交15分钟',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.3,
    reviewCount: 48,
    tags: ['#近阿尔斯特', '#设施新'],
    latestReview: 'Alma Student Living公寓地理位置优越，紧邻阿尔斯特大学贝尔法斯特校区。公寓建筑风格现代，房间内部装修精致且采光充足。其完善的配套设施，包括屋顶露台和自习室，为住户营造了一个既能专注学术又能享受生活的温馨社区。公寓管理团队热情周到，为留学生在贝尔法斯特的学习生活提供了全方位的支持，是追求高品质居住体验的学子的理想选择。',
    scores: { value: 4.0, noise: 4.0, network: 4.5, hygiene: 4.2, heating: 4.2, management: 4.2 }
  },
  {
    id: 'bel-3',
    name: 'Elms BT9',
    city: '贝尔法斯特',
    location: 'Malone Rd, Belfast BT9 5BW',
    distance: '距贝尔法斯特女王大学步行10分钟',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 3.9,
    reviewCount: 120,
    tags: ['#学校宿舍', '#性价比高'],
    latestReview: 'Elms BT9作为贝尔法斯特女王大学的官方住宿区，以其极高的安全性和成熟的社区管理而闻名。公寓位于环境优美的Malone Road区域，学术氛围浓厚。虽然设施风格较为传统，但维护良好且配套齐全。其亲民的价格和丰富的校园资源支持，使其成为女王大学新生特别是国际留学生的首选落脚点，为他们开启留学生活提供了理想的过渡。',
    scores: { value: 4.5, noise: 3.8, network: 4.0, hygiene: 3.8, heating: 4.0, management: 4.0 }
  },

  // --- Brighton (3) ---
  {
    id: 'bri-1-b',
    name: 'iQ Abacus House',
    city: '布莱顿',
    location: 'London Rd, Brighton BN1 4JF',
    distance: '距布莱顿大学步行15分钟 / 距萨塞克斯大学公交20分钟',
    images: [
      'https://images.unsplash.com/photo-1536376074432-a228d74496a9?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.2,
    reviewCount: 52,
    tags: ['#位置好', '#社交好'],
    latestReview: 'iQ Abacus House公寓坐落于布莱顿充满活力的London Road区域，周边汇集了各类独立商店、咖啡馆和餐厅。公寓内部设施现代，拥有宽敞的社交区域和自习室，为住户营造了一个积极向上的社区氛围。房间采光良好，居住舒适度高。其优越的地理位置和便捷的交通网络，确保了住户能轻松前往布莱顿大学和萨塞克斯大学，是追求海滨城市生活的学子们的理想之选。',
    scores: { value: 4.0, noise: 3.5, network: 4.5, hygiene: 4.2, heating: 4.2, management: 4.0 }
  },
  {
    id: 'bri-2-b',
    name: 'Student Roost Hollingbury House',
    city: '布莱顿',
    location: 'Hollingbury Rd, Brighton BN1 7GE',
    distance: '距布莱顿大学步行5分钟',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.0,
    reviewCount: 45,
    tags: ['#近校园', '#性价比高'],
    latestReview: 'Student Roost Hollingbury House公寓以其紧邻布莱顿大学Moulsecoomb校区的地理优势而备受青睐。公寓提供多样化的房型选择，旨在满足不同预算留学生的需求。房间内部设施实用且维护良好，公共区域宽敞，为住户营造了一个理想的学习和社交环境。其极高的通勤效率和专业的管理团队，使其在布莱顿留学生群体中一直保持着极高的推荐度。',
    scores: { value: 4.5, noise: 3.8, network: 4.0, hygiene: 3.8, heating: 4.0, management: 3.8 }
  },
  {
    id: 'bri-3-b',
    name: 'Hillfort House',
    city: '布莱顿',
    location: 'Lewes Rd, Brighton BN2 4FA',
    distance: '距布莱顿大学步行10分钟 / 距萨塞克斯大学公交15分钟',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.3,
    reviewCount: 36,
    tags: ['#设施新', '#视野好'],
    latestReview: 'Hillfort House公寓坐落于布莱顿的Lewes Road区域，建筑风格现代且设计感十足。公寓内部设施新颖，包括现代化的健身房、社交区域和安静的自习室。高层房间视野开阔，可以远眺布莱顿的城市风光和海景。其专业的管理团队和定期的社区活动，为住户营造了一个既安心又充实的留学生活环境，是追求高品质居住体验和现代生活方式的学子的首选。',
    scores: { value: 3.8, noise: 4.2, network: 4.5, hygiene: 4.3, heating: 4.2, management: 4.5 }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    apartmentId: '1',
    user: '匿名用户',
    date: '2024年9月入住',
    rating: 3,
    content: '暖气不稳定，冬天很冷，但位置确实没得说，走路就能到学校。前台服务一般，包裹有时候会丢。',
    images: ['https://picsum.photos/seed/rev1/400/300', 'https://picsum.photos/seed/rev2/400/300'],
    verified: true,
  },
  {
    id: 'r2',
    apartmentId: '1',
    user: '留学小助手',
    date: '2023年10月入住',
    rating: 4,
    content: '整体还可以，就是临街的房间有点吵。建议选高层的房间。',
    verified: false,
  }
];

export const POSTS: Post[] = [
  {
    id: 'p1',
    title: '伦敦租房避坑指南：这些中介千万别碰！',
    content: '在伦敦租房快三年了，踩过不少坑。有些中介虽然牌子大，但是服务真的很差，押金扣得莫名其妙。建议大家租房前一定要看清合同里的退房条款...',
    author: '伦敦老学长',
    date: '2小时前',
    tags: ['租房避坑', '伦敦'],
    likes: 156,
    comments: 42,
  },
  {
    id: 'p2',
    title: '曼彻斯特Vita First Street入住体验',
    content: '刚搬进Vita First Street一周，整体感觉非常棒！每天早上的免费早餐真的很救命。楼下的公共空间很大，适合自习也适合社交。就是价格确实比周边贵一点点。',
    author: '曼大新生小李',
    date: '5小时前',
    tags: ['曼彻斯特', 'Vita', '入住体验'],
    likes: 89,
    comments: 15,
  },
  {
    id: 'p3',
    title: '爱丁堡GS校区周边公寓求推荐',
    content: '明年去爱大读研，GS校区。目前在看iQ Elliott House和Shrubhill，有没有住过的学长学姐分享一下？或者还有其他推荐吗？希望安静一点。',
    author: '爱大准新生',
    date: '1天前',
    tags: ['求推荐', '爱丁堡'],
    likes: 45,
    comments: 28,
  },
  {
    id: 'p4',
    title: '格拉斯哥True Student公寓的滑梯真的好玩吗？',
    content: '刷到好多次True Glasgow的滑梯了，感觉好酷！但是会不会很吵啊？有没有住在那里的同学现身说法？',
    author: '好奇宝宝',
    date: '1天前',
    tags: ['格拉斯哥', 'TrueStudent'],
    likes: 67,
    comments: 34,
  },
  {
    id: 'p5',
    title: '纽卡斯尔商学院租房首选：The View',
    content: '作为纽大商学院的学生，住The View真的太爽了。过个马路就到教学楼，早上可以多睡半小时。视野也非常好，能看到整个纽卡。',
    author: '纽大商科姐',
    date: '2天前',
    tags: ['纽卡斯尔', 'TheView'],
    likes: 112,
    comments: 19,
  }
];
