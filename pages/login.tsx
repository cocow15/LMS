import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: implement login logic
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center justify-center mb-10">
            <Image src="/Logo LMS.png" alt="Logo" width={200} height={200} />
            <h1 className="text-2xl font-bold ml-2">Welcome Back</h1>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>
            <div className="flex items-center gap-2 relative">
            <label htmlFor="password">Password:</label>
            <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            </div>
            <div className="flex items-center gap-2">
            <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="flex items-center gap-2">
            <Link href="/register" legacyBehavior>
                <a className="text-blue-500 hover:underline">Register</a>
            </Link>
            <Link href="/forgot-password" legacyBehavior>
                <a className="text-blue-500 hover:underline">Forgot password?</a>
            </Link>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Login
            </button>
        </form>
        </div>
    );
}