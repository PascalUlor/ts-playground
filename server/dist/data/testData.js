"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userDb = [
    {
        id: 1,
        fullName: 'Don Pascal',
        email: 'pc@yahoo.com',
        userName: 'Pascal',
        password: '123'
    },
    {
        id: 2,
        fullName: 'Clark Kent',
        email: 'clark@gmail.com',
        userName: 'Emeka',
        password: '453'
    }
];
const businessData = [
    {
        id: 1,
        businessName: 'SlimTrader',
        email: 'slimtrader@gmail.com',
        category: 'IT',
        location: 'Lagos',
        Address: '123 V.I Lagos',
        Details: 'Business Details must be between 20 to 1000 characters'
    },
    {
        id: 2,
        businessName: 'interswitch',
        email: 'interswitch@gmail.com',
        category: 'finance',
        location: 'Lagos',
        Address: '40 V.I Lagos',
        Details: 'Business Details must be between 20 to 1000 characters'
    }
];
const reviewsData = [
    {
        id: 1,
        reviewDetail: 'Quality',
        userId: 3,
        businessId: 1
    },
    {
        id: 2,
        reviewDetail: 'Impressive',
        userId: 3,
        businessId: 1
    },
    {
        id: 3,
        reviewDetail: 'Nice',
        userId: 3,
        businessId: 3
    },
    {
        id: 4,
        reviewDetail: 'Bad',
        userId: 1,
        businessId: 2
    },
    {
        id: 5,
        reviewDetail: 'Favourable',
        userId: 1,
        businessId: 2
    },
    {
        id: 6,
        reviewDetail: 'excellent',
        userId: 1,
        businessId: 2
    },
    {
        id: 7,
        reviewDetail: 'Great',
        userId: 1,
        businessId: 2
    }
];
const db = { userDb, businessData, reviewsData };
exports.default = db;
