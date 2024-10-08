/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js')

const firebaseConfig = {
  apiKey: 'AIzaSyBRBVk4LwIq4eNaH6uq-phkssWnHcYUti4',
  authDomain: 'bambula-bf499.firebaseapp.com',
  projectId: 'bambula-bf499',
  storageBucket: 'bambula-bf499.appspot.com',
  messagingSenderId: '145152784491',
  appId: '1:145152784491:web:9ccc9861b94de35ef5992e',
  measurementId: 'G-2ZYRWRKFMC'
}
firebase.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('notificationclick', function (event) {
  event.preventDefault()
  console.info('On notification click:', event)
})
