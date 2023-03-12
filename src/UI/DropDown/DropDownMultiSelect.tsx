import React, { useState } from "react";
import { Checkbox, FilterInput, List, ListItem, ToggleButton } from "ui";
import cl from "./DropDown.module.css";
import { DropDownItem } from "./types"; 
import useMousedownEvent from "./useMousedownEvent"; 

type Props = {
  label?: string;
  data: DropDownItem[];
  selected: number[];
  onSelect: (arg: number[]) => void;
  filter?: boolean;
  emptyText?: string;
};

/**
 * Выпадающий список
 * @param param0
 * @returns
 */
export const DropDownMultiSelect = ({ label, data = [], selected = [], onSelect, filter = false, emptyText = "" }: Props) => {
  // console.log("DropDown");

  const [open, setOpen] = useState(false);
  const [filterText, setFilter] = useState<string>("");
  const test = useMousedownEvent(open, () => setOpen(false));

  //Раскрыть(скрыть) список
  const onOpenClick = () => {
    setOpen(!open);
  };

  //Выбрать элемент
  const onSelectClick = (selectedItem: DropDownItem) => {
    if (selected.includes(selectedItem.Id)) {
      onSelect(selected.filter((v) => v !== selectedItem.Id));
    } else {
      onSelect([...selected, selectedItem.Id]);
    }
  };

  //Фильтр списка
  const filterData = (value: string) => {
    setFilter(value);
  };

  const filteredList = data
    .filter((item) => item.Name.indexOf(filterText) > -1)
    .sort((item) => (selected.indexOf(item.Id) > -1 ? -1 : 1))
    .map((item) => (
      <ListItem
        key={item.Id}
        handleClick={() => {
          onSelectClick(item);
        }}
      >
        <Checkbox checked={selected.indexOf(item.Id) > -1} />
        {item.Name}
      </ListItem>
    ));

  const selectedNames = selected.length === 0 ? 
    emptyText : 
    data.filter((item) => selected.indexOf(item.Id) > -1).map(item=>item.Name).join(", ");

  return (
    <div ref={test} className={`${cl.dropdown}`}>
      {label && <label>{label}</label>}
      <ToggleButton expanded={open} toggleExpanded={onOpenClick} label={selectedNames}/>
      <List expanded={open} scrollable={filteredList.length > 10}>
        {filter && <FilterInput value={filterText} onChange={filterData} />}
        {filteredList}
      </List>
    </div>
  );
};
