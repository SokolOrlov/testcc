import React, { useEffect, useState } from "react";
import cl from "./DropDown.module.css"; 
import { DropDownItem, FirstElement } from "./types";
import FilterInput from "../Input/Filter/FilterInput";
import ToggleButton from "./ToggleButton";
import ListItem from "./ListItem";
import List from "./List";
import useMousedownEvent from "./useMousedownEvent";

type Props = {
  label?: string
  data: DropDownItem[];
  onSelect: (arg: number) => void;
  filter?: boolean;
  selectedItemId?: number;
  firstElement?: FirstElement;
  emptyText?: string;
};

/**
 * Выпадающий список
 * @param param0 props
 * @returns
 */
const DropDown = ({label, data=[], onSelect, filter = false, firstElement = FirstElement.FirstElement, emptyText = "",}: Props) => {
  // console.log("DropDown");

  const [open, setOpen] = useState(false);
  const [item, setSelectedItem] = useState<DropDownItem>(null);
  const [filterText, setFilter] = useState<string>("");
  const test = useMousedownEvent(open, ()=>setOpen(false));
  
  //Обработка изменения входящего списка элеметов
  useEffect(() => {    
    let firstItem: DropDownItem;
    switch (firstElement) {
      case FirstElement.Empty:
        firstItem = {Id:-1, Name:''}
        break;
      case FirstElement.FirstElement:
        firstItem = data[0]
        break;
      case FirstElement.Text:
        firstItem = {Id:-1, Name:emptyText}
        break;
    }

    setSelectedItem(firstItem);
  }, [data]);

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
      <ListItem key={item.Id} handleClick={() => {onSelectClick(item)}}>
        {item.Name}
      </ListItem>
    ))

  return (
    <div ref={test} className={`${cl.dropdown} `}>
      {label && <label>{label}</label>}
      <ToggleButton expanded={open} toggleExpanded={onOpenClick} >{item?.Name}</ToggleButton>
      <List expanded={open}>
        {filter && <FilterInput value={filterText} onChange={filterData} />}
        {filteredList}
      </List>
    </div>
  );
};

export default DropDown;
