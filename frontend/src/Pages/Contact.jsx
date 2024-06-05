import React from "react";
import { FaMessage } from "react-icons/fa6";



const Contact=()=>{
    return(
        <>
        <div className="contact_section w-full h-[100vh] flex justify-center items-center my-12">
            <div className="container w-[95%] h-full grid grid-cols-[1.5fr_2fr]">
                <div className=" flex flex-col justify-start items-start gap-6 p-8">
                    <h1 className="text-4xl font-bold">Need additional information ?</h1>
                    <p className="text-lg text-gray-400">E-commerce, put simply, is the practice of buying and selling goods or services using the Internet. It has gained immense popularity as a way of doing business because it's convenient and accessible at the same time. Instead of a physical store where the products to be sold are generally displayed, e-commerce businesses have virtual storefronts where customers can browse and purchase products or services online itself.</p>
                    <p className="font-semibold">(123) 456 7890</p>
                    <p className="font-semibold">ecomm@gmail.com</p>
                    {/* <p className="font-semibold">Ghaziabad, Noida</p> */}
                </div>
                <div className=" w-full h-full flex flex-col justify-start items-start p-8">
                        <label htmlFor="name" className="text-lg font-semibold my-2">Full Name * </label>
                        <input type="text" className="w-full py-3 px-4 rounded-md bg-[#f2f2f2] mb-3" placeholder="E.g - John Doe" id="name"  />
                        <label htmlFor="name" className="text-lg font-semibold my-2">Email * </label>
                        <input type="text" className="w-full py-3 px-4 rounded-md bg-[#f2f2f2] mb-3" placeholder="E.g - john_doe54@gmail.com" id="name"  />
                        <label htmlFor="name" className="text-lg font-semibold my-2">Message * </label>
                        <textarea type="text" className="w-full h-[30%] py-3 px-4 rounded-md bg-[#f2f2f2] mb-4" placeholder="E.g - Hello I am John and i want to buy some cloth" id="name"  />

                        <button className="w-full px-6 py-3 bg-[#FF4D30] flex justify-center items-center gap-4 text-lg text-white font-semibold rounded-md"> Send Message </button>
                  
                </div>
            </div>
        </div>

        </>
    )
}

export default Contact;