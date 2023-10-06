export interface CreateUserParams {
  name: string
  surname: string
  username: string
  email: string
  password: string
  birthDate: Date
  gender: 'MALE' | 'FEMALE' | 'OTHER'
  educationLevel: string
}
