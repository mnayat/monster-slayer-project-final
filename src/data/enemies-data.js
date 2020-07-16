const enemies = [
    {
      name: "amon",
      img: require("../../src/assets/enemies/amon.png"),
      imgBlink: require("../../src/assets/enemies/amon-blink.png")
    },
    {
        name: "arch-mage",
        img: require("../../src/assets/enemies/arch-mage.png"),
        imgBlink: require("../../src/assets/enemies/arch-mage-blink.png")
    },
    {
        name: "ares",
        img: require("../../src/assets/enemies/ares.png"),
        imgBlink: require("../../src/assets/enemies/ares-blink.png")
    },
    {
        name: "artemis",
        img: require("../../src/assets/enemies/artemis.png"),
        imgBlink: require("../../src/assets/enemies/artemis-blink.png")
    },
    {
        name: "asmodeus",
        img: require("../../src/assets/enemies/asmodeus.png"),
        imgBlink: require("../../src/assets/enemies/asmodeus-blink.png")
    },
    {
        name: "astaroth",
        img: require("../../src/assets/enemies/astaroth.png"),
        imgBlink: require("../../src/assets/enemies/astaroth-blink.png")
    },
    {
        name: "avian",
        img: require("../../src/assets/enemies/avian.png"),
        imgBlink: require("../../src/assets/enemies/avian-blink.png")
    },
    {
        name: "baal",
        img: require("../../src/assets/enemies/baal.png"),
        imgBlink: require("../../src/assets/enemies/baal-blink.png")
    },
    {
        name: "bahamut",
        img: require("../../src/assets/enemies/bahamut.png"),
        imgBlink: require("../../src/assets/enemies/bahamut-blink.png")
    },
    {
        name: "barbatos",
        img: require("../../src/assets/enemies/barbatos.png"),
        imgBlink: require("../../src/assets/enemies/barbatos-blink.png")
    },
    {
        name: "beelzebub",
        img: require("../../src/assets/enemies/beelzebub.png"),
        imgBlink: require("../../src/assets/enemies/beelzebub-blink.png")
    },
    {
        name: "black-dragon",
        img: require("../../src/assets/enemies/black-dragon.png"),
        imgBlink: require("../../src/assets/enemies/black-dragon-blink.png")
    },
    {
        name: "cactuar",
        img: require("../../src/assets/enemies/cactuar.png"),
        imgBlink: require("../../src/assets/enemies/cactuar-blink.png")
    },
    {
        name: "cerberus",
        img: require("../../src/assets/enemies/cerberus.png"),
        imgBlink: require("../../src/assets/enemies/cerberus-blink.png")
    },
    {
        name: "crixalis",
        img: require("../../src/assets/enemies/crixalis.png"),
        imgBlink: require("../../src/assets/enemies/crixalis-blink.png")
    },
    {
        name: "direwolf",
        img: require("../../src/assets/enemies/direwolf.png"),
        imgBlink: require("../../src/assets/enemies/direwolf-blink.png")
    },
    {
        name: "earth-dragon",
        img: require("../../src/assets/enemies/earth-dragon.png"),
        imgBlink: require("../../src/assets/enemies/earth-dragon-blink.png")
    },
    {
        name: "efreet",
        img: require("../../src/assets/enemies/efreet.png"),
        imgBlink: require("../../src/assets/enemies/efreet-blink.png")
    },
    {
        name: "fengalon",
        img: require("../../src/assets/enemies/fengalon.png"),
        imgBlink: require("../../src/assets/enemies/fengalon-blink.png")
    },
    {
        name: "fenrir",
        img: require("../../src/assets/enemies/fenrir.png"),
        imgBlink: require("../../src/assets/enemies/fenrir-blink.png")
    },
    {
        name: "fire-dragon",
        img: require("../../src/assets/enemies/fire-dragon.png"),
        imgBlink: require("../../src/assets/enemies/fire-dragon-blink.png")
    },
    {
        name: "gargoyle",
        img: require("../../src/assets/enemies/gargoyle.png"),
        imgBlink: require("../../src/assets/enemies/gargoyle-blink.png")
    },
    {
        name: "garuda",
        img: require("../../src/assets/enemies/garuda.png"),
        imgBlink: require("../../src/assets/enemies/garuda-blink.png")
    },
    {
        name: "giant-bee",
        img: require("../../src/assets/enemies/giant-bee.png"),
        imgBlink: require("../../src/assets/enemies/giant-bee-blink.png")
    },
    {
        name: "goblin",
        img: require("../../src/assets/enemies/goblin.png"),
        imgBlink: require("../../src/assets/enemies/goblin-blink.png")
    },
    {
        name: "goblin-shaman",
        img: require("../../src/assets/enemies/goblin-shaman.png"),
        imgBlink: require("../../src/assets/enemies/goblin-shaman-blink.png")
    },
    {
        name: "goblin-warlord",
        img: require("../../src/assets/enemies/goblin-warlord.png"),
        imgBlink: require("../../src/assets/enemies/goblin-warlord-blink.png")
    },
    {
        name: "godzilla",
        img: require("../../src/assets/enemies/godzilla.png"),
        imgBlink: require("../../src/assets/enemies/godzilla-blink.png")
    },
    {
        name: "hades",
        img: require("../../src/assets/enemies/hades.png"),
        imgBlink: require("../../src/assets/enemies/hades-blink.png")
    },
    {
        name: "hippogriff",
        img: require("../../src/assets/enemies/hippogriff.png"),
        imgBlink: require("../../src/assets/enemies/hippogriff-blink.png")
    },
    {
        name: "hobgoblin",
        img: require("../../src/assets/enemies/hobgoblin.png"),
        imgBlink: require("../../src/assets/enemies/hobgoblin-blink.png")
    },
    {
        name: "jack-frost",
        img: require("../../src/assets/enemies/jack-frost.png"),
        imgBlink: require("../../src/assets/enemies/jack-frost-blink.png")
    },
    {
        name: "jumbo-cactuar",
        img: require("../../src/assets/enemies/jumbo-cactuar.png"),
        imgBlink: require("../../src/assets/enemies/jumbo-cactuar-blink.png")
    },
    {
        name: "killer-bunny",
        img: require("../../src/assets/enemies/killer-bunny.png"),
        imgBlink: require("../../src/assets/enemies/killer-bunny-blink.png")
    },
    {
        name: "kraken",
        img: require("../../src/assets/enemies/kraken.png"),
        imgBlink: require("../../src/assets/enemies/kraken-blink.png")
    },
    {
        name: "leviathan",
        img: require("../../src/assets/enemies/leviathan.png"),
        imgBlink: require("../../src/assets/enemies/leviathan-blink.png")
    },
    {
        name: "megalodon",
        img: require("../../src/assets/enemies/megalodon.png"),
        imgBlink: require("../../src/assets/enemies/megalodon-blink.png")
    },
    {
        name: "minotaur",
        img: require("../../src/assets/enemies/minotaur.png"),
        imgBlink: require("../../src/assets/enemies/minotaur-blink.png")
    },
    {
        name: "monster-bunny",
        img: require("../../src/assets/enemies/monster-bunny.png"),
        imgBlink: require("../../src/assets/enemies/monster-bunny-blink.png")
    },
    {
        name: "mummy",
        img: require("../../src/assets/enemies/mummy.png"),
        imgBlink: require("../../src/assets/enemies/mummy-blink.png")
    },
    {
        name: "mutant-frog",
        img: require("../../src/assets/enemies/mutant-frog.png"),
        imgBlink: require("../../src/assets/enemies/mutant-frog-blink.png")
    },
    {
        name: "ogrim",
        img: require("../../src/assets/enemies/ogrim.png"),
        imgBlink: require("../../src/assets/enemies/ogrim-blink.png")
    },
    {
        name: "polar-bear",
        img: require("../../src/assets/enemies/polar-bear.png"),
        imgBlink: require("../../src/assets/enemies/polar-bear-blink.png")
    },
    {
        name: "poseidon",
        img: require("../../src/assets/enemies/poseidon.png"),
        imgBlink: require("../../src/assets/enemies/poseidon-blink.png")
    },
    {
        name: "sand-wyrm",
        img: require("../../src/assets/enemies/sand-wyrm.png"),
        imgBlink: require("../../src/assets/enemies/sand-wyrm-blink.png")
    },
    {
        name: "satyr",
        img: require("../../src/assets/enemies/satyr.png"),
        imgBlink: require("../../src/assets/enemies/satyr-blink.png")
    },
    {
        name: "sky-dragon",
        img: require("../../src/assets/enemies/sky-dragon.png"),
        imgBlink: require("../../src/assets/enemies/godzilla-blink.png")
    },
    {
        name: "slime",
        img: require("../../src/assets/enemies/slime.png"),
        imgBlink: require("../../src/assets/enemies/slime-blink.png")
    },
    {
        name: "snow-queen",
        img: require("../../src/assets/enemies/snow-queen.png"),
        imgBlink: require("../../src/assets/enemies/snow-queen-blink.png")
    },
    {
        name: "surtur",
        img: require("../../src/assets/enemies/surtur.png"),
        imgBlink: require("../../src/assets/enemies/surtur-blink.png")
    },
    {
        name: "thanatos",
        img: require("../../src/assets/enemies/thanatos.png"),
        imgBlink: require("../../src/assets/enemies/thanatos-blink.png")
    },
    {
        name: "tower-guard",
        img: require("../../src/assets/enemies/tower-guard.png"),
        imgBlink: require("../../src/assets/enemies/tower-guard-blink.png")
    },
    {
        name: "treasure-hunter",
        img: require("../../src/assets/enemies/treasure-hunter.png"),
        imgBlink: require("../../src/assets/enemies/treasure-hunter-blink.png")
    },
    {
        name: "vengeful-spirit",
        img: require("../../src/assets/enemies/vengeful-spirit.png"),
        imgBlink: require("../../src/assets/enemies/vengeful-spirit-blink.png")
    },
    {
        name: "wandering-hero",
        img: require("../../src/assets/enemies/wandering-hero.png"),
        imgBlink: require("../../src/assets/enemies/wandering-hero-blink.png")
    },
    {
        name: "werewolf",
        img: require("../../src/assets/enemies/werewolf.png"),
        imgBlink: require("../../src/assets/enemies/werewolf-blink.png")
    },
    {
        name: "winter-wyvern",
        img: require("../../src/assets/enemies/winter-wyvern.png"),
        imgBlink: require("../../src/assets/enemies/winter-wyvern-blink.png")
    },
    {
        name: "yeti",
        img: require("../../src/assets/enemies/yeti.png"),
        imgBlink: require("../../src/assets/enemies/yeti-blink.png")
    },
    {
        name: "zeus",
        img: require("../../src/assets/enemies/zeus.png"),
        imgBlink: require("../../src/assets/enemies/zeus-blink.png")
    }
  ];
  
  export default enemies;
  