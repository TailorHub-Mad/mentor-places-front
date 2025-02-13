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
  customItems: [
    {
      header: 'Metodología educativa',
      body: 'El plan de estudios y la estructura del Máster ha sido diseñados desde la UFV en colaboración con prestigiosos profesionales en activo de empresas tecnológicas, en áreas del Business Analytics, IA, y ML, así como de áreas de negocio. Es eminentemente práctico. Así, tendrás la oportunidad, de desarrollar una solución completa a un problema empresarial real'
    },
    {
      header: 'Prácticas',
      body: 'No obligatorias, aunque los alumnos podrán realizar sus proyectos atendiendo a problemas empresariales reales.\n** Empresas Colaboradoras: SAS, Mapfre, Quirón Salud'
    }
  ]
}
