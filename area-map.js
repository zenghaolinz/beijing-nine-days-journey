/* A tile-free schematic of relative Beijing locations; corridors are not boundaries. */
(()=>{
'use strict';
const bounds={west:116.255,east:116.50,south:39.85,north:40.055};
function point(lon,lat){return {x:Math.round(38+(lon-bounds.west)/(bounds.east-bounds.west)*684),y:Math.round(36+(bounds.north-lat)/(bounds.north-bounds.south)*500)};}
const areas=[
  {id:'northwest',label:['五道口 · 上地','清河'],labelAt:[116.318,40.025],places:[[116.337,39.995],[116.314,40.032],[116.347,40.044]]},
  {id:'hutong',label:['鼓楼 · 南锣','雍和宫'],labelAt:[116.379,39.957],places:[[116.369,39.941],[116.397,39.938],[116.411,39.947]]},
  {id:'central',label:['东四 · 王府井','东单'],labelAt:[116.404,39.909],places:[[116.412,39.924],[116.413,39.913],[116.418,39.902]]},
  {id:'east',label:['东直门','国贸'],labelAt:[116.462,39.942],places:[[116.436,39.939],[116.453,39.911]]},
  {id:'south',label:['前门 · 天坛','南城'],labelAt:[116.366,39.869],places:[[116.397,39.897],[116.408,39.881],[116.369,39.866]]}
];
const landmarks=[
  {name:'颐和园',lon:116.275,lat:39.999,dx:12,dy:-8},
  {name:'清河站',lon:116.347,lat:40.044,dx:8,dy:-7},
  {name:'故宫',lon:116.391,lat:39.916,dx:-36,dy:-8},
  {name:'国贸',lon:116.453,lat:39.911,dx:10,dy:17},
  {name:'北京南站',lon:116.379,lat:39.865,dx:-21,dy:20}
];
function paths(a){const pts=a.places.map(([lon,lat])=>point(lon,lat));return pts.map((p,i)=>`${i?'L':'M'}${p.x} ${p.y}`).join(' ');}
function zone(a,selected){const p=point(...a.labelAt),active=selected===a.id,muted=selected!=='all'&&!active,words=a.label;return `<g class="area-map-zone ${active?'is-selected':''} ${muted?'is-muted':''}" data-map-area="${a.id}" role="button" tabindex="0" aria-label="选择${words.join('，')}片区" aria-pressed="${active}"><title>${words.join(' / ')}片区，点击筛选住宿</title><path class="area-map-corridor" d="${paths(a)}"/><circle class="area-map-halo" cx="${p.x}" cy="${p.y}" r="37"/><rect class="area-map-pill" x="${p.x-70}" y="${p.y-28}" width="140" height="57" rx="17"/><text class="area-map-name" x="${p.x}" y="${p.y-3}" text-anchor="middle">${words[0]}</text><text class="area-map-sub" x="${p.x}" y="${p.y+17}" text-anchor="middle">${words[1]}</text></g>`;}
function landmark(m){const p=point(m.lon,m.lat);return `<g class="area-map-landmark" aria-label="方位参照：${m.name}"><circle cx="${p.x}" cy="${p.y}" r="4"/><text x="${p.x+m.dx}" y="${p.y+m.dy}">${m.name}</text></g>`;}
function svg(selected){return `<svg class="area-location-svg" viewBox="0 0 760 580" role="group" aria-label="北京住宿片区方位示意图；上北下南，左西右东"><rect class="area-map-paper" x="1" y="1" width="758" height="578" rx="22"/><path class="area-map-grid" d="M40 145H720 M40 265H720 M40 385H720 M40 505H720 M160 35V545 M320 35V545 M480 35V545 M640 35V545"/><text class="area-map-watermark" x="393" y="375" text-anchor="middle">北京老城</text><g class="area-map-compass"><path d="M690 82v-35m0 0-8 12m8-12 8 12"/><text x="690" y="103" text-anchor="middle">北 N</text></g>${areas.map(a=>zone(a,selected)).join('')}${landmarks.map(landmark).join('')}<text class="area-map-foot" x="30" y="556">位置示意 · 非行政边界或步行距离</text></svg>`;}
function note(selected,places){const area=places.find(a=>a.id===selected);if(!area)return `<div class="area-location-note-inner"><span class="eyebrow">BEIJING AT A GLANCE</span><h3>先看方位，再选住处。</h3><p>点图中的片区，住宿列表会同步筛选；下方的价格卡片也能反过来点亮位置。</p><ul><li>左上：海淀与清河方向</li><li>中间：故宫周边的老城</li><li>右侧：东直门、国贸</li><li>下方：前门、天坛与南城</li></ul></div>`;return `<div class="area-location-note-inner"><span class="eyebrow">SELECTED AREA</span><h3>${area.name}</h3><p>${area.where}</p><p class="area-location-fit">适合：${area.fit}</p><p class="area-location-caution">留意：${area.tradeoff}</p><button type="button" class="text-button" data-map-area="all">查看全部片区 ↗</button></div>`;}
window.BeijingAreaMap={svg,note};
})();
