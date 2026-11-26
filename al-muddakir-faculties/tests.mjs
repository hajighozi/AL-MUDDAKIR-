import {readFileSync} from "node:fs";import assert from "node:assert/strict";
const read=n=>readFileSync(new URL(n,import.meta.url),"utf8"),d=JSON.parse(read("curriculum.json")),h=read("index.html");
assert.equal(d.units.length,9);assert.equal(new Set(d.units.map(u=>u.id)).size,9);
for(const k of ["alam","peradaban","matematika"])assert.equal(d.units.filter(u=>u.faculty===k).length,3);
for(const u of d.units){assert.equal(u.editorialStatus,"draft");assert.equal(u.epistemicStatus,"C");assert.ok(u.mawdu&&u.jihat&&u.mahmul&&u.matan&&u.mujam.length&&u.syarah&&u.hasyiyah&&u.khidmah&&u.sourceNeeded);assert.equal(u.quiz.options.length,3);assert.ok(Number.isInteger(u.quiz.answer)&&u.quiz.answer>=0&&u.quiz.answer<3);assert.equal(u.sourceIds.length,0);}
assert.deepEqual(JSON.parse(h.match(/<script type="application\/json" id="curriculum">([\s\S]*?)<\/script>/)[1]),d);
new Function(h.match(/<script>([\s\S]*?)<\/script>/)[1]);console.log("PASS: 9 unit, 3 fakultas, data sinkron, struktur dan sintaks JS.");
