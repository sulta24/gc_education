import { supabase, type Mentor } from '../supabase'

export interface GetMentorsParams {
  page?: number
  limit?: number
}

export interface GetMentorsResponse {
  data: Mentor[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface CreateMentorData {
  full_name: string
  avatar_url?: string
  short_description: string
  can_help_with: string[]
  about_me: string
  schedule_link?: string
}

export interface UpdateMentorData extends Partial<CreateMentorData> {
  id: string
}

export async function getMentors({ page = 1, limit = 12 }: GetMentorsParams = {}): Promise<GetMentorsResponse> {
  const from = (page - 1) * limit
  const to = from + limit - 1

  // Получаем общее количество записей
  const { count } = await supabase
    .from('mentors')
    .select('*', { count: 'exact', head: true })

  // Получаем данные для текущей страницы
  const { data, error } = await supabase
    .from('mentors')
    .select('id, full_name, avatar_url, short_description, can_help_with, about_me, schedule_link, created_at, updated_at')
    .order('created_at', { ascending: false })
    .range(from, to)

  if (error) {
    throw new Error(`Ошибка загрузки менторов: ${error.message}`)
  }

  const total = count || 0
  const totalPages = Math.ceil(total / limit)

  return {
    data: data || [],
    total,
    page,
    limit,
    totalPages
  }
}

export async function getMentorById(id: string): Promise<Mentor | null> {
  const { data, error } = await supabase
    .from('mentors')
    .select('id, full_name, avatar_url, short_description, can_help_with, about_me, schedule_link, created_at, updated_at')
    .eq('id', id)
    .single()

  if (error) {
    throw new Error(`Ошибка загрузки ментора: ${error.message}`)
  }

  return data
}

export async function createMentor(mentorData: CreateMentorData): Promise<Mentor> {
  // Валидация и очистка данных перед отправкой
  const cleanedData = {
    ...mentorData,
    // Гарантируем, что can_help_with всегда массив
    can_help_with: Array.isArray(mentorData.can_help_with) 
      ? mentorData.can_help_with 
      : [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
  
  // Debug logging
  console.log('CreateMentor - Original data:', mentorData)
  console.log('CreateMentor - Cleaned data:', cleanedData)
  
  const { data, error } = await supabase
    .from('mentors')
    .insert([cleanedData])
    .select('id, full_name, avatar_url, short_description, can_help_with, about_me, schedule_link, created_at, updated_at')
    .single()

  if (error) {
    throw new Error(`Ошибка создания ментора: ${error.message}`)
  }

  return data
}

export async function updateMentor(mentorData: UpdateMentorData): Promise<Mentor> {
  const { id, ...updateData } = mentorData
  
  // Валидация и очистка данных перед отправкой
  const cleanedData = {
    ...updateData,
    // Гарантируем, что can_help_with всегда массив
    can_help_with: Array.isArray(updateData.can_help_with) 
      ? updateData.can_help_with 
      : [],
    updated_at: new Date().toISOString()
  }
  
  // Debug logging
  console.log('UpdateMentor - Original data:', updateData)
  console.log('UpdateMentor - Cleaned data:', cleanedData)
  
  const { data, error } = await supabase
    .from('mentors')
    .update(cleanedData)
    .eq('id', id)
    .select('id, full_name, avatar_url, short_description, can_help_with, about_me, schedule_link, created_at, updated_at')
    .single()

  if (error) {
    throw new Error(`Ошибка обновления ментора: ${error.message}`)
  }

  return data
}

export async function deleteMentor(id: string): Promise<void> {
  const { error } = await supabase
    .from('mentors')
    .delete()
    .eq('id', id)

  if (error) {
    throw new Error(`Ошибка удаления ментора: ${error.message}`)
  }
}

// Функция для получения всех менторов без пагинации (для админки)
export async function getAllMentors(): Promise<Mentor[]> {
  const { data, error } = await supabase
    .from('mentors')
    .select('id, full_name, avatar_url, short_description, can_help_with, about_me, schedule_link, created_at, updated_at')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Ошибка загрузки менторов: ${error.message}`)
  }

  return data || []
}