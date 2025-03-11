import { useState } from "react";
import InhalationSchedule from "./components/inhalation-schedule/inhalationschedule";
import InhalerTechnique from "./components/inhaler-technique/inhalertechnique";
import PeakExpiratoryGraph from "./components/peak-expiratory-flow-graph/peakexpiratorygraph";

import "./spaceranalytics.css"

function SpacerAnalyticsPage() {
  return (
    <div className="main">
      <div className="inhalation-container">
        <div className="inhalation-components">
          <InhalationSchedule

          />
        </div>
        <div className="inhalation-components">
          <InhalerTechnique

          />
        </div>
      </div>
      <div className="peak-graph-component">
        <PeakExpiratoryGraph

        />
      </div>
    </div>
  );
}

export default SpacerAnalyticsPage;
