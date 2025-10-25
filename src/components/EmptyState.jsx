import { UserPlusIcon } from '@heroicons/react/24/outline'

const EmptyState = () => {
  return (
    <div className="text-center py-12">
      <div className="mx-auto h-24 w-24 text-gray-400">
        <UserPlusIcon className="h-full w-full" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">No users yet</h3>
      <p className="mt-2 text-sm text-gray-500">
        Get started by adding your first user profile.
      </p>
      <div className="mt-6">
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
        >
          <UserPlusIcon className="h-4 w-4 mr-2" />
          Add User
        </button>
      </div>
    </div>
  )
}

export default EmptyState
