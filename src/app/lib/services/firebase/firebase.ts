import app from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/storage'
import firebaseConfig from './config'
import { getAuth } from 'firebase/auth'
import { Messaging, getMessaging, getToken } from 'firebase/messaging'

export class Firebase {
  init: app.app.App
  app: app.app.App
  auth: app.auth.Auth
  db: app.database.Database
  files: app.storage.Storage
  messaging: Messaging
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  persi: any

  constructor() {
    this.init = app.initializeApp(firebaseConfig)
    this.app = app.app()
    this.auth = app.auth()
    this.db = app.database()
    this.files = app.storage()
    this.persi = getAuth()
    this.messaging = getMessaging(this.init)

    this.verify()
  }

  async login(email: string, password: string, persistence: boolean): Promise<void> {
    if (!persistence) {
      await app.auth().setPersistence(app.auth.Auth.Persistence.SESSION)
      await this.auth.signInWithEmailAndPassword(email, password)
    } else {
      await app.auth().setPersistence(app.auth.Auth.Persistence.LOCAL)
      await this.auth.signInWithEmailAndPassword(email, password)
    }
  }

  async revalidate(): Promise<void> {
    await this.auth.currentUser?.getIdToken(true)
  }

  async register(email: string, password: string): Promise<unknown> {
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password)

    return this.db.ref('users' + newUser.user?.uid).set({
      email: email.toLowerCase(),
      name: 'test',
      lastname: 'init',
      createdAt: Date.now()
    })
  }

  async verify(): Promise<string | void> {
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      const token = await this.getToken()
      return token
    }
  }

  async getToken(): Promise<string | void> {
    const token = await getToken(this.messaging, {
      vapidKey: '' // ! vapidKey
    }).catch(console.error)
    return token
  }

  async logout(): Promise<void> {
    return await this.auth.signOut()
  }
}

const firebase = new Firebase()
export default firebase
