import type { IContactRequest } from '@components/Forms/ContactForm/ContactForm'

//TODO: Implement feature
export const SubmitContactFormService = async (formData: IContactRequest): Promise<{ success: boolean; message: string }> => {
  console.log('Submitting contact request...', formData)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData.name && formData.surname && formData.country && formData.phone && formData.acceptPrivacyPolicy) {
        resolve({
          success: true,
          message: 'Nos pondremos en contacto a la brevedad'
        })
      } else {
        reject({
          success: false,
          message: 'Algo ha salido mal. Por favor, inténtalo de nuevo.'
        })
      }
    }, 1500) // Simulate network delay of 1.5 seconds
  })
}
