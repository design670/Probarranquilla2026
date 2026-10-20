/**
 * Formulario que se pide antes de cualquier descarga (boletines, guías, etc.).
 * `endpoint: null` = destino de los datos pendiente (ver PENDIENTES.md):
 * el documento se entrega igual, pero los datos no se guardan en ningún lado.
 */
export const downloadForm = {
  endpoint: null as string | null,
  title: 'Descarga el documento',
  intro: 'Déjanos tus datos para acceder a la publicación.',
  fields: {
    name: { label: 'Nombre', autoComplete: 'name', type: 'text' },
    email: { label: 'Correo', autoComplete: 'email', type: 'email' },
    organization: { label: 'Organización', autoComplete: 'organization', type: 'text' },
    city: { label: 'Ciudad', autoComplete: 'address-level2', type: 'text' },
  },
  policy: {
    label: 'Revisa nuestra política de tratamiento de datos',
    href: 'https://probarranquilla.org/politicas-tratamiento/',
    question: '¿Aceptas la política de tratamiento de datos?',
    yes: 'Sí',
    no: 'No',
  },
  submit: 'Descargar PDF',
} as const;
