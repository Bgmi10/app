importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyA6X74enkoi0-XfVmWDLT0EdE9_fnNXnZs",
    authDomain: "km-calc-ccd1a.firebaseapp.com",
    projectId: "km-calc-ccd1a",
    storageBucket: "km-calc-ccd1a.appspot.com",
    messagingSenderId: "510548260207",
    appId: "1:510548260207:web:dd58a5dd12fb2302ac649a",
    measurementId: "G-128ZWZL8TH"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
