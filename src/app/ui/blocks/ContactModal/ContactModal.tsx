import { type FC, useContext, useState } from 'react'
import Image from 'next/image'
import ModalCustom from '@components/ModalCustom/ModalCustom'
import UiContext from '../../../lib/providers/UiProvider'
import ContactForm, { type IContactRequest } from '@components/Forms/ContactForm/ContactForm'
import { SubmitContactFormService } from '@services/contact-form.service'
import { useTranslations } from 'next-intl'

const ContactModal: FC = () => {
  const { handleIsContactModalOpen, isContactModalOpen } = useContext(UiContext)
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const t = useTranslations('forms')

  const handleCloseModal = () => {
    handleIsContactModalOpen(false)
    setMessage(null) // Clear any feedback when the modal is closed
  }

  const handleSubmit = async (formData: IContactRequest) => {
    setMessage(null)
    try {
      const response = await SubmitContactFormService(formData)
      setMessage(response.message)
      setIsSuccess(true)
    } catch (error: unknown) {
      setIsSuccess(false)
      setMessage(t('forms.errorMessage') + error)
    }
  }

  return (
    <ModalCustom isOpen={isContactModalOpen} handleClose={handleCloseModal}>
      <div className="contact-modal-block grid grid-cols-1 md:grid-cols-2 h-full flex-grow px-[32px] py-[61px] overflow-hidden relative">
        <div className="contact-modal-block__form flex flex-col justify-center p-0 md:pr-10">
          {isSuccess && message ? <SuccessMessage /> : <ContactForm onSubmit={handleSubmit} />}
          {!isSuccess && message && <span className="font-s text-s mt-4">{message}</span>}
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

const SuccessMessage: FC = () => {
  const t = useTranslations()

  return (
    <div className="flex flex-col items-center justify-center absolute inset-0 z-20 bg-WHITE">
      <h2 className="font-xl text-xl mb-3">{t('common.thanks')}</h2>
      <p className="font-s text-[18px] text-center text-BLACK/60">{t('forms.contact.successMessage')}</p>
    </div>
  )
}
