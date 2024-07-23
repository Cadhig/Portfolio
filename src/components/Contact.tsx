import useWeb3forms from "@web3forms/react";
import { useState } from "react"
import { useForm } from "react-hook-form"
export default function Contact() {
    const { register, reset, handleSubmit } = useForm();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [result, setResult] = useState<string | null>(null);
    const accessKey = "a8cdaf0b-e987-4417-a379-a7b40725134c";

    const { submit: onSubmit } = useWeb3forms({
        access_key: accessKey,
        settings: {
            from_name: "Cadence's Portfolio",
            subject: "New Contact Message from your Portfolio",
        },
        onSuccess: (msg) => {
            setIsSuccess(true);
            setResult(msg);
            reset();
        },
        onError: (msg) => {
            setIsSuccess(false);
            setResult(msg);
        },
    });

    console.log(isSuccess)

    return (
        <div className="flex flex-col justify-center items-center gap-4 m-4" id="contact">
            <h1 className="font-bold text-center text-4xl md:text-6xl md:w-1/2">Contact</h1>
            <div className='relative flex flex-col w-full md:w-3/4'>
                <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
                <form onSubmit={handleSubmit(onSubmit)} className="relative bg-green-custom text-grey-custom p-6 text-2xl flex flex-col items-center justify-center gap-2 rounded border-2 border-grey-custom transition duration-150 ease-in-out hover:-translate-y-1" >
                    <input type="text" placeholder="John Doe" {...register("name", { required: true })} className="w-3/4 rounded border border-grey-custom p-1" />
                    <input type="email" placeholder="you@company.com" {...register("email", { required: true })} className="w-3/4 rounded border border-grey-custom p-1" />
                    <textarea placeholder="Your Message" {...register("message", { required: true })} className="w-3/4 rounded border border-grey-custom p-1"></textarea>
                    <button type="submit" className="text-xl border border-grey-custom rounded p-2 w-3/4 bg-blue-custom shadow-md">Send Email</button>
                    <div>{result}</div>
                </form>
            </div>
        </div>
    )
}