import type { ICourseDetailBlockProps } from './CourseDetailBlock'

export const COURSE_DETAIL_BLOCK_MOCK: ICourseDetailBlockProps = {
  title: 'El título',
  tags: ['Top 5 Marketing Digital Online', 'Descuentos (5%)'],
  type: 'Máster universitario',
  isOfficial: true,
  ects: 60,
  seats: 45,
  methodology:
    'Basada en el aprendizaje activo, en las clases se fomenta la participación activa de los estudiantes a través de debates, proyectos y trabajos en grupo y promoviendo el aprendizaje colaborativo (Modelo UAX Maker).',
  internship: `Sí, obligatorias. Empresas colaboradoras: Deloitte, PWC, EY, KPMG, The Cocktail, RK People, Mccann, Banco Santander, Repsol, Telefónica, SONY.`,
  internshipAbroad: 'Sí, opcionales.'
}
