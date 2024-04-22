import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import type { DropEvent } from "@mirohq/websdk-types";

const { board } = miro;

const drop = async (e: DropEvent) => {
  const { x, y, target } = e;

  if (target instanceof HTMLImageElement) {
    const image = await board.createImage({ x, y, url: target.src });
    await board.viewport.zoomTo(image);
  }
};

function App() {
  const stickerPacks = [
    {
      title: "Stickers A",
      images: [
        "stickers-a/letter-a-1.svg",
        "stickers-a/letter-a-2.svg",
        "stickers-a/letter-a-3.svg",
        "stickers-a/letter-a-4.svg",
      ],
    },
    {
      title: "Stickers B",
      images: [
        "stickers-b/letter-b-1.svg",
        "stickers-b/letter-b-2.svg",
        "stickers-b/letter-b-3.svg",
        "stickers-b/letter-b-4.svg",
      ],
    },
    {
      title: "Stickers C",
      images: [
        "stickers-a/letter-a-1.svg",
        "stickers-a/letter-a-2.svg",
        "stickers-a/letter-a-3.svg",
        "stickers-a/letter-a-4.svg",
      ],
    },
    {
      title: "Stickers D",
      images: [
        "stickers-b/letter-b-1.svg",
        "stickers-b/letter-b-2.svg",
        "stickers-b/letter-b-3.svg",
        "stickers-b/letter-b-4.svg",
      ],
    },
  ];

  
  const [curStickerPackIndex, setCurStickerPackIndex] = React.useState(0);
    
  const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);

  // Register the drop event handler once.
  useEffect(() => {
    board.ui.on("drop", drop);
  });

  const curStickerPack = stickerPacks[curStickerPackIndex];

  const handleButtonClick = (index: number) => {
    setCurStickerPackIndex(index);
    setActiveButtonIndex(index);
  };

  return (
    <div className="main">
      <div>Drag & drop a sticker onto the board:</div>
      <br />
      <div className="scroll">
        {stickerPacks.map((stickerPack, index) => {
          return (
            <button
              id="addRow"
              className={`add-row-button ${index === activeButtonIndex ? 'add-row-button-active' : 'add-row-button'}`}
              onClick={() => handleButtonClick(index)}
              key={index}
            >
              {stickerPack.title}
            </button>
          );
        })}
      </div>

      <div className="sticker-images">
        {curStickerPack.images.map((image, index) => {
          return (
            <img
              src={image}
              draggable={false}
              className="miro-draggable draggable-item"
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

// Render App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);