// src/components/UserList.tsx
import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styles from './UserList.module.css';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

type FilterType = 'all' | 'company' | 'city';

const UserList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const { data: users, isLoading, isError, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      return data;
    },
  });

  const filteredUsers = useMemo(() => {
    if (!users) return [];

    const lowerSearch = searchTerm.toLowerCase().trim();
    if (!lowerSearch) return users;

    return users.filter((user) => {
      if (filterType === 'all') {
        return (
          user.name.toLowerCase().includes(lowerSearch) ||
          user.company.name.toLowerCase().includes(lowerSearch) ||
          user.address.city.toLowerCase().includes(lowerSearch)
        );
      }
      if (filterType === 'company') {
        return user.company.name.toLowerCase().includes(lowerSearch);
      }
      if (filterType === 'city') {
        return user.address.city.toLowerCase().includes(lowerSearch);
      }
      if (filterType === 'email') {
        return user.email.toLowerCase().includes(lowerSearch);
      }
      return false;
    });
  }, [users, searchTerm, filterType]);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (isLoading) return <div className={styles.loading}>Loading users...</div>;
  if (isError) return <div className={styles.error}>Error: {(error as Error).message}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>All Users ({users?.length || 0})</h2>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as FilterType)}
          className={styles.filterSelect}
        >
          <option value="all">All Fields</option>
          <option value="company">Company Name</option>
          <option value="city">City</option>
          <option value="email">Email</option>
        </select>
      </div>

      <ul className={styles.userList}>
        {filteredUsers.length === 0 ? (
          <li className={styles.noResults}>No results found</li>
        ) : (
          filteredUsers.map((user) => (
            <li key={user.id} className={styles.userItem}>
              <div className={styles.summary}>
                <div className={styles.userInfo}>
                  <h3 className={styles.name}>{user.name}</h3>
                  <p className={styles.company}>{user.company.name}</p>
                  <p className={styles.city}>{user.address.city}</p>
                  <p className={styles.email}>{user.email}</p>
                </div>
                <button
                  onClick={() => toggleExpand(user.id)}
                  className={styles.detailButton}
                >
                  {expandedId === user.id ? 'Hide Details ▲' : 'View Details ▼'}
                </button>
              </div>

              {/* Expandable Details Section */}
              <div
                className={`${styles.detailsSection} ${
                  expandedId === user.id ? styles.expanded : ''
                }`}
              >
                <div className={styles.detailsGrid}>
                  <div>
                    <strong>Username:</strong> {user.username}
                  </div>
                  <div>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </div>
                  <div>
                    <strong>Phone:</strong> {user.phone}
                  </div>
                  <div>
                    <strong>Website:</strong>{' '}
                    <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                      {user.website}
                    </a>
                  </div>
                  <div>
                    <strong>Full Address:</strong><br />
                    {user.address.street}, {user.address.suite}<br />
                    {user.address.city}, {user.address.zipcode}
                  </div>
                  <div>
                    <strong>Company Catch Phrase:</strong><br />
                    <em>"{user.company.catchPhrase}"</em>
                  </div>
                  <div>
                    <strong>Business Focus:</strong> {user.company.bs}
                  </div>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default UserList;