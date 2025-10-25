import { PlusIcon, UsersIcon, TrashIcon } from '@heroicons/react/24/outline'

const Header = ({ onAddUser, userCount, onClearData }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <UsersIcon className="h-8 w-8 text-primary-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                User Profiles
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {userCount} {userCount === 1 ? 'user' : 'users'} total
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {userCount > 0 && (
              <button
                onClick={onClearData}
                className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                title="Clear all data"
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={onAddUser}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              Add User
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
