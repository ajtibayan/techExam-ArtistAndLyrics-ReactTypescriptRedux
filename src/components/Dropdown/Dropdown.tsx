import { useEffect, useState } from "react";
import {
  Main,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  ListItemLink,
  SelectionContainer,
} from "./Dropdown.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateSong } from "../../store";
import { song } from "@data/songs";
import { createDefaultString } from "./Dropdown.utils";

type Props = {
  isFull: boolean;
};

export const Dropdown: React.FC<Props> = ({ isFull }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>();
  const [songOptions, setSongOptions] = useState<song[]>();
  const [artistSelected, setArtistSelected] = useState<boolean>(false);
  const dispatch = useDispatch();
  const sl = useSelector((state: RootState) => {
    return state.songs;
  });
  const selections = useSelector((state: RootState) => {
    return state.selections;
  });

  useEffect(() => {
    setSongOptions(sl.filter((s) => s.artistId === selections.artistSelected));
    setSelectedOption("");

    if (selections.artistSelected !== "0" && selections.hasSongs) {
      setArtistSelected(true);
    } else {
      setArtistSelected(false);
    }
  }, [selections, sl]);

  const toggling = () => {
    artistSelected && songOptions && setIsOpen(!isOpen);
  };

  const onOptionClicked = (value: string, id: number) => () => {
    setSelectedOption(value);
    dispatch(updateSong(id));
    setIsOpen(false);
  };

  const defaultSelect = createDefaultString(
    artistSelected,
    selections,
    songOptions
  );

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader>
          <SelectionContainer onClick={toggling}>
            <FontAwesomeIcon icon={faBars} />
            {selectedOption || defaultSelect}
          </SelectionContainer>
          {!isFull && (
            <Link
              to={`/${selections.artistSelected}/${selections.songSelected}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Artist Section in new window"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          )}
        </DropDownHeader>
        <DropDownListContainer>
          <DropDownList $isOpen={isOpen}>
            {artistSelected &&
              songOptions &&
              songOptions.map(({ name, id }) => (
                <ListItem key={Math.random()}>
                  <ListItemLink
                    onClick={onOptionClicked(name, id)}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {name}
                  </ListItemLink>
                </ListItem>
              ))}
          </DropDownList>
        </DropDownListContainer>
      </DropDownContainer>
    </Main>
  );
};
