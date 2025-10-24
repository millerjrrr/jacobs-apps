import { useState } from "react";
import GriddierRangeBuilder from "./range-builder/RangeBuilder";
import colors from "./range-builder/utils/colors";
import RangeList from "./range-list/RangeList";
import AppButton from "./range-builder/components/Buttons/AppButton";
import { List } from "lucide-react";

function GriddierRangeManager() {
  const [showRangeList, setShowRangeList] = useState(false);
  return (
    <div
      style={{
        background: `linear-gradient(45deg, ${colors.PRIMARY}, ${colors.SECONDARY} 80%, ${colors.TERTIARY})`,
      }}
    >
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 50,
          }}
        >
          <GriddierRangeBuilder />
          {showRangeList && <RangeList />}
          <AppButton onClick={() => setShowRangeList(!showRangeList)}>
            <List size={20} />
          </AppButton>
        </div>
      </main>
    </div>
  );
}

export default GriddierRangeManager;
