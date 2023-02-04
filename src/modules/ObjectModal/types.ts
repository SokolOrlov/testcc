/**Ответ domains/getListOfDomains */
export interface Domain {
  Id: number;
  Name: string;
}

/**Ответ serviceCompanies/getListOfServiceCompanies */
export interface SCompany {
  Id: number;
  Name: string;
}

export interface ObjectData {
  name: string;
  identificator: string;
  companyId: number;
  scompanyId?: number;
}
