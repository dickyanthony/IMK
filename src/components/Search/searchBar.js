import React from "react";
import "./searchbar.css";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { useNavigate } from "react-router";
import Turnstone from "turnstone";
import { book } from "../../constant";
import { useEffect } from "react";
import { useRef } from "react";

export default function SearchBar() {
  const [hasFocus, setHasFocus] = useState(false);
  const [newLink, setNewLink] = useState("");
  const tes = useRef();
  const navigate = useNavigate();
  const styles = {
    input:
      "w-full h-12 border border-crystal-400 py-2 pl-10 pr-9 text-xl text-oldsilver-800 outline-none rounded-md",
    inputFocus:
      "w-full h-12 border-x-0 border-t-0 border-b border-crystal-500 py-2 pl-10 pr-9 text-xl text-oldsilver-800 outline-none sm:rounded-md sm:border",
    query: "text-oldsilver-800 placeholder-oldsilver-400",
    typeahead: "text-oldsilver-400 border-white",
    cancelButton: `absolute w-10 h-12 inset-y-0 left-0 items-center justify-center z-10 text-crystal-600 inline-flex sm:hidden`,
    clearButton:
      "absolute inset-y-0 right-0 w-10 inline-flex items-center justify-center text-crystal-500 hover:text-hotpink-300",
    listbox:
      "w-full bg-white sm:border sm:border-crystal-500 sm:rounded-md text-left sm:mt-2 p-2 sm:drop-shadow-xl",
    groupHeading:
      "cursor-default mt-2 mb-0.5 px-1.5 uppercase text-sm text-hotpink-500",
    item: "cursor-pointer p-1.5 text-lg whitespace-nowrap text-ellipsis overflow-hidden text-oldsilver-700",
    highlightedItem:
      "cursor-pointer p-1.5 text-lg whitespace-nowrap sm:text-ellipsis overflow-hidden text-oldsilver-700 rounded-md bg-gradient-to-t from-crystal-100 to-white",
    noItems: "cursor-default text-center my-20",
  };

  // useEffect(() => {
  //   if (newLink) {
  //     navigate(newLink);
  //   }
  // }, [newLink]);
  function _onNavigate(link) {
    if (link) {
      navigate(link.onClick);
      tes.current.clear();
      tes.current?.blur();
      console.log("tes==>", tes);
    }
  }

  const listbox = [
    {
      name: "Materi",
      data: book,
      searchType: "startswith",
      displayField: "name",
    },
  ];
  const onBlur = () => setHasFocus(false);
  const onFocus = () => setHasFocus(true);

  const containerStyles = hasFocus
    ? "fixed block w-full h-full top-0 left-0 bg-white z-50 overflow-auto sm:relative sm:w-4/12 sm:h-auto sm:top-auto sm:left-auto sm:bg-transparent sm:z-auto sm:overflow-visible"
    : "relative w-11/12 sm:w-4/12";

  const iconDisplayStyle = hasFocus
    ? "hidden text-crystal-600"
    : "inline-flex text-crystal-500";
  const Item = ({ item }) => {
    return (
      <div key={item.id} className="flex items-center cursor-pointer px-5 py-4">
        <img
          width={35}
          height={35}
          src={item.img}
          alt={item.name}
          className="mr-5"
        />
        <p>{item.name}</p>
      </div>
    );
  };
  return (
    <div className={containerStyles}>
      <span
        className={`absolute w-10 h-12 inset-y-0 left-0 items-center justify-center z-10 sm:inline-flex ${iconDisplayStyle}`}
      >
        <SearchIcon className="w-6 h-6" />
      </span>
      <Turnstone
        id="Materi"
        ref={tes}
        cancelButton={true}
        clearButton={true}
        listbox={listbox}
        onBlur={onBlur}
        onFocus={onFocus}
        // autoFocus={true}
        matchText={false}
        placeholder={`Cari materi "pendahuluan"`}
        noItemsMessage="Tidak ada materi"
        styles={styles}
        Item={Item}
        onSelect={(item) => _onNavigate(item)}
      />
    </div>
  );
}
