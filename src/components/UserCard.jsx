import { useState } from 'react'
import { 
  PencilIcon, 
  TrashIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

const UserCard = ({ user, onEdit, onDelete, isLoading }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const handleDelete = () => {
    onDelete(user.id)
    setShowDeleteConfirm(false)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-visible text-left min-w-0">
      {/* Header with avatar and actions */}
      <div className="p-6 pb-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                {user.firstName?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between">
              <div className="min-w-0 flex-1 pr-2 text-left">
                <h3 className="text-lg font-semibold text-gray-900 user-card-text text-left break-words">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="text-sm text-gray-500 user-card-text text-left user-card-job-title-single">
                  {user.jobTitle || 'No title'}
                </p>
              </div>
              <div className="flex items-center space-x-1 flex-shrink-0">
                <button
                  onClick={() => onEdit(user)}
                  disabled={isLoading}
                  className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200 disabled:opacity-50"
                  title="Edit user"
                >
                  <PencilIcon className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  disabled={isLoading}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 disabled:opacity-50"
                  title="Delete user"
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User details */}
      <div className="px-6 pb-4 space-y-3 text-left">
        {user.email && (
          <div className="flex items-start space-x-3 text-sm text-left">
            <EnvelopeIcon className="h-4 w-4 text-gray-400 flex-shrink-0 user-card-icon" />
            <span className="text-gray-600 break-all user-card-text text-left">{user.email}</span>
          </div>
        )}
        
        {user.phone && (
          <div className="flex items-start space-x-3 text-sm text-left">
            <PhoneIcon className="h-4 w-4 text-gray-400 flex-shrink-0 user-card-icon" />
            <span className="text-gray-600 user-card-text text-left">{user.phone}</span>
          </div>
        )}
        
        {user.location && (
          <div className="flex items-start space-x-3 text-sm text-left">
            <MapPinIcon className="h-4 w-4 text-gray-400 flex-shrink-0 user-card-icon" />
            <span className="text-gray-600 break-words user-card-text text-left">{user.location}</span>
          </div>
        )}
        
        {user.bio && (
          <div className="flex items-start space-x-3 text-sm text-left">
            <span className="text-gray-400 flex-shrink-0 user-card-icon font-bold">Bio:</span>
            <span className="text-gray-600 break-words user-card-text text-left">{user.bio}</span>
          </div>
        )}
        
        {user.createdAt && (
          <div className="flex items-start space-x-3 text-sm text-left">
            <CalendarIcon className="h-4 w-4 text-gray-400 flex-shrink-0 user-card-icon" />
            <span className="text-gray-600 user-card-text text-left">
              Added {formatDate(user.createdAt)}
            </span>
          </div>
        )}
      </div>

      {/* Delete confirmation modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center space-x-3 mb-4">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Delete User
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <strong>{user.firstName} {user.lastName}</strong>? 
              This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isLoading}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200 disabled:opacity-50"
              >
                {isLoading ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserCard
