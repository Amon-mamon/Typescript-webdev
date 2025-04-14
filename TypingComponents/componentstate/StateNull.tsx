import React, { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
}

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  // user: User or null

  useEffect(() => {
    fetch('/api/me')
      .then(res => res.json())
      .then((data: User) => setUser(data));
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl">{user.name}</h1>
      <p>ID: {user.id}</p>
    </div>
  );
}
