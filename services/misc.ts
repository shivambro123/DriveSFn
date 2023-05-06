import axios, { AxiosResponse } from "axios";
const newsletterHost = "https://async-back.vercel.app/api/";
export const subscribeToNewsletter = (data: any): Promise<AxiosResponse> => {
  return axios.post(`${newsletterHost}createSubscription`, data);
};
