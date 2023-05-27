import { Link } from 'react-router-dom'
import { useToggleChange } from '../../Hooks/ToggleHook'

export default function Navbar() {
    const toggle = useToggleChange()
  return (
   <>
    <header className='sticky z-50 top-0 py-6 backdrop-filter backdrop-blur-lg bg-opacity-10'>
        <nav className='flex justify-around'>
            <h1 className='font-light text-xl text-slate-700'>.cool_logo</h1>
            <ul className='flex justify-center gap-9'>
                <li>
                    <Link to={'/'} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/create'}>
                        New
                    </Link>
                </li>
                <li>
                    <button type='button' onClick={toggle}>
                        cool button
                    </button>
                </li>
            </ul>
        </nav>
    </header>
   </>
  )
}
