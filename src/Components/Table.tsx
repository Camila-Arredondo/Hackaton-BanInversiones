import { useState } from "react";

export function Table() {
  const [persons, setPersons] = useState([
    {
      rut: "11.111.111-1",
      nombre: "Juan Perez",
      banco: "Banco de Chile",
      ncuenta: "987654321",
      monto: "$50.000",
      producto: "APV",
      codigoserv: "01234",
      selected: false,
    },
    {
      rut: "11.111.111-1",
      nombre: "Juan Perez",
      banco: "Banco de Chile",
      ncuenta: "987654321",
      monto: "$50.000",
      producto: "APV",
      codigoserv: "01234",
      selected: false,
    },
    {
      rut: "11.111.111-1",
      nombre: "Juan Perez",
      banco: "Banco de Chile",
      ncuenta: "987654321",
      monto: "$50.000",
      producto: "APV",
      codigoserv: "01234",
      selected: false,
    },
    {
      rut: "11.111.111-1",
      nombre: "Juan Perez",
      banco: "Banco de Chile",
      ncuenta: "987654321",
      monto: "$50.000",
      producto: "APV",
      codigoserv: "01234",
      selected: false,
    },
    {
      rut: "11.111.111-1",
      nombre: "Juan Perez",
      banco: "Banco de Chile",
      ncuenta: "987654321",
      monto: "$50.000",
      producto: "APV",
      codigoserv: "01234",
      selected: false,
    },
    {
      rut: "11.111.111-1",
      nombre: "Juan Perez",
      banco: "Banco de Chile",
      ncuenta: "987654321",
      monto: "$50.000",
      producto: "APV",
      codigoserv: "01234",
      selected: false,
    },
  ]);

  const [checked, setChecked] = useState(false);

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
                          setPersons(
                            persons.map((person) => {
                              return {
                                ...person,
                                selected: !checked,
                              };
                            })
                          );
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
                  {persons.map((person, index) => {
                    return (
                      <tr key={index}>
                        <td className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                          <input
                            type="checkbox"
                            checked={person.selected}
                            onChange={() => {
                              setPersons(
                                persons.map((item, i) => {
                                  if (i === index) {
                                    return {
                                      ...item,
                                      selected: !item.selected,
                                    };
                                  } else {
                                    return item;
                                  }
                                })
                              );
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
                          {person.monto}
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
      <div className="mt-3 flex justify-end">
      <button
        type="button"
        className="rounded-md bg-blue-700 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        onClick={() => {
          const selectedPersons = persons.filter((person) => {
            return person.selected;
          });
          console.log(selectedPersons);
        }}
      >
        Exportar
      </button>

      </div>
    </div>
  );
}
