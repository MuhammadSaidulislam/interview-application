import React from 'react'
import { Card, CardContent } from './ui/card'
import { MessageCircle, Share2, ThumbsUp } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import Link from 'next/link'

const QuestionCard = () => {
  return (
    <div>
      <Card className="w-[350px] rounded-2xl shadow-md">
        <CardContent className="p-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img   src="https://media.licdn.com/dms/image/v2/D5603AQHmP_FoOof1HQ/profile-displayphoto-shrink_100_100/B56ZcsEHbeGQAY-/0/1748790968425?e=1758758400&v=beta&t=dIy5taupoGFgsAGUica25ZfYPquDVvLSUGgnx_Idjbo"
                alt="User"  className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="flex items-center gap-1 font-bold text-gray-800">Alex</h3>
              </div>
            </div>
            <span className="text-xs text-orange-500 font-medium bg-orange-100 px-2 py-1 rounded-full">
              Trending
            </span>
          </div>

          {/* Title */}
          <p className="mt-2 text-gray-800 font-medium">
            Add recycled materials option for custom shoes
          </p>

          {/* Tags */}
          <div className="flex gap-2 mt-3 flex-wrap">
            <Badge className="bg-purple-100 text-pink-600 hover:bg-purple-100">#customization</Badge>
            <Badge className="bg-sky-100 text-sky-600 hover:bg-sky-100">#materials</Badge>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between gap-5 mt-4 text-sm text-gray-600">
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500 font-semibold transition-colors">
              <ThumbsUp size={16} className="text-blue-600" /> 1243
            </div>
            <div className="flex items-center gap-1 cursor-pointer font-semibold">
              <MessageCircle size={16} className="text-green-600" /> 89
            </div>
            <div className="flex items-center gap-1 cursor-pointer font-semibold">
              <Share2 size={16} className="text-purple-600" /> Share
            </div>
          </div>


          {/* Button */}
          <Link href="/questions/1" className="w-full flex justify-center py-1 font-semibold mt-5 rounded-full cursor-pointer bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-white">
            View Answer
          </Link>

        </CardContent>
      </Card>
    </div>
  )
}

export default QuestionCard