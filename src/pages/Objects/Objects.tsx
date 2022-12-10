import React, { useEffect, useMemo, useState } from "react";
import AllObjectsService, { StatesResult } from "../../API/AllObjectsService";
import DropDown, { FirstElement } from "../../components/UI/DropDown/DropDown";
import FindInput from "../../components/UI/Find/FindInput";
import Pagination from "../../components/UI/Pagination/Pagination";
import Table, { TableRow } from "../../components/UI/Table/Table";
import { useFetching } from "../../hooks/useFetching";
import { getPageCount } from "../../utils/pages";
import cl from "./Objects.module.css";

interface Post {
  ObjectId: number;
  ObjectName: string;
  ObjectAddress: string;
  ObjectCoordinates: string;
  DomainId: number;
  Domain: string;
  ServiceCompany: string;
  DeviceGatewayName: string;
  DeviceGatewayId: number;
  IsOnline: boolean;
  AlarmsCount: number;
  AllDeviceCount: number;
  OfflineDeviceCount: number;
}

const Objects = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [states, setStates] = useState<StatesResult[]>([{id:0,name:''}]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState("");
  const [selectedState, setSelectedState] = useState<number>();

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit: number, page: number, filter: string, state: number) => {
      const response = await AllObjectsService.getAll(
        limit,
        page,
        filter,
        state
      );
     setPosts(response.data);
    setTotalPages(getPageCount(response.total, limit));
    }
  );

  useEffect(() => {
    AllObjectsService.getStates().then((result) => {
      setStates(result);
    });
  }, []);

  useEffect(() => {
    fetchPosts(limit, page, filter, selectedState);
  }, [page, limit, filter, selectedState]);

  const headers = [
    "Domain",
    "ObjectName",
    "ObjectAddress",
    "ServiceCompany",
    "DeviceGatewayName",
    "AlarmsCount",
  ];

  const rows2: TableRow[] = posts.map((post) => {
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

  const changePage = (currentPage: number) => {
    setPage(currentPage);
  };

  const changeFilter = (text: string) => {
    setPage(1);
    setFilter(text);
  };

  const changeState = (state: number) => {
    setPage(1);
    setSelectedState(state);
  };

  const _filter = useMemo(()=> <FindInput onChange={changeFilter} />,[]);
  const _dropdown = useMemo(()=><DropDown data={states} onSelect={changeState} filter={true} firstElement={FirstElement.FirstElement}/>,[states]);
  const _table = useMemo(()=><Table headers={headers} rows={rows2} />,[posts])
  const _pagination = useMemo(()=><Pagination page={page} totalPages={totalPages} onChange={changePage} />,[page, totalPages])

  return (
    <>
      <div className={cl.objects_page}>
        <div>Objects</div>

        <div style={{display:"flex", justifyContent:"space-between", margin:"10px 0px"}}>
          {_dropdown}
          {_filter}
        </div>

        {_table}
        {_pagination}
      </div>
    </>
  );
};

export default Objects;
