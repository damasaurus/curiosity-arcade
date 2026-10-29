const rounds = [
  { group: "FRIDAY PLANS", prompt: "You’ve spent the week planning a day trip for a group. Just before you leave, someone drops a different route into the chat. It would mean changing the first stop, but might save time later. What happens?", choices: [
    ["Pull up both routes and pick the one that works best for the group’s timing.", 2],
    ["Keep the booked first stop, then use their route for the rest of the day.", 1],
    ["Stick with the plan you already checked; it still makes for a good day.", 0]
  ]},
  { group: "A STRANGE TRIVIA ROUND", prompt: "At game night, you give an answer you’re pretty sure about. Someone across the table says the answer key has a different one. The next question is already on screen. What do you do?", choices: [
    ["Ask to see the wording on the answer key before calling it.", 2],
    ["Give your reasoning, accept the point for now, and check it after the round.", 2],
    ["Make the case for your answer and let the host decide so play can continue.", 0]
  ]},
  { group: "THE GROUP CHAT", prompt: "A friend sends a long message about a local café you’ve always said is the best in town. Their experience sounds very different from yours. The group is already deciding where to meet. What do you do?", choices: [
    ["Ask what happened, then suggest the group choose based on what everyone wants tonight.", 2],
    ["Mention your good experiences and offer the café as one option among a few.", 1],
    ["Say you’ve always had a good time there and make the case for keeping it on the list.", 0]
  ]},
  { group: "THE BOOK CLUB", prompt: "You’ve recommended a book to your club, and a new review points out a flaw you hadn’t noticed. Other reviews still love it. The meeting is tomorrow. What’s your move?", choices: [
    ["Bring both reactions to the group and see what they make of the disagreement.", 2],
    ["Read a couple more reviews tonight before deciding what to say.", 1],
    ["Keep your recommendation; one critical review doesn’t outweigh your own read.", 0]
  ]},
  { group: "THE HOUSE PROJECT", prompt: "Your friends try a DIY project using the steps you found. It turns out wonky. During cleanup, someone points to one step and says that may be where things went sideways. What do you do?", choices: [
    ["Replay that step together and compare it with the instructions.", 2],
    ["Explain why you picked those instructions, then ask what everyone else noticed.", 1],
    ["Point out the other things that made the project tricky and plan a better setup next time.", 0]
  ]},
  { group: "THE WEEKEND PLAN", prompt: "You convinced your friends to take a scenic trail. Halfway there, you notice the route is much harder than the description suggested, and the group is getting tired. What now?", choices: [
    ["Tell the group what you’ve found and look at the remaining routes together.", 2],
    ["Check the map yourself first, then suggest a change once you know the options.", 2],
    ["Keep going to the next checkpoint; everyone can reassess there.", 0]
  ]},
  { group: "A DINNER STORY", prompt: "At dinner, someone tells a story about a neighborhood you thought you knew well. Their experience surprises you, and you’re not sure it represents the whole area. What do you do?", choices: [
    ["Ask them to tell you a little more about the place they experienced.", 2],
    ["Share what you’ve seen too, and compare how the two experiences differ.", 1],
    ["Mention that the area can feel different from street to street.", 0]
  ]},
  { group: "THE NEW RECIPE", prompt: "You’re cooking from a recipe you’ve made before. A friend who cooks less often spots a step that seems out of order. Dinner is in 20 minutes. What happens?", choices: [
    ["Look at the recipe together and decide whether it’s worth changing this batch.", 2],
    ["Keep this batch moving, but ask them to show you the step they mean.", 1],
    ["Follow the version that has worked for you and keep an eye on the result.", 0]
  ]},
  { group: "THE MOVIE PICK", prompt: "A friend whose movie taste usually differs from yours recommends a film. Their description of one scene actually sounds convincing. You’re choosing what to watch tonight. What do you do?", choices: [
    ["Ask what else they liked about it and give their pick a proper look.", 2],
    ["Add it to the shortlist alongside a couple of your usual choices.", 1],
    ["Check a review from someone whose taste is closer to yours.", 0]
  ]},
  { group: "THE BOARD GAME", prompt: "A friend asks you to explain the rules of a game you know well. Halfway through, they ask about an edge case you’ve never run into. Everyone is waiting to start. What do you do?", choices: [
    ["Check the rulebook for that case, then give the quick version to everyone.", 2],
    ["Explain how you’d play it based on the rules you remember, and keep the book nearby.", 1],
    ["Make a house rule for tonight and look up the official answer later.", 0]
  ]},
  { group: "THE RAINY AFTERNOON", prompt: "Your group is deciding whether to drive to an outdoor event. The forecast is mixed: one app says showers, another says it should clear. Tickets are already booked. What do you suggest?", choices: [
    ["Check the hourly forecast and decide how much rain the group is willing to risk.", 2],
    ["Go, but agree on a nearby backup plan in case the weather turns.", 1],
    ["Use the forecast you trust most and make a call so everyone can get ready.", 0]
  ]},
  { group: "THE POTLUCK", prompt: "You’re bringing a dish to a potluck and estimate how much to make from last year’s turnout. A friend says this year’s guest list is quite different. The shops close soon. What do you do?", choices: [
    ["Ask how the guest list differs and adjust the amount if that changes the likely turnout.", 2],
    ["Make your usual amount, with something easy to add if more people show up.", 1],
    ["Stick with last year’s amount; it was enough and avoids a last-minute scramble.", 0]
  ]}
];

const profiles = [
  { name: "The Curious Cartographer", icon: "✳", copy: "You like a map with a few dotted lines. When the terrain gets surprising, you tend to look around, ask a question, and redraw the route as you go." },
  { name: "The Bridge Builder", icon: "↗", copy: "You’re good at making room for more than one point of view. You tend to look for the part of a conversation that helps everyone see a little more clearly." },
  { name: "The Plot-Twist Pilot", icon: "✦", copy: "New information doesn’t have to knock you off course—it can help you steer. You seem comfortable making a call while leaving room to adjust." },
  { name: "The Steady Compass", icon: "⌖", copy: "You bring a grounded energy to uncertain moments. You tend to look for what’s useful now, then let the next piece of information earn its place." }
];

const categories = ["Keeping ideas & ego separate", "Making room to revise", "Welcoming other viewpoints", "Calibrating confidence"];
const themeDescriptions = [
  "What you did when someone questioned an idea or experience you already trusted.",
  "How you responded when a plan or recommendation ran into new information.",
  "How much space you made for someone whose experience or taste differed from yours.",
  "How you balanced checking, deciding, and keeping things moving when the answer was uncertain."
];
const themeProfiles = [1, 2, 0, 3];
const profileReasons = [
  "That points toward a Bridge Builder: you made room to compare perspectives without needing every difference to become a contest.",
  "That points toward a Plot-Twist Pilot: you showed a knack for adjusting your route when the situation changed.",
  "That points toward a Curious Cartographer: you were willing to explore experiences outside your usual map.",
  "That points toward a Steady Compass: you balanced acting on what you knew with checking what you weren’t sure about."
];
let current = 0;
let picks = Array(rounds.length).fill(null);
let orders = rounds.map((round) => round.choices.map((_, index) => index));
let finalProfile = profiles[0];

const $ = (id) => document.getElementById(id);
const intro = $("intro"), game = $("game"), result = $("result");

function show(view) {
  [intro, game, result].forEach((node) => node.classList.add("hidden"));
  view.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderRound() {
  const item = rounds[current];
  $("round-count").textContent = `ROUND ${String(current + 1).padStart(2, "0")} / ${rounds.length}`;
  $("big-number").textContent = String(current + 1).padStart(2, "0");
  $("category-sticker").textContent = item.group;
  $("question-title").textContent = item.prompt;
  const progress = current;
  const track = document.querySelector(".progress-track");
  track.setAttribute("aria-valuenow", String(progress));
  $("progress-fill").style.width = `${(progress / rounds.length) * 100}%`;
  $("back-button").disabled = current === 0;
  $("next-button").disabled = picks[current] === null;
  $("next-button").innerHTML = current === rounds.length - 1 ? 'See my result <span aria-hidden="true">→</span>' : 'Next <span aria-hidden="true">→</span>';
  const choices = $("choices");
  choices.replaceChildren();
  orders[current].forEach((originalIndex, displayIndex) => {
    const [label] = item.choices[originalIndex];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `choice${picks[current] === originalIndex ? " selected" : ""}`;
    button.setAttribute("aria-pressed", String(picks[current] === originalIndex));
    const bullet = document.createElement("span");
    bullet.className = "choice-bullet";
    bullet.textContent = String.fromCharCode(65 + displayIndex);
    const text = document.createElement("span");
    text.textContent = label;
    button.append(bullet, text);
    button.addEventListener("click", () => {
      picks[current] = originalIndex;
      choices.querySelectorAll(".choice").forEach((choice, i) => {
        const selected = orders[current][i] === originalIndex;
        choice.classList.toggle("selected", selected);
        choice.setAttribute("aria-pressed", String(selected));
      });
      $("next-button").disabled = false;
    });
    choices.append(button);
  });
}

function shuffleChoices() {
  orders = rounds.map((round) => {
    const order = round.choices.map((_, index) => index);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
  });
}

function calculateResult() {
  const scores = [0, 0, 0, 0];
  const strongPicks = [0, 0, 0, 0];
  picks.forEach((pick, index) => {
    const domain = Math.floor(index / 3);
    const points = rounds[index].choices[pick][1];
    scores[domain] += points;
    if (points === 2) strongPicks[domain] += 1;
  });
  const best = Math.max(...scores);
  let topDomains = scores.map((value, index) => value === best ? index : -1).filter((index) => index >= 0);
  const topCount = Math.max(...topDomains.map((index) => strongPicks[index]));
  topDomains = topDomains.filter((index) => strongPicks[index] === topCount);
  const bestDomain = topDomains[0];
  finalProfile = profiles[themeProfiles[bestDomain]];
  $("result-icon").textContent = finalProfile.icon;
  $("result-title").textContent = finalProfile.name;
  $("result-copy").textContent = finalProfile.copy;

  const tiedAtTop = scores.filter((value) => value === best).length > 1;
  const tieNote = tiedAtTop ? " A few themes were neck and neck, so the one with more strong nudges took the lead." : "";
  $("result-reason").textContent = `Your clearest pattern was “${categories[bestDomain]}” (${scores[bestDomain]} of 6). ${profileReasons[bestDomain]}${tieNote}`;

  const scoreList = $("theme-scores");
  scoreList.replaceChildren();
  categories.forEach((category, index) => {
    const card = document.createElement("article");
    card.className = `theme-score${index === bestDomain ? " is-leading" : ""}`;
    const heading = document.createElement("div");
    heading.className = "theme-score-heading";
    const title = document.createElement("h4");
    title.textContent = category;
    const value = document.createElement("span");
    value.className = "theme-score-value";
    value.textContent = `${scores[index]}/6`;
    heading.append(title, value);
    const track = document.createElement("div");
    track.className = "theme-score-track";
    track.setAttribute("role", "img");
    track.setAttribute("aria-label", `${category}: ${scores[index]} out of 6`);
    const fill = document.createElement("span");
    fill.style.width = `${(scores[index] / 6) * 100}%`;
    track.append(fill);
    const note = document.createElement("p");
    note.textContent = themeDescriptions[index];
    card.append(heading, track, note);
    scoreList.append(card);
  });

  $("evidence-heading").textContent = `Your picks in “${categories[bestDomain]}”`;
  const evidenceList = $("answer-evidence-list");
  evidenceList.replaceChildren();
  for (let index = bestDomain * 3; index < bestDomain * 3 + 3; index++) {
    const evidence = document.createElement("article");
    evidence.className = "answer-evidence-item";
    const group = document.createElement("span");
    group.className = "evidence-group";
    group.textContent = rounds[index].group;
    const answer = document.createElement("p");
    answer.textContent = rounds[index].choices[picks[index]][0];
    evidence.append(group, answer);
    evidenceList.append(evidence);
  }
  $("share-note").textContent = "";
  show(result);
}

$("start-button").addEventListener("click", () => { current = 0; picks.fill(null); shuffleChoices(); renderRound(); show(game); });
$("home-link").addEventListener("click", (event) => { event.preventDefault(); picks.fill(null); show(intro); });
$("quit-button").addEventListener("click", () => { picks.fill(null); show(intro); });
$("back-button").addEventListener("click", () => { if (current > 0) { current -= 1; renderRound(); } });
$("next-button").addEventListener("click", () => {
  if (picks[current] === null) return;
  if (current === rounds.length - 1) calculateResult();
  else { current += 1; renderRound(); }
});
$("replay-button").addEventListener("click", () => { current = 0; picks.fill(null); shuffleChoices(); renderRound(); show(game); });
$("share-button").addEventListener("click", async () => {
  const shareText = `I got ${finalProfile.name} at The Curiosity Arcade — a tiny choose-your-next-move game.`;
  try {
    await navigator.clipboard.writeText(shareText);
    $("share-note").textContent = "Copied! Share it if you feel like it.";
  } catch {
    $("share-note").textContent = shareText;
  }
});
