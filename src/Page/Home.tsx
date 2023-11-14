import { Filter } from "../Components/Filter";
import { Header } from "../Components/Header";
import { Table } from "../Components/Table";

export function AdminPAC() {
return(
    <div>
        <Header></Header>
        <main style={{
            maxWidth: "1000px",
            margin: "0 auto", 

        }}>
        <Filter></Filter>
        <Table></Table>
        </main>
 
    </div>
)
}