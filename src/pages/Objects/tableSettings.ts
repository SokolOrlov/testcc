import { TableRow } from "../../components/UI/Table/Table";
import { ObjectData } from "./types";

export default class TableSettings{
      /** Получить данные для таблицы
   * @param data Массив объектов с гейтвеями
   * @returns Заголовки и строки таблиц
   */
  static getTableData(data: ObjectData[]): [string[], TableRow[]] {    
    const headers = [
      "Domain",
      "ObjectName",
      "ObjectAddress",
      "ServiceCompany",
      "DeviceGatewayName",
      "AlarmsCount",
    ];

    const rows = !data ? null : data.map((post) => {
      return {
        cells: [
          { data: post.Domain, href: `/domain/${post.DomainId}` },
          { data: post.ObjectName },
          { data: post.ObjectAddress },
          { data: post.ServiceCompany },
          { data: post.DeviceGatewayName },
          { data: post.AlarmsCount },
        ],
      };
    });

    return [headers, rows];
  }
}