"use client";

import { ConstellationField, LaserCollection, PortalFieldCollection, PredictiveArcCanvas } from "@designcodeio/threeui";

export default function Background() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -999,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
     <ConstellationField
     variant="interface-lines"
        mode="dark"
        speed={1.00}
        size={1.00}
        length={1.00}
        density={1.00}
        opacity={1.00}
        hue={0}
        saturation={1.00}
        brightness={1.00}
      />
      {/* <PortalFieldCollection
        variant="cloud-field"
        hue={0}
        saturation={1.00}
        brightness={1.00}
      /> */}
       {/* <LaserCollection
      variant="vanishing-array"
        speed={1.00}
        size={1.00}
        length={1.00}
        density={1.00}
        opacity={1.00}
        hue={0}
        saturation={1.00}
        brightness={1.00}
      />       */}
    </div>
  );
}
