import orandysLogo from 'figma:asset/c61e6dd123bffdb74bc6b36c0f4d0f50700a8333.png';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function Logo({ size = 'small', className = '' }: LogoProps) {
  const sizeClasses = {
    small: 'w-5 h-5',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden ${className}`}>
      <img 
        src={orandysLogo} 
        alt="Orandys Logo" 
        className="w-full h-full object-cover"
      />
    </div>
  );
}