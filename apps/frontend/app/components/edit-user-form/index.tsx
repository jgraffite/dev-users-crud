import { useActionState, useEffect, useState } from "react";
import { User } from "../../shared/models/user";
import Button from "../button";

interface EditUserFormProps { 
  user?: User;
  onSubmit: (values: any) => void,
}

const EditUserForm: React.FC<EditUserFormProps> = ({user, onSubmit}) => {

  const [values, setValues] = useState<any>({});

  const fields = [
    'firstName',
    'lastName',
    'email',
    'password'
  ];

  const [, submitAction, ] = useActionState(
    async (previousState: any, formData: FormData) => {
      let newValues = {};
      fields.forEach(field => newValues = {...newValues, [field]: formData.get(field)});
      onSubmit(newValues);
    },
    null,
  );

  const onChangeField = (field: string, value: string) => {
    setValues({...values, [field]: value});
  }

  useEffect(() => {
    if (!user) {
      return;
    }

    let newValues = {};
    fields.forEach(field => newValues = {...newValues, [field]: user[field]});
    setValues(newValues);
  }, [user]);

  return (
    <form action={submitAction}>
      <div className="p-5 m-2 border-1 border-grey">Nome: <input type="text" className="ml-5 p-2 bg-white" onChange={(e) => onChangeField('firstName', e.target.value)} name="firstName" value={values.firstName} /></div>
      <div className="p-5 m-2 border-1 border-grey">Sobrenome: <input type="text" className="ml-5 p-2 bg-white" name="lastName" onChange={(e) => onChangeField('lastName', e.target.value)} value={values.lastName} /></div>
      <div className="p-5 m-2 border-1 border-grey">E-mail: <input type="email" className="ml-5 p-2 bg-white" name="email" onChange={(e) => onChangeField('email', e.target.value)} value={values.email} /></div>
      <div className="p-5 m-2 border-1 border-grey">Senha: <input type="password" className="ml-5 p-2 bg-white" name="password" onChange={(e) => onChangeField('password', e.target.value)} value={values.password} /></div>

      <Button type="submit" onClick={() => {}}>Salvar</Button>
    </form>
  )
}

export default EditUserForm;
