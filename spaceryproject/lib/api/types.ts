export interface Type {
  id: number;
  nom_type: string;
}

export interface Lieu {
  id: number;
  nom: string;
  rue: string;
  code_postal: string;
  ville: string;
  pays: string;
  lat_long?: number;
  payant: boolean;
  description: string;
  image_lieu: string;
  site_web?: string;
  horaires?: string;
  type: Type;
}

export interface Role {
  id: number;
  nom_role: string;
}

export interface Utilisateur {
  id: number;
  nom_utilisateur: string;
  prenom_utilisateur: string;
  email_utilisateur: string;
  status: boolean;
  image_profil?: string;
  role: Role;
}

export interface Parcours {
  id: number;
  titre: string;
  description_parcours: string;
  image_parcours: string;
  duree_estime?: string;
  date_creation: string;
  utilisateur: {
    id: number;
    nom: string;
    prenom: string;
  };
  lieux?: Array<{
    id: number;
    nom: string;
    ville: string;
  }>;
}
