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
      title: "Miro",
      images: [
				"miro/3458764515581137838.svg",
				"miro/3458764515581137843.svg",
				"miro/3458764515591506435.svg",
				"miro/3458764515627028735.svg",
				"miro/3458764515627038338.svg",
				"miro/3458764515627038339.svg",
				"miro/3458764515627038340.svg",
				"miro/3458764515627038341.svg",
				"miro/3458764515627038342.svg",
				"miro/3458764515627038343.svg",
				"miro/3458764515627038344.svg",
				"miro/3458764515627038345.svg",
				"miro/3458764515627038346.svg",
				"miro/3458764515627041486.svg",
				"miro/3458764515627041487.svg",
				"miro/3458764515627045326.svg",
				"miro/3458764515627051166.svg",
				"miro/3458764515627185801.svg",
				"miro/3458764515627208197.svg",
				"miro/3458764515627208199.svg",
				"miro/3458764515627208200.svg",
				"miro/3458764515627208201.svg",
				"miro/3458764515627208203.svg",
				"miro/3458764515627208204.svg",
				"miro/3458764515627208206.svg",
				"miro/3458764515627208207.svg",
				"miro/3458764515627209412.svg",
				"miro/3458764515627209413.svg",
				"miro/3458764515627209414.svg",
				"miro/3458764515627212521.svg",
				"miro/3458764515627212522.svg",
				"miro/3458764515627212523.svg",
				"miro/3458764515627214368.svg",
				"miro/3458764515627227401.svg",
				"miro/3458764515627227402.svg",
				"miro/3458764515627227403.svg",
				"miro/3458764515627229338.svg",
				"miro/3458764515627229341.svg",
				"miro/3458764515627229347.svg",
				"miro/3458764515627234959.svg",
				"miro/3458764515627240989.svg",
				"miro/3458764515627240990.svg",
				"miro/3458764515627240991.svg",
        "miro/3458764515581154290.svg",
        "miro/3458764515581137842.svg",
				"miro/3458764515581137844.svg",
				"miro/3458764515581137845.svg",
        "miro/3458764515581137839.svg",
				"miro/3458764515581137840.svg",
				"miro/3458764515581137841.svg",
        "miro/3458764515583129152.svg",
				"miro/3458764515583129154.svg",
				"miro/3458764515583129156.svg",
				"miro/3458764515583129161.svg",
				"miro/3458764515583129173.svg",
				"miro/3458764515583129193.svg",
        "miro/3458764515580228949.svg",
				"miro/3458764515580228950.svg",
				"miro/3458764515580228951.svg",
				"miro/3458764515580228952.svg",
      ],
    }
 
  ];

  const [curStickerPackIndex, setCurStickerPackIndex] = React.useState(0);

  // Register the drop event handler once.
  useEffect(() => {
    board.ui.on("drop", drop);
  });

  const curStickerPack = stickerPacks[curStickerPackIndex];

  return (
    <div className="main">
      {/*<div>Drag & drop a sticker onto the board:</div>
      <br />*/}
      <div className="scroll">
        {stickerPacks.map((stickerPack, index) => {
          return (
            <button
              id="addRow"
              className="add-row-button"
              onClick={() => setCurStickerPackIndex(index)}
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