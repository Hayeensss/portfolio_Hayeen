function TechnologyBadge({ tech }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      {tech}
    </span>
  );
}

export default function ProjectInfo({ title, description, technologies }) {
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 truncate">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <TechnologyBadge key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
}
