import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Filter.css';
export function Filter() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const isValidDay = (date: any) => {
   
    return (
        date.getDate() == 5 ||
        date.getDate() == 10 ||
        date.getDate() == 15 ||
        date.getDate() == 20
    );
  };

  return (
    <div className="px-10 md:px-6 lg:px-8">
      <div className="grid gap-x-9 gap-y-5 md:grid-cols-12 md:col-span-2">
        <div className="md:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Día de Cargo
          </label>
          <div className="mt-2">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date as Date | null)}
              filterDate={isValidDay}
              
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
           
          </div>
        </div>

        <div className="md:col-span-3 ">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Producto
          </label>
          <div className="mt-2">
            <select
              id="productos"
              name="tipoproductos"
              autoComplete="productos-name"
              placeholder="Seleccione un producto"
              className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>APV</option>
              <option>Mis Metas</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-4">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Buscar por RUT/RUN
          </label>
          <div className="mt-2 flex items-center">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              placeholder="Buscar por RUT/RUN"
              className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <button
              type="button"
              className="ml-3 rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Buscar
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Total Seleccionado
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder="Total seleccionado:"
              className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
