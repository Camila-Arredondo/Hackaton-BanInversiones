import { useContext, useState } from "react";
import PageContext from "../Context/page.context";
import * as XLSX from 'xlsx-color';

export function Table() {

  const { datos, updateData, setDatos } = useContext(PageContext);

  const persons: any[] = datos;
  const [checked, setChecked] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [personfilter, setPersonfilter] = useState(persons.slice(0, itemsPerPage));



  const handlePageChange = (page: number) => {
    if(page < 1 || page > Math.ceil(persons.length / itemsPerPage)) return;
    setCurrentPage(page);
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPersonfilter(persons.slice(start, end));
  }

  return (
    <div className="px-10 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-blue-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {
                          setChecked(!checked);
                          setPersonfilter(
                            personfilter.map((person) => {
                              return {
                                ...person,
                                selected: !checked,
                              };
                            })
                          );

                          setDatos( datos.map((person: any) => {
                            return {
                              ...person,
                              selected: !checked,
                            };
                          }));
                        }}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                    >
                      RUT/RUN
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Banco
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      N° Cuenta
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Monto $
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Producto
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Codigo Servicio
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {personfilter.map((person, index) => {
                    return (
                      <tr key={index}>
                        <td className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                          <input
                            type="checkbox"
                            checked={person.selected}
                            onChange={() => {
                              var personchecked = personfilter.map((item, i) => {
                                if (i === index) {
                                  let update = {
                                    ...item,
                                    selected: !item.selected,
                                  };
                                  updateData(update)
                                  return update;
                                } else {
                                  return item;
                                }
                              });
                              
                             
                              setPersonfilter(
                                personchecked
                              );

                              setChecked(personchecked.every((person) => person.selected));
                            }}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.rut}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.nombre}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.banco}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.ncuenta}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          ${person.monto.toLocaleString('es-ES')}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.producto}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.codigoserv}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

<div className="flex justify-between">
<div className="mt-3 flex justify-end">
<span className="mt-2 mr-2">Items por página: </span>
        <select
          id="countries"
          className="bg-gray-50 border mr-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
            setPersonfilter(persons.slice(0, Number(e.target.value)));
          }}
        >
          <option value="5">5</option>
          <option  value="10">
            10
          </option>
          <option value="30">30</option>
          <option value="100">100</option>
        </select>
</div>
<div className="mt-3 flex justify-end">
      
     <span className="mt-2 mr-2"> {currentPage} de {  Math.ceil(persons.length / itemsPerPage) }</span>
        <nav className="mt-1 mr-2">
          <ul className="flex items-center -space-x-px h-8 text-sm">
            <li>
              <button disabled={currentPage == 1} onClick={()=>handlePageChange(currentPage-1)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">
                <span className="sr-only">Previous</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
              </button>
            </li>
            <li>
              <button disabled={currentPage == Math.ceil(persons.length / itemsPerPage)} onClick={()=>handlePageChange(currentPage+1)}  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
                <span className="sr-only">Next</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              </button>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-md bg-blue-700 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          onClick={() => {
            const selectedPersons = personfilter.filter((person) => person.selected);
            let dataExcel = selectedPersons.map((person) => {
              return {
                "Rut": person.rut,
                "Nombre": person.nombre,
                "Banco": person.banco,
                "N° de Cuenta": person.ncuenta,
                "Monto": "$"+ person.monto.toLocaleString('es-ES'),
                "Producto": person.producto,
                "Codigo de Servicio": person.codigoserv,
                
              }
            });

            dataExcel.push({
              "Rut": "",
              "Nombre": "",
              "Banco": "",
              "N° de Cuenta": "TOTAL",
              "Monto": "$" + selectedPersons.reduce((a: any, b: any) => a + b.monto, 0).toLocaleString('es-ES'),
              "Producto": "",
              "Codigo de Servicio": "",

            });
       
            let wb = XLSX.utils.book_new();
            let ws = XLSX.utils.json_to_sheet(dataExcel);
            var colorstyle = {
              fill: {
                patternType: "solid",
                fgColor: { rgb: "1d4ed8" }
              },
              font: {
                color: { rgb: "FFFFFFFF" },
                bold: true
              }
            }
            ws["A1"].s = colorstyle;
            ws["B1"].s = colorstyle;
            ws["C1"].s = colorstyle;
            ws["D1"].s = colorstyle;
            ws["E1"].s = colorstyle;
            ws["F1"].s = colorstyle;
            ws["G1"].s = colorstyle;
            XLSX.utils.book_append_sheet(wb, ws, "ProductosPac");

            XLSX.writeFile(wb, "ProductosPac.xlsx");
          
          }}
        >
          Exportar
        </button>
      </div>
</div>
   
    </div>
  );
}
