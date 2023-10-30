import RoleType from './RoleType.model';
import User from './User.model';

interface Profile {
  id: number;
  role: RoleType;
  user: User;
}

export default Profile;
