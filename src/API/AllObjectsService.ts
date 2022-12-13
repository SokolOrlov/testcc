import { DropDownItem } from "../components/UI/DropDown/DropDown";
import { _objects, _states } from "../data";

export interface ObjectsResult {
  total: number;
  data: any[];
}

/** Состояние объекта */
export interface ObjectState extends DropDownItem {}

/**Сервис страницы "Все объекты" */
export default class AllObjectsService {
/**
 * Получить список объектов с гейтвеями
 * @param pageSize Размер страницы
 * @param pageNumber Номер страницы
 * @param filter Фильтр
 * @param objectState Состояние объекта
 * @returns Список объектов с гейтвеями
 */
  static async getObjectsWithGateways( pageSize = 10, pageNumber = 1, filter: string, objectState: number ): Promise<ObjectsResult> {
    const start = pageNumber === 1 ? 0 : (pageNumber - 1) * pageSize;
    let total = _objects.aaData.length;
    let data = _objects.aaData.slice(start, start + pageSize);

    if (filter || objectState) {
      let filtered = _objects.aaData.filter(
        (val) => val.ObjectName.toLowerCase().indexOf(filter) > -1
      );

      if (objectState) {
        switch (objectState) {
          case 2:
            filtered = filtered.filter((val) => val.AlarmsCount > 0);
            break;
          case 3:
            filtered = filtered.filter((val) => val.IsOnline);
            break;
          case 4:
            filtered = filtered.filter((val) => !val.IsOnline);
            break;

          default:
            break;
        }
      }

      total = filtered.length;
      data = filtered.slice(start, start + pageSize);
    }

    return await {
      total: total,
      data: data,
    };
  }

  /**
   * Получить состояния объекта
   * @returns Состояния объекта
   */
  static async getObjectStates(): Promise<ObjectState[]> {
    return await _states;
  }
}
