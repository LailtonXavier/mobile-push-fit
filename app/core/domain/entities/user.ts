import { Activity } from './activity';

export interface User {
  id: string;
  name: string;
  email: string;
  photo: string | null;
  activities?: Activity[]
}
