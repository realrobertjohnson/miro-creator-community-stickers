import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import type { DropEvent } from "@mirohq/websdk-types";

const { board } = miro;

function App() {
  const imagesStickersA = [
		"stickers-a/letter-a-1.svg",
		"stickers-a/letter-a-2.svg",
		"stickers-a/letter-a-3.svg",
		"stickers-a/letter-a-4.svg",
  ];

  // add new arrays – one for each sticker pack
  const imagesStickersB = [
		"stickers-b/letter-b-1.svg",
		"stickers-b/letter-b-2.svg",
		"stickers-b/letter-b-3.svg",
		"stickers-b/letter-b-4.svg",
  ];

  const drop = async (e: DropEvent) => {
    const { x, y, target } = e;

    if (target instanceof HTMLImageElement) {
      const image = await board.createImage({ x, y, url: target.src });
      await board.viewport.zoomTo(image);
    }
  };

  // Register the drop event handler once.
  useEffect(() => {
    board.ui.on("drop", drop);
  });

  return (
    <div className="main">
      {imagesStickersA.map((image, index) => {
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
  );
}

// Render App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
