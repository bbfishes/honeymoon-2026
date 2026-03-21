"use client";
import React, { useState } from 'react';

const itinerary = [
  {
    date: '3/21 (六)',
    title: '台北 → 首爾 (啟程)',
    desc: '抵達首爾，開啟浪漫蜜月。',
    stay: 'UH FLAT The Seocho',
    stayLink: 'https://map.naver.com/p/search/UH%20FLAT%20The%20Seocho',
    details: [
      { time: '11:40', text: '✈️ 搭乘【韓亞航空 OZ712】自桃園機場 (TPE T2) 起飛。' },
      { time: '15:25', text: '抵達仁川機場 (ICN T2)，辦理入境後，搭乘機場快線或巴士前往市區。' },
      { time: '17:00', text: '入住飯店。飯店鄰近瑞草站與江南商圈，環境優雅寧靜，是首爾高質感住宅區。' },
      { time: '18:30', text: '【星空圖書館 (Starfield Library)】前往 COEX Mall，在絕美的巨型書牆前拍下浪漫合影。' },
      { time: '20:30', text: '晚餐：【Dotgogi 506 (돝고기506)】。江南區超人氣熟成烤肉，BTS 也愛訪的 506 小時乾式熟成豬五花。', link: 'https://map.naver.com/p/search/%EB%8F%9D%EA%B3%A0%EA%B8%B0506' }
    ]
  },
  {
    date: '3/22 (日)',
    title: '首爾：漢江與現代風情',
    desc: '漫步石村湖櫻花隧道與江南區。',
    stay: 'UH FLAT The Seocho',
    details: [
      { time: '10:00', text: '【石村湖】首爾賞櫻首選。環繞湖泊的數千棵櫻花樹構成壯觀的粉紅隧道，背景是雄偉的樂天世界塔。' },
      { time: '13:00', text: '【江南地下街】或樂天百貨購物。體驗首爾最尖端的時尚與購物氛圍。' },
      { time: '15:00', text: '【聖水洞】造訪工業風改建的文青咖啡廳，體驗「首爾的布魯克林」。' },
      { time: '19:00', text: '晚餐：【Tien Mimi (티엔미미) 江南店】。在首爾享用精緻高級的港式點心與中式料理，推薦點滿玉雙人分享套餐，享受鐵板鮑魚與松露燒賣。', link: 'https://naver.me/FHOFXUFi' }
    ]
  },
  {
    date: '3/23 (一)',
    title: '首爾：古都與在地味',
    desc: '穿韓服逛景福宮，益善洞浪漫午茶。',
    stay: 'UH FLAT The Seocho',
    details: [
      { time: '09:00', text: '【景福宮】租借高級韓服進入宮廷，拍攝穿越時空的蜜月寫真。隨後漫步【北村韓屋村】。' },
      { time: '12:00', text: '【三清洞】特色午餐。在傳統韓屋中享用現代精緻韓食。' },
      { time: '15:00', text: '【益善洞】造訪充滿傳統韓屋與現代文青風格交錯的咖啡街，享受浪漫下午茶與質感小店。' },
      { time: '18:00', text: '晚餐：【陳玉華老奶奶元祖一隻雞】。東大門必吃美食，清甜蒜香雞湯搭配年糕與麵條，簡單卻極度美味。', link: 'https://map.naver.com/p/search/%EC%A7%84%EC%98%A5%ED%99%94%ED%95%A0%EB%A7%A4%EC%9B%90%EC%A1%B0%EB%8B%AD%ED%95%9C%EB%A7%88%EB%A6%AC' }
    ]
  },
  {
    date: '3/24 (二)',
    title: '首爾 → 福岡',
    desc: '跨國飛行，入住博多站核心。',
    stay: '博多站筑紫口FORZA飯店2館',
    stayLink: 'https://www.google.com/maps/search/?api=1&query=FORZA飯店+博多站筑紫口2館',
    details: [
      { time: '11:00', text: '飯店退房，前往仁川機場 (ICN T2) 辦理報到手續。' },
      { time: '14:25', text: '✈️ 搭乘【首爾航空 RS727】自仁川機場起飛前往福岡。' },
      { time: '15:55', text: '抵達福岡機場 (FUK)。機場離市區極近，搭乘地鐵僅需 5 分鐘即可抵達博多車站。' },
      { time: '17:00', text: '入住飯店。位於博多站筑紫口（東 6 出口），步行 1 分鐘即可抵達新幹線與地鐵站。' },
      { time: '19:00', text: '晚餐：【博多華味鳥 博多駅筑紫口店】。頂級水炊鍋代表，品嚐自家飼養雞肉與熬煮出的乳白色膠原蛋白鮮湯。', link: 'https://maps.app.goo.gl/B9emNvnZ3Z5aaBoV7?g_st=ic' }
    ]
  },
  {
    date: '3/25 (三)',
    title: '福岡：櫻花與太宰府',
    desc: '拜訪天滿宮，感受古都氣息。',
    stay: '博多站筑紫口FORZA飯店2館',
    details: [
      { time: '09:00', text: '【太宰府天滿宮】祈求學問與福氣，欣賞建築之美。必吃門前的「梅枝餅」。' },
      { time: '13:00', text: '【舞鶴公園 / 福岡城跡】福岡著名的賞櫻名所，櫻花與古城牆相互輝映。' },
      { time: '16:00', text: '【天神商圈】九州最大的購物中心，百貨林立。' },
      { time: '20:00', text: '晚餐：【中洲屋台】。體驗福岡特色的路邊攤文化。' }
    ]
  },
  {
    date: '3/26 (四)',
    title: '福岡：門司港半日遊',
    desc: '洋溢異國情調的港灣風景。',
    stay: '博多站筑紫口FORZA飯店2館',
    details: [
      { time: '10:00', text: '【門司港】保留許多明治維新時期的西洋建築，漫步港灣看跨海大橋。' },
      { time: '12:00', text: '午餐：門司港名物【燒咖哩】。焗烤濃郁咖哩與半熟蛋。' },
      { time: '15:00', text: '【大濠公園】福岡人的綠洲，湖畔散步觀賞夕陽。' },
      { time: '18:00', text: '晚餐：【博多 うなぎ屋 藤う那】。博多站旁的高級鰻魚飯專賣店，外皮酥脆、肉質軟嫩的關西風烤鰻魚。', link: 'https://maps.app.goo.gl/6VEyg6ajcGJgUqgs9?g_st=ic' }
    ]
  },
  {
    date: '3/27 (五)',
    title: '福岡 → 由布院 (觀光列車+自駕)',
    desc: '搭乘由布院之森，開啟自駕之旅。',
    stay: '湯布院 森林露臺飯店',
    stayLink: 'https://www.google.com/maps/search/?api=1&query=湯布院ホテル森のテラス',
    details: [
      { time: '10:00', text: '早上在博多車站悠閒早午餐或購買鐵路便當。' },
      { time: '14:28', text: '🚂 搭乘【由布院之森】景觀列車前往由布院，沿途欣賞鄉村綠意。' },
      { time: '16:44', text: '抵達由布院車站。辦理租車手續，正式開啟九州自駕行程。' },
      { time: '17:30', text: '自駕前往飯店辦理入住。飯店位於森林中，環境極其清幽。' },
      { time: '18:30', text: '飯店享用精緻懷石晚宴。包含大分和牛牛排、寒鰤魚冷盤等頂級食材。' }
    ]
  },
  {
    date: '3/28 (六)',
    title: '由布院：漫步雲煙與周邊自駕',
    desc: '清晨金鱗湖與湯之坪散策。',
    stay: '湯布院 森林露臺飯店',
    details: [
      { time: '07:00', text: '開車前往【金鱗湖】。清晨湖面與溫泉水交融產生夢幻薄霧，是拍照最佳時機。' },
      { time: '10:00', text: '漫步【湯之坪街道】。造訪 SNOOPY 茶屋、B-speak 蛋糕捲、金賞可樂餅。' },
      { time: '12:00', text: '午餐：【由布まぶし 心】。推薦豐後牛釜飯三吃。', link: 'https://www.google.com/maps/search/?api=1&query=由布まぶし+心+駅前支店' },
      { time: '14:00', text: '自駕周邊遊：可開車前往【九重夢大吊橋】欣賞壯麗山谷，或在特色咖啡店享受慢活。' },
      { time: '16:30', text: '返回飯店，享受飯店溫泉設施，徹底放鬆。' }
    ]
  },
  {
    date: '3/29 (日)',
    title: '由布院 → 熊本 (自駕)',
    desc: '自駕橫越九州，抵達熊本市區。',
    stay: '大和ROYNET飯店 熊本銀座通店',
    stayLink: 'https://www.google.com/maps/search/?api=1&query=大和ROYNET飯店+熊本銀座通店',
    details: [
      { time: '10:00', text: '飯店退房後，自駕前往熊本（車程約 2.5 小時），享受九州自駕風光。' },
      { time: '13:00', text: '抵達熊本。飯店位於繁華的銀座通，有配合的停車場，逛街購物極為便利。' },
      { time: '15:00', text: '【熊本城】造訪日本三大名城。參觀修復後的「天守閣」與旁邊的「櫻之馬場城彩苑」。' },
      { time: '18:30', text: '晚餐：【勝烈亭炸豬排】。熊本必吃老字號，外皮酥脆、肉汁飽滿。', link: 'https://www.google.com/maps/search/?api=1&query=勝烈亭+新市街本店' }
    ]
  },
  {
    date: '3/30 (一)',
    title: '熊本：悠閒市區遊',
    desc: '慢遊水前寺與下通商店街。',
    stay: '大和ROYNET飯店 熊本銀座通店',
    details: [
      { time: '10:00', text: '自駕或搭路面電車前往【水前寺成趣園】。著名的日式築山泉水庭園，風景優美。' },
      { time: '12:00', text: '午餐：【黑亭拉麵】。品嚐帶有香焦大蒜味的傳統熊本拉麵。' },
      { time: '14:00', text: '【熊本熊廣場】造訪部長辦公室。' },
      { time: '16:00', text: '【下通、上通商店街】深度採買藥妝、雜貨，這是九州數一數二的大型拱廊商店街。' }
    ]
  },
  {
    date: '3/31 (二)',
    title: '熊本：柳川遊船 (自駕)',
    desc: '近郊散策與鰻魚飯體驗。',
    stay: '大和ROYNET飯店 熊本銀座通店',
    details: [
      { time: '09:00', text: '自駕前往【柳川】（車程約 1 小時）。搭乘傳統搖櫓船體驗水鄉風情。' },
      { time: '12:00', text: '午餐：【元祖本吉屋】。品嚐傳承三百年的「蒸籠鰻魚飯」。', link: 'https://www.google.com/maps/search/?api=1&query=元祖本吉屋+柳川' },
      { time: '15:00', text: '自駕前往【鳥栖 Premium Outlets】或【久留米】採購與散策。' },
      { time: '17:30', text: '順路前往宇土市的【一心堂老舗】，品嚐評價 4.4 顆星的超強三種餅皮泡芙。', link: 'https://maps.app.goo.gl/2yrn25KBR5Gxy79WA?g_st=it' },
      { time: '19:00', text: '返回熊本，晚餐：銀座通周邊居酒屋或特色馬肉料理。' }
    ]
  },
  {
    date: '4/01 (三)',
    title: '熊本 → 福岡 → 台北 (自駕賦歸)',
    desc: '最後衝刺採買，帶著甜蜜回憶回家。',
    details: [
      { time: '10:00', text: '飯店悠閒早餐後辦理退房，自駕返回福岡（車程約 1.5 小時）。' },
      { time: '12:00', text: '在福岡市區享用午餐，隨後在博多車站或天神商圈做最後採購。' },
      { time: '16:00', text: '前往福岡機場附近辦理歸還車輛手續。' },
      { time: '18:00', text: '抵達福岡機場，辦理報到手續與免稅店最後衝刺。' },
      { time: '21:00', text: '✈️ 搭乘【中華航空 CI117】自福岡機場 (FUK I) 起飛。' },
      { time: '22:30', text: '抵達桃園機場 (TPE T2)，蜜月圓滿達成！' }
    ]
  }
];


const restaurants = {
  '首爾地區': [
    { name: 'Cafe Eero (카페 이로)', desc: '瑞草區有瀑布的藝術感咖啡廳，推薦黑芝麻拿鐵。', link: 'https://map.naver.com/v5/search/%EC%B9%B4%ED%8E%98%20%EC%9D%B4%EB%A1%9C' },
    { name: '藍瓶 三清韓屋店', desc: '景福宮旁最有質感的韓屋咖啡，建議提早預約甜點套餐。', link: 'https://m.place.naver.com/place/1470433292' },
    { name: '月亮廣場炭烤', desc: '乙支路非常有露營營火氣氛的烤雞店，宵夜首選。', link: 'https://map.naver.com/v5/search/%EB%8B%AC%EB%A7%9E%EC%9D%B4%EA%B4%91%EC%9E%A5%EB%B0%94%EB%B2%A0%ED%81%90' },
    { name: '山清炭火花園', desc: '乙支路最強排隊黑豬肉，記得先去 Catch Table 抽號碼牌。', link: 'https://m.place.naver.com/restaurant/1957519694/home' },
    { name: 'LEEDORIM (이도림)', desc: '西村有冒煙火山造景的浮誇咖啡廳，可麗露必點。', link: 'https://map.naver.com/v5/search/%EC%9D%B4%EB%8F%84%EB%A6%BC' },
    { name: '土俗村參雞湯', desc: '景福宮旁最經典的補身聖品，韓屋建築氛圍感滿分。', link: 'https://naver.me/xqF8xP7A' },
    { name: 'Milestone Coffee', desc: '維也納咖啡三巨頭之一，招牌奶油咖啡濃郁不膩', link: 'https://map.naver.com/search/%EB%B0%80%EC%8A%A4%ED%86%A4%EC%BB%A4%ED%94%BC' },
    { name: 'Grandpa Factory Cafe', desc: '工業風咖啡廳，韓劇《文森佐》取景地，白色玻璃窗浪漫滿分', link: 'https://map.naver.com/search/%ED%95%A0%EC%95%84%EB%B2%80%EC%A7%80%EA%B3%B5%EC%9E%A5' },
    { name: 'Cafe BotBotBot', desc: '熱帶風格咖啡廳，機器人送蛋糕，頂樓有露臺', link: 'https://map.naver.com/search/%EC%B9%B4%ED%8E%98%EB%B4%87%EB%B4%87%EB%B4%87' },
    { name: 'Frolla Seoul', desc: '義大利老闆經營的歐洲風 espresso bar，五顏六色超好拍', link: 'https://map.naver.com/search/%ED%94%84%EB%A1%A4%EB%9D%BC' },
    { name: 'Rafre fruit', desc: '水果系甜點，NCT泰容等韓星愛店，白色外觀夢幻好拍', link: 'https://map.naver.com/search/rafre%20fruit%20%EC%84%B1%EC%88%98' },
    { name: 'Blue Bottle HUMAN MADE', desc: '全球唯一愛心 logo 藍瓶咖啡，時尚又可愛', link: 'https://map.naver.com/search/HUMAN%20MADE%20Seoul%20Cafe' },
    { name: 'NUDAKE', desc: 'Gentle Monster 旗下，抹茶熔岩可頌是必點招牌', link: 'https://map.naver.com/search/NUDAKE%20%EC%84%B1%EC%88%98' },
    { name: 'être Bake House', desc: '鹽麵包專賣，口味多元，原味和巧克力都推薦', link: 'https://map.naver.com/search/%EC%97%90%ED%8A%9C%EB%A0%88%EB%A0%88%EC%9D%B4%EC%95%84%ED%94%BC%ED%95%98%EC%9A%B0%EC%8A%A4' },
    { name: '自然島鹽麵包', desc: '排隊名店，100% 加拿大、法國原料，一天出爐六次', link: 'https://map.naver.com/search/%EC%9E%90%EC%97%B0%EB%8F%84%EC%86%8C%EA%B8%88%EB%B9%B5' },
    { name: '祖傳三代馬鈴薯排骨湯', desc: '《白鐘元的三大天王》推薦，24小時營業，CP值超高', link: 'https://map.naver.com/search/%EC%86%8C%EB%AC%B8%EB%82%9C%EC%84%B1%EC%88%98%EA%B0%90%EC%9E%90%ED%83%95' },
    { name: '烤黨 (꿉당)', desc: '米其林推薦烤肉，專人代烤，松露炸醬麵必吃', link: 'https://map.naver.com/search/%EA%BF%89%EB%8B%B9%20%EC%84%B1%EC%88%98%EC%A0%90' },
    { name: '奶奶的食譜', desc: '高分韓國家常菜，烤魚套餐鮮嫩美味', link: 'https://map.naver.com/search/%ED%95%A0%EB%A7%88%EB%A7%88%EC%9D%98%EB%A0%88%EC%8B%9C%ED%94%BD' },
    { name: 'Maman Gelato', desc: '聖水洞超紅義式冰淇淋，開心果口味是王牌。', link: 'https://m.place.naver.com/restaurant/1414114341/home' },
    { name: 'Standard Bread', desc: '聖水洞現烤焦糖布丁吐司，記得下午先預約。', link: 'https://m.place.naver.com/restaurant/1334114341/home' },
    { name: '林盛根國家認證排骨', desc: '新堂站 CP 值爆表，點肉送醬蟹無限自助吧。', link: 'https://m.place.naver.com/place/36419000' },
    { name: '洪別監家 (홍별감네)', desc: '朱綺郁推薦的中谷站美食，必吃五花肉與家常蛋飯。', link: 'https://map.naver.com/v5/search/%ED%99%8D%EB%B3%84%EA%B0%90%EB%84%A4' },
    { name: 'Dotgogi 506 (돝고기506)', desc: '江南超人氣烤肉，BTS 朝聖的 506 小時乾式熟成豬五花，必點松露奶油炒飯。', link: 'https://map.naver.com/p/search/%EB%8F%9D%EA%B3%A0%EA%B8%B0506' },
    { name: '百濟蔘雞湯', desc: '明洞老字號，烏骨雞湯頭燉煮入味，蜜月補氣首選。', link: 'https://map.naver.com/p/search/%EB%B0%B1%EC%A0%9C%EC%82%BC%EA%B3%84%ED%83%95' },
    { name: '厚肉 (두툼)', desc: '首爾站旁名店，熟成厚切五花肉口感驚豔，肉汁在嘴裡爆發。', link: 'https://map.naver.com/p/search/%EB%91%90%ED%88%BC' },
    { name: '陳玉華老奶奶元祖一隻雞', desc: '東大門必吃！清甜蒜香雞湯搭配年糕與麵條，簡單卻極度美味。', link: 'https://map.naver.com/p/search/%EC%A7%84%EC%98%A5%ED%99%94%ED%95%A0%EB%A7%A4%EC%9B%90%EC%A1%B0%EB%8B%AD%ED%95%9C%EB%A7%88%EB%A6%AC' },
    { name: '橋村炸雞 (KyoChon)', desc: '經典蜂蜜蒜味炸雞，外皮酥脆甜香，搭配啤酒是韓國宵夜霸主。', link: 'https://map.naver.com/p/search/%EA%B5%90%EC%B4%8C%EC%B9%98%ED%82%A8%20%ED%99%8D%EB%8C%80' },
    { name: '荒謬的生肉', desc: '高CP值烤豬五花吃到飽，想大口吃肉補充體力時的極佳選擇。', link: 'https://map.naver.com/p/search/%EC%97%89%ED%84%B0%EB%A6%AC%EC%83%9D%EA%B3%A0%EA%B8%B0%20%EB%AA%85%EB%8F%99' },
    { name: '神仙雪濃湯', desc: '濃郁牛骨白湯配上香Q米飯與泡菜，早上暖胃非常舒服。', link: 'https://map.naver.com/p/search/%EC%8B%A0%EC%84%A4%EB%86%8D%ED%83%95' },
    { name: '站著吃烤肉', desc: '鐵桶炭火烤帶骨牛小排，體驗最道地、最接地氣的韓國立食文化。', link: 'https://map.naver.com/p/search/%EC%97%B0%EB%82%A8%EC%84%9C%EC%8B%9D%EB%8B%B9' },
    { name: '廣藏市場 順熙家綠豆煎餅', desc: '傳統市場的道地美味，現煎綠豆餅配上馬格利酒超有氣氛。', link: 'https://map.naver.com/p/search/%EC%88%9C%ED%9D%AC%EB%84%A4%EB%B9%88%EB%8C%80%EB%96%A1' },
    { name: 'Cafe Onion 聖水洞', desc: '工業風廢墟改建的超人氣烘焙咖啡廳，麵包極具水準。', link: 'https://map.naver.com/p/search/%EC%96%B4%EB%8B%88%EC%96%B8%20%EC%84%B1%EC%88%98' }
  ],
  '福岡地區': [
    { name: '食堂うめぼし (Umeboshi)', desc: '天神南站旁的質感食堂，名物是燉煮入味的「豬肉肉豆腐」，白飯殺手等級美味。', link: 'https://www.google.com/maps/search/?api=1&query=食堂うめぼし+天神南' },
    { name: '食堂おわn (Owan)', desc: '溫馨食堂，主打現煮白飯與明太子比較定食，一次品嚐多款明太子。', link: 'https://www.google.com/maps/search/?api=1&query=食堂おわん+福岡' },
    { name: '炉端ノいとおかし', desc: '職人火候掌控的銀鮭與鰻魚定食，搭配土鍋白飯，早餐首選。', link: 'https://www.google.com/maps/search/?api=1&query=炉端ノいとおかし+福岡' },
    { name: 'さばたろう (Sabataro)', desc: '一人一鍋現煮白飯，搭配胡麻鯖魚等在地食材，純粹的九州美味。', link: 'https://www.google.com/maps/search/?api=1&query=さばたろう+福岡' },
    { name: '屋台まみちゃん (Mamichan)', desc: '天神人氣屋台，老闆號稱「日本第一快火燄廚師」，推薦炒飯與各種熱炒料理。', link: 'https://www.google.com/maps/search/?api=1&query=屋台まみちゃん+福岡+天神2-13-1' },
    { name: '博多 うなぎ屋 藤う那', desc: '博多站旁高級鰻魚飯專賣，外皮酥脆、肉質軟嫩，蜜月必吃的高級享受。', link: 'https://maps.app.goo.gl/6VEyg6ajcGJgUqgs9?g_st=ic' },
    { name: 'Shin-Shin 拉麵', desc: '天神本店，豚骨精華湯頭濃郁卻不膩口，麵條極細非常順口。', link: 'https://www.google.com/maps/search/?api=1&query=Shin-Shin%E6%8B%89%E9%BA%B5+%E5%A4%A9%E7%A5%9E%E6%9C%AC%E5%BA%97' },
    { name: '元祖牛腸鍋 樂天地', desc: '滿滿鮮甜高麗菜與肥美牛小腸，福岡必吃的靈魂鄉土料理。', link: 'https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%A5%96%E7%89%9B%E8%85%B8%E9%8D%8B+%E6%A8%82%E5%A4%A9%E5%9C%B0+%E5%A4%A9%E7%A5%9E' },
    { name: '一蘭拉麵 總本店', desc: '朝聖一蘭發源地，整棟燈籠建築超吸睛，品嚐最經典的豚骨風味。', link: 'https://www.google.com/maps/search/?api=1&query=%E4%B8%80%E8%98%AD%E6%8B%89%E9%BA%B5+%E7%B8%BD%E6%9C%AC%E5%BA%97+%E4%B8%AD%E6%B4%B2' },
    { name: '博多華味鳥 博多駅筑紫口店', desc: '頂級水炊鍋代表，自家飼養雞肉與熬煮出的乳白色膠原蛋白鮮湯。', link: 'https://maps.app.goo.gl/B9emNvnZ3Z5aaBoV7?g_st=ic' },
    { name: '敘敘苑 (KITTE博多)', desc: '日本高級燒肉代名詞，服務極佳，適合安排一頓浪漫的蜜月晚餐。', link: 'https://www.google.com/maps/search/?api=1&query=%E6%95%98%E6%95%98%E8%8B%91+KITTE%E5%8D%9A%E5%A4%9A' },
    { name: '稚加榮', desc: '店內有巨大水槽的活魚料亭，午間的明太子定食豪華又超值。', link: 'https://www.google.com/maps/search/?api=1&query=%E7%A8%9A%E5%8A%A0%E6%A6%AE+%E8%B5%A4%E5%9D%82' },
    { name: '中洲屋台 十番', desc: '感受福岡獨有的夜生活，坐在屋台吃關東煮、明太子玉子燒配啤酒。', link: 'https://www.google.com/maps/search/?api=1&query=%E4%B8%AD%E6%B4%B2%E5%B1%8B%E5%8F%B0+%E7%A6%8F%E5%B2%A1' },
    { name: '努努雞 (博多車站)', desc: '顛覆常理的「冷吃炸雞」，甜辣酥脆超涮嘴，買回飯店下酒必備。', link: 'https://www.google.com/maps/search/?api=1&query=%E5%8A%AA%E5%8A%AA%E9%9B%9E+%E5%8D%9A%E5%A4%9A%E8%BB%8A%E7%AB%99' },
    { name: '伊都きんぐ (天神)', desc: '福岡名產「甘王草莓」甜點專賣，現打草莓冰沙與銅鑼燒絕讚。', link: 'https://www.google.com/maps/search/?api=1&query=%E4%BC%8A%E9%83%BD%E3%81%8D%E3%82%93%E3%81%90+%E5%A4%A9%E7%A5%9E' }
  ],
  '由布院地區': [
    { name: '由布まぶし 心', desc: '必吃豐後牛釜飯三吃（原味、拌料、茶泡飯），鍋巴焦香令人回味無窮。', link: 'https://www.google.com/maps/search/?api=1&query=%E7%94%B1%E5%B8%83%E3%81%BE%E3%81%B6%E3%81%97+%E5%BF%83+%E9%A7%85%E5%89%8D%E6%94%AF%E5%BA%97' },
    { name: 'B-speak', desc: '由布院最難買的蛋糕捲，鮮奶油清爽不膩，海綿蛋糕鬆軟濕潤。', link: 'https://www.google.com/maps/search/?api=1&query=B-speak+%E7%94%B1%E5%B8%83%E9%99%A2' },
    { name: '金賞可樂餅', desc: '酥脆外皮包覆著入口即化的和牛與馬鈴薯內餡，最佳散步小吃。', link: 'https://www.google.com/maps/search/?api=1&query=%E9%87%91%E8%B3%9E%E5%8F%AF%E6%A8%82%E9%A4%85+%E6%B9%AF%E4%B9%8B%E5%9D%AA' },
    { name: 'SNOOPY 茶屋', desc: '日式庭園結合史努比主題，抹茶甜點可愛又精緻，拍照打卡聖地。', link: 'https://www.google.com/maps/search/?api=1&query=SNOOPY%E8%8C%B6%E5%B1%8B+%E7%94%B1%E5%B8%83%E9%99%A2' },
    { name: 'Yufuin Milch', desc: '招牌半熟起司蛋糕，剛出爐熱騰騰的爆漿口感與冷藏後的綿密都極棒。', link: 'https://www.google.com/maps/search/?api=1&query=Yufuin+Milch+%E7%94%B1%E5%B8%83%E9%99%A2' },
    { name: '櫟之丘 (Kunugi no Oka)', desc: '隱藏版半山腰餐廳，提供正宗石窯披薩，還能俯瞰由布院盆地絕景。', link: 'https://www.google.com/maps/search/?api=1&query=%E6%AB%9F%E4%B9%8B%E4%B8%98+%E7%94%B1%E5%B8%83%E9%99%A2' },
    { name: '湯之岳庵', desc: '位於金鱗湖畔「龜之井別莊」內，在古樸環境中享用頂級和食與山菜料理。', link: 'https://www.google.com/maps/search/?api=1&query=%E6%B9%AF%E4%B9%8B%E5%B2%B3%E5%B5%B5+%E7%94%B1%E5%B8%83%E9%99%A2' },
    { name: 'Cafe La Ruche', desc: '金鱗湖畔第一排景觀咖啡廳，法式麵包與咖啡是享受晨霧的最佳搭配。', link: 'https://www.google.com/maps/search/?api=1&query=Cafe+La+Ruche+%E7%94%B1%E5%B8%83%E9%99%A2' },
    { name: '鞠智 (Cucuchi)', desc: '嚴選大分在地食材，現炸的豐後牛極上可樂餅與手工銅鑼燒都非常推薦。', link: 'https://www.google.com/maps/search/?api=1&query=%E9%9E%A0%E6%99%BA+%E7%94%B1%E5%B8%83%E9%99%A2' },
    { name: '花野蕎麥麵', desc: '講究的手工現打蕎麥麵，清爽無負擔，適合在溫泉大餐之間換換口味。', link: 'https://www.google.com/maps/search/?api=1&query=%E8%8A%B1%E9%87%8E%E8%95%8E%E9%BA%A5%E9%BA%B5+%E7%94%B1%E5%B8%83%E9%99%A2' }
  ],
  '熊本與柳川': [
    { name: '勝烈亭', desc: '熊本必吃！米其林推薦的厚切酥脆豬排，搭配秘製醬汁與特製芝麻。', link: 'https://www.google.com/maps/search/?api=1&query=%E5%8B%9D%E7%83%88%E4%BA%AD+%E6%96%B0%E5%B8%82%E8%A1%97%E6%9C%AC%E5%BA%97' },
    { name: '元祖本吉屋', desc: '柳川百年傳承，蒸籠鰻魚飯將炭香、醬汁與米飯完美融合，極致享受。', link: 'https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%A5%96%E6%9C%AC%E5%90%89%E5%B1%8B+%E6%9F%B3%E5%B7%9D' },
    { name: '黑亭拉麵', desc: '熊本拉麵代表，焦香蒜油與濃郁豚骨交織出的傳統硬派風味。', link: 'https://www.google.com/maps/search/?api=1&query=%E9%BB%91%E4%BA%AD%E6%8B%89%E9%BA%B5+%E7%86%8A%E6%9C%AC' },
    { name: '馬櫻 (馬桜)', desc: '頂級馬肉料理專賣，生馬肉刺身與馬肉燒肉鮮甜無腥味，值得一試。', link: 'https://www.google.com/maps/search/?api=1&query=%E9%A6%AC%E6%AB%BB+%E9%8A%80%E5%BA%A7%E9%80%9A' },
    { name: '菅乃屋', desc: '另一家極具盛名的高級馬肉料理亭，服務與餐點精緻度都是蜜月級水準。', link: 'https://www.google.com/maps/search/?api=1&query=%E8%8F%85%E4%B9%83%E5%B1%8B+%E4%B8%8A%E9%80%9A' },
    { name: '赤牛 Dining yoka-yoka', desc: '位於櫻町商場，主打阿蘇特產「赤牛丼」，半熟烤牛肉質鮮嫩不油膩。', link: 'https://www.google.com/maps/search/?api=1&query=%E8%B5%A4%E7%89%9B+Dining+yoka-yoka+%E6%AB%BB%E7%94%BA' },
    { name: '桂花拉麵', desc: '濃厚豚骨雞肋雙湯頭，配上生高麗菜與蒜香麻油，熊本在地老字號。', link: 'https://www.google.com/maps/search/?api=1&query=%E6%A1%82%E8%8A%B1%E6%8B%89%E9%BA%B5+%E6%9C%AC%E5%BA%97' },
    { name: '蜂樂饅頭', desc: '熊本超人氣排隊名物，皮薄餡多的大判燒（紅豆餅），散步甜食。', link: 'https://www.google.com/maps/search/?api=1&query=%E8%9C%82%E6%A8%82%E9%A0%BB%E9%A0%AD+%E7%86%8A%E6%9C%AC%E6%9C%AC%E5%BA%97' },
    { name: '櫻之馬場 城彩苑 香梅庵', desc: '在城彩苑內品嚐熊本傳統和菓子「陣太鼓」，還有好吃的陣太鼓霜淇淋。', link: 'https://www.google.com/maps/search/?api=1&query=%E9%A6%99%E6%A2%85%E5%BA%B5+%E5%9F%8E%E5%BD%A9%E8%8B%91' },
    { name: '若松屋', desc: '柳川人氣極高的安政年間老店，蒸籠鰻魚飯口感綿密，風景與味道俱佳。', link: 'https://www.google.com/maps/search/?api=1&query=%E8%8B%A5%E6%9D%BE%E5%B1%8B+%E6%9F%B3%E5%B7%9D' },
    { name: '一心堂老舗', desc: '宇土市老字號點心店，推薦必吃三種餅皮的泡芙與奶凍，老闆非常熱情。', link: 'https://maps.app.goo.gl/2yrn25KBR5Gxy79WA?g_st=it' }
  ]
};
const tips = [
  { title: '✈️ 航班資訊', desc: '3/21 韓亞 OZ712 (11:40-15:25) | 3/24 首爾 RS727 (14:25-15:55) | 4/01 華航 CI117 (21:00-22:30)' },
  { title: '🚗 九州自駕', desc: '日本為右駕，請備妥駕照日文譯本與台灣駕照。九州高速公路建議租用 KEP (Kyushu Expressway Pass) 以節省過路費。' },
  { title: '⚡ 電壓插座', desc: '韓國 220V (兩圓孔)；日本 100V (兩扁孔)。台灣電器在日本通用，在韓國需轉接頭。' },
  { title: '🌡️ 春季氣候', desc: '3-4 月約 5~15 度。早晚溫差大，採「洋蔥式」穿搭。' },
  { title: '💰 貨幣匯率', desc: '1 TWD ≈ 40 KRW / 4.5 JPY。多數地方可刷卡，但小攤位仍需現金。' }
];

export default function HoneymoonApp() {
  const [tab, setTab] = useState('itinerary');

  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#0b1120] shadow-2xl font-sans text-slate-300 pb-20">
      {/* 精緻深色漸層 Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#020617] text-white p-10 text-center shadow-2xl border-b border-blue-900/40">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <h1 className="relative z-10 text-3xl font-extrabold tracking-widest uppercase drop-shadow-md">💍 蜜月旅行</h1>
        <p className="relative z-10 mt-3 text-blue-200 font-medium tracking-widest text-sm opacity-90">2026.03.21 — 04.01</p>
      </header>

      {/* 立體按鍵 Navigation */}
      <nav className="flex justify-center gap-3 p-5 bg-[#0b1120]/95 backdrop-blur-xl border-b border-slate-800/80 sticky top-0 z-20">
        {['itinerary', 'restaurants', 'tips'].map((t) => {
          const isActive = tab === t;
          const labels = { itinerary: '每日行程', restaurants: '餐廳地圖', tips: '行前必讀' };
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-3 px-2 text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.3)] translate-y-[2px]' 
                  : 'bg-slate-800 text-slate-400 shadow-[0_4px_0_rgba(15,23,42,1)] hover:bg-slate-700 hover:-translate-y-1 hover:shadow-[0_6px_0_rgba(15,23,42,1)]'
              }`}
              style={{
                transform: isActive ? 'translateY(2px)' : '',
                boxShadow: isActive ? 'inset 0 3px 6px rgba(0,0,0,0.4)' : ''
              }}
            >
              {labels[t]}
            </button>
          );
        })}
      </nav>

      <main className="p-6 sm:p-8 bg-[#0b1120]">
        {tab === 'itinerary' && (
          <div className="space-y-10">
            {itinerary.map((item, i) => (
              <div key={i} className="relative pl-8 border-l-[3px] border-blue-900/60">
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-[#0b1120] shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
                <h3 className="text-xl font-bold text-slate-100 leading-tight">
                  <span className="text-xs block font-bold text-blue-500 mb-1 tracking-wider uppercase">{item.date}</span>
                  {item.title}
                </h3>
                <p className="text-slate-400 mt-2 text-sm font-medium leading-relaxed">{item.desc}</p>
                {item.stay && (
                  <a
                    href={item.stayLink}
                    target="_blank"
                    className="inline-flex items-center mt-4 px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-xl text-xs text-blue-400 hover:bg-blue-900/30 hover:border-blue-700/50 transition-all shadow-sm"
                  >
                    🏨 住宿：{item.stay} <span className="ml-2 text-blue-500">↗</span>
                  </a>
                )}
                <div className="mt-6 space-y-4">
                  {item.details.map((d, idx) => {
                    const isFlight = d.text.includes('✈️') || d.text.includes('🚂');
                    return (
                      <div key={idx} className={`p-5 rounded-2xl border transition-colors ${isFlight ? 'bg-blue-900/20 border-blue-800/50' : 'bg-slate-800/30 border-slate-800 hover:border-slate-700'}`}>
                        <div className="flex justify-between items-center mb-3">
                          <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider ${isFlight ? 'text-white bg-blue-600' : 'text-blue-400 bg-blue-900/20 border border-blue-800/30'}`}>{d.time}</span>
                          {d.link && (
                            <a href={d.link} target="_blank" className="flex items-center text-[11px] text-blue-500 hover:text-blue-400 transition-colors">
                              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                              地圖導航
                            </a>
                          )}
                        </div>
                        <p className={`text-sm leading-relaxed ${isFlight ? 'text-blue-100 font-medium' : 'text-slate-300'}`}>{d.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'restaurants' && (
          <div className="space-y-10">
            {Object.entries(restaurants).map(([region, list], index) => (
              <div key={index} className="mb-8">
                <h3 className="text-lg font-bold text-white mb-5 flex items-center border-b border-slate-800 pb-3">
                  <span className="w-2 h-6 bg-blue-600 rounded-full mr-3"></span>
                  {region}
                </h3>
                <div className="grid gap-4">
                  {list.map((res, i) => (
                    <a 
                      key={i} 
                      href={res.link} 
                      target="_blank"
                      className="group block bg-gradient-to-br from-slate-800/40 to-slate-800/10 p-5 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-100 group-hover:text-blue-400 transition-colors text-base">{res.name}</h4>
                        <div className="bg-blue-900/30 p-1.5 rounded-full text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0 ml-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 mt-2 leading-relaxed">{res.desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'tips' && (
          <div className="space-y-6">
            {tips.map((tip, i) => (
              <div key={i} className="bg-slate-800/30 p-6 rounded-2xl border-l-4 border-blue-600 shadow-sm hover:bg-slate-800/50 transition-colors">
                <h4 className="flex items-center font-bold text-slate-100 mb-3 text-sm tracking-wide">
                  {tip.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="py-8 text-center text-slate-500 text-[10px] tracking-[0.25em] border-t border-slate-800/50 uppercase mt-10">
        Designed by Riley for ERIC & CHI-CHOU 🕶️
      </footer>
    </div>
  );
}
