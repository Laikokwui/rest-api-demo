import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CustomerSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
