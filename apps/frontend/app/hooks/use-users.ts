import { useQuery } from "@tanstack/react-query";
import { User } from "../shared/models/user";

export const useGetAllUsers = () => {
  return useQuery<User[]>({
    queryKey: ['allUsersData'],
    queryFn: () =>
      fetch('http://localhost:3001/users').then((res) =>
        res.json(),
      ),
  });
}

export const useGetUser = (id: number) => {
  return useQuery<User>({
    queryKey: ['userData', id],
    enabled: true,
    queryFn: () =>
      fetch(`http://localhost:3001/users/${id}`).then((res) =>
        res.json(),
      ),
  });
}

// export const useUpdateUser = (id: number, user: User) => {
//   return useQuery<User[]>({
//     queryKey: ['updateUser'],
//     enabled: false,
//     queryFn: () =>
//       fetch(
//         `http://localhost:3001/users/${id}`,
//         {
//           method: 'POST',
//           body: JSON.stringify(user),
//           headers: {
//             'Content-type': 'application/json'
//           }
//         }
//       ).then((res) =>
//         res.json(),
//       ),
//   });
// }