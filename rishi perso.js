// aboutMe.js
class Person {
    constructor(name, passions, goals, funFacts) {
        this.name = name;
        this.passions = passions;
        this.goals = goals;
        this.funFacts = funFacts;
    }

    introduce() {
        console.log(`Hi! I'm ${this.name}.\n`);

        console.log("My Passions:");
        this.passions.forEach((p, i) => console.log(`${i + 1}. ${p}`));

        console.log("\nMy Goals:");
        this.goals.forEach((g, i) => console.log(`${i + 1}. ${g}`));

        console.log("\nFun Facts:");
        this.funFacts.forEach((f, i) => console.log(`${i + 1}. ${f}`));
    }
}

// Créer ton profil
const olivier = new Person(
    "Olivier Rishi Matabaro",
    [
        "Web development and programming",
        "Agro-industrial projects",
        "Community engagement and evangelism"
    ],
    [
        "Create a positive impact through technology and innovation",
        "Share my experiences with the community"
    ],
    [
        "I enjoy discovering new tools and platforms in the Web3 space",
        "I am curious about how technology can improve everyday life",
        "I believe in combining passion with practical action to make a difference"
    ]
);

// Afficher ton profil
olivier.introduce();
