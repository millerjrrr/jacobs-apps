import HandEditor from "./components/HandEditor"; // <-- import the component
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { handsArray } from "./types"; // make sure you import your hands array
import { resetRange, setHandAction } from "./store/rangeSlice";
import FrequencyBar from "./components/FrequencyBar";
import colors from "./utils/colors";
import {
  createRangeFromWizard,
  isWizardRange,
} from "./utils/createRangeFromWizard";

function GriddierRangeBuilder() {
  const hands = useSelector((state: RootState) => state.range.hands);

  const handleCopyCSV = () => {
    // CSV header
    const header = ["Hand", "Allin", "Raise", "Call", "Prior"];

    // Create CSV rows
    const rows = handsArray.map((hand) => {
      const handData = hands[hand] || { allin: 0, raise: 0, call: 0, prior: 1 };
      return [
        hand,
        handData.allin ?? 0,
        handData.raise ?? 0,
        handData.call ?? 0,
        handData.prior ?? 1,
      ].join("\t");
    });

    // Combine header + rows
    const csvContent = [header.join("\t"), ...rows].join("\n");

    // Copy to clipboard
    navigator.clipboard
      .writeText(csvContent)
      .then(() => {
        alert(
          "CSV copied to clipboard! You can now paste it into Google Sheets."
        );
      })
      .catch((err) => {
        console.error("Failed to copy CSV: ", err);
      });
  };

  const dispatch = useDispatch();
  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all hands to default values?"
      )
    ) {
      dispatch(resetRange());
    }
  };

  const handleImportCSV = async () => {
    const proceed = window.confirm(
      "Importing a range will overwrite your current range. Do you want to continue?"
    );
    if (!proceed) return;

    try {
      const text = await navigator.clipboard.readText();
      if (!text) return alert("Clipboard is empty");
      const lines = text.trim().split("\n");
      // Ignore header
      const dataLines = lines.slice(1);

      await dataLines.forEach((line) => {
        const [hand, allinStr, raiseStr, callStr, priorStr] = line.split("\t");
        if (!hand || !handsArray.includes(hand)) return;

        const handActions = {
          allin: Number(allinStr) as 0 | 1 | 2 | 3 | 4,
          raise: Number(raiseStr) as 0 | 1 | 2 | 3 | 4,
          call: Number(callStr) as 0 | 1 | 2 | 3 | 4,
          prior: Number(priorStr) as 0 | 1 | 2 | 3 | 4,
        };

        dispatch(setHandAction({ hand: hand as any, handActions }));
      });
      setTimeout(() => alert("Range imported successfully!"), 1000);
    } catch (err) {
      console.error("Failed to import range: ", err);
      alert("Failed to import range. Make sure clipboard format is correct.");
    }
  };

  const handlePastePartialRange = async (
    action: "allin" | "raise" | "call" | "prior"
  ) => {
    const proceed = window.confirm(
      "Importing a range will overwrite your current range. Do you want to continue?"
    );
    if (!proceed) return;

    try {
      const text = await navigator.clipboard.readText();
      if (!text) return alert("Clipboard is empty");
      if (!isWizardRange(text)) return alert("Format is incorrect");

      const wizData = createRangeFromWizard(text);

      await Object.keys(wizData).forEach((wizHand) => {
        if (!handsArray.includes(wizHand)) return;

        const handActions = {
          allin: Number(hands[wizHand].allin) as 0 | 1 | 2 | 3 | 4,
          raise: Number(hands[wizHand].raise) as 0 | 1 | 2 | 3 | 4,
          call: Number(hands[wizHand].call) as 0 | 1 | 2 | 3 | 4,
          prior: Number(hands[wizHand].prior) as 0 | 1 | 2 | 3 | 4,
          [action]: Number(Math.ceil(wizData[wizHand] * 4)) as
            | 0
            | 1
            | 2
            | 3
            | 4,
        };

        dispatch(setHandAction({ hand: wizHand as any, handActions }));
      });
      setTimeout(() => alert("Range imported successfully!"), 1000);
    } catch (err) {
      console.error("Failed to import range: ", err);
      alert("Failed to import range. Make sure clipboard format is correct.");
    }
  };

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
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <span
            style={{
              color: colors.CONTRAST,
              fontSize: 25,
              paddingTop: 15,
            }}
          >
            Griddier Range Builder
          </span>
          <HandEditor />
          <FrequencyBar />
          <div
            style={{
              marginTop: "0.2rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <button
              onClick={handleCopyCSV}
              style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
                width: 166,
              }}
            >
              Copy Range
            </button>
            <button
              onClick={handleImportCSV}
              style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
                width: 166,
              }}
            >
              Paste Range
            </button>
            <button
              onClick={handleReset}
              style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
                width: 166,
              }}
            >
              Reset Range
            </button>
          </div>
          <div
            style={{
              marginTop: "0.2rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <button
              onClick={() => handlePastePartialRange("allin")}
              style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
                width: 125,
              }}
            >
              Paste AllIn
            </button>
            <button
              onClick={() => handlePastePartialRange("raise")}
              style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
                width: 125,
              }}
            >
              Paste Raise
            </button>
            <button
              onClick={() => handlePastePartialRange("call")}
              style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
                width: 125,
              }}
            >
              Paste Call
            </button>
            <button
              onClick={() => handlePastePartialRange("prior")}
              style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
                width: 125,
              }}
            >
              Paste Prior
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GriddierRangeBuilder;
