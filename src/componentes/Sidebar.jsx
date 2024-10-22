import React, { useState } from "react";
import { ScrollShadow, Tooltip } from "@nextui-org/react";
import GothicCastle from "../assets/img/Gothic castle.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Abandoned from "../assets/img/Abandoned carnival.jpg";
import Crumbling from "../assets/img/Crumbling.jpg";
import Dark from "../assets/img/Dark alley.jpg";
import Foggy from "../assets/img/Foggy docks.jpg";
import Full from "../assets/img/Full moon fog.jpg";
import Ghostly from "../assets/img/Ghostly swamp.jpg";
import Ghosts from "../assets/img/Ghosts.jpg";
import Gothic from "../assets/img/Gothic castle.jpg";
import Haunted from "../assets/img/Haunted forest path.jpg";
import Pumpkins from "../assets/img/Pumpkins.jpg";
import Skulls from "../assets/img/Skulls and bones.jpg";
import Spooky from "../assets/img/spooky mansion.jpg";
import Twisted from "../assets/img/Twisted trees.jpg";
import Vampire from "../assets/img/Vampire castle.jpg";
import Werewolf from "../assets/img/Werewolf lair.jpg";
import Witch from "../assets/img/Witch.jpg";
import WitchCave from "../assets/img/Witch cave.jpg";

import Batman from "../assets/img/batman.jpg";
import Dracula from "../assets/img/dracula.jpg";
import ghostbusters from "../assets/img/ghostbusters.jpg";
import joker from "../assets/img/joker.jpg";
import spiderman from "../assets/img/spiderman.jpg";
import superman from "../assets/img/superman.jpg";
import wonder from "../assets/img/wonder.jpg";
import zombie from "../assets/img/zombie.jpg";

import temBatman from "../assets/img/templates/batman.jpg";
import temVampire from "../assets/img/templates/vampireCastle.jpg";
import temWerewolf from "../assets/img/templates/werewolf.jpg";
import temClow from "../assets/img/templates/clown.jpg";
import temMummy from "../assets/img/templates/mummy.jpg";
import temZombie from "../assets/img/templates/zombie.jpg";
import tempPirate from "../assets/img/templates/pirate.jpg";
import tempKnight from "../assets/img/templates/knight.jpg";
import temMad from "../assets/img/templates/mad_scientist.jpg";
import temSpiderman from "../assets/img/templates/spiderman.jpg";
import temSuperman from "../assets/img/templates/superman.jpg";
import temWonder from "../assets/img/templates/wonder.jpg";
import temIron from "../assets/img/templates/ironman.jpg";
import temDragon from "../assets/img/templates/dragon.jpg";

import { custom } from "@cloudinary/url-gen/qualifiers/region";

const Sidebar = ({ sendPrompt, imageEnv, sendReplaceWith }) => {
  const [selectedAction, setSelectedAction] = useState("");
  const [prompt, setPrompt] = useState("");
  const [costume, setCostume] = useState("");

  const imagesData = [
    {
      src: Abandoned,
      alt: "Abandoned carnival",
      prompt: "Broken rides torn tents and creepy clown statues",
      tooltip: "Replace background with an abandoned carnival",
    },
    {
      src: Crumbling,
      alt: "Crumbling castle",
      prompt: "Crumbling castle with dark clouds overhead",
      tooltip: "Replace background with a crumbling castle",
    },
    {
      src: Dark,
      alt: "Dark alley",
      prompt: "Narrow shadowy alley with flickering streetlights",
      tooltip: "Replace background with a dark alley",
    },
    {
      src: Foggy,
      alt: "Foggy docks",
      prompt: "Abandoned wooden docks covered in mist and creaking noises",
      tooltip: "Replace background with foggy, abandoned docks",
    },
    {
      src: Full,
      alt: "Full moon fog",
      prompt: "Barren field full moon and rolling thick fog",
      tooltip: "Replace background with a foggy full moon scene",
    },
    {
      src: Ghostly,
      alt: "Ghostly swamp",
      prompt: "Stagnant water twisted trees and eerie mist",
      tooltip: "Replace background with a ghostly swamp",
    },
    {
      src: Ghosts,
      alt: "Ghosts",
      prompt: "Ghosts flying over a foggy graveyard",
      tooltip: "Replace background with ghosts flying over a graveyard",
    },
    {
      src: Gothic,
      alt: "Gothic castle",
      prompt: "Ominous castle lightning and gargoyle statues",
      tooltip: "Replace background with an ominous gothic castle",
    },
    {
      src: Haunted,
      alt: "Haunted forest",
      prompt: "Twisted trees fog and glowing eyes in the shadows",
      tooltip: "Replace background with a haunted forest",
    },
    {
      src: Pumpkins,
      alt: "Pumpkins",
      prompt: "Pumpkins glowing in the dark forest",
      tooltip: "Replace background with glowing pumpkins in a dark forest",
    },
    {
      src: Skulls,
      alt: "Skulls and bones",
      prompt: "Skulls and bones scattered in a haunted forest",
      tooltip: "Replace background with skulls and bones in a haunted forest",
    },
    {
      src: Spooky,
      alt: "Spooky mansion",
      prompt: "Abandoned Victorian house broken windows and bats",
      tooltip: "Replace background with a spooky Victorian mansion",
    },
    {
      src: Twisted,
      alt: "Twisted trees",
      prompt: "Twisted trees fog and glowing eyes in the shadows",
      tooltip: "Replace background with twisted trees in the fog",
    },
    {
      src: Vampire,
      alt: "Vampire’s castle",
      prompt: "Gothic castle with dark towers and bats flying around",
      tooltip: "Replace background with a vampire’s gothic castle",
    },
    {
      src: Werewolf,
      alt: "Werewolf’s lair",
      prompt: "Dark cave with claw marks and glowing eyes at the entrance",
      tooltip: "Replace background with a werewolf’s dark cave",
    },
    {
      src: Witch,
      alt: "Witch",
      prompt: "Witch flying across a starry night sky",
      tooltip: "Replace background with a witch flying across a starry night",
    },
    {
      src: WitchCave,
      alt: "Witch’s cave",
      prompt: "Dark cave with eerie candles and potions",
      tooltip: "Replace background with a witch’s eerie cave",
    },
  ];

  const costumes = [
    {
      itemToReplace: "Current outfit",
      replaceWith: "Superman costume",
      image: {
        src: superman, // Import de la imagen de Superman
        alt: "Superman Costume",
      },
    },
    {
      itemToReplace: "Current outfit",
      replaceWith: "Batman costume",
      image: {
        src: Batman, // Import de la imagen de Batman
        alt: "Batman Costume",
      },
    },
    {
      itemToReplace: "Current outfit",
      replaceWith: "Wonder Woman costume",
      image: {
        src: wonder, // Import de la imagen de Wonder Woman
        alt: "Wonder Woman Costume",
      },
    },
    {
      itemToReplace: "Current outfit",
      replaceWith: "Spider-Man costume",
      image: {
        src: spiderman, // Import de la imagen de Spider-Man
        alt: "Spider-Man Costume",
      },
    },
    {
      itemToReplace: "Current outfit",
      replaceWith: "The Joker costume",
      image: {
        src: joker, // Import de la imagen de The Joker
        alt: "The Joker Costume",
      },
    },
    {
      itemToReplace: "Current outfit",
      replaceWith: "Dracula costume",
      image: {
        src: Dracula, // Import de la imagen de Dracula
        alt: "Dracula Costume",
      },
    },
    {
      itemToReplace: "Current outfit",
      replaceWith: "Zombie costume",
      image: {
        src: zombie, // Import de la imagen de Zombie
        alt: "Zombie Costume",
      },
    },
    {
      itemToReplace: "Current outfit",
      replaceWith: "Ghostbusters",
      image: {
        src: ghostbusters, // Import de la imagen de Ghostbusters
        alt: "Ghostbusters Costume",
      },
    },
  ];

  const imagePrompts = [
    {
      backgroundPrompt: "Haunted castle under a full moon",
      costumePrompt: "vampire costume",
      image: temVampire,
      tooltip:
        "Transform into a vampire in a haunted castle under the full moon.",
    },
    {
      backgroundPrompt: "Spooky forest covered in fog",
      costumePrompt: "werewolf costume",
      image: temWerewolf,
      tooltip: "Roam the spooky forest as a terrifying werewolf.",
    },
    {
      backgroundPrompt: "Abandoned carnival with broken rides",
      costumePrompt: "clown costume",
      image: temClow,
      tooltip: "Step into an abandoned carnival dressed as a creepy clown.",
    },
    {
      backgroundPrompt: "Ancient pyramid in a desert storm",
      costumePrompt: "mummy costume",
      image: temMummy,
      tooltip: "Explore ancient pyramids wrapped in a mummy's bandages.",
    },
    {
      backgroundPrompt:
        "Deserted city street with abandoned cars and broken windows",
      costumePrompt: "zombie costume",
      image: temZombie,
      tooltip: "Shuffle through a deserted city street as a terrifying zombie.",
    },
    {
      backgroundPrompt: "Haunted pirate ship in the misty sea",
      costumePrompt: "pirate costume",
      image: tempPirate,
      tooltip:
        "Sail the misty seas aboard a haunted pirate ship in a pirate costume.",
    },
    {
      backgroundPrompt: "Spooky medieval village at night",
      costumePrompt: "knight costume",
      image: tempKnight,
      tooltip: "Patrol a spooky medieval village in full knight armor.",
    },
    {
      backgroundPrompt: "Abandoned laboratory with bubbling potions",
      costumePrompt: "mad scientist costume",
      image: temMad,
      tooltip: "Conduct experiments in an abandoned lab as a mad scientist.",
    },
    {
      backgroundPrompt: "City skyline with towering buildings",
      costumePrompt: "Spider-Man costume",
      image: temSpiderman,
      tooltip: "Swing through the city skyline dressed as Spider-Man.",
    },
    {
      backgroundPrompt: "Night sky above a futuristic city",
      costumePrompt: "Batman costume",
      image: temBatman,
      tooltip: "Watch over a futuristic city as the Dark Knight, Batman.",
    },
    {
      backgroundPrompt: "Sunny day in a peaceful city park",
      costumePrompt: "Superman costume",
      image: temSuperman,
      tooltip: "Peaceful city park as the iconic Superman.",
    },
    {
      backgroundPrompt: "Stormy night in a bustling city",
      costumePrompt: "wonder woman costume",
      image: temWonder,
      tooltip:
        "Protect a bustling city in the middle of a storm as Wonder Woman.",
    },
    {
      backgroundPrompt: "Hi-tech lab with advanced machinery",
      costumePrompt: "iron man costume",
      image: temIron,
      tooltip: "Suit up in a hi-tech lab with the iconic Iron Man armor.",
    },
    {
      backgroundPrompt: "Burning village with fiery skies",
      costumePrompt: "dragon costume",
      image: temDragon,
      tooltip: "Soar above a burning village dressed as a fearsome dragon.",
    },
  ];

  const handleSelect = (action) => {
    setSelectedAction(action);
  };
  const notify = () =>
    toast.warn("Add an image to transform", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const send = (prompt) => {
    if (imageEnv == "") {
      notify();
    } else {
      setPrompt(prompt);
      sendPrompt(prompt, costume);
    }
  };

  const sendCostume = (prompt_costume) => {
    if (imageEnv == "") {
      notify();
    } else {
      setCostume(prompt_costume);
      sendPrompt(prompt, prompt_costume);
    }
  };

  const sendTemp = (prompt, prompt_costume) => {
    if (imageEnv == "") {
      notify();
    } else {
      setCostume(prompt_costume);
      setPrompt(prompt);
      sendPrompt(prompt, prompt_costume);
    }
  };
  const renderSelectedAction = () => {
    switch (selectedAction) {
      case "Crop":
        return (
          <ScrollShadow className=" bg-[#332f2e] border-l-4 w-80 border-[#ffff] p-4 max-h-full overflow-y-scroll">
            <h1 className="text-center font-bold">Background Replace</h1>
            <div className="flex flex-wrap">
              {imagesData.map((image, index) => (
                <div className="p-2" key={index}>
                  <Tooltip
                    key={index}
                    placement="top"
                    content={image.tooltip}
                    color="secondary"
                    className="text-[#ff7518]"
                  >
                    <button onClick={() => send(image.prompt)}>
                      <img
                        src={image.src}
                        className="h-28 w-28 rounded-md"
                        alt={image.alt}
                      />
                    </button>
                  </Tooltip>
                </div>
              ))}
            </div>
          </ScrollShadow>
        );
      case "Resize":
        return (
          <ScrollShadow className=" bg-[#332f2e] border-l-4 w-80 border-[#ffff] p-4">
            <h1 className="text-center font-bold">Background Replace</h1>
            <div className="flex flex-wrap">
              {costumes.map((costume, index) => (
                <div className="p-2" key={index}>
                  <button onClick={() => sendCostume(costume.replaceWith)}>
                    <img
                      src={costume.image.src}
                      className="h-28 w-28 rounded-md"
                      alt={costume.image.alt}
                    />
                  </button>
                </div>
              ))}
            </div>
          </ScrollShadow>
        );
      case "Rotate":
        return (
          <ScrollShadow className=" bg-[#332f2e] border-l-4 w-80 border-[#333] p-4">
            <h1 className="text-center font-bold">Background Replace</h1>
            <div className="flex flex-wrap">
              {imagePrompts.map((imagePrompt, index) => (
                <div className="p-2" key={index}>
                  <Tooltip
                    key={index}
                    placement="top"
                    content={imagePrompt.tooltip}
                    color="secondary"
                    className="text-[#ff7518]"
                  >
                    <button
                      onClick={() =>
                        sendTemp(
                          imagePrompt.backgroundPrompt,
                          imagePrompt.costumePrompt
                        )
                      }
                    >
                      <img
                        src={imagePrompt.image}
                        className="h-28 w-28 rounded-md"
                        alt={imagePrompt.costumePrompt}
                      />
                    </button>
                  </Tooltip>
                </div>
              ))}
            </div>
          </ScrollShadow>
        );
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#332f2e] overflow-y-auto">
  {/* Sidebar */}
  <aside className="w-full md:w-48 bg-[#332f2e] p-4 space-y-6 md:space-y-4">
    <nav className="space-y-4 md:space-y-4">
      <button
        onClick={() => handleSelect("Rotate")}
        className="block w-full text-left py-3 bg-[#332f2e] text-sm font-bold hover:bg-[#59312d] pl-2 text-[#f0e6d6]"
      >
        <i className="bi bi-emoji-sunglasses"></i> Template
      </button>
      <button
        onClick={() => handleSelect("Crop")}
        className="block w-full text-left py-3 bg-[#332f2e] text-sm font-bold hover:bg-[#59312d] pl-2 text-[#f0e6d6]"
      >
        <i className="bi bi-images"></i> Background Replace
      </button>
      <button
        onClick={() => handleSelect("Resize")}
        className="block w-full text-left py-3 bg-[#332f2e] text-sm font-bold hover:bg-[#59312d] pl-2 text-[#f0e6d6]"
      >
        <i className="bi bi-sunglasses"></i> Add Costume
      </button>

      {/* Más botones... */}
    </nav>
  </aside>

  <div className="flex-1  ">{renderSelectedAction()}</div>
</div>
  );
};

export default Sidebar;
