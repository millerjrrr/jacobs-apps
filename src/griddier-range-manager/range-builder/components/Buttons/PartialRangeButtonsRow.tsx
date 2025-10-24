import { setHandAction } from "griddier-range-manager/range-builder/store/rangeSlice";
import AppButton from "./AppButton";
import ButtonsRowContainer from "./ButtonsRowContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "griddier-range-manager/range-builder/store";
import {
  createRangeFromWizard,
  isWizardRange,
} from "griddier-range-manager/range-builder/utils/createRangeFromWizard";
import { handsArray } from "griddier-range-manager/range-builder/types";

const PartialRangeButtonsRow = () => {
  const hands = useSelector((state: RootState) => state.range.hands);
  const dispatch = useDispatch();

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

        let handActions = {
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
        let total = handActions.allin + handActions.raise + handActions.call;

        if (total > 4) {
          handActions.call -= Math.min(total - 4, handActions.call);
          total = handActions.allin + handActions.raise + handActions.call;
          if (total > 4)
            handActions.raise -= Math.min(total - 4, handActions.raise);
          if (total > 4) return alert("Some hand actions are too high");
        }

        dispatch(setHandAction({ hand: wizHand as any, handActions }));
      });
      setTimeout(() => alert("Range imported successfully!"), 1000);
    } catch (err) {
      console.error("Failed to import range: ", err);
      alert("Failed to import range. Make sure clipboard format is correct.");
    }
  };

  return (
    <ButtonsRowContainer>
      <AppButton onClick={() => handlePastePartialRange("allin")}>
        Paste AllIn
      </AppButton>
      <AppButton onClick={() => handlePastePartialRange("raise")}>
        Paste Raise
      </AppButton>
      <AppButton onClick={() => handlePastePartialRange("call")}>
        Paste Call
      </AppButton>
      <AppButton onClick={() => handlePastePartialRange("prior")}>
        Paste Prior
      </AppButton>
    </ButtonsRowContainer>
  );
};

export default PartialRangeButtonsRow;
