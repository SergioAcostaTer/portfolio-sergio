/* eslint-disable react/prop-types */

const Icon = ({ img, color }) => {
    return (
        <>

            <div className='z-[50] flex justify-center items-center w-[60px] h-[60px] rounded-xl relative transform transition duration-300 ease-in-out cursor-pointer'
                style={{
                    backgroundColor: color
                }}
            >
                <img src={img} alt="" className='object-contain w-[50px] h-[50px] rounded' />
            </div>
        </>
    )
}

export default Icon