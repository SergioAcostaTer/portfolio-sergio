/* eslint-disable react/prop-types */
const Box = ({ url, img, color }) => {
    return (
        <>

            <a href={url} target="_blank" rel="noreferrer" className="aspect-square">
                <div style={{
                    backgroundColor: color
                }} className={`noselect cursor-pointer w-full h-full md:w-[90px] md:h-[90px] m:w-[120px] m:h-[120px] rounded-[20px] transition-all duration-150 hover:scale-[1.04] flex items-center justify-center relative`}>
                    <div className="static w-full h-full">
                        <div></div>
                    </div>
                    <svg stroke="noselect currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="absolute right-[10px] top-[10px] text-xl text-white dark:text-[#ffffffaa]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
                    <img src={img} alt="linkedin" className="w-[50px] h-[50px] noselect" />
                </div>
            </a>

        </>
    )
}

export default Box