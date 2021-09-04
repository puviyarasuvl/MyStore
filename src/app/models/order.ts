export type Order = {
    id: number;
    userid: string;
    status: string;
    total: number;
    createddate: string;
};

export type OrderProduct = {
    id: number;
    orderid: number;
    productid: number;
    quantity: number;
};

export type OrderDetails = {
    userId: string;
    orderId: number;
    orderStatus: string;
    total: number;
    createdDate: string;
    products: [
        {
            productId: number;
            quantity: number;
        }
    ];
};
