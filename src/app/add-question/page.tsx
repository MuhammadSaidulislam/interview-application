
"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plus, X, Save, AlertCircle, CheckCircle, Code, FileText, Users, Database, Target, List, Type, Lightbulb } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


type FormDataType = {
  title: string;
  description: string;
  category: string;
  difficulty: string;
  answer: string;
  codeExample: string;
  tags: string[];
  hints: string[];
  followUpQuestions: string[];
  companies: string[];
  index?: number;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: string;
};


const page = () => {

  // const [formData, setFormData] = useState<FormDataType>({
  //   title: '',
  //   description: '',
  //   category: '',
  //   difficulty: '',
  //   tags: [],
  //   answer: '',
  //   codeExample: '',
  //   hints: [''],
  //   followUpQuestions: [''],
  //   companies: []
  // });

  const [formData, setFormData] = useState<FormDataType>({
    title: '',
    description: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    category: '',
    tags: [],
    hints: [''],
    followUpQuestions: [''],
    companies: [],
    codeExample: '',
    difficulty: '',
    answer: '',
    correctOption: ''
  });

  const [currentTag, setCurrentTag] = useState('');
  const [currentCompany, setCurrentCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");
  const [content, setContent] = useState("");

  const categories = [
    { value: 'frontend', label: 'Frontend Development', icon: Code },
    { value: 'backend', label: 'Backend Development', icon: Database },
    { value: 'fullstack', label: 'Full Stack Development', icon: Code },
    { value: 'algorithms', label: 'Data Structures & Algorithms', icon: Code },
    { value: 'system-design', label: 'System Design', icon: Database },
    { value: 'database', label: 'Database', icon: Database },
    { value: 'devops', label: 'DevOps & Infrastructure', icon: Database },
    { value: 'mobile', label: 'Mobile Development', icon: Code },
    { value: 'ml', label: 'Machine Learning', icon: Code },
    { value: 'behavioral', label: 'Behavioral Questions', icon: Users },
    { value: 'other', label: 'Other', icon: FileText }
  ];

  const difficulties = [
    { value: 'easy', label: 'Easy', color: 'bg-green-100 text-green-800' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'hard', label: 'Hard', color: 'bg-red-100 text-red-800' }
  ];

  const popularTags = [
    'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'TypeScript',
    'SQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'REST API'
  ];

  const topCompanies = [
    'Google', 'Meta', 'Amazon', 'Microsoft', 'Apple', 'Netflix',
    'Tesla', 'Uber', 'Airbnb', 'Spotify', 'Stripe', 'Shopify'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: prev[field].map((item: string, i: number) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  // const removeArrayItem = <K extends keyof FormDataType>(field: K, index: number) => {
  //   const value = formData[field];
  //   if (Array.isArray(value) && value.length > 1) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       [field]: value.filter((_, i) => i !== index),
  //     }));
  //   }
  // };


  const addTag = (tag = currentTag) => {
    if (tag.trim() && !formData.tags.includes(tag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const addCompany = (company = currentCompany) => {
    if (company.trim() && !formData.companies.includes(company.trim())) {
      setFormData(prev => ({
        ...prev,
        companies: [...prev.companies, company.trim()]
      }));
      setCurrentCompany('');
    }
  };

  const removeCompany = (companyToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      companies: prev.companies.filter(company => company !== companyToRemove)
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Submitting question:', formData);

      setSubmitStatus('success');
      // Reset form on success
      // setFormData({
      //   title: '',
      //   description: '',
      //   category: '',
      //   difficulty: '',
      //   tags: [],
      //   answer: '',
      //   codeExample: '',
      //   hints: [''],
      //   followUpQuestions: [''],
      //   companies: []
      // });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.title && formData.category && formData.difficulty && formData.answer;


  const [questionType, setQuestionType] = useState('mcq');

  const questionTypes = [
    {
      id: 'mcq',
      title: 'Multiple Choice',
      description: 'Questions with 4 options (A, B, C, D)',
      icon: List,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'descriptive',
      title: 'Descriptive',
      description: 'Open-ended questions requiring detailed answers',
      icon: Type,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];


  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent block">
              Add Interview Question
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contribute to our community by adding a comprehensive interview question with detailed explanations and examples.
            </p>
          </div>

          {/* Status Alerts */}
          {submitStatus === 'success' && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-700">
                🎉 Question added successfully! Thank you for contributing to our community.
              </AlertDescription>
            </Alert>
          )}

          {submitStatus === 'error' && (
            <Alert className="mb-6 border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-700">
                ❌ There was an error adding the question. Please try again.
              </AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Question Type Selection */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Select Question Type
                </h2>
                <div className="flex flex-col gap-4">
                  {questionTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = questionType === type.id;
                    return (
                      <label key={type.id} onClick={() => setQuestionType(type.id)} className="cursor-pointer group block" >
                        <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${isSelected ? "border-blue-500 bg-blue-50 shadow-lg scale-105" : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-md"}`} >
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${type.gradient} shadow-md`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg text-gray-900 mb-1">{type.title}</h3>
                              <p className="text-gray-600 text-sm">{type.description}</p>
                            </div>
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="w-full">
                <div className="lg:col-span-2 space-y-6">
                  {/* Basic Information */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">Question Details</h3>
                          <p className="text-blue-100 text-sm">Provide the core information about the interview question</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Question Title *
                        </label>
                        <input
                          type="text"
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          placeholder="e.g., Explain the difference between let, const, and var in JavaScript"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Question Description *
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          placeholder="Write your question here..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white h-32 resize-none"
                        />
                      </div>

                      {/* Multiple Choice Options */}
                      {questionType === 'mcq' && (
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                          <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                            <List className="w-4 h-4 text-blue-600" />
                            Answer Options
                          </label>
                          <div className="space-y-3">
                            {['A', 'B', 'C', 'D'].map((option) => (
                              <div key={option} className="flex items-center gap-3 group">
                                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg shadow-sm">
                                  {option}
                                </div>
                                <input
                                  type="text"
                                  value={formData[`option${option}` as keyof FormDataType]}
                                  onChange={(e) => handleInputChange(`option${option}`, e.target.value)}
                                  placeholder={`Enter option ${option}`}
                                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white group-hover:border-blue-300"
                                />
                              </div>
                            ))}
                          </div>

                          {/* Correct Answer Selection */}
                          <div className="mt-4 pt-4 border-t border-blue-200">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Correct Answer *
                            </label>
                            <div className="flex gap-2">
                              {['A', 'B', 'C', 'D'].map((option) => (
                                <label key={option} className="cursor-pointer">
                                  <input
                                    type="radio"
                                    name="correctOption"
                                    value={option}
                                    checked={formData.correctOption === option}
                                    onChange={(e) => handleInputChange('correctOption', e.target.value)}
                                    className="sr-only"
                                  />
                                  <div className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${formData.correctOption === option
                                    ? 'bg-green-500 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}>
                                    {option}
                                  </div>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                          <select
                            value={formData.category}
                            onChange={(e) => handleInputChange('category', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          >
                            <option value="">Select category</option>
                            {categories.map(category => {
                              const Icon = category.icon;
                              return (
                                <option key={category.value} value={category.value}>
                                  {category.label}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty Level *</label>
                          <select
                            value={formData.difficulty}
                            onChange={(e) => handleInputChange('difficulty', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          >
                            <option value="">Select difficulty</option>
                            {difficulties.map(difficulty => (
                              <option key={difficulty.value} value={difficulty.value}>
                                {difficulty.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Answer Section */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {questionType === 'mcq' ? 'Answer Explanation' : 'Sample Answer'}
                          </h3>
                          <p className="text-green-100 text-sm">
                            {questionType === 'mcq'
                              ? 'Explain why the correct answer is right'
                              : 'Provide a comprehensive sample answer'
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {questionType === 'mcq' ? 'Explanation *' : 'Sample Answer *'}
                        </label>
                        <textarea
                          value={formData.answer}
                          onChange={(e) => handleInputChange('answer', e.target.value)}
                          placeholder={questionType === 'mcq'
                            ? 'Explain why this is the correct answer and provide additional context...'
                            : 'Provide a detailed sample answer with explanations, key points, and best practices...'
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white h-48 resize-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Tags */}
              <Card className="shadow-sm border-0 ring-1 ring-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Tags</CardTitle>
                  <CardDescription>Add relevant tags to help categorize this question.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      placeholder="Add tag..."
                      className="flex-1 border-gray-300"
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" onClick={() => addTag()} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Popular Tags */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Popular tags:</p>
                    <div className="flex flex-wrap gap-1">
                      {popularTags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => addTag(tag)}
                          className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selected Tags */}
                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t">
                      {formData.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {tag}
                          <X
                            className="h-3 w-3 cursor-pointer hover:text-red-500"
                            onClick={() => removeTag(tag)}
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Companies */}
              <Card className="shadow-sm border-0 ring-1 ring-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Companies</CardTitle>
                  <CardDescription>Companies that have asked this question.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={currentCompany}
                      onChange={(e) => setCurrentCompany(e.target.value)}
                      placeholder="Add company..."
                      className="flex-1 border-gray-300"
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addCompany())}
                    />
                    <Button type="button" onClick={() => addCompany()} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Top Companies */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Top companies:</p>
                    <div className="flex flex-wrap gap-1">
                      {topCompanies.map(company => (
                        <button
                          key={company}
                          onClick={() => addCompany(company)}
                          className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded hover:bg-purple-100 transition-colors"
                        >
                          {company}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selected Companies */}
                  {formData.companies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t">
                      {formData.companies.map((company, index) => (
                        <Badge key={index} className="flex items-center gap-1 bg-purple-100 text-purple-800">
                          {company}
                          <X
                            className="h-3 w-3 cursor-pointer hover:text-red-500"
                            onClick={() => removeCompany(company)}
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Submit Section */}
              <Card className="border-0  py-0">
                <CardContent className="px-0">
                  <div className="rounded-2xl  overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-white" />
                        <h3 className="font-semibold text-white">Quick Preview</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="space-y-3 text-sm">
                        <ul className="space-y-1 text-xs">
                          <li className="flex items-center gap-2">
                            <span className="font-medium text-gray-700">Type:</span>
                            <span className="ml-2 text-gray-600">
                              {questionTypes.find(t => t.id === questionType)?.title}
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${formData.title ? 'bg-green-500' : 'bg-gray-300'}`} />
                            Question title
                          </li>
                          <li className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${formData.category ? 'bg-green-500' : 'bg-gray-300'}`} />
                            Category selected
                          </li>
                          <li className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${formData.difficulty ? 'bg-green-500' : 'bg-gray-300'}`} />
                            Difficulty level
                          </li>
                          <li className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${formData.answer ? 'bg-green-500' : 'bg-gray-300'}`} />
                            Detailed answer
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 mb-5">
                    <div className="space-y-2 mt-5">
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting || !isFormValid}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            Adding Question...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                            Add Question
                          </>
                        )}
                      </Button>
                      <Button type="button" variant="outline" className="w-full" size="lg">
                        Save as Draft
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page