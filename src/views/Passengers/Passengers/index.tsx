import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/UI/Sections/Header";
import AddButton from "../../../components/UI/Buttons/AddButton";
import FilterButton from "../../../components/UI/Filters";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { FetchFunction, TableData, breadCrumbItems } from "./Logic";
import { FilterPassenger } from "./Filter";

const Passengers = () => {
  const { navigateQuery } = usePageRouter();
  const { currentPage } = useGetQueries();
  const {
    passengers,
    passengerTableList,
    passengerLoading,
    passengerRefetch,
  }: any = FetchFunction();
  const { headColumns, handleActions } = TableData({ passengerRefetch });

  const handleSearch = (value: any) => navigateQuery({ q: value });

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
      </Header>
      <div className="container">
        <SectionHeader
          extra={<FilterButton text="Filter" />}
          handleSearch={handleSearch}
        >
          <div className="flex items-center gap-3">
            <AddButton
              text="new_passenger"
              onClick={() => navigateQuery({ id: "create" })}
            />
          </div>
        </SectionHeader>

        <FilterPassenger />

        <CTable
          headColumns={headColumns}
          bodyColumns={passengerTableList}
          totalCount={passengers?.meta?.totalCount}
          count={passengers?.meta?.pageCount ?? 5}
          isLoading={passengerLoading}
          handleActions={handleActions}
          currentPage={currentPage}
          clickable={true}
        />

        <Form refetch={passengerRefetch} />
      </div>
    </>
  );
};

export default Passengers;
