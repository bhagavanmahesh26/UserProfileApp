import { useState, useEffect } from 'react'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import Header from './components/Header'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import { useLocalStorage } from './hooks/useLocalStorage'
import { seedDemoData } from './utils/demoData'

function App() {
  const [users, setUsers] = useLocalStorage('users', [])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingUser, setEditingUser] = useState(null)

  // Simulate loading state on initial load and seed demo data
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      // Seed demo data if no users exist
      if (users.length === 0) {
        seedDemoData()
        setUsers(JSON.parse(localStorage.getItem('users') || '[]'))
      }
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleAddUser = async (userData) => {
    try {
      setIsLoading(true)
      setError(null)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const newUser = {
        id: Date.now().toString(),
        ...userData,
        createdAt: new Date().toISOString()
      }
      
      setUsers(prev => [...prev, newUser])
      setShowForm(false)
    } catch (err) {
      setError('Failed to add user. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEditUser = async (userData) => {
    try {
      setIsLoading(true)
      setError(null)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setUsers(prev => prev.map(user => 
        user.id === editingUser.id 
          ? { ...user, ...userData, updatedAt: new Date().toISOString() }
          : user
      ))
      
      setEditingUser(null)
      setShowForm(false)
    } catch (err) {
      setError('Failed to update user. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteUser = async (userId) => {
    try {
      setIsLoading(true)
      setError(null)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 300))
      
      setUsers(prev => prev.filter(user => user.id !== userId))
    } catch (err) {
      setError('Failed to delete user. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEditClick = (user) => {
    setEditingUser(user)
    setShowForm(true)
  }

  const handleFormClose = () => {
    setShowForm(false)
    setEditingUser(null)
  }

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all user data? This action cannot be undone.')) {
      localStorage.removeItem('users')
      setUsers([])
    }
  }

  if (isLoading && users.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onAddUser={() => setShowForm(true)}
        userCount={users.length}
        onClearData={handleClearData}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <ErrorMessage 
            message={error} 
            onClose={() => setError(null)} 
          />
        )}
        
        <UserList 
          users={users}
          onEdit={handleEditClick}
          onDelete={handleDeleteUser}
          isLoading={isLoading}
        />
      </main>

      {showForm && (
        <UserForm
          user={editingUser}
          onSubmit={editingUser ? handleEditUser : handleAddUser}
          onClose={handleFormClose}
          isLoading={isLoading}
        />
      )}
    </div>
  )
}

export default App