import React, { useState } from 'react';

interface Profile {
  name: string;
  age: number;
  email: string;
}

export default function UserInfo() {
  const [profile, setProfile] = useState<Profile>({
    name: 'Vince',
    age: 22,
    email: 'vince@example.com',
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{profile.name}</h1>
      <p>Age: {profile.age}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}
