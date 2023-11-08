export interface ITokens {
    token: string,
    expires: string,
}

export interface IUserDTO {
    id: string,
    name: string,
    email: string,
    role: 'user' | 'admin',
    isEmailVerified?: false,
    tokens: {
        access: ITokens,
        refresh: ITokens
    }
};
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTRhMTcyYmEwZmJjOTI1NTRkNWZkYzkiLCJpYXQiOjE2OTkzNjk1NzUsImV4cCI6MTY5OTM3MTM3NSwidHlwZSI6ImFjY2VzcyJ9.cJeSBKQA1OhtEI9epXzNBRizph5Whf1SzsVGBeyDpvk",


// FE> 
// Limite de 500 > FE BE
// Tooltip DR
// Color picker
// Angular update
// ListKey toggle