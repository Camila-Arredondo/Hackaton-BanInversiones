import { Filter } from "../Components/Filter";
import { Header } from "../Components/Header";
import { Table } from "../Components/Table";
import { PageProvider } from "../Context/page.context";

export function AdminPAC() {
  return (
    <div>
      <PageProvider>
        <Header></Header>
        <main
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            marginBottom: "2rem",
          }}
        >
          <Filter></Filter>
          <Table></Table>
        </main>
      </PageProvider>
    </div>
  );
}
