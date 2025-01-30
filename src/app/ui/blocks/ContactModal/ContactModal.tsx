import { type FC, useContext, useState } from 'react'
import ModalCustom from '@components/ModalCustom/ModalCustom'
import UiContext from '../../../lib/providers/UiProvider'
import ContactForm, { type IContactRequest } from '@components/Forms/ContactForm/ContactForm'
import { SubmitContactFormService } from '@services/contact-form.service'

const ContactModal: FC = () => {
  const { handleIsContactModalOpen, isContactModalOpen } = useContext(UiContext)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleCloseModal = () => {
    handleIsContactModalOpen(false)
    setMessage(null) // Clear any feedback when the modal is closed
  }

  const handleSubmit = async (formData: IContactRequest) => {
    setLoading(true)
    setMessage(null)
    try {
      const response = await SubmitContactFormService(formData)
      setMessage(response.message) // Display success message
    } catch (error: unknown) {
      // Display error message
      console.log({ error })
    } finally {
      setLoading(false)
    }
  }

  return (
    <ModalCustom isOpen={isContactModalOpen} handleClose={handleCloseModal}>
      <div className="contact-modal-block grid grid-cols-1 md:grid-cols-2 h-full flex-grow px-[32px] py-[61px]">
        <div className="contact-modal-block__form flex flex-col justify-center">
          {message && <p>{message}</p>} {/* Show feedback message */}
          <ContactForm onSubmit={handleSubmit} /> {/* Pass `handleSubmit` as the onSubmit prop */}
          {loading && <p>Submitting form...</p>} {/* Show a simple loading state */}
        </div>
        <div className="contact-modal-block__image"></div>
      </div>
    </ModalCustom>
  )
}

export default ContactModal
