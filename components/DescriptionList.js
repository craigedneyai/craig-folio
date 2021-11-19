export default function DescriptionList({ title, description }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <DescriptionListHeader title={title} description={description} />
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0"> </div>
    </div>
  );
}

function DescriptionListHeader({ title, description }) {
  return (
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">{description}</p>
    </div>
  );
}
