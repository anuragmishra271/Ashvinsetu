
const LI={en:0,hi:1,bn:2};
const T={
welcome:["Welcome!","स्वागत है!","স্বাগতম!"],
help:["How can we help you today?","हम आपकी कैसे मदद करें?","আমরা কীভাবে সাহায্য করতে পারি?"],
emerg:["Emergency Request","आपातकालीन अनुरोध","জরুরি অনুরোধ"],
emergSub:["Tap here for immediate medical help","तुरंत चिकित्सा सहायता के लिए यहाँ दबाएँ","তাৎক্ষণিক চিকিৎসা সহায়তার জন্য এখানে চাপুন"],
blood:["Find Blood Donors","रक्तदाता खोजें","রক্তদাতা খুঁজুন"],
bloodSub:["Search available blood in your area.","अपने क्षेत्र में उपलब्ध रक्त खोजें।","আপনার এলাকায় উপলব্ধ রক্ত খুঁজুন।"],
med:["Check Medicine Availability","दवा की उपलब्धता देखें","ওষুধের প্রাপ্যতা দেখুন"],
medSub:["Find nearby pharmacies with stock.","स्टॉक वाली पास की दुकानें खोजें।","স্টক আছে এমন কাছের ফার্মেসি খুঁজুন।"],
guide:["Consult a Health Guide","स्वास्थ्य गाइड से सलाह लें","স্বাস্থ্য গাইডের পরামর্শ নিন"],
guideSub:["Connect for basic medical advice.","बुनियादी चिकित्सा सलाह के लिए जुड़ें।","প্রাথমিক চিকিৎসা পরামর্শের জন্য যুক্ত হোন।"],
login:["LOGIN / REGISTER","लॉगिन / रजिस्टर","লগইন / রেজিস্টার"],
mob:["Enter Mobile Number (+91)","मोबाइल नंबर डालें (+91)","মোবাইল নম্বর দিন (+91)"],
otp:["Enter 6-digit OTP","6 अंकों का OTP डालें","৬ সংখ্যার OTP দিন"],
getotp:["GET OTP","OTP पाएँ","OTP পান"],verify:["VERIFY & CONTINUE","जाँचें और आगे बढ़ें","যাচাই করে এগিয়ে যান"],
role:["Select Your Role:","अपनी भूमिका चुनें:","আপনার ভূমিকা বেছে নিন:"],
Patient:["Patient","मरीज़","রোগী"],Hospital:["Hospital","अस्पताल","হাসপাতাল"],"Blood Bank":["Blood Bank","ब्लड बैंक","ব্লাড ব্যাংক"],Driver:["Ambulance Driver","एम्बुलेंस चालक","অ্যাম্বুলেন্স চালক"],
form:["Emergency Request Form","आपातकालीन अनुरोध फ़ॉर्म","জরুরি অনুরোধ ফর্ম"],
grp:["Select Required Blood Group","आवश्यक रक्त समूह चुनें","প্রয়োজনীয় রক্তের গ্রুপ বেছে নিন"],
units:["Units Needed","आवश्यक यूनिट","প্রয়োজনীয় ইউনিট"],
ploc:["Patient Location","मरीज़ का स्थान","রোগীর অবস্থান"],
setloc:["Set Location","स्थान चुनें","অবস্থান ঠিক করুন"],
urg:["Urgency Level","तात्कालिकता","জরুরি মাত্রা"],
u1:["Immediate (Within 1 hour)","तुरंत (1 घंटे में)","এখনই (১ ঘণ্টার মধ্যে)"],u2:["High (1-3 hours)","ज़्यादा (1-3 घंटे)","বেশি (১-৩ ঘণ্টা)"],u3:["Standard (3+ hours)","सामान्य (3+ घंटे)","সাধারণ (৩+ ঘণ্টা)"],
submit:["SUBMIT EMERGENCY REQUEST","आपातकालीन अनुरोध भेजें","জরুরি অনুরোধ পাঠান"],
call:["Call Now","अभी कॉल करें","এখনই কল করুন"],ver:["Verified","सत्यापित","যাচাইকৃত"],km:["km away","किमी दूर","কিমি দূরে"],
nearby:["Nearby Verified Blood Banks","पास के सत्यापित ब्लड बैंक","কাছের যাচাইকৃত ব্লাড ব্যাংক"],
serious:["Serious symptoms? Call 112 or visit a hospital now.","गंभीर लक्षण? 112 पर कॉल करें या तुरंत अस्पताल जाएँ।","গুরুতর লক্ষণ? ১১২ নম্বরে কল করুন বা এখনই হাসপাতালে যান।"],
hello:["Hello! I am Ashwini, your health guide. Tell me how you feel.","नमस्ते! मैं अश्विनी हूँ, आपकी स्वास्थ्य गाइड। बताइए आप कैसा महसूस कर रहे हैं।","নমস্কার! আমি অশ্বিনী, আপনার স্বাস্থ্য গাইড। বলুন আপনি কেমন বোধ করছেন।"],
gov:["Suggested Free Government Services","सुझाई गई मुफ़्त सरकारी सेवाएँ","প্রস্তাবিত বিনামূল্যের সরকারি পরিষেবা"],
track:["Live Tracking","लाइव ट्रैकिंग","লাইভ ট্র্যাকিং"],
home:["Home","होम","হোম"],bl:["Blood","रक्त","রক্ত"],gd:["Guide","गाइड","গাইড"],hist:["History","इतिहास","ইতিহাস"],
back:["Back","वापस","ফিরুন"],donors:["donors","रक्तदाता","রক্তদাতা"],amb:["ambulances","एम्बुलेंस","অ্যাম্বুলেন্স"],banks:["blood banks","ब्लड बैंक","ব্লাড ব্যাংক"],donT:["Become a Donor","रक्तदाता बनें","রক্তদাতা হোন"],me:["Me","मेरा","আমার"],dn:["Donate","दान","দান"],tag:["Emergency care, bridged to every village.","हर गाँव तक आपातकालीन सेवा।","প্রতিটি গ্রামে জরুরি স্বাস্থ্যসেবা।"],
disc:["This is basic guidance, not a diagnosis.","यह सामान्य सलाह है, निदान नहीं।","এটি সাধারণ পরামর্শ, রোগ নির্ণয় নয়।"]
};
const SYM={
Fever:{n:["Fever","बुखार","জ্বর"],i:"🌡️",a:["Rest, drink plenty of fluids, and take paracetamol as per the label. See a doctor if fever lasts over 3 days or goes above 103°F.","आराम करें, खूब पानी पिएँ और लेबल के अनुसार पैरासिटामोल लें। बुखार 3 दिन से ज़्यादा रहे या 103°F से ऊपर जाए तो डॉक्टर को दिखाएँ।","বিশ্রাম নিন, প্রচুর জল খান এবং লেবেল অনুযায়ী প্যারাসিটামল নিন। জ্বর ৩ দিনের বেশি থাকলে বা ১০৩°F-এর বেশি হলে ডাক্তার দেখান।"]},
Cough:{n:["Cough","खांसी","কাশি"],i:"😮‍💨",a:["Sip warm water with honey and avoid smoke. See a doctor if cough lasts over 2 weeks or brings up blood.","शहद वाला गुनगुना पानी पिएँ और धुएँ से बचें। खांसी 2 हफ्ते से ज़्यादा रहे या खून आए तो डॉक्टर को दिखाएँ।","মধু মেশানো গরম জল খান এবং ধোঁয়া এড়িয়ে চলুন। কাশি ২ সপ্তাহের বেশি থাকলে বা রক্ত পড়লে ডাক্তার দেখান।"]},
Headache:{n:["Headache","सिरदर्द","মাথাব্যথা"],i:"🤕",a:["Rest in a quiet place and drink water. Get help at once if it is sudden and severe, or comes with vomiting or confusion.","शांत जगह आराम करें और पानी पिएँ। अचानक तेज़ दर्द, उल्टी या भ्रम हो तो तुरंत मदद लें।","শান্ত জায়গায় বিশ্রাম নিন ও জল খান। হঠাৎ তীব্র ব্যথা, বমি বা বিভ্রান্তি হলে এখনই সাহায্য নিন।"]},
Stomach:{n:["Stomach Pain","पेट दर्द","পেটব্যথা"],i:"🤢",a:["Drink ORS and eat light food. Get help if there is severe pain, blood in stool, or you cannot keep fluids down.","ORS पिएँ और हल्का खाना खाएँ। तेज़ दर्द हो, मल में खून हो या तरल न रुके तो मदद लें।","ওআরএস খান ও হালকা খাবার খান। তীব্র ব্যথা, মলে রক্ত বা তরল পেটে না থাকলে সাহায্য নিন।"]},
Breath:{n:["Breathlessness","सांस फूलना","শ্বাসকষ্ট"],i:"🫁",red:1,a:["Breathlessness can be serious. Call 112 or go to a hospital now.","सांस फूलना गंभीर हो सकता है। अभी 112 पर कॉल करें या अस्पताल जाएँ।","শ্বাসকষ্ট গুরুতর হতে পারে। এখনই ১১২ নম্বরে কল করুন বা হাসপাতালে যান।"]}
};
const BANKS=[["City Hospital Blood Bank",2.1,{"A+":5,"O+":2,"B-":1},[45,38]],["Red Cross Society, Panihati",3.5,{"B-":3,"A+":2,"O+":4},[78,26]],["LifeLink Blood Center",5.8,{"O+":8,"AB+":2,"A-":1},[80,64]],["Barrackpore Govt Hospital",7.2,{"A-":2,"AB-":1,"O-":3,"B+":6},[20,70]]];
const PHARM=[["Sen Medical Hall",.8,["Paracetamol","ORS","Insulin","Azithromycin"]],["Panihati Pharmacy",1.6,["Paracetamol","Cetirizine","ORS"]],["Jan Aushadhi Kendra",2.9,["Paracetamol","Metformin","ORS","Amoxicillin"]]];
const GROUPS=["A+","A-","B+","B-","AB+","AB-","O+","O-"];
const ST=["QUEUED","NEW","ASSIGNED","IN PROGRESS","RESOLVED","REJECTED"];
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const now=()=>new Date().toLocaleString("en-IN",{dateStyle:"short",timeStyle:"short"});
let S={scr:"login",lang:store.get("as_lang","en"),role:"Patient",phone:"",otpSent:false,grp:"O+",units:3,urg:0,loc:"Nabadwip Government Hospital",bgrp:"O+",chat:[],mq:"",dg:"O+",dn:"",dd:"",eta:12,prog:0,queued:false,pos:null,tid:null,theme:null};
let R=store.get("as_req",[
 {id:123,name:"R. Das",loc:"Panihati, West Bengal",time:"23/06/24, 8:00 pm",contact:"+91 98765 43210",type:"Blood O+ x2",status:"NEW"},
 {id:122,name:"P. Sharma",loc:"Panihati, West Bengal",time:"23/06/24, 7:40 pm",contact:"+91 98765 43211",type:"Ambulance",status:"ASSIGNED"},
 {id:121,name:"A. Kanesha",loc:"Sodepur, West Bengal",time:"23/06/24, 6:15 pm",contact:"+91 98765 43212",type:"Blood B- x1",status:"IN PROGRESS"},
 {id:120,name:"L. Sharma",loc:"Khardaha, West Bengal",time:"22/06/24, 9:30 pm",contact:"+91 98765 43213",type:"Ambulance",status:"RESOLVED"}]);
let AUD=store.get("as_aud",[]);
let VQ=store.get("as_vq",["City Hospital Blood Bank","Rajesh Singh (Driver)","Red Cross Society, Panihati","LifeLink Blood Center"]);
const save=()=>{store.set("as_req",R);store.set("as_aud",AUD);store.set("as_vq",VQ);store.set("as_lang",S.lang)};
const t=k=>(T[k]||[k,k,k])[LI[S.lang]];
function toast(m){const e=document.createElement("div");e.className="toast";e.textContent=m;document.body.appendChild(e);setTimeout(()=>e.remove(),2600)}
function logA(m){AUD.unshift(`${S.role} (${S.phone||"demo"}): ${now()} – ${m}`);AUD=AUD.slice(0,30)}
const go=s=>{S.scr=s;if(s!=="track"){clearInterval(S.tid)}render()};
const langBar=()=>`<div class="lang">${["en","hi","bn"].map(l=>`<button class="${S.lang===l?"on":""}" data-lang="${l}">${{en:"English",hi:"हिंदी",bn:"বাংলা"}[l]}</button>`).join("")}</div>`;
const head=(back)=>`<div class="top">${back?`<button class="iconb" data-go="home" aria-label="${t("back")}">←</button>`:`<span class="logo"><svg viewBox="0 0 24 24" width="28" height="28"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#2d6cdf"/><stop offset="1" stop-color="#22c3b5"/></linearGradient></defs><rect width="24" height="24" rx="7" fill="url(#lg)"/><path d="M12 5v14M5 12h14" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>Ashvin<b>Setu</b></span>`}<span class="tr">${langBar()}<button class="iconb" data-act="theme" aria-label="Theme">🌓</button></span></div>`;
const nav=()=>`<nav class="nav">${[["home","🏠","home"],["blood","🩸","bl"],["guide","💬","gd"],["donate","🤝","dn"],["me","👤","me"]].map(([s,i,k])=>`<button data-go="${s}" class="${S.scr===s?"on":""}"><span>${i}</span>${t(k)}</button>`).join("")}</nav>`;

function vLogin(){return `${head()}<main><section class="hero"><p class="hi">AshvinSetu</p><h1 style="margin:0">${t("tag")}</h1></section><div style="height:12px"></div>
<div class="card"><h2 style="text-align:center">${t("login")}</h2>
<input id="ph" inputmode="numeric" maxlength="10" placeholder="${t("mob")}" value="${S.phone}" aria-label="${t("mob")}">
${S.otpSent?`<input id="otp" inputmode="numeric" maxlength="6" placeholder="${t("otp")}" aria-label="OTP">`:""}
<button class="btn" data-act="${S.otpSent?"verify":"otp"}" style="border-radius:8px">${S.otpSent?t("verify"):t("getotp")}</button></div>
<div class="card"><h2>${t("role")}</h2>${[["Patient","🧑‍⚕️"],["Hospital","🏥"],["Blood Bank","🩸"],["Driver","🚑"]].map(([r,i])=>`<button class="card big" data-role="${r}" style="background:var(--sf);margin-bottom:8px;min-height:60px;${S.role===r?"border:2px solid var(--blue)":"border:2px solid transparent"}"><span class="ico">${i}</span><b>${t(r)}</b></button>`).join("")}</div></main>`}

function vHome(){const lb=k=>t(k);return `${head()}<main><section class="hero"><p class="hi">${t("welcome")}</p><h1>${t("help")}</h1>
<svg class="ecg" viewBox="0 0 300 40" preserveAspectRatio="none"><polyline points="0,20 70,20 85,20 95,4 107,36 118,12 126,20 190,20 205,20 215,6 227,34 238,14 246,20 300,20"/></svg>
<div class="stats"><span><b>12</b>${lb("donors")}</span><span><b>3</b>${lb("amb")}</span><span><b>5</b>${lb("banks")}</span></div></section>
<button class="sos" data-go="form"><span class="sosi">🚨</span><span>${t("emerg")}<small>${t("emergSub")}</small></span></button>
<div class="tiles">${[["blood","🩸","blood","#e5484d,#ff8a65"],["meds","💊","med","#7c4dff,#4facfe"],["guide","🩺","guide","#00b894,#00cec9"],["donate","🤝","donT","#f59e0b,#fbbf24"]].map(([s,i,k,g])=>`<button class="tile" data-go="${s}"><span class="tico" style="background:linear-gradient(135deg,${g})">${i}</span>${t(k)}</button>`).join("")}</div>
<div class="card tip"><span style="font-size:26px">💡</span><span>${tip()}</span></div></main>${nav()}`}
function vBlood(){const g=S.bgrp;const rows=BANKS.filter(b=>b[2][g]).sort((a,b)=>a[1]-b[1]);
return `${head()}<main><div class="chips">${GROUPS.map(x=>`<button class="chip ${g===x?"on":""}" data-bg="${x}">${x}</button>`).join("")}</div>
<svg class="map" viewBox="0 0 100 90" role="img" aria-label="Map"><path d="M0 60 Q40 50 100 70" stroke="#f0c75e" stroke-width="2" fill="none"/><path d="M30 0 L50 90" stroke="#fff" stroke-width="2.5"/><path d="M0 30 L100 20" stroke="#fff" stroke-width="2"/><circle cx="50" cy="45" r="26" fill="#2d6cdf" fill-opacity=".2" stroke="#2d6cdf" stroke-width=".6"/>
<circle cx="50" cy="45" r="4" fill="#2d6cdf" stroke="#fff" stroke-width="1.2"/>${rows.map(b=>`<g transform="translate(${b[3][0]} ${b[3][1]})"><path d="M0 0 C-5 -6 -5 -10 0 -10 C5 -10 5 -6 0 0Z" fill="#c8423b" transform="scale(1.2)"/></g>`).join("")}</svg>
<h2>${t("nearby")} (${g})</h2>
${rows.length?rows.map(b=>`<div class="card"><b>${b[0]}</b><div class="row"><span>${b[1]} ${t("km")}<br>${g} (${b[2][g]} units)</span><span class="ok">✓ ${t("ver")}</span></div><button class="btn" style="margin-top:8px" data-act="call">📞 ${t("call")}</button></div>`).join(""):`<div class="card">No ${g} stock nearby. Try another group or send an emergency request.</div>`}${donorsHtml(g)}</main>${nav()}`}

function vMeds(){const q=S.mq.toLowerCase();
return `${head(1)}<main><h1>${t("med")}</h1><input id="mq" placeholder="Paracetamol, ORS, Insulin…" value="${S.mq}" aria-label="Medicine name">
${PHARM.map(p=>{const m=p[2].filter(x=>x.toLowerCase().includes(q));return m.length?`<div class="card"><div class="row"><b>${p[0]}</b><span>${p[1]} ${t("km")}</span></div><div class="chips" style="margin:8px 0 0">${m.map(x=>`<span class="tag" style="background:var(--sf)">✓ ${x}</span>`).join("")}</div></div>`:""}).join("")}
<p class="log">Demo data. Stock will come from pharmacy updates.</p></main>${nav()}`}

function vGuide(){return `${head()}<main><div class="warn" style="display:flex;justify-content:space-between;gap:8px"><span>📞 ${t("serious")}</span><a href="tel:112" style="color:inherit">112</a></div>
<div class="msg">${t("hello")}</div><button class="btn" style="margin-bottom:10px" data-act="mic">🎤 Speak your symptom</button><div class="chips">${Object.entries(SYM).map(([k,v])=>`<button class="chip" data-sym="${k}">${v.i} ${v.n[LI[S.lang]]}</button>`).join("")}</div>
${S.chat.map((c,ci)=>c.me?`<div class="msg me">${c.me}</div>`:`<div class="msg ${c.red?"warn":""}">${c.bot}${c.red?`<br><button class="btn red" style="margin-top:8px" data-go="form">${t("emerg")}</button>`:`<br><small class="log">${t("disc")}</small> <button class="chip" style="min-height:36px" data-say="${ci}" aria-label="Read aloud">🔊</button>`}</div>`).join("")}
<div class="card"><h2>${t("gov")}</h2>
<div class="row" style="margin-bottom:8px"><span><b>Ayushman Bharat</b><br><small class="log">Check your eligibility</small></span><a class="chip" href="https://pmjay.gov.in" target="_blank" rel="noopener">Check Now</a></div>
<div class="row"><span><b>e-Sanjeevani</b><br><small class="log">Free teleconsultation</small></span><a class="chip" href="https://esanjeevani.mohfw.gov.in" target="_blank" rel="noopener">Start Call</a></div></div></main>${nav()}`}

function vForm(){return `${head(1)}<main><h1>${t("form")}</h1><div class="card"><h2>${t("grp")}</h2><div class="chips">${GROUPS.map(x=>`<button class="chip bg ${S.grp===x?"on":""}" data-g="${x}">${x}</button>`).join("")}</div>
<h2>${t("units")}</h2><div class="row"><button class="chip bg" data-u="-1">−</button><b style="font-size:30px">${S.units}</b><button class="chip bg" data-u="1">+</button></div></div>
<div class="card"><h2>${t("ploc")}</h2><button class="btn" data-act="loc">📍 ${t("setloc")}</button><div class="tag" style="display:block;margin-top:8px;background:var(--sf)">${S.loc}</div></div>
<div class="card"><h2>${t("urg")}</h2>${["u1","u2","u3"].map((u,i)=>`<button class="chip" style="width:100%;margin-bottom:6px;${S.urg===i?"background:var(--blue);color:#fff":""}" data-urg="${i}">${t(u)}</button>`).join("")}</div>
<button class="btn red" data-act="submit">${t("submit")}</button></main>${nav()}`}

const STEPS=["Request sent","Hospital notified","Ambulance assigned","On the way","Arrived"];
const stepIdx=p=>p>=1?4:p>.1?3:p>.05?2:p>0?1:0;
const stepsHtml=()=>{const i=stepIdx(S.prog);return STEPS.map((s,k)=>`<div style="opacity:${k<=i?1:.4}">${k<=i?"✅":"⚪"} ${s}</div>`).join("")};
function vTrack(){return `${head(1)}<main><h1>${t("track")}</h1>
${S.queued?`<div class="warn">📡 Waiting for network. Your request will send automatically.</div>`:""}
<div class="card"><div class="row"><span>Driver:<br><b style="font-size:22px">Rajesh Singh</b></span><button class="btn s" data-act="call">📞 Call Driver</button></div><div style="font-size:18px;margin-top:6px">Ambulance: <b>WB 01 A 1234</b> · ETA: <b id="eta">${S.eta}</b> min</div></div>
<div id="lmap" class="map" style="height:260px"></div>
<div class="card" id="steps">${stepsHtml()}</div><button class="btn" style="margin-bottom:10px" data-act="share">🔗 Share my location with family</button>
<a class="btn" style="display:block;text-align:center;text-decoration:none;background:var(--red)" href="tel:112">🚨 Emergency SOS · 112</a></main>${nav()}`}
function vHist(){const mine=R.filter(r=>r.mine);return `${head()}<main><h1>${t("hist")}</h1>${mine.length?mine.map(r=>`<div class="card"><b>#${r.id} · ${r.type}</b><br>${r.time}<br><span class="tag ${r.status}">${r.status}</span></div>`).join(""):`<div class="card">No requests yet. Tap Emergency Request on Home when you need help.</div>`}</main>${nav()}`}

function vDash(){return `${head()}<main><h1>${t(S.role)} Dashboard</h1>${kpis()}
<div class="grid"><div class="card tw" style="background:var(--sf);border:1px solid var(--ln)"><h2>Emergency Requests</h2><table><tr><th>ID</th><th>Patient</th><th>Location</th><th>Time</th><th>Contact</th><th>Type</th><th>Status</th></tr>
${R.map(r=>`<tr><td>#${r.id}</td><td>${r.name}</td><td>${r.loc}</td><td>${r.time}</td><td>${r.contact}</td><td>${r.type}</td><td><select style="margin:0;padding:6px" data-st="${r.id}" aria-label="Status">${ST.map(s=>`<option ${s===r.status?"selected":""}>${s}</option>`).join("")}</select></td></tr>`).join("")}</table></div>
<div class="card" style="background:var(--sf);border:1px solid var(--ln)"><h2>Verification Queue</h2>${VQ.length?VQ.map((v,i)=>`<div class="row card" style="padding:8px 12px"><span>${v}</span><button class="btn s" data-vq="${i}">Verify</button></div>`).join(""):"All verified."}</div></div>
<div class="card" style="background:var(--sf);border:1px solid var(--ln)"><h2>Audit Log</h2>${AUD.length?AUD.map(a=>`<div class="log">${a}</div>`).join(""):`<div class="log">No actions yet.</div>`}</div>
<button class="btn s" data-act="logout">Log out</button></main>`}

function vDriver(){const q=R.filter(r=>r.type==="Ambulance"||r.mine);return `${head()}<main><h1>${t("Driver")}</h1>${q.map(r=>`<div class="card"><b>#${r.id} ${r.name}</b><br>${r.loc}<br><span class="tag ${r.status}">${r.status}</span><div style="margin-top:8px"><button class="btn" data-drv="${r.id}">${r.status==="IN PROGRESS"?"Mark resolved":"Accept request"}</button></div></div>`).join("")}<button class="btn s" data-act="logout">Log out</button></main>`}

const V={donate:vDonate,me:vMe,login:vLogin,home:vHome,blood:vBlood,meds:vMeds,guide:vGuide,form:vForm,track:vTrack,hist:vHist,dash:vDash,driver:vDriver};
function render(){const a=document.getElementById("app");const fo=document.activeElement&&document.activeElement.id,pos=document.activeElement&&document.activeElement.selectionStart;
document.body.classList.toggle("wide",S.scr==="dash");document.documentElement.lang=S.lang;a.innerHTML=V[S.scr]();if(S.scr==="track")initMap();
if(fo){const e=document.getElementById(fo);if(e){e.focus();try{e.setSelectionRange(pos,pos)}catch(x){}}}}

const DON=[["Arjun M.","O+",1.2],["Sneha R.","A+",2.4],["Imran S.","B-",3.1],["Priya D.","O+",4],["Kabir A.","AB+",5.2]];
function donorsHtml(g){const m=DON.filter(x=>x[1]===g);return m.length?`<h2 style="margin-top:14px">🤝 ${t("donT")} · ${g}</h2>`+m.map(x=>`<div class="card row"><span><b>${x[0]}</b><br><small class="log">${x[2]} ${t("km")} · ${x[1]}</small></span><button class="btn s" data-act="call">📞</button></div>`).join(""):""}
const TIPS=[["Wash hands with soap for 20 seconds. It stops many infections.","साबुन से 20 सेकंड तक हाथ धोएँ। इससे कई संक्रमण रुकते हैं।","সাবান দিয়ে ২০ সেকেন্ড হাত ধুন। এতে অনেক সংক্রমণ আটকায়।"],["Drink ORS at the first loose motion. Do not wait for weakness.","दस्त शुरू होते ही ORS पिएँ। कमज़ोरी का इंतज़ार न करें।","পাতলা পায়খানা শুরু হলেই ওআরএস খান। দুর্বল হওয়ার অপেক্ষা করবেন না।"],["One blood donation can help save up to three lives.","एक बार रक्तदान से तीन तक ज़िंदगियाँ बच सकती हैं।","একবার রক্তদানে তিনটি পর্যন্ত জীবন বাঁচতে পারে।"],["Keep location on when you ask for an ambulance.","एम्बुलेंस बुलाते समय फ़ोन की लोकेशन चालू रखें।","অ্যাম্বুলেন্স ডাকার সময় ফোনের লোকেশন চালু রাখুন।"]];
function tip(){return TIPS[new Date().getDate()%TIPS.length][LI[S.lang]]}
function kpis(){const c=s=>R.filter(r=>r.status===s).length,mx=Math.max(1,...ST.map(c));return `<div class="kpis">${[["Total",R.length,"#2d6cdf"],["New",c("NEW"),"#e5484d"],["Active",c("IN PROGRESS")+c("ASSIGNED"),"#f59e0b"],["Resolved",c("RESOLVED"),"#1f9d55"]].map(([l,v,col])=>`<div class="kpi" style="--c:${col}"><b>${v}</b><span>${l}</span></div>`).join("")}</div><div class="card"><h2>Requests by status</h2>${ST.map(s=>`<div class="bar"><span>${s}</span><i style="width:${c(s)/mx*100}%"></i><em>${c(s)}</em></div>`).join("")}</div>`}
function vDonate(){const D=store.get("as_donor",null);
if(D){const nx=D.ld?new Date(new Date(D.ld).getTime()+90*864e5):null,ok=!nx||nx<=new Date();
return `${head()}<main><h1>🤝 ${t("donT")}</h1><div class="card donor"><div class="avatar">${D.g}</div><div><b style="font-size:20px">${D.n}</b><br>${ok?`<span class="ok">✓ Eligible to donate</span>`:`<span class="tag">Eligible after ${nx.toLocaleDateString("en-IN")}</span>`}</div></div><p class="log">Donors usually wait 3 to 4 months between donations. The blood bank does the final check.</p><button class="btn" data-act="undonate" style="background:var(--mut)">Remove my donor profile</button></main>${nav()}`}
return `${head()}<main><h1>🤝 ${t("donT")}</h1><div class="card"><input id="dn" placeholder="Your name" value="${S.dn}" aria-label="Name"><h2>${t("grp")}</h2><div class="chips">${GROUPS.map(x=>`<button class="chip ${S.dg===x?"on":""}" data-dg="${x}">${x}</button>`).join("")}</div><h2>Last donated (optional)</h2><input id="dl" type="date" value="${S.dd}" aria-label="Last donated"></div><button class="btn" data-act="donate">Register as donor</button></main>${nav()}`}
function vMe(){return `${head()}<main><h1>👤 ${t("me")}</h1><div class="card"><h2>📞 Emergency contact (family)</h2><input id="ec" inputmode="numeric" maxlength="10" placeholder="10-digit mobile" value="${store.get("as_ec","")}" aria-label="Emergency contact"><button class="btn" data-act="savec">Save contact</button></div>
<div class="card"><h2>Display</h2><div class="chips"><button class="chip" data-act="theme">🌓 Dark / Light</button><button class="chip ${S.big?"on":""}" data-act="big">🔠 Large text</button></div></div>
<button class="card big" data-go="hist" style="width:100%"><span class="ico">🕘</span><b>${t("hist")}</b></button><button class="btn s" data-act="logout" style="background:var(--mut)">Log out</button></main>${nav()}`}
function applyTheme(){const r=document.documentElement;if(S.dark===true)r.dataset.theme="dark";else if(S.dark===false)r.dataset.theme="light";document.body.classList.toggle("xl",!!S.big);store.set("as_ui",{dark:S.dark,big:S.big})}
{const U=store.get("as_ui",{});S.dark=U.dark===undefined?null:U.dark;S.big=!!U.big;applyTheme()}
document.addEventListener("click",e=>{const c=e.target.closest("button,[data-go]");if(!c)return;const d=c.dataset;
if(d.lang){S.lang=d.lang;save();return render()}
if(d.go)return go(d.go);
if(d.role){S.role=d.role;return render()}
if(d.bg){S.bgrp=d.bg;return render()}
if(d.dg){S.dg=d.dg;return render()}
if(d.g){S.grp=d.g;return render()}
if(d.u){S.units=Math.max(1,Math.min(10,S.units+ +d.u));return render()}
if(d.urg){S.urg=+d.urg;return render()}
if(d.sym){const s=SYM[d.sym],i=LI[S.lang];S.chat.push({me:s.n[i]},{bot:s.a[i],red:s.red});return render()}
if(d.say){say(S.chat[+d.say].bot);return}
if(d.st){return}
if(d.vq){logA("Verified "+VQ[d.vq]);VQ.splice(+d.vq,1);save();return render()}
if(d.drv){const r=R.find(x=>x.id==d.drv);r.status=r.status==="IN PROGRESS"?"RESOLVED":"IN PROGRESS";logA(`${r.status} request #${r.id}`);save();return render()}
const a=d.act;if(!a)return;
if(a==="theme"){const r=document.documentElement,cur=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;S.dark=!cur;applyTheme();return}
if(a==="big"){S.big=!S.big;applyTheme();return render()}
if(a==="share"){const p=S.pos||PL,txt="I need help. My location: https://www.google.com/maps?q="+p.lat+","+p.lng;if(navigator.share)navigator.share({text:txt}).catch(()=>{});else{try{navigator.clipboard.writeText(txt)}catch(x){}toast("Link copied. Paste it to your family.")}return}
if(a==="savec"){store.set("as_ec",document.getElementById("ec").value.replace(/\D/g,""));return toast("Emergency contact saved")}
if(a==="donate"){if(!(S.dn||"").trim())return toast("Please enter your name");store.set("as_donor",{n:S.dn.trim(),g:S.dg,ld:S.dd});toast("Thank you! You are now a donor.");return render()}
if(a==="undonate"){store.set("as_donor",null);return render()}
if(a==="mic")return mic();
if(a==="otp"){const p=document.getElementById("ph").value.replace(/\D/g,"");if(p.length!==10)return toast("Enter a 10-digit mobile number");S.phone=p;S.otpSent=true;render();toast("Demo OTP: 123456")}
if(a==="verify"){if(document.getElementById("otp").value!=="123456")return toast("Wrong OTP. Demo OTP is 123456");logA("Logged in");S.otpSent=false;go(S.role==="Patient"?"home":S.role==="Driver"?"driver":"dash")}
if(a==="logout"){S.phone="";go("login")}
if(a==="call")toast("Demo: real phone numbers will connect here");
if(a==="loc"){if(!navigator.geolocation)return toast("Location is not available on this device");toast("Finding your location…");navigator.geolocation.getCurrentPosition(p=>{S.pos={lat:p.coords.latitude,lng:p.coords.longitude};S.loc="GPS: "+S.pos.lat.toFixed(4)+", "+S.pos.lng.toFixed(4);render()},()=>toast("Could not get location. Allow location access and try again."),{enableHighAccuracy:true,timeout:10000})}
if(a==="submit"){const id=Math.max(...R.map(r=>r.id))+1,off=!navigator.onLine;R.unshift({id,name:"You ("+(S.phone||"guest")+")",loc:S.loc,time:now(),contact:"+91 "+(S.phone||"—"),type:`Blood ${S.grp} x${S.units}`,status:off?"QUEUED":"NEW",mine:1});logA((off?"Queued offline request #":"Submitted request #")+id);S.queued=off;save();S.eta=12;S.prog=0;go("track");startTrack();toast(off?"No network. Request saved and will send when you are online.":"Request #"+id+" sent")}
});
document.addEventListener("change",e=>{if(e.target.dataset.st){const r=R.find(x=>x.id==e.target.dataset.st);r.status=e.target.value;logA(`Set request #${r.id} to ${r.status}`);save();render()}});
document.addEventListener("input",e=>{if(e.target.id==="mq"){S.mq=e.target.value;render()}if(e.target.id==="ph")S.phone=e.target.value;if(e.target.id==="dn")S.dn=e.target.value;if(e.target.id==="dl")S.dd=e.target.value});
render();

/* ---- Map, voice, offline ---- */
const PL={lat:22.6938,lng:88.3717};let MAP=null,AMB=null,ROUTE=[];
function initMap(){const el=document.getElementById("lmap");if(!el)return;MAP=null;
 if(typeof L==="undefined"){el.innerHTML='<div class="card">The map needs internet the first time you open it.</div>';return}
 const me=S.pos||PL;MAP=L.map(el).setView([me.lat,me.lng],15);
 L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap"}).addTo(MAP);
 const ic=e=>L.divIcon({html:`<div style="font-size:28px">${e}</div>`,className:"",iconSize:[30,30],iconAnchor:[15,28]});
 L.marker([me.lat,me.lng],{icon:ic("📍")}).addTo(MAP);
 ROUTE=[[.012,-.015],[.012,-.004],[.004,-.004],[.004,0],[0,0]].map(d=>[me.lat+d[0],me.lng+d[1]]);
 const pl=L.polyline(ROUTE,{color:"#2d6cdf",weight:5}).addTo(MAP);AMB=L.marker(ROUTE[0],{icon:ic("🚑")}).addTo(MAP);
 MAP.fitBounds(pl.getBounds(),{padding:[30,30]});moveAmb()}
function moveAmb(){if(!AMB)return;const n=ROUTE.length-1,f=Math.min(S.prog*n,n-.0001),i=Math.floor(f),k=f-i,a=ROUTE[i],b=ROUTE[i+1];AMB.setLatLng([a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k])}
function startTrack(){clearInterval(S.tid);S.tid=setInterval(()=>{if(S.queued||S.scr!=="track")return;S.prog=Math.min(1,S.prog+1/60);S.eta=Math.max(0,Math.ceil(12*(1-S.prog)));const e=document.getElementById("eta");if(e)e.textContent=S.eta;const s=document.getElementById("steps");if(s)s.innerHTML=stepsHtml();moveAmb()},1000)}
const KW={Fever:["fever","bukhar","bukhaar","बुखार","জ্বর","jor","jwor"],Cough:["cough","khansi","khasi","खांसी","खाँसी","কাশি","kashi"],Headache:["headache","head ache","sir dard","sardard","सिरदर्द","सिर दर्द","মাথাব্যথা","মাথা ব্যথা","matha byatha"],Stomach:["stomach","pet dard","pet me dard","पेट","পেট","pet byatha"],Breath:["breath","saans","sans","सांस","साँस","শ্বাস","shash","shas"]};
const LC={en:"en-IN",hi:"hi-IN",bn:"bn-IN"};
function say(txt){try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(txt);u.lang=LC[S.lang];speechSynthesis.speak(u)}catch(e){}}
function mic(){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return toast("Voice input needs Chrome. Tap a symptom instead.");
 const r=new SR();r.lang=LC[S.lang];r.interimResults=false;toast("Listening…");
 r.onresult=e=>{const tx=e.results[0][0].transcript.toLowerCase(),k=Object.keys(KW).find(k=>KW[k].some(w=>tx.includes(w)));
  if(!k){S.chat.push({me:"🎤 "+tx},{bot:{en:"I did not catch a symptom. Tap one below or say it again.",hi:"मैं लक्षण समझ नहीं पाई। नीचे से चुनें या फिर बोलें।",bn:"আমি লক্ষণ বুঝতে পারিনি। নিচ থেকে বেছে নিন বা আবার বলুন।"}[S.lang]});return render()}
  const s=SYM[k],i=LI[S.lang];S.chat.push({me:"🎤 "+tx},{bot:s.a[i],red:s.red});render();say(s.a[i])};
 r.onerror=()=>toast("Could not hear you. Check microphone permission.");r.start()}
addEventListener("online",()=>{let n=0;R.forEach(r=>{if(r.status==="QUEUED"){r.status="NEW";n++;logA("Sent queued request #"+r.id)}});if(n){S.queued=false;save();toast("Back online. Your request was sent.");render()}});
addEventListener("offline",()=>toast("You are offline. Requests will be saved."));
if("serviceWorker" in navigator)addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
