"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experienceData } from "@/lib/data";

function Experiencie() {
    return (
        <section id="trayectoria" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-gradient">Trayectoria</span>
                    </h2>
                    <p className="text-lg text-gray-300">Mi experiencia profesional y educativa</p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>

                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                        >
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                                <Card className="bg-slate-900/80 border border-purple-700/30 shadow-lg">
                                    <CardHeader>
                                        <div className="flex items-center mb-2">
                                            <div className="p-2 bg-purple-500 rounded-lg mr-3">
                                                {exp.icon && <exp.icon className="h-5 w-5 text-white" />}
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg">{exp.title}</CardTitle>
                                                <CardDescription className="text-purple-400">{exp.company}</CardDescription>
                                            </div>
                                        </div>
                                        <Badge className="w-fit border-purple-400 text-purple-400">
                                            {exp.period}
                                        </Badge>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-300">{exp.description}</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Experiencie }; 