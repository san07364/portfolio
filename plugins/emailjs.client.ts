import emailjs from '@emailjs/browser'

export default defineNuxtPlugin((nuxtApp) => {
  emailjs.init("_ePY2wc-SYEi4nM5J") // 🔁 Replace with your actual EmailJS public key

  // Inject `emailjs` so you can use it as `useEmailJS()` anywhere
  return {
    provide: {
      emailjs
    }
  }
})
