import React, { useState } from 'react';

const itinerary = [
  {
    date: '3/21',
    title: '台北 → 首爾',
    desc: '蜜月啟程，抵達首爾入住。',
    stay: 'UH FLAT The Seocho',
    stayLink: 'https://maps.app.goo.gl/mvFVTCyAHrFdb7sp9',
    suggestions: ['盤浦大橋月光彩虹噴泉', '江南區漫步', '石村湖賞櫻']
  },
  {
    date: '3/24',
    title: '首爾 → 福岡',
    desc: '跨國飛行，體驗博多活力。',
    stay: '博多站筑紫口FORZA飯店2館',
    stayLink: 'https://maps.app.goo.gl/n2iZpB3eBCqJuumJ7',
    suggestions: ['博多運河城逛街', '舞鶴公園賞櫻', '天神屋台夜生活']
  },
  {
    date: '3/27',
    title: '福岡 → 由布院',
    desc: '搭乘由布院之森，享受溫泉。',
    stay: '湯布院 森林露臺飯店',
    stayLink: 'https://maps.app.goo.gl/vWxKo6XUcehHmDXT6',
    suggestions: ['湯之坪街道吃小吃', '金鱗湖晨霧', '溫泉旅館一泊二食']
  },
  {
    date: '3/29',
    title: '由布院 → 熊本',
    desc: '造訪熊本城，漫步商店街。',
    stay: '大和ROYNET飯店 熊本銀座通店',
    stayLink: 'https://maps.app.goo.gl/fTGgtjmGEk2A3XCM9',
    suggestions: ['熊本城參觀', '上下通商店街購物', '櫻之馬場城彩苑']
  },
  {
    date: '4/01',
    title: '福岡 → 台北',
    desc: '最後衝刺採買，搭機返台。',
    suggestions: ['大濠公園散步', '福岡機場免稅店', '帶著甜蜜回憶回家']
  }
];

const restaurants = [
  { city: '首爾', name: 'Cafe Eero (카페 이로)', desc: '瑞草區有瀑布的藝術感咖啡廳，推薦黑芝麻拿鐵。' },
  { city: '首爾', name: '藍瓶 三清韓屋店', desc: '景福宮旁最有質感的韓屋咖啡，建議提早預約甜點套餐。' },
  { city: '首爾', name: '月亮廣場炭烤', desc: '乙支路非常有露營營火氣氛的烤雞店，宵夜首選。' },
  { city: '首爾', name: '山清炭火花園', desc: '乙支路最強排隊黑豬肉，記得先去 Catch Table 抽號碼牌。' },
  { city: '首爾', name: 'LEEDORIM (이도림)', desc: '西村有冒煙火山造景的浮誇咖啡廳，可麗露必點。' },
  { city: '首爾', name: '土俗村參雞湯', desc: '景福宮旁最經典的補身聖品，韓屋建築氛圍感滿分。' },
  { city: '首爾', name: 'Maman Gelato', desc: '聖水洞超紅義式冰淇淋，開心果口味是王牌。' },
  { city: '首爾', name: 'Standard Bread', desc: '聖水洞現烤焦糖布丁吐司，記得下午先預約。' },
  { city: '首爾', name: '林盛根國家認證排骨', desc: '新堂站 CP 值爆表，點肉送醬蟹無限自助吧。' },
  { city: '福岡', name: '肉屋肉一', desc: '博多站高CP值和牛燒肉，記得預約。' },
  { city: '福岡', name: 'Shin-Shin 拉麵', desc: '博多豚骨拉麵名店，湯頭順口。' },
  { city: '由布院', name: '由布まぶし 心', desc: '炭烤豐後牛釜飯三吃，排隊名店。' },
  { city: '熊本', name: '勝烈亭', desc: '熊本必吃厚切豬排，肉質紮實酥脆。' }
];

const tips = [
  { title: '⚡ 電壓插座', desc: '韓國 220V (兩圓孔)；日本 100V (兩扁孔)。台灣電器在日本通用，在韓國需轉接頭。' },
  { title: '🌡️ 春季氣候', desc: '3-4 月約 5~15 度。早晚溫差大，採「洋蔥式」穿搭。' },
  { title: '💰 貨幣匯率', desc: '1 TWD ≈ 40 KRW / 4.5 JPY。多數地方可刷卡，但日本鄉下或小攤位仍需現金。' },
  { title: '🌸 櫻花情報', desc: '3/21-4/01 正值日韓櫻花季，熱門景點人潮多，建議行程保留彈性。' }
];

export default function HoneymoonApp() {
  const [tab, setTab] = useState('itinerary');

  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#fff9fb] shadow-xl font-sans">
      <header className="bg-gradient-to-br from-pink-400 to-rose-300 text-white p-8 text-center rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold tracking-tight">💖 思淵 & 夫人 蜜月行程</h1>
        <p className="mt-2 text-pink-50 opacity-90">2026.03.21 — 04.01</p>
      </header>

      <nav className="flex sticky top-0 bg-white/80 backdrop-blur-md border-b z-10">
        {['itinerary', 'restaurants', 'tips'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-4 text-sm font-medium transition-all ${
              tab === t ? 'text-rose-500 border-b-2 border-rose-500' : 'text-gray-500 hover:text-rose-400'
            }`}
          >
            {t === 'itinerary' ? '行程規劃' : t === 'restaurants' ? '精選餐廳' : '提醒事項'}
          </button>
        ))}
      </nav>

      <main className="p-6">
        {tab === 'itinerary' && (
          <div className="space-y-8">
            {itinerary.map((item, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-dashed border-rose-200">
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-rose-400 rounded-full border-4 border-white shadow-sm" />
                <h3 className="text-lg font-bold text-rose-600">{item.date} {item.title}</h3>
                <p className="text-gray-700 mt-1">{item.desc}</p>
                {item.stay && (
                  <a
                    href={item.stayLink}
                    target="_blank"
                    className="inline-block mt-3 p-3 bg-white border border-pink-100 rounded-xl shadow-sm text-sm text-rose-500 hover:bg-pink-50 transition-colors"
                  >
                    🏨 住宿：{item.stay} 📍
                  </a>
                )}
                <ul className="mt-3 space-y-1">
                  {item.suggestions.map((s, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="mr-2 text-rose-300">✦</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {tab === 'restaurants' && (
          <div className="grid gap-4">
            {restaurants.map((res, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-pink-50">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-800">{res.name}</h4>
                  <span className="text-[10px] bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full font-bold">{res.city}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{res.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 'tips' && (
          <div className="space-y-6">
            {tips.map((tip, i) => (
              <div key={i}>
                <h4 className="flex items-center font-bold text-rose-500 mb-2">
                  <span className="mr-2">📍</span> {tip.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed bg-white p-4 rounded-2xl border border-pink-50">{tip.desc}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="p-8 text-center text-gray-400 text-xs">
        Riley 大叔祝你們蜜月愉快 🕶️🥂
      </footer>
    </div>
  );
}
