// Run: node tests.mjs (Node.js; no packages required)
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('./index.html',import.meta.url),'utf8');
const regression=function regression(html){
const nodes={},storage=new Map(),tests=[];let interval;
class El{constructor(){this.children=[];this.dataset={};this.hidden=false;this.value="";this.textContent="";this.events={};this.classList={toggle(){}};this.style={};this.width=640;this.height=400;}append(...a){this.children.push(...a)}replaceChildren(...a){this.children=a}setAttribute(){}addEventListener(n,fn){this.events[n]=fn}getContext(){return null}matches(){return false}click(){return this.onclick?.({preventDefault(){},target:this})}remove(){}}
for(const m of html.matchAll(/id="([^"]+)"/g))nodes[m[1]]=new El();
nodes.lens.value="all";nodes.material.value="w";
const modes=["walk","inspect","build","erase"].map(v=>Object.assign(new El(),{dataset:{mode:v},textContent:v})),dirs=["0,-1","-1,0","0,1","1,0"].map(v=>Object.assign(new El(),{dataset:{step:v}}));
const doc={getElementById:id=>nodes[id],createElement:()=>new El(),querySelectorAll:q=>q==="[data-mode]"?modes:q==="[data-step]"?dirs:[],addEventListener(){},body:new El()};
const local={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)};
const code=html.split("<script>")[1].split("</script>")[0];
new Function("document","localStorage","location","navigator","setInterval","confirm",code)(doc,local,{protocol:"file:"},{},fn=>{interval=fn},()=>true);
const check=(name,pass)=>tests.push({name,pass:!!pass});
check("Startup + 400 tiles",!nodes.fatal.textContent&&nodes.board.children.length===400&&typeof interval==="function");
if(nodes.fatal.textContent)throw Error(nodes.fatal.textContent);
for(let i=0;i<2;i++)nodes.view3.click();
check("Repeated WebGL failure preserves 2D",!nodes.board.hidden&&nodes.viewwrap.hidden);
for(let i=0;i<4;i++){nodes.sites.children[i].click();for(let j=0;j<100;j++)interval();check("Travel "+nodes.sites.children[i].textContent,nodes.info.textContent.includes(nodes.sites.children[i].textContent)&&nodes.status.textContent==="Perjalanan selesai.");}
check("Journal has four sites",nodes.journal.children.length===4);
nodes.lens.value="aqliyah";nodes.lens.onchange();check("IQRA library classification",nodes.journal.children.some(a=>a.children[0]?.textContent==="Kitab IQRA’"));nodes.lens.value="all";nodes.lens.onchange();
const correct=[1,0,2,1,0];
for(let i=0;i<5;i++){nodes.questlist.children[i].click();nodes.questbody.children.find(x=>x.textContent==="Pahami peristiwa").click();const options=nodes.questbody.children.filter(x=>x.className==="choice");options[(correct[i]+1)%3].click();check("Quest "+(i+1)+" wrong answer retry",nodes.questbody.children.some(x=>x.textContent.includes("Coba periksa")));nodes.questbody.children.filter(x=>x.className==="choice")[correct[i]].click();check("Quest "+(i+1)+" correct answer",nodes.questbody.children.some(x=>x.textContent.startsWith("TAZKIYAH")));nodes.questbody.children.find(x=>x.textContent==="Lanjut ke gagasan khidmah").click();check("Quest "+(i+1)+" completion",nodes.questbody.children.some(x=>x.textContent.startsWith("KHIDMAH")));}
nodes.save.click();const saved=JSON.parse([...storage.values()][0]);check("Save all quest progress",Object.keys(saved.quests).length===5&&Object.values(saved.quests).every(v=>v===3));
nodes.selftest.click();check("Internal diagnostics 16/16",nodes.testresult.textContent.startsWith("16/16 lulus"));
nodes.reset.click();nodes.reset.click();check("Reset save and initial quest",storage.size===0&&nodes.info.textContent.includes("Halaman Nagari")&&nodes.questbody.children.some(x=>x.textContent.startsWith("IQRA’"))&&nodes.questlist.children[0].textContent==="Misteri Buku yang Hilang");
return tests;
};
const tests=regression(html);for(const t of tests)console.log((t.pass?'PASS ':'FAIL ')+t.name);console.log(tests.filter(t=>t.pass).length+'/'+tests.length+' passed');if(tests.some(t=>!t.pass))process.exitCode=1;
