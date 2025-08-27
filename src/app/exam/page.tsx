"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar, User, BookOpen, Flag } from 'lucide-react';
import Image from "next/image";


const examQuestions = [
  {
    id: 1,
    question: "../../../assets/question.PNG",
    options: [
      "They are all the same",
      "let and const are block-scoped, var is function-scoped",
      "var is block-scoped, let and const are function-scoped",
      "Only const is immutable"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "../../../assets/question.PNG",
    options: [
      "useState",
      "useEffect",
      "useComponent",
      "useCallback"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "../../../assets/question.PNG",
    options: [
      "To style list items",
      "To help React identify which items have changed",
      "To sort the list items",
      "To validate list data"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "../../../assets/question.PNG",
    options: [
      "display: grid",
      "display: flex",
      "display: block",
      "display: inline"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "../../../assets/question.PNG",
    options: [
      "Application Programming Interface",
      "Advanced Programming Integration",
      "Automated Program Interaction",
      "Application Process Integration"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "../../../assets/question.PNG",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "../../../assets/question.PNG",
    options: [
      "O(n)",
      "O(log n)",
      "O(n²)",
      "O(1)"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "../../../assets/question.PNG",
    options: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "../../../assets/question.PNG",
    options: [
      "Model View Controller",
      "Multiple View Components",
      "Modern Visual Components",
      "Model Virtual Container"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "../../../assets/question.PNG",
    options: [
      "npm",
      "Git",
      "Node.js",
      "Webpack"
    ],
    correctAnswer: 1
  }
];


const page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [timeRemaining, setTimeRemaining] = useState(30 * 60);
  const [examStartTime] = useState(new Date());

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          // Auto-submit exam when time runs out
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitExam = () => {
    alert(`Exam submitted! You answered ${Object.keys(selectedAnswers).length} out of ${examQuestions.length} questions.`);
  };

  const getProgressPercentage = () => {
    return ((currentQuestion + 1) / examQuestions.length) * 100;
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-white/50 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Frontend Developer Interview</h1>
                <p className="text-gray-600">Technical Assessment</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">
                  {formatDate(examStartTime)}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-red-50 rounded-lg">
                <Clock className="w-5 h-5 text-red-600" />
                <span className="text-lg font-bold text-red-800">
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-white/50 mb-6">
          <div className="w-full bg-white rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          <div className="mb-6 mt-6 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white font-bold text-lg">
                {currentQuestion + 1}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Question {currentQuestion + 1}</h2>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border-1 border-purple-500">
              <img src={examQuestions[currentQuestion].question} width="100%" height={500} alt="question" />
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3 p-8">
            <p className='text-grey-700 font-bold'>Please choose the correct answer:</p>
            {examQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-xl cursor-pointer border-2 transition-all duration-200 hover:shadow-md ${selectedAnswers[currentQuestion] === index
                  ? 'border-purple-500 bg-purple-50 text-purple-800 shadow-md'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-50/50'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedAnswers[currentQuestion] === index
                    ? 'border-purple-500 bg-purple-500'
                    : 'border-gray-300'
                    }`}>
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
          {/* Navigation */}
          <div className="bg-white rounded-2xl shadow-lg border border-white/50 p-6">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md cursor-pointer'
                  }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Answered</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {Object.keys(selectedAnswers).length}/{examQuestions.length}
                  </p>
                </div>

                {currentQuestion === examQuestions.length - 1 && (
                  <button
                    onClick={handleSubmitExam}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    Submit Exam
                  </button>
                )}
              </div>

              <button
                onClick={handleNext}
                disabled={currentQuestion === examQuestions.length - 1}
                className={`flex items-center gap-2 px-6 py-3 cursor-pointer rounded-xl font-semibold transition-all duration-200 ${currentQuestion === examQuestions.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                  }`}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default page