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
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type="text" placeholder="John Doe" {...register("name", { required: true })} />
                <input type="email" placeholder="you@company.com" {...register("email", { required: true })} />
                <textarea placeholder="Your Message" {...register("message", { required: true })}></textarea>
                <button type="submit">Submit Form</button>
            </form>
            <div>{result}</div>
        </div>
    )
}