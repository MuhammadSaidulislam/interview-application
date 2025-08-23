import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge, MessageCircle, Share2, ThumbsDown, ThumbsUp } from 'lucide-react'
import { Button } from './ui/button'

const QuestionCard = () => {
  return (
    <div>
         <Card className="w-[350px] rounded-2xl shadow-md">
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="flex items-center gap-1 font-semibold text-gray-800">
                Alex <span className="text-yellow-500">👑</span>
              </h3>
              <p className="text-sm text-gray-500">for Nike</p>
            </div>
          </div>
          <span className="text-xs text-orange-500 font-medium bg-orange-100 px-2 py-1 rounded-full">
            Trending
          </span>
        </div>

        {/* Title */}
        <p className="mt-3 text-gray-800 font-medium">
          Add recycled materials option for custom shoes
        </p>

        {/* Tags */}
        <div className="flex gap-2 mt-3 flex-wrap">
          <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100">#eco-friendly</Badge>
          <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-100">#customization</Badge>
          <Badge className="bg-sky-100 text-sky-600 hover:bg-sky-100">#materials</Badge>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-5 mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <ThumbsUp size={16} /> 1243
          </div>
          <div className="flex items-center gap-1">
            <ThumbsDown size={16} /> 186
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={16} /> 89
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <Share2 size={16} className="cursor-pointer" /> Share
          </div>
          <span className="text-orange-500 font-medium">Products</span>
          <span className="text-gray-400">Prime</span>
        </div>

        {/* Button */}
        <Button className="w-full mt-5 rounded-full bg-green-100 text-green-700 hover:bg-green-200">
          View Proposal
        </Button>
      </CardContent>
    </Card>
    </div>
  )
}

export default QuestionCard