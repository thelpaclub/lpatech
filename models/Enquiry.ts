import mongoose, { Schema, Document } from 'mongoose';

export interface IEnquiry extends Document {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const EnquirySchema = new Schema<IEnquiry>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Enquiry || mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
