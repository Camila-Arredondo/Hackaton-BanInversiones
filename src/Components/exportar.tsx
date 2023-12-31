import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
type Props = {
    onExcel: () => void;
    onCSV: () => void;
    disabled?: boolean;
}
export function Exportar(props: Props){
    return (<>
    
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button disabled={props.disabled} className="inline-flex text-white w-full justify-center gap-x-1.5 rounded-md bg-blue-700 hover:bg-blue-500 px-3 py-2 text-sm font-semibold disabled:bg-blue-400 dark:bg-indigo-600 dark:disabled:bg-indigo-300 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
          Exportar
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-300">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                 onClick={()=>props.onExcel()}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Excel
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                    onClick={()=>props.onCSV()}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  CSV
                </a>
              )}
            </Menu.Item>
  
      
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </>);
}