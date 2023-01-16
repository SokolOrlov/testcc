import React, { useState } from "react";
import cl from "./DropDown.module.css";
import { DropDownItem } from "./types";
import FilterInput from "../Input/Filter/FilterInput";
import ToggleButton from "./ToggleButton";
import ListItem from "./ListItem";
import List from "./List";
import Checkbox from "./Checkbox";

type Props = {
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
const DropDownMultiSelect = ({ data = [], selected = [], onSelect, filter = false, emptyText = "" }: Props) => {
  // console.log("DropDown");

  const [open, setOpen] = useState(false);
  const [filterText, setFilter] = useState<string>("");

  //Раскрыть(скрыть) список
  const onOpenClick = () => {
    setOpen(!open);
  };

  //Выбрать элемент
  const onSelectClick = (selectedItem: DropDownItem) => {
    if (selected.includes(selectedItem.Id)) {
        onSelect(selected.filter(v=>v!==selectedItem.Id));
    }
    else{
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
      <ListItem key={item.Id} handleClick={() => {onSelectClick(item);}}>
        <Checkbox checked={selected.indexOf(item.Id) > -1}/>
        {item.Name}
      </ListItem>
    ));

  const selectedNames = selected.length === 0 ? emptyText :
    data.filter((item) => selected.indexOf(item.Id) > -1).reduce((s, i) => `${s}, ${i.Name}`, "");

  return (
    <div className={`${cl.dropdown} ${cl.width_280}`}>
      <ToggleButton expanded={open} toggleExpanded={onOpenClick}>
        {selectedNames}
      </ToggleButton>
      <List expanded={open}>
        {filter && <FilterInput value={filterText} onChange={filterData} />}
        {filteredList}
      </List>
    </div>
  );
};

export default DropDownMultiSelect;
