import React from 'react';
import css from './style.module.css';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Button from '../button';
import ProfilePhoto from '../profile-photo';
import { Status } from '../../shared/enums/status';
import { User } from '../../shared/models/user';
import { removeUser } from '../../services/backend-comunication.service';
import { useRouter } from 'next/router';

interface UserCardProps {
  user: User;
  i: number;
  onRemove: () => void;
}

const CardBodyItem: React.FC<any> = ({children, noBorder,}) => {
  return (
    <div className={`${css['card-body-item']} gap-x-5 flex items-center ${!noBorder ? 'border-y-1 border-y-gray-200' : 'border-y-0'} px-6 py-3 text-gray-600`}>
      {children}
    </div>
  );
}

const UserCard: React.FC<UserCardProps> = ({ user, onRemove, i }) => {

  const router = useRouter();

  const getDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    const date = new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "long",
    }).format(dateObj);

    const time = new Intl.DateTimeFormat("pt-BR", {
      timeStyle: "short",
    }).format(dateObj);

    return `${date} - ${time}`;
  }

  const deleteUser = async () => {
    try {
      if (!window.confirm('Deseja prosseguir com a exclusão?')) {
        return;
      }
      
      await removeUser(user.id);
      onRemove();
    } catch (error) {
      console.error("Error updating lead status:", error);
      return false;
    }
  }

  const goEdit = () => {
    router.push(`/edit-user/${user.id}`)
  }

  return (
    <div className="bg-white shadow-md pb-6 my-5">
      <div className="card-header flex p-6">
        <ProfilePhoto userName={user.firstName} i={i} />
        <div className="ml-4 flex items-center">
          <div className="date text-lg font-bold">{user.firstName}</div>
        </div>
      </div>
      <div className="card-body">
        <CardBodyItem>
          <a href={`mailto:${user.email}`}><LocalPhoneOutlinedIcon /> <span className="text-[#ff6600e1] font-bold">{user.email}</span> </a>
        </CardBodyItem>
        {user.createdAt && (
          <CardBodyItem>
            <div><LocalPhoneOutlinedIcon /> Criado em <span className="text-[#ff6600e1] font-bold">{getDate(user.createdAt)}</span> </div>
          </CardBodyItem>
        )}
      </div>
      <div className="card-footer mt-5 px-6 flex items-center gap-2">
        <Button onClick={() => goEdit()}>Editar</Button>
        <Button onClick={() => deleteUser()} variant="secondary">Excluir</Button>
      </div>
    </div>
  );
};

export default UserCard;