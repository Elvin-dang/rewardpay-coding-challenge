export interface AccountData {
  account_category: string;
  account_code: string;
  account_currency: string;
  account_identifier: string;
  account_status: string;
  value_type: string;
  account_name: string;
  account_type: string;
  account_type_bank: string;
  system_account: string;
  total_value: number;
}

export interface Data {
  object_category: string;
  connection_id: string;
  user: string;
  object_creation_date: string;
  data: AccountData[];
  currency: string;
  object_origin_type: string;
  object_origin_category: string;
  object_type: string;
  object_class: string;
  balance_date: string;
}
