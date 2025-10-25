import UserCard from './UserCard'
import EmptyState from './EmptyState'
import LoadingSpinner from './LoadingSpinner'

const UserList = ({ users, onEdit, onDelete, isLoading }) => {
  if (isLoading && users.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner />
      </div>
    )
  }

  if (users.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  )
}

export default UserList
