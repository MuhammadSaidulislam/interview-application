"use client"
import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Users,
  TrendingUp,
  Plus,
  Search,
  Filter,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Eye,
  Edit,
  Trash2,
  Download,
  Zap,
  Target,
  Trophy,
  Sparkles,
  Activity,
  Bell,
  Settings,
  ChevronDown,
  MoreVertical,
  ArrowUpRight,
  Star
} from 'lucide-react';

// shadcn/ui components
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

const page = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data with more engaging metrics
  const stats = {
    totalQuestions: 1247,
    totalExams: 89,
    activeUsers: 342,
    completionRate: 78,
    weeklyGrowth: 12.5,
    engagement: 94.2
  };

  const recentExams = [
    {
      id: 1,
      title: 'Advanced Mathematics Final',
      questions: 50,
      status: 'active',
      date: '2025-09-15',
      submissions: 234,
      difficulty: 'Expert',
      category: 'Mathematics',
      trending: true
    },
    {
      id: 2,
      title: 'Quantum Physics Midterm',
      questions: 35,
      status: 'draft',
      date: '2025-09-18',
      submissions: 0,
      difficulty: 'Advanced',
      category: 'Physics',
      trending: false
    },
    {
      id: 3,
      title: 'Organic Chemistry Quiz',
      questions: 20,
      status: 'completed',
      date: '2025-09-10',
      submissions: 156,
      difficulty: 'Intermediate',
      category: 'Chemistry',
      trending: false
    }
  ];

  const questionCategories = [
    { name: 'Mathematics', count: 324, color: 'from-blue-500 to-cyan-500', icon: '📐' },
    { name: 'Physics', count: 256, color: 'from-green-500 to-emerald-500', icon: '⚡' },
    { name: 'Chemistry', count: 198, color: 'from-purple-500 to-pink-500', icon: '🧪' },
    { name: 'Biology', count: 289, color: 'from-orange-500 to-red-500', icon: '🧬' },
    { name: 'General', count: 180, color: 'from-gray-500 to-slate-500', icon: '📚' }
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-500/25';
      case 'draft':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-yellow-500/25';
      case 'completed':
        return 'bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-gray-500/25';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-gray-500/25';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Expert': return 'text-red-500 bg-red-50 border-red-200';
      case 'Advanced': return 'text-purple-500 bg-purple-50 border-purple-200';
      case 'Intermediate': return 'text-blue-500 bg-blue-50 border-blue-200';
      default: return 'text-green-500 bg-green-50 border-green-200';
    }
  };

  const StatCard = ({ icon: Icon, title, value, change, gradient, description, sparkle }: any) => (
    <div className="group relative overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          {sparkle && (
            <div className="animate-pulse">
              <Sparkles className="h-5 w-5 text-yellow-500" />
            </div>
          )}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{title}</h3>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
          {change && (
            <div className="flex items-center mt-3">
              <div className="flex items-center bg-green-50 px-2 py-1 rounded-full">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-xs font-semibold text-green-600">+{change}%</span>
              </div>
              <span className="text-xs text-gray-500 ml-2">vs last month</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const ExamCard = ({ exam }: any) => (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {exam.title}
              </h3>
              {exam.trending && (
                <div className="ml-2 flex items-center">
                  <TrendingUp className="h-4 w-4 text-red-500" />
                  <span className="text-xs text-red-500 ml-1 font-medium">Trending</span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
              <span className="flex items-center">
                <FileText className="h-4 w-4 mr-1" />
                {exam.questions} questions
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {exam.date}
              </span>
              <span className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {exam.submissions} submissions
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${getStatusStyle(exam.status)}`}>
                {exam.status}
              </span>
              <span className={`px-2 py-1 border rounded-lg text-xs font-medium ${getDifficultyColor(exam.difficulty)}`}>
                {exam.difficulty}
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                {exam.category}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
              <Eye className="h-4 w-4 text-blue-500" />
            </button>
            <button className="p-2 hover:bg-green-50 rounded-lg transition-colors">
              <Edit className="h-4 w-4 text-green-500" />
            </button>
            <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
              <Trash2 className="h-4 w-4 text-red-500" />
            </button>
          </div>
        </div>

        {/* Progress bar for submissions */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${Math.min((exam.submissions / 300) * 100, 100)}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{exam.submissions} submissions</span>
          <span>Target: 300</span>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-slate-200">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-8">
                <div>
                  <h1 className="text-3xl md:text-5xl leading-tight font-semibold text-gray-900 block">
                    Question Bank Dashboard
                  </h1>
                  <p className="text-slate-800 text-lg">Manage your questions and exams with style</p>
                  <p className="text-slate-600 text-lg">All systems operational</p>
                </div>
                <div className="flex space-x-3">
                  <Link href="/add-question" className="cursor-pointer bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-white rounded-xl px-6 py-3 text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Question
                  </Link>
                  <Link href="/exam" className="cursor-pointer bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-white rounded-xl px-6 py-3 text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Start Exam
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                icon={BookOpen}
                title="Total Questions"
                value={stats.totalQuestions.toLocaleString()}
                change={stats.weeklyGrowth}
                gradient="from-blue-500 to-cyan-500"
                description="Across all categories"
                sparkle
              />
              <StatCard
                icon={FileText}
                title="Active Exams"
                value={stats.totalExams}
                change={8}
                gradient="from-green-500 to-emerald-500"
                description="Currently running"
              />
              <StatCard
                icon={Users}
                title="Engaged Users"
                value={stats.activeUsers}
                change={15}
                gradient="from-purple-500 to-pink-500"
                description="This month"
                sparkle
              />
              <StatCard
                icon={Target}
                title="Success Rate"
                value={`${stats.completionRate}%`}
                change={3}
                gradient="from-orange-500 to-red-500"
                description="Average completion"
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Enhanced Exams Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Recent Exams</h2>
                        <p className="text-gray-600">Track your exam performance</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    {recentExams.map((exam) => (
                      <ExamCard key={exam.id} exam={exam} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Sidebar */}
              <div className="space-y-6">
                 {/* Performance Metrics */}
                <div className="bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500 rounded-2xl shadow-xl text-white overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Trophy className="h-6 w-6 mr-2" />
                      <h3 className="text-xl font-bold">Performance</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Engagement Rate</span>
                          <span className="font-bold">{stats.engagement}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div
                            className="bg-white h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${stats.engagement}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Weekly Growth</span>
                          <span className="font-bold">+{stats.weeklyGrowth}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div
                            className="bg-white h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${stats.weeklyGrowth * 4}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Categories with Enhanced Design */}
                <div className="bg-white rounded-2xl shadow-xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                    <h3 className="text-xl font-bold flex items-center">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Categories
                    </h3>
                    <p className="text-indigo-100 text-sm mt-1">Question distribution</p>
                  </div>
                  <div className="p-6 space-y-4">
                    {questionCategories.map((category, index) => (
                      <div key={index} className="group">
                        <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="flex items-center">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                              {category.icon}
                            </div>
                            <div className="ml-4">
                              <span className="font-semibold text-gray-900">{category.name}</span>
                              <div className="text-sm text-gray-500">Active questions</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">{category.count}</div>
                            <div className="text-xs text-gray-500">questions</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page