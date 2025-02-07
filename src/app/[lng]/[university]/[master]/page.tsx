import { type FC } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { ELocale } from '../../../lib/enums/globals.enums'
import client from '@configs/apolloClient'
import type { GetCourseQuery, GetCourseQueryVariables } from '../../../../graphql/generated/client'
import { GetCourseDocument } from '../../../../graphql/generated/client'
import { LOCALES_GRAPHQL } from '../../../../graphql/constants'
import CoursePageBuilder from '../../../ui/blocks/CoursePageBuilder/CoursePageBuilder'

interface IPageProps {
  params: { lng: string; master: string }
}

const Page: FC<IPageProps> = async ({ params: { lng, master } }) => {
  unstable_setRequestLocale(lng)
  const { data } = await client.query<GetCourseQuery, GetCourseQueryVariables>({
    query: GetCourseDocument,
    variables: {
      languageName: LOCALES_GRAPHQL.es,
      id: master
    }
  })

  return <CoursePageBuilder data={data} />
}

export default Page

export async function generateStaticParams({ params: { locale } }: { params: { locale: ELocale } }) {
  const mock: Record<ELocale, Record<string, string[]>> = {
    es: {
      ['1']: ['1', '2']
    },
    en: {
      ['1']: ['1', '2']
    }
  }

  const masterPaths: { lng: ELocale; university: string; master: string }[] = [] // TODO

  Object.entries(mock[locale]).forEach(([university, masters]) => {
    masters.forEach((master) => {
      masterPaths.push({
        lng: locale,
        university,
        master
      })
    })
  })

  return masterPaths
}

// const master = {
//   courses_by_id: {
//     __typename: 'courses',
//     course_trans: [
//       {
//         __typename: 'courses_trans',
//         id: '1',
//         standsfor: {
//           items: [
//             {
//               header: 'Especialización en AI y Machine Learning',
//               body: 'Podrás especializarte en un área altamente demandada por el mercado actual'
//             },
//             { header: 'Certificaciones', body: 'te prepararás para poder obtener certificaciones relevantes en el sector de Google o AWS' },
//             {
//               header: 'Humanismo Cristiano',
//               body: 'Formación con un profundo conocimiento técnico, dirigida a abordar los problemas y retos del mundo global en el que vivimos, desde el humanismo cristiano'
//             }
//           ]
//         },
//         course_structure: {
//           schema: 1,
//           table: [
//             [
//               'Máster en Business Analytics, IA & Machine Learning',
//               [
//                 ['Asignatura', 'Tipo', 'ECTs'],
//                 ['Introducción a la Analítica de Negocios y Comercia', 'FB', 3],
//                 ['Analítica Jurídica y Gubernamental', 'FB', 1],
//                 ['Ética, Dato y Personal', 'FB', 3],
//                 ['CDO, Data Governance y Datamanagement', 'OB', 2],
//                 ['Arquitectura BigData y Cloud', 'OB', 6],
//                 ['Data Engineering', 'OB', 5],
//                 ['Data Analytics', 'OB', 12],
//                 ['Reporting y Visualización', 'OB', 3],
//                 ['Storytelling & BigData Business Case', 'OB', 2]
//               ]
//             ],
//             [
//               'Especialidad 1: IA & Machine Learning',
//               [
//                 ['Asigntura', 'Tipo', 'ECTs'],
//                 ['Introducción a la Inteligencia Artificial', 'OPT', 3],
//                 ['Machine Learning en el mundo empresarial', 'OPT', 3],
//                 ['Procesamiento Natural del Lenguaje', 'OPT', 3],
//                 ['Robótica', 'OPT', 3],
//                 ['Futuro de la IA y su aplicación empresarial', 'OPT', 3],
//                 ['Proyecto de aplicación profesional', 'OPT', 12]
//               ]
//             ],
//             [
//               'Especialidad 2: Management Analytics',
//               [
//                 ['Asignatura', 'Tipo', 'ECTs'],
//                 ['Introducción a la Inteligencia Artificial', 'OPT', 3],
//                 ['Machine Learning en el mundo empresarial', 'OPT', 3],
//                 ['Procesamiento Natural del Lenguaje', 'OPT', 3],
//                 ['Robótica', 'OPT', 3],
//                 ['Futuro de la IA y su aplicación empresarial', 'OPT', 3],
//                 ['Proyecto de aplicación profesional', 'OPT', 12]
//               ]
//             ]
//           ],
//           notes: 'OB = Obligatoria   OPT = Optativa'
//         },
//         schedules: '"**Presencial:** L a J de 17 a 21 h  y  V de 16 a 20 h',
//         requirements:
//           'Ser titulado o licenciado de un grado universitario. Se valora la existencia de prácticas formativas en empresas de al menos 150 horas.',
//         career_opportunities:
//           'Las salidas profesionales y puestos en los que podrás trabajar variarán en funciónd de tu experiencia profesional y el curso que finalmente realices. Por lo general un máster en Business Analytics, IA y Machine Learning te dará conocimientos para trabajar profesionalmente como:',
//         tuition_price_comments: null,
//         course_id: {
//           __typename: 'courses',
//           id: '1',
//           type: 'master',
//           is_official: false,
//           duration: '10',
//           bilinguals: null,
//           is_dual: false,
//           ects: 60,
//           degree_type: 'Master',
//           degree_id: null,
//           url: 'https://www.ufv.es/estudiar-master-inteligencia-artificial-business-analytics-machine-learning-madrid/',
//           is_on_demand: null,
//           application_date: null,
//           videos: null,
//           images:
//             'https://www.shutterstock.com/shutterstock/photos/284687528/display_1500/stock-photo-master-word-cloud-education-concept-284687528.jpg',
//           tuition_price: [
//             {
//               date: '2024/01/06',
//               course: '25/26',
//               tuition_fee_o: '12100',
//               tuition_fee_d: 'NA',
//               currency: 'EUR',
//               code: 'PY',
//               discounts: false
//             }
//           ],
//           official_data_source: null,
//           learning_format: [
//             { __typename: 'courses_learning_format', learning_format_id: { __typename: 'learning_format', format_name: 'onsite' } },
//             { __typename: 'courses_learning_format', learning_format_id: { __typename: 'learning_format', format_name: 'hybrid' } }
//           ],
//           learning_pace: [
//             { __typename: 'courses_learning_pace', learning_pace_id: { __typename: 'learning_pace', pace_name: 'full_time' } },
//             { __typename: 'courses_learning_pace', learning_pace_id: { __typename: 'learning_pace', pace_name: 'part_time' } }
//           ],
//           careers_list: [
//             'Data Scientist',
//             'Data Analyst',
//             'Business Intelligence Analyst',
//             'Analista de Inteligencia de Mercado y Visualización de Datos'
//           ],
//           duration_class: 'months',
//           meta_tags: ['Top 5', 'Promo'],
//           average_price: '1.200',
//           start_date_func: { __typename: 'date_functions', year: 2025, month: 9, day: 8 },
//           start_date: '2025-09-08',
//           places_available: 20,
//           end_date: '2025-08-31',
//           end_date_func: { __typename: 'date_functions', year: 2025, month: 8, day: 31 },
//           course_language: [
//             { __typename: 'courses_languages_format', languages_format_id: { __typename: 'languages_format', name: 'Español' } }
//           ],
//           institutions: [
//             {
//               __typename: 'joininstitutioncourse',
//               institution_id: {
//                 __typename: 'institutions',
//                 institutions_trans: [
//                   {
//                     __typename: 'institutions_trans',
//                     intro:
//                       'La Universidad Alfonso X el Sabio (UAX) es una institución educativa privada ubicada en Madrid, destacada por su enfoque práctico y por ofrecer una formación de calidad orientada a las necesidades del mercado laboral. Con más de 25 años de historia, se caracteriza por su amplia oferta académica que abarca grados, másteres y programas de doctorado en diversas áreas como la salud, la ingeniería, las ciencias sociales y las artes. Además, destaca por su infraestructura moderna, como sus laboratorios, clínicas y aulas equipadas con tecnología avanzada. UAX también pone énfasis en el desarrollo de habilidades prácticas a través de convenios con empresas, prácticas profesionales y programas de internacionalización. Su modelo educativo se basa en la cercanía y el apoyo individualizado a los estudiantes, lo que facilita su integración al mundo laboral y su desarrollo personal.',
//                     description:
//                       '"La **Universidad Alfonso X el Sabio** (UAX) es una institución privada de referencia en España, fundada en 1993 y situada en Madrid. Con más de 25 años de experiencia, la UAX se ha consolidado como una universidad de alta calidad académica, destacando por su enfoque integral en la formación de los estudiantes, su innovador modelo educativo y sus sólidos lazos con el mundo empresarial.\n \n Uno de los aspectos clave de la UAX es su **oferta académica variada y de calidad**. La universidad ofrece más de 20 grados universitarios, junto con un amplio catálogo de programas de posgrado, másteres y doctorados, que abarcan disciplinas como las ciencias de la salud, la ingeniería, la comunicación, las ciencias sociales, las artes, el derecho y la educación. En todas estas áreas, la UAX pone un énfasis especial en la **formación práctica**. Sus programas están diseñados para que los estudiantes puedan aplicar los conocimientos adquiridos en escenarios reales, a través de prácticas profesionales, estancias internacionales y proyectos en colaboración con empresas.\n \n La UAX también es conocida por sus **infraestructuras de última generación**. La universidad cuenta con modernos laboratorios, centros de simulación médica, clínicas universitarias y aulas equipadas con la mejor tecnología educativa. Esto permite que los estudiantes no solo reciban formación teórica, sino que también puedan desarrollarse en entornos que replican las condiciones reales de su futura profesión. Además, su campus dispone de amplias instalaciones deportivas y culturales, creando un ambiente integral para el desarrollo académico y personal.\n \n Un aspecto destacado de la Universidad Alfonso X el Sabio es su **firme compromiso con la internacionalización**. La universidad cuenta con programas de intercambio y convenios con universidades de todo el mundo, lo que permite a los estudiantes vivir experiencias internacionales, aprender otros idiomas y ampliar su visión global. Esto es particularmente valioso en un mundo laboral cada vez más interconectado y globalizado.\n \n Otro factor que diferencia a la UAX es su **atención personalizada**. Con un modelo educativo que pone al estudiante en el centro, la universidad ofrece un seguimiento cercano por parte de los profesores y tutores, lo que facilita el aprendizaje y el éxito académico. Este enfoque individualizado es uno de los pilares para que los estudiantes puedan desarrollar su potencial y alcanzar sus metas profesionales con seguridad y respaldo.\n \n En resumen, la **Universidad Alfonso X el Sabio** es una opción educativa que destaca por su **enfoque práctico**, su **tecnología avanzada** y su **compromiso con la internacionalización y el apoyo al estudiante**. Gracias a su sólida red de contactos con empresas y su capacidad de adaptación a los cambios del mercado laboral, los graduados de la UAX están bien preparados para afrontar con éxito los retos del futuro."',
//                     header_details: [
//                       { number: 40, description: 'Master' },
//                       { number: 20, description: 'Master online' },
//                       { number: 3, description: 'Programas execute' },
//                       { number: 3850, description: 'Estudiantes de postgrado' },
//                       { number: 1250, description: 'Estudiantes internacionales' }
//                     ],
//                     commercial_name: 'Universidad Alfonso X el Sabio'
//                   }
//                 ],
//                 logo: 'https://www.universidadyemprendimiento.es/images/universidad-emprendimiento/logo-universidad-y-emprendimiento-universidades-ok.svg',
//                 main_image:
//                   'https://www.allianz-partners.com/es_ES/sala-de-prensa/notas-de-prensa/noticias-2023/universidad-alfonso-x-el-sabio/_jcr_content/root/stage/stageimage.img.82.3360.png/1695802285840/4ad9e9a4e18a-sin-titulo-640-640-px-2-.png',
//                 top_masters: null,
//                 institutions_scholarships_courses: [
//                   { __typename: 'institutions_scholarships_courses', scholarships_id: null },
//                   {
//                     __typename: 'institutions_scholarships_courses',
//                     scholarships_id: {
//                       __typename: 'scholarships',
//                       enum: 'sch',
//                       description: {
//                         name: 'Becas de Excelencia Fundación Universidad Alfonso X el Sabio -Grado en Medicina',
//                         description:
//                           'Becas otorgadas por la Fundación Universidad Alfonso X el Sabio destinadas a premiar a los estudiantes del grado en medicina con excelentes calificaciones.\n**Dirigida a:**Estudiantes de primero o segundo del grado en Medicina de la UAX.\n**Importe de la Beca: Hasta el 100% de los honorarios de docencia. No incluye reserva y matrícula **Plazo de solicitud:**Entre el 1 de febrero y el 30 de junio de 2024.\nNOTA: Consultar las bases reguladoras.'
//                       },
//                       academic_course: 'Curso 24/2',
//                       is_active: true,
//                       type: 'sch'
//                     }
//                   }
//                 ]
//               }
//             }
//           ],
//           disciplines: [
//             {
//               __typename: 'courses_disciplines',
//               disciplines_id: {
//                 __typename: 'disciplines',
//                 discipline_trans: [
//                   {
//                     __typename: 'disciplines_trans',
//                     discipline: 'Educación',
//                     specialization_level1: 'Pedagogía',
//                     specialization_level2: '',
//                     keyword: 'Psicopedagogía'
//                   }
//                 ],
//                 menu: 'ES_master',
//                 discipline_visualization: true,
//                 specialization_level1_visualization: true,
//                 specialization_level2_visualization: false,
//                 visualization: null,
//                 id: '2'
//               }
//             },
//             {
//               __typename: 'courses_disciplines',
//               disciplines_id: {
//                 __typename: 'disciplines',
//                 discipline_trans: [
//                   {
//                     __typename: 'disciplines_trans',
//                     discipline: 'Educación',
//                     specialization_level1: 'Tecnologías Educativas',
//                     specialization_level2: '',
//                     keyword: 'Tecnologías Educativas & e-learning'
//                   }
//                 ],
//                 menu: 'ES_master',
//                 discipline_visualization: true,
//                 specialization_level1_visualization: true,
//                 specialization_level2_visualization: false,
//                 visualization: null,
//                 id: '3'
//               }
//             },
//             {
//               __typename: 'courses_disciplines',
//               disciplines_id: {
//                 __typename: 'disciplines',
//                 discipline_trans: [
//                   {
//                     __typename: 'disciplines_trans',
//                     discipline: 'Educación',
//                     specialization_level1: 'Dirección y Gestión de Centros Educativos',
//                     specialization_level2: '',
//                     keyword: 'Gestión de Entidades Educativas'
//                   }
//                 ],
//                 menu: 'ES_master',
//                 discipline_visualization: true,
//                 specialization_level1_visualization: true,
//                 specialization_level2_visualization: false,
//                 visualization: null,
//                 id: '15'
//               }
//             },
//             {
//               __typename: 'courses_disciplines',
//               disciplines_id: {
//                 __typename: 'disciplines',
//                 discipline_trans: [
//                   {
//                     __typename: 'disciplines_trans',
//                     discipline: 'Educación',
//                     specialization_level1: 'Otra Educación',
//                     specialization_level2: '',
//                     keyword: 'Investigación e Innovación Educativa'
//                   }
//                 ],
//                 menu: 'ES_master',
//                 discipline_visualization: true,
//                 specialization_level1_visualization: true,
//                 specialization_level2_visualization: false,
//                 visualization: null,
//                 id: '4'
//               }
//             },
//             {
//               __typename: 'courses_disciplines',
//               disciplines_id: {
//                 __typename: 'disciplines',
//                 discipline_trans: [
//                   {
//                     __typename: 'disciplines_trans',
//                     discipline: 'Educación',
//                     specialization_level1: 'Pedagogía',
//                     specialization_level2: '',
//                     keyword: 'Pedagogía'
//                   }
//                 ],
//                 menu: 'ES_master',
//                 discipline_visualization: true,
//                 specialization_level1_visualization: true,
//                 specialization_level2_visualization: false,
//                 visualization: null,
//                 id: '1'
//               }
//             }
//           ],
//           profiles: [
//             {
//               __typename: 'profiles',
//               content_title: 'Perfil estudiante',
//               students: { title: 'Estudiantes curso', year: '(23/24)', value: 'N/D' },
//               target: {
//                 title: 'Dirigido a',
//                 profile:
//                   'Profesionales y recién graduados en ADE, Marketing, Publicidad y RR.PP., Comunicación, Comunicación audiovisual, Economía, que tengan un interés demostrado por el marketing y las últimas tecnologías'
//               },
//               data: [
//                 {
//                   date: '2022/2023',
//                   source: 'SIIU',
//                   question: '¿Cuántos años de experiencia profesional tienes?',
//                   values: ['78%', '15%', '7%', '0%'],
//                   unit: ['0-2 años', '3-5 años', '6-10 años', '> 10 años']
//                 },
//                 {
//                   date: '2022/2023',
//                   source: 'University',
//                   question: 'Nacionalidad del estudiante',
//                   values: ['82%', '6%', '12%'],
//                   unit: ['española', 'Latam', 'otros']
//                 }
//               ]
//             }
//           ],
//           campuses_courses: [
//             {
//               __typename: 'campuses_courses',
//               campuses_id: {
//                 __typename: 'campuses',
//                 street_address: 'Avda. de la Universidad, 1',
//                 city: 'Villanueva de la Cañada',
//                 country: 'ES',
//                 postal_code: '28691',
//                 images: 'https://campus.uax.es/central/modules/default/recuperar_clave/img/uax_logo_institucional.png',
//                 phone: '918109200',
//                 type: 'physical',
//                 campuses_trans: [
//                   {
//                     __typename: 'campuses_trans',
//                     intro:
//                       'El campus de la Universidad Alfonso X el Sabio (UAX) en Villanueva de la Cañada ofrece un entorno moderno y completo para el desarrollo académico y personal de los estudiantes. Ubicado en un área natural a solo 30 minutos de Madrid, el campus cuenta con más de 1.000.000 m2 e instalaciones de última generación, como laboratorios, clínicas, aulas tecnológicas y espacios deportivos. Con capacidad para 15.000 estudiantes. ',
//                     description:
//                       'Se trata de uno de los mejores campus de universidades privadas españolas. Ubicado a 30 minutos de Madrid centro, el campus, de estilo americano, cuenta con 1.000.000 de metros cuarados pensados para desarrollar un ambiente de colaboración, desarrollo y aprendizaje entre sus estudiantes. En el campus dispone de:\\n- 100 aulas y seminarios\\n11 laboratorios de investigacion y 45 laboratorios de sumulación\\n- Un hospital veterinario con más de 7.500 m2 de instalaciones\\n- Un hospital virtual de simulación\\n3 residencias con capacidad para más de 720 estudiantes\\nInstalaciones deportivas de primer nivel, incluyendo gimnasio, polideportivo, campos de fútbol, campo de rugby, pistas de tenis y padel, etc.\\n- Simulador de ingeniería aeronáutica',
//                     name: 'UAX Madrid Villanueva'
//                   }
//                 ]
//               }
//             }
//           ]
//         },
//         commercial_name: 'Z Máster en Business Analytics, Inteligencia Artificial & Machine Learning',
//         intro:
//           'El Máster en Business Analytics, Inteligencia Artificial y Machine Learning está dirigido aquellas personas que quieren profundizar en el conocimiento del dato y su contribución a la toma de decisiones en una organización, que entienden el valor de la Inteligencia Artificial y como impacta en la forma de hacer negocios. Este máster de nueva creación de la UFV está liderado por un equipo de profesores de la UFV y profesionales del mundo de los datos y la tecnología.',
//         description:
//           '"El Máster en Business Analytics, Inteligencia Artificial y Machine Learning está dirigido aquellas personas que quieren profundizar en el conocimiento del dato y su contribución a la toma de decisiones en una organización, que entienden el valor de la Inteligencia Artificial y como impacta en la forma de hacer negocios. Este máster de nueva creación de la UFV está liderado por un equipo de profesores de la UFV y profesionales del mundo de los datos y la tecnología.\\nEl máster está pensado tanto para profesionales con conocimientos de programación y/o matemáticos como estudiantes procedentes de otras áreas. Para asegurarse de que es para todos, se ha diseñado un bootcamp inmersivo de dos semanas, al inicio del curso, para adquirir el nivel suficiente para poder realizar el máster.\\nAsí el Máster consta de un bootcamp inicial de dos semanas, un cuerpo troncal común (36 ECTs) y la posibilidad de especializarse en Machine Learning e Inteligencia Artificial (18 ECTs) o en Management Analytics (18 ECTs).\\n\\n"',
//         info_blocks: {
//           items: [
//             {
//               header: 'Metodología educativa',
//               body: 'El plan de estudios y la estructura del Máster ha sido diseñados desde la UFV en colaboración con prestigiosos profesionales en activo de empresas tecnológicas, en áreas del Business Analytics, IA, y ML, así como de áreas de negocio. Es eminentemente práctico. Así, tendrás la oportunidad, de desarrollar una solución completa a un problema empresarial real'
//             },
//             {
//               header: 'Prácticas',
//               body: 'No obligatorias, aunque los alumnos podrán realizar sus proyectos atendiendo a problemas empresariales reales.\n** Empresas Colaboradoras: SAS, Mapfre, Quirón Salud'
//             }
//           ]
//         },
//         methodology: null,
//         header_title: 'Sobre el Master',
//         info_header: 'El Título del Master',
//         reason_header: '¿Por qué elegir este master?',
//         course_syllabus: 'Temario',
//         format_schedules: 'Formato y horarios',
//         admissions: 'Admisiones',
//         title_career_opportunities: 'Salidas profesionales',
//         pricing: 'Precios',
//         header_scholarships: 'Becas y ayudas'
//       }
//     ]
//   }
// }
