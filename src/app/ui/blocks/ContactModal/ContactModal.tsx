import { type FC, useContext, useState } from 'react'
import Image from 'next/image'
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
      <div className="contact-modal-block grid grid-cols-1 md:grid-cols-2 h-full flex-grow px-[32px] py-[61px] overflow-hidden relative">
        <div className="contact-modal-block__form flex flex-col justify-center p-0 md:pr-10">
          {message && <p>{message}</p>}
          <ContactForm onSubmit={handleSubmit} />
          {loading && <p>Submitting form...</p>}
        </div>
        <div className="contact-modal-block__image overflow-x-hidden overflow-y-visible hidden md:block">
          <div className="image-wrapper overflow-hidden rounded-[18px] absolute top-[30%] lg:top-[25%] rotate-[20deg] scale-[1.7] lg:scale-150 translate-x-[150px] z-10">
            <Image
              className={'md:scale-150 lg:scale-125 origin-bottom-right'}
              alt={'contact-mentor-places'}
              src={'/images/contact-image_mentor-places.jpeg'}
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>
    </ModalCustom>
  )
}

export default ContactModal
