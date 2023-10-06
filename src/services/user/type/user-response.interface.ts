export interface UserResponse {
  id: string
  username: string
  name: string
  surname: string
  email: string
  password: string
  birthDate: Date
  gender: 'MALE' | 'FEMALE' | 'OTHER'
  educationLevel: string
  annualIncome: number
  role: 'ADMIN' | 'USER'
  createdAt: Date
  updatedAt: Date
}
