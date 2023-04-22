export interface Vehicle {
  body_style: string[];
  categories: [];
  details_image: string[];
  id: string[];
  image: string[];
  make: string[];
  mileage: number[];
  model: string[];
  model_year: string[];
  new_used_flag: string[];
  product_financials: [];
  trim: string[];
}

export interface ProductFinantials {
  monthly_payment_cents: string;
  // monthly_payment_cents: string;
}
