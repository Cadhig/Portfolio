import useWeb3forms from "@web3forms/react";
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Send } from "lucide-react";
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
        <div className="flex flex-col justify-center items-center gap-4 m-4 defaultFont" id="contact">
            <form onSubmit={handleSubmit(onSubmit)} className="relative text-grey-custom p-6 text-xl flex flex-col items-center justify-center gap-4 rounded border-2 border-grey-custom" >
                <h1 className="font-bold text-center text-4xl md:text-6xl md:w-1/2">Contact</h1>
                <p>Fill out the form below to send me an email, I typically respond within 3 days.</p>
                <input type="text" placeholder="John Doe" {...register("name", { required: true })} className="w-3/4 rounded border-2 border-grey-custom p-1" />
                <input type="email" placeholder="you@company.com" {...register("email", { required: true })} className="w-3/4 rounded border-2 border-grey-custom p-1" />
                <textarea placeholder="Your Message" {...register("message", { required: true })} className="w-3/4 rounded border-2 border-grey-custom p-1 h-52"></textarea>
                <div className='relative flex flex-col w-full md:w-1/2'>
                    <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
                    <button type="submit" className='relative bg-green-custom text-grey-custom p-2 text-2xl flex items-center justify-center gap-2 rounded border-2 border-grey-custom transition duration-150 ease-in-out hover:-translate-y-1'>Send Email<Send /></button>
                </div>
                <div>If you would prefer to send me an email separately:</div>
                <a href="mailto:cadencehiggins@gmail.com" className="text-blue-600 hover:underline cursor-pointer">cadencehiggins@gmail.com</a>
                <div>{result}</div>
            </form>
        </div>
    )
}