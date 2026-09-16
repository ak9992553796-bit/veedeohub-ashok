<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>अशोक जी की आरती - arti.html - फाइनल जी</title>
<style>
body{margin:0;background:#FFF8E7;font-family:sans-serif}
.player{background:#fff;margin:12px;padding:15px;border-radius:15px;box-shadow:0 4px 12px #0002;text-align:center}
#thumb{width:100%;height:210px;background:#000;border-radius:12px;border:3px solid gold;object-fit:cover;cursor:pointer}
button{padding:10px 18px;border:none;border-radius:20px;background:#000;color:gold;font-weight:bold;margin:4px;border:2px solid gold}
.list{padding:10px}
.item{background:#fff;padding:13px;margin:7px 0;border-radius:10px;box-shadow:0 2px 5px #0001;border-left:5px solid gold;cursor:pointer}
.topBar{background:#000;color:gold;padding:8px;border-radius:8px;font-weight:700;border:2px solid gold}
.fraud{background:#ffe6e6;color:red;border:2px solid red;padding:5px;border-radius:7px;font-size:12px;margin-bottom:8px}
</style>
</head>
<body>
<div class="player">
<div class="fraud">🛡️ फ्रॉड ब्लॉक ON - Uptown Funk हटा दिया जी ✅</div>
<div class="topBar">📦 अशोक जी का अनन्त खजाना - arti.html - एक a वाला जी</div>
<img id="thumb" src="https://img.youtube.com/vi/AETFvQonf08/mqdefault.jpg" onclick="openYT()">
<h2 id="title"></h2>
<p id="lyrics" style="white-space:pre-line"></p>
<button onclick="prev()">⏮️ पीछे जी</button>
<button onclick="openYT()" style="background:green;color:#fff;border-color:green">▶️ चलाओ जी</button>
<button onclick="next()">आगे जी ⏭️</button>
</div>
<div class="list" id="list"></div>

<script>
// 📦 पूरा खजाना यहीं है जी - khazana.js अंदर ही डाल दिया जी
var KHAZANA = {
 BHAG_1: [
  {n:1, t:"ॐ जय जगदीश हरे जी", c:"आरती", icon:"🪔", video:"AETFvQonf08", txt:"ॐ जय जगदीश हरे स्वामी जय जगदीश हरे...\nभक्त जनों के संकट क्षण में दूर करे..."},
  {n:2, t:"जय गणेश देवा जी", c:"आरती", icon:"🪔", video:"O4M5a4Uej1Q", txt:"जय गणेश जय गणेश जय गणेश देवा...\nमाता जाकी पार्वती पिता महादेवा..."},
  {n:3, t:"लक्ष्मी आरती जी", c:"आरती", icon:"🪔", video:"Yq2NvvRg4Rc", txt:"ॐ जय लक्ष्मी माता मैया जय लक्ष्मी माता..."},
  {n:4, t:"हनुमान चालीसा जी", c:"चालीसा", icon:"🙏", video:"AETFvQonf08", txt:"श्री गुरु चरण सरोज रज निज मन मुकुर सुधारि..."},
  {n:5, t:"शिव तांडव जी", c:"तांडव", icon:"🔱", video:"vQpA_NwEc2U", txt:"जटा टवी गलज्जल प्रवाह पावित स्थले..."}
 ]
};
let data = KHAZANA.BHAG_1;
const BAD=["OPf0YbXqDm0","dQw4w9WgXcQ","Uptown","Funk","Mark Ronson","mov_bbb","movie.mp4","sexy","xxx"];
let cur=0;
function isBad(v){ return BAD.some(b=> (v||"").toLowerCase().includes(b.toLowerCase())); }
function openYT(){
  let v=data[cur].video;
  if(isBad(v)){ alert("फ्रॉड ब्लॉक है जी"); return; }
  window.open("https://www.youtube.com/watch?v="+v,"_blank");
}
function load(i){
  cur=i; let v=data[i];
  if(isBad(v.video)) return;
  document.getElementById('title').innerText=v.n+". "+v.t+" "+v.icon+" - "+v.c;
  document.getElementById('lyrics').innerText=v.txt;
  document.getElementById('thumb').src="https://img.youtube.com/vi/"+v.video+"/mqdefault.jpg";
}
function next(){ if(cur<data.length-1) load(cur+1); }
function prev(){ if(cur>0) load(cur-1); }
let h=""; for(let i=0;i<data.length;i++){ h+=`<div class="item" onclick="load(${i})">${data[i].n}. ${data[i].t} ${data[i].icon} <small>${data[i].c}</small></div>`; }
document.getElementById('list').innerHTML=h;
load(0);
// फ्रॉड साफ - veedeo_extra हटाओ जी
try{ localStorage.removeItem('veedeo_extra'); localStorage.removeItem('bhajan_extra'); }catch(e){}
</script>
</body>
</html>
