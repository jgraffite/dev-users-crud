import css from "../../app/page.module.css";
import EditUserForm from "../../app/components/edit-user-form";
import { createUser } from "../../app/services/backend-comunication.service";

export default function NewUserPage() {


  const onSubmit = async (values: any) => {
    await createUser(values);
  }

  return (
    <div className={css.page}>
      <h1 className="text-3xl">Novo usuário</h1>
      <br />
      <EditUserForm onSubmit={onSubmit} />  
    </div>
  )
}