
const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className="container mx-auto flex flex-col items-center justify-center py-10">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-l from-purple-400 to-purple-800">SecurePass</h1>
                    <p className='text-1xl text-purple-600'>The Vault for Your Digital Life</p>
                <div className="mt-8">
                <input type="text bg-gray-200 border-gray-300" ></input>
                <input type="text bg-gray-200 border-gray-300" ></input>
                <input type="text bg-gray-200 border-gray-300" ></input>
                </div>
            </div>
        </>
    )
}

export default Manager
