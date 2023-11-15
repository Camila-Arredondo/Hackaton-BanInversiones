import  { FC, ReactNode, createContext, useState } from "react";

const initial: any = {}
const PageContext = createContext(initial);

const PageProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    const [datos, setDatos] = useState([
        {
          id: 1,
          rut: "11.111.111-1",
          nombre: "Juan Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 1000,
          producto: "APV",
          codigoserv: "01234",
          selected: false,
        },      
          {
          id: 2,
          rut: "22.222.222-2",
          nombre: "Maria Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 2000000,
          producto: "Mis Metas",
          codigoserv: "01234",
          selected: false,
        },
        {
          id: 3,
          rut: "33.333.333-3",
          nombre: "Andres Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 50000,
          producto: "APV",
          codigoserv: "01234",
          selected: false,
        },
        {
          id: 4,
          rut: "44.444.444-4",
          nombre: "Jose Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 50000,
          producto: "Mis Metas",
          codigoserv: "01234",
          selected: false,
        },
        {
          id: 5,
          rut: "55.555.555-5",
          nombre: "Ana Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 50000,
          producto: "APV",
          codigoserv: "01234",
          selected: false,
        },
        {
          id: 6,
          rut: "66.666.666-6",
          nombre: "Francisca Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 50000,
          producto: "Mis Metas",
          codigoserv: "01234",
          selected: false,
        },
        {
          id: 7,
          rut: "77.777.777-7",
          nombre: "Carolina Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 50000,
          producto: "APV",
          codigoserv: "01234",
          selected: false,
        },
        {
          id: 8,
          rut: "88.888.888-8",
          nombre: "Camila Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 50000,
          producto: "Mis Metas",
          codigoserv: "01234",
          selected: false,
        },
        {
          id: 9,
          rut: "99.999.999-9",
          nombre: "Will Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 50000,
          producto: "APV",
          codigoserv: "01234",
          selected: false,
        },
        {
          id: 10,
          rut: "10.101.010-1",
          nombre: "Matias Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 50000,
          producto: "Mis Metas",
          codigoserv: "01234",
          selected: false,
        },
        {
          id: 11,
          rut: "11.111.111-0",
          nombre: "Kevin Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 50000,
          producto: "APV",
          codigoserv: "01234",
          selected: false,
        },
        {
          id: 12,
          rut: "12.121.121-2",
          nombre: "Stephania Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 50000,
          producto: "Mis Metas",
          codigoserv: "01234",
          selected: false,
        },
      
      ]);


      const updateData = (dato:any ) => {
        setDatos(datos.map((item:any) => (item.id === dato.id ? dato : item)));
      } 

  const data: any = {
    datos, setDatos, updateData
  };
  return <PageContext.Provider value={data}>{children}</PageContext.Provider>;
};

export { PageProvider };
export default PageContext;
