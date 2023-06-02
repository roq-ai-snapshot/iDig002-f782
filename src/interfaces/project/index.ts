import { UserProjectInterface } from 'interfaces/user-project';
import { ExcavatorInterface } from 'interfaces/excavator';

export interface ProjectInterface {
  id?: string;
  name: string;
  location: string;
  soil_condition: string;
  outcome?: string;
  excavator_id: string;
  created_at?: Date;
  updated_at?: Date;
  user_project?: UserProjectInterface[];
  excavator?: ExcavatorInterface;
  _count?: {
    user_project?: number;
  };
}
