'use client'

import Button from '@components/Button/Button'
import type { TCTAAction } from '@hooks/useAction'
import useAction from '@hooks/useAction'
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
  description?: string | null
  start: IDate
  application: IDate
}

const Admissions: FC<IAdmissionsProps> = ({ title, cta, description, start, application }) => {
  const handleOnClick = useAction(cta.action)

  return (
    <div className="bg-GRAY rounded-lg px-5 py-12 md:px-12 md:py-20">
      <div className="md:flex md:flex-row md:items-start md:gap-[20%]">
        <div>
          <h3 className="m">{title}</h3>
          <Button className="mt-6" onClick={handleOnClick}>
            {cta.text}
          </Button>
        </div>
        <p className="s mt-10 md:mt-0 text-BLACK/80">{description}</p>
      </div>
      <div className="mt-20 flex flex-col gap-10 md:flex-row">
        {[start, application].map((elm, idx) => {
          return (
            <div key={`${elm.text}-${idx}`} className="w-full">
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
