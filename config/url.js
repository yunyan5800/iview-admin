const DEV_URL = 'http://127.0.0.1:8081'
const PRO_URL = 'https://produce.com'

export default process.env.NODE_ENV === 'development' ? DEV_URL : PRO_URL
