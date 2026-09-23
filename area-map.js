/* Static street-map overlay. Basemap control points in the 1000x800 crop:
   Palace Museum (530,520), Summer Palace (174,250), Beijing South (487,683).
   Qinghe Station and Guomao were cross-checked against the same projection. */
(()=>{
'use strict';
const frame={width:1000,height:800};
function point(lon,lat){return {x:Math.round(530+(lon-116.390)*3100),y:Math.round(520+(39.916-lat)*3250)};}
const areas=[
  {id:'northwest',label:['五道口 · 上地','清河'],labelAt:[116.316,40.022],places:[[116.337,39.995],[116.314,40.032],[116.309,40.041]]},
  {id:'hutong',label:['鼓楼 · 南锣','雍和宫'],labelAt:[116.377,39.960],places:[[116.369,39.941],[116.397,39.938],[116.411,39.947]]},
  {id:'central',label:['东四 · 王府井','东单'],labelAt:[116.423,39.904],places:[[116.412,39.924],[116.413,39.913],[116.418,39.902]]},
  {id:'east',label:['东直门','国贸'],labelAt:[116.477,39.937],places:[[116.436,39.939],[116.453,39.911]]},
  {id:'south',label:['前门 · 天坛','南城'],labelAt:[116.354,39.873],places:[[116.397,39.897],[116.408,39.881],[116.369,39.866]]}
];
const landmarks=[
  {name:'颐和园',lon:116.275,lat:39.999,dx:-53,dy:-17},
  {name:'清河站',lon:116.309,lat:40.041,dx:13,dy:-11},
  {name:'故宫',lon:116.390,lat:39.916,dx:-48,dy:-15},
  {name:'国贸',lon:116.453,lat:39.911,dx:13,dy:20},
  {name:'北京南站',lon:116.376,lat:39.866,dx:13,dy:20}
];
function path(a){return a.places.map(([lon,lat],i)=>{const p=point(lon,lat);return `${i?'L':'M'}${p.x} ${p.y}`;}).join(' ');}
function zone(a,number,selected){const p=point(...a.labelAt),active=selected===a.id,muted=selected!=='all'&&!active,words=a.label;return `<g class="area-map-zone ${active?'is-selected':''} ${muted?'is-muted':''}" data-map-area="${a.id}" role="button" tabindex="0" aria-label="选择${words.join('，')}片区" aria-pressed="${active}"><title>${words.join(' / ')}片区，点击筛选住宿</title><path class="area-map-corridor" d="${path(a)}"/><circle class="area-map-halo" cx="${p.x}" cy="${p.y}" r="40"/><rect class="area-map-pill" x="${p.x-79}" y="${p.y-28}" width="158" height="56" rx="17"/><text class="area-map-name" x="${p.x}" y="${p.y-3}" text-anchor="middle">${words[0]}</text><text class="area-map-sub" x="${p.x}" y="${p.y+17}" text-anchor="middle">${words[1]}</text><circle class="area-map-number-dot" cx="${p.x}" cy="${p.y}" r="37"/><text class="area-map-number" x="${p.x}" y="${p.y+11}" text-anchor="middle">${number}</text></g>`;}
function landmark(m){const p=point(m.lon,m.lat);return `<g class="area-map-landmark" aria-label="地图参照：${m.name}"><circle class="area-map-landmark-ring" cx="${p.x}" cy="${p.y}" r="8"/><circle cx="${p.x}" cy="${p.y}" r="3.5"/><text x="${p.x+m.dx}" y="${p.y+m.dy}">${m.name}</text></g>`;}
function svg(selected){return `<svg class="area-location-svg" viewBox="0 0 ${frame.width} ${frame.height}" role="group" aria-label="北京住宿片区地图；上北下南，左西右东；街道、公园和地标为方位参照"><image class="area-map-base" href="beijing-street-base.webp" x="0" y="0" width="1000" height="800" preserveAspectRatio="none"/><rect class="area-map-wash" width="1000" height="800"/>${areas.map((a,i)=>zone(a,i+1,selected)).join('')}${landmarks.map(landmark).join('')}<g class="area-map-compass"><path d="M943 74V35m0 0-11 14m11-14 11 14"/><text x="943" y="96" text-anchor="middle">北 N</text></g><rect class="area-map-foot-bg" x="16" y="759" width="324" height="28" rx="8"/><text class="area-map-foot" x="27" y="778">片区为大致范围 · 并非行政边界</text></svg>`;}
function note(selected,places){const area=places.find(a=>a.id===selected);if(!area)return `<div class="area-location-note-inner"><span class="eyebrow">BEIJING AT A GLANCE</span><h3>看得见街道的北京。</h3><p>底图以故宫、颐和园、清河站和北京南站校准方位。点图中的片区，房源列表会同步筛选。</p><ul><li>西北：五道口、上地和清河</li><li>老城北：鼓楼、南锣和雍和宫</li><li>中心：东四、王府井和东单</li><li>东边：东直门至国贸</li><li>南边：前门、天坛和南城</li></ul></div>`;return `<div class="area-location-note-inner"><span class="eyebrow">SELECTED AREA</span><h3>${area.name}</h3><p>${area.where}</p><p class="area-location-fit">适合：${area.fit}</p><p class="area-location-caution">留意：${area.tradeoff}</p><button type="button" class="text-button" data-map-area="all">查看全部片区 ↗</button></div>`;}
window.BeijingAreaMap={svg,note};
})();
