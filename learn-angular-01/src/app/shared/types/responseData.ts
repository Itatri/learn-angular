export type responseData<D> = {
    data: D[] | D;
    message: string;
    status: number;
}