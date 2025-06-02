"use client"
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

// use this signupSchema to validate the input by user
const signupSchema = z.object({
    username : z
        .string()
        .min(3, "Username must be at lest 3 characters long"),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters long"),
    terms: z
        .string()
        .refine((val) => val !== "false", {
        message: "You must accept the Terms and Conditions",
        }),   
});

const SignupPage = () => {
    const router = useRouter();

    const [username , setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [terms , setTerms] = useState("false");
    const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string; terms?: string }>({});

    //Check the input using the input schema 
    const validEntry = () => {
        const result = signupSchema.safeParse({ email, password , username , terms }); // pass the email and pass to signupSchema
        
        
        if (!result.success) {
            const formattedErrors = result.error.flatten().fieldErrors;
            setErrors({
            username : formattedErrors.username?.[0],
            email: formattedErrors.email?.[0],
            password: formattedErrors.password?.[0],
            terms: formattedErrors.terms?.[0],
            });
            return;
        }

        setErrors({});
        router.push("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#1C427D] p-4">
        <div className="p-6 rounded-lg w-full max-w-sm">
            <h1 className="text-3xl font-bold text-white text-center mb-6">
                Sign up
            </h1>

            <input
                type="username"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 mb-4 text-white bg-transparent border border-white rounded focus:outline-2 focus:outline-white"
            />
            {errors.username && <p className="text-red-400 text-sm mb-4">{errors.username}</p>}

            <input
                type="email"
                placeholder="abcd@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-4 text-white bg-transparent border border-white rounded focus:outline-2 focus:outline-white"
            />
            {errors.email && <p className="text-red-400 text-sm mb-4">{errors.email}</p>}

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mb-4 text-white bg-transparent border border-white rounded focus:outline-2 focus:outline-white"
            />
            {errors.password && <p className="text-red-400 text-sm mb-4">{errors.password}</p>}
            
            <label className="flex items-center text-white">
                <input
                type="checkbox"
                className="mr-2 h-4 w-4 text-white rounded focus:ring-white"
                value={terms}
                onChange={() => setTerms("true")}
                />
                I accept the Terms and Conditions
            </label>
            {errors.terms && <p className="text-red-400 text-sm mb-4">{errors.terms}</p>}

            <div className="flex items-center justify-center m-3">
                <button className="w-fit p-4 pl-10 pr-10 bg-white text-[#1E3A8A] font-semibold py-3  hover:bg-gray-200 transition hover:cursor-pointer"
                    onClick={validEntry}>
                    Sign up
                </button>
            </div>
            
        </div>
        </div>
    );
};

export default SignupPage;