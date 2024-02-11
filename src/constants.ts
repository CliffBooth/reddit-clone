import 'dotenv/config'

export const __prod__ = process.env.NODE_ENV === 'production'
export const DATABASE_USER = process.env.DATABASE_USER
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
export const DATABASE_NAME = process.env.DATABASE_NAME