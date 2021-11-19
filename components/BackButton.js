import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/solid";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="inline-flex items-center px-3 py-2 text-sm leading-4 font-medium text-gray-700 hover:text-gray-900"
      type="button"
      onClick={() => router.back()}
    >
      <ChevronLeftIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
      Back
    </button>
  );
}
