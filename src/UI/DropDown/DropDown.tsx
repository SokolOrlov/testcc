import React, { useEffect, useState } from "react";
import { FilterInput, List, ListItem, ToggleButton } from "..";
import cl from "./DropDown.module.css";
import { DropDownItem } from "./types";  
import useMousedownEvent from "./useMousedownEvent"; 

type Props = {
  data: DropDownItem[];
  onSelect: (arg: number) => void;
  label?: string;
  filter?: boolean;
  selectedId?: number;
  firstElement?: "Empty" | "Text" | "FirstElement";
  emptyText?: string;
};

/**
 * Выпадающий список
 * @param param0 props
 * @returns
 */
export const DropDown = ({ data = [], onSelect, label, filter = false, firstElement = "Empty", emptyText = "", selectedId }: Props) => {
  // console.log("DropDown");

  const [open, setOpen] = useState(false);
  const [item, setSelectedItem] = useState<DropDownItem>(null);
  const [filterText, setFilter] = useState<string>("");
  const test = useMousedownEvent(open, () => setOpen(false));

  //Обработка изменения входящего списка элеметов
  useEffect(() => {
    let selectedItem: DropDownItem;

    if (selectedId) 
      selectedItem = data.filter((i) => i.Id === selectedId)[0];
    else
      switch (firstElement) {
        case "Empty":
          selectedItem = { Id: -1, Name: "" };
          break;
        case "FirstElement":
          selectedItem = data[0];
          break;
        case "Text":
          selectedItem = { Id: -1, Name: emptyText };
          break;
      }

    setSelectedItem(selectedItem);
  }, [data, selectedId]);

  //Раскрыть(скрыть) список
  const onOpenClick = () => {
    setOpen(!open);
  };

  //Выбрать элемент
  const onSelectClick = (selectedItem: DropDownItem) => {
    onSelect(selectedItem.Id);
    setOpen(false);
    setSelectedItem(selectedItem);
  };

  //Фильтр списка
  const filterData = (value: string) => {
    setFilter(value);
  };

  const filteredList = data
    .filter((item) => item.Name.indexOf(filterText) > -1)
    .map((item) => (
      <ListItem
        key={item.Id}
        handleClick={() => {
          onSelectClick(item);
        }}
      >
        {item.Name}
      </ListItem>
    ));

  return (
    <div ref={test} className={`${cl.dropdown} `}>
      {label && <label>{label}</label>}
      <ToggleButton expanded={open} toggleExpanded={onOpenClick} label={item?.Name}/>
      <List expanded={open} scrollable={filteredList.length > 10}>
        {filter && <FilterInput value={filterText} onChange={filterData} />}
        {filteredList}
      </List>
    </div>
  );
};
