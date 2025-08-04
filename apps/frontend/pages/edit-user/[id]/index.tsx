import { useRouter } from "next/router";
import css from "../../../app/page.module.css";
import EditUserForm from "../../../app/components/edit-user-form";
import { updateUser } from "../../../app/services/backend-comunication.service";
import { useGetUser } from "../../../app/hooks/use-users";
import { useEffect, useState } from "react";

export default function EditUserPage() {

  const router = useRouter();
  const [userId, setUserId] = useState(0);

  const { data: user, isLoading, error, refetch } = useGetUser(userId);

  const onSubmit = async (values: any) => {
    await updateUser(userId as number, values);
    alert('Usuário editado com sucesso');
    // router.push('/')
  }

  useEffect(() => {
    if (typeof router.query.id === 'string')
      setUserId(+router.query.id);
  }, [router.query]);

  useEffect(() => {
    refetch();
  }, [userId]);

  return (
    <div className={css.page}>
      <h1 className="text-3xl">Editar usuário</h1>
      <br />
      <EditUserForm onSubmit={onSubmit} user={user} />  
    </div>
  )
}