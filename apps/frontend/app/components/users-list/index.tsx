'use client';
import React, { useEffect } from 'react';
import UserCard from '../user-card';
import { Lead } from '../../shared/models/lead';
import Loading from '../loading';
import { useGetAllUsers } from '../../hooks/use-users';

interface UsersListProps {}

const UsersList: React.FC<UsersListProps> = () => {

  const {data: users, isLoading, refetch} = useGetAllUsers();

  const onRemove = () => {
    refetch();
  }

  if (isLoading) {
    return <div className="mt-5 w-full h-full flex justify-center items-center">
      <Loading />
    </div>;
  }

  if (!users || !users.length) {
    return <div className="mt-5 w-full h-full bg-[#CCC] p-5 flex justify-center items-center">
      Nenhum usuário para exibir
    </div>;
  }

  return (
    <>
      {users?.map((user, key) => (
        <UserCard onRemove={onRemove} user={user} key={key} i={key} />
      ))}
    </>
  );
};

export default UsersList;