export function routeToTitle(path) {
  if (!path) return '';

  const trimmed = path.replace(/^\/+/, '');
  if (!trimmed) return 'Home'; 

  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

