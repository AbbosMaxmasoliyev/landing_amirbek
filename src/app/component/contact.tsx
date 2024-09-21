import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className="w-full bg-white flex justify-center py-11">
            <div className='w-11/12  xl:w-10/12 max-w-[1400px] grid gap-5 grid-cols-1 md:grid-cols-2'>
                <form className='w-full rounded-xl flex flex-col gap-5 border p-5'>
                    <input type="text" className='font-montserrat h-9 rounded-lg px-4 border' placeholder='Enter full name' />
                    <input type="text" className='font-montserrat h-9 rounded-lg px-4 border' placeholder='Enter your email' />
                    <textarea className='font-montserrat h-44 rounded-lg px-4 border' placeholder='Message'>

                    </textarea>
                    <button className='w-full h-8 rounded-xl bg-yellow-500'>Send</button>
                </form>
                <div className="flex flex-col  w-full justify-center">
                    <p className='font-extrabold text-black text-center my-5'>Contact Me</p>
                    <p className='text-gray-600 text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate maiores illum neque minus, dicta dolore esse unde alias, magni deserunt provident!
                    </p>
                    <p className='text-gray-600 text-center font-bold text-[14px] mt-5'>Email: your@email.com</p>
                    <p className='text-gray-600 text-center font-bold text-[14px]'>Phone: your@email.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact