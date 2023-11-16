import { Filter } from "../Components/Filter";
import { Header } from "../Components/Header";
import { Table } from "../Components/Table";
import { PageProvider } from "../Context/page.context";

export function AdminPAC() {
  return (
    <div  className="dark:bg-slate-800  bg-gray-100" 
    style={{minHeight:"100vh"}}>
      <PageProvider>
        <Header></Header>
        <main
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            paddingBottom: "2rem",
          }}
        >
          <Filter></Filter>
          <Table></Table>
        </main>
      </PageProvider>
    </div>
  );
}
