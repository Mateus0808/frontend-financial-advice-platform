export interface CreateUserParams {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  birthDate: string
  gender: 'MALE' | 'FEMALE' | 'OTHER' | ""
  educationLevel: string
}
