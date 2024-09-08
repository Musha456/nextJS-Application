const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD

export const connectStr = "mongodb+srv://"+username+":"+password+"@cluster0.z9zsmht.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0";