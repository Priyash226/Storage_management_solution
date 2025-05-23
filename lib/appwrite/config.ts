export const appwriteConfig = {
    endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
    filescollectionId: process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION!,
    userCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
    bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
    secretKey: process.env.NEXT_APPWRITE_SECRET_KEY!,

}