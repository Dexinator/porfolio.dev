import {languages, defaultLang, routeTranslations } from './ui';

export function getLangFromUrl(url: URL): keyof typeof languages {
  const [, lang] = url.pathname.split('/');
  console.log("Extracted lang from URL:", lang); // Depuración

  if (lang && Object.keys(languages).includes(lang)) {
    console.log("Valid lang:", lang); // Depuración
    return lang as keyof typeof languages;
  }

  console.log("Using default lang:", defaultLang); // Depuración
  return defaultLang;
}

export function getTranslatedPath(url: URL, targetLang: keyof typeof languages): string {
  const currentLang = getLangFromUrl(url);
  const pathParts = url.pathname.split('/').filter(Boolean);

  // Remover el idioma actual del path
  if (pathParts[0] === currentLang) {
    pathParts.shift();
  }

  // Obtener la ruta actual (sin idioma)
  const currentRoute = pathParts[0] || '';

  // Traducir la ruta si existe traducción
  const translations = routeTranslations[currentLang];
  const translatedRoute = translations?.[currentRoute] ?? currentRoute;

  // Construir la nueva URL
  if (translatedRoute) {
    return `/${targetLang}/${translatedRoute}`;
  }
  return `/${targetLang}/`;
}