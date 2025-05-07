import { NavLink } from 'react-router';

export function AppNav() {
  const active = 'text-blue-600 border-b-2 border-blue-600 pb-1'
  const inactive = 'text-gray-700 hover:text-blue-600'

  // ADD Navigation here
  const navigation = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/about',
      name: 'About'
    },
    {
      path: '/todo',
      name: 'Todo'
    }
  ]


  return (
    <nav className="bg-gray-100 p-4 shadow-md">
      <ul className="flex gap-4 text-lg font-medium">
        {navigation.map((nav)=>
        <li>
          <NavLink
            to={nav.path}
            end
            className={({ isActive }) =>
              isActive
                ? active
                : inactive
            }
          >
            {nav.name}
          </NavLink>
        </li>
      )}
      </ul>
    </nav>
  );
}
