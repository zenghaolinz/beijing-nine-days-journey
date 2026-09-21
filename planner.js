(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.TripPlanner=factory();})(typeof window!=='undefined'?window:this,function(){
'use strict';
const POIS={
ditan:{name:'地坛公园',group:1,lat:39.953,lon:116.411,duration:90,earliest:480,latest:1020},
lama:{name:'雍和宫',group:1,lat:39.947,lon:116.411,duration:120,earliest:540,latest:990},
guozijian:{name:'国子监街与五道营胡同',group:1,lat:39.945,lon:116.405,duration:90,earliest:540,latest:1140},
square:{name:'天安门广场',group:2,lat:39.903,lon:116.391,duration:90,earliest:480,latest:1050},
palace:{name:'故宫博物院',group:2,lat:39.916,lon:116.390,duration:240,earliest:510,latest:1020},
jingshan:{name:'景山公园 · 登顶万春亭',group:3,lat:39.925,lon:116.390,duration:90,earliest:480,latest:1050},
nanluo:{name:'南锣鼓巷',group:3,lat:39.938,lon:116.397,duration:120,earliest:600,latest:1200},
summer:{name:'颐和园',group:4,lat:39.999,lon:116.275,duration:240,earliest:480,latest:1050},
yuanming:{name:'圆明园',group:4,lat:40.010,lon:116.297,duration:180,earliest:480,latest:1050},
pku:{name:'北京大学（须预约成功）',group:5,lat:39.991,lon:116.310,duration:120,earliest:540,latest:1080,conditional:true},
tsinghua:{name:'清华大学（须预约成功）',group:5,lat:40.003,lon:116.320,duration:120,earliest:540,latest:1080,conditional:true},
wall:{name:'八达岭长城',group:6,lat:40.358,lon:116.008,duration:240,earliest:540,latest:990},
guomao:{name:'国贸商圈夜景',group:7,lat:39.910,lon:116.452,duration:120,earliest:1080,latest:1290},
bird:{name:'鸟巢外观与奥林匹克公园',group:8,lat:39.991,lon:116.390,duration:90,earliest:540,latest:1200},
bridge:{name:'卢沟桥',group:8,lat:39.850,lon:116.213,duration:120,earliest:540,latest:1020}
};
const BOOKABLE=['palace','square','lama','summer','yuanming','pku','tsinghua','wall'];
const AREA_HOME={central:{lat:39.921,lon:116.412},east:{lat:39.930,lon:116.438},south:{lat:39.878,lon:116.388},northwest:{lat:40.038,lon:116.314},hutong:{lat:39.938,lon:116.385},north:{lat:40.001,lon:116.388}};
function dateNumber(v){if(!/^\d{4}-\d{2}-\d{2}$/.test(v||''))return NaN;const [y,m,d]=v.split('-').map(Number),n=Date.UTC(y,m-1,d),c=new Date(n);return c.getUTCFullYear()===y&&c.getUTCMonth()===m-1&&c.getUTCDate()===d?n/86400000:NaN;}
function dateAt(start,i){return new Date((dateNumber(start)+i)*86400000).toISOString().slice(0,10)}
function minutes(v){if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(v||''))return NaN;return +v.slice(0,2)*60 + +v.slice(3);}
function clock(v){return String(Math.floor(v/60)).padStart(2,'0')+':'+String(v%60).padStart(2,'0')}
function distance(a,b){const r=Math.PI/180,dl=(b.lat-a.lat)*r,dn=(b.lon-a.lon)*r,x=Math.sin(dl/2)**2+Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dn/2)**2;return 6371*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));}
function travel(a,b){if(!a||!b)return 30;const km=distance(a,b);return Math.ceil((km<1.3?Math.max(15,km*18+10):Math.min(150,25+km*3.8))/5)*5;}
function validate(b,start){if(!BOOKABLE.includes(b.poi))return '请选择支持的预约景点。';if(!Number.isFinite(dateNumber(start)))return '请先填写九日旅行的出发日期。';const day=dateNumber(b.date)-dateNumber(start);if(!Number.isFinite(day)||day<0||day>8)return '预约日期必须在出发日起的九天以内。';const time=minutes(b.time);if(!Number.isFinite(time)||time<360||time>1260)return '入场时间请填在06:00–21:00之间。';if(!Number.isInteger(b.duration)||b.duration<30||b.duration>480)return '预计游览时长应为30–480分钟。';if(time+b.duration>1320)return '这场游览会晚于22:00结束，请核对入场时间或时长。';return '';}
function build(options){const {start,reservations=[],pace='original',final='both',home=AREA_HOME.central}=options;const issues=[],warnings=[],days=Array.from({length:9},()=>[]),unplaced=[];
if(!Number.isFinite(dateNumber(start)))return {days,issues:['请先填写出发日期。'],warnings,unplaced,valid:false};
const booked=new Set();
for(const b of reservations){const error=validate(b,start);if(error){issues.push((POIS[b.poi]?.name||'预约')+'：'+error);continue;}if(booked.has(b.poi)){issues.push(POIS[b.poi].name+'有重复预约，请保留一个。');continue;}booked.add(b.poi);const p=POIS[b.poi],day=dateNumber(b.date)-dateNumber(start),time=minutes(b.time);days[day].push({...p,id:b.poi,locked:true,start:time,end:time+b.duration,duration:b.duration,date:b.date});if(day===0&&time<900)warnings.push(p.name+'在抵达日下午前，请确认到京时间。');if(b.poi==='palace'&&new Date(b.date+'T12:00:00Z').getUTCDay()===1)warnings.push('故宫预约在周一：一般闭馆，法定节假日例外，请核对票面与官方公告。');}
days.forEach((items,day)=>{items.sort((a,b)=>a.start-b.start);for(let i=1;i<items.length;i++){const a=items[i-1],b=items[i],need=travel(a,b);if(a.end+need>b.start)issues.push(`第${day+1}天：${a.name} ${clock(a.start)}–${clock(a.end)}，到${b.name}还需预留约${need}分钟，赶不上${clock(b.start)}的预约。`);}});
const all=Object.entries(POIS).filter(([id,p])=>!booked.has(id)&&!(final==='bird'&&id==='bridge')&&!(final==='bridge'&&id==='bird')).map(([id,p])=>({...p,id,locked:false}));
// Long, constrained visits are placed before flexible street walks.
all.sort((a,b)=>Number(!!a.conditional)-Number(!!b.conditional)||(a.latest-a.earliest-a.duration)-(b.latest-b.earliest-b.duration)||a.group-b.group);
function preferred(p){const related=reservations.filter(b=>POIS[b.poi]?.group===p.group&&!validate(b,start));if(related.length)return dateNumber(related[0].date)-dateNumber(start);if(pace==='balanced'){if(p.id==='summer'||p.id==='pku')return 4;if(p.id==='yuanming'||p.id==='tsinghua')return 5;}if(p.id==='yuanming'&&pace==='relaxed')return 5;if(p.group===2&&new Date(dateAt(start,2)+'T12:00:00Z').getUTCDay()===1)return 3;if(p.group===3&&new Date(dateAt(start,2)+'T12:00:00Z').getUTCDay()===1)return 2;return p.group;}
function candidate(p,day){const items=days[day];if(day===0&&!items.some(x=>x.locked))return null;if(day===7&&p.id!=='guomao'&&!items.some(x=>x.locked))return null;if(p.id==='palace'&&new Date(dateAt(start,day)+'T12:00:00Z').getUTCDay()===1)return null;if(p.id==='wall'&&items.length)return null;if(p.id!=='wall'&&items.some(x=>x.id==='wall'))return null;
let best=null;for(let i=0;i<=items.length;i++){const prev=items[i-1],next=items[i],from=prev||home,transit=travel(from,p),floor=day===0?900:480;let st=Math.max(p.earliest,prev?prev.end+transit:floor+transit); // room for a seated lunch between visits
if(prev&&prev.end<=840&&st>=690&&prev.start<690)st+=45;
const end=st+p.duration;if(end>p.latest||end>1260||next&&end+travel(p,next)>next.start)continue;const score=Math.abs(day-preferred(p))*90+transit+(next?travel(p,next):travel(p,home))*0.4+(p.conditional?25:0)+(st-p.earliest)*0.03;if(!best||score<best.score)best={day,start:st,end,score};}return best;}
for(const p of all){if(pace==='relaxed'&&p.id==='tsinghua'&&!booked.has('tsinghua')&&!booked.has('pku')){unplaced.push({...p,reason:'轻松模式把清华列为替代选项；可以用有效预约替换。'});continue;}let best=null;for(let day=1;day<9;day++){const c=candidate(p,day);if(c&&(!best||c.score<best.score))best=c;}if(!best){unplaced.push({...p,reason:p.conditional?'没有合适空档，且入校仍需预约。':'在保守游览时段内没有足够空档，未强行塞入。'});continue;}days[best.day].push({...p,...best});days[best.day].sort((a,b)=>a.start-b.start);}
days.forEach((items,day)=>{items.forEach((p,i)=>p.travelBefore=travel(i?items[i-1]:home,p));if(items.length){const d=items[0].start-travel(home,items[0]);if(d<360)warnings.push(`第${day+1}天可能要在06:00前出发，请核对交通安排。`);}});
return {days,issues,warnings:[...new Set(warnings)],unplaced,valid:issues.length===0};}
return {POIS,BOOKABLE,AREA_HOME,build,validate,dateAt,dateNumber,clock,travel};
});
