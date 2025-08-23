"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Github, Globe } from "lucide-react";

const page = () => {
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[lab(96_-0.41_-1.96)] p-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
            >
                <Card className="rounded-2xl shadow-lg border-0 bg-white backdrop-blur-lg">
                    <CardHeader>
                        <CardTitle className="text-[16px] md:text-[28px] text-center font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent block">
                            Welcome Back
                        </CardTitle>
                        <h1 className="text-[12px] md:text-[20px] text-center font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent block">
                            Sign in to continue to your account
                        </h1>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4 mt-6">
                            <div>
                                <Label htmlFor="email" className="text-slate-600">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="mt-1 bg-purple-50 border-white/30 text-black placeholder-slate-300 focus:ring-2 focus:ring-pink-400"
                                    required
                                />
                            </div>
                            <div className="mt-3">
                                <Label htmlFor="password" className="text-slate-600">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="mt-1 bg-purple-50 border-white/30 text-black placeholder-slate-300 focus:ring-2 focus:ring-pink-400"
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-white font-semibold"
                                disabled={loading}
                            >
                                {loading ? "Signing in..." : "Login"}
                            </Button>
                        </form>
                        <div className="flex gap-3 mt-3">
                            <Button
                                variant="outline"
                                className="cursor-pointer flex-1 flex items-center justify-center gap-2"
                            >
                                <Globe className="text-lg" />
                                Google
                            </Button>
                            <Button
                                variant="outline"
                                className="cursor-pointer flex-1 flex items-center justify-center gap-2"
                            >
                                <Github className="text-lg" />
                                GitHub
                            </Button>
                        </div>
                        <p className="text-center text-sm text-slate-500 mt-4">
                            Don’t have an account?{" "}
                            <Link href="/register" className="text-pink-400 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

export default page