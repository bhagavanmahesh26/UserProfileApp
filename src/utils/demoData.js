// Demo data for testing the application
export const demoUsers = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    jobTitle: 'Software Engineer',
    location: 'San Francisco, CA',
    bio: 'Passionate software engineer with 5+ years of experience in full-stack development. Love working with React and Node.js.',
    createdAt: '2024-01-15T10:30:00.000Z'
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    jobTitle: 'Product Manager',
    location: 'New York, NY',
    bio: 'Product manager with a focus on user experience and data-driven decision making. MBA from Stanford.',
    createdAt: '2024-01-20T14:15:00.000Z'
  },
  {
    id: '3',
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@example.com',
    phone: '+1 (555) 456-7890',
    jobTitle: 'UX Designer',
    location: 'Seattle, WA',
    bio: 'Creative UX designer with expertise in user research and interface design. Former graphic designer turned digital.',
    createdAt: '2024-02-01T09:45:00.000Z'
  },
  {
    id: '4',
    firstName: 'Sarah',
    lastName: 'Wilson',
    email: 'sarah.wilson@example.com',
    phone: '+1 (555) 321-0987',
    jobTitle: 'Data Scientist',
    location: 'Austin, TX',
    bio: 'Data scientist specializing in machine learning and statistical analysis. PhD in Computer Science from MIT.',
    createdAt: '2024-02-10T16:20:00.000Z'
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Brown',
    email: 'david.brown@example.com',
    phone: '+1 (555) 654-3210',
    jobTitle: 'DevOps Engineer',
    location: 'Denver, CO',
    bio: 'DevOps engineer with expertise in cloud infrastructure and automation. AWS and Kubernetes certified.',
    createdAt: '2024-02-15T11:30:00.000Z'
  },
  {
    id: '6',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@example.com',
    phone: '+1 (555) 789-0123',
    jobTitle: 'Marketing Manager',
    location: 'Chicago, IL',
    bio: 'Marketing manager with 8+ years of experience in digital marketing and brand strategy. MBA from Northwestern.',
    createdAt: '2024-02-20T13:45:00.000Z'
  }
]

// Function to seed demo data
export const seedDemoData = () => {
  const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
  if (existingUsers.length === 0) {
    localStorage.setItem('users', JSON.stringify(demoUsers))
    return demoUsers
  }
  return existingUsers
}
