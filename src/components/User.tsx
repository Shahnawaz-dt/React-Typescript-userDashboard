import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './User.css';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserProfileComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: users, isLoading, isError, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      return data;
    },
  });

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;
  if (!users || users.length === 0) return <p>No users found.</p>;

  const currentUser = users[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % users.length); 
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + users.length) % users.length);
  };

  return (
    <div className="user-profile" style={{ maxWidth: '600px', margin: '0 auto', padding: '50px' }}>
      <h1>User Details</h1>
      <h2>Welcome, {currentUser.name}!</h2>
      <p><strong>Username:</strong> {currentUser.username}</p>
      <p><strong>Email:</strong> {currentUser.email}</p>
      <p><strong>Phone:</strong> {currentUser.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${currentUser.website}`} target="_blank" rel="noopener noreferrer">{currentUser.website}</a></p>
      <p><strong>Company:</strong> {currentUser.company.name}</p>
      <p><strong>Address:</strong> {currentUser.address.street}, {currentUser.address.suite}, {currentUser.address.city}</p>

      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
        <button 
            onClick={handlePrevious} 
            style={{ 
                padding: '10px 20px', 
                fontSize: '16px', 
                backgroundColor: '#3182ce', 
                color: 'white', 
                border: 'none', 
                borderRadius: '6px', 
                cursor: 'pointer' 
            }}
>
  ← Previous
</button>

        <span style={{ alignSelf: 'center', fontWeight: 'bold' }}>
          User {currentIndex + 1} of {users.length}
        </span>

        <button 
  onClick={handleNext} 
  style={{ 
    padding: '10px 20px', 
    fontSize: '16px', 
    backgroundColor: '#3182ce', 
    color: 'white', 
    border: 'none', 
    borderRadius: '6px', 
    cursor: 'pointer' 
  }}
>
  → next
</button>
      </div>
    </div>
  );
};

export default UserProfileComponent;