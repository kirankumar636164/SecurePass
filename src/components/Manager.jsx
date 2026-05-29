import {useRef} from "react"
import {useState} from "react"

const Manager = () => {
    const ref = useRef();
    const [form, setform] = useState({site: "", username:"", password: ""});
    const [showpass, setshowpass] = useState(false);
    const showPassword = () => {
        ref.current.src.includes("eye.png") ? ref.current.src = "./icons/eyecross.png" : ref.current.src = "./icons/eye.png";
        setshowpass(!showpass);    
    };

    const HandleChange =(e) => {
      setform({...form, [e.target.name] : e.target.value})
    }
    
    return (
       <>
  {/* Background */}
  <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#7e22ce_100%)]"></div>

  {/* Main Container */}
  <div className="container mx-auto flex flex-col items-center justify-center py-10 px-6 md:w-1/2 rounded-xl">

    {/* Heading */}
    <h1 className="mb-2 bg-gradient-to-l from-purple-400 to-purple-800 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
      SecurePass
    </h1>

    <p className="text-lg text-purple-900">
      The Vault for Your Digital Life
    </p>

    {/* Site URL */}
    <div className="mt-6 w-full">
      <input
        type="text"
        placeholder="Site URL"
        name='site'
        value={form.site}
        onChange={HandleChange}
        className="w-full rounded-full border border-purple-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
    </div>

    {/* Username + Password */}
    <div className="mt-4 flex w-full flex-col gap-4 md:flex-row">

      <input
        type="text"
        placeholder="Username"
        name='username'
        value={form.username}
        onChange={HandleChange}
        className="w-full rounded-full border border-purple-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />

      {/* Password Input */}
      <div className="relative w-full">

        <input
          type={showpass ? "text" :"password"}
          placeholder="Password"
          name='password'
          value={form.password}
          onChange={HandleChange}
          className="w-full rounded-full border border-purple-800 px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />

        <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer "onClick={showPassword}>
          <img
            className="w-6"
            src="./icons/eye.png"
            alt="Toggle password visibility"
            ref={ref}
          />
        </span>

      </div>
    </div>

    {/* Button */}
    <button className="mt-6 flex items-center justify-center gap-2 rounded-full bg-purple-600 px-6 py-2 font-bold text-white transition hover:cursor-pointer hover:bg-purple-700">

      <lord-icon
        src="https://cdn.lordicon.com/efxgwrkc.json"
        trigger="hover"
      >
      </lord-icon>

      Add Password

    </button>
  </div>
</>
    )
}

export default Manager
