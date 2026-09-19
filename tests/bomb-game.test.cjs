const test = require("node:test");
const assert = require("node:assert/strict");
const { chooseCommand, explosionDurationMs } = require("../.test-build/lib/bomb-game.js");
const settings={selectedPlayerIds:[],difficulty:"random",explosionMode:"normal",enabledCommands:["reverse","skipOne"],eventDensity:"normal",fakeSounds:true};
test("explosion duration uses configured range boundaries",()=>{assert.equal(explosionDurationMs(settings,()=>0),20_000);assert.equal(explosionDurationMs(settings,()=>0.9999),70_000)});
test("command does not immediately repeat when another command is enabled",()=>{assert.equal(chooseCommand(["reverse","skipOne"],"reverse",()=>0),"skipOne")});
test("single enabled command may repeat",()=>{assert.equal(chooseCommand(["reverse"],"reverse",()=>0),"reverse")});
