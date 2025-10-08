'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, EyeOff, Lock, Shield, Plus, Edit, Trash2, Search, X, Calendar, User, Settings, Home, LogOut } from 'lucide-react'
import { getAllMentors, createMentor, updateMentor, deleteMentor, type CreateMentorData, type UpdateMentorData } from '@/lib/api/mentors'
import { Logo } from '@/components/pro-blocks/logo'
import type { Mentor } from '@/lib/supabase'
import Link from 'next/link'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Состояния для управления менторами
  const [mentors, setMentors] = useState<Mentor[]>([])
  const [filteredMentors, setFilteredMentors] = useState<Mentor[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [mentorsLoading, setMentorsLoading] = useState(false)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingMentor, setEditingMentor] = useState<Mentor | null>(null)

  // Форма для создания/редактирования ментора
  const [formData, setFormData] = useState<CreateMentorData>({
    full_name: '',
    avatar_url: '',
    short_description: '',
    can_help_with: [],
    about_me: '',
    schedule_link: ''
  })
  const [skillsInput, setSkillsInput] = useState('')

  // Проверяем аутентификацию при загрузке
  useEffect(() => {
    const authStatus = localStorage.getItem('admin_authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  // Загружаем менторов при аутентификации
  useEffect(() => {
    if (isAuthenticated) {
      loadMentors()
    }
  }, [isAuthenticated])

  // Фильтрация менторов
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Имитируем небольшую задержку для UX
    await new Promise(resolve => setTimeout(resolve, 500))

    const adminSecret = process.env.NEXT_PUBLIC_ADMIN_SECRET || process.env.VITE_ADMIN_SECRET

    if (password === adminSecret) {
      setIsAuthenticated(true)
      localStorage.setItem('admin_authenticated', 'true')
      setPassword('')
    } else {
      setError('Неверный пароль')
      setPassword('')
    }
    
    setLoading(false)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('admin_authenticated')
    setPassword('')
    setError('')
    setMentors([])
    setFilteredMentors([])
    setSearchQuery('')
  }

  const loadMentors = async () => {
    try {
      setMentorsLoading(true)
      const mentorsData = await getAllMentors()
      setMentors(mentorsData)
    } catch (err) {
      console.error('Ошибка загрузки менторов:', err)
      setError('Ошибка загрузки менторов')
    } finally {
      setMentorsLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      full_name: '',
      avatar_url: '',
      short_description: '',
      can_help_with: [],
      about_me: '',
      schedule_link: ''
    })
    setSkillsInput('')
    setEditingMentor(null)
  }

  const handleCreateMentor = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      // Improved skills processing to handle empty inputs
      const skills = skillsInput.trim() === '' 
        ? [] 
        : skillsInput
            .split(',')
            .map(skill => skill.trim())
            .filter(skill => skill.length > 0)
      
      const mentorData: CreateMentorData = { 
        full_name: formData.full_name,
        avatar_url: formData.avatar_url,
        short_description: formData.short_description,
        about_me: formData.about_me,
        schedule_link: formData.schedule_link,
        can_help_with: skills 
      }
      
      await createMentor(mentorData)
      await loadMentors()
      setIsCreateDialogOpen(false)
      resetForm()
    } catch (err) {
      console.error('Ошибка создания ментора:', err)
      setError('Ошибка создания ментора')
    } finally {
      setLoading(false)
    }
  }

  const handleEditMentor = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingMentor) return

    try {
      setLoading(true)
      // Improved skills processing to handle empty inputs
      const skills = skillsInput.trim() === '' 
        ? [] 
        : skillsInput
            .split(',')
            .map(skill => skill.trim())
            .filter(skill => skill.length > 0)
      
      const mentorData: UpdateMentorData = { 
        id: editingMentor.id,
        full_name: formData.full_name,
        avatar_url: formData.avatar_url,
        short_description: formData.short_description,
        about_me: formData.about_me,
        schedule_link: formData.schedule_link,
        can_help_with: skills 
      }
      
      await updateMentor(mentorData)
      await loadMentors()
      setIsEditDialogOpen(false)
      resetForm()
    } catch (err) {
      console.error('Ошибка обновления ментора:', err)
      setError('Ошибка обновления ментора')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteMentor = async (id: string) => {
    try {
      setLoading(true)
      await deleteMentor(id)
      await loadMentors()
    } catch (err) {
      console.error('Ошибка удаления ментора:', err)
      setError('Ошибка удаления ментора')
    } finally {
      setLoading(false)
    }
  }

  const openEditDialog = (mentor: Mentor) => {
    setEditingMentor(mentor)
    setFormData({
      full_name: mentor.full_name,
      avatar_url: mentor.avatar_url || '',
      short_description: mentor.short_description,
      can_help_with: mentor.can_help_with,
      about_me: mentor.about_me,
      schedule_link: mentor.schedule_link || ''
    })
    // Fix: Handle empty arrays properly
    setSkillsInput(mentor.can_help_with.length > 0 ? mentor.can_help_with.join(', ') : '')
    setIsEditDialogOpen(true)
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  // Форма входа
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-border/50 backdrop-blur-sm">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <CardDescription>Введите пароль для доступа к системе управления</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Пароль администратора"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-12 h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {error && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                    <p className="text-destructive text-sm text-center">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading || !password.trim()}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                      Проверка...
                    </div>
                  ) : (
                    'Войти в систему'
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-muted-foreground text-xs text-center">
                  Доступ только для администраторов системы
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Админ панель
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="bg-black sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="shrink-0">
              <Logo />
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="text-white hover:bg-white hover:text-black">
                  <Home className="w-4 h-4 mr-2" />
                  На главную
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="text-white hover:bg-white hover:text-black"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Управление менторами</h1>
              <p className="text-muted-foreground">
                Управляйте профилями менторов и их информацией • Всего менторов: {mentors.length}
              </p>
            </div>
            
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Plus className="w-4 h-4 mr-2" />
                  Добавить ментора
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Создать нового ментора</DialogTitle>
                  <DialogDescription>
                    Заполните информацию о новом менторе. Поля отмеченные * обязательны для заполнения.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreateMentor} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Полное имя *</label>
                      <Input
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        placeholder="Иван Иванов"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">URL аватара</label>
                      <Input
                        value={formData.avatar_url}
                        onChange={(e) => setFormData({ ...formData, avatar_url: e.target.value })}
                        placeholder="https://example.com/avatar.jpg"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Краткое описание *</label>
                    <Textarea
                      value={formData.short_description}
                      onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                      placeholder="Senior Frontend Developer с 5+ годами опыта"
                      rows={3}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">О себе *</label>
                    <Textarea
                      value={formData.about_me}
                      onChange={(e) => setFormData({ ...formData, about_me: e.target.value })}
                      placeholder="Расскажите подробнее о менторе, его опыте и подходе к менторству"
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Навыки (через запятую)</label>
                      <Input
                        value={skillsInput}
                        onChange={(e) => setSkillsInput(e.target.value)}
                        placeholder="JavaScript, React, Node.js"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Ссылка на бронирование</label>
                      <Input
                        value={formData.schedule_link}
                        onChange={(e) => setFormData({ ...formData, schedule_link: e.target.value })}
                        placeholder="https://calendly.com/mentor"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-3 pt-4 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setIsCreateDialogOpen(false)
                        resetForm()
                      }}
                    >
                      Отмена
                    </Button>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {loading ? 'Создание...' : 'Создать ментора'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Поиск менторов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Mentors Grid */}
        {mentorsLoading ? (
          <Card>
            <CardContent className="p-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Загрузка менторов...</p>
              </div>
            </CardContent>
          </Card>
        ) : filteredMentors.length === 0 ? (
          <Card>
            <CardContent className="p-12">
              <div className="text-center">
                <User className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {searchQuery ? 'Менторы не найдены' : 'Нет менторов для отображения'}
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => (
              <div key={mentor.id} className="group relative">
                <Card 
                  className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openEditDialog(mentor)}
                >
                  {/* Avatar - Fixed 3:4 aspect ratio */}
                  <div className="aspect-[3/4] relative">
                    {mentor.avatar_url ? (
                      <img
                        src={mentor.avatar_url}
                        alt={mentor.full_name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-500">
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
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {mentor.short_description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="w-[95vw] max-w-2xl h-[95vh] max-h-[95vh] overflow-y-auto p-4 sm:p-6">
          <DialogHeader className="pb-4">
            <DialogTitle className="text-lg sm:text-xl">Редактировать ментора</DialogTitle>
            <DialogDescription className="text-sm">
              Измените информацию о менторе. Поля отмеченные * обязательны для заполнения.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEditMentor} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Полное имя *</label>
                <Input
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">URL аватара</label>
                <Input
                  value={formData.avatar_url}
                  onChange={(e) => setFormData({ ...formData, avatar_url: e.target.value })}
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Краткое описание *</label>
              <Textarea
                value={formData.short_description}
                onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                rows={2}
                required
                className="w-full resize-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">О себе *</label>
              <Textarea
                value={formData.about_me}
                onChange={(e) => setFormData({ ...formData, about_me: e.target.value })}
                rows={3}
                required
                className="w-full resize-none"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Навыки (через запятую)</label>
                <Input
                  value={skillsInput}
                  onChange={(e) => setSkillsInput(e.target.value)}
                  placeholder="JavaScript, React, Node.js"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Ссылка на бронирование</label>
                <Input
                  value={formData.schedule_link}
                  onChange={(e) => setFormData({ ...formData, schedule_link: e.target.value })}
                  placeholder="https://calendly.com/mentor"
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 pt-4 border-t">
              {/* Delete Button */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    type="button"
                    variant="destructive"
                    className="w-full sm:w-auto bg-destructive hover:bg-destructive/90"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Удалить ментора
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="w-[90vw] max-w-md">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Удалить ментора?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Это действие нельзя отменить. Ментор {formData.full_name} будет удален навсегда.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                    <AlertDialogCancel className="w-full sm:w-auto">Отмена</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        if (editingMentor) {
                          handleDeleteMentor(editingMentor.id)
                          setIsEditDialogOpen(false)
                        }
                      }}
                      className="w-full sm:w-auto bg-destructive hover:bg-destructive/90"
                    >
                      Удалить
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Save/Cancel Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsEditDialogOpen(false)
                    resetForm()
                  }}
                  className="w-full sm:w-auto"
                >
                  Отмена
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                >
                  {loading ? 'Сохранение...' : 'Сохранить изменения'}
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Error Display */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-destructive text-destructive-foreground p-4 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm">{error}</p>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setError('')}
              className="ml-2 h-6 w-6 p-0 text-destructive-foreground hover:bg-destructive-foreground/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}