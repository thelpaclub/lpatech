import mongoose, { Schema, Document } from 'mongoose';

export interface IEnquiry extends Document {
    jobTitle: string;
    companyName: string;
    description: string;
    url: string;
}

const JobSchema = new Schema<IEnquiry>({
    jobTitle: { type: String, required: true },
    companyName: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Jobs || mongoose.model<IEnquiry>('Jobs', JobSchema);
