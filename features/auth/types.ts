
export type AuthResponse = {
    success: boolean;
    message: string;
}

export type LoginData = {
    email: string;
    password: string;
}

export type RegisterData = {
    email: string;
    password: string;
    confirmPassword: string;
};

export enum AuthError {
    OAuthAccountNotLinked = "OAuthAccountNotLinked",
    AccessDenied = "AccessDenied",
    InvalidCredentials = "InvalidCredentials",
    SessionExpired = "SessionExpired",
    ProviderNotSupported = "ProviderNotSupported",
    TooManyRequests = "TooManyRequests",
    NetworkError = "NetworkError",
    UnknownError = "UnknownError",
    OAuthCallbackError = "OAuthCallbackError",
}