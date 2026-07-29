// One-time migration seed: the original hardcoded catalog, reshaped into
// the Firestore "products" + "sections" data model the admin dashboard reads.
// Used only by the admin's "Importer le catalogue initial" action.

export const SEED_SECTIONS = [
  { key: 'jus', label: 'Jus Classiques', tagline: 'pressés minute · glissez →', layout: 'row', visible: true, order: 0 },
  { key: 'gourmandes', label: 'Saveurs Gourmandes', tagline: 'onctueux & réconfortants · glissez →', layout: 'row', visible: true, order: 1 },
  { key: 'cocktails', label: 'Cocktails', tagline: 'mélanges signature · glissez →', layout: 'row', visible: true, order: 2 },
  { key: 'signature', label: 'Signature Tunisienne', tagline: 'le terroir revisité · glissez →', layout: 'row', visible: true, order: 3 },
  { key: 'vip', label: 'Premium VIP', tagline: "l'exception Moringa · glissez →", layout: 'row', visible: true, order: 4 },
  { key: 'coffrets', label: 'Coffrets Bien-Être', tagline: 'cadeaux & grandes occasions', layout: 'feature', visible: true, order: 5 },
];

const SIZED = [
  ['jc-citronnade', 'Citronnade', 'Citron frais', 'jus', 'assets/jus-citronnade.jpg', [1.4, 2.5, 4, 20]],
  ['jc-citronnade-menthe', 'Citronnade Menthe', 'Citron · menthe', 'jus', 'assets/jus-citronnade-menthe.jpg', [1.7, 3, 5.5, 27.5]],
  ['jc-citronnade-lim', 'Citronnade Lim', 'Citron vert', 'jus', 'assets/jus-citronnade-lim.jpg', [2, 4, 7, 35]],
  ['jc-citronnade-ananas', 'Citronnade Ananas', 'Citron · ananas', 'jus', 'assets/jus-citronnade-ananas.jpg', [2.5, 4.5, 8.5, 42.5]],
  ['jc-fraise', 'Fraise', 'Fraise', 'jus', 'assets/jus-fraise.jpg', [2, 3.5, 7, 35]],
  ['jc-fraise-framboise', 'Fraise Framboise', 'Fraise · framboise', 'jus', 'assets/jus-fraise-framboise.jpg', [3, 6, 12, 60]],
  ['jc-fraise-banane', 'Fraise Banane', 'Fraise · banane', 'jus', 'assets/jus-fraise-banane.jpg', [2.5, 4, 8.5, 42.5]],
  ['jc-peche', 'Pêche', 'Pêche', 'jus', 'assets/jus-peche.jpg', [2, 4, 8, 40]],
  ['jc-peche-banane', 'Pêche Banane', 'Pêche · banane', 'jus', 'assets/jus-peche-banane.jpg', [2.5, 4, 8, 40]],
  ['jc-peche-amandes', 'Pêche Amandes', 'Pêche · amandes', 'jus', 'assets/jus-peche-amandes.jpg', [2.5, 4.5, 9, 45]],
  ['jc-abricots', 'Abricots', 'Abricot', 'jus', 'assets/jus-abricots.jpg', [2, 4.5, 8, 40]],
  ['jc-pomme', 'Pomme', 'Pomme', 'jus', 'assets/jus-pomme.jpg', [2, 4, 8, 40]],
  ['jc-pomme-banane', 'Pomme Banane', 'Pomme · banane', 'jus', 'assets/jus-pomme-banane.jpg', [2.5, 5, 10, 50]],
  ['jc-pomme-banane-fs', 'Pomme Banane Fruits Secs', 'Pomme · banane · fruits secs', 'jus', 'assets/jus-pomme-banane-fruits-secs.jpg', [3, 5, 10, 50]],
  ['jc-orange', 'Orange', 'Orange', 'jus', 'assets/jus-orange.jpg', [2.5, 5, 10, 50]],
  ['jc-orange-banane', 'Orange Banane', 'Orange · banane', 'jus', 'assets/jus-orange-banane.jpg', [3, 5, 10, 50]],
  ['jc-figue', 'Figue', 'Figue', 'jus', 'assets/jus-figue.jpg', [3, 5, 10, 50]],
  ['jc-kiwi', 'Kiwi', 'Kiwi', 'jus', 'assets/jus-kiwi.jpg', [2.5, 5, 10, 50]],
  ['jc-kiwi-banane', 'Kiwi Banane', 'Kiwi · banane', 'jus', 'assets/jus-kiwi-banane.jpg', [2.5, 5, 10, 50]],
  ['jc-ananas', 'Ananas', 'Ananas', 'jus', 'assets/jus-ananas.jpg', [2.5, 5, 10, 50]],
  ['jc-ananas-banane', 'Ananas Banane', 'Ananas · banane', 'jus', 'assets/jus-ananas-banane.jpg', [2.5, 5, 10, 50]],
  ['jc-mangue', 'Mangue', 'Mangue', 'jus', 'assets/jus-mangue.jpg', [2.5, 5, 10, 50]],
  ['jc-mangue-banane', 'Mangue Banane', 'Mangue · banane', 'jus', 'assets/jus-mangue-banane.jpg', [2.5, 5, 10, 50]],
  ['jc-framboise', 'Framboise', 'Framboise', 'jus', 'assets/jus-framboise.jpg', [4, 8, 15, 75]],
  ['gm-cerise', 'Cerise Saveurs Gourmandes', 'Cerise', 'gourmandes', 'assets/gourmandes-cerise.jpg', [4, 8, 15, 75]],
  ['gm-chewinggum', 'Chewing Gum Chocolat Blanc', 'Chocolat blanc', 'gourmandes', 'assets/gourmandes-chewing-gum-choco-blanc.jpg', [3.5, 7, 14, 70]],
  ['gm-zgougou', 'Zgougou', 'Zgougou', 'gourmandes', 'assets/gourmandes-zgougou.jpg', [3.5, 7, 14, 70]],
  ['gm-cappuccino', 'Cappuccino', 'Café · lait', 'gourmandes', 'assets/gourmandes-cappuccino.jpg', [3.5, 7, 14, 70]],
  ['gm-noisette', 'Noisette', 'Noisette', 'gourmandes', 'assets/gourmandes-noisette.jpg', [4, 8, 16, 80]],
  ['gm-noisette-biscuits', 'Noisette Biscuits', 'Noisette · biscuits', 'gourmandes', 'assets/gourmandes-noisette-biscuits.jpg', [3.5, 7, 12, 60]],
  ['gm-chocolat-nutella', 'Chocolat Nutella', 'Chocolat · noisette', 'gourmandes', 'assets/gourmandes-chocolat-nutella.jpg', [3.5, 7, 14, 70]],
  ['gm-chocolat-ferrero', 'Chocolat Ferrero', 'Chocolat · noisette', 'gourmandes', 'assets/gourmandes-chocolat-ferrero.jpg', [4, 8, 16, 80]],
  ['gm-pistache', 'Pistache', 'Pistache', 'gourmandes', 'assets/gourmandes-pistache.jpg', [4, 8, 16, 80]],
  ['gm-banane-fs', 'Banane Fruits Secs', 'Banane · fruits secs', 'gourmandes', 'assets/gourmandes-banane-fruits-secs.jpg', [3, 6, 12, 60]],
  ['gm-rozata-pistaches', 'Rozata Pistaches', 'Rozata · pistache', 'gourmandes', 'assets/gourmandes-rozata-pistaches.jpg', [15, 30, 60, 300]],
  ['gm-rozata-amandes', 'Rozata Amandes', 'Rozata · amande', 'gourmandes', 'assets/gourmandes-rozata-amandes.jpg', [10, 20, 40, 200]],
  ['gm-rozata-noisettes', 'Rozata Noisettes', 'Rozata · noisette', 'gourmandes', 'assets/gourmandes-rozata-noisettes.jpg', [10, 20, 40, 200]],
  ['ck-tous-les-fruits', 'Tous les Fruits', 'Cocktail multifruits', 'cocktails', 'assets/cocktail-tous-les-fruits.jpg', [2.5, 5, 10, 50]],
  ['ck-myrtille', 'Myrtille', 'Myrtille', 'cocktails', 'assets/cocktail-myrtille.jpg', [2.5, 5, 10, 50]],
  ['ck-framboise', 'Framboise', 'Framboise', 'cocktails', 'assets/cocktail-framboise.jpg', [2.5, 5, 10, 50]],
  ['ck-dattes-pomme-noisette-amandes', 'Dattes Pomme Noisette Amandes', 'Dattes · pomme · noisette · amandes', 'cocktails', 'assets/cocktail-dattes-pomme-noisette-amandes.jpg', [2.5, 5, 10, 50]],
  ['ck-fraise-banane-orange', 'Fraise Banane Orange', 'Fraise · banane · orange', 'cocktails', 'assets/cocktail-fraise-banane-orange.jpg', [2.5, 5, 10, 50]],
  ['ck-framboise-fraise-banane', 'Framboise Fraise Banane', 'Framboise · fraise · banane', 'cocktails', 'assets/cocktail-framboise-fraise-banane.jpg', [2.5, 5, 10, 50]],
  ['ck-dattes-banane-pomme', 'Dattes Banane Pomme', 'Dattes · banane · pomme', 'cocktails', 'assets/cocktail-dattes-banane-pomme.jpg', [2.5, 5, 10, 50]],
];

const SINGLE = [
  ['sg-bsissa', 'Bsissa Shake', 'Bsissa · lait · dattes', 'signature', 10, 'TERROIR'],
  ['sg-zrir', 'Zrir Smoothie', 'Zrir · lait · miel', 'signature', 10.5, 'TERROIR'],
  ['sg-dattes', 'Shake Dattes & Amandes', 'Dattes · amandes · lait', 'signature', 11, null],
  ['sg-sahel', 'Énergie du Sahel', 'Amande · datte · miel', 'signature', 11, null],
  ['sg-tunisien', 'Cocktail Tunisien', 'Orange · dattes · miel', 'signature', 10, null],
  ['sg-caroube', 'Caroube Naturelle', 'Caroube · lait', 'signature', 9.5, null],
  ['vp-grenade', 'Grenade Premium', 'Jus de grenade frais', 'vip', 12, 'VIP'],
  ['vp-figue', 'Figue de Barbarie', 'Jus de figue de barbarie', 'vip', 12, 'VIP'],
  ['vp-avocat', 'Avocat Fruits Secs Deluxe', 'Avocat · amandes · noisettes · pistaches', 'vip', 13, 'VIP'],
  ['vp-signature', 'Cocktail Moringa Signature', 'Moringa · pomme · kiwi · citron', 'vip', 13, 'VIP'],
  ['vp-tropical', 'Cocktail Tropical', 'Mangue · ananas · orange', 'vip', 12, null],
];

const FEATURES = [
  { legacyId: 'coffret-gourmand', section: 'coffrets', name: 'Coffrets gourmands', sub: 'Cadeaux', description: 'Jus, miel, dattes & fruits secs — pour vos plus belles occasions.', ctaLabel: 'Composer', imageUrl: '', colorFrom: '#0E5E3E', colorTo: '#19A85B', badge: null, order: 0 },
  { legacyId: 'coffret-vip', section: 'coffrets', name: 'Coffret VIP', sub: 'Édition luxe', description: 'Sélection premium, packaging soigné, carte personnalisée.', ctaLabel: 'Découvrir', imageUrl: '', colorFrom: '#9B3CC9', colorTo: '#F0356E', badge: 'VIP', order: 1 },
];

export function buildSeedProducts() {
  const out = [];
  SIZED.forEach(([id, name, sub, section, img, prices], i) => {
    out.push({ legacyId: id, section, name, sub, imageUrl: img, badge: null, pricingType: 'sizes', sizePrices: prices, price: null, description: null, ctaLabel: null, colorFrom: null, colorTo: null, hidden: false, order: i });
  });
  SINGLE.forEach(([id, name, sub, section, price, badge], i) => {
    out.push({ legacyId: id, section, name, sub, imageUrl: '', badge, pricingType: 'single', sizePrices: null, price, description: null, ctaLabel: null, colorFrom: null, colorTo: null, hidden: false, order: i });
  });
  FEATURES.forEach((f, i) => {
    out.push({ legacyId: f.legacyId, section: f.section, name: f.name, sub: f.sub, imageUrl: f.imageUrl, badge: f.badge, pricingType: 'feature', sizePrices: null, price: null, description: f.description, ctaLabel: f.ctaLabel, colorFrom: f.colorFrom, colorTo: f.colorTo, hidden: false, order: i });
  });
  return out;
}
