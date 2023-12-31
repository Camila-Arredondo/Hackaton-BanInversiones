import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Filter.css';
import PageContext from "../Context/page.context";
import MaskedInput from 'react-text-mask'
import createRutMask from './rutmask';

export function Filter() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const rutMask = createRutMask();

  const { datos, productos, buscarCliente } = useContext(PageContext);
  const [busquedadata, setBusquedaData] = useState<any>({});
  const productosList :any[] = productos;
  const [diaCargo, setDiaCargo] = useState([
    {
      id: 5,
      dia: "5",
    },
    {
      id: 10,
      dia: "10",
    },
    {
      id: 15,
      dia: "15",
    },
    {
      id: 20,
      dia: "20",
    },
  ]);
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
            className="block text-sm font-medium leading-6 dark:text-white text-gray-900"
          >
            Día de Cargo
          </label>
          <div className="mt-2">
          {/*<DatePicker
              isClearable
              selected={startDate}
              onChange={(date) => setStartDate(date as Date | null)}
              filterDate={isValidDay}
              dateFormat={"dd-MM-yyyy"}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  />*/}
   <select
    value={busquedadata.diaCargo}
              onChange={(e) => {
                setBusquedaData({
                  ...busquedadata,
                  diaCargo: e.target.value,
                });
              }}  
              id="diaCargo"
              name="diaCargo"
              autoComplete="diaCargo-name"
              placeholder="Seleccione un día"
              className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:max-w-xs sm:text-sm sm:leading-6 dark:gray-900"
            >
              <option></option>
              {diaCargo.map((item: any, index) => (
                <option key={index} value={item.id}>{item.dia}</option>
            
              ))}
            </select>
           
          </div>
        </div>

        <div className="md:col-span-3 ">
          <label className="block text-sm font-medium dark:text-white leading-6 text-gray-900">
            Producto
          </label>
          <div className="mt-2">
            <select
              value={busquedadata.tipoproductos}
              onChange={(e) => {
                setBusquedaData({
                  ...busquedadata,
                  tipoproductos: e.target.value,
                });
              }}
              id="productos"
              name="tipoproductos"
              autoComplete="productos-name"
              placeholder="Seleccione un producto"
              className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:max-w-xs sm:text-sm sm:leading-6"
            >
              <option></option>
              {productosList.map((item: any, index) => (
                <option key={index} value={item.id}>{item.nombre}</option>
            
              ))}
            </select>
          </div>
        </div>

        <div className="md:col-span-4">
          <label
            htmlFor="last-name"
            className="block text-sm dark:text-white font-medium leading-6 text-gray-900"
          >
            Buscar por RUT/RUN
          </label>
          <div className="mt-2 flex items-center">
            <MaskedInput
              mask={rutMask}

              
              type="text"
              value={busquedadata.rut}
              onChange={(e:any) => {
                setBusquedaData({
                  ...busquedadata,
                  rut: e.target.value,
                });
              }}
              name="buscar-rut"
              id="buscar-rut"
              placeholder="Buscar por RUT/RUN"
              className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-gray-500 dark:placeholder-gray-500 "
            />
            <button
              type="button"
              onClick={async () => {
                await buscarCliente({
                  rut: busquedadata.rut ? busquedadata.rut.replaceAll(".","") : "",
                  producto: busquedadata.tipoproductos ? parseInt(busquedadata.tipoproductos) : 0,
                  fechapago: busquedadata.diaCargo ? parseInt(busquedadata.diaCargo) :  0,

                });
              }}
              className="ml-3 rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-indigo-600 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            >
              Buscar
            </button>

          </div>
        </div>

        <div className="md:col-span-5">
          <label
            htmlFor="first-name"
            className="block text-sm dark:text-white font-medium leading-6 text-gray-900"
          >
            Total Seleccionado
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              disabled
              value={"$"+datos.filter((item: any) => item.selected)?.reduce((a: any, b: any) => a + b.monto, 0).toLocaleString('es-ES')}
              autoComplete="given-name"
              placeholder="Total seleccionado:"
              className="block w-full rounded-md border-0 bg-blue-400 py-1.5 pl-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


