import React, { useEffect, useState } from "react";
import cl from "./DropDown.module.css";
import caret from "../../../assets/images/caret_light-grey.svg";
import FindInput from "../Find/FindInput";

/**
 * Элемент списка
 */
export interface DropDownItem {
  Id: number;
  Name: string;
}

export enum FirstElement {
  Empty,
  Text,
  FirstElement,
}

/**
 * Пропсы
 */
type DropDownProps = {
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
const DropDown = ({data, onSelect, filter = false, firstElement = FirstElement.FirstElement, emptyText = "",}: DropDownProps) => {
  // console.log("DropDown");

  const [open, setOpen] = useState(false);
  const [item, setSelectedItem] = useState<DropDownItem>(null);
  const [filteredList, setFilteredList] = useState<DropDownItem[]>([]);
  /**
   * Обработка изменения входящего списка элеметов
   */
  useEffect(() => {
    setFilteredList(data);
    
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

  /**
   * Раскрытие списка элементов
   */
  const onOpenClick = () => {
    setOpen(!open);
  };

  /**
   * Обработка выбора элемента из списка
   * @param selectedItem Выбранный элемент
   */
  const onSelectClick = (selectedItem: DropDownItem) => {
    onSelect(selectedItem.Id);
    setOpen(false);
    setSelectedItem(selectedItem);
  };

  const filterData = (value: string) => {
    let fiter = data.filter((item) => item.Name.indexOf(value) > -1);
    setFilteredList(fiter);
  };

  return (
    <div className={`${cl.dropdown} ${cl.width_280}`}>
      <button className={cl.button} onClick={onOpenClick}>
        <div>{item ? item.Name : ""}</div>
        <img
          src={caret}
          alt="caret"
          className={`${cl.list_caret} ${open ? cl.open : ""}`}
        />
      </button>
      <div style={{ visibility: open ? "visible" : "hidden" }}>
        <ul className={`${cl.list} ${cl.width_280}`}>
          {filter && <FindInput onChange={filterData} />}
          {filteredList.map((item) => (
            <li
              key={item.Id}
              className={cl.li}
              onClick={() => {
                onSelectClick(item);
              }}
            >
              {item.Name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
