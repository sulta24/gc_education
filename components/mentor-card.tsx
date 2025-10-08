import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import type { Mentor } from '@/lib/supabase'

interface MentorCardProps {
  mentor: Mentor
}

export function MentorCard({ mentor }: MentorCardProps) {
  return (
    <Link href={`/mentor/${mentor.id}`} className="group block">
      <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden">
        {/* Full-size Avatar */}
        <div className="aspect-[3/4] relative">
          {mentor.avatar_url ? (
            <Image
              src={mentor.avatar_url}
              alt={mentor.full_name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-500">
                {mentor.full_name
                  .split(' ')
                  .map(word => word[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)}
              </span>
            </div>
          )}
        </div>
        
        {/* Content Section */}
        <CardContent className="p-4">
          {/* Name */}
          <h3 className="font-bold text-lg mb-2 text-black group-hover:text-purple-600 transition-colors duration-200">
            {mentor.full_name}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {mentor.short_description}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}