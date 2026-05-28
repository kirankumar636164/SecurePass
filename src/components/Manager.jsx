
const Manager = () => {
    return (
        <>
<div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

<div class="container mx-auto flex flex-col items-center justify-center py-10 w-full md:w-1/2 px-10  rounded-xl"> 
  
  <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-l from-purple-400 to-purple-800 lg:text-5xl mb-2">
    SecurePass
  </h1>
  
  <p class='text-lg text-purple-900'>The Vault for Your Digital Life</p>

  <div class="flex flex-col p-4 w-full max-w-4xl"> 
    <input 
      type="text" 
      placeholder="Site URL"
      class="border border-purple-800 focus:outline-violet-500 rounded-full w-full px-4 py-1" 
    />
  </div>

  <div class="mt-4 flex flex-col md:flex-row gap-4 w-full px-4"> 
    <input 
      type="text" 
      placeholder="Username"
      class="border border-purple-800 focus:outline-violet-500 rounded-full w-full px-4 py-1" 
    />
    <input 
      type="password" 
      placeholder="Password"
      class="border border-purple-800 focus:outline-violet-500 rounded-full w-full px-4 py-1" 
    />
  </div>
  <button class="flex justify-center items-center    bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full hover:cursor-pointer">
  <lord-icon
    src="https://cdn.lordicon.com/efxgwrkc.json"
    trigger="hover">
</lord-icon>
    Add Password
  </button>
</div>

        </>
    )
}

export default Manager
