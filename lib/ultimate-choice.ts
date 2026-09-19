import type { UltimateChoice, UltimateChoiceLevel } from "../types/ultimate-choice";
export function drawUltimateChoice(choices: readonly UltimateChoice[], levels: readonly UltimateChoiceLevel[], usedIds: readonly string[], random = Math.random): UltimateChoice | undefined {
 const available=choices.filter(choice=>levels.includes(choice.level)&&!usedIds.includes(choice.id));
 return available.length?available[Math.floor(random()*available.length)]:undefined;
}
