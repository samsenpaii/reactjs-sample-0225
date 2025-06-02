"use client"
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

// use this loginSchema to validate the input by user
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
});

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    //Check the input using the input schema 
    const validEntry = () => {
        const result = loginSchema.safeParse({ email, password }); // pass the email and pass to loginSchema
        
        if (!result.success) {
            const formattedErrors = result.error.flatten().fieldErrors;
            setErrors({
            email: formattedErrors.email?.[0],
            password: formattedErrors.password?.[0],
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
            Log in!
            </h1>
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
            <div className="flex justify-between items-center mb-4">
                <label className="flex items-center text-white">
                    <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 text-white rounded focus:ring-white"
                    />
                    Remember me
                </label>
                <a href="#" className="text-white hover:underline">
                    Forgot Password?
                </a>
            </div>
            <div className="flex items-center justify-center">
                <button className="w-fit p-4 pl-10 pr-10 bg-white text-[#1E3A8A] font-semibold py-3  hover:bg-gray-200 transition hover:cursor-pointer"
                    onClick={validEntry}>
                    Log in
                </button>
            </div>
            
        </div>
        </div>
    );
};

export default LoginPage;