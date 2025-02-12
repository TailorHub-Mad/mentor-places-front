'use client'

import { type FC, useState } from 'react'
import FilterSideBar from '@components/Filters/SideBar/FilterSideBar'
import { type IFilterCategory } from '@interfaces/filterSidebar.interfaces'
import useBreakpoint from '@hooks/useBreakpoint'
import ModalCustom from '@components/ModalCustom/ModalCustom'
import { useTranslations } from 'next-intl'
import ChevronArrowLeft from '@components/icons/ChevronArrowLeft'

interface IFilterSidebarBlockProps {
  filters: IFilterCategory[]
}

const FilterSidebarBlock: FC<IFilterSidebarBlockProps> = ({ filters }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const { isDesktop } = useBreakpoint()

  const t = useTranslations()

  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)

  if (isDesktop) {
    return <FilterSideBar filters={filters} />
  }

  return (
    <>
      <button onClick={handleOpenModal} className="filter-sidebar-button rounded-[8px] bg-WHITE px-4 py-1 flex items-center">
        <span className="mr-4">{t('filters.name')}</span>
        <ChevronArrowLeft className={'-rotate-90'} />
      </button>

      <ModalCustom isOpen={isModalOpen} handleClose={handleCloseModal}>
        <FilterSideBar filters={filters} className="mt-8" />
      </ModalCustom>
    </>
  )
}

export default FilterSidebarBlock
