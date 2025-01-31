import Button from '@components/Button/Button'
import { TCTAAction } from '@hooks/useAction'
import type { FC } from 'react'

interface IDate {
  date: string
  text: string
}

interface IAdmissionsProps {
  title: string
  cta: {
    text: string
    action: TCTAAction
  }
  description: string
  start: IDate
  application: IDate
}

const Admissions: FC<IAdmissionsProps> = ({ title, cta, description, start, application }) => {
  return (
    <div className="bg-GRAY rounded-lg px-5 py-12">
      <h3 className="m">{title}</h3>
      <Button className="mt-6">{cta.text}</Button>
      <p className="s mt-10">{description}</p>
      <div className="mt-20 flex flex-col gap-10">
        {[start, application].map((elm, idx) => {
          return (
            <div key={`${elm.text}-${idx}`}>
              <span className="m">{elm.date}</span>
              <hr className="mt-1 border-BLACK/20" />
              <span className="s text-BLACK/60 mt-2">{elm.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Admissions
