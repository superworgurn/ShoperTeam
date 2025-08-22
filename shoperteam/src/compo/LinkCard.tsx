import React from 'react';

interface LinkCardProps {
  title: string;
  url: string;
  description?: string;
  icon?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, url, description, icon }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div 
      className="bg-white p-5 rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center">
        {icon && (
          <div className="mr-4 text-2xl text-blue-600">{icon}</div>
        )}
        <div>
          <h3 className="font-semibold text-blue-800 text-lg">{title}</h3>
          {description && (
            <p className="text-sm text-blue-600 mt-1">{description}</p>
          )}
        </div>
        <div className="ml-auto text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;