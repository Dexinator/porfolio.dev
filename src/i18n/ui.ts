export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

// Mapeo de rutas entre idiomas
// Las claves son las rutas en español, los valores son las rutas en inglés
export const routeTranslations: Record<string, Record<string, string>> = {
  es: {
    '': '',
    'proyectos': 'projects',
    'steam': 'steam',
  },
  en: {
    '': '',
    'projects': 'proyectos',
    'steam': 'steam',
  }
};