export interface TrainingCardProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

export interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export interface CardProps {
    children: React.ReactNode;
    className?: string;
}
