/* Curated accommodation examples. Reference prices are snapshots, never live inventory. */
window.BeijingStays={
  areas:[
    {id:'central',name:'东四 / 王府井 / 东单',short:'老城核心',fit:'故宫、天安门、雍和宫几天衔接方便',tradeoff:'房价通常偏高，部分胡同内需要步行到地铁。'},
    {id:'hutong',name:'鼓楼 / 南锣 / 雍和宫',short:'胡同生活',fit:'什刹海、地坛、国子监与南锣鼓巷',tradeoff:'覆盖数个街区；夜间噪声、楼梯和行李通行要逐店核实。'},
    {id:'east',name:'东直门 / 国贸',short:'东部商圈',fit:'机场进出和第八天国贸夜景',tradeoff:'东直门到国贸并不近；去海淀园林与清河站要早出发。'},
    {id:'south',name:'前门 / 天坛 / 南城',short:'南城烟火',fit:'前门美食、天坛周边和北京南站',tradeoff:'样本包含右安门一带，距离前门较远，需逐店核对交通。'},
    {id:'northwest',name:'五道口 / 上地 / 清河',short:'园林高校',fit:'颐和园、圆明园、清北及清河站长城车',tradeoff:'去故宫与南锣等老城景点，通勤明显更长。'}
  ],
  extra:[
    {id:'station',name:'北平北京站青年旅舍',kind:'hostel',area:'central',district:'东单 / 北京站',level:'青旅床位',address:'东城区八宝楼胡同12号',transport:'临近东单片区；以房源页面确认入口。',why:'适合独行和想控制住宿预算的人，往老城景点交通方便。',url:'https://www.hostelworld.com/hostels/p/92632/peking-station-hostel/'},
    {id:'reconstruct',name:'重构空间·王府井胡同民宿',kind:'guesthouse',area:'central',district:'演乐胡同',level:'民宿独立房间',address:'东城区演乐胡同93号',transport:'胡同住处，拖行李时请核实最近的车辆下客点。',why:'想住在老城街巷里，同时保留独立房间。',url:'https://www.booking.com/hotel/cn/zhong-gou-kong-jian.en-gb.html'},
    {id:'xinxian',name:'Xinxian inn Beijing Railway Station',kind:'guesthouse',area:'central',district:'北京站周边',level:'客栈独立房间',address:'东城区建国门街道宝珠子胡同6号楼3–7层',transport:'靠近北京站片区；不要误认为在王府井步行街。',why:'预算相对温和的独立房间备选。',url:'https://www.booking.com/hotel/cn/xinxian-inn-beijing-railway-station.en-gb.html'},
    {id:'xingshe',name:'北京行舍青年旅舍',kind:'hostel',area:'hutong',district:'新街口南大街',level:'青旅床位',address:'西城区新街口南大街139号',transport:'在西城新街口，去南锣鼓巷不是步行几分钟。',why:'适合想住在老城西侧、兼顾什刹海的人。',url:'https://www.hostelworld.com/hostels/p/338101/beijing-xingshe-youth-hostel/'},
    {id:'ploft',name:'炮局工厂 P.Loft 青年旅舍',kind:'hostel',area:'hutong',district:'雍和宫 / 炮局胡同',level:'青旅床位',address:'东城区炮局头条29号',transport:'靠近雍和宫方向，去鼓楼仍需转场。',why:'第二天的地坛、雍和宫与国子监行程较顺。',url:'https://www.hostelworld.com/hostels/p/300735/p-loft-youth-hostel/'},
    {id:'pekingintl',name:'北平国际青年旅舍',kind:'hostel',area:'hutong',district:'南锣鼓巷',level:'青旅床位',address:'东城区南锣鼓巷113-2号',transport:'南锣主街内，留意节假日人流与晚间噪声。',why:'想把南锣和什刹海安排成步行散逛。',url:'https://www.hostelworld.com/hostels/p/20189/peking-international-youth-hostel/'},
    {id:'rong',name:'荣庭院精品民宿（帽儿胡同）',kind:'guesthouse',area:'hutong',district:'帽儿胡同',level:'庭院民宿',address:'东城区帽儿胡同28号',transport:'近南锣鼓巷与什刹海片区；具体步行以导航为准。',why:'想体验老北京庭院，又希望住独立房间。',url:'https://www.booking.com/hotel/cn/maoer-courtyard.html'},
    {id:'jinggu',name:'京古四合·北锣鼓巷客栈',kind:'guesthouse',area:'hutong',district:'花园前巷',level:'四合院客栈',address:'东城区花园前巷甲9号',transport:'靠近雍和宫方向；不是南锣鼓巷主街。',why:'偏好小型院落，适合慢游老城。',url:'https://www.booking.com/hotel/cn/bei-jing-jing-gu-si-he-bei-luo-gu-xiang.en-gb.html'},
    {id:'bunks',name:'The Bunks CBD 青年旅舍',kind:'hostel',area:'east',district:'国贸 / CBD',level:'青旅床位',address:'朝阳区 CBD 片区；门牌以订房页为准',transport:'靠近国贸片区，和东直门并非同一街区。',why:'想省住宿预算，同时方便第八天晚间逛国贸。',url:'https://www.hostelworld.com/hostels/p/339201/the-bunks-cbd-hostel/'},
    {id:'wohkoonCBD',name:'窝趣·者行孙青年酒店（国贸 SKP）',kind:'hostel',area:'east',district:'大望路 / SKP',level:'青旅 / 单人间',address:'朝阳区西大望路3号院2号楼',transport:'在大望路一侧，去国贸中心需另算路程。',why:'床位和独立房型都可核对，适合年轻旅客。',url:'https://www.trip.com/hotels/beijing-hotel-detail-92355039/wohkoon-sun-youth-hotel-beijing-international-trade-skp/'},
    {id:'yuyan',name:'寓言青年旅舍',kind:'hostel',area:'south',district:'右安门外',level:'青旅床位',address:'丰台区右安门外大街6号楼4层',transport:'距前门较远，请按实际地铁或打车时间衡量。',why:'偏重预算，适合愿意接受南城跨片区通勤的人。',url:'https://www.trip.com/hotels/beijing-hotel-detail-131772065/yuyan-youth-hostel/'},
    {id:'zheyi',name:'哲·艺精品民宿',kind:'guesthouse',area:'south',district:'丰台南城',level:'民宿独立房间',address:'丰台区柳香路84号院鲁能美高梅钓鱼台2号楼1单元',transport:'不在前门步行圈，预订前核实到地铁的距离。',why:'适合想要独立房间又愿意住在南城的人。',url:'https://www.booking.com/hotel/cn/zhe-yi-jing-pin-du-li-fang-jian-lin-jin-san-li-tun-guo-mao-bei-ou-jian-yi-feng.en-gb.html'},
    {id:'wohkoonWudaokou',name:'窝趣·者行孙青年酒店（五道口）',kind:'hostel',area:'northwest',district:'五道口 / 清华附近',level:'青旅床位',address:'海淀区五道口片区；门牌以订房页为准',transport:'近校园；到清河站和颐和园仍需实测。',why:'想把园林、校园两天放在住处附近。',url:'https://tw.trip.com/hotels/beijing-hotel-detail-123388924/wohkoon-zhexingsun-youth-hostel/'},
    {id:'atourQinghe',name:'北京上地清河高铁站亚朵 S 酒店',kind:'hotel',area:'northwest',district:'上地 / 清河',level:'舒适酒店',address:'海淀区上地东路27号',transport:'清河站方向，适合长城日；老城通勤偏长。',why:'偏好独立房间与去清河站的便利。',url:'https://www.booking.com/hotel/cn/atour-s-beijing-shangdi-qinghe-high-speed-railway-station.en-gb.html'}
  ],
  prices:{
    station:{amount:183,unit:'bed',original:'£20.48 / 床位',source:'Hostelworld 青旅列表',url:'https://www.hostelworld.com/hostels/asia/china/beijing/?ShowAll=1',note:'页面“Dorms From”，无指定入住日；按 2026-09-23 中国银行英镑参考汇率约 ¥8.94 换算。'},
    reconstruct:{amount:642,unit:'room',original:'CNY 641.51 / 1晚2成人',source:'Booking.com 民宿列表',url:'https://www.booking.com/guest-house/city/cn/beijing.en-gb.html',note:'2026年6月页面样本起价；入住日、房型与税费口径需复核。'},
    xinxian:{amount:432,unit:'room',original:'CNY 432.08 / 1晚2成人',source:'Booking.com 民宿列表',url:'https://www.booking.com/guest-house/city/cn/beijing.en-gb.html',note:'2026年6月页面样本起价；入住日、房型与税费口径需复核。'},
    xingshe:{amount:86,unit:'bed',original:'£9.67 / 床位',source:'Hostelworld 青旅列表',url:'https://www.hostelworld.com/hostels/asia/china/beijing/?ShowAll=1',note:'页面“Dorms From”，无指定入住日；按 2026-09-23 中国银行英镑参考汇率约 ¥8.94 换算。'},
    pekingintl:{amount:173,unit:'bed',original:'£19.34 / 床位',source:'Hostelworld 青旅列表',url:'https://www.hostelworld.com/hostels/asia/china/beijing/?ShowAll=1',note:'页面“Dorms From”，无指定入住日；按 2026-09-23 中国银行英镑参考汇率约 ¥8.94 换算。'},
    rong:{amount:539,unit:'room',original:'CNY 539.07 / 间夜',source:'Booking.com 景点附近列表',url:'https://www.booking.com/landmark/cn/beijing-hutong.es-ar.html',note:'页面历史样本起价；房型、税费及入住日需复核。'},
    jinggu:{amount:825,unit:'room',original:'£277 / 3晚2成人，折合约 ¥825 / 间夜',source:'Booking.com 房源页',url:'https://www.booking.com/hotel/cn/bei-jing-jing-gu-si-he-bei-luo-gu-xiang.en-gb.html',note:'页面 2026-09-14 至 09-17 三晚含税总价，按英镑参考汇率折算；仅作历史样本。'},
    bunks:{amount:122,unit:'bed',original:'£13.65 / 床位',source:'Hostelworld 青旅列表',url:'https://www.hostelworld.com/hostels/asia/china/beijing/?ShowAll=1',note:'页面“Dorms From”，无指定入住日；按 2026-09-23 中国银行英镑参考汇率约 ¥8.94 换算。'},
    wohkoonCBD:{amount:null,unit:'bed',original:'',source:'Trip.com 房源页',url:'https://www.trip.com/hotels/beijing-hotel-detail-92355039/wohkoon-sun-youth-hotel-beijing-international-trade-skp/',note:'房型不一，暂不展示未核实的床位价格。'},
    yuyan:{amount:111,unit:'bed',original:'£12.40 / 床位',source:'Hostelworld 青旅列表',url:'https://www.hostelworld.com/hostels/asia/china/beijing/?ShowAll=1',note:'页面“Dorms From”，无指定入住日；按 2026-09-23 中国银行英镑参考汇率约 ¥8.94 换算。'},
    zheyi:{amount:389,unit:'room',original:'CNY 388.87 / 1晚2成人',source:'Booking.com 民宿列表',url:'https://www.booking.com/guest-house/city/cn/beijing.en-gb.html',note:'2026年6月页面样本起价；入住日、房型与税费口径需复核。'},
    wohkoonWudaokou:{amount:null,unit:'bed',original:'HKD 76 起 / 房型未确认',source:'Trip.com 房源页',url:'https://tw.trip.com/hotels/beijing-hotel-detail-123388924/wohkoon-zhexingsun-youth-hostel/',note:'页面参考 2026-09-13 至 09-19；含单人间和床位，HKD76 的具体房型未确认，故不把它当作床位价。'},
    atourQinghe:{amount:624,unit:'room',original:'CNY 624 / 1晚2成人',source:'Booking.com 清河周边列表',url:'https://www.booking.com/city/cn/changping-cn.ja.html',note:'页面历史样本起价；入住日、房型及税费需复核。'}
  },
  exchange:{rate:8.94,url:'https://www.bankofchina.com/sourcedb/whpj/',date:'2026-09-23'}
};
window.BeijingStays.prices.ploft={amount:89,unit:'bed',original:'£10.01 / 床位',source:'Hostelworld 青旅列表',url:'https://www.hostelworld.com/hostels/asia/china/beijing/?ShowAll=1',note:'页面“Dorms From”，无指定入住日；按 2026-09-23 中国银行英镑参考汇率约 ¥8.94 换算。'};
