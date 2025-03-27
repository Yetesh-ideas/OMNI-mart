
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Mock user database (in a real app, this would be in a backend)
const mockUsers = [
  { id: '1', name: 'Test User', email: 'test@example.com', password: 'password123' }
];

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in localStorage on initial load
    const savedUser = localStorage.getItem('omnistore_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate network request
    setIsLoading(true);
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const foundUser = mockUsers.find(u => u.email === email && u.password === password);
        
        if (foundUser) {
          const userData = {
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email,
            isLoggedIn: true
          };
          setUser(userData);
          localStorage.setItem('omnistore_user', JSON.stringify(userData));
          setIsLoading(false);
          resolve();
        } else {
          setIsLoading(false);
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

  const signup = async (name: string, email: string, password: string) => {
    // Simulate network request
    setIsLoading(true);
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const userExists = mockUsers.some(u => u.email === email);
        
        if (userExists) {
          setIsLoading(false);
          reject(new Error('User already exists with this email'));
        } else {
          const newId = String(mockUsers.length + 1);
          mockUsers.push({ id: newId, name, email, password });
          
          const userData = {
            id: newId,
            name,
            email,
            isLoggedIn: true
          };
          
          setUser(userData);
          localStorage.setItem('omnistore_user', JSON.stringify(userData));
          setIsLoading(false);
          resolve();
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('omnistore_user');
    localStorage.removeItem('omnistore_cart');
    localStorage.removeItem('omnistore_wishlist');
  };

  return (
    <UserContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
