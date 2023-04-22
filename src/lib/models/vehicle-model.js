import { Vehicle } from "../interfaces/vehicle";

export default class VehicleModel {
  constructor(data) {
    const body_style = data?.body_style;
    const categories = data?.categories;
    const details_image = data?.details_image;
    const id = data?.id;
    const image = data?.image;
    const make = data?.make;
    const mileage = data?.mileage;
    const model = data?.model;
    const model_year = data?.model_year;
    const new_used_flag = data?.new_used_flag;
    const product_financials = data?.product_financials.map((item) => {
      return {
        monthly_payment_cents: item?.monthly_payment_cents,
        start_fee_cents: item?.start_fee_cents,
      };
    });
    const trim = data?.trim;
  }
}
