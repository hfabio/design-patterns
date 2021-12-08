import PermissionType from "./PermissionType"

interface DataBaseItem {
  email: string;
  password: string;
  persmission: PermissionType;
}

const DataBase: DataBaseItem[] = [
  {
    email: 'helton_fabio@hotmail.com',
    password: '1234',
    persmission: PermissionType.USER
  },
  {
    email: 'heltonfabio@outlook.com',
    password: '123456',
    persmission: PermissionType.ADMIN
  },
]


export default DataBase