'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { getMentorById } from '@/lib/api/mentors'
import type { Mentor } from '@/lib/supabase'
import { ArrowLeft, MessageCircle, User, Calendar, ExternalLink } from 'lucide-react'
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"

export default function MentorProfilePage() {
  const params = useParams()
  const router = useRouter()
  const [mentor, setMentor] = useState<Mentor | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        setLoading(true)
        setError(null)
        
        if (!params.id || typeof params.id !== 'string') {
          throw new Error('ID ментора не найден')
        }

        const mentorData = await getMentorById(params.id)
        
        if (!mentorData) {
          throw new Error('Ментор не найден')
        }
        
        setMentor(mentorData)
      } catch (err) {
        console.error('Ошибка загрузки ментора:', err)
        setError(err instanceof Error ? err.message : 'Произошла неизвестная ошибка')
      } finally {
        setLoading(false)
      }
    }

    fetchMentor()
  }, [params.id])

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка профиля ментора...</p>
        </div>
      </div>
    )
  }

  if (error || !mentor) {
    return (
      <div className="min-h-screen bg-white">
        <LpNavbar1 />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Ошибка</h1>
            <p className="text-gray-600 mb-8">{error || 'Ментор не найден'}</p>
            <div className="space-y-4">
              <Button
                onClick={() => router.push('/mentors')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Вернуться к списку менторов
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <LpNavbar1 />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Button
          variant="ghost"
          onClick={() => router.push('/mentors')}
          className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад к менторам
        </Button>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          
          {/* Left Column - Mentor Info */}
          <div className="space-y-6">
            {/* Avatar and Name */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Avatar className="w-40 h-40 border-4 border-gray-200">
                  <AvatarImage src={mentor.avatar_url} alt={mentor.full_name} className="object-cover" />
                  <AvatarFallback className="text-3xl font-bold bg-purple-100 text-purple-600">
                    {getInitials(mentor.full_name)}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-bold text-black mb-2">
                  {mentor.full_name}
                </h1>
                <p className="text-gray-600 text-lg mb-4">
                  {mentor.short_description}
                </p>
              </div>
            </div>

            {/* About Me Section */}
            {mentor.about_me && (
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <User className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <h3 className="font-semibold text-black">О себе</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {mentor.about_me}
                </p>
              </div>
            )}

            {/* Help Section */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <MessageCircle className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black mb-2">Чем могу помочь</h3>
                  <p className="text-sm text-gray-600 italic mb-4">
                    *менторская сессия длится 30 минут
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-gray-700">
                {mentor.can_help_with && mentor.can_help_with.length > 0 ? (
                  mentor.can_help_with.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{item}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 italic">
                    Информация о специализации ментора будет добавлена позже
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Calendly Widget */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {mentor.schedule_link ? (
              <div>
                {/* Calendly inline widget begin */}
                <div 
                  className="calendly-inline-widget" 
                  data-url={
                    mentor.schedule_link.includes('?') 
                      ? `${mentor.schedule_link}&hide_event_type_details=1&hide_gdpr_banner=1`
                      : `${mentor.schedule_link}?hide_event_type_details=1&hide_gdpr_banner=1`
                  }
                  style={{ minWidth: '320px', height: '700px' }}
                />
                <script 
                  type="text/javascript" 
                  src="https://assets.calendly.com/assets/external/widget.js" 
                  async
                />
                {/* Calendly inline widget end */}
              </div>
            ) : (
              <div className="p-8 min-h-[400px] flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Бронирование недоступно</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Ментор не настроил календарь для записи
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer1 />
    </div>
  )
}