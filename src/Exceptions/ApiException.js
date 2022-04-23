class ApiException extends Error {
    constructor(message, status = 400) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
    }
}

export default ApiException;