const test=require("node:test"); const assert=require("node:assert/strict");
const {drawUltimateChoice}=require("../.test-build/lib/ultimate-choice.js");
const choices=[{id:"f1",optionA:"A",optionB:"B",categories:[],level:"family"},{id:"a1",optionA:"A",optionB:"B",categories:[],level:"adult"},{id:"h1",optionA:"A",optionB:"B",categories:[],level:"hard"}];
test("draws only from selected levels",()=>{assert.equal(drawUltimateChoice(choices,["adult","hard"],[],()=>0).id,"a1");assert.equal(drawUltimateChoice(choices,["adult","hard"],[],()=>.99).id,"h1")});
test("does not draw a used choice",()=>assert.equal(drawUltimateChoice(choices,["family","adult"],["f1"],()=>0).id,"a1"));
test("returns undefined when selected prompts are exhausted",()=>assert.equal(drawUltimateChoice(choices,["family"],["f1"],()=>0),undefined));
