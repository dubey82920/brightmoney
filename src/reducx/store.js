import { configureStore } from "@reduxjs/toolkit";
import billslice from "./billslice";
export default configureStore({
    reducer : {
        billing : billslice
    }
})

// {
//     "bills": [
//       {
//         "id": 1,
//         "description": "House rent",
//         "category": "Food & Dining",
//         "amount": "35900",
//         "date": "01-03-2020",
//         "status": "Paid"
//       },
//       {
//         "id": 2,
//         "description": "House rent",
//         "category": "Food & Dining",
//         "amount": "35900",
//         "date": "01-03-2020",
//         "status": "Paid"
//       },
//       {
//         "id": 3,
//         "description": "House rent",
//         "category": "Food & Dining",
//         "amount": "35900",
//         "date": "01-03-2020",
//         "status": "Paid"
//       },
//       {
//         "id": 4,
//         "description": "House rent",
//         "category": "Food & Dining",
//         "amount": "35900",
//         "date": "01-03-2020",
//         "status": "Paid"
//       },
//       {
//         "id": 5,
//         "description": "Tuition",
//         "category": "education",
//         "amount": "2200",
//         "date": "01-12-2020",
//         "status": "Unpaid"
//       },
//       {
//         "id": 6,
//         "description": "Laundry",
//         "category": "Personal Care",
//         "amount": "320",
//         "date": "01-14-2020",
//         "status": "Unpaid"
//       },
//       {
//         "id": 7,
//         "description": "Vacation",
//         "category": "Travel",
//         "amount": "3430",
//         "date": "01-18-2020",
//         "status": "Paid"
//       }
//     ]
//   }