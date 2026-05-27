import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='flex justify-between gap-4 bg-[#a577f7aa] text-white p-4' >
            <div className="text-3xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-purple-800">SecurePass</span>
            </div>
            <ul className="flex gap-4 ">
                <Link className="hover:underline hover:font-bold" to="/">Home</Link>
                <Link className="hover:underline hover:font-bold" to="/about">About</Link>
            </ul>
        </nav>
    )
}

export default Navbar
