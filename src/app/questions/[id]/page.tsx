"use client"
import React, { useEffect, useState } from 'react';
import { Heart, MessageCircle, Share2, Send, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const page = () => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: '',
      content: 'Great explanation! This really helped me understand the concept better.',
      timestamp: '2 hours ago',
      likes: 5,
      replies: []
    },
    {
      id: 2,
      author: 'Mike Chen',
      avatar: '',
      content: 'Could you provide more examples of this in practice?',
      timestamp: '1 hour ago',
      likes: 2,
      replies: [
        {
          id: 3,
          author: 'Alex Turner',
          avatar: '',
          content: 'I can share some examples from my recent project...',
          timestamp: '30 minutes ago',
          likes: 1
        }
      ]
    }
  ]);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: 'You',
        avatar: '',
        content: newComment,
        timestamp: 'Just now',
        likes: 0,
        replies: []
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleCommentLike = (commentId: number) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  // image set

 const [loading, setLoading] = useState(false);

 const title =
    "How to properly implement state management in a large-scale React application?";
  const subtitle = "Start with React's built-in solutions";
  const paragraph = `I'm working on a complex React application with multiple components that need to share state. 
I've been using useState and useContext, but as the application grows, I'm finding it harder to manage. 
What are the best practices for state management in large React applications? Should I consider Redux, Zustand, or stick with React's built-in solutions?`.repeat(
    3
  );

  const baseWidth = 900; // final image width
  const padding = 24;

  // helper: split/word-wrap (respects '\n', splits very long words)
  function getLinesForText(
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
  ) {
    const paragraphs = text.split("\n");
    const lines: string[] = [];

    for (let p = 0; p < paragraphs.length; p++) {
      const paragraph = paragraphs[p].trim();
      if (paragraph === "") {
        lines.push("");
        continue;
      }

      const words = paragraph.split(" ");
      let line = "";

      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const testLine = line ? line + " " + word : word;
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth) {
          if (line) {
            lines.push(line);
            line = word;
          } else {
            // break long word
            let sub = "";
            for (const ch of word) {
              const testSub = sub + ch;
              if (ctx.measureText(testSub).width > maxWidth) {
                if (sub) lines.push(sub);
                sub = ch;
              } else {
                sub = testSub;
              }
            }
            if (sub) line = sub;
          }
        } else {
          line = testLine;
        }
      }
      if (line) lines.push(line);
      if (p < paragraphs.length - 1) lines.push("");
    }

    return lines;
  }

  useEffect(() => {
    const generateImage = () => {
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d")!;
      tempCtx.textBaseline = "top";

      // font definitions
      const h1Size = 24;
      const h1Font = `bold ${h1Size}px sans-serif`;
      const h1Color = "#111827";
      const h1LineHeight = Math.ceil(h1Size * 1.25);

      const h4Size = 18;
      const h4Font = `600 ${h4Size}px sans-serif`;
      const h4Color = "#111827";
      const h4LineHeight = Math.ceil(h4Size * 1.3);

      const pSize = 14;
      const pFont = `600 ${pSize}px sans-serif`;
      const pColor = "#111827";
      const pLineHeight = Math.ceil(pSize * 1.5);

      const maxTextWidth = baseWidth - padding * 2;

      // Measure H1
      tempCtx.font = h1Font;
      const titleLines = getLinesForText(tempCtx, title, maxTextWidth);
      const titleHeight = titleLines.length * h1LineHeight;

      // Measure H4
      tempCtx.font = h4Font;
      const subtitleLines = getLinesForText(tempCtx, subtitle, maxTextWidth);
      const subtitleHeight = subtitleLines.length * h4LineHeight;

      // Measure Paragraph
      tempCtx.font = pFont;
      const paragraphLines = getLinesForText(tempCtx, paragraph, maxTextWidth);
      const paragraphHeight = paragraphLines.length * pLineHeight;

      const gapAfterTitle = 12;
      const gapAfterSubtitle = 10;
      const totalContentHeight =
        titleHeight +
        gapAfterTitle +
        subtitleHeight +
        gapAfterSubtitle +
        paragraphHeight;

      let canvasWidth = baseWidth;
      let canvasHeight = padding * 2 + totalContentHeight;

      // Handle max dimension
      const MAX_DIM = 32767;
      if (canvasHeight > MAX_DIM) {
        canvasHeight = MAX_DIM - 100;
      }

      // HiDPI
      const dpr = window.devicePixelRatio || 1;
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(canvasWidth * dpr);
      canvas.height = Math.round(canvasHeight * dpr);
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;

      const ctx = canvas.getContext("2d")!;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.textBaseline = "top";

      // Background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Draw H1
      ctx.fillStyle = h1Color;
      ctx.font = h1Font;
      let cursorY = padding;
      titleLines.forEach((line) => {
        ctx.fillText(line, padding, cursorY);
        cursorY += h1LineHeight;
      });

      cursorY += gapAfterTitle;

      // Draw H4
      ctx.fillStyle = h4Color;
      ctx.font = h4Font;
      subtitleLines.forEach((line) => {
        ctx.fillText(line, padding, cursorY);
        cursorY += h4LineHeight;
      });

      cursorY += gapAfterSubtitle;

      // Draw paragraph
      ctx.fillStyle = pColor;
      ctx.font = pFont;
      paragraphLines.forEach((line) => {
        ctx.fillText(line, padding, cursorY);
        cursorY += pLineHeight;
      });

      setImageSrc(canvas.toDataURL("image/png"));
    };

    generateImage();
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto p-6 space-y-8">
          {/* Question Section */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 border-2 border-blue-200">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900">John Doe</h3>
                    <Badge variant="secondary" className="text-xs">Verified</Badge>
                    <span className="text-sm text-gray-500">• 3 hours ago</span>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">React</Badge>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Next.js</Badge>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">JavaScript</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                 {imageSrc ? (
        <img
          src={imageSrc}
          alt="Generated text"
          className="border rounded shadow max-w-full"
        />
      ) : (
        <p>Rendering image...</p>
      )}
              </div>

              {/* Question Actions */}
              <div className="flex items-center gap-4 pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLike}
                  className={`gap-2 hover:bg-red-50 ${liked ? 'text-red-600 bg-red-50' : 'text-gray-600'}`}
                >
                  <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                  <span>{liked ? '24' : '23'}</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 text-gray-600 hover:bg-blue-50">
                  <MessageCircle className="w-4 h-4" />
                  <span>{comments.length}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="gap-2 text-gray-600 hover:bg-green-50"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>


          {/* Comments Section */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <h2 className="text-xl font-semibold text-gray-900">Comments ({comments.length})</h2>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add Comment */}
              <div className="space-y-3">

                <textarea
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[80px]   w-full   resize-none    rounded-xl   border      border-gray-300   bg-white   px-4   py-3   text-gray-700   shadow-sm   transition-all   duration-300 " />

                <div className="flex justify-end">
                  <Button
                    onClick={handleAddComment}
                    className="gap-2 cursor-pointer bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-white"
                    disabled={!newComment.trim()}
                  >
                    <Send className="w-4 h-4" />
                    Post Comment
                  </Button>
                </div>
              </div>

              {/* <Separator /> */}

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-9 h-9">
                        <AvatarImage src={comment.avatar} />
                        <AvatarFallback className="bg-gray-100 text-gray-600 text-sm">
                          {comment.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 text-sm">{comment.author}</span>
                          <span className="text-xs text-gray-500">{comment.timestamp}</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{comment.content}</p>
                        <div className="flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCommentLike(comment.id)}
                            className="gap-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 h-7 px-2"
                          >
                            <ThumbsUp className="w-3 h-3" />
                            <span className="text-xs">{comment.likes}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 h-7 px-2 text-xs">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Replies */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="ml-12 space-y-3">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex items-start gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={reply.avatar} />
                              <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                                {reply.author.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-gray-900 text-sm">{reply.author}</span>
                                <span className="text-xs text-gray-500">{reply.timestamp}</span>
                              </div>
                              <p className="text-gray-700 text-sm leading-relaxed">{reply.content}</p>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="gap-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 h-7 px-2"
                              >
                                <ThumbsUp className="w-3 h-3" />
                                <span className="text-xs">{reply.likes}</span>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default page