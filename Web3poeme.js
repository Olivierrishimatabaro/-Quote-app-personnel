/**
 * Web3Poem.js
 * Quote App Personnel
 * 
 * A poetic view of Web3:
 * not hype, but experience.
 * not noise, but opportunity.
 * 
 * Created by Olivier Rishi Matabaro
 */

const Web3Poem = () => {
  const world = {
    foundation: "decentralization",
    values: ["freedom", "trust", "ownership", "transparency"],
    fuel: "community",
    risk: true,
    reward: "infinite"
  };

  let journey = [];

  if (world.foundation === "decentralization") {
    journey.push("No gatekeepers, only protocols.");
  }

  world.values.forEach(value => {
    journey.push(`We build with ${value}, not promises.`);
  });

  if (world.risk) {
    journey.push("Every transaction is a lesson.");
    journey.push("Every failure writes experience to the chain.");
  }

  journey.push("Opportunities are permissionless.");
  journey.push("Innovation is open-source.");
  journey.push("Identity is owned, not borrowed.");
  journey.push("Time is measured in blocks, not excuses.");

  return journey.join("\n");
};

// Execute the poem
console.log(Web3Poem());
