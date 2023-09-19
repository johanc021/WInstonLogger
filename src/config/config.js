import dotenv from 'dotenv'
import params from './params.js'
import __dirname from '../utils.js'

const mode = params.mode

dotenv.config({
    path: `./.env.${mode}`
})

export default {
    APP_ENV: process.env.APP_ENV,
    PORT: process.env.PORT || '',
    MONGO_URI: process.env.MONGO_URI || 3000,
    DATASOURCE: process.env.PERSISTENCE || ''
}