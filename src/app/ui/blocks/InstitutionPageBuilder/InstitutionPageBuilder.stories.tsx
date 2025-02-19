import type { Meta, StoryObj } from '@storybook/react'
import InstitutionPageBuilder from './InstitutionPageBuilder'

const meta: Meta<typeof InstitutionPageBuilder> = {
  component: InstitutionPageBuilder,
  parameters: {
    locale: 'es'
  }
}

export default meta

type Story = StoryObj<typeof InstitutionPageBuilder>

export const Default: Story = {
  args: {
    data: {
      institutions_by_id: {
        institution: [
          {
            commercial_name: 'Universidad Alfonso X el Sabio',
            intro:
              'La Universidad Alfonso X el Sabio (UAX) es una institución educativa privada ubicada en Madrid, destacada por su enfoque práctico y por ofrecer una formación de calidad orientada a las necesidades del mercado laboral. Con más de 25 años de historia, se caracteriza por su amplia oferta académica que abarca grados, másteres y programas de doctorado en diversas áreas como la salud, la ingeniería, las ciencias sociales y las artes. Además, destaca por su infraestructura moderna, como sus laboratorios, clínicas y aulas equipadas con tecnología avanzada. UAX también pone énfasis en el desarrollo de habilidades prácticas a través de convenios con empresas, prácticas profesionales y programas de internacionalización. Su modelo educativo se basa en la cercanía y el apoyo individualizado a los estudiantes, lo que facilita su integración al mundo laboral y su desarrollo personal.',
            description:
              '"La **Universidad Alfonso X el Sabio** (UAX) es una institución privada de referencia en España, fundada en 1993 y situada en Madrid. Con más de 25 años de experiencia, la UAX se ha consolidado como una universidad de alta calidad académica, destacando por su enfoque integral en la formación de los estudiantes, su innovador modelo educativo y sus sólidos lazos con el mundo empresarial.\n \n Uno de los aspectos clave de la UAX es su **oferta académica variada y de calidad**. La universidad ofrece más de 20 grados universitarios, junto con un amplio catálogo de programas de posgrado, másteres y doctorados, que abarcan disciplinas como las ciencias de la salud, la ingeniería, la comunicación, las ciencias sociales, las artes, el derecho y la educación. En todas estas áreas, la UAX pone un énfasis especial en la **formación práctica**. Sus programas están diseñados para que los estudiantes puedan aplicar los conocimientos adquiridos en escenarios reales, a través de prácticas profesionales, estancias internacionales y proyectos en colaboración con empresas.\n \n La UAX también es conocida por sus **infraestructuras de última generación**. La universidad cuenta con modernos laboratorios, centros de simulación médica, clínicas universitarias y aulas equipadas con la mejor tecnología educativa. Esto permite que los estudiantes no solo reciban formación teórica, sino que también puedan desarrollarse en entornos que replican las condiciones reales de su futura profesión. Además, su campus dispone de amplias instalaciones deportivas y culturales, creando un ambiente integral para el desarrollo académico y personal.\n \n Un aspecto destacado de la Universidad Alfonso X el Sabio es su **firme compromiso con la internacionalización**. La universidad cuenta con programas de intercambio y convenios con universidades de todo el mundo, lo que permite a los estudiantes vivir experiencias internacionales, aprender otros idiomas y ampliar su visión global. Esto es particularmente valioso en un mundo laboral cada vez más interconectado y globalizado.\n \n Otro factor que diferencia a la UAX es su **atención personalizada**. Con un modelo educativo que pone al estudiante en el centro, la universidad ofrece un seguimiento cercano por parte de los profesores y tutores, lo que facilita el aprendizaje y el éxito académico. Este enfoque individualizado es uno de los pilares para que los estudiantes puedan desarrollar su potencial y alcanzar sus metas profesionales con seguridad y respaldo.\n \n En resumen, la **Universidad Alfonso X el Sabio** es una opción educativa que destaca por su **enfoque práctico**, su **tecnología avanzada** y su **compromiso con la internacionalización y el apoyo al estudiante**. Gracias a su sólida red de contactos con empresas y su capacidad de adaptación a los cambios del mercado laboral, los graduados de la UAX están bien preparados para afrontar con éxito los retos del futuro."',
            rank_and_rec: {
              items: [
                {
                  type: 'Ranking',
                  description: 'Tercera mejor universidad de reciente creación',
                  source: 'según QS rankings'
                },
                {
                  type: 'Certificación',
                  description: 'Primera universidad privada certificada enVeterinaria de Madrid',
                  source: 'por la EAEVE'
                },
                {
                  type: 'Reconocimiento',
                  description: 'Universidad Top · Innovadora',
                  source: 'según Forbes Magazine'
                }
              ]
            },
            standsfor: {
              title: 'La Universidad Alfonso X el Sabio destaca por',
              items: [
                {
                  header: '1',
                  body: 'Campuses e instalaciones de primer nivel'
                },
                {
                  header: '2',
                  body: 'Su modelo educativo maker que permite trabajar con empresas y salir sabiendo hacer cosas'
                },
                {
                  header: '3',
                  body: 'Niveles de empleabilidad y prácticas en empresas de primer nivel'
                },
                {
                  header: '4',
                  body: 'Claustro de profesores único, con una relación de 5 alumnos por profesor y un 50% de los profesores doctores'
                }
              ]
            },
            institution_id: {
              url: 'https://www.uax.com',
              institutions_scholarships_courses: [
                {
                  scholarships_id: {
                    description: {
                      name: 'Becas de Excelencia Fundación Universidad Alfonso X el Sabio -Grado en Medicina',
                      description:
                        'Becas otorgadas por la Fundación Universidad Alfonso X el Sabio destinadas a premiar a los estudiantes del grado en medicina con excelentes calificaciones.\n**Dirigida a:**Estudiantes de primero o segundo del grado en Medicina de la UAX.\n**Importe de la Beca: Hasta el 100% de los honorarios de docencia. No incluye reserva y matrícula **Plazo de solicitud:**Entre el 1 de febrero y el 30 de junio de 2024.\nNOTA: Consultar las bases reguladoras.'
                    },
                    is_active: true,
                    academic_course: 'Curso 24/2',
                    languages_id: {
                      name: 'Spanish'
                    }
                  }
                }
              ],
              institution_campuses: [
                {
                  street_address: 'Avda. de la Universidad, 1',
                  city: 'Villanueva de la Cañada',
                  postal_code: '28691',
                  country: 'ES',
                  phone: '918109200',
                  images: 'https://campus.uax.es/central/modules/default/recuperar_clave/img/uax_logo_institucional.png',
                  campuses_trans: [
                    {
                      name: 'UAX Madrid Villanueva',
                      intro:
                        'El campus de la Universidad Alfonso X el Sabio (UAX) en Villanueva de la Cañada ofrece un entorno moderno y completo para el desarrollo académico y personal de los estudiantes. Ubicado en un área natural a solo 30 minutos de Madrid, el campus cuenta con más de 1.000.000 m2 e instalaciones de última generación, como laboratorios, clínicas, aulas tecnológicas y espacios deportivos. Con capacidad para 15.000 estudiantes. ',
                      description:
                        'Se trata de uno de los mejores campus de universidades privadas españolas. Ubicado a 30 minutos de Madrid centro, el campus, de estilo americano, cuenta con 1.000.000 de metros cuarados pensados para desarrollar un ambiente de colaboración, desarrollo y aprendizaje entre sus estudiantes. En el campus dispone de:\\n- 100 aulas y seminarios\\n11 laboratorios de investigacion y 45 laboratorios de sumulación\\n- Un hospital veterinario con más de 7.500 m2 de instalaciones\\n- Un hospital virtual de simulación\\n3 residencias con capacidad para más de 720 estudiantes\\nInstalaciones deportivas de primer nivel, incluyendo gimnasio, polideportivo, campos de fútbol, campo de rugby, pistas de tenis y padel, etc.\\n- Simulador de ingeniería aeronáutica'
                    }
                  ]
                },
                {
                  street_address: 'C. de Arapiles, 13',
                  city: 'Madrid',
                  postal_code: '28015',
                  country: 'ES',
                  phone: null,
                  images: 'https://campus.uax.es/central/modules/default/recuperar_clave/img/uax_logo_institucional.png',
                  campuses_trans: []
                },
                {
                  street_address: 'Camino de la Térmica, 90',
                  city: 'Málaga',
                  postal_code: '29004',
                  country: 'ES',
                  phone: null,
                  images: null,
                  campuses_trans: []
                },
                {
                  street_address: null,
                  city: null,
                  postal_code: null,
                  country: null,
                  phone: null,
                  images: null,
                  campuses_trans: []
                }
              ],
              logo: 'https://www.universidadyemprendimiento.es/images/universidad-emprendimiento/logo-universidad-y-emprendimiento-universidades-ok.svg',
              main_image:
                'https://www.allianz-partners.com/es_ES/sala-de-prensa/notas-de-prensa/noticias-2023/universidad-alfonso-x-el-sabio/_jcr_content/root/stage/stageimage.img.82.3360.png/1695802285840/4ad9e9a4e18a-sin-titulo-640-640-px-2-.png',
              courses: [
                {
                  course_id: {
                    course_trans: [
                      {
                        commercial_name: 'Máster en Business Analytics, Inteligencia Artificial & Machine Learning'
                      }
                    ],
                    is_official: false,
                    id: '1',
                    type: 'master',
                    duration: '10',
                    duration_class: 'months',
                    learning_format_id: [
                      {
                        learning_format_id: {
                          format_name: 'online'
                        }
                      }
                    ],
                    meta_tags: ['Top 5', 'Promo'],
                    images:
                      'https://www.shutterstock.com/shutterstock/photos/284687528/display_1500/stock-photo-master-word-cloud-education-concept-284687528.jpg',
                    tuition_price: [
                      {
                        date: '2024/01/06',
                        course: '25/26',
                        tuition_fee_o: '12100',
                        tuition_fee_d: 'NA',
                        currency: 'EUR',
                        code: 'PY',
                        discounts: false
                      }
                    ]
                  }
                }
              ]
            },
            header_title: 'Acerca de',
            header_rank_and_rec: 'Certificados y reconocimientos',
            header_standsfor: 'Top reasons to study here',
            header_type_and_taxonomy: 'Oferta educativa',
            header_courses: 'Másters destacados',
            header_scholarships: 'Becas y ayudas',
            header_details: [
              {
                number: 40,
                description: 'Master'
              },
              {
                number: 20,
                description: 'Master online'
              },
              {
                number: 3,
                description: 'Programas execute'
              },
              {
                number: 3850,
                description: 'Estudiantes de postgrado'
              },
              {
                number: 1250,
                description: 'Estudiantes internacionales'
              }
            ]
          }
        ]
      }
    }
  }
}
