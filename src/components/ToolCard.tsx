import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

const ToolCard = () => {
    return (
        <>
            <Card className="bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                <div className="relative h-28">
                    <Image
                        src="https://myinterviewpractice.com/images/virtual_interviews.svg" // put your image inside /public/images/
                        alt="Mock Interview"
                        width={100}
                        height={100}
                        className="object-cover"
                        priority
                    />
                </div>
                <CardHeader>
                    <CardTitle className="text-xl text-indigo-600">Mock Interviews</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                    Practice real-world interview questions tailored for your role.
                </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                <CardHeader>
                    <CardTitle className="text-xl text-indigo-600">Resume Feedback</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                    Get AI-powered feedback on your resume and cover letter.
                </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                <CardHeader>
                    <CardTitle className="text-xl text-indigo-600">Career Insights</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                    Stay ahead with market trends and role-specific salary insights.
                </CardContent>
            </Card>
        </>
    )
}

export default ToolCard