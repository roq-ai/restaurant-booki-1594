import { MenuInterface } from 'interfaces/menu';
import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description_update?: string;
  name_update: string;
  created_at?: any;
  updated_at?: any;
  user_id_update: string;
  tenant_id: string;
  menu?: MenuInterface[];
  table?: TableInterface[];
  user?: UserInterface;
  _count?: {
    menu?: number;
    table?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description_update?: string;
  name_update?: string;
  user_id_update?: string;
  tenant_id?: string;
}
