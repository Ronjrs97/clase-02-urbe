import { Outlet, NavLink } from 'react-router';

const CinemaLayout = () => {

    const menuItems = [
    {
        label: 'Ahora en cines',
        icon: 'video',
        route: 'now-playing'
    },
    {
        label: 'Próximamente',
        icon: 'calendar',
        route: 'coming-soon'
    },
    {
        label: 'Tendencias',
        icon: 'trending',
        route: 'trending'
    },
    {
        label: 'Favoritos',
        icon: 'heart',
        route: 'favorites'
    },
    {
        label: 'Formulario',
        icon: 'heart',
        route: 'form'
    },
  ];



  return (
    <section className="flex">
    {/* <cinema-sidebar></cinema-sidebar> */}
   
        <div className="w-80 h-screen bg-base-200 flex flex-col">

        <div className="flex-1 p-6">

            <h2 className="text-xl font-bold mb-6">Cinema App URBE</h2>

            <ul className="menu bg-base-200 rounded-box w-56">
                
            {/* <!-- Itera sobre los elementos del menú usando @for -->
            @for (item of menuItems(); track item.label) { */}
                <li>
                    <NavLink 
                     to={'/cinema/now-playing'}>
                        En cines ahora
                    </NavLink>
                
                </li>
            </ul>
        </div>
        </div>

        <div className="flex-1">
            <Outlet />
        </div>
    </section>
  )
}

export default CinemaLayout
