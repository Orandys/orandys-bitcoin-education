// Utilitaire pour gérer les assets après migration depuis Figma Make
// Remplacez les URLs par vos vrais assets une fois téléchargés

export const assets = {
  // Logo principal Orandys (circulaire)
  orandysLogo: '/orandys-logo.png', // À placer dans /public/
  
  // Images pour l'évolution de la monnaie (Module 1, Leçon 2)
  moneyEvolution: {
    antiquity: '/images/money-antiquity.jpg',      // Coquillages et sel
    middleAges: '/images/money-medieval.jpg',      // Coquillages et pièces
    renaissance: '/images/money-renaissance.jpg'   // Pièces et billets
  },
  
  // Placeholder images Unsplash (en attendant les vrais assets)
  placeholders: {
    bitcoin: 'https://images.unsplash.com/photo-1518544866330-4e4815c34095?w=400',
    blockchain: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400',
    security: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400',
    economics: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400'
  }
};

// Helper pour générer des URLs d'images de fallback
export const getAssetUrl = (assetKey: string, fallbackUrl?: string) => {
  // En production, retourner l'asset local
  // En développement, utiliser le fallback si l'asset n'existe pas
  
  if (typeof window !== 'undefined') {
    // Côté client, essayer l'asset local d'abord
    const img = new Image();
    img.src = assetKey;
    
    return new Promise((resolve) => {
      img.onload = () => resolve(assetKey);
      img.onerror = () => resolve(fallbackUrl || assetKey);
    });
  }
  
  return assetKey;
};

// Configuration pour remplacer les assets Figma
export const figmaAssetMapping = {
  'figma:asset/c61e6dd123bffdb74bc6b36c0f4d0f50700a8333.png': assets.orandysLogo,
  // Ajoutez ici d'autres mappings selon vos besoins
};