'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MentorCard } from '@/components/mentor-card'
import { getMentors } from '@/lib/api/mentors'
import type { Mentor } from '@/lib/supabase'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"

const ITEMS_PER_PAGE = 12

export default function MentorsPage() {
  const [mentors, setMentors] = useState<Mentor[]>([])
  const [filteredMentors, setFilteredMentors] = useState<Mentor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    loadMentors()
  }, [currentPage])

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = mentors.filter(mentor =>
        mentor.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.short_description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.can_help_with?.some(skill => 
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
      setFilteredMentors(filtered)
    } else {
      setFilteredMentors(mentors)
    }
  }, [searchQuery, mentors])

  const loadMentors = async () => {
    try {
      setLoading(true)
      const response = await getMentors({ page: currentPage, limit: ITEMS_PER_PAGE })
      setMentors(response.data)
      setTotal(response.total)
      setTotalPages(response.totalPages)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка')
    } finally {
      setLoading(false)
    }
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    if (value.trim()) {
      setCurrentPage(1)
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const displayedMentors = searchQuery.trim() ? filteredMentors : mentors
  const showPagination = !searchQuery.trim() && totalPages > 1

  return (
    <div className="min-h-screen bg-white">
      <LpNavbar1 />
      
      {/* Hero Section - Compact Black Block */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-6">
        <div className="bg-black text-white rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-left">
                Работа с нашими менторами даст вам большое преимущество в поступлении в ТОПовые вузы по всему миру
              </h1>
            </div>
            
            {/* Benefits - Horizontal Layout */}
            <div className="flex flex-col gap-3 md:min-w-[300px]">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-black font-bold text-sm">✓</span>
                </div>
                <span className="text-sm font-medium">Сэкономим ваше время и нервы</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-black font-bold text-sm">✓</span>
                </div>
                <span className="text-sm font-medium">Индивидуальный подход</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-black font-bold text-sm">✓</span>
                </div>
                <span className="text-sm font-medium">Раскрываем потенциал на 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Поиск по имени, описанию или навыкам..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-12 pr-4 py-3 text-base border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:ring-0"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-400 rounded-full mb-4">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-600 text-lg">Загружаем лучших менторов...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-red-600 mb-6 font-medium">{error}</p>
              <Button 
                onClick={loadMentors} 
                className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-3 rounded-lg"
              >
                Попробовать снова
              </Button>
            </div>
          </div>
        ) : displayedMentors.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600 font-medium">
                {searchQuery.trim() ? 'Менторы не найдены' : 'Нет доступных менторов'}
              </p>
              {searchQuery.trim() && (
                <p className="text-gray-500 text-sm mt-2">
                  Попробуйте изменить поисковый запрос
                </p>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-black mb-2">
                  {searchQuery.trim() ? 'Результаты поиска' : 'Наши менторами'}
                </h2>
                <p className="text-gray-600">
                  {searchQuery.trim() 
                    ? `Найдено ${displayedMentors.length} ${displayedMentors.length === 1 ? 'ментор' : displayedMentors.length < 5 ? 'ментора' : 'менторов'}`
                    : `${total} ${total === 1 ? 'ментор' : total < 5 ? 'ментора' : 'менторов'} готовы помочь вам поступить в ТОПовые вузы`
                  }
                </p>
              </div>
              
              {searchQuery.trim() && (
                <Button 
                  variant="outline" 
                  onClick={() => setSearchQuery('')}
                  className="border-2 border-gray-300 hover:bg-gray-50 rounded-lg px-6"
                >
                  Показать всех
                </Button>
              )}
            </div>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {displayedMentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>

            {/* Pagination */}
            {showPagination && (
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 border-t-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="rounded-lg border-2 border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Назад
                  </Button>
                  
                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                      let page;
                      if (totalPages <= 7) {
                        page = i + 1;
                      } else if (currentPage <= 4) {
                        page = i + 1;
                      } else if (currentPage >= totalPages - 3) {
                        page = totalPages - 6 + i;
                      } else {
                        page = currentPage - 3 + i;
                      }
                      
                      return (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="lg"
                          onClick={() => handlePageChange(page)}
                          className={`w-12 h-12 rounded-lg border-2 ${
                            currentPage === page 
                              ? 'bg-purple-400 hover:bg-purple-500 text-white border-purple-400' 
                              : 'border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </Button>
                      );
                    })}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="rounded-lg border-2 border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Вперед
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </div>
                
                <div className="text-sm text-gray-500">
                  Страница {currentPage} из {totalPages}
                </div>
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Footer */}
      <Footer1 />
    </div>
  )
}