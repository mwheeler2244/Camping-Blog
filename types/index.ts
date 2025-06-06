export interface Destination {
  id: string;
  name: string;
  location: string;
  rating: number;
  difficulty: string;
  features: string[];
  image: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  planningInfo: string;
}

export interface StarRatingProps {
  rating: number;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: Destination | null;
}

export interface DestinationCardProps {
  destination: Destination;
  onClick: (destination: Destination) => void;
}

export interface NavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export interface SocialLink {
  icon: any;
  name: string;
  url: string;
}
