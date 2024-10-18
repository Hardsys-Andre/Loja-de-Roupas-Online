// UserList.jsx
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://my-api-production-1531.up.railway.app/user');
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div className='mt-[50px] mx-5'>
      <h1 className='text-2xl w-[100%] text-center font-bold bg-gradient-to-r from-primaryGreen via-primaryGreen to-secondaryGreen'>Lista de Usuários cadastrados</h1>
      <ul className='flex flex-col mt-[50px] gap-2'>
        {users.map(user => (
          <li key={user.id}># {user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
