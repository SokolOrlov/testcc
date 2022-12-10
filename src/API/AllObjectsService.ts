import { DropDownItem } from "../components/UI/DropDown/DropDown";
import { _objects, _states } from "../data";

interface ObjectsResult {
  total: number;
  data: any[];
}

export interface StatesResult extends DropDownItem {}

export default class AllObjectsService {
  static async getAll(
    limit = 10,
    page = 1,
    filter: string,
    state: number
  ): Promise<ObjectsResult> {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    //     params: {
    //         _limit: limit,
    //         _page: page
    //     }
    // })
    // return response;

    const start = page === 1 ? 0 : (page - 1) * limit;
    let total = _objects.aaData.length;
    let data = _objects.aaData.slice(start, start + limit);

    if (filter || state) {
      let filtered = _objects.aaData.filter(
        (val) => val.ObjectName.toLowerCase().indexOf(filter) > -1
      );

      if (state) {
        switch (state) {
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
      data = filtered.slice(start, start + limit);
    }

    return await {
      total: total,
      data: data,
    };
  }

  static async getStates(): Promise<StatesResult[]> {
    return await _states;
  }
}
