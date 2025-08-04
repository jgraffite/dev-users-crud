'use client';
import css from "../app/page.module.css";
import { useState } from "react";
import UsersList from "../app/components/users-list";
import Button from "../app/components/button";
import { useRouter } from "next/router";


export default function Home() {


  const router = useRouter();
  const goCreateUser = () => {
    router.push(`/new-user`)
  }

  return (
    <div className={css.page}>
      <div className="card-footer mt-5 px-6 flex items-center justify-end gap-2">
        <Button onClick={() => goCreateUser()}>Criar novo usuário</Button>
      </div>

      <UsersList />
    </div>
  );
}
