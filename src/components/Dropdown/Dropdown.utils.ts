import { song } from "@data/songs";
import { Selections } from "@store/slices/selectionsSlice";

export const createDefaultString = (
  as: boolean,
  selections: Selections,
  so?: song[]
) => {
  let defaultSelect;

  //   if (as && selections.hasSongs) {
  //     const activeSong = so.filter((s) => s.id === selections.songSelected);
  //     defaultSelect = activeSong[0]
  //       ? activeSong[0].name
  //       : so[0].name || "Artist has no songs";
  //   } else {
  //     defaultSelect = "Please select artist";
  //   }

  if (as && so) {
    const activeSong = so.filter((s) => s.id === selections.songSelected);
    defaultSelect = activeSong[0] ? activeSong[0].name : so[0].name;
  } else if (selections.artistSelected !== "0" && !selections.hasSongs) {
    defaultSelect = "Artist has no songs";
  } else {
    defaultSelect = "Please select artist";
  }

  return defaultSelect;
};
