import Link from 'next/link';

const JobCard = ({ title, description, imageUrl,slug }) => {
  return (
    <Link href={`/career/${slug}`}>
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
          {/* Background Image */}
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x320/0f172a/ffffff?text=Image+Placeholder";
            }}
          />
    
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gray-900/40" />
    
          {/* External Link Icon (Green Square with Arrow) */}
          <div
            className="absolute top-4 right-4 p-2 bg-green-500 rounded-lg shadow-xl hover:bg-green-400 transition-colors"
            aria-label={`Apply for ${title}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
    
          {/* Text Content at the Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-gray-900/80 to-transparent">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm opacity-90 leading-relaxed line-clamp-1">
              {description}
            </p>
          </div>
        </div>
      </Link>
  )
}

export default JobCard