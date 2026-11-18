/**
 * Página "Política de privacidad" (/politica-de-privacidad/).
 * Texto tomado de https://probarranquilla.org/politicas-tratamiento/ (noviembre 2026), sin cambios de
 * redacción: solo se unieron dos frases cortadas por saltos de página del documento original
 * ("…sindicatos, organizaciones sociales…" y "…de los datos e información del titular.").
 */
export type PolicyItem = { label?: string; text: string };
export type PolicyBlock = { type: 'p'; text: string } | { type: 'list'; items: PolicyItem[] };
export type PolicySection = { id: string; title: string; blocks: PolicyBlock[] };

export const privacyHero = {
  // Pendiente: foto propia del hero (mientras tanto se ve el placeholder)
  image: { src: '/assets/hero/politica-de-privacidad.jpg', alt: 'Barranquilla' },
  title: ['Política de privacidad'],
  description: ['Política para el tratamiento y protección de datos personales'],
};

export const privacyIntro: string[] = [
  "PROBARRANQUILLA, en cumplimiento de las normas legales vigentes y con el animo de mantener los mayores estándares en la protección de la información que se recopila, con el fin de desarrollar su objeto social de promoción e internacionalización de Barranquilla y el Atlántico, así como la atracción de inversión extranjera directa e indirecta, la promoción del territorio y el desarrollo del conocimiento establece la presente política de tratamiento y protección de datos.",
  "En el marco de política, PROBARRANQUILLA se compromete a salvaguardar la privacidad de la información personal recolectada y para ellos se adoptan las siguientes practicas que garantizarán los derechos fundamentales de las personas naturales de las que legalmente se obtenga información."
];

export const privacySections: PolicySection[] = [
  {
    "id": "definiciones",
    "title": "Definiciones",
    "blocks": [
      {
        "type": "list",
        "items": [
          {
            "label": "Autorización",
            "text": "Se entiende como el consentimiento previo, expreso e informado del titular para llevar a cabo el tratamiento de datos personales."
          },
          {
            "label": "Aviso de privacidad",
            "text": "Comunicación verbal o escrita generada por el responsable, dirigida al titular para el tratamiento de sus datos personales, mediante la cual se le informa acerca de la existencia de las políticas de tratamiento de información que le serán aplicables, la forma de acceder a las mismas y las finalidades del tratamiento que se pretende dar a los datos personales."
          },
          {
            "label": "Dato público",
            "text": "Es el dato que no sea semiprivado, privado o sensible. Son considerados datos públicos, entre otros, los datos relativos al estado civil de las personas, a su profesión u oficio y a su calidad de comerciante o de servidor público. Por su naturaleza, los datos públicos pueden estar contenidos, entre otros, en registros públicos, documentos públicos, gacetas y boletines oficiales y sentencias judiciales debidamente ejecutoriadas que no estén sometidas a reserva."
          },
          {
            "label": "Datos sensibles",
            "text": "Se entiende por datos sensibles aquellos que afectan la intimidad del titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías de partidos políticos de oposición, así como los datos relativos a la salud, la vida sexual y los datos biométricos."
          },
          {
            "label": "Responsable",
            "text": "Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el Tratamiento de los datos."
          },
          {
            "label": "Encargado del Tratamiento",
            "text": "Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del Responsable del Tratamiento."
          },
          {
            "label": "Titular",
            "text": "Es la persona natural o jurídica cuyos datos personales sean objeto de tratamiento."
          },
          {
            "label": "Tratamiento",
            "text": "Cualquier clase de acción relacionada con la recolección, uso, almacenamiento, transferencia, circulación, modificación, supresión, de los datos e información del titular."
          },
          {
            "label": "Transferencia",
            "text": "La transferencia de datos tiene lugar cuando el responsable y/o responsable del tratamiento de datos personales, ubicado en Colombia, envía la información o los datos personales a un receptor, que a su vez es responsable del tratamiento y se encuentra dentro o fuera del país."
          },
          {
            "label": "Transmisión",
            "text": "Tratamiento de datos personales que implica la comunicación de los mismos dentro o fuera del territorio de la república de Colombia cuando tenga por objeto la realización de un tratamiento por el encargado por cuenta del responsable."
          }
        ]
      }
    ]
  },
  {
    "id": "principios",
    "title": "Principios",
    "blocks": [
      {
        "type": "p",
        "text": "Para efectos de garantizar la protección de datos personales, PROBARRANQUILLA aplicará de manera armónica e integral los siguientes principios, a la luz de los cuales se deberá realizar el tratamiento, transferencia y transmisión de datos personales:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Principio de legalidad en materia de tratamiento de datos",
            "text": "El Tratamiento a que se refiere la Ley 1581 de 2012 es una actividad reglada que debe sujetarse a lo establecido en ella y en las demás disposiciones que la desarrollen;"
          },
          {
            "label": "Principio de finalidad",
            "text": "El tratamiento debe obedecer a una finalidad legítima, de acuerdo con la Constitución y la Ley, la cual debe ser informada al Titular;"
          },
          {
            "label": "Principio de libertad",
            "text": "El Tratamiento sólo puede ejercerse con el consentimiento, previo, expreso e informado del Titular. Los datos personales no podrán ser obtenidos o divulgados sin previa autorización, o en ausencia de mandato legal o judicial que releve el consentimiento;"
          },
          {
            "label": "Principio de veracidad o calidad",
            "text": "La información sujeta a Tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible. Se prohíbe el Tratamiento de datos parciales, incompletos, fraccionados o que induzcan a error;"
          },
          {
            "label": "Principio de transparencia",
            "text": "En el Tratamiento debe garantizarse el derecho del Titular a obtener del Responsable del Tratamiento o del Encargado del Tratamiento, en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernen;"
          },
          {
            "label": "Principio de acceso y circulación restringida",
            "text": "El Tratamiento se sujeta a los límites que se derivan de la naturaleza de los datos personales, de las disposiciones de la Ley 1581 de 2012 y la Constitución. En este sentido, el Tratamiento sólo podrá hacerse por personas autorizadas por el Titular y/o por las personas previstas en la ley mencionada anteriormente; Los datos personales, salvo la información pública, no podrán estar disponibles en internet u otros medios de divulgación o comunicación masiva, salvo que el acceso sea técnicamente controlable para brindar un conocimiento restringido sólo a los Titulares o terceros autorizados conforme a la ley;"
          },
          {
            "label": "Principio de seguridad",
            "text": "La información sujeta a Tratamiento por el Responsable del Tratamiento o Encargado del Tratamiento a que se refiere la Ley 1581 de 2012, se deberá manejar con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento;"
          },
          {
            "label": "Principio de confidencialidad",
            "text": "Todas las personas que intervengan en el Tratamiento de datos personales que no tengan la naturaleza de públicos están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el Tratamiento, pudiendo sólo realizar suministro o comunicación de datos personales cuando ello corresponda al desarrollo de las actividades autorizadas en la Ley 1581 de 2012 y en los términos de la misma."
          }
        ]
      }
    ]
  },
  {
    "id": "tratamiento-y-finalidad-de-la-informacion",
    "title": "Tratamiento y finalidad de la información",
    "blocks": [
      {
        "type": "p",
        "text": "La política para el tratamiento de datos personales tiene como propósito dar cumplimiento a lo señalado por la Ley 1581 de 2012, y el Decreto Reglamentario 1377 de 2013, en cuanto al tratamiento de datos e información personal de las personas naturales que tengan vinculación directa o indirecta con la compañía. PROBARRANQUILLA recopilará, usará, modificará, empleará, mantendrá, transmitirá a través de correo electrónico, correspondencia física, mensajes de texto, llamadas y en general cualquier medio que permita la recolección de información, tratará la información y datos personales suministrados por el TITULAR, con los siguientes propósitos:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Respecto a los datos personales de los miembros de PROBARRANQUILLA",
            "text": "La información tendrá como finalidad el envío de invitaciones a eventos, convocatorias para la Asamblea Anual de Miembros y reuniones de Consejo Directivo. De igual forma, se usará para la socialización de información de interés relativa a la actividad de PROBARRANQUILLA y los Miembros de la Fundación."
          },
          {
            "label": "Respecto de los datos personales para eventos",
            "text": "Tendrá como finalidad el envío de invitaciones, socialización y en general cualquier forma masiva o personalizada de publicidad de eventos organizados y/o apoyados por PROBARRANQUILLA."
          },
          {
            "label": "Respecto de los datos de inversionistas",
            "text": "Tendrá como finalidad, recopilar toda la información de los posibles inversionistas interesados en iniciar actividades en Barranquilla, el Atlántico o cualquier otro país y que permita a los miembros de PROBARRANQUILLA apoyar a inversionistas en su actividad de desarrollo de negocios en la ciudad y/o el departamento, además del relacionamiento con posibles aliados y proveedores y el envío de información relevante."
          },
          {
            "label": "Respecto de los datos de los empleados",
            "text": "Tendrá como finalidad la gestión de afiliaciones al sistema de seguridad social, procesos de contratación, generación de comunicaciones de interés para el empleado y en general el cumplimiento de las normas legales relativas a Derecho Laboral y Seguridad Social."
          },
          {
            "label": "Respecto a los datos personales para Relaciones Públicas",
            "text": "Tendrá como finalidad la recopilación de información para el desarrollo de actividades de relaciones publicas, nacionales o internacionales, relacionadas con el objeto social de PROBARANQUILLA"
          },
          {
            "label": "Respecto de los datos personales de empresarios",
            "text": "Tendrá como finalidad la consulta por parte de interesados y la generación de información relevante para potenciales inversionistas y empresarios."
          }
        ]
      }
    ]
  },
  {
    "id": "derechos-del-titular-de-la-informacion",
    "title": "Derechos del titular de la información",
    "blocks": [
      {
        "type": "p",
        "text": "De acuerdo con lo contemplado por la normatividad vigente aplicable en materia de protección de datos, los siguientes son los derechos de los titulares de los datos personales:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Derecho de acceso",
            "text": "Acceder a los datos personales que estén bajo el control del responsable para efectos de consultarlos de manera gratuita, y cada vez que existan modificaciones sustanciales de las Políticas de Tratamiento de la Información que motiven nuevas consultas;"
          },
          {
            "label": "Derecho de actualización, rectificación y supresión",
            "text": "Conocer, actualizar y rectificar sus datos personales, frente al Responsable del Tratamiento. Este derecho se podrá ejercer, entre otros frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo Tratamiento esté expresamente prohibido o no haya sido autorizado, en virtud del cual podrá solicitar la actualización, rectificación y/o supresión de los datos personales objeto del tratamiento, de tal manera que se satisfagan los propósitos del tratamiento;"
          },
          {
            "text": "Derecho a ser informado por el Responsable del Tratamiento, previa solicitud, respecto del uso que le ha dado a sus datos personales;"
          },
          {
            "text": "Solicitar prueba de la autorización otorgada al Responsable del Tratamiento salvo cuando expresamente se exceptúa como requisito para el Tratamiento, de conformidad con lo previsto en el artículo 10 de la Ley 1581 de 2012;"
          },
          {
            "text": "Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la Ley y las demás normas que la modifiquen, adicionen o complementen;"
          },
          {
            "text": "Revocar la autorización y/o solicitar la supresión del dato cuando en el Tratamiento no se respeten los principios, derechos y garantías constitucionales y legales. La revocatoria y/o supresión procederá cuando la Superintendencia de Industria y Comercio haya determinado que en el Tratamiento el Responsable ha incurrido en conductas contrarias a la Ley y la Constitución."
          }
        ]
      },
      {
        "type": "p",
        "text": "Estos derechos podrán ser ejercidos por el titular de los derechos, sus causahabientes, representantes o apoderados y los que la ley indique."
      }
    ]
  },
  {
    "id": "deberes-del-responsable-del-tratamiento-de-datos",
    "title": "Deberes del responsable del tratamiento de datos personales",
    "blocks": [
      {
        "type": "p",
        "text": "PROBARRANQUILLA reconoce la titularidad que de los datos personales ostentan las personas, y en consecuencia ellas de manera exclusiva pueden decidir sobre los mismos. Por lo tanto, PROBARRANQUILLA utilizará los datos personales para el cumplimiento de las finalidades autorizadas expresamente por el titular o por las normas vigentes."
      },
      {
        "type": "p",
        "text": "En el tratamiento y protección de datos personales, PROBARRANQUILLA tendrá los siguientes deberes, sin perjuicio de otros previstos en las disposiciones que regulen o lleguen a regular esta materia:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del derecho del habeas data;"
          },
          {
            "text": "Solicitar y conservar, en las condiciones previstas en la ley, copia de la respectiva autorización otorgada por el titular;"
          },
          {
            "text": "Informar debidamente al Titular sobre la finalidad de la recolección y los derechos que le asisten por virtud de la autorización otorgada;"
          },
          {
            "text": "Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento;"
          },
          {
            "text": "Garantizar que la información sea veraz, completa, exacta, actualizada, comprobable y comprensible;"
          },
          {
            "text": "Actualizar oportunamente la información, atendiendo de esta forma todas las novedades respecto de los datos del titular. Adicionalmente se deberán implementar todas las medidas necesarias para que la información se mantenga actualizada;"
          },
          {
            "text": "Rectificar la información cuando sea incorrecta y comunicar lo pertinente al Responsable del Tratamiento;"
          },
          {
            "text": "Tramitar las consultas y reclamos formulados en los términos señalados en la ley;"
          },
          {
            "text": "Identificar cuando determinada información se encuentre en discusión por parte del titular;"
          },
          {
            "text": "Informar a solicitud del titular sobre el uso dado a sus datos;"
          },
          {
            "text": "Informar a la autoridad de protección de datos cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los titulares;"
          },
          {
            "text": "Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industria y Comercio;"
          },
          {
            "text": "Velar por el uso adecuado de los datos personales de los niños, niñas y adolescentes, en aquellos casos en que se haya autorizado el tratamiento de sus datos;"
          },
          {
            "text": "Registrar en la base de datos la leyenda “reclamo en trámite” en la forma en que se regula en la ley;"
          },
          {
            "text": "Insertar en la base de datos la leyenda “información en discusión judicial” una vez notificado por parte de la autoridad competente sobre procesos judiciales relacionados con la calidad del dato personal;"
          },
          {
            "text": "Abstenerse de circular información que esté siendo controvertida por el Titular y cuyo bloqueo haya sido ordenado por la Superintendencia de Industria y Comercio;"
          },
          {
            "text": "Permitir el acceso a la información únicamente a las personas que pueden tener acceso a ella;"
          },
          {
            "text": "Usar los datos personales del titular solo para aquellas finalidades para las que se encuentre facultada debidamente y respetando en todo caso la normatividad vigente sobre protección de datos personales;"
          }
        ]
      }
    ]
  },
  {
    "id": "autorizacion-y-consentimiento-del-titular",
    "title": "Autorización y consentimiento del titular",
    "blocks": [
      {
        "type": "p",
        "text": "PROBARRANQUILLA deberá obtener autorización de los titulares de la información, de forma expresa, informada y previa, a través de los mecanismos que se dispongan para ellos, siempre poniendo en conocimiento al titular sobre la política de tratamiento de datos en donde se podrán verificar sus derechos. Dicha recolección se podrá realizar de la siguiente forma:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "A través de expresión de voluntad en medio magnético o físico, ya sea a través del diligenciamiento de un formato de autorización para el Tratamiento de Datos Personales determinado por LA COMPAÑÍA o en cualquier documento en el que se de autorización para la recolección de información."
          },
          {
            "text": "De forma oral, a través de cualquier medio electrónico o telefónico."
          },
          {
            "text": "Mediante la aceptación de los Términos y Condiciones de una actividad dentro de los cuales se requiera la autorización de los titulares para Tratamiento de sus Datos Personales."
          }
        ]
      }
    ]
  },
  {
    "id": "procedimiento-para-la-atencion-de-consultas-recl",
    "title": "Procedimiento para la atención de consultas, reclamos, peticiones de rectificación, actualización y suspensión de datos",
    "blocks": [
      {
        "type": "p",
        "text": "De acuerdo con los postulados legales y los principios que rigen la presente Política de Protección de Datos, los titulares de la información tienen derecho a acceder a su información, rectificar y actualizarla en caso de que la misma no corresponda a la realidad, así como también a solicitar la eliminación de la información recolectada u oponerse a su recolección."
      },
      {
        "type": "p",
        "text": "Para tales fines PROBARRANQUILLA pone a disposición de los titulares, el siguiente procedimiento el cual también podrá iniciarse a través de apoderado:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "El titular o su representante, podrá ejercer sus derechos a través de peticiones o consultas las cuales serán dirigidas a la dirección Calle 77B # 57-141 oficina 305 (Barranquilla), al correo electrónico info@probarranquilla.org"
          },
          {
            "text": "La consulta deberá contener como mínimo, el nombre del titular o la calidad en la que realiza la actuación, con el respectivo documento que pruebe su calidad, dirección donde recibirá notificaciones y la descripción clara de la petición. En caso de que no resulte la petición clara PROBARRANQUILLA deberá requerir al titular en un término no mayor a 5 días luego de recibida la solicitud. Transcurridos dos (2) meses sin que el titular aclare la solicitud, se entenderá que el mismo desiste de la consulta."
          },
          {
            "text": "Recibida la consulta en legal forma, PROBARRANQUILLA dará respuesta en un término no mayor a diez (10) días hábiles. PROBARRANQUILLA solicitará una extensión que no superará cinco (5) días hábiles, en caso de no ser posible dar respuesta en el término indicado, en dicho caso se le informará al solicitante indicando las razones de la demora."
          }
        ]
      }
    ]
  },
  {
    "id": "responsable-y-encargado-del-tratamiento-de-datos",
    "title": "Responsable y encargado del tratamiento de datos personales",
    "blocks": [
      {
        "type": "p",
        "text": "PROBARRANQUILLA será la responsable del tratamiento de los datos personales, el área/departamento de Recursos Humanos será el encargado de la administración y del tratamiento de los datos personales por cuenta de PROBARRANQUILLA."
      }
    ]
  },
  {
    "id": "seguridad-de-la-informacion-y-medidas-de-segurid",
    "title": "Seguridad de la información y medidas de seguridad",
    "blocks": [
      {
        "type": "p",
        "text": "PROBARRANQUILLA, en estricta aplicación del Principio de Seguridad en el Tratamiento de Datos Personales, proporcionará las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento."
      }
    ]
  },
  {
    "id": "transferencia-transmision-y-revelacion-de-datos",
    "title": "Transferencia, transmisión y revelación de datos personales",
    "blocks": [
      {
        "type": "p",
        "text": "PROBARRANQUILLA podrá revelar los datos personales sobre los cuales realiza el tratamiento, para su utilización y tratamiento conforme a esta Política de Protección de Datos Personales, previa autorización por parte del propietario de los datos."
      }
    ]
  },
  {
    "id": "legislacion-aplicable",
    "title": "Legislación aplicable",
    "blocks": [
      {
        "type": "p",
        "text": "Esta Política de Protección de Datos Personales, se rige por lo dispuesto en la legislación vigente sobre protección de los Datos Personales a los que se refiere el Artículo 15 de la Constitución Política de Colombia, la Ley 1581 de 201, el Decreto 1377 de 2013 y demás normas que la modifiquen deroguen o sustituyan."
      }
    ]
  },
  {
    "id": "vigencia",
    "title": "Vigencia",
    "blocks": [
      {
        "type": "p",
        "text": "Esta Política de Protección de Datos Personales está vigente a partir del 1 de Junio de 2018."
      }
    ]
  }
];
