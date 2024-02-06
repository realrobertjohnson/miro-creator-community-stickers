import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import type { DropEvent } from "@mirohq/websdk-types";

const { board } = miro;

function App() {
  const images = [
		"3458764515427780866.png",
		"3458764515427780867.png",
		"3458764515427780868.png",
		"3458764515427780869.png",
		"3458764515427780870.png",
		"3458764515427780872.png",
		"3458764515427780873.png",
		"3458764515427780874.png",
		"3458764515427780875.png",
		"3458764515427780876.png",
		"3458764515427780877.png",
		"3458764515427780878.png",
		"3458764515427780879.png",
		"3458764515427780880.png",
		"3458764515427780881.png",
		"3458764515427780883.png",
		"3458764515427780884.png",
		"3458764515427780885.png",
		"3458764515427780886.png",
		"3458764515427780887.png",
		"3458764515427780888.png",
		"3458764515427780889.png",
		"3458764515427780890.png",
		"3458764515427780891.png",
		"3458764515427780892.png",
		"3458764515427780893.png",
		"3458764515427780894.png",
		"3458764515427780895.png",
		"3458764515427780896.png",
		"3458764515427780897.png",
		"3458764515427780898.png",
		"3458764515427780899.png",
		"3458764515427780900.png",
		"3458764515427780901.png",
		"3458764515427780903.png",
		"3458764515427780904.png",
		"3458764515427780905.png",
		"3458764515427780906.png",
		"3458764515427780907.png",
		"3458764515427780908.png",
		"3458764515427780909.png",
		"3458764515427780910.png",
		"3458764515427780911.png",
		"3458764515427780912.png",
		"3458764515427780913.png",
		"3458764515427780914.png",
		"3458764515427780915.png",
		"3458764515427780917.png",
		"3458764515427780918.png",
		"3458764515427780919.png",
		"3458764515427780920.png",
		"3458764515427780921.png",
		"3458764515427780923.png",
		"3458764515427780924.png",
		"3458764515427780925.png",
		"3458764515427780926.png",
		"3458764515427780927.png",
		"3458764515427780928.png",
		"3458764515427866929.png",
		"3458764515427866930.png",
		"3458764515427866931.png",
		"3458764515427866932.png",
		"3458764515427866933.png",
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
      {images.map((image, index) => {
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
